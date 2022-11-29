const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/',(req, res) =>{
	res.send('Hi it is sunny');
});

app.listen(PORT, () => console.log(`Server listen on port: ${PORT}`));
