const fetch = require('node-fetch');
const config = require('./config.json');

async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const cid = req.url.split('cid=')[1] || '';
  if(!cid) return res.end('缺少频道CID');

  const {userId, userToken, clientId} = config;
  const api = `https://webapi.miguvideo.com/gateway/live/play/v1?contetId=${cid}&userId=${userId}&userToken=${userToken}&clientId=${clientId}`;

  try {
    const r = await fetch(api);
    const text = await r.text();
    res.end(text);
  } catch(e) {
    res.end('解析失败');
  }
}

module.exports = handler;
