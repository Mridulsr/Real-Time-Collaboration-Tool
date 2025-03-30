const express = require('express');
const Document = require('../models/Document');
const { verifyToken } = require('../middleware/auth');
const router = express.Router();

// Get all documents for logged-in user
router.get('/', verifyToken, async (req, res) => {
    try {
        const documents = await Document.find({ owner: req.user.id });
        res.json(documents);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a new document
router.post('/', verifyToken, async (req, res) => {
    const { title, content } = req.body;

    try {
        const newDocument = new Document({
            title,
            content,
            owner: req.user.id,
        });

        await newDocument.save();
        res.json(newDocument);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
