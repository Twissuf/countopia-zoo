// ==========================
// DATA HARGA
// ==========================
const prices = {
    apel: 2,
    pisang: 5,
    jeruk: 3
};

let round = 1;
const maxRound = 3;
let correctAnswer = 0;

// ==========================
window.onload = () => {
    showPrices();
    startRound();
};

// ==========================
function showPrices() {
    const box = document.getElementById("priceBox");
    box.innerHTML = "<b>Daftar Harga</b><br>";
    for (let item in prices) {
        box.innerHTML += `${item} = ${prices[item]} koin<br>`;
    }
}

// ==========================
function startRound() {
    document.getElementById("round").innerText = round;
    document.getElementById("message").innerText = "";

    const fruits = Object.keys(prices);
    const f1 = fruits[Math.floor(Math.random() * fruits.length)];
    const f2 = fruits[Math.floor(Math.random() * fruits.length)];

    const q1 = Math.floor(Math.random() * 5) + 1;
    const q2 = Math.floor(Math.random() * 5) + 1;

    correctAnswer = q1 * prices[f1] + q2 * prices[f2];

    document.getElementById("question").innerText =
        `Andi membeli ${q1} ${f1} dan ${q2} ${f2}. Berapa koin yang dibutuhkan?`;

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
                // <div><p>Kamu Akhirnya selesai belanja</p></div>
                `<div><a class="btn" onclick="window.location.href='index.html'">Finish</a></div>
                `;
            } else {
                msg.innerHTML = 
                // <p>Benar! 🎉</p>
                `
                <a class="btn" onclick="startRound()">Next</a>
                `;
                // startRound();
            }
        }, 1000);
    } else {
        msg.innerText = "Salah, coba lagi!";
    }
}

