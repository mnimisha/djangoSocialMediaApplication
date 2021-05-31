import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { ServiceService } from './service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import { AuthinterceptorInterceptor, authInterceptorProviders} from './authinterceptor.interceptor';
import { ProfileComponent } from './component/profile/profile.component';
import { HomeComponent } from './component/home/home.component';
import { ChatroomComponent } from './component/chatroom/chatroom.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllUsersComponent } from './component/all-users/all-users.component';
import { MainComponent } from './component/main/main.component';
import { LeftchildComponent } from './component/main/leftchild/leftchild.component';
import { RightchildComponent } from './component/main/rightchild/rightchild.component';
import { ChatchildComponent } from './component/main/chatchild/chatchild.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    ChatroomComponent,
    AllUsersComponent,
    MainComponent,
    LeftchildComponent,
    RightchildComponent,
    ChatchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
