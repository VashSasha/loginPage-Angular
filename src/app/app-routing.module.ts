import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "resume", component: ResumeComponent, canActivate: [AuthGuard] },
  {
    path: "",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
