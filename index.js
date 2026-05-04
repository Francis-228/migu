const fetch = require('node-fetch');
const config = require('./config.json');

exports.handler = async (event) => {
  const cid = event.queryStringParameters.cid || '';
  const { userId, userToken, clientId } = config;

  const apiUrl = `https://webapi.miguvideo.com/gateway/live/play/v1/playurl?contetId=${cid}&userId=${userId}&userToken=${userToken}&clientId=${clientId}`;
  
  const res = await fetch(apiUrl);
  const data = await res.text();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*"
    },
    body: data
  };
};
