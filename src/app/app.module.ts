import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {RouterModule, Routes} from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {MatGridListModule} from '@angular/material/grid-list';

const routes: Routes = [
 

  {

    path: '',
    component : DashboardComponent
  },
 
 
  
  {
    path: 'game',
   component: AppComponent
  },
 
];

@NgModule({
  declarations: [

    DashComponent,
    AppComponent,
    CardComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,

    MatGridListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [DashComponent]
})
export class AppModule { }
