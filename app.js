const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));
app.use('/public/', express.static('./public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})