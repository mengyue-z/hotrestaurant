const path = require('path');


module.exports = (app) => {

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '../public/table.html')));

app.get('/waitlist', (req, res) => res.sendFile(path.join(__dirname, '../public/res.html')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

}