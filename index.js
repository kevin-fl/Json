const obj = {
    a: 125,
    b : 100, 
    c : 56,
    d : 458,
    e : 752,
    f : 100
}
// objet js transformer en format json , lettre en string d ailleurs mais pas les chiffres 
// json.stringify va accepter 2 choses en parametres ln 11 a partir de prop
// avec ette methode va carrement degager les val supp a 100 pr tjrs. du coup reste plus que la key c : 56 val ! 
//  NB :mettre en suspend la logique ln 11 pr que le tableau soit complet , sinon que la valeur c : 56  , pas top pour le 2eme exemple 
// PETIT TIPS en + :  1 er param obj , 2eme param (prop, val ) , 3eme param  ln 20 tu met 3 comme ceci 
// et ca formate mieux ds la console l objet . decommenter pr voir le resultat
const objJsonString = JSON.stringify(obj , (prop , val) => {

    if (val >=100){
    return undefined;
}
return val;
}, //3 //ou // "  "
);

console.log(objJsonString);

//format json transformer en objet javascript 
const jsonToJs = JSON.parse(objJsonString, (prop, val )=> {

if (val >= 100 ) {
    console.log(`${prop} est egale ou superieur a 100`);
}
 return val;
});
console.log(jsonToJs);


// ↑ on peut egalement mettre des second parametres dans cette methode ↑ proprietes , valeurs 
// une fois l objet js recuperer avec cet methode , on peu effectuer des actions dessus ↑↑↑ ln 16 et suite
// tjrs la mm ide ln 15 prop = key / val = value quand je demande 
// console.log de prop il me donne juste les key , a est sup a 100.
//return val il me donne les 2 du coup .



