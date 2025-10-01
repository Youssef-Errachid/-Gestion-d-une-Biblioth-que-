const prompt = require("prompt-sync")();

const Tableau_des_Livres = [
  {
    isbn: "123",
    titre: "Le Petit Prince",
    auteur: "Saint-Exupéry",
    annee: 1943,
    disponible: true,
  },
  {
    isbn: "456",
    titre: "L'Étranger",
    auteur: "Camus",
    annee: 1942,
    disponible: true,
  },
  {
    isbn: "436",
    titre: "book",
    auteur: "auteur",
    annee: 1942,
    disponible: false,
  },
];

const Tableau_des_abonnés = [
  {
    id: 1,
    nom: "Dupont",
    prenom: "Alice",
    email: "alice@mail.com",
  },
];

const Tableau_des_emprunts = [
  {
    abonneId: 1,
    isbn: "123",
    dateEmprunt: "2025-09-22",
  },
];

function Introduire_un_livre() {
  console.log("Voici comment introduire un livre et ses attributs :");
  console.log(
    "1. ISBN : Le numéro ISBN est un identifiant unique attribué à une publication et permet de le distinguer des autres. "
  );
  console.log(
    "2. Titre : Le titre du livre est le nom sous lequel il est connu. "
  );
  console.log("3. Auteur : L'auteur est la personne qui a écrit le livre. ");
  console.log(
    "4. Année de publication : C'est l'année à laquelle le livre a été publié. "
  );
  console.log(
    "5. Disponible (oui/non) : Cela indique si le livre est en stock ou accessible. "
  );
}

function Ajouter_plusieurs_livres() {
  let ajoutée = "y";
  do {
    let isbn = prompt("enter ISBN. ");
    let titre = prompt("entre un titre. ");
    let auteur = prompt("entre un Auteur. ");
    let annee = prompt("entre l'Annee de publication.");
    let disponible = true;
    Tableau_des_Livres.push({
      isbn,
      titre,
      auteur,
      annee,
      disponible,
    });

    ajoutée = prompt("vous souhaitez ajouter un liver? Y/N");
  } while (ajoutée == "y" || ajoutée == "Y");
  console.log("les livres ajoutée avec succès ! ");
}

function task_Action_handler_menu_principal(action) {
  switch (action) {
    case 1:
      Introduire_un_livre();
      break;
    case 2:
      Ajouter_plusieurs_livres();
      break;
    case 3:
      console.clear();
      Opérations_sur_les_livres();
      break;
    case 4:
      console.clear();
      Gestion_des_abonnés();
      break;
    case 5:
      console.clear();
      Gestion_des_emprunts();
      break;
    case 6:
      return;
    default:
  }
}

function Menu_principal() {
  console.log("\n------------------ Menu principal ------------------- ");
  console.log("            Gestion d’une Bibliothèque     ");
  console.log("-----------------------------------------------------");
  console.log("  1. Introduire un livre ");
  console.log("  2. Ajouter plusieurs livres ");
  console.log("  3. Opérations sur les livres ");
  console.log("  4. Gestion des abonnés  ");
  console.log("  5. Gestion des emprunts  ");
  console.log("  6. Quitter l’application ");
  console.log("-----------------------------------------------------\n");
}

function Afficher_tous_les_livres() {
  console.log("tous les livres: ");
  for (const key in Tableau_des_Livres) {
    console.log(`
    ISBN:  ${Tableau_des_Livres[key].isbn} 
    Titre:  ${Tableau_des_Livres[key].titre}
    Auteur:  ${Tableau_des_Livres[key].auteur}
    Année de publication:  ${Tableau_des_Livres[key].annee}
    Disponible:  ${Tableau_des_Livres[key].disponible}

    `);
  }
}

function Trier_les_livres_par_titre() {
  console.log("trie les livres par titre");
}

function Trier_les_livres_par_année() {
  console.log("trie les livres par année");
}

function Afficher_uniquement_les_livres_disponibles() {
  console.log("les livres disponibles");
  for (const key in Tableau_des_Livres) {
    if (Tableau_des_Livres[key].disponible == true)
      console.log(`
    ISBN:  ${Tableau_des_Livres[key].isbn} 
    Titre:  ${Tableau_des_Livres[key].titre}
    Auteur:  ${Tableau_des_Livres[key].auteur}
    Année de publication:  ${Tableau_des_Livres[key].annee}
    Disponible:  ${Tableau_des_Livres[key].disponible}

    `);
  }
}

function Rechercher_un_livre_par_ISBN() {
  console.log("Rechercher un livre par ISBN");
  let try_again = "y";
  do {
    let get_ISBN = prompt("entre le ISBN de livre: ");
    for (let key in Tableau_des_Livres) {
      if (Tableau_des_Livres[key].isbn === get_ISBN) {
        console.log(Tableau_des_Livres[key]);
      }
    }
    try_again = prompt("voulez-vous rechercher encore? Y/N");
  } while (try_again == "y" || try_again == "Y");
}

function task_Action_handler_livres(action) {
  switch (action) {
    case 1:
      Afficher_tous_les_livres();
      break;
    case 2:
      Trier_les_livres_par_titre();
      break;
    case 3:
      Trier_les_livres_par_année();
      break;
    case 4:
      Afficher_uniquement_les_livres_disponibles();
      break;
    case 5:
      Rechercher_un_livre_par_ISBN();
      break;
    default:
  }
}

