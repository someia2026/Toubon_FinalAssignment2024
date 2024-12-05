fetch("PatisserieToubon.json")
    .then((rep) => {
        return rep.json();
    })
    .then((data) => {
        console.log(data);
        donnee.forEach((temoignage) => {
        
            afficher2(temoignage);
        });

    });

let affichageAvis = ""

function afficher2(temoignage) {
    temoignage.forEach(tem => {
        let prenom = tem.prenom
        let titreXP = tem.typeExperience
        let com = tem.commentaire
        let rate = tem.note
        let templateAvis = `<div>
                <div id="containerAvis" class="cardCSS">
                    <img class="img" src="assets.html/Claire_cliente.jfif" alt="">
                    <div>
                        <h5>${prenom}</h5>
                        <p>${rate}</p>
                    </div>
                <div>
                <h5>${titreXP}</h5>
                <p>${com}</p>
            </div>`
        let affichageAvis = document.querySelector("#containerAvis")
        affichageAvis.innerHTML += templateAvis
    });
}