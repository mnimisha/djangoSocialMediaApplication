import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ChatroomComponent } from './component/chatroom/chatroom.component';
import { AllUsersComponent } from './component/all-users/all-users.component';
import { MainComponent } from './component/main/main.component';
import { LeftchildComponent } from './component/main/leftchild/leftchild.component';
import { RightchildComponent } from './component/main/rightchild/rightchild.component';
import { ChatchildComponent } from './component/main/chatchild/chatchild.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'home', component: HomeComponent},
  { path: 'chat', component: ChatroomComponent},
  { path: 'allusers', component: AllUsersComponent},
  { path: 'main', component: MainComponent,
  children: [  
    { path: 'main', component: MainComponent},
  { path: 'main', component: MainComponent},
  { path: 'main', component: MainComponent},]
  
   },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
