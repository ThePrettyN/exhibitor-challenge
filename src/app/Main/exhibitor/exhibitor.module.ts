import { NgModule } from '@angular/core';
import { ExhibitorComponent } from './exhibitor.component';

import { CommonModule } from '@angular/common';
import { AddExhibitor } from './addExhibitor/addExhibitor.component';
import { AddButton } from './addButton/addButton.component';
import { StoreModule } from '@ngrx/store';
import { mainReducer } from '../../stores/reducers/main.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ExhibitorComponent, AddExhibitor, AddButton],
  imports: [CommonModule, StoreModule.forRoot({ app: mainReducer }), ReactiveFormsModule, HttpClientModule],
  exports: [ExhibitorComponent],
})
export class ExhibitorModule {}
