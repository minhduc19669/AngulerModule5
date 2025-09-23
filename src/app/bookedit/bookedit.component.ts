import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { IBook } from '../book';

@Component({
  selector: 'app-bookedit',
  templateUrl: './bookedit.component.html',
  styleUrls: ['./bookedit.component.css']
})
export class BookeditComponent implements OnInit {

  bookForm: FormGroup;
  bookId: number;
  book: IBook;

  constructor(
    private fb: FormBuilder,
    private bookService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.bookId = +this.route.snapshot.paramMap.get('id');

    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.loadBook();
  }

  loadBook() {
    this.bookService.getById(this.bookId).subscribe(
      book => {
        this.book = book;
        this.bookForm.patchValue({
          title: this.book.title,
          author: this.book.author,
          description: this.book.description
        });
      },
      error => {
        console.error('Error loading book:', error);
        alert('Book not found or error loading book');
        this.router.navigate(['/']);
      }
    );
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const updatedBook: IBook = {
        bookId: this.bookId,
        ...this.bookForm.value
      };

      this.bookService.updateBook(this.bookId, updatedBook).subscribe(
        result => {
          console.log('Book updated successfully:', result);
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error updating book:', error);
          alert('Error updating book');
        }
      );
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
