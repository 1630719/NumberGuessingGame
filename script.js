let  aleatoire = Math.ceil(Math.random()*100); //le nombre à deviner
let compteur = 0
let $essai = $("#essai")
let $ListeItems = $("#ListeItems")
let $ZoneMessage = $("#ZoneMessage")
const $btn_nouvpartie = $("#NouvellePartie")

$("h1").click(function ()
{
    $(this).text("Reussi")
})

$("#BoutonSoumettre").click(function (){
    console.log(aleatoire)
    console.log(compteur)

    //Incrémenter compteur de 1
    compteur++
    let $Nombre = $("#" + $essai.val())
    if (compteur < 10 && $essai.val() !== aleatoire.toString())
    {
        //Ajouter l'essaie à la liste des nombres
        $ListeItems.append($essai.val() + (" "))

        // Si la tentative est inférieure au chiffre aléatoire
        if ($essai.val() < aleatoire.toString() && $essai.val() !== '100') {

            //Retirer les nombres plus petits ET la tentative
            $Nombre.prevAll().remove()
            $Nombre.remove()

            //Afficher message
            $ZoneMessage.text("Trop bas!")
            $ZoneMessage.toggleClass("MauvaisGuess", true)
        }

        else if ($essai.val() > aleatoire.toString() && $essai.val() !== '100')
        {
            // Retirer les nombres plus haut
            $Nombre.nextAll().remove()
            $Nombre.remove()

            //Afficher message
            $ZoneMessage.text("Trop haut!")
            $ZoneMessage.toggleClass("MauvaisGuess", true)
        }

        else if ($essai.val() === '100')
        {
            $Nombre.remove()
        }
    }

    // Si 10 mauvais essais
    else if (compteur === 10 && $essai.val() !== aleatoire.toString())

    {   //Afficher message de fin
        $ListeItems.text("Meilleure chance la prochaine fois!")
        $btn_nouvpartie.removeClass("CacherBouton")
    }

    //Si bonne réponse
    else if ($essai.val() === aleatoire.toString())
    {
        //Message succès et afficher bouton recommencer
        $ZoneMessage.text("Bravo!")
        $ZoneMessage.toggleClass("BonGuess", true)
        $btn_nouvpartie.removeClass("CacherBouton")
    }

    //Pour vider le input quand on clique sur le bouton d'essai
    $essai.val('')
})

$btn_nouvpartie.click(function()
{
    window.location.reload()
})

