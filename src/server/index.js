
const express = require('express');
const cors = require('cors');
const { db } = require('./firebase-config');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/sendBlogData', async (req, res) => {
  try {
    const blogData = req.body;
    
    // Validate required fields
    const requiredFields = ['title', 'content', 'author', 'category', 'image'];
    for (const field of requiredFields) {
      if (!blogData[field]) {
        return res.status(400).json({ error: `Missing required field: ${field}` });
      }
    }

    // Add timestamp if not provided
    if (!blogData.published_date) {
      blogData.published_date = new Date().toISOString().split('T')[0];
    }

    // Add reading time if not provided
    if (!blogData.reading_time) {
      const wordCount = blogData.content.split(' ').length;
      const minutes = Math.ceil(wordCount / 200); // Assuming 200 words per minute
      blogData.reading_time = `${minutes} minutes`;
    }

    // Save to Firebase
    const docRef = await db.collection('blogs').add(blogData);
    
    res.status(201).json({ 
      message: 'Blog post created successfully',
      id: docRef.id 
    });
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ error: 'Failed to create blog post' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
