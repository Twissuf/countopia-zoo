const pairs = [
    { id: '1', images: ['Kartu1.jpg', 'Katru1.jpg'] },
    { id: '2', images: ['Kartu2.jpg', 'Katru2.jpg'] },
    { id: '3', images: ['Kartu3.jpg', 'Katru3.jpg'] },
    { id: '4', images: ['Kartu4.jpg', 'Katru4.jpg'] },
    { id: '5', images: ['Kartu5.jpg', 'Katru5.jpg'] },
    { id: '6', images: ['Kartu6.jpg', 'Katru6.jpg'] },
    { id: '7', images: ['Kartu7.jpg', 'Katru7.jpg'] },
    { id: '8', images: ['Kartu8.jpg', 'Katru8.jpg'] },
    { id: '9', images: ['Kartu9.jpg', 'Katru9.jpg'] },
    { id: '0', images: ['Kartu0.jpg', 'Katru0.jpg'] },
];

pairs.splice(Math.floor(Math.random() * 10), 1)
pairs.splice(Math.floor(Math.random() * 9), 1)
pairs.splice(Math.floor(Math.random() * 8), 1)
pairs.splice(Math.floor(Math.random() * 7), 1)

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
