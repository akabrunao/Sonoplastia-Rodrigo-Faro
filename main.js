function tocaSom(index) {
    const sons = document.querySelectorAll("audio");
    sons[index].play();
}

const teclas = document.querySelectorAll(".tecla");

teclas.forEach((obj, index) => {
    obj.addEventListener("click", () => {
        tocaSom(index);
    });
});
