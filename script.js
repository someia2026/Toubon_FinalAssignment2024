fetch("PatisserieToubon.json")
  .then((rep) => {
   return rep.json();
  })
.then((data) => {
    console.log(data);
    afficher(data)

});

function afficher(FicheTouBon) {
    // Afficher dans le cocument les information simples : nom commercilal , le slogan, le cta
    // Récupère la data Json
    let nomCom = FicheTouBon.nomCommercial; 
    console.log(nomCom)
    document.querySelector(`#nomEntreprise`).innerHTML = nomCom //reporter l'ID dans le HTML
    let Accro = FicheTouBon.phraseAccroche;
    document.querySelector(`Slogan`).innerHTML = Accro
    let CTA = FicheTouBon.texteAppelAction;
    document.querySelector(`#AppelAction`).innerHTML = CTA
    console.log(afficher);
    

}

// Initialisation des listes HTML pour les ingrédients et les étapes
let listeAvantage = "";
let listeProduits = "";
let listeServices = "";
let listeTmg ="";

function afficheLesProduits(produits){
  // Parcourt du contenu Produits et crée un élément de liste <li>
    produits.forEach((Products) => {
    console.log(Products); // Affiche les informations de chaque Avantage dans la console afin de vérifier
    listeProduits += `<li>${produits.nom} ${produits.description} ${produits.imageurl}</li>`; // on ajoute l'élément de liste créer à la variable innitialisé plus haut. a terme, elle stockera l'ensemble des élément li 
    `<div class="cardCSS"><!-- Carte Eclair au chocolat -->
                    <ul><li>${listeProduits}</li></ul>
                </div>`
  });
  document.querySelector("#cardContainer2").innerHTML += `
  <div class="cardCSS"><!-- Carte Eclair au chocolat -->
                    <ul>
                        <li>
                    <img class="img" src="${produits.imageurl}">
                    <h3>${produits.nom}</h3> <!-- Nom de la patisserie -->
                    <p>${produits.description}</p> <!-- Description de la patisserie -->
                    </li>
                    
                    </ul>
                </div>`
}

/*
  // j'injecte mes cartes produit dans une div spéciale
  FicheTouBon.AvantagesClients.forEach((AvtgClients) => {
    console.log(AvtgClients); // Affiche les informations de chaque Avantage dans la console afin de vérifier
    listeAvantage += `<li>${avantagesClients} ${avantagesClients} ${avantagesClients}</li>`;
  
   `<div> 
    <ul>${listeAvantage}</ul>
    </div>`
});
}
 
 /*   FicheTouBon.services.forEach(element => {
    console.log(Favours);
    listeServices +=`<li>${services.nom} ${services.description}</li>`;
    `<div class="cardCSS">
    <h3></h3>
    <p></p>           
   </div>`                 
            
 });
    

 FicheTouBon.temoignages.forEach((Tmg) => {
 console.log(Tmg); // Affiche les informations de chaque Témoignage dans la console afin de vérifier
 listeTmg += `<li>${temoignages.prenom} ${temoignages.typeExperience} ${temoignages.commentaire} ${temoignages.note}</li>`;
 `<div class="cardCSS">
<ul><li>${listeTmg}</li></ul>
});`                        
})
document.querySelectorAll("#cardContainer").innerHTML += blabla
}
*/
