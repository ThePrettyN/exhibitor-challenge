import { createReducer } from '@ngrx/store';
import { initialState } from '../state/app.state';
import { selectCompanyReducer } from './SelectCompany/selectCompany.reducer';
import { ExhibitorStateReducer } from './Exhibitor/exhibitor.reducer';
import * as _ from 'lodash';

export const mainReducer = createReducer(
  _.cloneDeep(initialState),
  ...selectCompanyReducer(),
  ...ExhibitorStateReducer()
);
