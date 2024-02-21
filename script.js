var audio=new Audio("happybday.mp3");
let vanishSound = new Audio("vanish.mp3");
 audio.loop = true;
 audio.volume=0.1;
let cats = [];
let catCounter = 0;
function updateCats(method) {
    if(method === true) {
        catCounter++;
        document.getElementById("catCounter").innerText = `${catCounter}`;
        let element = document.createElement("img")
        element.src = "jinx.png";
        element.id = `${Math.floor(Math.random() * 9000000) + 1000000}`
        element.style.width = '80px';
        element.style.height = '80px';
        element.style.transition = 'all 1s';
        element.style.position = 'absolute';
        element.style.top = Math.floor(Math.random()*window.screen.height*0.75) + 'px';
        element.style.left = Math.floor(Math.random()*window.screen.width*0.75) + 'px';
        console.log(element);
        document.getElementById("cats").appendChild(element);
        cats.push(element.id)
        console.log(`Added cat ${element.id}`)
    } else {
        if (cats.length > 0) {
            catCounter--;
            document.getElementById("catCounter").innerText = `${catCounter}`;
            let cat = cats.pop();
            document.getElementById(cat).remove();
            console.log(`Removed cat ${cat}`)
        }
    }
}

let catsHidden = false;
function hideCats() {
    if(cats.length > 0) {
        catsHidden = !catsHidden
        if(catsHidden) {
            vanishSound.play();
            document.getElementById("cats").style.opacity = "0";
        } else {
            document.getElementById("cats").style.opacity = "1";
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
  var sounding=document.querySelector('#volume');
sounding.addEventListener("click",function(){
    if (audio.paused===false){
      volume.style.opacity=1;
        audio.pause();   
        sounding.blur();
        volume.src="paused.png";
    }else {
      volume.style.opacity=1;
        audio.play();
        sounding.blur()
        volume.src="playing.png";

    }    
    
});
document.addEventListener("keyup",function(){
    console.log("FUCK YOU");
    cats.forEach(cat => {
        let x = Math.floor(Math.random()*window.screen.height*0.75);
        let y = Math.floor(Math.random()*window.screen.width*0.75);
        cat = document.getElementById(cat);
        cat.style.top = x + 'px';
        cat.style.left = y + 'px';
    })
})


const volumeSlider = document.querySelector('#slider');
volumeSlider.addEventListener('input', function() {
  audio.volume = this.value / 100;});
 })


      
  