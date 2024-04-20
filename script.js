let json=[
    {
        songName:'TVARI - Tokyo Cafe',
        poster:'image1.jpeg',
        music:'music1.mp3'
    },
    {
        songName:'Happy Day (Vlog Music)',
        poster:'image2.png',
        music:'music2.mp3'
    },
    {
        songName:'calm chill beautiful',
        poster:'image3.png',
        music:'music3.mp3'
    },
    {
        songName:'Motivational Electronic | Distant',
        poster:'image4.png',
        music:'music4.mp3'
    },
    {
        songName:'Islamic music',
        poster:'image5.png',
        music:'music5.mp3'
    },
    {
        songName:'One Last Time',
        poster:'image6.png',
        music:'music6.mp3'
    },
    {
        songName:'Stomp Rap | Adrenaline',
        poster:'image7.png',
        music:'music7.mp3'
    },
    {
        songName:'Cinematic Adventure | Alive',
        poster:'image8.png',
        music:'music8.mp3'
    },
    {
        songName:'Sleep music',
        poster:'image9.png',
        music:'music9.mp3'
    },
    {
        songName:'Peaceful Cinematic',
        poster:'image10.png',
        music:'music10.mp3'
    },
    {
        songName:' TVARI - Venice Beach',
        poster:'image11.png',
        music:'music11.mp3'
    },
];
const head=document.querySelector('.font');

let dio=json.map(cur => cur.music);
console.log(dio);
const MusicName=document.querySelector(".Mname");
const prevBox=document.querySelector(".main");
const names = document.querySelector("#list");
const map=json.map(cur => cur.songName);
const mapImg=json.map(cur => cur.poster);
console.log(map);
for(i=0;i<map.length;i++){
let html=`<li  onclick="showImage('${mapImg[i]}','${dio[i]}','${map[i]}')"><img src="${mapImg[i]}" id="seg${Number([i])+1}" class="post"><p1 class="Mname" >${map[i]}</p1></li>`;
names.innerHTML +=html;
}

function showImage(imageName,audio,image) {
    var imageElement = document.querySelector('.cont');
    imageElement.style.backgroundImage = `url(${imageName})`;
    let  add = document.querySelector('.aud');
    add.src=audio;
    const img=document.querySelector(".image");
    img.src=imageName;
    head.textContent=image;
  }
      // for(i=0;i<map.length;i++){
    //     const music=`<audio controls><source src="${}" type="audio/mp3"></audio>`;
    //     add.innerHTML +=music;