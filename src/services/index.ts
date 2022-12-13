import express from 'express';

import { authRouter } from './auth';
import { marketRouter } from './market';
export const services = express.Router();

services.use('/auth', authRouter);
services.use('/market', marketRouter);
