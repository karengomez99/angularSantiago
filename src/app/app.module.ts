import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/users/user.component';
import { UserDescriptionComponent } from './pages/user-description/user-description.component';
import { UsersService } from './pages/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
