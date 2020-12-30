import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CounterComponent } from './counter/counter.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FilterPipe,
    PostFormComponent,
    PostComponent,
    CounterComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
