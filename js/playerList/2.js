
// 2.js
var s = 'playerList_2_V0.0.15';
s += '<a href="https://github.com/littleflute/beautifullover.org/edit/master/js/playerList/2.js" target="_blank">2.js*</a> - '; 
s += '<a href="https://littleflute.github.io/beautifullover.org/js/playerList/2.js" target="_blank">2.js</a>';

var listUI = blo0.blMDiv(document.body,"id_mdiv_ListUI",s,100,200,400,300,blGrey[5]);
blo0.blScript("id_script_playList_index","https://littleflute.github.io/beautifullover.org/js/playerList/index.js");

// list-------------------------------------
var m = {
        type: 'file',
        source: [ 
{
	name: 'Black dog/Led Zeppelin IV',
	author: 'Led Zeppelin',
	src: 'https://littleflute.github.io/Led-Zeppelin1/152/cd1/01_曲目 1.mp3',
	cover: 'https://littleflute.github.io/Led-Zeppelin1/152/index.jpg'
},
{
	name: 'Rock and roll / Led Zeppelin IV',
	author: 'Led Zeppelin',
	src: 'https://littleflute.github.io/Led-Zeppelin1/152/cd1/02_曲目 2.mp3',
	cover: 'https://littleflute.github.io/Led-Zeppelin1/152/index.jpg'
},

{
	name: '03/Led Zeppelin IV',
	author: 'Led Zeppelin',
	src: 'https://littleflute.github.io/Led-Zeppelin1/152/cd1/03_曲目 3.mp3',
	cover: 'https://littleflute.github.io/Led-Zeppelin1/152/index.jpg'
},


{
	name: '04/Led Zeppelin IV',
	author: 'Led Zeppelin',
	src: 'https://littleflute.github.io/Led-Zeppelin1/152/cd1/03_曲目 3.mp3',
	cover: 'https://littleflute.github.io/Led-Zeppelin1/152/index.jpg'
},

]
    };

var p = {
    autoplay: 1,
    listshow: 0,
    mode: 'listloop',    
};
p.music = m;

// list=============================================

loadPlayerListOK();
