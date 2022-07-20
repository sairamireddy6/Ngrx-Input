import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addText, getText } from '../store/actions/movie.action';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  value = ''
  constructor(private store: Store) { }

  ngOnInit(): void {

  }

  send(){
    this.store.dispatch(addText({text:this.value}))
  }

}
