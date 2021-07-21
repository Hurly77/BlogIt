import { MongoClient } from 'mongodb';
const uri = process.env.DB;

export const connectDB = async () => {
	let client;
	try {
		client = await MongoClient.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (err) {
		res
			.status(500)
			.json({ message: 'could not connect t database' });
	}

	return client;
};

export const insertDoc = async (collection, doc) => {
	const client = await connectDB();
	let res;

	try {
		const db = await client.db();
		res = await db.collection(collection).insertOne(doc);
	} catch (err) {
		res
			.status(500)
			.json({ message: 'Store message failed' });
		return;
	}

	return;
};

export default connectDB;
