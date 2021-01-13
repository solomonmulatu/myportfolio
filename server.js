const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
var path = require('path');
const app = express();



// Init Middleware
app.use(cors(), express.json({extended: false})
);

app.use(express.static(path.join(__dirname,'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).redirect('/500.html');
})
app.use(bodyParser.urlencoded({extended: true}));
// app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/email', require('./route/email'));


// Capture All 404 errors
// app.use(function (req, res, next) {
//     res.status(404).redirect('/404.html');
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
