const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

var fs = require("fs"), json;

function readJsonFile(filepath, encoding) {
    if (encoding === "undefined") {
        encoding = "utf-8";
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

const data = readJsonFile("../Leo.json", "utf-8");


app.post("/api/chat", (req, res) => {
    let botResponse = "Could not find appropriate response";
    
    // Get message from the request body, 
    // make everything lowercase and get rid of non-letter chars
    const userMessage = req.body.message.toLowerCase().replace(/[^a-zA-Z]/g, "");

    // For debugging
    console.log("MESSAGE: " + userMessage);
    
    // Separate message into words, look for specific intent of
    // message and give appropriate response
    const words = userMessage.split(" ");
    for (const category of data.categories) {
        for (const word of words) {
            if (category.matchers.includes(word)) {
                console.log(category.matchers);
                botResponse = category.responses[Math.floor(Math.random() * category.responses.length)];
                break;
            }
        }
    }

    return res.json({
        response: `${botResponse}`
    });
});

app.listen(5000, () => {
    console.log("Backend running on http://localhost:5000");
})