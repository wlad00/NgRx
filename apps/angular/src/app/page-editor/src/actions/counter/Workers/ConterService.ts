import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'any'
})
export class CounterService {

  constructor(private http: HttpClient) {
  }

  getSomeStuff() {

    return this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(delay(1000));
  }

}
