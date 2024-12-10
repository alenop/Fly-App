import { Request, Response } from 'express';
import {FakeBdd} from '../dataService/fakeBdd';
import { v4 as uuidv4 } from 'uuid';
import { Book } from '../models/Book';
import { Flight } from '../models/Flight'
import { User } from '../models/User';
export class BookController{
    private bdd = new FakeBdd();

    bookFlight(book:Book, userId:number){
        const uuid = uuidv4();
        book.id = uuid;
        book.flightId = book.flightId
        book.userId = userId;
        book.date = book.date;
        book.bags = book.bags;
        this.bdd.createObject(book, uuid,"book");
    }

    getAllBooks(){
        this.bdd.getAllObject("book");
    }
    getBook(){
        this.bdd.getByUuid("book");
    }
    deleteBook(){
        this.bdd.delete("book");
    }
}