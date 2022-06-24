// [].forEach.call(
//     document.querySelectorAll("*"),
//     function(a){
//         a.style.outline="1px solid hsl(" + Math.random() * 360 +", 70%, 70%)";
//     }
// )

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
const type = document.getElementById("type");
const typeName = document.getElementById("typeName")
// const res1 = document.getElementById("res1");
// const res2 = document.getElementById("res2");
// const res3 = document.getElementById("res3");



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
        speed.textContent = "Vitesse : " + data.stats.speed ;
        type.style.backgroundImage = `url("${data.apiTypes[0].image}")`;
        typeName.textContent = "Type : " + data.apiTypes[0].name
        // res3.textContent = data.apiResistances[1].name;
        // res2.textContent = data.apiResistances[10].name;
        // res1.textContent = data.apiResistances[12].name;
        
    })
};

