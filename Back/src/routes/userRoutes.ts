import { Router, Request, Response } from 'express';
import {FakeBdd} from '../../dataService/fakeBdd';
import { User } from '../../models/User';
import {UserController} from '../../controllers/userController';
const router = Router();
const database = new FakeBdd();
const controller = new UserController();
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'List of users' });
});

router.post('/users', (req: Request, res: Response) => {
  const { name, email } = req.body;
  res.json({ message: 'User created', user: { name, email } });
});

router.post('/login',(req: Request, res: Response) => {
    const { username, password } = req.body;
    res.json({message:controller.check(username,password)});
})

router.post('/sign',(req: Request, res: Response) => {
    const { username,mail, password } = req.body;
    if(!controller.createUser(new User(username,mail,password))){
        res.json({message:"all is not ok account already create before"});
    }
    res.json({message:"all is ok"});
})

export default router;
