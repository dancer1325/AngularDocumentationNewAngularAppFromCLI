import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { NewDirectiveDirective } from './new-directive.directive';
import { NewPipePipe } from './new-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    NewDirectiveDirective,
    NewPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
