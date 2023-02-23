// pages/api/log.js

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {

	// // Block access to this route if no API key is provided
	// if(!req.query.key) return res.status(404).json({ message: 'No API key provided.' });

	// // Block access to this route if the wrong API key is provided
	// if(process.env.LUMBERJACK_API_KEY && req.query.key !== process.env.LUMBERJACK_API_KEY) return res.status(404).json({ message: 'Wrong API key provided.' });

	// // Block access to this route if no message is provided
	// if(!req.query.message) return res.status(404).json({ message: 'No message provided.' });

	// Create a new date object
	const date = new Date();

	try {
		const { message, headers, referrer, reqPath  } = req.query;

		// Log a separator
		console.log();
		console.log(`------------------`);

		// Supply all available data
		if (headers) console.log(date.toDateString(), `>>> Headers: ${headers}`);
		if (referrer) console.log(date.toDateString(), `>>> Referrer: ${referrer}`);
		if (reqPath) console.log(date.toDateString(), `>>> Path: ${reqPath}`);

		// Log the date and message
		console.log(date.toDateString())
		console.log(`${message}`);

		// Log a separator
		console.log(`------------------`);
		console.log();

		// Return a success message
		res.status(200).json({ message: 'Data received successfully' });
	} catch (error) {
		console.log(error);
		res.status(404).json({ message: `Error: ${error}` });
	}
}
