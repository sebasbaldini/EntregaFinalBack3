import express from 'express';
import userRoutes from './routes/user.route.js';
import { setupSwagger } from './swagger.js';

const app = express();


app.use(express.json());
app.use('/api/users', userRoutes);

setupSwagger(app);

export default app