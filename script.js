// ====== Data Berita ======
const newsData = [
  {
    title: "Teknologi AI Kian Maju di Indonesia",
    description: "Para pengembang lokal mulai memanfaatkan AI untuk pendidikan dan bisnis. Pemerintah pun mulai menyiapkan regulasi baru.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Timnas Indonesia Siap Hadapi Kualifikasi Piala Dunia",
    description: "Pelatih timnas mengatakan para pemain dalam kondisi terbaik menjelang laga melawan Australia.",
    image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Cuaca Ekstrem Landa Sejumlah Wilayah",
    description: "BMKG memperingatkan potensi hujan lebat dan angin kencang di beberapa daerah pekan ini.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Startup Lokal Sukses Dapatkan Pendanaan Seri A",
    description: "Startup e-commerce asal Bandung berhasil menggaet investor luar negeri senilai Rp50 miliar.",
   image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  }
];

// ====== Tampilkan Berita ke Halaman ======
$(document).ready(function() {
  const container = $("#news-container");
  container.empty();

  newsData.forEach(news => {
    const card = `
      <div class="col-md-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${news.image}" class="card-img-top img-fluid" alt="${news.title}">
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
