require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin:
            process.env.NODE_ENV === 'production'
                ? 'https://invoice-app-vignesh.netlify.app'
                : 'http://localhost:3000',
    })
);
app.use(cookieParser());

const PORT = process.env.PORT || 3001;

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, (req, res) => {
            console.log(`Server running at port ${PORT}`);
        });
    })
    .catch((err) => console.log('database not connected'));

app.use('/api', router);
