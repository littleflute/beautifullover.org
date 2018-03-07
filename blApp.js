var sTitle = "<div id = 'id_div_APP_Title'>blApp v0.0.25 </div>";

var s = 'blo0.blScript("id_script_1","https://littleflute.github.io/bldb1/1/1/1.js")';

var blMD = blo0.blMDiv( document.body , "id_div_4_blClass" , sTitle, 333 ,110,800,100, blGrey[1]);
blMD.d1 = blo0.blDiv(blMD, blMD.id + "_d1","", blGrey[2]);
blMD.d1.ta = blo0.blTextarea(blMD.d1,blMD.d1.id + "_ta", s , blGrey[1]);
blMD.d1.ta.style.width 	= "95%";
blMD.d1.ta.style.height = "200px";

blMD.d2 = blo0.blDiv(blMD, blMD.id + "_d2","", blGrey[3]);
blMD.btnRunJS = blo0.blBtn(blMD.d2, blMD.d2.id + "_btnRunJS","run", blColor[4]);
blMD.btnRunJS.onclick = function(){
	eval(blMD.d1.ta.value);
}
blMD.btnTa = blo0.blBtn(blMD.d2, blMD.d2.id + "_btnTa","ta", blColor[4]);
blMD.btnTa.onclick = function(){
  if(!this.d){
	var blMD = blo0.blMDiv( this.parentElement , "id_div_4_ta" ,"[blClass]", 333 ,110,800,100, blGrey[1]);
	blMD.d1 = blo0.blDiv(blMD, blMD.id + "_d1","", blGrey[2]);
	blMD.d1.ta = blo0.blTextarea(blMD.d1, "id_ta_bldb", s , blGrey[1]);
	blMD.d1.ta.style.width 	= "95%";
	blMD.d1.ta.style.height = "200px";
    this.d = blMD;
  }
  _on_off_div(this,this.d);
}
blMD.btnLoadTemplate = blo0.blBtn(blMD.d2, blMD.d2.id + "_btnLoadTemplate","Template", blColor[4]);
blMD.btnLoadTemplate.onclick = function(){
  alert("btnLoadTemplate");
}


function loadTemplates(o) {
	var a = o[0].body;
	var b = a.split("~~~html");
	var c = b[1].split("~~~");
	var nb = bl$("id_Navbar");
	nb.innerHTML = c[0]; 
	
	var a = o[1].body;
	var b = a.split("~~~html");
	var c = b[1].split("~~~");
	var nb = bl$("mySidebar");
	nb.innerHTML = c[0]; 
	
}
w3.getHttpObject("https://api.github.com/repos/littleflute/beautifullover.org/issues/2/comments", loadTemplates);

 
var tb = blo0.blDiv(blMD,blMD.id + "tb","",blGrey[2]);
tb.innerHTML = "#3";
tb.load = blo0.blBtn(tb,tb.id + "btnLoad","loadAPI",blGrey[1]);
tb.load.onclick = function(){
  w3.getHttpObject("https://api.github.com/repos/littleflute/beautifullover.org/issues/3/comments", tb.load.loadApiOK);
	tb.load.style.display = "none";
}
tb.load.loadApiOK = function (o) {
  
  for(i in o){
     var a = "var f = " + o[i].body;
      tb.load.b1 = blo0.blBtn(tb,tb.load.id + "b" + i,"b" + i,blGrey[1]); 
      tb.load.b1.onclick = function(){eval(a); return f;}();
  }
}
tb.load.click();

var sa = "";
sa += "<a target = '_blank' href = 'blApp.js'>blApp.js</a> - ";
sa += "<a target = '_blank' href = 'https://github.com/littleflute/beautifullover.org/edit/master/blApp.js'>blApp.js*</a>";

var aboutMe = blo0.blDiv(blMD,blMD.id + "aboutMe",sa,blGrey[3]);


