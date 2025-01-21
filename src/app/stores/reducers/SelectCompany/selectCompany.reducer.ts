import { on } from '@ngrx/store';
import { SelectCompanyAction } from '../../actions/main/selectCompany.action';
import { AppState } from '../../state/app.state';

export function selectCompanyReducer() {
  return [
    on(SelectCompanyAction.SelectedCompanyAction, (state: AppState, action): AppState => {
      return {
        ...state,
        mainState: {
          ...state.mainState,
          eventType: action.eventType,
          company: action.company,
        },
      };
    }),
  ];
}
