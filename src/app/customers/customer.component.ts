import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();

  constructor(private formB: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.formB.group({
      firstName: '',
      lastName: '',
      email: '',
      sendCatalog: true 
    });
  }

  save(): void {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  populateTestData() {
    this.customerForm.patchValue({
      firstName: 'Ana',
      email: 'ana@outlook.com',
    })
  }
}
