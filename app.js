import express from 'express';
import movieRouter from './routes/movieRouter.js';
import cors from 'cors';

const app = express();
const port = 3000;

//rotta di test
app.get( '/', (req, res) => {
  res.send( 'Server movie tutto a posto!' )
} )

app.use(
  cors({
    origin: process.env.FRONTEND_APP,
  })
);

//middleware per gestire asset statici
app.use( express.static('public') )

app.use(express.json());
app.use('/movies', movieRouter);


app.listen(port, () => {
  console.log(`Server movie funziona sulla porta ${port}`);
});