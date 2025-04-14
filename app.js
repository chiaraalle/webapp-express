import express from 'express'; //importiamo express

const app = express(); //lo inizializziamo
import cors from 'cors'; //meccanism di sicurezza per indicare al server quali domini possono interagire 
const port = process.env.SERVER_PORT || 3000; 

import movieRouter from './routes/movieRouter.js';
import imagePath from './middlewares/imagePath.js';

//middleware cors
app.use(
  cors({
    origin: process.env.FRONTEND_APP,
  })
);

app.use(express.static('public'));//ci permette di leggere file statici. invochiamo la funzione express.static e passiamo la cartella che contine ei file statici come argomento
app.use("/images", express.static("public/images"));

app.use(express.json());

app.use(imagePath); 

app.get('/', (req, res) => { //metodo/path/funzione da eseguire
  res.send('Server Movie tutto a posto!'); //definiamo la prima rotta. Ogni rotta indica "la stanza" in cui deve entrare per rispondere a una richiesta
});                                           // res. send invia un contenuto testuale/ html

app.use('/movies', movieRouter);

app.listen(port, () => { //mettiamo il server in ascolto
  console.log(`Server Movies in funzione sulla porta: ${port}`);
});
