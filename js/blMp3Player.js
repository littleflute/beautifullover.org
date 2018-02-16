//blMp3Player.js
var _v_blMp3Player = "v0.0.133";
var s = _v_blMp3Player;
s += '<a href="https://github.com/littleflute/beautifullover.org/edit/master/js/blMp3Player.js" target="_blank">blMp3Player.js*</a> - '; 
s += '<a href="https://littleflute.github.io/beautifullover.org/js/blMp3Player.js" target="_blank">blMp3Player.js</a>';

var playerUI = blo0.blMDiv(document.body,"id_mdiv_playerUI",s,50,50,400,300,blGrey[6]); 

function _songClass(_song){
  this.bll1 = _song.name;
  this.bll2 = _song.author;
  this.bll3 = _song.src;
  this.bll4 = _song.cover;
}
function _parseSource(_div,_src){
  var d = _div;
  d.d0 = blo0.blDiv(d,d.id+"d0" ,"d0",blGrey[7]);   
  d.vs = [];
  for(i in _src){
      var v = blo0.blDiv(d,d.id+"v" + i,"v"+i,blColor[i]);   
      v.d = blo0.blDiv(v,v.id+"d","d",blColor[i]);   
      d.vs.push(v);
      blo0.blShowObj2Div(v.d,new _songClass(_src[i]));  
      v.onclick = function(){
        d.d0.innerHTML = this.id;
      }
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
      d.v = blo0.blDiv(d,d.id+"v","v",blGrey[0]);  
    }
    _on_off_div(b,d.v);
    
  }
  this. blrSongList = function(b,d){
    if(!d.v){
      d.v = blo0.blDiv(d,d.id+"v","v",blGrey[0]);      
      _parseSource(d.v,p.music.source);
    }
    _on_off_div(b,d.v);
  }
  
  var _wrap = playerUI;
  _wrap.v = blo0.blDiv( _wrap,_wrap.id + "v","p",blGrey[0]);
  blo0.blShowObj2Div(_wrap.v,this);  
  bl$("blrSongList").click();
  bl$("blrAudio").click();
}
