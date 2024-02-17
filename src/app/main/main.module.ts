import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';



@NgModule({
  declarations: [
    MainViewComponent,
    RegistrationComponent,
    AdditionalInfoComponent,
    BillingInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
