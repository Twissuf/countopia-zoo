// -------------------------------------------
// File gambar = img/Angka1.png ... Angka10.png
// Angka1 = "0", Angka2 = "1", ..., Angka10 = "9"
// -------------------------------------------

function imgPath(num) {
    return `img/Angka${num}.png`;
}

let op = "+";
let a, b, result;
let correctAnswer;
let correct = 0;

let message = document.getElementById("message");

// -------------------------------------------
// Mulai game
// -------------------------------------------
function startGame() {
    // op = document.getElementById("operator").value;
    message.innerHTML = "";
    // Generate soal valid (hasil tetap 0–9)
    do {
        a = Math.floor(Math.random() * 10);
        b = Math.floor(Math.random() * 10);
        result = hitung(a, op, b);
    } while (result < 0 || result > 9 || result !== Math.floor(result));

    document.getElementById("question").innerHTML =
        `<img src="${imgPath(a)}"> <h1>${op}</h1> <img src="${imgPath(b)}"> <h1>=</h1> <span class="slot" id="slot" style="z-index: 2;"></span>`;

    correctAnswer = result;

    buatPilihan();
    enableDrop();
}

// -------------------------------------------
function hitung(a, op, b) {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "x") return a * b;
    if (op === "÷") return b === 0 ? 99 : a / b;
}

// -------------------------------------------
// Buat angka acak 0–9 (pakai gambar Angka1..10)
// -------------------------------------------
function buatPilihan() {
    let list = [correctAnswer];

    while (list.length < 4) {
        let r = Math.floor(Math.random() * 10);
        if (!list.includes(r)) list.push(r);
    }

    list.sort(() => Math.random() - 0.5);

    let box = document.getElementById("numberBox");
    box.innerHTML = "";

    list.forEach(n => {
        let img = document.createElement("img");
        img.src = imgPath(n);
        img.className = "num-img";
        img.draggable = !('ontouchstart' in window);
        img.dataset.val = n;

        // drag image ikut mouse
        img.addEventListener("dragstart", function (e) {
            let ghost = document.createElement("img");
            ghost.src = imgPath(n);
            ghost.style.width = "80px";
            document.body.appendChild(ghost);
            e.dataTransfer.setDragImage(ghost, 40, 40);
            setTimeout(() => ghost.remove(), 0);

            e.dataTransfer.setData("value", n);
        });

        // --- MOBILE DRAG ---
        img.addEventListener("touchstart", touchStart);
        img.addEventListener("touchmove", touchMove);
        img.addEventListener("touchend", touchEnd);


        box.appendChild(img);
    });
}

// -------------------------------------------
// Drop slot angka
// -------------------------------------------
function enableDrop() {
    let slot = document.getElementById("slot");

    slot.ondragover = e => e.preventDefault();

    slot.ondrop = function (e) {
        e.preventDefault();
        let value = parseInt(e.dataTransfer.getData("value"));

        // tampilkan gambar di slot
        slot.innerHTML = `<img src="${imgPath(value)}" style="width:100px;">`;

        if (value === correctAnswer) {
                correct += 1;
            if (correct === 3) {
                message.innerHTML = `
                <div><p>🎉 Hebat! Semua pasangan ditemukan!</p></div>
                <div><a class="btn" onclick="window.location.href='index.html'">Next</a></div>
                `;
            } else {
                message.innerHTML = `
                <div><p>🎉 Hebat! Semua pasangan ditemukan!</p></div>
                <div><a class="btn" onclick="startGame()">Next</a></div>
                `;
            }
        } else {
            message.innerHTML = `
            <div><p>Maaf jawaban salah</p></div>
            `;
            // slot.innerHTML = "";
        }
    };
}

let draggedMobile = null;

function touchStart(e) {
    draggedMobile = e.target;
    draggedMobile.style.position = "absolute";
    draggedMobile.style.zIndex = 9999;
}

function touchMove(e) {
    if (!draggedMobile) return;

    let t = e.touches[0];
    draggedMobile.style.left = (t.clientX - 40) + "px";
    draggedMobile.style.top = (t.clientY - 40) + "px";

    e.preventDefault(); // supaya layar tidak scroll
}

function touchEnd(e) {
    if (!draggedMobile) return;
    draggedMobile.style.zIndex = 1;

    let t = e.changedTouches[0];
    let elem = document.elementFromPoint(t.clientX, t.clientY);
    let slot = document.getElementById("slot");

    // cek kalau dilepas di SLOT
    if (elem.closest("#slot")) {
        let val = parseInt(draggedMobile.dataset.val);

        slot.innerHTML = `<img src="${imgPath(val)}" style="width:100px;">`;

        if (val === correctAnswer) {
            correct += 1;
            if (correct === 3) {
                message.innerHTML = `
                <div><p>🎉 Hebat! Semua pasangan ditemukan!</p></div>
                <div><a class="btn" onclick="window.location.href='index.html'">Next</a></div>
                `;
            } else {
                message.innerHTML = `
                <div><p>🎉 Hebat! Semua pasangan ditemukan!</p></div>
                <div><a class="btn" onclick="startGame()">Next</a></div>
                `;
            }
        } else {
            message.innerHTML = `<p>Maaf jawaban salah</p>`;
        }
    }

    // kembalikan posisi
    draggedMobile.style.position = "";
    draggedMobile.style.left = "";
    draggedMobile.style.top = "";
    draggedMobile.style.zIndex = "";

    draggedMobile = null;
}


startGame()
