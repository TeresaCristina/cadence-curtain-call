const Suspects = require('../schemas/suspects');


const allSuspects = function (req, res) {
    Suspects.find({}, function (error, suspects) {
        if (error) {
            return res.status(404).json({ message: "Server error!" });
        }
        if (!suspects) {
            return res.status(401).json({ message: "There is no events in this timeline!" });
        }
        if (suspects) {
            return res.status(200).json({ suspects });
        }
    })
}

const getSuspect = function (req, res) {
    const { id } = req.body;
    Suspects.findById(id, function (error, suspect) {
        if (error) {
            return res.status(404).json({ message: "Server error!" });
        }
        if (!suspect) {
            return res.status(401).json({ message: "There is no events in this timeline!" });
        }
        if (suspect) {
            return res.status(200).json({ suspect });
        }
    })
}

const newSuspect = function (req, res) {
    const { name, picture, title, details } = req.body;
    console.log(req.body)
    const addSuspect = new Suspects({ name, picture, title, details });
    addSuspect.save(function (error) {
        if (error) {
            return res.status(404).json({ message: "Server error!" });
        }
        return res.status(200).json({ addSuspect });
    })
}

const editSuspect = function (req, res) {
    const { id } = req.body;

    const newValues = {
        $set: {
            name: req.body.name,
            picture: req.body.picture,
            title: req.body.title,
            details: req.body.details,
        }
    };
    Suspects.updateOne({ "_id": id }, newValues, function (error, suspect) {
        if (error) {
            return res.status(404).json({ message: "Server error!" });
        }
        if (!suspect) {
            return res.status(401).json({ message: "This event does not exist!" });
        }
        if (suspect) {
            return res.status(200).json({ id });
        }
    })
}

const deleteSuspect = function (req, res) {
    const id = req.params.id;
    console.log(id)
    Suspects.deleteOne({ "_id": id }, function (error, suspect) {
        if (error) {
            return res.status(404).json({ message: "Server error!" });
        }
        if (!suspect) {
            return res.status(401).json({ message: "This safety measure does not exist!" });
        }
        if (suspect) {
            return res.status(200).json(suspect);
        }
    })
}

module.exports = { allSuspects, newSuspect, getSuspect, editSuspect, deleteSuspect };