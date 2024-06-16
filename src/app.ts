
import express, { Request, Response } from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import router from './app/allroute/routes';
import noRoutefound from './app/middleware/notfound';

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
 app.use('/api',router)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello  World!')
})

app.use(noRoutefound)


export default app;