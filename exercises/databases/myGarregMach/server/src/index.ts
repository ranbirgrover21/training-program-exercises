
import express, { NextFunction, Request, Response } from 'express';
import { SERVER_PORT } from '../../config.json';
import { login } from './funcs/login';
import { notices } from './funcs/notices';

const errorHandler = require('http-errors-middleware');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  console.log('Hello, TypeScript with Express :)))!');
  res.send('Hello, TypeScript with Express :)))!');
});

app.post('/login', async (req: Request, res: Response, next : NextFunction) => {
  const { gID, password } = req.body;
  
  try {
    const d = await login(gID, password);
    res.send(d);
  } catch (e) {
    next(e);
  }
});

app.get('/notices', async (req: Request, res: Response, next: NextFunction) => {

  try {
    const result = await notices();
    res.send(result);
  } catch (e) {
    next(e);
  }
});

app.use(errorHandler( { debug : true }));

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port http://localhost:${SERVER_PORT}`);
});