
const waitlist = require('../data/waitinglistData')
const reservations = require('../data/tableData');

module.exports = (app) => {
    app.get('/api/reservations', (req, res) => {
        return res.json(reservations);
    });

    app.get('/api/waitlist', (req, res) => {
        return res.json(waitlist);
    });

    app.post('/api/reservations', (req, res) => {

        if (reservations.length < 5) {
            reservations.push(req.body);
            res.json(true);
        } else {
            waitlist.push(req.body);
            res.json(false);
        }
    });

    app.post('/api/clear', (req, res) => {
        waitlist = 0
        reservations = 0
        res.json({ ok: true });
    });
}
