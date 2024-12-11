import { Request, Response } from 'express';
import {FakeBdd} from '../dataService/fakeBdd';
import { v4 as uuidv4 } from 'uuid';
import { Book } from '../models/Book';
import { Flight } from '../models/Flight'
import { User } from '../models/User';
import { BookingBdd } from '../dataService/BDD/BookingBdd';
export class BookController{
    private bdd = new BookingBdd();

    async bookFlight(book:Book,total_price:number,id_billets:Number[]){
        await this.bdd.insertBooking(book.flightId,book.userId,total_price,book.date,id_billets);
    }

    async getAllBooks(){
        await this.bdd.getBookings();
    }
    async getBook(flightId:number){
       return await this.bdd.getbook(flightId) as Book[];
    }
    deleteBook(){

    }
}