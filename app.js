import express from 'express';

const app = express();
import cors from 'cors';
const port = process.env.SERVER_PORT || 3000;

import movieRouter from './routes/movieRouter.js';
import imagePath from './middlewares/imagePath.js';

//middleware cors
app.use(
  cors({
    origin: process.env.FRONTEND_APP,
  })
);

app.use(express.static('public'));
app.use("/images", express.static("public/images"));

app.use(express.json());

app.use(imagePath);

app.get('/', (req, res) => {
  res.send('Server Movie tutto a posto!');
});

app.use('/movies', movieRouter);

app.listen(port, () => {
  console.log(`Server Movies in funzione sulla porta: ${port}`);
});