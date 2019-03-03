import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery' ;
import { smoothlyMenu } from '../../layout.helper';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleNavigation(): void {
    $("body").toggleClass("mini-navbar");
    smoothlyMenu();
}
logout() {
    localStorage.clear();
    // location.href='http://to_login_page';
}


}
