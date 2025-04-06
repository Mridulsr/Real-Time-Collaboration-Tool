// Import the express module
const express = require("express");

// Initialize the express app
const app = express();

// Define the port
const port = 3000;

// Middleware - Use express.json() to parse JSON request bodies
app.use(express.json());

// Define route for the home page
app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.get("/image", (req, res) => {
  res.send("Welcome to the image page");
});

// Route to get user details by ID (URL parameter)
app.get("/user/:id", (req, res) => {
  const userid = req.params.id;
  res.send(`User ID received is: ${userid}`);
});

// Query method
app.get("/search", (req, res) => {
  const query = req.query.keyword;
  res.send(`Query received is: ${query}`);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`username:${username} password:${password}`); // Corrected template literal
});

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
