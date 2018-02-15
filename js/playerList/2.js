
// 2.js
var s = 'playerList_2_V0.0.13';
s += '<a href="https://github.com/littleflute/beautifullover.org/edit/master/js/playerList/2.js" target="_blank">2.js*</a> - '; 
s += '<a href="https://littleflute.github.io/beautifullover.org/js/playerList/2.js" target="_blank">2.js</a>';

var listUI = blo0.blMDiv(document.body,"id_mdiv_ListUI",s,100,200,400,300,blGrey[5]);
blo0.blScript("id_script_playList_index","https://littleflute.github.io/beautifullover.org/js/playerList/index.js");

// list-------------------------------------
var m = {
        type: 'file',
        source: [ 
{
	name: 'Three Little Birds',
	author: 'BobMarley',
	src: 'https://littleflute.github.io/BobMarley/B%20Is%20for%20Bob/01%20Three%20Little%20Birds.mp3',
	cover: 'https://littleflute.github.io/BobMarley/B%20Is%20for%20Bob/AlbumArt_{7666695E-5B42-46D5-9567-CA01B5E97B32}_Large.jpg'
},
{
	name: '02 Redemption Song.mp3',
	author: 'BobMarley',
	src: 'https://littleflute.github.io/BobMarley/B%20Is%20for%20Bob/02 Redemption Song.mp3',
	cover: 'https://littleflute.github.io/BobMarley/B%20Is%20for%20Bob/AlbumArt_{7666695E-5B42-46D5-9567-CA01B5E97B32}_Large.jpg'
},

{
	name: '03 Wake Up and Live, Pt. 1.mp3',
	author: 'BobMarley',
	src: 'https://littleflute.github.io/BobMarley/B%20Is%20for%20Bob/03 Wake Up and Live, Pt. 1.mp3',
	cover: 'https://littleflute.github.io/BobMarley/B%20Is%20for%20Bob/AlbumArt_{7666695E-5B42-46D5-9567-CA01B5E97B32}_Large.jpg'
},


{
	name: '04 Bend Down Low.mp3',
	author: 'BobMarley',
	src: 'https://littleflute.github.io/BobMarley/B%20Is%20for%20Bob/04 Bend Down Low.mp3',
	cover: 'https://littleflute.github.io/BobMarley/B%20Is%20for%20Bob/AlbumArt_{7666695E-5B42-46D5-9567-CA01B5E97B32}_Large.jpg'
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
