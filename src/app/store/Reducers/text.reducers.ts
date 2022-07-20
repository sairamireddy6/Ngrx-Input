import { createReducer, on } from "@ngrx/store"
import { addText, getText } from "../actions/movie.action"

export interface TextState {
    text: ReadonlyArray<any>
}

const initialSate: ReadonlyArray<any> = []


export const textReaducer = createReducer(
    initialSate,
    on(addText, (state , action)=> {
        console.log(action)
        return [state+action.text]
    })
)