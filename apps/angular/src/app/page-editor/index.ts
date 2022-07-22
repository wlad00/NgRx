import {createFeatureSelector} from "@ngrx/store";
import {StatePageEditor} from "@editor-actions";

export const editPageSelector
  = createFeatureSelector<StatePageEditor>('PAGE-EDITOR');
