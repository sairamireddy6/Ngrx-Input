import { createAction, props } from "@ngrx/store";

export const getText = createAction('[Text] Get Text')
export const addText = createAction('[Text] Add Text', props<{text:any}>())
export const addTextSuccess = createAction('[Text] Add Text success', props<{text:any}>())