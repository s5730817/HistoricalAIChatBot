const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", (req, res) => {
    const userMessage = req.body.message;

    return res.json({
        response: `you said ${userMessage}`
    });
});

app.listen(5000, () => {
    console.log("Backend running on http://localhost:5000");
})