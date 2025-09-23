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
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.loadBooks();
  }
  onSubmit() {
    if (this.bookForm.valid) {
      const book = this.bookForm.value;
      this.bookService.createBook(book).subscribe(result => {
        console.log('Book created:', result);
        this.bookForm.reset();
        this.loadBooks(); // Refresh the list
      }, error => {
        console.error('Error creating book:', error);
        alert('Error creating book');
      });
    }
  }

  loadBooks() {
    this.bookService.getAll().subscribe(books => {
      this.booksList = books;
    }, error => {
      console.error('Error loading books:', error);
      alert('Error loading books');
    });
  }
}
