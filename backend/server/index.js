const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

const JWT_SECRET = 'your-secret-key';

// This points to backend/database.json
const databasePath = path.join(__dirname, '..', 'database.json');

// Helper function to read database.json
function readDatabase() {
  const data = fs.readFileSync(databasePath, 'utf-8');
  return JSON.parse(data);
}

// Helper function to save to database.json
function writeDatabase(data) {
  fs.writeFileSync(databasePath, JSON.stringify(data, null, 2));
}

app.get('/', (req, res) => {
  res.json({ message: 'Backend is running' });
});

app.post('/auth/register', async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ error: 'Missing email, password or name' });
  }

  const database = readDatabase();

  const existingUser = database.users.find(user => user.email === email);

  if (existingUser) {
    return res.status(400).json({ error: 'Email already registered' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: database.users.length + 1,
    name,
    email,
    password: hashedPassword,
  };

  database.users.push(newUser);
  writeDatabase(database);

  res.json({
    message: 'User registered successfully',
  });
});

app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  const database = readDatabase();

  const user = database.users.find(user => user.email === email);

  if (!user) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({
    message: 'Login successful',
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});