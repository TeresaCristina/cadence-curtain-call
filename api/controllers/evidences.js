const Evidences = require('../schemas/evidences');

const allEvidences = function (req, res) {
    Evidences.find({}, function (error, evidences) {
        if (error) {
            return res.status(404).json({ message: "Server error!" });
        }
        if (!evidences) {
            return res.status(401).json({ message: "There is no events in this timeline!" });
        }
        if (evidences) {
            return res.status(200).json({ evidences });
        }
    })
}

module.exports = { allEvidences };