import express from 'express';
import app from '../app.js';
import axios from 'axios';

const batchRouter = express.Router();

batchRouter.post('/batch', async function(req, res) {
  try {
    const {
      endpoint, 
      payload,
    } = req.body;

    const {
      url,
      verb,
    } = endpoint; 
    
    const {
      parameters,        // [] of { userId: String , age: Number }
    } = payload;

    const requests = [];

    parameters.forEach((parameter) => {
      const {
        userId, 
        age,
      } = parameter;
      let currentRequest = null;
      const URL = `${url}/userId`;
      switch (verb) {
        case "POST":
          currentRequest = axios.post(URL, { age }); 
          break;
        case "PATCH":
          currentRequest = axios.patch(URL, { age });
          break;
      }   
      requests.push(r);
    });

    const responses = await axios.all(requests);

    const statuses =  responses.map((response, index) => {
      const {
        status,
      } = response;
      return {
        status,
        number: index,
      }
    });

    return res.json({
      success: true,
      responses: statuses,
    });

  } catch (err) {
    return res.status(403).send({
        success: false,
        message: 'something bad happened'
    });
  }
});

export default batchRouter;

