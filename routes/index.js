import express from 'express';
import data from '../data/articles.js';

const router = express.Router();

router.get('/', (_, res) => {
  res.render('index', {
    title: 'Product Listing',
    articles: data
  });
});

router.get('/articles/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const article = data.find(a => a.id === id);
  res.render('article', {
    title: article.name,
    article: article.body
  });
});

router.post('/articles', (req, res) => {
  const { name, body } = req.body;
  data.push({
    id: Math.floor(Math.random() * 1000000),
    name,
    body
  })
  setTimeout(() => {
    res.render('partials/list', {articles: data});
  }, 3000);
})

export default router;

