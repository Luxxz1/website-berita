// ====== Data Berita ======
const newsData = [
  {
    title: "Teknologi AI Kian Maju di Indonesia",
    description: "Para pengembang lokal mulai memanfaatkan AI untuk pendidikan dan bisnis. Pemerintah pun mulai menyiapkan regulasi baru.",
    image: "https://source.unsplash.com/600x400/?technology,ai"
  },
  {
    title: "Timnas Indonesia Siap Hadapi Kualifikasi Piala Dunia",
    description: "Pelatih timnas mengatakan para pemain dalam kondisi terbaik menjelang laga melawan Australia.",
    image: "https://source.unsplash.com/600x400/?football,indonesia"
  },
  {
    title: "Cuaca Ekstrem Landa Sejumlah Wilayah",
    description: "BMKG memperingatkan potensi hujan lebat dan angin kencang di beberapa daerah pekan ini.",
    image: "https://source.unsplash.com/600x400/?rain,storm"
  },
  {
    title: "Startup Lokal Sukses Dapatkan Pendanaan Seri A",
    description: "Startup e-commerce asal Bandung berhasil menggaet investor luar negeri senilai Rp50 miliar.",
    image: "https://source.unsplash.com/600x400/?startup,business"
  }
];

// ====== Tampilkan Berita ke Halaman ======
$(document).ready(function() {
  const container = $("#news-container");
  container.empty(); // bersihin kontainer

  newsData.forEach(news => {
    const card = `
      <div class="col-md-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${news.image}" class="card-img-top" alt="${news.title}">
          <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.description}</p>
          </div>
        </div>
      </div>
    `;
    container.append(card);
  });
});
