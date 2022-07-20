import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TextState } from './store/Reducers/text.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrk';
  text$ = this.store.select('text')
  constructor(private store: Store<TextState>){

  }
}
