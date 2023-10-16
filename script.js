let  aleatoire = Math.ceil(Math.random()*100); //le nombre à deviner
let compteur = 0
let $essai = $("#essai")
let $ListeItems = $("#ListeItems")

$("h1").click(function ()
{
    $(this).text("Reussi")
})


$("#BoutonSoumettre").click(function (){
    // Ajouter l'essai à la liste des nomnres
    console.log(aleatoire)
    console.log(compteur)
    console.log($Nombre)
    compteur++
    if (compteur < 10 && $essai.val() !== aleatoire.toString())
    {
        $ListeItems.append($essai.val() + " ")
    }

    else if (compteur === 10 && $essai.val() !== aleatoire.toString())

    {
        $ListeItems.text("Meilleure chance la prochaine fois!")
    }

    else if ($essai.val() === aleatoire.toString())
    {
        $("#ListeItems").text("YOUPI")
    }


    //Comparer valeur entrée aux nombres

    // Si plus grand, retirer les plus gros nombres + message

    //Si plus petit, retirer elems + petits + message

})

