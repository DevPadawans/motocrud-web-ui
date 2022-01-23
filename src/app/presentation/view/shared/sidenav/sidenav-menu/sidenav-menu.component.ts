import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {

  links: string[] = ["teste1"];
  constructor() { }

  ngOnInit() {
  }

}
