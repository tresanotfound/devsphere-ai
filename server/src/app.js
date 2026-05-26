import express from 'express';

import cors from 'cors';

import authRoutes
from './routes/authRoutes.js';

const app = express();

/* MIDDLEWARE */

app.use(cors());

app.use(express.json());

/* API ROUTES */

app.use(
  '/api/auth',
  authRoutes
);

/* TEST ROUTE */

app.get('/', (req, res) => {

  res.json({

    message:
      'DevSphere AI Backend Running 🚀',
  });
});

export default app;