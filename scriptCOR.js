fetch('PatisserieToubon.json')
    .then((rep) => {
        return rep.json()
    })
    .then(donnee => {
        console.log(donnee);
        afficheInfos(donnee)
        donnee.produits.forEach(prod => {
            afficheUnProduit(prod)
            
            });
        });

    

//donnee.nomCommercial    
function afficheInfos(info) {
    document.querySelector("#nomCommercial").innerHTML = info.nomCommercial
    document.querySelector("#phraseAccroche").innerHTML = info.phraseAccroche
    document.querySelector("#texteAppelAction").innerHTML = info.texteAppelAction
}
/*
//function AfficheAvantages(Avtg){
    document.querySelector("#avtg1").innerHTML =Avtg.avantagesClients.[0];
    document.querySelector("#avtg2").innerHTML=Avtg.avantagesClients.[1];
    document.querySelector("#avtg3").innerHTML=Avtg.avantagesClients.[2];
}*/


function afficheUnProduit(p) {
    console.log(p.nom);
    console.log(p.description);
    console.log(p.imageUrl)
    let template = `<div id="containerCard" class="cardCSS"><!-- Carte Eclair au chocolat -->
                    <img src="${p.imageUrl}" alt="eclair-chocolat">
                    <h3>${p.nom}</h3> <!-- Nom de la patisserie -->
                    <p>${p.description}</p> <!-- Description de la patisserie -->
                </div>`
    document.querySelector("#produits").innerHTML += template

}
/*
function afficheServices(serv) {
    console.log(serv.nom);
    console.log(serv.description);

    let template = `<div class="cardCSS">
                    <img class="img" src="assets.html/cake_personnalisé.jpg" alt="">
                    <h3>${serv.nom}</h3>
                    <p>${serv.description}</p> <!-- description -->

                </div>`
    document.querySelector("#services").innerHTML += template

}*/