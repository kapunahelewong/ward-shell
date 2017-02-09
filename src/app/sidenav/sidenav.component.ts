import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: []
})
export class SidenavComponent implements OnInit {
  public storeWidth: Number = 0;
  public isSideNavOpen: Boolean = false;
  public isHamburgerVisible: Boolean = false;
  public windowWidthToOpenSideNav: Number = 600;

  section1 = false;
  section1b = false;
  section1c = false;
  section2 = false;
  section3 = false;

  onResize(_width, sidebar) {
    this.storeWidth = _width;
    this.isSideNavOpen = _width > this.windowWidthToOpenSideNav;
    this.isHamburgerVisible = _width < this.windowWidthToOpenSideNav;
    this.onSideBarOpen();
  }

  public onSideBarOpen(){
    return this.storeWidth > this.windowWidthToOpenSideNav ? 'side' : 'over';
  }

  toggleSection1() {
    this.section1 = !this.section1;
  }
  toggleSection1b() {
    this.section1b = !this.section1b;
  }
  toggleSection1c() {
    this.section1c = !this.section1c;
  }
  toggleSection2() {
    this.section2 = !this.section2;
  }

  toggleSection3() {
    this.section3 = !this.section3;
  }

  constructor() { }

  ngOnInit() {
    this.onResize(window.innerWidth, {});
  }
}



