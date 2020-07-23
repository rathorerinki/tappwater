import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { NodataComponent } from './nodata/nodata.component';
import { ReportComponent } from './report/report.component';
import { CheckComponent } from './check/check.component';
import { ComfirmationComponent } from './comfirmation/comfirmation.component';

const routes: Routes = [
// start for english
  // { path: '', component: LoginComponent },
  { path: '', component: CreateprofileComponent },
  { path: 'Nodata/:id', component: NodataComponent },
  { path: 'Report/:id/:postcode', component: ReportComponent },
  { path: 'check/:id/:postcode', component: CheckComponent },
  { path: 'confirmation', component: ComfirmationComponent },
//end english


// start for english
  // { path: '', component: LoginComponent },
  { path: '', component: CreateprofileComponent },
  { path: 'Nodata/:id/:country', component: NodataComponent },
  { path: 'tap-water-quality-report/:id/:postcode', component: ReportComponent },
  { path: 'check/:id/:postcode', component: CheckComponent },
  { path: 'confirmation', component: ComfirmationComponent },
//end english

//spanish
{ path: 'calidad-del-agua/:id/:postcode', component: ReportComponent },
{ path: 'componentes-de-agua/:id/:postcode', component: CheckComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
