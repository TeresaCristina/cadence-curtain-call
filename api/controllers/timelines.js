const TimelineViola = require('../schemas/timelineviola');


const viola = function (req, res) {
    TimelineViola.findOne({}, function (error, events) {
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

module.exports = {viola};