import { Action, createReducer, on } from '@ngrx/store';
import { FormState, initialState } from '../form-state.interface';
import { formValueChange } from '../actions/form.actions';

const formReducer = createReducer(
  initialState,
  on(formValueChange, (state, { type, ...update }) => ({ ...state, ...update }))
);

export function reducer(state: FormState | undefined, action: Action) {
  return formReducer(state, action);
}

export const formFeatureKey = "form";
