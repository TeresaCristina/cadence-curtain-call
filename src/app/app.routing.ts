import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { EvidencesComponent } from './tabs/evidences/evidences.component';
import { SuspectsComponent } from './tabs/suspects/suspects.component';
import { TheoriesComponent } from './tabs/theories/theories.component';

import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './tabs/timeline/timeline.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: HomeComponent },
    { path: 'evidences',        component: EvidencesComponent },
    { path: 'suspects',         component: SuspectsComponent },
    { path: 'theories',         component: TheoriesComponent },
    { path: 'timeline',        component: TimelineComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
