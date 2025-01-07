fetch('PatisserieToubon.json')
    .then((rep) => {
        return rep.json()
    })
    .then(donnee => {
        console.log(donnee);
        afficheInfos(donnee)
        
        //affichage des produits
        donnee.produits.forEach(prod => {
            afficheUnProduit(prod)
            
        });

        // affichage des services
        donnee.services.forEach(serv=>{
            afficheServices(serv)
        });

    
        
        // affichage des témoignages
        donnee.temoignages.forEach(Tmg => {
            afficheTemoignages(Tmg)
            
        });

        //affichage des avantage
        donnee.avantagesClients.forEach(Avtg => {
           afficheAvantages(donnee)
        });

    });
    
    
    

//donnee.nomCommercial
//rôle : Afficher les données du tableau infos
//paramêtre : Fichier JSON
//Retour: Aucun

function afficheInfos(info) {
    document.querySelector("#nomCommercial").innerHTML = info.nomCommercial
    document.querySelector("#phraseAccroche").innerHTML = info.phraseAccroche
    document.querySelector("#texteAppelAction").innerHTML = info.texteAppelAction
}
//rôle : Afficher les données du tableau Avantages
//paramêtre : Fichier JSON
//Retour: Aucun

function afficheAvantages(Avtg){
    console.log(Avtg)
    document.querySelector("#avantagesClients").innerHTML =Avtg.avantagesClients;
    
}

//rôle : Afficher les données du tableau Produits
//paramêtre : Fichier JSON
//Retour: Aucun

function afficheUnProduit(p) {
    console.log(p.nom);
    console.log(p.description);
    console.log(p.imageUrl)
    let template = `<div class="cardCSS small100"><!-- Carte Eclair au chocolat -->
                    <img src="${p.imageUrl}" alt="eclair-chocolat">
                    <h3>${p.nom}</h3> <!-- Nom de la patisserie -->
                    <p>${p.description}</p> <!-- Description de la patisserie -->
                </div>`
    document.querySelector("#produits").innerHTML += template

}

//rôle : Afficher les données du tableau Services
//paramêtre : Fichier JSON
//Retour: Aucun

function afficheServices(serv) {
    console.log(serv.nom);
    console.log(serv.description);
    console.log(serv.imageUrl)

    let template = `<div class="cardService small100">
                    
                    <h3>${serv.nom}</h3>
                    <img src="${serv.imageUrl}" alt="" class="cardImg">
                    <p>${serv.description}</p> <!-- description -->
                    

                </div>`
    document.querySelector("#services").innerHTML += template

}

//rôle : Afficher les données du tableau Témoignages
//paramêtre : Fichier JSON
//Retour: Aucun

function afficheTemoignages(Tmg) {
    console.log(Tmg.imageUrl);
    console.log(Tmg.prenom);
    console.log(Tmg.typeExperience);
    console.log(Tmg.commentaire);
    console.log(Tmg.note);

    let template =  `<div class="cardCSS">
                    <img class="ImgRound" src="${Tmg.imageUrl}" alt="">
                    <h4>${Tmg.prenom}</h4>
                    <p>"${Tmg.typeExperience}"</p>
                    <p>${Tmg.commentaire}</p>
                    <p>Note: ${Tmg.note}</p>
                    </div>`

                  
    document.querySelector("#Temoignages").innerHTML += template       

// Rôle: Créer un bouton de navigation
// Paramètre: mon écouteur d'évènement
// Retour : Aucun

const stickyContainer = document.getElementById('sticky-container');
const scrollUpBtn = document.getElementById('scroll-up-btn');

// Rajout de mon Ecouteur d'évènement
scrollUpBtn.addEventListener('click', () => {
// Je paramètre le scroll qui va vers le haut
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
}
  
    
    
