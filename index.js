const fetch = require('node-fetch');

module.exports = async (req, res) => {
  res.setHeader('*','Access-Control-Allow-Origin');
  const uid = "985622662";
  const token = "nlps2D562D817105A67396C8";
  const cid = req.query.cid;
  const url = `https://webapi.miguvideo.com/gateway/live/play/v1/playurl?contetId=${cid}&userId=${uid}&userToken=${token}&clientId=80001`;
  const d = await fetch(url).then(x=>x.text());
  res.send(d);
};
