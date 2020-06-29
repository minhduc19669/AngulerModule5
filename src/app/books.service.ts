import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { IBook } from './book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  apiUrl = 'http://localhost:3000/books';
  constructor(private httpClient: HttpClient) {}
  getAll() {
    return this.httpClient.get<IBook[]>(this.apiUrl);
  }
  createBook(book: IBook) {
    return this.httpClient.post(this.apiUrl, book);
  }
  updateBook(bookId: number, book: IBook) {
    return this.httpClient.put(`${this.apiUrl}/${bookId}`, book);
  }
}
