import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CompanyComponent } from './component/company/company.component';
import { MaterialModule } from './Material.Module';
import { AddassociateComponent } from './component/addassociate/addassociate.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { AssociateReducer } from './Store/Associate/Associate.reducer';
import { CombineReducer } from './Store/Combine.Reducer';
import { AssociateEffect } from './Store/Associate/Associate.effects';
import { AppEffects } from './Store/Global/App.Effects';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    AddassociateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    EffectsModule.forRoot([AssociateEffect,AppEffects]),
    StoreModule.forRoot({ associate: AssociateReducer }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
