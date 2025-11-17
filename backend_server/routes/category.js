const express = require('express')

const router = express.Router()
const result = require('../utils/result')
const pool = require('../utils/db')

router.post('/add', (req, res) => {
    console.log('postC')
    const {title} = req.body
    const sql = 'insert into categories(title) values(?)'
    pool.query(sql, [title], (err, data) => {
        res.send(result.createResult(err, data))
    })
})

router.get('/all', (req, res) => {
    const sql = 'select * from categories'
    pool.query(sql, (err, data)=>{
        res.send(result.createResult(err, data))
    })
})

router.delete('/delete', (req, res) => {
    const { category_id } = req.body
    const sql = 'DELETE from categories WHERE category_id = ?'
    pool.query(sql, [category_id], (err, data) => {
        res.send(result.createResult(err, data))
    })
})


router.put('/update', (req, res) => {
    const { title, category_id } = req.body;
    const sql = 'UPDATE categories SET title = ? WHERE category_id = ?';
    pool.query(sql, [title, category_id], (err, data) => {
        res.send(result.createResult(err, data));
    });
});

module.exports = router