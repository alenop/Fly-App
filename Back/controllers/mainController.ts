import {UserController} from './userController';
import {BookController} from './bookController';
import { Book } from '../models/Book';
export class MainController {
    private userController = new UserController();
    private bookController = new BookController();

    public bookFlight(book:Book,billets:[]){
        const total_price=0;
        this.bookController.bookFlight(book,total_price,billets);
    }

    public getBookController(){
        return this.bookController;
    }
}