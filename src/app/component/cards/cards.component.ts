import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {



todos  = [
  {
    todoName: "projet 1",
    todoStatus: true,
    image: "http://placehold.it/150"

  },
  {
    todoName: "projet 17",
    todoStatus: false,
    image: "http://placehold.it/150"

  },
  {
    todoName: "projet 2",
    todoStatus: false,
    image: "http://placehold.it/150"

  },
  {
    todoName: "projet 3",
    todoStatus: true,
    image: "http://placehold.it/150"

  },
  {
    todoName: "projet 4",
    todoStatus: false,
    image: "http://placehold.it/150"

  },
];

onChangeStatus(i: number){
  this.todos[i].todoStatus = !this.todos[i].todoStatus
}

  constructor() { }

  ngOnInit(): void {

  }

}
