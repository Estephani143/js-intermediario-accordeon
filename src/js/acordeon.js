const itensPerguntasERespostas = document.querySelectorAll(".item");

itensPerguntasERespostas.forEach((item) => {
    item.addEventListener("click", () => {
        const itemAtivoAtual = document.querySelector(".ativo");
        itemAtivoAtual.classList.remove("ativo");

        if (itemAtivoAtual) {
            itemAtivoAtual.classList.remove("ativo");
        }

        item.classList.add("ativo");
    });
});

