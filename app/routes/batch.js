import express from 'express';
import app from '../app.js';

const batchRouter = express.Router();

batchRouter.post('/batch', async function(req, res) {
  try {
    console.log('post...'); 
    return res.json({
      success: true,
      message: 'batching',
    });

  } catch (err) {
    return res.status(403).send({
        success: false,
        message: 'something bad happened'
    });
  }
});

export default batchRouter;

