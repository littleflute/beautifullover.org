//blMp3Player.js
var _v_blMp3Player = "v0.0.155";
var s = _v_blMp3Player;
s += '<a href="https://github.com/littleflute/beautifullover.org/edit/master/js/blMp3Player.js" target="_blank">blMp3Player.js*</a> - '; 
s += '<a href="https://littleflute.github.io/beautifullover.org/js/blMp3Player.js" target="_blank">blMp3Player.js</a>';

var playerUI = blo0.blMDiv(document.body,"id_mdiv_playerUI",s,50,50,400,300,blGrey[6]); 
 
function loadLyricOK(){ 
	 var l = document.getElementById("lrcdata");
	 var lDiv = blo0.blMDiv(document.body,"id_lDiv","lDiv",550,50,500,400,blGrey[6]);
	 lDiv.v = blo0.blDiv(lDiv,lDiv.id + "v","lDiv.v",blGrey[0]);
	 var lrcobj = new blLrcClass(lDiv.v, l.innerHTML,3,0);
	 lrcobj.blRun(lrcobj);
	
}

function _parseSource(_a,_div,_src){
  var d = _div;
  d.d0 = blo0.blDiv(d,d.id+"d0" ,"d0",blGrey[7]);   
  d.vs = [];
  for(i in _src){
      var v = blo0.blDiv(d,d.id+"v" + i, _src[i].name,blColor[i]);   
      v.d = blo0.blDiv(v,v.id+"d",_src[i].src,blColor[i]);   
      d.vs.push(v); 
      v.onclick = function(v_,src_){
        return function(){
          v_.innerHTML = this.id;
          _a.src = src_.src;
        }
      }(d.d0,_src[i]);
  }  
}

function _blMp3PlayerClass(p){
  var _audioObj = null;
  this.v = _v_blMp3Player;
  this. blrAudio = function(b,d){
    if(!d.v){
      d.v = blo0.blDiv(d,d.id+"v","v",blGrey[0]);      
      blo0.blAudio(d.v,d.v.id+"audio",p.music.source[0].src);
      _audioObj = bl$(d.v.id+"audio");
    }
    _on_off_div(b,d.v);
  }
  
  this. blrPlay = function(b,d){
    if(!d.v){
      d.v = blo0.blDiv(d,d.id+"v","v","blue");  
      d.isPlaying = false;
    }
    if(d.isPlaying){
      _audioObj.pause();
      d.isPlaying = false;
    }
    else{
      _audioObj.play();
      d.isPlaying = true;
    }
    _on_off_div(b,d.v);
    
  }
  this. blrSongList = function(b,d){
    if(!d.v){
      d.v = blo0.blDiv(d,d.id+"v","v",blGrey[0]);      
      _parseSource(_audioObj,d.v,p.music.source);
    }
    _on_off_div(b,d.v);
  }
  
  this. blrLoadLrc = function(b,d){
    if(!d.v){
      d.v = blo0.blDiv(d,d.id+"v","v",blGrey[0]);   
      var myLrc = "js/Lrc/1.js";
      if(myLrc) blo0.blScript("id_script_lrcdata",myLrc);
    }
    _on_off_div(b,d.v);
  }
  
  var _wrap = playerUI;
  _wrap.v = blo0.blDiv( _wrap,_wrap.id + "v","p",blGrey[0]);
  blo0.blShowObj2Div(_wrap.v,this);  
  bl$("blrAudio").click();
  bl$("blrSongList").click();
}



