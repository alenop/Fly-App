import { Request, Response } from 'express';
import {FakeBdd} from '../dataService/fakeBdd';
import { v4 as uuidv4 } from 'uuid';
import { Book } from '../models/Book';
import { Flight } from '../models/Flight'
import { User } from '../models/User';
import { BookingBdd } from '../dataService/BDD/BookingBdd';
export class BookController{
    private bdd = new BookingBdd();

    bookFlight(book:Book,total_price:number,billets:[]){
        this.bdd.insertBooking(book.flightId,book.userId,total_price,book.date,billets);
    }

    getAllBooks(){
        this.bdd.getBookings();
    }
    getBook(){

    }
    deleteBook(){

    }
}