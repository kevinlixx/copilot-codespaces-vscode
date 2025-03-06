// Create web server
const express = require('express');
const app = express();
const PORT = 3000; // Port number
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Set up the web server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));