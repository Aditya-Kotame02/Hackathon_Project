const express = require('express')

const router = express.Router()
const result = require('../utils/result')
const pool = require('../utils/db')


// create blog
router.post('/add', (req, res) => {
    const user_id = req.headers.user_id
    console.log(user_id)
    const {title, contents, category_id } = req.body
    const sql = 'insert into blogs(title, contents,user_id, category_id ) values(?,?,?,?)'
    pool.query(sql, [title, contents, user_id, category_id], (err, data) => {
        res.send(result.createResult(err, data))
    })
})

router.get('/all', (req, res) => {
    const sql = 'SELECT u.full_name, b.title AS blog_title, b.contents, c.title AS category_title FROM users u INNER JOIN blogs b ON b.user_id = u.user_id INNER JOIN categories c ON b.category_id = c.category_id';
    
    pool.query(sql, (err, data) => { 
        res.send(result.createResult(err, data));
    });
});


// View My blogs
router.get('/myblogs', (req, res) => {
  const user_id = req.headers.user_id;
  const sql = `SELECT b.blog_id, b.title AS blog_title, b.contents, 
              c.title AS category_title
              FROM blogs b
              INNER JOIN categories c 
              ON b.category_id = c.category_id
              WHERE b.user_id = ?`;
  pool.query(sql, [user_id], (err, data) => {
    res.send(result.createResult(err, data));
  })
})

// delete blogs
router.delete('/delete/:blog_id', (req, res) => {
    const {blog_id} = req.params
    const sql = 'delete from blogs where blog_id = ?'
    pool.query(sql, [blog_id] , (err, data) => {
        res.send(result.createResult(err, data))
    })
})

// search blogs
router.get('/search', (req, res) => {
    const title = req.query.title;
    const sql = `SELECT u.full_name, b.title AS blog_title, b.contents, c.title AS category_title
                 FROM blogs b
                 INNER JOIN users u ON b.user_id = u.user_id
                 INNER JOIN categories c ON b.category_id = c.category_id
               WHERE b.title LIKE ?`
    pool.query(sql, [`%${title}%`], (err, data) => {
        res.send(result.createResult(err, data))
    })
})


// get blog id
router.get('/:blog_id', (req, res) => {
    const { blog_id } = req.params;
    const sql = `
        SELECT b.blog_id, b.title, b.contents, b.category_id, c.title AS category_title
        FROM blogs b
        INNER JOIN categories c ON b.category_id = c.category_id
        WHERE b.blog_id = ?`
    pool.query(sql, [blog_id], (err, data) => {
        res.send(result.createResult(err, data));
    });
});

module.exports = router