import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import { placesRequest } from './src/googlePlaceRequests.js';

const app = express();

// Express middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8100;

app.listen(port, () => {
  	console.log(`Server is running on port ${port}`);
});

app.post('/', bodyParser.json(), async (req, res) => {
  	console.log('Received request with message: ', JSON.stringify(req.body));
	try {
		const places = await placesRequest([req.body.location.latitude, req.body.location.longitude])
		console.log(`Successfully returning places`)
		res.send(places);
	} catch (e) {
		console.error(`Unable to get locations: ${err}`);
	}
});