function Opérations_sur_les_livres() {
  console.log("\n---------------------------------------------------- ");
  console.log("              Opérations sur les livres     ");
  console.log("-----------------------------------------------------");
  console.log("  1. Afficher tous les livres ");
  console.log("  2. Trier les livres par titre (ascendant/descendant) ");
  console.log("  3. Trier les livres par année de publication ");
  console.log("  4. Afficher uniquement les livres disponibles  ");
  console.log("  5. Rechercher un livre par ISBN   ");
  console.log("-----------------------------------------------------\n");
}

function Ajouter_un_abonné() {
  let ajoutée = "y";
  do {
    let id = Tableua.length + 1;
    let nom = prompt("enter le nom. ");
    let prenom = prompt("entre le prenom. ");
    let email = prompt("entre un email. ");
    Tableau_des_abonnés.push({
      id,
      nom,
      prenom,
      email,
    });

    ajoutée = prompt("vous souhaitez ajouter un Abonne? Y/N");
  } while (ajoutée == "y" || ajoutée == "Y");
  console.log("les abonne ajoutée avec succès ! ");
}

function Afficher_tous_les_abonnés() {
  console.log("tous les abonnes: ");
  for (const key in Tableau_des_abonnés) {
    console.log(`
     id:   ${Tableau_des_abonnés[key].id} 
    nom:  ${Tableau_des_abonnés[key].nom}
    prenom:  ${Tableau_des_abonnés[key].prenom}
    email:  ${Tableau_des_abonnés[key].email}

    `);
  }
}

function task_Action_handler_abonnés(action) {
  switch (action) {
    case 1:
      Ajouter_un_abonné();
      break;
    case 2:
      Afficher_tous_les_abonnés();
      break;

    default:
  }
}

function Gestion_des_abonnés() {
  console.log("\n---------------------------------------------------- ");
  console.log("                 Gestion des abonnés      ");
  console.log("-----------------------------------------------------");
  console.log("  1. Ajouter un abonné (ID, Nom, Prénom, Email). ");
  console.log("  2. Afficher tous les abonnés. ");
  console.log("-----------------------------------------------------\n");
}

function is_ISBN_exist(isbn) {
  for (let key in Tableau_des_Livres) {
    if (Tableau_des_Livres[key].isbn === isbn) {
      return true;
    }
  }
  return false;
}

function is_abonne_exist(idabonne) {
  for (let key in Tableau_des_abonnés) {
    if (Tableau_des_abonnés[key].id === idabonne) {
      return true;
    }
  }
  return false;
}

function Enregistrer_un_emprunt() {
  let isbn = " ";
  let abonneId = 0;
  let dateEmprunt = Date;
  do {
    isbn = prompt("entre le ISBN. ");
  } while (!is_ISBN_exist(isbn));
  do {
    isbn = prompt("entre le id. ");
  } while (!is_abonne_exist(abonneId));

  Tableau_des_emprunts.push({
    abonneId,
    isbn,
    dateEmprunt,
  });
  Tableau_des_Livres.disponible = false;
}

function Enregistrer_un_retour() {
  console.log("Enregistrer un retour");
}

function Afficher_les_livres_empruntés_par_un_abonné_donné() {
  console.log("  3. Afficher les livres empruntés par un abonné donné.  ");
}

function task_Action_handler_emprunts(action) {
  switch (action) {
    case 1:
      Enregistrer_un_emprunt();
      break;
    case 2:
      Enregistrer_un_retour();
      break;
    case 3:
      Afficher_les_livres_empruntés_par_un_abonné_donné();
      break;
    default:
  }
}

function Gestion_des_emprunts() {
  console.log("\n---------------------------------------------------- ");
  console.log("                Gestion des emprunts      ");
  console.log("-----------------------------------------------------");
  console.log("  1. Enregistrer un emprunt ");
  console.log("  2. Enregistrer un retour");
  console.log("  3. Afficher les livres empruntés par un abonné donné.  ");
  console.log("-----------------------------------------------------\n");
}

function task_Action_handler_menu_principal(action) {
  switch (action) {
    case 1:
      Introduire_un_livre();
      break;
    case 2:
      Ajouter_plusieurs_livres();
      break;
    case 3:
      console.clear();
      Opérations_sur_les_livres();
      task_Action_handler_livres(get_otion(1, 5));
      break;
    case 4:
      console.clear();
      Gestion_des_abonnés();
      task_Action_handler_abonnés(get_otion(1, 2));
      break;
    case 5:
      console.clear();
      Gestion_des_emprunts();
      task_Action_handler_emprunts(get_otion(1, 3));
      break;
    default:
  }
}

function get_otion(from, to) {
  let o_type;
  do {
    o_type = parseInt(
      prompt("entre le type d'un opérateur (" + from + " --> " + to + "). ")
    );
  } while (isNaN(o_type) || o_type < from || o_type > to);

  return o_type;
}

function main() {
  let try_again = "y";
  do {
    console.clear();
    Menu_principal();
    let option = get_otion(1, 6);

    task_Action_handler_menu_principal(option);

    if (option == 6) {
      console.clear();
      try_again = "n";
    } else {
      try_again = prompt("voulez vous faire autre chose? Y/N");
    }
  } while (try_again == "y" || try_again == "Y");
}

main();
