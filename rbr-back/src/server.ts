import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './app/routes'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

app.use(cors({ origin: 'http://localhost:3000' }))

app.use(function (req, res, next) { //
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'content-type')
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  next()
})

app.use('/api', routes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})