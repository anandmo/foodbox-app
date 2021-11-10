import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = "http://localhost:8080/user";
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  public save(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  public verifyLogin(user: User): Observable<User> {
    return this.http.post<User>("http://localhost:8080/verifylogin",user);
  }

}
