import express from "express";

import db from "../db/connection.js";

import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
	let collection = await db.collection("records");
	let results = await collection.find({}).toArray();
	res.send(results).status(200);

});


router.get("/:id", async (req, res) => {
	let collection = await db.collection("records"); 
	let query = { _id: new ObjectId(req.params.id) };
	let result = await collection.findOne(query);

	if (!result) res.send("Não Achado").status(404);
	else res.send(result).status(200);
});

router.post("/", async (req, res) => {
	try {
		let newDocument = {
			nome: req.body.nome,
			data: req.body.data
		};
		let collection = await db.collection("records");
		let result = await collection.insertOne(newDocument);
		res.send(result).status(204);
	} catch (err) {
		console.error(err);
		res.send("Não foi Possível Inserir").status(500)
	}

});

router.patch("/:id", async (req, res) => {
	try {
		const query = { _id: new ObjectId(req.params.id) };
		const updates = {
			$set: {
				nome: req.body.name,
				data: req.body.data,
			},
		};
        let collection = await db.collection("records");
        let result = await collection.updateOne(query, updates);
	res.send(result).status(200);
	} catch (err) {
		console.error(err);
		res.send("Não foi possível alterar").status(500)
	}
});

router.delete("/:id", async (req, res) => {
	try {
		let query = { _id: new ObjectId(req.params.id) };
		let collections = await db.collections("records");
		let result = collections.deleteOne(query);
		res.send(result).status(200);
	} catch (err) {
		consoler.error(err);
		res.send("Não foi possível deletar").status(500)
	}
});

export default router;

