//blMp3Player.js
var _v_blMp3Player = "v0.0.41";
var s = _v_blMp3Player;
s += '<a href="https://github.com/littleflute/beautifullover.org/edit/master/js/blMp3Player.js" target="_blank">blMp3Player.js*</a> - '; 
s += '<a href="https://littleflute.github.io/beautifullover.org/js/blMp3Player.js" target="_blank">blMp3Player.js</a>';

var playerUI = blo0.blMDiv(document.body,"id_mdiv_playerUI",s,50,50,400,300,blGrey[6]); 

function _blMp3PlayerClass(p){
  this.v = _v_blMp3Player;
  this. blrSongList = function(b,d){
    if(!d.v){
      d.v = blo0.blDiv(d,d.id+"v","v",blGrey[0]);
      blo0.blShowObj2Div(d.v,p.music.source);  
    }
    _on_off_div(b,d.v);
  }
  
  var _wrap = playerUI;
  _wrap.v = blo0.blDiv( _wrap,_wrap.id + "v","p",blGrey[0]);
  blo0.blShowObj2Div(_wrap.v,this);  
}
