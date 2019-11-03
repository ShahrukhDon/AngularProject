import { Post } from './posts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
  getMovies(): Observable<any> {
    // const u = 'http://www.omdbapi.com/?i=tt3896198&apikey=796ecca0';
    const uu = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<any>(uu);
  }
  getPencels(): Observable<any> {
    const u = 'https://localhost:44306/api/values';
    return this.http.get<any>(u);
  }
  getWorkout(): Observable<any> {
    const uwork = 'https://localhost:44306/api/workouts';
    return this.http.get<any>(uwork);
  }
  getDelete(id: number): Observable<any> {
    const uwork = 'https://localhost:44306/api/workouts/';
    return this.http.delete(uwork + id);
  }
}
