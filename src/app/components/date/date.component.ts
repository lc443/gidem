import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DATE_QUESTIONS } from 'src/app/data/text-response';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit, OnChanges {

  dateQs!: any[];
  dateText!: any;

  constructor(private cdr: ChangeDetectorRef) { 
  }
  ngOnChanges(changes: SimpleChanges): void {
 
   
  }

  ngOnInit(): void {
    this.dateQs = DATE_QUESTIONS;
    this.cdr.detectChanges();
    this.dateText = this.dateQs[0].text 
  
  }

  generateDateQs() : void {
    this.cdr.detectChanges();
    const randomIndex = Math.floor(Math.random() * this.dateQs.length);
    this.dateText = this.dateQs[randomIndex + 1];
    this.dateText = this.dateText?.text;
   
  }
 
}
