$(document).ready(function() {
  // Data berita (kamu bisa ubah sesuai keinginan)
  const berita = [
    {
      gambar: "https://picsum.photos/400/200?random=1",
      judul: "Berita Nasional: Kebijakan Baru Pemerintah",
      deskripsi: "Pemerintah resmi mengumumkan kebijakan baru yang bertujuan meningkatkan kualitas pendidikan nasional.",
      link: "#"
    },
    {
      gambar: "https://picsum.photos/400/200?random=2",
      judul: "Teknologi AI di Indonesia",
      deskripsi: "Perusahaan startup Indonesia mulai memanfaatkan kecerdasan buatan untuk meningkatkan produktivitas bisnis.",
      link: "#"
    },
    {
      gambar: "https://picsum.photos/400/200?random=3",
      judul: "Olahraga: Liga Indonesia Makin Seru",
      deskripsi: "Pertandingan sengit antara dua klub besar berakhir dramatis dengan skor imbang 2-2.",
      link: "#"
    },
    {
      gambar: "https://picsum.photos/400/200?random=4",
      judul: "Hiburan: Film Lokal Tembus Box Office",
      deskripsi: "Film karya anak bangsa berhasil menarik jutaan penonton dan mendapat penghargaan internasional.",
      link: "#"
    }
  ];

  // Menampilkan card berita ke halaman
  berita.forEach(function(item) {
    $('#news-container').append(`
      <div class="col-md-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${item.gambar}" class="card-img-top" alt="Gambar Berita">
          <div class="card-body">
            <h5 class="card-title">${item.judul}</h5>
            <p class="card-text">${item.deskripsi}</p>
            <a href="${item.link}" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    `);
  });
});