import { Todo } from './../interfaces/todo';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'fold laundry',
      completed: false,
    },
    {
      task: 'exercise',
      completed: false,
    },
    {
      task: 'bake cookies',
      completed: true,
    },
  ];

  searchTerm: string;

  showIndex: number;
  //can check which showIndex by doing showIndex:number=1;
  constructor() {}

  setShowIndex(index: number) {
    this.showIndex = index;
  }

  //??
  resetShowIndex() {
    this.showIndex = undefined;
  }

  submitForm(form: NgForm) {
    let newContact: Todo = {
      task: form.value.task,
      completed: false,
    };
    this.todos.push(newContact);
  }

  setSearchTerm(form: NgForm) {
    this.searchTerm = form.value.searchTerm.trim().toLowerCase();
    //searchTerm to the right comes from name attribute
  }
  myFilterMethod() {
    //  RETURNING THE TODOS ARRAY WHEN NAME IS TYPED INTO SEARCH TERM
    if (!this.searchTerm) {
      //IF THERE IS NO VALUE....
      return this.todos; //...RETURN NORMAL ARRAY
    } else {
      //...ELSE ILL FIND THE SEARCH TERM FOR YOU SINCE THE VALUE IS CORRECT
      return this.todos.filter((todo) => {
        let currentName = todo.task.toLowerCase().trim();
        return currentName.includes(this.searchTerm);
        //same as let newArray = contacts.filter(())
        //return newArray
      });
    }
  }
  removeTask(index: number) {
    this.todos.splice(index, 1);
  }
  completeTask(index: number) {
    this.todos[index].completed = true;
  }

  ngOnInit(): void {}
}
