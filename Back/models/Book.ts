export class Book{
    id:number | string;
    flightId:number;
    userId:number;
    date:Date;
    bags:number
    constructor(id:number, flightId:number, userId:number, date:Date, bags:number){
        this.id=id;
        this.flightId=flightId;
        this.userId=userId;
        this.date=date;
        this.bags=bags;
    }
}