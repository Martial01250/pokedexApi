[].forEach.call(
    document.querySelectorAll("*"),
    function(a){
        a.style.outline="1px solid hsl(" + Math.random() * 360 +", 70%, 70%)";
    }
)

const input = document.querySelector('input');
const nom = document.getElementById("name");
const picture = document.getElementById("picture");
const HP = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const speAtk = document.getElementById("speAtk");
const speDef = document.getElementById("speDef");
const speed = document.getElementById("speed"); 
const description = document.getElementById("description");




// a l'input modification de l'url
input.addEventListener("input", ()=> {
    let url = `https://pokebuildapi.fr/api/v1/pokemon/${input.value}`;
    requestApi(url);
});

// injection de l'url modifié dan la methode fetch
// + injection sur div (html)!
function requestApi(url){
    fetch(url)
    .then (response => 
        response.json()

    ).then (data => {
        nom.textContent = data.name;
        picture.style.backgroundImage = `url("${data.image}")` ;
        HP.textContent = "HP : " + data.stats.HP;
        attack.textContent = "Attaque : " + data.stats.attack;
        defense.textContent = "Defense : " + data.stats.defense;
        speAtk.textContent = "Attaque spécial : " + data.stats.special_attack;
        speDef.textContent = "Defense spécial : " + data.stats.special_defense;
        speed.textContent = "Vitesse : " + data.stats.speed;

    })
};

