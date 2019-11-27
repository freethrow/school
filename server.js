express = require('express');
dotenv = require('dotenv');

// load env vars
dotenv.config({path:'./config/config.env'});

const app = express();

app.get('/api/v1/tasks',
	(req,res) => {
		res.status(200).json({success:true, msg:'Show all tasks'});
		
	})
app.get('/api/v1/tasks/:id',
	(req,res) => {
		res.status(200).json({success:true, msg:`Show task ${req.params.id}`});
		
	})

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Started server in ${process.env.NODE_ENV} mode on port ${PORT}`));