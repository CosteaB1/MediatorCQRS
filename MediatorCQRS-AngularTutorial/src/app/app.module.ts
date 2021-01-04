import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CounterComponent } from './counter/counter.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MaterialModule } from './material.module';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { HttpPostComponent } from './components/http-client/http-post/http-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FilterPipe,
    PostFormComponent,
    PostComponent,
    CounterComponent,
    FormValidationComponent,
    HttpClientComponent,
    HttpPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
