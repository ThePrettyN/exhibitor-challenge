import { createSelector } from '@ngrx/store';
import { selectAppState } from '../app.selectors';
import { AppState } from '../../state/app.state';

export const selectCompanyOption = createSelector(selectAppState, (state: AppState) => {
  return {
    eventType: state.mainState.eventType,
    company: state.mainState.company,
  };
});
