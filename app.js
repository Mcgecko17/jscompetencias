const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
const formRouter = require('./routes/form');
const resultsRouter = require('./routes/results');

app.use('/', indexRouter);
app.use('/form', formRouter);
app.use('/results', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'results.html'));
});
app.use('/api/results', resultsRouter);

const sequelize = require('./config/database');
sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
        app.listen(port, () => {
            console.log(`App running at http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });