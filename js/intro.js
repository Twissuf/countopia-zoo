function buka(id) {
const papan = document.getElementById("board");
const isiBox = document.getElementById("info");

// Tentukan isi papan sesuai tombol
let judul = "";
let isi = "";

if (id === "info0") {
    judul = "Angka nol";
    isi = "Tikus menggambarkan angka nol — kecil, sederhana, tapi penuh potensi. Walau tubuhnya mungil, tikus sangat pintar dan mudah beradaptasi. Ia menjadi simbol bahwa sesuatu yang tampak kecil bisa memiliki pengaruh besar, sebagaimana angka nol yang bisa memperbesar nilai angka lain di belakangnya. Dalam urutan ukuran, tikus menjadi yang paling kecil di antara hewan lainnya, bahkan bisa bersembunyi di sela benda-benda kecil yang tidak bisa dijangkau hewan lain.";
} else if (id === "info1") {
    judul = "Angka satu";
    isi = "Burung beo melambangkan keberanian untuk berdiri sendiri. Ia terbang tinggi, mencari arah, dan mampu meniru suara manusia, menunjukkan kecerdasan serta kemampuan berkomunikasi. Jika dibandingkan dengan tikus, burung beo jelas lebih besar dan tampak gagah dengan sayapnya yang lebar.";
} else if (id === "info2") {
    judul = "Angka dua";
    isi = "Bebek, hewan yang suka bergerak berpasangan atau berkelompok di air. Ini melambangkan kerja sama dan keseimbangan. Dibandingkan dengan burung beo, tubuh bebek lebih gemuk dan lehernya lebih panjang, apalagi ketika bulunya mengembang di air.";
} else if (id === "info3") {
    judul = "Angka tiga";
    isi = "Ular menggambarkan angka tiga. Gerakannya yang meliuk-liuk menyerupai bentuk angka tiga, menandakan keluwesan dan kemampuan beradaptasi. Ukurannya bervariasi, ada yang kecil dan ada pula yang sangat panjang, bahkan bisa lebih panjang dari bebek atau rubah.";
} else if (id === "info4") {
    judul = "Angka empat";
    isi = "Rubah menjadi simbol angka empat, yang mencerminkan kecerdikan dan kestabilan. Rubah cerdas dalam menyusun strategi dan tangkas dalam berburu. Tubuhnya lebih besar dan kuat dibanding burung atau ular kecil, tetapi tetap lebih kecil dibanding hewan yang lebih besar seperti kanguru.";
} else if (id === "info5") {
    judul = "Angka lima";
    isi = "Kanguru, dengan lompatannya yang jauh ke depan, mewakili angka lima — tanda kemajuan dan semangat untuk terus melangkah maju. Ia tidak bisa berjalan mundur, sama seperti manusia yang terus tumbuh. Dibandingkan rubah, kanguru jauh lebih besar, tinggi, dan kuat.";
} else if (id === "info6") {
    judul = "Angka enam";
    isi = "Anjing laut, hewan yang bisa hidup di dua dunia — darat dan laut. Ini menggambarkan keseimbangan dan kemampuan beradaptasi. Tubuhnya besar dan berlemak, membuatnya tampak jauh lebih besar dari kanguru. Namun ukurannya hampir sebanding dengan lumba-lumba, simbol angka tujuh.";
} else if (id === "info7") {
    judul = "Angka tujuh";
    isi = "Lumba-lumba adalah hewan cerdas dan sosial, sering dihubungkan dengan pengetahuan dan intuisi. Tubuhnya ramping namun panjang, menunjukkan keseimbangan antara kecerdasan dan keindahan gerak. Ia hidup berkelompok, berkomunikasi dengan suara siulan, dan sering dianggap simbol kebijaksanaan di laut.";
} else if (id === "info8") {
    judul = "Angka delapan";
    isi = "Beruang, hewan besar yang kuat namun lembut. Ia memiliki keseimbangan antara kekuatan dan kasih sayang, sama seperti bentuk angka delapan yang terdiri dari dua lingkaran—atas dan bawah—melambangkan harmoni. Dalam ukuran, beruang jauh lebih besar dari semua hewan sebelumnya, tapi masih kalah besar dari gajah.";
} else if (id === "info9") {
    judul = "Angka sembilan";
    isi = "Gajah menjadi lambang angka sembilan, puncak dari kebijaksanaan dan kekuatan. Gajah adalah hewan darat terbesar, dengan tubuh raksasa dan ingatan yang luar biasa. Ia melambangkan kematangan, kebijaksanaan, dan kedewasaan dalam siklus kehidupan.";
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
