import express, { json } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from server 1' })
})

app.get('/world', (req, res) => {
  res.json({ message: 'Hello world from server 1' })
})

app.get('/__health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(3002, () => {
  console.log('Server startes on 3000')
})
