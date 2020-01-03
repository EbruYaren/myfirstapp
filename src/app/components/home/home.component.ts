import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  yemekFormu: any;
  yemekler: string[] = [
    "Mercimek Çorbası",
    "Patlıcan kebabı",
    "Mantı"
  ];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.yemekFormu = this.formBuilder.group({
      yemekAdi: 'adfasfaf'
    });

    console.log(this.yemekler);
  }

  ngOnInit() {
  }

  kaydet() {
    this.yemekler.push(this.yemekFormu.controls.yemekAdi.value);
    console.log(this.yemekFormu.controls.yemekAdi.value);
    console.log('Buton çalışıyor.');
  }

}
