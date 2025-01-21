import { MainComponent } from './main.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionDivModule } from './selection-div/selection-div.module';
import { ExhibitorModule } from './exhibitor/exhibitor.module';
import { StoreModule } from '@ngrx/store';

import { mainReducer } from '../stores/reducers/main.reducer';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SelectionDivModule, ExhibitorModule, StoreModule.forRoot({ app: mainReducer })],
  exports: [MainComponent],
})
export class MainModule {}
