const  express = require('express'),
	   morgan = require('morgan')
	   path = require('path');


//making intsace of express app 
const app = express()

//setting up middleware 
//logger 
app.use(morgan('dev'));
//TODO: static file middlewar
app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static(path.join(__dirname, 'assets')));
// app.set('views', './public')

//test route 
app.get('/', (req, res) => {
	res.render('index')
})

const port = process.env.PORT || 3000

//starting the server 
app.listen(port, () => console.log(`server tsrting on localhost:${port}`))

