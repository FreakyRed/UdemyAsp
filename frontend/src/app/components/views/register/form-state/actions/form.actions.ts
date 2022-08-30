import { createAction, props } from '@ngrx/store';
import { FormState } from '../form-state.interface';

export const formValueChange = createAction(
  '[Form] Value Changed',
  props<FormState>()
);
