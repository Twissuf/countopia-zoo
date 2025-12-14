// ==========================
const questionTypes = ["total", "count"];

const names = ["Andi", "Siti", "Budi", "Rina", "Doni", "Aisyah"];

const fruits = ["apel", "pisang", "jeruk", "mangga", "anggur"];
let prices = {};

let round = 1;
const maxRound = 3;
let correctAnswer = 0;

// ==========================
window.onload = () => {
    startRound();
};

// ==========================
function generatePrices() {
    prices = {};
    fruits.forEach(fruit => {
        prices[fruit] = Math.floor(Math.random() * 4) + 1;
    });
}


// ==========================
function showPrices() {
    const box = document.getElementById("priceBox");
    box.innerHTML = "<b>Daftar Harga</b><br>";
    for (let fruit in prices) {
        box.innerHTML += `${fruit} = ${prices[fruit]} koin<br>`;
    }
}

// ==========================
function startRound() {
    generatePrices();
    showPrices();

    const qType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

    document.getElementById("round").innerText = round;
    document.getElementById("message").innerText = "";

    const name = names[Math.floor(Math.random() * names.length)];

    const fruits = Object.keys(prices);

    if (qType === "total") {
        const f1 = fruits[Math.floor(Math.random() * fruits.length)];
        let f2;
        do {
            f2 = fruits[Math.floor(Math.random() * fruits.length)];
        } while (f2 === f1);

        const q1 = Math.floor(Math.random() * 3) + 1;
        const q2 = Math.floor(Math.random() * 3) + 1;

        correctAnswer = q1 * prices[f1] + q2 * prices[f2];

        document.getElementById("question").innerText =
            `${name} membeli ${q1} ${f1} dan ${q2} ${f2}. Berapa koin yang dibutuhkan?`

    } else if (qType === "count") {
        const fruit = fruits[Math.floor(Math.random() * fruits.length)];
        const name = names[Math.floor(Math.random() * names.length)];

        const price = prices[fruit];
        const maxBuy = Math.floor(Math.random() * 10) + 1;
        const totalCoin = price * maxBuy;

        correctAnswer = maxBuy;

        question.innerText =
            `${name} memiliki ${totalCoin} koin. Berapa ${fruit} yang bisa dia beli?`;
    }


    clearSlots();
    showChoices();

}

// ==========================
function clearSlots() {
    document.querySelectorAll(".slot").forEach(s => {
        s.innerHTML = "";
        s.dataset.val = "";
    });
}

// ==========================
function splitDigits(num) {
    return num.toString().padStart(2, "0").split("");
}

// ==========================
function showChoices() {
    const box = document.getElementById("choices");
    box.innerHTML = "";

    for (let i = 0; i <= 9; i++) {
        const img = document.createElement("img");
        img.src = `img/Angka${i}.png`;
        img.className = "choice";
        img.dataset.value = i;
        box.appendChild(img);

        enableDrag(img);
    }
}

// ==========================
// DRAG PC + HP
// ==========================
function enableDrag(el) {
    let dragging = false;

    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start);

    function start(e) {
        dragging = true;
        el.style.position = "absolute";
        el.style.zIndex = 999;

        move(e);
        document.addEventListener("mousemove", move);
        document.addEventListener("touchmove", move, { passive: false });
        document.addEventListener("mouseup", end);
        document.addEventListener("touchend", end);
    }

    function move(e) {
        if (!dragging) return;
        if (e.touches) e = e.touches[0];
        el.style.left = (e.clientX - 30) + "px";
        el.style.top = (e.clientY - 30) + "px";
        if (e.preventDefault) e.preventDefault();
    }

    function end(e) {
        dragging = false;

        const touch = e.changedTouches ? e.changedTouches[0] : e;
        document.querySelectorAll(".slot").forEach(slot => {
            const r = slot.getBoundingClientRect();
            if (
                touch.clientX > r.left &&
                touch.clientX < r.right &&
                touch.clientY > r.top &&
                touch.clientY < r.bottom
            ) {
                slot.innerHTML = `<img src="img/Angka${el.dataset.value}.png" class="mini">`;
                slot.dataset.val = el.dataset.value;
                checkAnswer();
            }
        });

        el.style.position = "";
        el.style.left = "";
        el.style.top = "";
        el.style.zIndex = "";

        document.removeEventListener("mousemove", move);
        document.removeEventListener("touchmove", move);
        document.removeEventListener("mouseup", end);
        document.removeEventListener("touchend", end);
    }
}

// ==========================
function checkAnswer() {
    const t = document.querySelector("[data-slot='tens']").dataset.val;
    const o = document.querySelector("[data-slot='ones']").dataset.val;

    if (t === "" || o === "") return;

    const attempt = parseInt(t + o);
    const msg = document.getElementById("message");

    if (attempt === correctAnswer) {
        msg.innerText = "Benar! 🎉";
        round++;
        setTimeout(() => {
            if (round > maxRound) {
                document.getElementById("choices").innerHTML = "";
                msg.innerHTML =
                    `<div><a class="btn" onclick="window.location.href='index.html'">Finish</a></div>
                `;
            } else {
                msg.innerHTML =
                    `
                <a class="btn" onclick="startRound()">Next</a>
                `;
            }
        }, 1000);
    } else {
        msg.innerText = "Salah, coba lagi!";
    }
}
