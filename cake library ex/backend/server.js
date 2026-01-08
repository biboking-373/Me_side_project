require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./config/database");

connectDb()
app.use(express.json());

app.get("/mee", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Birthday Message</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #667eea, #764ba2);
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
          }
          .card {
            background: white;
            padding: 40px 60px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            text-align: center;
          }
          h1 {
            color: #333;
            font-size: 2.5rem;
            margin-bottom: 10px;
          }
          p {
            color: #666;
            font-size: 1.2rem;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🎉 Happy Birthday Ma Nigga 🎉</h1>
          <p>Wishing you an amazing day full of joy and success 🚀</p>
        </div>
      </body>
    </html>
  `)
});

const Port = process.env.PORT || 4000;

app.listen(Port, () => {
    console.log(`Server is alive and active on port ${Port}`)
    console.log("Bring in the requests baby!!!")
})
