import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-combustivel-list-mbm',
  templateUrl: './combustivel-list-mbm.component.html',
  styleUrls: ['./combustivel-list-mbm.component.css']
})
export class CombustivelListMbmComponent implements OnInit {


  @Input() title: string = 'média de preço de combustível com base no nome do município';

  constructor() { }

  ngOnInit(): void {
  }

}
