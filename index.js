const express = require('express')
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const port = 3000

const API_KEY = process.env.API_KEY

app.get('/fetch-movie', async (req, res) => {
  try {
    const movieId = '20413'; // Replace with the specific movie ID
    const endpointUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
    
    const response = await axios.get(endpointUrl);
    
    // Send the movie data as a JSON response
    res.json(response.data);
  } catch (error) {
    // Handle errors and send an error response
    res.status(500).json({ error: 'An error occurred while fetching movie data.' });
  }
});

app.listen(port, () => {
  console.log(`server is listening on port 3000...`);
})