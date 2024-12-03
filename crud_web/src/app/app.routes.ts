import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { YamaComponent } from './yama/yama.component';

NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      CommonModule,
      CrudComponent
    ],
    bootstrap: [AppComponent]
  })

export const routes: Routes = [
    { path: '', redirectTo: '/yama', pathMatch: 'full' },
    { path: 'yama', component: YamaComponent },
    { path: 'crud', component: CrudComponent }
    
];
