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
            console.log(events[0])
            return res.status(200).json({ events });
        }
    })
}

const newEvent = function (req, res) {
    const { event, date, time, details } = req.body;
   
    const event = new TimelineViola({event, date, time, details});

    event.save(function (error) {
        if (error) {
          return res.status(404).json({ message: "Server error!" });
        }
        return res.status(200).json({details });
      })
}

module.exports = {allEvents, newEvent};