var Hotel = require('../model/hotelModel');
async function list(req, res, next) {
    // res.end('User List')
    await Hotel.find().then((data, err) => {
        if (err) {
            res.status(500).json(err)

        } else {
            res.status(200).json(data)
        }
    })
}

async function deleteHotel(req, res, next) {
    const { id } = req.params;
    try {
        const deletedHotel = await User.findByIdAndDelete(id);
        if (!deletedHotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.status(200).json({ message: 'User deleted successfully', hotel: deletedHotel });
    } catch (err) {
        console.error('Error deleting hotel:', err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
}
const updateHotel = async (req, res, next) => {
    const { id } = req.params;
    const { name, fabricationDate } = req.body;
    try {
        const updatedHotel = await User.findByIdAndUpdate(id, { nom, fabricationDate }, { new: true });

        if (!updatedHotel) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedHotel);
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
}

const create = async (req, res, next) => {
    const { name, fabricationDate } = req.body;
    console.log(req.body.name);
    console.log(req.params.updateHotel);
    console.log(req.params);

    try {
        const hotel = new Hotel({
            name: name,
            fabricationDate: fabricationDate,
            nbrRooms: 10
        });

        await hotel.save();
        res.status(201).json({ message: 'Hotel created successfully', hotel });
    } catch (err) {
        console.log('Error creating Hotel: ' + err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
};
const searchHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find({ nbrRooms: { $gte: 10, $lte: 100 } });
        res.status(200).json(hotels);
    } catch (err) {
        console.log('Error searching Hotels: ' + err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
};



module.exports = { create, list, deleteHotel, updateHotel, searchHotels }