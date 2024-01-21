import express from 'express'
import cors from 'cors'
import connectToDatabase from './config/DB.js';
import UserRoutes from './routes/UserRoutes.js';
import { config } from 'dotenv';
const app = express();
const PORT = 5000;

connectToDatabase() // database

config() // dotenv

app.use(cors()) // cors

app.use(express.json())
// Routes
app.use('/user', UserRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to instagram!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});