import {promises as fs} from 'fs';
import crypto from 'crypto';
import {Message} from "./types";
import messages from "./routers/messages";
const path = './messages';

const fileDb = {
    async getItems() {
        const files = await fs.readdir(path);
        const filesDataPromises  = files.slice(-5).map(async (file) => {
            const filePath = path + '/' + file;
            const result = await fs.readFile(filePath);
            return JSON.parse(result.toString());
        });
        return await Promise.all(filesDataPromises);
    },
    async addItem(item: Message, fileName: string) {
        const date = new Date;
        const datetime = date.toISOString();

        const message = {datetime, ...item};

        await fs.writeFile(fileName, JSON.stringify(message));
        return message;
    },
};

export default fileDb;