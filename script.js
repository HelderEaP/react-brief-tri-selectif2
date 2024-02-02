class Recyclage {
    constructor(trashbinArray, trashArray) {
        this.trashbinArray = trashbinArray;
        this.trashArray = trashArray;
        this.score = 0;
        // En cas d'ajout de déchets disponibles, ajoutez un objet avec les informations correspondantes.
        this.dataTrash = [
            {
                "name" : "pot de yahourt",
                "bin" : "brown",
                "commentaire" : "Les pots de yahourt ne sont pas recyclables, donc dans la poubelle marron.",
                "asset" : "assets/yahourt.png"
            },
            {
                "name" : "bouteille en plastique",
                "bin" : "yellow",
                "commentaire" : "Les bouteilles en plastiques sont recyclable et vont dans la poubelle jaune.",
                "asset" : "assets/bouteille-plastique.png"
            },
            {
                "name" : "bouteille en verre",
                "bin" : "green",
                "commentaire" : "Les bouteilles en verre sont destinés à la poubelle bleue.",
                "asset" : "assets/bouteille-verre.png"
            },
            {
                "name" : "brique de lait",
                "bin" : "yellow",
                "commentaire" : "Les briques alimentaire en carton, comme le lait ou les jus de fruit, vont dans la poubelle jaune.",
                "asset" : "assets/brique-lait.png"
            },
            {
                "name" : "canette de soda",
                "bin" : "yellow",
                "commentaire" : "Les canettes de soda sont en aluminium, donc dqns la poubelle jaune.",
                "asset" : "assets/canette-coca.png"
            },
            {
                "name" : "carton",
                "bin" : "yellow",
                "commentaire" : "Les boites en carton sont recyclable et vont donc dans la poubelle jaune.",
                "asset" : "assets/carton.png"
            },
            {
                "name" : "boite de conserve",
                "bin" : "yellow",
                "commentaire" : "Les boites de conserves vont dans la poubelle jaune.",
                "asset" : "assets/conserve.png"
            },
            {
                "name" : "gobelet en plastique",
                "bin" : "yellow",
                "commentaire" : "Les gobelets en plastiques, ou en cartons, vont dans la poubelle jaune.",
                "asset" : "assets/gobelet-plastique.png"
            },
            {
                "name" : "mouchoirs en papier",
                "bin" : "green",
                "commentaire" : "Les mouchoirs en papier souillés doivent être collectés dans les poubelles vertes.",
                "asset" : "assets/mouchoir-papier.png"
            },
            {
                "name" : "trognon de pomme",
                "bin" : "brown",
                "commentaire" : "Les déchets alimentaires, comme les trognons de pomme, vont dans la poubelle marron.",
                "asset" : "assets/pomme.png"
            },
            {
                "name" : "journal",
                "bin" : "blue",
                "commentaire" : "Les journaux sont collectés dans les poubelles bleu.",
                "asset" : "assets/journal.png"
            },
            {
                "name" : "magazines",
                "bin" : "blue",
                "commentaire" : "Les magazines sont collectés dans les poubelles bleu.",
                "asset" : "assets/magazines.png"
            }
        ];
        this.trashDragged;
        this.binDroped;
        this.trashToDelete;
        this.trashLeft = 10;
    }
    randomTrash() {
        // nb est le nb de déchets existants, si vous en rajoutez modifier sa valeur.
        let nb = 12;
        return Math.floor(Math.random() * nb);
    }
    setTrash(nb, trash) {
        switch (nb) {
            case 1:
                //bouteille en plastique
                trash.setAttribute("src", this.dataTrash[nb].asset);
                trash.setAttribute("data-trash", nb);
                break;
        
            case 2:
                //bouteille en verre
                trash.setAttribute("src", this.dataTrash[nb].asset);
                trash.setAttribute("data-trash", nb);
                break;
        
            case 3:
                //brique de lait
                trash.setAttribute("src", this.dataTrash[nb].asset);
                trash.setAttribute("data-trash", nb);
                break;
        
            case 4:
                //canette de coca
                trash.setAttribute("src", this.dataTrash[nb].asset);
                trash.setAttribute("data-trash", nb);
                break;
        
            case 5:
                //carton
                trash.setAttribute("src", this.dataTrash[nb].asset);
                trash.setAttribute("data-trash", nb);
                break;
        
            case 6:
                //conserve
                trash.setAttribute("src", this.dataTrash[nb].asset);
                trash.setAttribute("data-trash", nb);
                break;
        
            case 7:
                //gobelet en plastique
                trash.setAttribute("src", this.dataTrash[nb].asset);
                trash.setAttribute("data-trash", nb);
                break;
        
            case 8:
                //mouchoir en papier
                trash.setAttribute("src", this.dataTrash[nb].asset);
                trash.setAttribute("data-trash", nb);
                break;
        
            case 9:
                //pomme
                trash.setAttribute("src", this.dataTrash[nb].asset);
                trash.setAttribute("data-trash", nb);
                break;
            
            case 10:
                //journal
                trash.setAttribute("src", this.dataTrash[nb].asset);
                trash.setAttribute("data-trash", nb);
                break;
        
            case 9:
                //magazines
                trash.setAttribute("src", this.dataTrash[nb].asset);
                trash.setAttribute("data-trash", nb);
                break;
            
            // Ajoutez ci-dessus les déchets que vous avez rajoutez en copiant exactement
            // le même code des "case" précédents, la seule chose à modifier étant la valeur
            //que vous incrémentez.
            default:
                //pot de yahourt
                trash.setAttribute("src", this.dataTrash[nb].asset);
                trash.setAttribute("data-trash", nb);
                break;
        }
        trash.setAttribute("draggable", "true");
    }
    displayTrash() {
        for(let trash of this.trashArray) {
            this.setTrash(this.randomTrash(), trash);
        }
    }
    displayInfoTrash(TrashId) {
        commentaire.innerText = this.dataTrash[TrashId].name;
    }
    controlTrash() {
        if(this.dataTrash[this.trashDragged].bin == this.binDroped) {
            this.score++;
            commentaire.innerText = "Bien Joué !";
            score.innerText = this.score;
        } else {
            commentaire.innerText = this.dataTrash[this.trashDragged].commentaire;
        }
        this.trashToDelete.remove();
        this.trashLeft--;
        this.controlTrashLeft();
    }
    controlTrashLeft() {
        if(this.trashLeft == 0) {
            this.endGame();
        }
    }
    endGame() {
        if(this.score == 10) {
            commentaire.innerText = "Vous êtes un as du trisélectif !";
        } else if(this.score < 10 && this.score >= 5) {
            commentaire.innerText = "Vous êtes sur la bonne voie.";
        } else if(this.score < 5 && this.score > 0) {
            commentaire.innerText = "Faites plus d'efforts pour le bien de la nature !";
        } else {
            commentaire.innerText = "Vous êtes un déchet ambulant, là où vous passez les détritus prolifèrent...";
        }
        restartBtn.disabled = false;
    }
    restartGame() {
        this.score = 0;
        commentaire.innerText = "Réfléchissez bien!";
        restartBtn.disabled = true;
        this.trashLeft = 10;
        score.innerText = this.score;
        for(let i = 0; i < 10; i++) {
            document.getElementById('trash').innerHTML +=`<img src="" alt="déchet" class="trash">`;
        }
        this.trashArray = document.getElementsByClassName('trash');
        this.displayTrash();
    }
}
// VARIABLES GLOBALES //
let score = document.getElementById('score');
let commentaire = document.getElementById('commentaire');
let restartBtn = document.getElementById('restart');
let recycle = new Recyclage(
    document.getElementsByClassName('trashbin'),
    document.getElementsByClassName('trash')
)

