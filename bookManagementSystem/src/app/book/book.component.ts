import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  newtitle : string = '';
  newauthor : string = '';
  books : Book[] = [];
  addBook() {
    if(this.newtitle.trim().length && this.newauthor){
      let newBook : Book={
        id : this.books.length + 1,
        title : this.newtitle,
        author : this.newauthor
      };
      this.books.push(newBook);
      this.newtitle = '';
      this.newauthor = '';
    }
    localStorage.setItem('books', JSON.stringify(this.books));
  }
  deleteBook(index : number){
    this.books.splice(index,1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
  constructor() { }

  ngOnInit(): void {
    let savedBooks = localStorage.getItem('books')
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

}
