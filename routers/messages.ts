import crypto from 'crypto';
import {Router} from 'express';
const messagesRouter = Router();
messagesRouter.get('/',  (req, res)=>{
    res.send();
});

messagesRouter.get('/:id', (req, res)=>{
    res.send();
});

messagesRouter.post('/', (req, res)=>{
    res.send();
});

export default messagesRouter;