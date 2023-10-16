let aleatoire = Math.ceil(Math.random()*100); //le nombre à deviner

$("h1").click(function ()
{
    $(this).text("Reussi")
})


$("#BoutonSoumettre").click(function (){
    // Ajouter l'essai à la liste des nomnres
    $("#ListeItems").append($("#essai").val() + " ")

    //Compteur d'essais. Commence à 0, incérmente d'1 à chaque tentative

    //Si atteint 10, on affiche message de fin

    //Récupérer la valeur des éléments de la classe Nombre

    //Récpérer la valeur des essais (voir code plus haut)

    //Comparer valeur entrée aux nombres

    // Si plus grand, retirer les plus gros nombres + message

    //Si plus petit, retirer elems + petits + message

    //Si bon, afficher youpi
})

