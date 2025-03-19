import express from 'express'
import imagePath from '../middlewares/imagePath.js'; 

const router = express.Router()

import {index, show, destroy} from '../controllers/movieController.js'


//index
router.get( '/', imagePath, index );

//show
router.get( '/:id', imagePath, show )

//destroy
router.delete( '/:id', destroy )

export default router