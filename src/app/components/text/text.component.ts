import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FIRST_TEXT, FLIRTY_CONVO_OPENERS_TEXT } from 'src/app/data/text-response';
import { TextMessage } from 'src/app/models/text-message';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

 firstTextList!: any[];
 firstText!: any;

 openerList!: any[];
 openerText!: any;

 firstClicked: boolean = true;
 openerClidked: boolean = true;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit( ): void {
   
    this.firstTextList = FIRST_TEXT;
    this.firstText = this.firstTextList[0].text;
    this.cdr.detectChanges();
    this.openerList = FLIRTY_CONVO_OPENERS_TEXT
    this.openerText = this.openerList[0].text
    this.cdr.detectChanges();
  
  }

  randomFirstText(): void {
    this.firstClicked = true;
    this.cdr.detectChanges();
    const randomIndex = Math.floor(Math.random() * this.firstTextList.length);
    this.firstText = this.firstTextList[randomIndex + 1];
    this.firstText = this.firstText.text;

    this.cdr.detectChanges();
  }


  copyText(val: any){
    let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
    }

    generateOpeners(): void {
      this.openerClidked = true;
      this.cdr.detectChanges();
      const randomIndexT = Math.floor(Math.random() * this.openerList.length);
      this.openerText = this.openerList[randomIndexT + 1];
      this.openerText = this.openerText.text;
      this.cdr.detectChanges();
    

    }

}
