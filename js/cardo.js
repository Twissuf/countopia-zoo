const pairs = [
    { id: '1', images: ['Angka1.png', '1.png'] },
    { id: '2', images: ['Angka2.png', '2.png'] },
    { id: '3', images: ['Angka3.png', '3.png'] },
    { id: '4', images: ['Angka4.png', '4.png'] },
    { id: '5', images: ['Angka5.png', '5.png'] },
    { id: '6', images: ['Angka6.png', '6.png'] },
];

const board = document.querySelector('.board');
const message = document.getElementById('message');
let flipped = [];
let matched = 0;
let lock = false;

// gabungkan semua gambar menjadi 1 list (dengan id-nya)
const cards = pairs.flatMap(p => [
    { id: p.id, img: p.images[0] },
    { id: p.id, img: p.images[1] },
]).sort(() => Math.random() - 0.5);

// tampilkan ke board
cards.forEach(data => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.id = data.id;
    card.innerHTML = `
        <div class="inner">
            <div class="back"></div>
            <div class="front"><img src="img/${data.img}" alt=""></div>
        </div>
        `;
    board.appendChild(card);
    card.addEventListener('click', () => flipCard(card));
});

function flipCard(card) {
    if (lock || card.classList.contains('flip')) return;
    card.classList.add('flip');
    flipped.push(card);

    if (flipped.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    lock = true;
    const [a, b] = flipped;

    if (a.dataset.id === b.dataset.id) {
        matched += 2;
        flipped = [];
        lock = false;

        if (matched === cards.length) {
            // message.textContent = `
            // <p>🎉 Hebat! Semua pasangan makna ditemukan!</p>
            // <a onclick="window.location.href='combo.html'">Next</a>
            // `;
            const button = document.createElement('div');
            button.classList.add('message');
            button.innerHTML = `
            <div><p>🎉 Hebat! Semua pasangan makna ditemukan!</p></div>
            <div><a class="btn" onclick="window.location.href='combo.html'">Next</a></div>
            `;
            message.appendChild(button);
        }
    } else {
        setTimeout(() => {
            a.classList.remove('flip');
            b.classList.remove('flip');
            flipped = [];
            lock = false;
        }, 1000);
    }
}