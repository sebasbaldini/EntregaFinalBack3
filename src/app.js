import express from 'express';
import userRoutes from './routes/user.route.js';
import { setupSwagger } from './swagger.js';
import adoptionRouter from './routes/adoption.route.js';

const app = express();


app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/adoptions', adoptionRouter);

setupSwagger(app);

export default app