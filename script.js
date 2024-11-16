const starzinha = document.getElementById('starzinha');
const love = document.getElementById('love');
let Ativo = "000";

starzinha.addEventListener('click', ()=>{
    if (Ativo == "000") {
        starzinha.innerHTML = "Estrelinha";
        Ativo = "999";
    }
    else{
        starzinha.innerHTML = "⭐";
        Ativo = "000";
    }
});

love.addEventListener('click', ()=>{
    if (Ativo == "000") {
        love.innerHTML = "Gosto de Você!";
        Ativo = "888";
    }
    else{
        love.innerHTML = "🫶";
        Ativo = "000";
    }
});
