const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require('axios');
// Express Configuration
const app = express();
const port = 3080;

app.use(bodyParser.json());
app.use(cors());
app.use(require("morgan")("dev"));

// Open AI Configuration
const configuration = new Configuration({
  organization: 'org-EBv6mR6wH5zVg5eSWoG3GTKJ',
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);


app.post("/", async (req, res) => {
  const  message  = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 256,
    temperature: 0.7,
  });
  res.json({
    message: response.data.choices[0].text,
  });
});

// Get Models Route



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
module.exports = app;
