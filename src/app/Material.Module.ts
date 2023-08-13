import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatRadioModule} from '@angular/material/radio'
import {MatDialogModule} from '@angular/material/dialog'
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatSortModule} from '@angular/material/sort'
import {MatSnackBarModule} from '@angular/material/snack-bar'

@NgModule({
    exports:[
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule,
        MatRadioModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule
    ]
})
export class MaterialModule{}