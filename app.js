import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import __dirname from './util/rootpath.js'

const app = express()
const PORT = 3000

import { adminRoutes } from './routes/admin.js'
import shopRoutes from './routes/shop.js'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(PORT, () => console.log(`server listens on port http://localhost:${PORT}`))
