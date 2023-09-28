const logger = (req, res, next) => {
	const { url, ip, method } = req;

	console.log(`Effettuata richiesta ${method} all'endpoint ${ip}`);

	next();
};

module.exports = logger;
