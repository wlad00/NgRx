import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";
import {PageCalculatorComponent} from "./page-calculator.component";
import {CalculatorModule} from "./actions-state";


const routes: Routes = [
  {path: '', component: PageCalculatorComponent}
];

@NgModule({
  declarations: [
    PageCalculatorComponent
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
    CalculatorModule
  ]
})
export class PageCalculatorModule {
}
