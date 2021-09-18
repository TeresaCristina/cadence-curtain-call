import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { EvidencesComponent } from './tabs/evidences/evidences.component';
import { SuspectsComponent } from './tabs/suspects/suspects.component';
import { TheoriesComponent } from './tabs/theories/theories.component';
import { QuestionsComponent } from './tabs/questions/questions.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'evidences',        component: EvidencesComponent },
    { path: 'suspects',         component: SuspectsComponent },
    { path: 'theories',         component: TheoriesComponent },
    { path: 'questions',        component: QuestionsComponent },
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
