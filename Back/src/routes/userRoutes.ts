import { Router, Request, Response } from 'express';
import { User } from '../../models/User';
import {UserController} from '../../controllers/userController';
const router = Router();
const controller = new UserController();
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'List of users' });
});

router.get('/users', (req: Request, res: Response) => {
  res.json({ message: 'Users yeah', users:controller.getAll() });
});

router.post('/login',async (req: Request, res: Response) => {
    const { username, password } = req.body;
    res.json({message:await controller.check(username,password)});
})

router.post('/sign',async (req: Request, res: Response) => {
    const { username,mail, password } = req.body;
    if(!await controller.createUser(new User(username,mail,password))){
        res.json({message:"all is not ok account already created before"});
    }else {
      res.json({message:"all is ok"});
    }
})

export default router;
