const router = require("express").Router();
const fs = require('fs');
const path = require("path");
const { v4: uuidv4 } = require('uuid');

notesFilePath = path.join(__dirname, "../db/db.json")
//localhost:3001/api
router.get("api/notes", (req,res) => {

    fs.read(notesFilePath, (data, err) => {
        if (err){
            console.log(err)
        } else {
            console.log(data)
            res.json(data)
        }
    })

});

router.post("api/notes", (req,res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8"));
    const newNotes = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
        dbJson.push(newNotes);
        fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
        res.json(dbJson);
});

module.exports = router;