import { connectToDatabase } from '../../../lib/mongodb';
import User from '../../../models/user';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  try {
    console.log('🔍 Connecting to database...');
    await connectToDatabase();
    const { username, password } = req.body;
    const user = await User.findOne({ username }).lean(); 

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
        // Generate JWT token
        const token = jwt.sign(
          { userId: user._id, username: user.username },
          process.env.SECRET_KEY,
          { expiresIn: '10m' } // Token expires in 10 minutes
        );
    
    return res.status(200).json({ message: 'Login successful' ,token});

  } catch (error) {
    console.error('❌ Error in login route:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
