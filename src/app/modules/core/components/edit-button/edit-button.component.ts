import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent implements OnInit {
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit() {
  }
}
