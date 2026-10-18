const botaoFeatures = document.getElementById("featuresLinks");
const menuFeatures = document.getElementById("caixa-features");
const setasFeatures = document.getElementById("seta-features");

const botaoCompany = document.getElementById("companyLinks");
const menuCompany = document.getElementById("caixa-company");
const setasCompany = document.getElementById("seta-company");



botaoFeatures.addEventListener("click", function(){
    menuFeatures.classList.toggle("mostrar");
    const setasLinksFeatures = menuFeatures.classList.contains("mostrar");
    if(setasLinksFeatures == true){
        setasFeatures.src = "./imagens/icon-arrow-up.svg";
    } else {
        setasFeatures.src = "./imagens/icon-arrow-down.svg";
    }
});

botaoCompany.addEventListener("click", function(){
    menuCompany.classList.toggle("aparecer");
    const setasLinksCompany = menuCompany.classList.contains("aparecer");
    if(setasLinksCompany == true){
        setasCompany.src = "./imagens/icon-arrow-up.svg";
    } else {
        setasCompany.src = "./imagens/icon-arrow-down.svg";
    }
});