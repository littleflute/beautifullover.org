// blAPI No.1:
// c1.js*: https://github.com/littleflute/beautifullover.org/edit/master/Issues/6/c1.js


// api:
function api(b,d)
{
	if(!d.v){
 		 d.v = blo0.blMDiv(d,"id_div_4_api1","ui4api1_v0.0.11",0,0,800,100,blColor[1]);
  		var _blj = new _blJobClass(_v.ui);
		_blj.blhInit();
	}
	_on_off_div(b,d.v);
}

function _blJobClass(p)
{ 
	this.v = "v0.0.21";
	var ta1 = null;
	var ta2 = null; 
	this.blrRun = function(b,d){
		b.style.backgroundColor = blGrey[0];
		ta2.value = ta1.value;
	}
	this.blrTA1 = function(b,d){
		if(!d.ta) {ta1 = d.ta = blo0.blTextarea(d,d.id+"_ta","ta1",blGrey[0]);d.ta.style.width="95%";}
		_on_off_div(b,d);
	}
	this.blrTA2 = function(b,d){
		if(!d.ta) {ta2 = d.ta = blo0.blTextarea(d,d.id+"_ta","ta2",blGrey[0]);d.ta.style.width="95%";}
		_on_off_div(b,d);
	}

	p.ui = blo0.blDiv(p,p.id+"_ui","jobUI",blGrey[0]);	
	blo0.blShowObj2Div(p.ui,this); 
	this.blhInit = function(){
		bl$("blrTA1").click();
		bl$("blrTA2").click();
		bl$("blrRun").click();
	}
}

