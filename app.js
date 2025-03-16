import express from 'express';
import movieRouter from './routes/movieRouter.js';


const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/movies', movieRouter);


app.listen(port, () => {
  console.log(`Server movie funziona sulla porta ${port}`);
});