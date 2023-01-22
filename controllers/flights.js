const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

function index(req,res){
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title:'All Flights', flights });
    });
}

function newFlight(req,res){
    res.render('flights/new', {title: 'Add A Flight'})
}

function create(req,res){
    const flight = new Flight(req.body)
    const dt = newFlight.departs;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    flight.save(function(err){
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights');
    })
}

function show(req, res) {
    Flight.findOne({ _id: req.params.id }, function (err, flight) {
    console.log("got a flight");
    Ticket.find({ flight: flight._id }, function (err, tickets) {
        console.log("got a ticket");
        res.render("flights/show", { flight, tickets });
    });
})
}