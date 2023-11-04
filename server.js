// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Sample podcast episode data (to mimic a database)
const podcastEpisodes = [
  { id: 1, title: 'Episode 1', description: 'Description of Episode 1' },
  { id: 2, title: 'Episode 2', description: 'Description of Episode 2' },
  // Add more episodes here
];

// Define routes

// Get a list of all podcast episodes
app.get('/api/episodes', (req, res) => {
  res.json(podcastEpisodes);
});

// Get a single episode by ID
app.get('/api/episodes/:id', (req, res) => {
  const episodeId = parseInt(req.params.id);
  const episode = podcastEpisodes.find(ep => ep.id === episodeId);

  if (!episode) {
    res.status(404).json({ error: 'Episode not found' });
  } else {
    res.json(episode);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
fetch('http://localhost:3000')
  .then(response => {
    return response.json(); // Assuming the response is in JSON format
  })
  .then(data => {
    // Handle the response data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors here
    console.error(error);
  });