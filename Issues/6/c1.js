// blAPI No.1:
// c1.js*: https://github.com/littleflute/beautifullover.org/edit/master/Issues/6/c1.js


// api:
function api(b,d)
{
	if(!d.v){
 		 d.v = blo0.blMDiv(d,"id_div_4_api1","ui4api1_v0.0.12",0,0,800,100,blColor[1]);
  		var _blj = new _blJobClass(d.v);
		_blj.blhInit();
	}
	_on_off_div(b,d.v);
}

function _blJobClass(p)
{ 
	this.v = "v0.0.51";
	var ta0 = null;
	var ta1 = null;
	var ta2 = null; 
	var fs = [];
	var _v4Files = null;
	var _strPath = null;
	var _pic = null;
	var ff = function(){
		var a = ta1.value.split(".mp3,");
		blo0.blShowObj2Div(_v4Files.d,a);
		var s = '[aplayer autoplay="true"]';
		var b = a[a.length-1].split(".jpg,"); 
		_pic = _strPath + "/" + b[1].replace("\n","");

		for(var i = 0; i < a.length - 1 ; i++){
			var _title = a[i].replace("\n","");
			s += '\n[mp3 ';
			s += ' url = "';
			s += _strPath + "/" + _title;
			s += '.mp3"';

			s += ' pic = "';
			s += _pic;
			s += '.jpg"';

			s += ' lrc="https://littleflute.github.io/Songs/mp3/%E6%88%91%E7%9A%84%E6%98%8E%E5%A4%A9%20-%20%E9%83%91%E6%99%BA%E5%8C%96.lrc"';
			
			s += ' title = "';
			s += _title;
			s += '" artist = "BobMarley" ';

			s += '] [/mp3]\n';
		}
		s += '[/aplayer]';
		ta2.value = s;
	};
	this.blrRun = function(b,d){
		b.style.backgroundColor = blGrey[0];
		if(ta0) eval(ta0.value);
	}
	this.blrSetPath = function(b,d){
		_strPath = ta1.value;
	}
	this.blrGetFiles = function(b,d){
		if(!d.v) {
			_v4Files = d.v = blo0.blMDiv(document.body,d.id+"_v","files",110,50,800,100,blGrey[1]);
			d.v.d = blo0.blDiv(d.v,d.v.id+"d","d:",blGrey[2]);
		}
		ff();_on_off_div(b,d.v);

	}
	this.blrCode4Files = function(b,d){
		ta0.value = ff;
	}
	this.blrTA0 = function(b,d){
		if(!d.ta) {ta0 = d.ta = blo0.blTextarea(d,d.id+"_ta","",blGrey[0]);d.ta.style.width="95%";}
		_on_off_div(b,d);
	}
	this.blrTA1 = function(b,d){
		if(!d.ta) {ta1 = d.ta = blo0.blTextarea(d,d.id+"_ta","ta1",blGrey[1]);d.ta.style.width="95%";}
		_on_off_div(b,d);
	}
	this.blrTA2 = function(b,d){
		if(!d.ta) {ta2 = d.ta = blo0.blTextarea(d,d.id+"_ta","ta2",blGrey[1]);d.ta.style.width="95%";}
		_on_off_div(b,d);
	}

	p.ui = blo0.blDiv(p,p.id+"_ui","jobUI",blGrey[0]);	
	blo0.blShowObj2Div(p.ui,this); 
	this.blhInit = function(){
		bl$("blrTA0").click();
		bl$("blrTA1").click();
		bl$("blrTA2").click();
		bl$("blrRun").click();
	}
}
