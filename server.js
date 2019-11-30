express = require('express');
dotenv = require('dotenv');
morgan = require('morgan');

// route files
const tasks = require('./routes/tasks');

// load env vars
dotenv.config({
	path: './config/config.env'
});

const app = express();


// dev logging
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}
const logger = (req, res, next) => {
	req.hello = 'Hi there';
	console.log('middlewreee');
	next();
}

app.use(logger);

// mount touters
app.use('/api/v1/tasks', tasks);




const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Started server in ${process.env.NODE_ENV} mode on port ${PORT}`));