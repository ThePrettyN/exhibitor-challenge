import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';

export const selectAppState = createFeatureSelector<AppState>('app');
