let  aleatoire = Math.ceil(Math.random()*100); //le nombre à deviner
let compteur = 0
let $essai = $("#essai")
let $ListeItems = $("#ListeItems")
let $Nombre = $("#" +$essai.val())
$("h1").click(function ()
{
    $(this).text("Reussi")
})


$("#BoutonSoumettre").click(function (){
    console.log(aleatoire)
    console.log(compteur)

    //Incrémenter compteur de 1
    compteur++

    if (compteur < 10 && $essai.val() !== aleatoire.toString())
    {
        //Ajouter l'essaie à la liste des nombres
        $ListeItems.append($essai.val() + " ")

        // Si la tentative est inférieure au chiffre aléatoire
        if ($essai.val() < aleatoire.toString())
        {
            //Retirer les nombres plus petits
            $Nombre.remove()
        }


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

