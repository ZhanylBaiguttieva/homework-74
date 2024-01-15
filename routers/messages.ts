import crypto from 'crypto';
import {Router} from 'express';
import fileDb from "../fileDb";
const messagesRouter = Router();
messagesRouter.get('/',  async (req, res)=>{
    const messages = await fileDb.getItems();
    res.send(messages);
});

messagesRouter.post('/', async (req, res)=>{
    const message = {
        message: req.body.message,
    };

    const date = new Date;
    const datetime = date.toISOString();

    const newMessage = await fileDb.addItem(message, 'messages/' + datetime + '.txt');
    res.send(newMessage);
});

export default messagesRouter;