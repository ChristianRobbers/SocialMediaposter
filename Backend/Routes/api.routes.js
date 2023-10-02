const express = require('express');
const checkAuth = require('../Middleware/checkAuth.middleware');
const scrapeAllProperty = require('../Middleware/scrapeAllProperties.middleware');
const scrapeSingleProperty = require('../Middleware/scrapeSingleProperty.middleware');
const router = express.Router();

router.get("/scraper", scrapeAllProperty, async (req, res) => {
    try {
        
        return res.status(200).json({
            result: req.scrape
        })

    } catch (err) {
        return res.status(500).json({
            err: err.toString()
        })
    }
})

router.get("/scraper/property", scrapeSingleProperty, async (req, res) => {
    try {
        return res.status(200).json({
            result: req.scrape
        })

    } catch (err) {
        return res.status(500).json({
            err: err.toString()
        })
    }
})

module.exports = router