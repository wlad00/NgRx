import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'any'
})
export class MyService {

  constructor(private http: HttpClient) {
  }


  // tslint:disable-next-line:typedef
  getSomeStuff() {
    // return this.http.get('http://pollit.locale/send_xml');
    // return this.http.get('https://jsonplaceholder.tyicode.com/todos/1');


    return this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(delay(1000));
  }

}
