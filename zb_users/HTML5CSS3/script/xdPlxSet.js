

function _xdPlxSetClass(){
	var v 		= "v0.0. 134 ";
	var name 	= "_xdPlxSetClass";
	var _view	= null;
	var _loadTimes	= 0;
	function _makeToolBar2ShowObj(blo,d,o2Show) {
		var id = d.id;
		id += "_b1";
		var b1 = blo.blBtn(d,id,"+","red");
		b1.onclick = function(btn_){
			var v = null;
			return function(){
				v = blo.blDiv(d,btn_.id+"_div_View","b1v","green");
				blo.blShowObj2Div(v,o2Show);
				_on_off_bd(btn_,v);
			}
		}(b1);
	}
    
	var _createUI 	= function(this_){
		if(!document.body._xdPlxSpiterLoad_times) document.body._xdPlxSpiterLoad_times = 1;
		else{document.body._xdPlxSpiterLoad_times++; _loadTimes = document.body._xdPlxSpiterLoad_times;}

		if(!_view) alert("no 'id_div__xdPlxSpiter'");
		else{
			_view.innerHTML = name + "-" + v + " : " + document.body._xdPlxSpiterLoad_times;
			_view.style.backgroundColor = "SlateBlue";
			_makeToolBar2ShowObj(blo0,_view,this_);
		}		
	};

	this.blhRun = function(c){
		_view = document.getElementById("id_div__xdPlxSet");
		_createUI(this);
	}
	var _setObj = null;
	this.blr2DoList = function( blrSetB , blrSetV ){ 
		if(!blrSetV .v){
			blrSetV .v = blo0.blMDiv( blrSetV  , blrSetV.id + "_2DoList" ,"2DoList",210,0,800,100,blColor[1]);
			blrSetV .v.d = blo0.blDiv( blrSetV .v,blrSetV .v.id + "d","...",blColor[2]); 

			function _loadList (o) {
				for(i in o){
					var d = blo0.blDiv( blrSetV .v.d,blrSetV .v.d + "_2Do_" + i,"...",blColor[i]); 
					d.innerHTML = o[i].body;
 				}
			}
			w3.getHttpObject("https://api.github.com/repos/littleflute/beautifullover.org/issues/5/comments", _loadList );
		}
		_on_off_div(blrSetB,blrSetV.v);
	}
	this.blrAPIs = function( blrSetB , blrSetV ){ 
		if(!blrSetV .v){
			var href = "https://api.github.com/repos/littleflute/beautifullover.org/issues/6/comments";			

			blrSetV .v = blo0.blMDiv( blrSetV  , blrSetV.id + "_APIs" ,"APIs",210,0,800,100, blGrey[0]);
			var s4do = "<a href='" + href + "' target='_blank'>apiHREF</a>";
			blrSetV .v.d0 = blo0.blDiv( blrSetV .v,blrSetV .v.id + "d0", s4do , blGrey[2]); 
			blrSetV .v.d = blo0.blDiv( blrSetV .v,blrSetV .v.id + "d","...", blGrey[2]); 

			function _loadAPIs (o) {
				for(i in o){
					var b = blo0.blBtn ( blrSetV .v.d,blrSetV .v.d + "_API_" + i,"api"+i,blColor[i]); 
					b.onclick = function( _d , _txt){
						return function(){
							if(!this.v){
								this.v = blo0.blDiv( _d , this.id + "_v", "apiV", blGrey[2]); 											this.v.b = blo0.blBtn( this.v , this.v.id + "_btn", "run", "green"); 
								this.v.b.onclick = function(){
									var a = _txt;
									var b = a.split("api:");
									var c = " var f = " + b[1];
									eval(c);
									f();
									;

								};			
							}			
							_on_off_div(this,this.v);
						}
					}(blrSetV.v.d,o[i].body); 
 				}
			}
			w3.getHttpObject( href , _loadAPIs );
		}
		_on_off_div(blrSetB,blrSetV.v);
	}
	this.blrRunJS = function( blrSetB , blrSetV ){ 
		if(!blrSetV .v){
			blrSetV .v = blo0.blMDiv( blrSetV  , blrSetV.id + " _RunJS" ," RunJS ",210,0,800,100, blGrey[0]);
			blrSetV .v.d = blo0.blDiv( blrSetV .v,blrSetV .v.id + "d","", blGrey[2]); 
			blrSetV .v.ta = blo0.blTextarea( blrSetV .v.d,blrSetV .v.d.id + "ta","alert(1);", blGrey[3]); blrSetV .v.ta.style.width = "95%";
			blrSetV .v.btnRun = blo0.blBtn( blrSetV .v.d,blrSetV .v.d.id + "btnRun","run", "green");
			blrSetV .v.btnRun.onclick = function(){eval(blrSetV .v.ta.value);};
		}
		_on_off_div(blrSetB,blrSetV.v);
	}
	this.blrShowBlClass = function( blrSetB , blrSetV ){ 
		if(!blrSetV .v){
			blrSetV .v = blo0.blMDiv( document.body , "id_div_4_blClass" ,"[blClass]",210,0,800,100,blColor[1]);
			blrSetV .v.d = blo0.blDiv( blrSetV .v,blrSetV .v.id + "d","",blColor[2]);
			
			blo0.blShowObj2Div(blrSetV.v.d,blo0);
		}
		_on_off_div(blrSetB,blrSetV.v);
	}
	this.blrSet = function(blrSetB,blrSetV){ 
		blrSetV.innerHTML = "Colors";
		function _addBtn(b,v,color){
			var btn = blo0.blBtn(v,v.id+color,color,color);	
			btn.style.color = "white";	
			btn.onclick = function(){   
				document.body.style.backgroundColor = color;
			}	
		}
		function _xdSetClass(){
			this.bll1 = "-1-";
			this.blrPink = function(b,v){
				v.innerHTML = "Pink Colors";
				_addBtn(b,v,"Pink");
				_addBtn(b,v,"LightPink");
				_addBtn(b,v,"HotPink");
				_addBtn(b,v,"DeepPink");
				_addBtn(b,v,"PaleVioletRed");
				_addBtn(b,v,"MediumVioletRed");
				_on_off_div(b,v);
			};
			this.bll2 = "-2-";
			this.blrLavender = function(b,v){
				v.innerHTML = "Lavende Colors";
				_addBtn(b,v,"Lavender");
				_addBtn(b,v,"Thistle");
				_addBtn(b,v,"Plum");
				_addBtn(b,v,"Orchid");
				_addBtn(b,v,"Violet");
				_addBtn(b,v,"Fuchsia");
				_addBtn(b,v,"Magenta");
				_addBtn(b,v,"MediumOrchid");
				_addBtn(b,v,"DarkOrchid");
				_addBtn(b,v,"DarkViolet");
				_addBtn(b,v,"BlueViolet");
				_addBtn(b,v,"DarkMagenta");
				_addBtn(b,v,"Purple");
				_addBtn(b,v,"MediumPurple");
				_addBtn(b,v,"MediumSlateBlue");
				_addBtn(b,v,"SlateBlue");
				_addBtn(b,v,"DarkSlateBlue");
				_addBtn(b,v,"RebeccaPurple");
				_addBtn(b,v,"Indigo");
				_on_off_div(b,v);
			};
			this.bll3 = "-3-";
			this.blrRed = function(b,v){
				v.innerHTML = "Red Colors";
				_addBtn(b,v,"LightSalmon");
				_addBtn(b,v,"Salmon");
				_addBtn(b,v,"DarkSalmon");
				_addBtn(b,v,"LightCoral");
				_addBtn(b,v,"IndianRed");
				_addBtn(b,v,"Crimson");
				_addBtn(b,v,"Red");
				_addBtn(b,v,"FireBrick");
				_addBtn(b,v,"DarkRed");
				_on_off_div(b,v);
			};
			this.bll4 = "-4-";
			this.blrOrange = function(b,v){
				v.innerHTML = "Orange Colors";
				_addBtn(b,v,"Orange");
				_addBtn(b,v,"DarkOrange");
				_addBtn(b,v,"Coral");
				_addBtn(b,v,"Tomato");
				_addBtn(b,v,"OrangeRed");
				_addBtn(b,v,"Crimson");
				_addBtn(b,v,"Red");
				_addBtn(b,v,"FireBrick");
				_addBtn(b,v,"DarkRed");
				_on_off_div(b,v);
			};
		}
		if(!_setObj) _setObj = new _xdSetClass;
		_makeToolBar2ShowObj(blo0,blrSetV,_setObj);
		 
		_on_off_div(blrSetB,blrSetV);
	}
	this.blrtAboutMe = function( b, d){
		var s = ""; 
		s += blo0.blhMakeLink ('xdPlxSet.js ','http://www.beautifullover.org/zb_users/theme/HTML5CSS3/script/xdPlxSet.js','color:skyblue;','_blank');
		s += blo0.blhMakeLink (' xdPlxSet.js*','https://github.com/littleflute/beautifullover.org/edit/master/zb_users/HTML5CSS3/script/xdPlxSet.js','color:skyblue;','_blank');
		d.innerHTML = s;
		_on_off_div(b,d);		
	}
} 

function _run_xdPlxSet() { 
	var c = new _xdPlxSetClass;
	c.blhRun(c); 
};  
_run_xdPlxSet();
