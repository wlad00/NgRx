import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
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
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      /*{
        path: 'editor/:id',
        loadChildren: () =>
          import('./editor/editor.component').then((m) => m)
      },*/
      {
        path: 'books',
        loadChildren: () =>
          import('@book-co/books-page').then((m) => m.BooksPageModule),
      },

      { path: 'editor/:id',
        loadChildren: () => import('./editor/editor.module').then(
          m => m.EditorModule) },

      { path: 'counter',
        loadChildren: () => import('./counter/counter.module').then(
          m => m.EditorModule) },

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
export class AppModule {}
