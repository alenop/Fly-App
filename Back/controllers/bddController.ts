import { FakeBdd } from '../dataService/fakeBdd';
export class bddController{
    public static db:FakeBdd;

    public static initDB(){
        this.db = new FakeBdd();
    }
}