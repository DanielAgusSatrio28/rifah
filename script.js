function startFarewell() {
    const message = document.getElementById("message");
    const subMessage = document.getElementById("subMessage");
    const button = document.querySelector("button");
    const danceContainer = document.getElementById("dancing");
    const confetti = document.getElementById("confetti");
    const farewellSong = document.getElementById("farewellSong");

    // Ganti pesan
    message.textContent = "IBU GURU";
    subMessage.textContent = "VIRALL video seorang guru kaget karena anak muridnya punya cita-cita jadi janda. Dalam video tersebut, seorang guru SD menampilkan seorang pendidik berkomentar tentang nilai-nilai yang tidak biasa yang dianut oleh salah satu muridnya telah membuat jagat TikTok bersemangat lagi.";
    
    // Mulai lagu
    farewellSong.play();
    
    // Tampilkan GIF menari
    danceContainer.style.display = "block";
    
    // Mulai efek confetti love
    startConfetti();

    // Animasi dan efek lebih lanjut
    setTimeout(() => {
        confetti.style.display = "none";  // Sembunyikan confetti setelah beberapa detik
        alert("Semoga sukses! Jangan lupa tetap keep in touch!");
    }, 5000);
}

function startConfetti() {
    const confetti = document.getElementById("confetti");

    // Tampilkan confetti
    confetti.style.display = "block";
    let numberOfConfetti = 150;

    // Membuat confetti berbentuk hati
    for (let i = 0; i < numberOfConfetti; i++) {
        const confettiPiece = document.createElement("div");
        confettiPiece.classList.add("heart");
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 3}s`; // Set durasi acak lebih panjang
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`; // Set delay acak
        confetti.appendChild(confettiPiece);
    }
}
