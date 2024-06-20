class Tache {
    constructor(description, priorite, dateLimite)
    {
        this.id = this.ID(); 
        this.description = description;
        this.priorite = priorite;
        this.dateLimite = dateLimite;
        this.completee = false;
        this.dateCreation = new Date().toLocaleDateString("fr"); 
    }

    // pour générer l'id:  https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    ID() {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < 9) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
}

class GestionnaireDeTaches {
    constructor() {
        this.taches = [];
    }

    ajouterTache(description, priorite, dateLimite) {
        let tache = new Tache(description, priorite, dateLimite);
        this.taches.push(tache);
    }

    supprimerTache(id) {
        const tacheIndex = this.taches.findIndex(tache => tache.id === id)
        if(tacheIndex !== -1){
            this.taches.splice(tacheIndex, 1)
        }
    }

    marquerTacheCompletee(id) {
        let tache = this.taches.find(tache => tache.id === id);
        if (tache) {
            tache.completee = true;
        }
    }

    filtrerTaches(completee = [], priorites = []) {
            return this.taches.filter(tache =>
                completee.includes(tache.completee) && (priorites.includes(tache.priorite))
        );
    }

    trierTaches(critere) {
        this.taches.sort((a, b) => {
            if (a[critere] < b[critere]) return -1;
            if (a[critere] > b[critere]) return 1;
            return 0;
        });
    } 

}

let gestionnaire = new GestionnaireDeTaches();

gestionnaire.ajouterTache('Faire les courses', 'Haute', '2023-12-31');
gestionnaire.ajouterTache('Appeler le client', 'Moyenne', '2023-11-15');
gestionnaire.ajouterTache('Envoyer un email', 'Basse', '2024-01-01');
console.log("Tâches avant suppression:");
console.log(gestionnaire.taches); 

let IdTacheCompletee = gestionnaire.taches[1].id;
gestionnaire.marquerTacheCompletee(IdTacheCompletee);
let tacheCompletee = gestionnaire.taches.find(tache => tache.id === IdTacheCompletee);
console.log("Tâche marquée terminée:");
console.log(tacheCompletee);

let tachesFiltrees = gestionnaire.filtrerTaches([false], ['Moyenne', 'Basse']);
console.log("Tâches filtrées:");
console.log(tachesFiltrees); 

gestionnaire.trierTaches('dateLimite')
console.log("Tâches triées par dateLimite:");
console.log(gestionnaire.taches)

let idASupprimer = gestionnaire.taches[0].id;
gestionnaire.supprimerTache(idASupprimer);
console.log("Tâches après suppression:");
console.log(gestionnaire.taches);