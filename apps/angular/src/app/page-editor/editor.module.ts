import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EditorComponent} from './editor.component';
import {CounterComponent} from "./component-counter/counter.component";
import {LibraryComponent} from './component-library/library.component';
import {CounterModule} from "@page-editor/actions-state";
import {BookTotalComponent} from "./component-library/books-total/book-total.component";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {BookListComponent} from "./component-library/books-list/books-list.component";
import {BooksDetailComponent} from "./component-library/book-detail/books-detail.component";
import {ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  {path: '', component: EditorComponent}
];

@NgModule({
  declarations: [
    EditorComponent, CounterComponent, LibraryComponent, BookTotalComponent, BookListComponent, BooksDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CounterModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule
  ]
})
export class EditorModule {
}
