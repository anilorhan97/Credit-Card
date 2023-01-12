import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.css']
})
export class CardformComponent implements OnInit {
  cardForm = new FormGroup({
      name : new FormControl(null, //Başta boş string verilebilir..İlki başlangıç hali, virgülden sonra validators ister, dizi şeklinde olmalı..
      [ Validators.required,
        Validators.minLength(3)
      ]), 
      cardNumber : new FormControl(null,
      [ Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16)
      ]),
      skt : new DateFormControl(null,
      [ Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
        //Ay yıl formatı.. Hazır alınabilir. Okumaya çalışıldığında 0 ile başladığında 1-9 arası değer alabilir.
        //Veya 1 ile başladığında yanına 0 ile 2 arası değer gelir. /'dan sonra 2 değer istiyor.
      ]),
      security : new FormControl(null,
      [ Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3)
      ]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log("anıl");
  }
  resetForm()
  {
    this.cardForm.reset();
  }

}
