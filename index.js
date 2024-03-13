import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './routes/index.js'

const app = express()

app.use(cors({
    origin: ['https://webstepacademy.netlify.app/ru']
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))