import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter.component';


const routes: Routes = [
  { path: '', component: CounterComponent }
];

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EditorModule { }
