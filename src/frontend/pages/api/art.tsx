// pages/api/art.js

import { NextApiRequest, NextApiResponse } from 'next';

let artData = []; // This would be your database in a real-world app

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      // Process a POST request
      const { title, author, description, image } = req.body;

      // In a real-world app, you'd validate the data and store it in a database
      artData.push({ title, author, description, image, id: Date.now() });

      // Send a response back to the client
      res.status(200).json({ message: 'Art submission successful' });
      break;
    default:
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
