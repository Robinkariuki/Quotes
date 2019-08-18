import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() emitQuote = new EventEmitter()
  quoteMovie:string
  quoteName:string
  quoteDate: Date =new Date();
  theQuote:any

  submitQuote( ) {
    this.theQuote = new Quote(this.quoteName, this.quoteMovie, this.quoteDate)
    this. quoteMovie = ''
    this.quoteName = ''
    this.emitQuote.emit(this.theQuote)
  }

  constructor() { }

  ngOnInit() {
  }

}
