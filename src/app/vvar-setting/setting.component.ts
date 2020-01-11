import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vvar-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  public isOpenModal = false;

  constructor() { }

  ngOnInit() {
  }

  public open() {
    this.isOpenModal = !this.isOpenModal;
  }

}
