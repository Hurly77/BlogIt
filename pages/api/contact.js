import { MongoClient } from 'mongodb';
const uri = process.env.DB;

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;

		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			res.status(422).json({ message: 'invalid input.' });
			return;
		}

		const newMessage = {
			email,
			name,
			message,
		};

		let client;
		try {
			client = await MongoClient.connect(uri, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
		} catch (err) {
			res
				.status(500)
				.json({ message: 'could not connect to database' });
			return;
		}

		try {
			const db = await client.db();
			let r = await db
				.collection('messages')
				.insertOne(newMessage);
			newMessage.id = r.insertedId;
		} catch (err) {
			client.close();
			res
				.status(500)
				.json({ message: 'Store message failed' });
			return;
		}

		client.close();

		res.status(201).json({ message: 'Success' });
	}
};

export default handler;
