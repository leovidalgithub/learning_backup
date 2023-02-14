const controller = {};

controller.list = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM Testing', (err, results) => {
		if (err) {
			console.log(err);
			res.status(500).json(err);
		}
		res.json(results)
		});
	});
};

module.exports = controller;
