import { on } from '@ngrx/store';
import { ExhibitorAction } from '../../actions/main/exhibitor.action';
import { AppState } from '../../state/app.state';

export function ExhibitorStateReducer() {
  return [
    on(ExhibitorAction.AddExhibitorAction, (state: AppState): AppState => {
      return {
        ...state,
        exhibitorState: {
          ...state.exhibitorState,
          exhibitors: [
            ...state.exhibitorState.exhibitors,
            {
              index: state.exhibitorState.exhibitors.length,
              email: '',
              nameOnBadge: '',
              jobTitle: '',
              country: '',
              companyOnBadge: '',
              isValid: false,
            },
          ],
        },
      };
    }),
    on(ExhibitorAction.InitializeExhibitorAction, (state: AppState): AppState => {
      return {
        ...state,
        exhibitorState: {
          ...state.exhibitorState,
          exhibitors: [
            {
              index: 0,
              email: '',
              nameOnBadge: '',
              jobTitle: '',
              country: '',
              companyOnBadge: '',
              isValid: false,
            },
          ],
        },
      };
    }),
    on(ExhibitorAction.ChangeExhibitorAction, (state: AppState, action): AppState => {
      return {
        ...state,
        exhibitorState: {
          ...state.exhibitorState,
          exhibitors: [
            ...state.exhibitorState.exhibitors.slice(0, action.data.index),
            action.data,
            ...state.exhibitorState.exhibitors.slice(action.data.index + 1),
          ],
        },
      };
    }),
    on(ExhibitorAction.SpliceExhibitorAction, (state: AppState, action): AppState => {
      if (state.exhibitorState.exhibitors.length <= 1) return { ...state };
      return {
        ...state,
        exhibitorState: {
          ...state.exhibitorState,
          exhibitors: [
            ...state.exhibitorState.exhibitors.slice(0, action.index),
            ...state.exhibitorState.exhibitors.slice(action.index + 1),
          ],
        },
      };
    }),
    on(ExhibitorAction.ClearExhibitorAction, (state: AppState): AppState => {
      return {
        ...state,
        exhibitorState: {
          ...state.exhibitorState,
          exhibitors: [],
        },
      };
    }),
  ];
}
