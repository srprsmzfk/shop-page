let express = require('express');
let app = express();
app.use(express.static('./dist/shop-page'));
app.get('/*', function (req, res) {
  res.sendFile('index.html', {root: 'dist/shop-page/'}
  );
});
app.listen(process.env.PORT || 8080);
