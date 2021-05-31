import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

const logUrl = 'http://127.0.0.1:8000/api/login/';
const regUrl = 'http://127.0.0.1:8000/api/register/';
const Url = 'http://127.0.0.1:8000/api/userdetails/';
const usersUrl = 'http://127.0.0.1:8000/api/allusers/';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  login(data:any): Observable<any>{
    return this.http.post(logUrl, data);
  }

  register(data:any): Observable<any>{
    return this.http.post(regUrl, data);
  }

  getUserDetails(): Observable<any>{
    return this.http.get(Url);
  }

  getAllUser():Observable<any>{
    return this.http.get(usersUrl);
  }
}
