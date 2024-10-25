function filterLaws() {
    const input = document.getElementById('law-search');
    const filter = input.value.toLowerCase();
    const cards = document.getElementsByClassName('law-card');

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const text = card.innerText.toLowerCase();
        if (text.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    }
}
