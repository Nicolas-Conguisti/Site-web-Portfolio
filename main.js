//PARTIE PORTFOLIO
let link = document.getElementsByClassName("link");
let taille;

for (let i = 0; i < link.length; i++)
{
    link[i].addEventListener("mouseover", grossir);
    link[i].addEventListener("mouseout", maigrir);
}

function grossir()
{
    taille = this.style.fontSize
    this.style.fontSize = "210%";
    this.style.color = "lightblue";
}

function maigrir()
{
    this.style.fontSize = taille;
    this.style.color = "rgb(235, 200, 169)";
}
