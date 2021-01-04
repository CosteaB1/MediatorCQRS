import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { HttpClientComponent } from './components/http-client/http-client.component';

const routes: Routes = [
  { path: 'formvalidation', component: FormValidationComponent },
  { path: 'HtppClient', component: HttpClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
