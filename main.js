const teclas = document.querySelectorAll(".tecla");

teclas.forEach((obj) => {
    obj.addEventListener("click", () => {
        tocaSom(obj);
    });
});
function tocaSom(obj) {
    const sons = document.querySelectorAll("audio");
    const index = [...teclas].indexOf(obj);

    sons[index].play();
}
