// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery-2.2.4.js 
//= require bloodhound.js
//= require typeahead.jquery.js
//= require typeahead.bundle.js
//= require helpers.js
//= require jquery-ui.js
//= require jquery.simple.websocket.js
//= require_tree .

/*var conditions = {audio:true, video:true};
navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;


window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
window.RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;
var peerConnectionConfig = {"iceServers": [{"urls": "stun:stun.l.google.com:19302"},{"urls":"stun:stun1.l.google.com:19302"}]};

var socket = new WebSocket("ws://35.164.105.114:9191");
socket.onopen = to_open;
socket.onmessage = on_message;
socket.onclose = on_close;

var vkk=0;
function start()
{
        var kkk = document.getElementById('upload_name');
        var ppp = {"name":"BRO","type":"messages"};
        var data = JSON.stringify(ppp);
        staff.push(kkk.value);
        //console.log(staff.length);
        socket.send(data);
        return staff;
}

function on_message(e)
{
        vkk = e.data;
        //var data = JSON.parse(ppp);
        //console.log(vkk);
        return vkk;
}
function to_open()
{
   var ppp = {"name":"OK","type":"connection"};
   var data = JSON.stringify(ppp);
   socket.send(data);
}
function on_close()
{
        socket.close();
}

var staff=['Programming'];
var tk = function()
{
	return staff;
}
*/
/*var states = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  // `states` is an array of state names defined in "The Basics"
  local: states=['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
],
  remote: {
            url: 'http://52.89.128.16:8982/solr/#/development/select?q=name_texts:%QUERY', ajax: {
                  type: "POST",
                  dataType: 'json',
                  data: { 
                          'wt':'json',
                          'row':1
                        }
                },
                filter: function(data) {
                    console.log(data.spellcheck.suggestions[1])
                    return $.map(data.spellcheck.suggestions[1].suggestion, function(data) {
                return {
                    value: data
                };
            });
           }
        }
});

states.initialize();
*/
/*$("#search_input").typeahead({
 hint: true, 
 highlight: true, 
 minLength: 1
},
{
name: 'staff',
source: states});*/
var match=[];
var bk = document.getElementById("suggestion_area");
var zk = document.getElementById("suggestion_list");
var ppl = document.getElementById("search_input");
ppl.oninput=function (e){
//console.log("?????>"+e.target.value);
 vvv = e.target.value;
         var aal = 0; 
           var kkp = document.getElementsByClassName("suggest_val");
           for (;aal<kkp.length;aal++)
           {
               zk.removeChild(kkp[aal]);
           }
           console.log("?????"+kkp.length);
           if (kkp.length>0)
           {
               zk.removeChild(kkp[0]);
           }
           for (var a=0;a<match.length;a++)
           {
                if (match[a].substr(0,vvv.length)==vvv && vvv.length>0)
                {
                        var tk = document.createElement("li");
                        tk.setAttribute("class","suggest_val");
                        tk.innerHTML = "<strong>"+match[a].substr(0,vvv.length)+"</strong>";
                        tk.innerHTML = tk.innerHTML + match[a].substr(vvv.length);
                        tk.name=match[a];
                        zk.appendChild(tk);
                }
           }
           /*for (var a=0;a<kkp.length;a++)
	   {
		zk.removeChild(kkp[a]);
           }*/
} 
$(function(){
  //var bk = document.getElementById("suggestion_area");
  //var zk = document.getElementById("suggestion_list");
  //console.log("????????????"+list.length);
  var list=[];
  var socket = $.simpleWebSocket({url:'ws://54.189.176.105:9191/'});
  socket.connect();
  socket.send({'name':'SOCKET'});
  socket.listen(function (e){
         console.log(e.name);
         if (match.indexOf(e.name)<0)
         {
             console.log("PUSH "+e.name);
             match.push(e.name);
         }
         });
  var ckc = document.getElementsByClassName("catalog_items");
  var lp = document.getElementById("catalog_ist");
  for (var a=0,b=1;a<ckc.length;a++,b++)
  {
	if ((b%3)==0)
        {
            //console.log(">>>>>"+b);
           //ckc[a].style.float='left';
        }
  }
  /*$("#search_input").on("input",function (){
           vvv = $("#search_input").val();
           console.log("#####");
           //var zk = document.createElement("div");
           //zk.setAttribute("class","suggestion_area");
           //this.parentNode.parentNode.parentNode.parentNode.appendChild(zk);
           for (var a=0;a<match.length;a++)
           {
		if (match[a].substr(0,vvv.length)==vvv && vvv.length>0)
		{
                        var tk = document.createElement("li");
                        tk.setAttribute("class","suggest_val");
                        tk.innerHTML = "<strong>"+match[a].substr(0,vvv.length)+"</strong>";
                        tk.innerHTML = tk.innerHTML + match[a].substr(vvv.length);
                        tk.name=match[a];
                        zk.appendChild(tk);
		}
           }
           var kkk = document.getElementsByClassName("suggest_val");
           for (var a=0;a<kkk.length-1;a++)
	   {
		kkk[a].parentNode.removeChild(kkk[a]);
           }
  });*/
  //console.log(list.length),
  /*$("#search_input").autocomplete({
      source: match
   });*/
  document.onclick=function(e){
          console.log(e.target.name);
           if (e.target.tagName == "LI")
           {
              console.log("OK???");
              $("#search_input").val(e.target.name);
              /*var kkp = document.getElementsByClassName("suggest_val");
              for (var a=0;a<=kkp.length;a++)
              {
                  kkp[a].parentNode.removeChild(kkp[a]);
              }*/
              bk.removeChild(zk);
           }
          }
});
