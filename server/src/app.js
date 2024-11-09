import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// Middleware
app.use(morgan('combined')); // Logging requests in 'combined' format
app.use(express.json()); // Built-in middleware to parse JSON request bodies
app.use(cors()); // Enable CORS

// Example route
app.get('/status', (req, res) => {
  res.send({
    message: "Hello World"
  });
});

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
