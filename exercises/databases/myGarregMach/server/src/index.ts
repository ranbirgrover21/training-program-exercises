
import express, { Request, Response } from 'express';
import { SERVER_PORT } from '../../config.json';

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    console.log('Hello, TypeScript with Express :)))!');
    res.send('Hello, TypeScript with Express :)))!');
});

app.listen(SERVER_PORT, () => {
    console.log(`Server running on port http://localhost:${SERVER_PORT}`);
});