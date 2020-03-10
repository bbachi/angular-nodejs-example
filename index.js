const express = require('express');
const app = express(),
      port = 3080;

app.get('/', (req,res) => {
    res.send('App Works !!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
