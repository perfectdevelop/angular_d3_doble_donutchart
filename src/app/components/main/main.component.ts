import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('drawer') public drawer: MatDrawer;
  @ViewChild('menuTrigger') public menuTrigger: MatMenuTrigger;
  @ViewChild('menuTriggerTow') public menuTriggerTow: MatMenuTrigger;

  modeSlide = 'side';
  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  onResize() {
    if (this.drawer.opened == false) {
      this.showMenu = false;
    }
    else {
      this.showMenu = true;
    }
  }

  btnShow() {
    if (this.drawer.opened == false) {
      this.showMenu = false;
    }
    else {
      this.showMenu = true; 
    }
  }

}
