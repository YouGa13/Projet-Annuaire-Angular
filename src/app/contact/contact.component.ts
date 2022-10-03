import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  updateBackgroundColor(color : string){
    const element =  document.getElementById("carteContact");
    if (element) {
      element.style.backgroundColor=color;
    }
    
  }

}
