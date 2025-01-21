import { NgModule } from '@angular/core';
import { SelectionDivComponent } from './selection-div.component';
import { TopLabelComponent } from './top-label/top-label.component';
import { SelectDivComponent } from './select-div/select-div.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { mainReducer } from '../../stores/reducers/main.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SelectionDivComponent, TopLabelComponent, SelectDivComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, StoreModule.forRoot({ store: mainReducer })],
  exports: [SelectionDivComponent],
})
export class SelectionDivModule {}
