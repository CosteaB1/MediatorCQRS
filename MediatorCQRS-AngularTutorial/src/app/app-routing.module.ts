import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { RoutingTestsComponent } from './components/routing-tests/routing-tests.component';
import { UserComponent } from './components/user/user.component';
import { UserResolver } from './components/user/user.resolver';

const routes: Routes = [
  { path: 'formvalidation', component: FormValidationComponent },
  { path: 'HtppClient', component: HttpClientComponent },
  { path: 'routingTest', component: RoutingTestsComponent },
  {
    path: 'HttpClient/:id',
    component: UserComponent,
    resolve: {
      userId: UserResolver
    }
  },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
