import app from "./core/server";
import config from "./config/index";
import sequelize from "./config/database";

const port = config.PORT || 4000;

(async () => {
	console.log("Awaiting Database Configuration");
	await sequelize.authenticate();
	await sequelize.sync()
	console.log("Database Connected Successfully");
	app.listen(port, () => {
		console.log(` Server is currently running on Port: ${port}`);
	});
})();