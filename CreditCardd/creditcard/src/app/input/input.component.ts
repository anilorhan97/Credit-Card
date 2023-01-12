import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input () control! : any; //parentten child'e input ile gönderiyoruz.. Cardform.c.html'de verilen değişken ismiyle açılmalı.. 
  //control'e başlangıç değeri ister. Olmadığı için sonuna ! eklenir. Define esaymınt diye geçiyor...
  @Input () label! : string;
  
  constructor() { }
  ngOnInit(): void {
  }

  showErrors(){ //return this.control.dirty&& this.control.touched şeklinde de yazılabilirdi. Bunlara this.control eklenip döndürülecek.
    const {dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  } //İnput'a dokunduğumuzda tıkladığımızda gözükür, dirty ile inputtan çıktıktan sonrası için..


}
