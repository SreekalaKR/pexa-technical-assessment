import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users:any[] = [];
  currentPage = 1;
  totalPages = 0;
  pageSize = 5;
  pages:number[] = [];

  constructor(private userService:UserService){}

  ngOnInit(){
    this.loadUsers();
  }

  loadUsers(){
    this.userService
    .getUsers(this.currentPage, this.pageSize)
    .subscribe((res:any)=>{
      this.users = res.data;
      this.totalPages = res.total_pages;
      this.pages = Array(this.totalPages).fill(0).map((x,i)=>i+1);
    });

  }

  changePage(page:number){
    this.currentPage = page;
    this.loadUsers();
  }

  changePageSize(){
    this.currentPage = 1;
    this.loadUsers();
  }

  
}