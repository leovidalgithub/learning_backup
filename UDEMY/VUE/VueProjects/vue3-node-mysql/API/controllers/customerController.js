const controller = {};

controller.list = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM testing', (err, results) => {
		if (err) {
			res.json(err);
		}
		res.json(results)
		});
	});
};

module.exports = controller;
