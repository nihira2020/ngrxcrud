import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddassociateComponent } from '../addassociate/addassociate.component';
import { Associates } from 'src/app/Model/AssociateModel';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { getassociatelist } from 'src/app/Store/Associate/Associate.selector';
import { Openpopup, deleteassociate, getassociate, loadassociate } from 'src/app/Store/Associate/Associate.action';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private dialog: MatDialog, private store: Store) { }

  associatelist !: Associates[];
  dataSource: any;
  displayedColumns: string[] = ["code", "name", "email", "phone", "type", "address", "action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  ngOnInit(): void {
    this.store.dispatch(loadassociate());
    this.store.select(getassociatelist).subscribe(data => {
      this.associatelist = data;
      this.dataSource = new MatTableDataSource<Associates>(this.associatelist);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    })
  }


  FunctionAdd() {
    this.Openpopup(0, 'Create Associate');
  }

  removeassociate(code: number) {
    if(confirm('do you want to remove?')){
      this.store.dispatch(deleteassociate({ code: code }));
    }
  }
  editassociate(code: number) {
    this.Openpopup(code, 'Edit Associate');
    this.store.dispatch(getassociate({ code: code }));
  }

  Openpopup(code: any, title: any) {
    this.store.dispatch(Openpopup());
    this.dialog.open(AddassociateComponent, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code,
        isedit: code > 0 ? true : false
      }
    });
  }


}
