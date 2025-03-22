import express from 'express'
import imagePath from '../middlewares/imagePath.js'; 
import upload from '../middlewares/multer.js'

const router = express.Router()

import {index, show, destroy, storeReview, store} from '../controllers/movieController.js'


//index
router.get( '/', imagePath, index );

//show
router.get( '/:id', imagePath, show )

//destroy
router.delete( '/:id', destroy )

//storeReview
router.post('/:id/reviews', storeReview); 

//store
router.post( '/', upload.single('image'), store ) 


export default router