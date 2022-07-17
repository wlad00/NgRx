import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';

// import {PageLibraryModule} from "../../../page-library/page-library.module";

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule.forRoot([

      {
        path: 'home',
        loadChildren: () => import('./page-editor/editor.module').then(
          m => m.EditorModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',

      },
      {
        path: 'books',
        loadChildren: () =>
          import('@book-co/books-page').then((m) => m.BooksPageModule),
      },
      {
        path: 'page',
        loadChildren: () => import('./page-books/books.module').then(
          m => m.BooksModule)
      },

      {
        path: 'editor/:id',
        loadChildren: () => import('./page-editor/editor.module').then(
          m => m.EditorModule)
      },
      /* {
         path: 'library',
         loadChildren: () => import('@page-library/modal').then(m => m.PageLibraryModule)
       },*/
      {
        path: '**',
        redirectTo: 'home'
      },
    ]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 15,
    }),
    EffectsModule.forRoot([]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
