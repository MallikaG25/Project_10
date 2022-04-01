import express, { Request, Response } from 'express';
import bodyParser from 'body-parser'
import userRoutes from './routes/user.routes';
import OrderRoutes from './routes/order.routes';
import productRoutes from './routes/product.routes';

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('server started')
})

userRoutes(app);
OrderRoutes(app);
productRoutes(app);

app.listen(3000, function () {
    console.log(`Server running in : ${address}`)
})

export default app;
