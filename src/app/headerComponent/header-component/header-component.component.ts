import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  @Output() featureClicked = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  onClicked(type: string) {
    this.featureClicked.emit(type);
  }
}
