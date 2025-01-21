import { createSelector } from '@ngrx/store';
import { selectAppState } from '../app.selectors';
import { AppState } from '../../state/app.state';

export const selectExhibitorState = createSelector(
  selectAppState,
  (state: AppState) => state.exhibitorState.exhibitors
);

export const selectExhibitorByIndex = createSelector(
  selectAppState,
  (state: AppState, props: { index: number }) => state.exhibitorState.exhibitors[props.index]
);
