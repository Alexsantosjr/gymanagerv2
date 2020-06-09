const modalOverlay = document.querySelector(".modal-overlay");
const recipes = document.querySelectorAll('.revenues')

for (let recipe of recipes ){
    recipe.addEventListener("click", function(){
        const receitaId = recipe.getAttribute("id");
        window.location.href = `/receita?id=${receitaId}`
        
    })
}
