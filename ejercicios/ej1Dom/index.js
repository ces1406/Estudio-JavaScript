console.log('iniciando');

const d = document;

function hamburgerMenu(panelBtn,panel,menuLink){
    const d = document;

    d.addEventListener("click",e=>{
        console.log("click en -> ",e.target.classList)
        if(e.target.matches(panelBtn) || e.target.matches(panelBtn+' *')){
            console.log("querySelector("+panel+"): ",d.querySelector(panel))
            d.querySelector(panel).classList.toggle("is-active")
            d.querySelector(panelBtn).classList.toggle("is-active")
        }
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active")
            d.querySelector(panelBtn).classList.remove("is-active")
        }
    })
}

d.addEventListener("DOMContentLoaded",(e)=>{
    console.log("agregando listener")
    hamburgerMenu(".panel-btn",".paneles",".menu a");
})