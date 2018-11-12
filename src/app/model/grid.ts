export class Grid{

    state:Array<Array<CardType>>=[[CardType.NORMAL,CardType.NORMAL,CardType.NORMAL],[CardType.NOT_RAMU,CardType.RAMU,CardType.NOT_RAMU],[CardType.NORMAL,CardType.NORMAL,CardType.NORMAL]];


}

export function getCardType(num:string):CardType{

    switch(num){

        case "0": return CardType.NORMAL;
        case "1": return CardType.NOT_RAMU;
        case "2": return CardType.RAMU;


    }


}

export enum CardType{

    NORMAL=0,
    NOT_RAMU,
    RAMU,

}