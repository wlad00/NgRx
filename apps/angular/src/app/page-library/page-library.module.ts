import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageLibraryComponent} from './page-library.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', component: PageLibraryComponent}
];

@NgModule({
  declarations: [
    PageLibraryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PageLibraryModule {
}
