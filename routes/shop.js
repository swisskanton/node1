import path from 'path'
import express from 'express'

import __dirname from '../util/rootpath.js'
import { products } from './admin.js'

const router = express.Router()

router.get('/', (req, res, next) => {
  // res.render('shop', {
  //   prods: products,
  //   pageTitle: 'Shop',
  //   path: '/'
  // });
  res.sendFile(path.join(__dirname, 'views', 'shop.html'))
})

export default router
