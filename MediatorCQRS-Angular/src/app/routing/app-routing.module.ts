import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from '../components/create-user/create-user.component';
import { GetTestComponent } from '../components/get-test/get-test.component';

const routes: Routes = [
  { path: 'getTest', component: GetTestComponent },
  { path: 'createUser', component: CreateUserComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
