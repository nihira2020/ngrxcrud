import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms'
import { Associates } from 'src/app/Model/AssociateModel';
import { Store } from '@ngrx/store';
import { addassociate, updateassociate } from 'src/app/Store/Associate/Associate.action';
import { getassociateobj } from 'src/app/Store/Associate/Associate.selector';

@Component({
  selector: 'app-addassociate',
  templateUrl: './addassociate.component.html',
  styleUrls: ['./addassociate.component.css']
})
export class AddassociateComponent implements OnInit {
  inputdata: any;
  constructor(private ref: MatDialogRef<AddassociateComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private builder: FormBuilder, private store: Store) {

  }
  ngOnInit(): void {
    this.inputdata = this.data;
    this.title = this.inputdata.title;
    this.isEdit = this.inputdata.isedit;
    this.store.select(getassociateobj).subscribe(res => {
      this.associateform.setValue({
        id: res.id, name: res.name, email: res.email, phone: res.mobile, address: res.address,
        group: res.customergroup, status: res.status, type: res.type
      });
    });
  }
  title = 'Create Associate';
  isEdit = false;

  associateform = this.builder.group({
    id: this.builder.control(0),
    name: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    address: this.builder.control(''),
    email: this.builder.control('', Validators.required),
    phone: this.builder.control('', Validators.required),
    type: this.builder.control('MNC', Validators.required),
    status: this.builder.control(true),
    group: this.builder.control('level1')
  });

  closepopup() {
    this.ref.close();
  }

  SaveAssociate() {
    if (this.associateform.valid) {
      const _input: Associates = {
        id: this.associateform.value.id as number,
        name: this.associateform.value.name as string,
        email: this.associateform.value.email as string,
        mobile: this.associateform.value.phone as string,
        address: this.associateform.value.address as string,
        type: this.associateform.value.type as string,
        customergroup: this.associateform.value.group as string,
        status: this.associateform.value.status as boolean,
      }
      if (this.isEdit) {
        this.store.dispatch(updateassociate({ inputdata: _input }));
      } else {
        this.store.dispatch(addassociate({ inputdata: _input }));
      }
      this.closepopup();


    }
  }


}
