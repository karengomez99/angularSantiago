import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UsersService {

  getUsers = 'http://localhost:3000/getUsers';
  getSingleUser = 'http://localhost:3000/getSingleUser?id=';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.getUsers);
  }

  getSingleUserById(id: any) {
      return this.http.get(this.getSingleUser + id);
  }
}
