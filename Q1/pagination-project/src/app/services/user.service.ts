import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(page:number, perPage:number){

    const headers = new HttpHeaders({
      'x-api-key': 'reqres_0ee5c4e3423a461da1d1417d5fc37512'
    });

    return this.http.get(
      `https://reqres.in/api/users?page=${page}&per_page=${perPage}`,
      { headers }
    );
  }

}