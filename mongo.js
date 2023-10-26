const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://TestTest:TestTest@goldtrade.skpkklp.mongodb.net/";
const client = new MongoClient(uri);

async function run() {
	try {
		await client.connect();
		const db = client.db("gold");
		const collection = db.collection("start");

		// Find the first document in the collection
		// const first = await collection.findOne();
		// console.log(first);

		const estimate = await collection.estimatedDocumentCount();
    console.log(`Estimated number of documents in the movies collection: ${estimate}`);		

		// const first = await collection.insertOne({
		// 	title: "Post Title 1",
		// 	body: "Body of post.",
		// 	category: "News",
		// 	likes: 1,
		// 	tags: ["news", "events"],
		// 	date: Date(),
		// });

		

	} finally {
		// Close the database connection when finished or an error occurs
		await client.close();
	}
}
run().catch(console.error);


