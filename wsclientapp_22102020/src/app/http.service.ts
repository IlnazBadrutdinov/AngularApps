import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  postData(user: User) {
    console.log(user);
    console.log('BadrutdinovII');
    let xmlString = "<requestData><integroMethod>123</integroMethod></requestData>";
    console.log(xmlString);
    return this.http.post(/*'http://localhost:3000/postuser'*/'http://localhost:8080/oct05_2020_1_1_0_SNAPSHOT_war/hello', xmlString);
  }
}
