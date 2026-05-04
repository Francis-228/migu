const fetch = require('node-fetch');

// 👇替换成你自己的咪咕账号参数
const MIGU_USERID = "985622662";
const MIGU_TOKEN = "nlps2D562D817105A67396C8";

async function getPlayUrl(cid) {
  const api = `https://webapi.miguvideo.com/gateway/live/play/v1/playurl?contetId=${cid}&userId=${MIGU_USERID}&userToken=${MIGU_TOKEN}&clientId=80001`;
  const res = await fetch(api);
  return res.text();
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const cid = req.query.cid || "";
  const data = await getPlayUrl(cid);
  res.end(data);
};