// FONCTIONS GLOBALES //
function dragHandler(e) {
    recycle.trashDragged = e.dataset.trash;
    recycle.trashToDelete = e;
    document.body.append(recycle.trashToDelete);
    recycle.trashToDelete.style.display = 'none';
}
function dropHandler(e) {
    recycle.binDroped = e.dataset.bin;
    dragleaveHandler(e);
    recycle.controlTrash();
}
function dragoverHandler(e) {
    e.style.transform = "scale(1.2)"
}
function dragleaveHandler(e) {
    e.style.transform = "scale(1)"
}
function dragendHandler() {
    recycle.trashToDelete.style.display = "block";
}
// INITIALISATION //
recycle.displayTrash();

window.addEventListener("DOMContentLoaded", () => {
    for(let trashElt of document.getElementsByClassName('trash')) {
        trashElt.addEventListener("drag", (e) => {
            e.preventDefault();
            recycle.displayInfoTrash(trashElt.dataset.trash);
            dragHandler(trashElt);
        })
        trashElt.addEventListener('dragend', (e) => {
            e.preventDefault();
            dragendHandler();
        })
    }
    for(let bin of document.getElementsByClassName('trashbin')) {
        bin.addEventListener('dragover', (e) => {
            e.preventDefault();
            dragoverHandler(bin);
        });
        bin.addEventListener('dragleave', (e) => {
            e.preventDefault();
            dragleaveHandler(bin);
        });
        bin.addEventListener('drop', (e) => {
            e.preventDefault();
            dropHandler(bin);
        });
    }
})
restartBtn.addEventListener('click', () => {
    //recycle.restartGame();
    location.reload();
})