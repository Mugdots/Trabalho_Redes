import { MongoClient, ServerApiVersion } from "mongodb";

const url = process.env.ATLAS_URL || "";
const client = new MongoClient(url, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,

	},
});

try {
	await client.connect();
	await client.db("admin").command({ ping: 1 });

	console.log(
		"Você conectou com o Servidor, filho da puta"
	);
} catch(err) {
	console.error(err);
}

let db = client.db("funcionario");

export default db;

