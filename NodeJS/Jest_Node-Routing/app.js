const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
var cors = require('cors');
const defaultRoutes =  require("./routes");

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser('jwtToken'));
app.use('/api', defaultRoutes);

const port = 5000;

app.listen(port, () => {
	console.log('Server is running on http://localhost: ', {port});
});