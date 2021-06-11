const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const cors = require('cors');

const apiRoutes = require('./routes');
const { connect } = require('mongoose');
const bodyParser = require('body-parser');
const { userSeeder } = require('./seeder');

dotenv.config();

const app = express();

// DB connection
connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Database connected successfully!!!');
    userSeeder.addUser(); // seeder to add user data
  })
  .catch((error) => {
    console.log('Error in database connection', error.message);
  });

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ limit: '100mb' }));

const corsOption = {
  origin: true,
  methods: 'GET,PUT',
  credentials: true,
};

// CORS configuration
app.use(cors(corsOption));
app.use('/api/v1', apiRoutes);

/*
------------------
    Create Server
------------------
*/

const server = http.createServer(app);

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`App Listening on port ${port}!!!`);
});
