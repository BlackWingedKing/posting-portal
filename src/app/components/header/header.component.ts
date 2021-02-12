import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public title: string;
  
  @Input()
  public redirect: string;

  @Input()
  public redirectButtonName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
