import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos = [];
  @Output() deleteTodo: EventEmitter<any> = new EventEmitter();
  @Output() changeStatusTodo: EventEmitter<any> = new EventEmitter();
  @Output() editTodo: EventEmitter<any> = new EventEmitter();
  @Output() searchTodo: EventEmitter<any> = new EventEmitter();

  search = '';
  constructor() { }

  ngOnInit(): void {
    
  }
  onDelete(id: any){
    this.deleteTodo.emit(id);
  }
  onChangeStatus(item: any){
    this.changeStatusTodo.emit(item);
  }
  onUpdateTodo(item: any){
    this.editTodo.emit(item);
  }
  onSearch(value: any, name: any){
    this.searchTodo.emit({
      value: value.toLowerCase(),
      name
    });
  }
}
