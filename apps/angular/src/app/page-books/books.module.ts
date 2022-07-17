import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from "./books.component";


const routes: Routes = [
  {path: '', component: BooksComponent}
];

@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BooksModule {
}
