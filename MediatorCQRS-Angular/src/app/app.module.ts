import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routing/app-routing.module';
import { GetTestComponent } from './components/get-test/get-test.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    NavigationBarComponent,
    AppComponent,
    GetTestComponent,
    CreateUserComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
