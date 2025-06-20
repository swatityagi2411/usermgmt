const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/users');

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
