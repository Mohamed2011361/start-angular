import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { PortfillioComponent } from './component/portfillio/portfillio.component';
import { StartAngularComponent } from './component/start-angular/start-angular.component';

const routes: Routes = [
  {path:'',redirectTo:'start-angular',pathMatch:'full'},
  {path:'start-angular',component:StartAngularComponent},
  {path:'portfillio',component:PortfillioComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
