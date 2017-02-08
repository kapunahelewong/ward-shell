import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  greeting = true;
  section1 = false;
  section2 = false;
  section3 = false;

  toggleSection1() {
    this.section1 = !this.section1;
  }

  toggleSection2() {
    this.section2 = !this.section2;
  }

  toggleSection3() {
    this.section3 = !this.section3;
  }

  toggleGreeting() {
    this.greeting = !this.greeting;
  }




  constructor() { }

  ngOnInit() {
  }



}



