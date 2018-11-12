import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {CardType,getCardType} from '../model/grid';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  type:CardType;


  @Input()
  hidden:boolean;

  @Output()
  cardClicked:EventEmitter<CardType>=new EventEmitter();

  

  onClick(type){


this.cardClicked.emit(type);



  }
  getText(type:string) : string{

    

    switch(getCardType(type)){

      case CardType.NORMAL: return "NORM";
      case CardType.NOT_RAMU:return "NOTR";
      case CardType.RAMU : return "RAMU";
     

    }

  }

  constructor() { }

  ngOnInit() {
  }

}
