
// blAPI No.1:
// c1.js*: https://github.com/littleflute/beautifullover.org/edit/master/Issues/6/c1.js


// api:
function api(b,d)
{
	if(!d.v){
 		 d.v = blo0.blMDiv(d,"id_div_4_api1","ui4api1_v0.0.5",0,0,800,100,blColor[1]);
  		new _blJobClass(d.v);
	}
	_on_off_div(b,d.v);
}

function _blJobClass(p)
{ 
	this.v = "v0.0.5";
	this.blrRun = function(b,d){
		alert("run");
	}
	p.ui = blo0.blDiv(p,p.id+"_ui","jobUI",blGrey[0]);	
	blo0.blShowObj2Div(p.ui,this);	
}
