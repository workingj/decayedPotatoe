import Express, {Router} from 'express';
import cors from 'cors';
import './pool.js';
import ratingSchema from './pool.js'

const app = Express();
const port = 3001;

const movieRouter = Router();
app.use(Express.urlencoded({extended: true}));
app.use(Express.json());
app.use(cors());

app.use('/', movieRouter);

movieRouter.get('/', (req, res) => {
    res.json('Getting - Hello from the server');
});

movieRouter.post('/', (req, res) => {
    const data = req.body;
    console.log("DATA-----------------------",data);
    try {
        const rating = new ratingSchema(data);
        rating.save();
        res.json('Posting - Movie rating received');
    } catch (error) {
        console.error(error);
        res.send('Error:', error.stack);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});``