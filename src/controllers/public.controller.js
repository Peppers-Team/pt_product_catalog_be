const path = require('path');

const fs = require('fs');
const getImage = (req, res) => {
	const file = path.resolve(
		'public',
		'img',
		req.params.deviceType,
		req.params.deviceName,
		req.params.deviceColor,
		req.params.image)

	fs.access(file, fs.constants.F_OK, (err) => {
		if (err) {
			res.status(404).send({ message: { ...err, text: 'Wrong file path, file not found' }});
			return
		}

		res.sendFile(file);
	});
}

module.exports = { getImage };
