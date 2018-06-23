/*var conditions = {audio:true, video:true};
navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;


window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
window.RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;
var peerConnectionConfig = {"iceServers": [{"urls": "stun:stun.l.google.com:19302"},{"urls":"stun:stun1.l.google.com:19302"}]};

var socket = new WebSocket("ws://34.219.191.45:9191");
//socket.onopen = to_open;
socket.onmessage = on_message;
socket.onclose = on_close;*/


var k = document.getElementsByClassName('.catalog_list');
// console.log(k.offsetHeight);

function get(v,id)
{
    //document.getElementById('detail_product_main_png').src="/assets/"+id+"/"+v;
    document.getElementById('detail_product_main_png').style.display='inline';
    document.getElementById('detail_product_main_png').src="/assets/"+id+"/"+v;
    document.getElementById('detail_product_main_video').style.display='none';
    document.getElementById('video_start_control').style.display='none';
    //document.getElementById('detail_product_main_video').style.display="none";
    //document.getElementById('detail_product_main_png').src = "/assets/"+id+"/"+v
    //s.src = "/assets/"+id+"/"+v
}
function get_video(v,id)
{
    //document.getElementById('detail_product_main_video').src="/assets/"+id+"/"+v;
    document.getElementById('detail_product_main_video').style.display='inline';
    document.getElementById('detail_product_main_video').src="/assets/"+id+"/"+v;
    document.getElementById('detail_product_main_png').style.display="none";
    document.getElementById('video_start_control').style.display='inline';
    //document.getElementById('detail_product_main_video').src="/assets/"+id+"/"+v
}
//= require jquery-2.2.4.js

$("#video_start_control").on("click",function (){var k = document.getElementById('detail_product_main_video');k.play();this.style.display='none';});
