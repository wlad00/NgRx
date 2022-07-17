import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EditorComponent} from './editor.component';
import {CounterComponent} from "./component-counter/counter.component";
import {LibraryComponent} from './component-library/library.component';
import {CounterModule} from "@page-editor/actions-state";


const routes: Routes = [
  {path: '', component: EditorComponent}
];

@NgModule({
  declarations: [
    EditorComponent, CounterComponent, LibraryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CounterModule
  ]
})
export class EditorModule {
}
