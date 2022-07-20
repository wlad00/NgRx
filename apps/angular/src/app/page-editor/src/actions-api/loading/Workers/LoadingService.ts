import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from "rxjs/operators";
import {BookModel} from "@models-editor";

const BASE_URL = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'any'
})
export class LoadingService {

  constructor(private http: HttpClient) {
  }

  getAllBooks() {

    return this.http
      .get<BookModel[]>(BASE_URL)
      .pipe(delay(2000));
  }

  getSomeStuff() {

    return this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(delay(1000));
  }

}
