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

    ajouterProduit(produit) {
        this.produits.push(produit);
    }

    mettreAJourQuantite(nom, newQuantite) {
        const produit = this.produits.find(product => product.nom === nom);
        if (produit) {
            produit.quantite = newQuantite;
        }
    }

    supprimerProduit(nom){
        const produitIndex = this.produits.findIndex(product => product.nom === nom);
        if(produitIndex !== -1){
            this.produits.splice(produitIndex, 1)
        }
    }

    calculerValeurTotale() {
        let total = 0;
        for (let produit of this.produits) {
            total += produit.prix * produit.quantite;
        }
        return total;
    }
}

let magasin = new Magasin();
let produit1 = new Produit('Livre', 10, 5);
let produit2 = new Produit('Stylo', 2, 10);

magasin.ajouterProduit(produit1);
magasin.ajouterProduit(produit2);

console.log(magasin.produits);

magasin.mettreAJourQuantite('Livre', 3);
magasin.supprimerProduit('Stylo');

console.log(magasin.calculerValeurTotale());