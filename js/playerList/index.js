// index.js 

function _blPlayerListIndexClass(){
  var _v = "v0.0.24";
  this.v = _v;
  this.blrIndex = function(b,d){
    //
    if(!d.v){
      var s = '';
      s += '<a href="?l=https://littleflute.github.io/beautifullover.org/js/playerList/1.js">1.js</a> <br> '; 
      s += '<a href="?l=https://littleflute.github.io/beautifullover.org/js/playerList/2.js">2.js</a> <br> ';  
      d.v = blo0.blDiv(d,d.id+"v",s,blGrey[1]);
    }
    _on_off_div(b,d.v);
    
  }
  this.blrAboutMe = function(b,d){
    if(!d.v){
      var s = 'playerList_index_' + _v;
      s += '<a href="https://github.com/littleflute/beautifullover.org/edit/master/js/playerList/index.js" target="_blank">index.js*</a> - '; 
      s += '<a href="https://littleflute.github.io/beautifullover.org/js/playerList/index.js" target="_blank">index.js</a>';
      d.v = blo0.blDiv(d,d.id+"v",s,blGrey[1]);
    }
    _on_off_div(b,d.v);
  }
}

var _wrap = bl$("id_mdiv_ListUI");
_wrap.v = blo0.blDiv( _wrap,_wrap.id + "v","_blPlayerListIndexClass",blGrey[0]);
blo0.blShowObj2Div(_wrap.v,new _blPlayerListIndexClass);
