//PARTIE PORTFOLIO
let link = document.getElementsByClassName("lienAnimJS");
let taille;
let tailleEcran = screen.width;

if(tailleEcran > 1025)
{
    for (let i = 0; i < link.length; i++)
    {
        link[i].addEventListener("mouseover", grossir);
        link[i].addEventListener("mouseout", maigrir);
    }
}



function grossir()
{
    taille = this.style.fontSize
    //this.style.fontSize = "210%";
    this.style.color = "darkblue";
}

function maigrir()
{
    //this.style.fontSize = taille;
    this.style.color = "rgb(235, 200, 169)";
}
