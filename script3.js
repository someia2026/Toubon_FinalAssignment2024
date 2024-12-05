fetch('PatisserieToubon.json')
    .then((rep) => {
        return rep.json()
    })
    .then(donnee => {
        console.log(donnee.produits);
        afficher(donnee.produits)
        
    })
    function AffichHERO() {
        
    
    let NomEnt = document.getElementById(`${nomCommercial}`)
    let Accro = document.getElementById(`${phraseAccroche}`)
    let CTA = document.getElementById(`${texteAppelAction}`)
    `<section class="container"> <!-- HERO -->
                <img class="bkgdHero" src="" alt=""> <!-- Background Image semi-transparente -->
                <h1>${NomEnt} </h1> <!-- Succombez -->
                <h2>${Accro}</h2> <!-- TouBon - Pâtisserie à Auxerre -->
                <a>${CTA}</a> <!-- Découvrez nos créations  --> <!-- CREER UN BOUTON CTA -->
            </section>`
    console.log(AffichHERO);
           
        }        


//role : afficher en page html
//parametre : les données avantages JSON
//retour : Rien
/* function afficher(avantages) {
    produits.forEach(prod => {
        let nom = prod.nom
        let desc = prod.description
        let img = prod.imageUrl
        let ProduitsAffichage = `<div id="containerCard" class="cardCSS"><!-- Carte Eclair au chocolat -->
                    <ul>
                        <li>
                    <img src="${nom}" alt="">
                    <h3>${desc}</h3> <!-- Nom de la patisserie -->
                    <p>${img}</p>
                    </li>
                    </ul>
                </div>`
        let ProduitsAffichage = document.querySelector("#containerCard")
        affichage.innerHTML += template1
    });
}
//role : afficher en page html
//parametre : les données Produits JSON
//retour : Rien

/*
function afficher2(temoignage) {
    temoignage.forEach(tem => {
        let prenom = tem.prenom
        let titreXP = tem.typeExperience
        let com = tem.commentaire
        let rate = tem.note
        let etoilePleine = "★"
        let etoileVide = "☆"
        let rateEtoile = etoilePleine.repeat(rate)
        let rateEtoileV = etoileVide.repeat(5-rate)
        let templateAvis = `<div class="cardAvis marginAvis">
                <div class="flex alignItem">
                    <img src="assets/avis_photo.jpg" alt="">
                    <div class="width45">
                        <h5>${prenom}</h5>
                        <p>${rateEtoile}${rateEtoileV}</p>
                    </div>
                </div>
                <h5>${titreXP}</h5>
                <p>${com}</p>
            </div>`
            /*il faut que mon nombre sur 5 dans chaque avis ce traduise en étoile selon le nombre sur et le nombre d'étoile manquant
devient une etoile vide je crée donc 2 boites qui va contenir mes étoile vide et remplisle nombre d'etoile plaine correspondra a ma not et le nombre d'etoile vide sera le resultat de ma note (donc le nombre d'etoile) moins 5 (qui me donnera donc le nombre d'etoile vide)  */
        /*let affichageAvis = document.querySelector("#containerAvis")
        affichageAvis.innerHTML += templateAvis
    });

  
} */
//role : afficher en page html
//parametre : les données Services JSON
//retour : Rien  
/*
function afficher(activite) {
    activite.forEach(act => {
        let nom = act.nom
        let desc = act.description
        let img = act.imageurl
        let template1 = `<div class="card width30">
                <img src="${img}" alt="image en lien avec l'aventure">
                <div>
                    <h3>${nom}</h3>
                    <p>${desc}</p>
                    <a href="aventure.html" target="_blank">Réservez !</a>
                </div>
            </div>`
        let affichage = document.querySelector("#containerCard")
        affichage.innerHTML += template1
    });
}



//role : afficher en page html
//parametre : les données Témoignages JSON
//retour : Rien  

function afficher(activite) {
    activite.forEach(act => {
        let nom = act.nom
        let desc = act.description
        let img = act.imageurl
        let template1 = `<div class="card width30">
                <img src="${img}" alt="image en lien avec l'aventure">
                <div>
                    <h3>${nom}</h3>
                    <p>${desc}</p>
                    <a href="aventure.html" target="_blank">Réservez !</a>
                </div>
            </div>`
        let affichage = document.querySelector("#containerCard")
        affichage.innerHTML += template1
    });
}
    */