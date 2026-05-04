<?php
// 咪咕登录版 私有解析
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$userId = "985622662";
$userToken = "nlps2D562D817105A67396C8";
$cid = $_GET['cid'];

// 咪咕官方直播接口
$url = "https://webapi.miguvideo.com/gateway/live/play/v1/playurl?contetId=$cid&userId=$userId&userToken=$userToken&clientId=xxx";

$res = file_get_contents($url);
echo $res;
?>
