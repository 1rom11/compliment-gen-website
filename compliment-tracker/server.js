const express =	require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app =	express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Compliment counter (stored in memory	for	simplicity)
let	totalComplimentsGenerated =	0;

// Endpoint	to get the current count
app.get('/api/compliments/count', (req,	res) => {
	res.json({ total: totalComplimentsGenerated	});
});

// Endpoint	to increment the counter
app.post('/api/compliments/increment', (req, res) => {
	totalComplimentsGenerated += 1;
	res.json({ total: totalComplimentsGenerated	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
