import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import courses from './data/data.js'
import colors from 'colors'
import path from 'path'

import noteRoutes from './routes/noteRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express() // main thing

app.use(express.json()) // to accept json data

app.use('/api/notes', noteRoutes)
app.use('/api/users', userRoutes)
app.get('/api/courses', (req, res) => {
	return res.json(courses)
})

// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}..`.yellow))
