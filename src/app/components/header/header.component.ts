import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
    
  currentLang:any

  constructor(){
    
  }
    ngOnInit() {

    }

    cv(){
      window.alert("CV is under Updating..!")
    }
}
