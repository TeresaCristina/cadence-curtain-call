const TimelineViola = require('../schemas/timelineviola');


const violaTimeline = function (req, res) {
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

module.exports = {violaTimeline};