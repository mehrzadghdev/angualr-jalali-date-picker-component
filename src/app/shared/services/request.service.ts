import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient, private authentication: AuthenticationService) { }

  public post<Result, Body = any>(controlAndMethodName: string, body: Body): Observable<Result> {
    return this.http.post<Result>(environment.apiUrl + controlAndMethodName, body, { headers: this.headers() });
  }
  
  private headers(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders().set("Authorization", "Bearer "+this.authentication.accessToken);

    return headers;
  }
}
