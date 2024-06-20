class Produit {
    constructor(nom, prix, quantite)
    {
        this.nom = nom;
        this.prix = prix;
        this.quantite = quantite;
    }
}
   

class Magasin {
    constructor() {
        this.produits = []
    }

    trouverProduitsChers(produits, prixSeuil){
        let produitsChers = [];
        for (let produit of produits){
            if(produit.prix > prixSeuil){
                produitsChers.push(produit);
            }
        }
        return produitsChers;
    }

    statistiquesProduits(produits){
        let prixTotal = 0
        let compteur = 0
        let produitLePlusCher = null;

        for (let produit of produits){
            prixTotal += produit.prix;
            compteur ++;

            if (!produitLePlusCher || produit.prix > produitLePlusCher.prix) {
                produitLePlusCher = produit;
            }
        }
        let prixMoyen = prixTotal /compteur;

        return {
            prixMoyen: prixMoyen,
            produitLePlusCher: produitLePlusCher
        };
    }
}

// Exemple d'utilisation
let magasin = new Magasin();
let produits = [
    { nom: 'Livre', prix: 10, quantite: 5 },
    { nom: 'Stylo', prix: 2, quantite: 10 },
    { nom: 'Cahier', prix: 5, quantite: 8 }
];
let stats = magasin.statistiquesProduits(produits);

console.log(magasin.trouverProduitsChers(produits, 2));
console.log(`Prix moyen : ${stats.prixMoyen}`); 
console.log(`Produit le plus cher : ${stats.produitLePlusCher.nom}`); 