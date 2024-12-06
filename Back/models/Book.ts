export class Book{
    id:number;
    flightId:number;
    userId:number;
    date:Date;
    constructor(id:number, flightId:number, userId:number, date:Date){
        this.id=id;
        this.flightId=flightId;
        this.userId=userId;
        this.date=date;
    }
}