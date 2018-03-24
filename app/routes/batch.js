import express from 'express';
import app from '../app.js';

const batchRouter = express.Router();

batchRouter.post('/batch', async function(req, res) {
  try {
    const {
      endpoint, 
      payload,
    } = req.body;

    const {
      url, 
      httpType,
    } = endpoint; 
    
    const {
      parameters,        // [] of {}
    } = payload;

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

