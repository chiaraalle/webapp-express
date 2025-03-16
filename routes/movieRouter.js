import express from 'express';
import movieController from '../controllers/movieController.js';  
import { index, show, destroy } from '../controllers/movieController.js';

const router = express.Router();    

router.get('/', movieController.getMovies);
router.get('/:id', movieController.getMovieById);
router.delete('/:id', movieController.deleteMovie);
