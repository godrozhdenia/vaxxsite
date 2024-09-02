const song = new Audio('cool song.mp3');
const container = document.getElementById('container')
const vaxxed = document.getElementById('vaxxed')
function access(parameter){
    if (parameter == 'granted'){
        vaxxed.style.visibility = "hidden";
        container.style.visibility = "visible";
        song.play()
        song.loop = true;
    }
    else{
        alert('buy 💉🧬 and come back later!')
        setTimeout(function(){window.location.href = "https://www.unicorn.meme/";}, 1000)
        
    }
}
function lore(){
    window.open('https://vaxx-marketvaccinesslegal.online/lore');
}