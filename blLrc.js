
var lrcTimer0;
var lrcTimer1;
var xdMin;
function _golrcolor(t)
  { 
    if(t<=10)
      lrcTimer1 = setTimeout("_golrcolor("+t+")",xdMin*10);
  }
  function _blMove(s,_o)
  { 
	_o.style.top = -(s++)*2;
	if(s<=9)
		lrcTimer0 = setTimeout("_blMove("+s+","+_o+")",xdMin*10);
  }
    
function blLrcClass (tt, _nIdx , blID )
{	
	var xdVer	= " blLrcClass :: v1.1. 251 ";
  var _CreateLyrBoard2 = function(oBoss)
  {	 
		var d2Body = o.blDiv(oBoss,"d2Body"+ blID ,"","DarkOrchid");
		_CreateToolBar(d2Body);
		var d1 = o.blDiv(oBoss,oBoss.id+"_div_song_right_now",QueryString.f,blColor[2]); 
		var url = QueryString.l;
		var d2 = o.blDiv(oBoss,oBoss.id+"_div_lrc_right_now",url,blColor[4]); 
		var lrcLink = blo0.blLink(oBoss,oBoss.id+"lrcLink","lrc_src",url,blColor[3]); 
		
		var d2BodyContend = o.blDiv(oBoss,"d2BodyContend","d2BodyContend: V x.x.x",blColor[12]); 

		var s = "";
		s += '<div style="overflow:hidden; height:260; width:660; background-color:#59a;">'; 
		s += '<table border="1" cellspacing="0" cellpadding="0" width="100%" id="lrcoll'+blID+'"';
		s += ' style="position:relative; top: -20px;" oncontextmenu="return false;">';
		s += '<tr><td nowrap height="20" align="center" id="lrcwt1'+blID+'"></td></tr>';
		s += '<tr><td nowrap height="20" align="center" id="lrcwt2'+blID+'"></td></tr>';
		s += '<tr><td nowrap height="20" align="center" id="lrcwt3'+blID+'"></td></tr>';
		s += '<tr><td nowrap height="20" align="center" id="lrcwt4'+blID+'"></td></tr>';
		s += '<tr><td nowrap height="20" align="center" id="lrcwt5'+blID+'"></td></tr>';
		s += '<tr style="color:#BDB76B;">';
			s += '<td nowrap height="20" align="center" id="lrcwt6'+blID+'">';
				s += '</td></tr>'; 

		s += '<tr style="color:#BDB76B;">';
			s += '<td nowrap height="20" align="center">';
					s += '<div id="lrcwt7'+blID+'" style="overflow:hidden;position:relative; width:100%; color:#FFFF33; height:20">lrcwt7 ...</div>';
					s += '<div id="lrcfilter'+blID+'" style="overflow:hidden;position:relative;top: -20px; width:100%; color:#FFFF33; height:20">lrcfilter ...</div>';
				s += '</td></tr>'; 

		s += '<tr style="color:#BDB76B;">';
			s += '<td nowrap height="20">';
					s += '<div>';
					s += '<div id="lrcbox'+blID+'" style="overflow:hidden;position:relative; width:100%; color:#800000; height:20">?豕∩那?車???D ...</div>';
					s += '<div id="idMovingLyr'+blID+'" style="overflow:hidden;position:relative;top: -20px; width:0; color:#FFFF33; height:20">?豕∩那?車???D ...</div>';
					s += '</div>';
				s += '</td></tr>'; 
 
		s += '<tr style="position:relative; top: -20px;color:#FF9900;"><!-- next to come words-->';
			s += '<td nowrap height="20" align="center" id="lrcwt8'+blID+'"></td>';
		s += '</tr>';
		s += '<tr style="position:relative; top: -20px;"><td nowrap height="20" align="center" id="lrcwt9'+blID+'"></td></tr>';
		s += '<tr style="position:relative; top: -20px;"><td nowrap height="20" align="center" id="lrcwtA'+blID+'"></td></tr>';
		s += '<tr style="position:relative; top: -20px;"><td nowrap height="20" align="center" id="lrcwtB'+blID+'"></td></tr>';
		s += '<tr style="position:relative; top: -20px;"><td nowrap height="20" align="center" id="lrcwtC'+blID+'"></td></tr>';
		s += '<tr style="position:relative; top: -20px;"><td nowrap height="20" align="center" id="lrcwtD'+blID+'"></td></tr>';
		s += '</table>';
		s += '</div>';
		
		d2BodyContend.innerHTML = s;
  } 
  var _CreateUI = function( _id )
  { 

	var d 	= blo0.blMDiv(document.body, "id_div_4_Lyric_ui" + blID  , blID , 444, 111 + blID * 30 , 850,50,blColor[2]); 
	var divMP = blo0.blDiv(d, "mp1" + blID ,"xdxdxd","red"); 
	_InitPlayer(xdType,divMP, _id ); 
	var xddbgDiv = o.blDiv(d,"xddbgLyric" + blID ,xdVer,"gold");
	var MyTimer = o.blDiv(d,"idMyTimer" +blID  , "timer:" );
	_CreateLyrBoard2(d);
  }
	var _currentTime = 0;

  	var nMyTimer = 0;
  this.TimerFun = function(_this)
  {
		return function(){ 
			var d = document.getElementById("idMyTimer" + blID );
			var s = " ";//d.innerHTML;
			s += "_currentTime=";
			s += _currentTime;
			s += " nMyTimer= ";
			nMyTimer++;
			s += nMyTimer;
			var playerObj = document.getElementById("idLyricMP");
			s += " blVMP.blrGetCP = " + blVMP.blrGetCP(); 
			s += "<br>";
			d.innerHTML = s;
			_this.xdRun(playerObj);
		}
  }(this);
 
	this.blrAboutMe = function(b,d){		
		var s = "";
		s += "<a target='_blank' href='https://github.com/littleflute/beautifullover.org/edit/master/blLrc.js'"
		s += " style='color:lightblue;'";
		s +=">";
		s += " blLrc.js*  ";
		s += "</a>"; 
		s += "<a target='_blank' href='blLrc.js'"
		s += " style='color:yellow;'";
		s +=">";
		s += " blLrc.js ";
		s += "</a>"; 
		d.innerHTML = s;
		_on_off_div(b,d);
	}

	this.blrMakeStamp = function(b,d){ 
		d.innerHTML = xdVer;
		var ta = blo0.blTextarea(d,d.id+"ta","v",blColor[11]);
		ta.style.width = "100%";
		ta.style.height = "50px";
		var v = blo0.blDiv(d,d.id+"v","v",blColor[1]);
		var b1 = blo0.blBtn(d,d.id+"b1","b1",blColor[8]);
		b1.onclick = function(v_){
			var n = 0;
			return function(){
				n++;
				var l = document.getElementById("lrcdata");
				if(1){
					v_.innerHTML = n + "㏒o" + _currentTime + "";
					ta.value = l.innerHTML;
				}
			}
		}(v);
		_on_off_div(b,d);
	};
	
	this.bll1 = "bll1--------";
  
	var xdType = 3;

	var o = new blClass;
	var blVMP = new _blVMPlayer;	
   
	function _InitPlayer(t,oDivBoss, _id ) { 
		switch(t)
		{
		case 3:
			oDivBoss.innerHTML = "ID: " + _id ;
			blVMP.blrPlay();
			break;  
		} 
	}
  var _CreateToolBar = function(oBoss)
  {	
		var d = o.blDiv(oBoss,oBoss.id+"_div_ToolBar","_div_ToolBar: v0.0.7","white");
		var b1 = o.blBtn(d,d.id+"_btn_b1","+","red"); 
		b1.onclick = function(btn_){
			var v = null;
			return function(){
				v = o.blDiv(d,btn_.id+"_div_View","b1v","green");
				o.blShowObj2Div(v,lrcobj);
				_on_off_bd(btn_,v);
			}
		}(b1);
  }

  _CreateUI ( blID );

  this.inr = [];
  this.min = [];
  this.oTime = 0;
  this.dts = -1;
  this.dte = -1;
  this.dlt = -1;
  this.ddh;
  this.fjh;
  bl$("idMovingLyr"+blID).style.width = 0;
  if(/\[offset\:(\-?\d+)\]/i.test(tt))
    this.oTime = RegExp.$1/1000;

  tt = tt.replace(/\[\:\][^$\n]*(\n|$)/g,"$1");
  tt = tt.replace(/\[[^\[\]\:]*\]/g,"");
  tt = tt.replace(/\[[^\[\]]*[^\[\]\d]+[^\[\]]*\:[^\[\]]*\]/g,"");
  tt = tt.replace(/\[[^\[\]]*\:[^\[\]]*[^\[\]\d\.]+[^\[\]]*\]/g,"");
  tt = tt.replace(/<[^<>]*[^<>\d]+[^<>]*\:[^<>]*>/g,"");
  tt = tt.replace(/<[^<>]*\:[^<>]*[^<>\d\.]+[^<>]*>/g,"");


  while(/\[[^\[\]]+\:[^\[\]]+\]/.test(tt))
  {
    tt = tt.replace(/((\[[^\[\]]+\:[^\[\]]+\])+[^\[\r\n]*)[^\[]*/,"\n");
    var zzzt = RegExp.$1;
    /^(.+\])([^\]]*)$/.exec(zzzt);
    var ltxt = RegExp.$2;
    var eft = RegExp.$1.slice(1,-1).split("][");
    for(var ii=0; ii<eft.length; ii++)
    {
      var sf = eft[ii].split(":");
      var tse = parseInt(sf[0],10) * 60 + parseFloat(sf[1]);
      var sso = { t:[] , w:[] , n:ltxt }
      sso.t[0] = tse-this.oTime;
      this.inr[this.inr.length] = sso;
    }
  }

  this.inr = this.inr.sort( function(a,b){return a.t[0]-b.t[0];} ); 

  for(var ii=0; ii<this.inr.length; ii++)
  {
    while(/<[^<>]+\:[^<>]+>/.test(this.inr[ii].n))
    {
      this.inr[ii].n = this.inr[ii].n.replace(/<(\d+)\:([\d\.]+)>/,"%=%");
      var tse = parseInt(RegExp.$1,10) * 60 + parseFloat(RegExp.$2);
      this.inr[ii].t[this.inr[ii].t.length] = tse-this.oTime;
    }

    bl$("idMovingLyr"+blID).innerHTML = "<font>"+ this.inr[ii].n.replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">").replace(/%=%/g,"</font><font>") +"</font>";
 
    var fall = bl$("idMovingLyr"+blID).getElementsByTagName("font");
    for(var wi=0; wi<fall.length; wi++)
      this.inr[ii].w[this.inr[ii].w.length] = fall[wi].offsetWidth;
  }


  for(var ii=0; ii<this.inr.length-1; ii++)
    this.min[ii] = Math.floor((this.inr[ii+1].t[0]-this.inr[ii].t[0])*10);

  this.min.sort(function(a,b){return a-b});
  xdMin = this.min[0]/2;

  var nXdDbgNum = 0;
  this.xdRun = function(xdMP)
  { 
	nXdDbgNum++;
	var xdCP;
	switch(xdType)
	{
	case 3: 
		xdCP = blVMP.blrGetCP(); 		
		break;
	case 4:
		xdCP = xdMP.controls.currentPosition;  
		break;
	case 5:
		xdCP = xdMP.currentTime;  
		break;
	} 
	_currentTime = xdCP;

    if(xdCP<this.dts || xdCP>=this.dte)
    {	
      var ii;
      for(ii=this.inr.length-1; ii>=0 && this.inr[ii].t[0]>xdCP; ii--){}
      if(ii<0) 
	  { 
			return;
	  }
 
      this.ddh = this.inr[ii].t;
      this.fjh = this.inr[ii].w;
      this.dts = this.inr[ii].t[0];
      this.dte = (ii<this.inr.length-1)?this.inr[ii+1].t[0]:xdCP;

      bl$("lrcwt1"+blID).innerText = this.retxt(ii-7);
      bl$("lrcwt2"+blID).innerText = this.retxt(ii-6);
      bl$("lrcwt3"+blID).innerText = this.retxt(ii-5);
      bl$("lrcwt4"+blID).innerText = this.retxt(ii-4);
      bl$("lrcwt5"+blID).innerText = this.retxt(ii-3);
      bl$("lrcwt6"+blID).innerText = this.retxt(ii-2);
  
      bl$("lrcwt7"+blID).innerText			= this.retxt(ii-1);
      bl$("lrcfilter"+blID).innerText		= this.retxt(ii-1);

      bl$("lrcwt8"+blID).innerText		= ">>>-"  + this.retxt(ii+1);
      bl$("lrcwt9"+blID).innerText		= this.retxt(ii+2);
      bl$("lrcwtA"+blID).innerText = this.retxt(ii+3);
      bl$("lrcwtB"+blID).innerText = this.retxt(ii+4);
      bl$("lrcwtC"+blID).innerText = this.retxt(ii+5);
      bl$("lrcwtD"+blID).innerText = this.retxt(ii+6);
      this.blSetTxt(this.retxt(ii)); 

      if(this.dlt==ii-1)
      {
        clearTimeout(lrcTimer0);
        if(bl$("lrcoll"+blID).style.pixelTop!=0) bl$("lrcoll"+blID).style.top = 0;
  
		_blMove(0,"lrcoll"+blID);  
        clearTimeout(lrcTimer1);  
        _golrcolor(0); 
      }
      else if(parseInt(bl$("lrcoll"+blID).style.top)!=-20)
      {
	    clearTimeout(lrcTimer0);
        bl$("lrcoll"+blID).style.top = -20;
        clearTimeout(lrcTimer1);
      }

      this.dlt = ii; 
    }

    var bbw = 0;
    var ki;
    for(ki=0; ki<this.ddh.length && this.ddh[ki]<=xdCP; ki++)
      bbw += this.fjh[ki];
    var kt = ki-1;
    var sc = ((ki<this.ddh.length)?this.ddh[ki]:this.dte) - this.ddh[kt];
    var tc = xdCP - this.ddh[kt];
    bbw -= this.fjh[kt] - tc / sc * this.fjh[kt];
    if(bbw>bl$("lrcbox"+blID).offsetWidth)
      bbw = bl$("lrcbox"+blID).offsetWidth;
    bl$("idMovingLyr"+blID).style.width = Math.round(bbw);
  }

  this.retxt = function(i)
  {
    return (i<0 || i>=this.inr.length)?"xxxxxxxx":this.inr[i].n;
  }

  this.blSetTxt = function(txt)
  {
    bl$("lrcbox"+blID).innerText		= txt;
    bl$("idMovingLyr"+blID).innerText	= txt;
  }
  
  this.blSetTxt("?米赤3?Y??車D?角1??豕∩那...");
  bl$("lrcwt1"+blID).innerText = "111111111111111111";
  bl$("lrcwt2"+blID).innerText = "";
  bl$("lrcwt3"+blID).innerText = "";
  bl$("lrcwt4"+blID).innerText = "";
  bl$("lrcwt5"+blID).innerText = "";
  bl$("lrcwt6"+blID).innerText = ""; 
  bl$("lrcwt7"+blID).innerText = "";
  bl$("lrcfilter"+blID).innerText = "***************==";
  bl$("lrcwt8"+blID).innerText = "";
  bl$("lrcwt9"+blID).innerText = "";
  bl$("lrcwtA"+blID).innerText = "";
  bl$("lrcwtB"+blID).innerText = "";
  bl$("lrcwtC"+blID).innerText = "";
  bl$("lrcwtD"+blID).innerText = "";
	 
  this.blRun = function(_this)
  {
		return function(_this){
			setInterval(_this.TimerFun,10);
		}
  }(this); 
}//END: blLrcClass

function _blVMPlayer()
{
	var nTime = 0; 
	var _myFun = function(_this){
		return function(){			//nTime += 0.01;
			var x = document.getElementsByTagName("audio");
			nTime = x[0].currentTime;
		}
	}(this);

	this.blrPlay = function()	{	setInterval(_myFun,10);	}
	this.blrGetCP = function()	{	return nTime;	}
}

 
