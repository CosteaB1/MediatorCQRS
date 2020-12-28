import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetTestComponent } from '../components/get-test/get-test.component';

const routes: Routes = [
  {
    path: 'getTest', component: GetTestComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
