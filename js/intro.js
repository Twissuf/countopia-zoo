function buka(id) {
const papan = document.getElementById("board");
const isiBox = document.getElementById("info");

// Tentukan isi papan sesuai tombol
let judul = "";
let isi = "";
if (id === "info0") {
    judul = "Angka nol";
    isi = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae at quasi facere corrupti tempora esse quam debitis officia distinctio excepturi perferendis, pariatur laboriosam maxime nihil voluptatibus expedita nesciunt id veniam!";
} else if (id === "info1") {
    judul = "Angka satu";
    isi = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae at quasi facere corrupti tempora esse quam debitis officia distinctio excepturi perferendis, pariatur laboriosam maxime nihil voluptatibus expedita nesciunt id veniam!";
} else if (id === "info2") {
    judul = "Angka dua";
    isi = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae at quasi facere corrupti tempora esse quam debitis officia distinctio excepturi perferendis, pariatur laboriosam maxime nihil voluptatibus expedita nesciunt id veniam!";
} else if (id === "info3") {
    judul = "Angka satu";
    isi = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae at quasi facere corrupti tempora esse quam debitis officia distinctio excepturi perferendis, pariatur laboriosam maxime nihil voluptatibus expedita nesciunt id veniam!";
} else if (id === "info4") {
    judul = "Angka dua";
    isi = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae at quasi facere corrupti tempora esse quam debitis officia distinctio excepturi perferendis, pariatur laboriosam maxime nihil voluptatibus expedita nesciunt id veniam!";
} else if (id === "info5") {
    judul = "Angka satu";
    isi = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae at quasi facere corrupti tempora esse quam debitis officia distinctio excepturi perferendis, pariatur laboriosam maxime nihil voluptatibus expedita nesciunt id veniam!";
} else if (id === "info6") {
    judul = "Angka dua";
    isi = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae at quasi facere corrupti tempora esse quam debitis officia distinctio excepturi perferendis, pariatur laboriosam maxime nihil voluptatibus expedita nesciunt id veniam!";
} else if (id === "info7") {
    judul = "Angka satu";
    isi = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae at quasi facere corrupti tempora esse quam debitis officia distinctio excepturi perferendis, pariatur laboriosam maxime nihil voluptatibus expedita nesciunt id veniam!";
} else if (id === "info8") {
    judul = "Angka dua";
    isi = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae at quasi facere corrupti tempora esse quam debitis officia distinctio excepturi perferendis, pariatur laboriosam maxime nihil voluptatibus expedita nesciunt id veniam!";
}

// Set isi dan tampilkan papan
document.getElementById("judul").innerText = judul;
document.getElementById("isi").innerText = isi;

papan.style.display = "flex";
}

function tutup() {
const papan = document.getElementById("board");
const isiBox = document.getElementById("info");

// Tambahkan animasi keluar
papan.classList.add("fade-out");
isiBox.classList.add("fade-out");

// Setelah animasi selesai, sembunyikan elemen
setTimeout(() => {
    papan.style.display = "none";
    papan.classList.remove("fade-out");
    isiBox.classList.remove("fade-out");
}, 300);
}

const info = document.getElementById("info");

document.addEventListener('click', function (e) {
    // if (!info.contains(e.target)) {
        navbarNav.classList.remove('active');
    // }
})