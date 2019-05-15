import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { MyNavbarComponent } from './app-layout/my-navbar/my-navbar.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: 'analysis', component: MyNavbarComponent, children: [
      {
        path: '',
        loadChildren: './app-layout/app-layout.module#AppLayoutModule'
      }
    ]
  },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: 'signin', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
