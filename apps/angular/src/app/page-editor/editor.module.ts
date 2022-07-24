import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EditorComponent} from './editor.component';
// import {CounterComponent} from "./component-counter/counter.component";
// import {LibraryComponent} from './component-library/library.component';
import {ActionsEditorModule} from "@page-editor";
// import {BookTotalComponent} from "./component-library/books-total/book-total.component";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
// import {BookListComponent} from "./component-library/books-list/books-list.component";
// import {BooksDetailComponent} from "./component-library/book-detail/books-detail.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";
import {EffectsModule} from "@ngrx/effects";
import {CounterComponent} from "./src/components/component-counter/counter.component";
import {LibraryComponent} from "./src/components/component-library/library.component";
import {BookTotalComponent} from "./src/components/component-library/books-total/book-total.component";
import {BookListComponent} from "./src/components/component-library/books-list/books-list.component";
import {BooksDetailComponent} from "./src/components/component-library/book-detail/books-detail.component";
import {LibraryEffects} from "./src/actions/librarary/library.effects";
import {CounterEffects} from "./src/actions/counter/counter.effects";
import {LoadingEffects} from "./src/actions/loading/loading.effects";
// import {LibraryEffects} from "./actions-state/librarary/library.effects";
// import {CounterEffects} from "./actions-state/counter/counter.effects";


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
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatTabsModule,
    EffectsModule.forFeature([LibraryEffects, CounterEffects,LoadingEffects]),
    ActionsEditorModule
  ]
})
export class EditorModule {
}
