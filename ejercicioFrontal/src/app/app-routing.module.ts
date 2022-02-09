import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { UpdateClientFormComponent } from './update-client-form/update-client-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'update-client-form', component: UpdateClientFormComponent },
  { path: 'client-details', component: ClientDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
