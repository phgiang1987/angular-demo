import { Component, OnInit, Pipe } from '@angular/core';
import { TodosService } from '../Services/todos.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos = [];
  todoItem = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
    status: 'inactive'
  };
  
  constructor(private TodosService : TodosService) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(){
    this.TodosService.fetchUsers().subscribe(data => {
      this.todos = data;
    });
  }

  saveTodo(dataForm: {}){
    this.TodosService.addUser(dataForm).subscribe(data => {
      this.fetchData()
    });
  }

  deleteTodo(id: any){
    this.TodosService.deletedUser(id).subscribe(data => {
      this.fetchData()
    });
  }

  updateTodo(item: any){
    this.TodosService.updateUser(item).subscribe(data => {
      this.fetchData()
    });
  }

  getTodoDetail(item: any){
    this.todoItem = item;
  }
  
  
  searchTodo(value: any){
    this.TodosService.fetchUsers().subscribe(data => {
      this.todos = data.filter((item: any) => {
        switch (value.name) {
          case "first_name":
            return item.first_name.toLowerCase().indexOf(value.value) !== -1
            break;
          case "last_name":
            return item.last_name.toLowerCase().indexOf(value.value) !== -1
            break;
          case "email":
            return item.email.toLowerCase().indexOf(value.value) !== -1
            break;
          default:
            return item.status.toLowerCase().search(value.value) !== -1
            break;
        }
      });
    });
  }

}
