// Dependencies
import express from 'express';

// Servers
import backendServer from './backendServer';
import frontendServer from './frontendServer';

// Starting express application
const app = express();

const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  frontendServer(app);
}

backendServer(app);
