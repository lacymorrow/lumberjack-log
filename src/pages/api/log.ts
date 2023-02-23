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
	try {
		const { message } = req.query;
		console.log(`Logged: ${message}`);
		res.status(200).json({ message: 'Data received successfully' });
	} catch (error) {
		res.status(404).json({ message: 'Server error' });
	}
}
