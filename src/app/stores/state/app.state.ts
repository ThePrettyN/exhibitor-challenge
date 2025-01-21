import { MainState } from './main/main.state';
import { ExhibitorState } from './main/exhibitor.state';

export interface AppState {
  mainState: MainState;
  exhibitorState: ExhibitorState;
}

export const initialState: Readonly<AppState> = {
  mainState: {
    eventType: 0,
    company: '',
  },
  exhibitorState: {
    exhibitors: [],
  },
};
