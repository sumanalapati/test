import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DdnService} from './ddn.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  myForm: FormGroup;
  displayedColumns: string[] = ['DDN_Lat', 'DDN_Long'];
  results$;
  constructor(public fb: FormBuilder, private ddnService: DdnService) {}

  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      edn: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]]
    });
  }
  ngOnInit(): void {
    this.reactiveForm();
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  submitForm() {
    console.log(this.myForm.value);
    this.ddnService.getDDN(this.myForm.value.edn).subscribe((data) => this.results$ = data);
  }


}
