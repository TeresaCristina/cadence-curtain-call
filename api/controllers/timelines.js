const TimelineViola = require('../schemas/timelineviola');


const allEvents = function (req, res) {
    TimelineViola.find({}, function (error, events) {
        if (error) {
            return res.status(404).json({ message: "Server error!" });
        }
        if (!events) {
            return res.status(401).json({ message: "There is no events in this timeline!" });
        }
        if (events) {
            return res.status(200).json({ events });
        }
    })
}

const getEvent = function (req, res) {
    const {id} = req.body;
    TimelineViola.findById(id, function (error, event) {
        if (error) {
            return res.status(404).json({ message: "Server error!" });
        }
        if (!event) {
            return res.status(401).json({ message: "There is no events in this timeline!" });
        }
        if (event) {
            return res.status(200).json({ event });
        }
    })
}

const newEvent = function (req, res) {
    const { event, date, time, details } = req.body;
    const addEvent = new TimelineViola({event, date, time, details});
    addEvent.save(function (error) {
        if (error) {
          return res.status(404).json({ message: "Server error!" });
        }
        return res.status(200).json({addEvent});
      })
}

const editEvent = function (req, res) {
    const id = req.params.id;
    const newValues = {
        $set: {
            event: req.body.event,
            date: req.body.date,
            time: req.body.time,
            details: req.body.details,
        }
    };
    TimelineViola.updateOne({ "_id" : id }, newValues, function (error, event) {
        if (error) {
            return res.status(404).json({ message: "Server error!" });
        }
        if (!event) {
            return res.status(401).json({ message: "This event does not exist!" });
        }
        if (event) {
            return res.status(200).json({ event });
        }
    })
}

const deleteEvent = function (req, res) {
    const id = req.params.id;
    console.log(id)
    TimelineViola.deleteOne({ "_id": id }, function (error, event) {
        if (error) {
            return res.status(404).json({ message: "Server error!" });
        }
        if (!event) {
            return res.status(401).json({ message: "This safety measure does not exist!" });
        }
        if (event) {
            return res.status(200).json(event);
        }
    })
}


module.exports = {allEvents, newEvent, getEvent, editEvent, deleteEvent};