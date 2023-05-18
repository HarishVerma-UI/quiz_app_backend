import app from './app.js';
import 'dotenv/config';
import { connectToMongoDB } from './mongodb.js';

const PORT = process.env.PORT;

connectToMongoDB()
  .then((client) => {
    client.close();
    app.listen(PORT, () => {
      console.log(`API running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start the API:', error);
  });
