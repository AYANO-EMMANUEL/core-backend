import express from 'express';
import userRoutes from './routes/user.route.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})