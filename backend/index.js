const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Conexão com MongoDB
mongoose.connect('mongodb://database:27017/fullstack', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ItemSchema = new mongoose.Schema({
  name: String,
});
const Item = mongoose.model('Item', ItemSchema);

// Conexão com Redis
const redisClient = redis.createClient({
  url: 'redis://cache:6379',
});
redisClient.connect();

// GET /items com cache Redis
app.get('/items', async (req, res) => {
  try {
    const cacheKey = 'items';
    const cached = await redisClient.get(cacheKey);
    if (cached) {
      return res.json(JSON.parse(cached));
    }
    const items = await Item.find();
    await redisClient.setEx(cacheKey, 10, JSON.stringify(items));
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /items
app.post('/items', async (req, res) => {
  try {
    const { name } = req.body;
    const newItem = new Item({ name });
    await newItem.save();
    // Limpa o cache após inserir
    await redisClient.del('items');
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log('Backend rodando na porta 5000');
}); 