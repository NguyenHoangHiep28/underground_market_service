import express from 'express';

import * as controller from './controller';
import {listingItem} from "./controller";
export const marketRouter = express.Router();

/** POST /api/market */
marketRouter.route('/').post(controller.listingItem);