import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IBook } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


  booksList: IBook[];
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    body: new FormControl()
  });

  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(books => {
      this.booksList = books;
    }, error => {
      alert('lỗi');
    });
  }
  onSubmit() {
    const book = this.bookForm.value;
    this.bookService.createBook(book).subscribe(result => {
      console.log(result);
    });
  }
}
