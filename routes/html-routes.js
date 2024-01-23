const router = require("express").Router();
const path = require("path");
//localhost:3001

router.get('/', (req, res, next) => {
    console.log("At my very base route");
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get('/notes', (req, res, next) => {
    console.log("At my /notes route");
    res.sendFile(path.join(__dirname, "../public/notes.html")); 
});

module.exports = router;