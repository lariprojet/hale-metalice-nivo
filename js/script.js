function sendWhatsApp() {

    const name = document.getElementById("name")?.value;
    const phone = document.getElementById("phone")?.value;
    const service = document.getElementById("service")?.value;
    const message = document.getElementById("message")?.value;

    if (name === "" || phone === "") {
        alert("Te rugăm să completezi numele și telefonul.");
        return;
    }

    const text =
`Bună ziua!

Nume: ${name}
Telefon: ${phone}
Serviciu: ${service}

Mesaj:
${message}`;

    const url =
`https://wa.me/40762520530?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
}


// ======================
// GALERIE PORTOFOLIU
// ======================

const gallery = document.getElementById("gallery");

if (gallery) {

    const totalImages = 70;

    for (let i = 1; i <= totalImages; i++) {

        const img = document.createElement("img");

        img.src = `images/portofoliu/${i}.png`;
        img.alt = `Proiect NIVO ${i}`;
        img.loading = "lazy";

        gallery.appendChild(img);
    }

}