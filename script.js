const tombol = document.getElementById('tombol');
const ulang = document.getElementById('ulang');
const inputNama = document.getElementById('nama');

const hasil = document.getElementById('hasil');
const emoji = document.getElementById('emoji');
const judul = document.getElementById('judul');
const pesan = document.getElementById('pesan');

const daftarPesan = [
  {
    emoji: '☕',
    judul: 'Satu masalah dulu.',
    pesan:
      'Kalau hari ini berantakan, setidaknya rambut masih bisa disisir. Fokus pada hal-hal yang bisa dikendalikan.',
  },
  {
    emoji: '🌧️',
    judul: 'Prakiraan hari ini.',
    pesan:
      'Hujan boleh deras, tapi jangan sampai pikiran ikut lembur. Kasihan, dia juga butuh libur.',
  },
  {
    emoji: '📢',
    judul: 'Pengumuman penting!',
    pesan:
      'Kamu tidak wajib selalu ceria. Tapi minum air putih dulu. Itu perintah dari website.',
  },
  {
    emoji: '🧠',
    judul: 'Saran dari sistem.',
    pesan:
      'Tarik napas. Buang napas. Abaikan notifikasi yang tidak penting. Jangan lupa, kamu bukan customer service semua orang.Tapi Designnya Selesaikan dulu yaa wkwkw',
  },
  {
    emoji: '🍟',
    judul: 'Solusi sementara.',
    pesan:
      'Belum ditemukan solusi untuk semua masalah. Namun, cemilan sejauh ini punya rekam jejak yang lumayan.',
  },
  {
    emoji: '🏆',
    judul: 'Pencapaian hari ini.',
    pesan:
      'Berhasil melewati hari ini juga termasuk prestasi. Tidak perlu piagam, yang penting kamu sudah berusaha.',
  },
  {
    emoji: '🛠️',
    judul: 'Mood sedang maintenance.',
    pesan:
      'Mohon jangan dimatikan. Sistem sedang memperbaiki beberapa kendala. Silakan istirahat dan coba lagi nanti.',
  },
  {
    emoji: '🙂',
    judul: 'Sedikit pengingat.',
    pesan:
      'Nggak harus langsung baik-baik saja. Pelan-pelan juga tidak apa-apa. Jangan terlalu keras sama diri sendiri.',
  },
  {
    emoji: '🍪',
    judul: 'Eh, ngomong-ngomong...',
    pesan:
      'Katanya kalau lagi kurang baik harinya, cemilan bisa sedikit membantu. Mau aku bawain atau beliin sesuatu? Kamu boleh pilih apa yang kamu suka. Nggak perlu sungkan, ya tapi jangan minta dunia & isinya wkwkw. Aku cuma mau nawarin. Kalau belum mau juga nggak apa-apa.',
  },
  {
    emoji: '🤍',
    judul: 'Ada satu hal yang mau aku sampaikan...',
    pesan:
      'Aku juga mau minta maaf, ya. Kalau selama ini ada ucapan atau sikapku yang bikin kamu kesal, kurang nyaman, atau malah membuat harimu terasa lebih berat, sungguh aku minta maaf. Aku nggak pernah bermaksud begitu. Mungkin ada caraku yang kurang tepat dalam bersikap atau mendekat. Aku nggak berharap kamu harus membalas apa pun setelah membaca ini. Aku cuma ingin kamu tahu kalau aku menghargai kenyamananmu, dan aku akan berusaha lebih memahami batasanmu. Semoga setelah ini harimu sedikit lebih baik. 🤍',
  },
];

let nomorPesan = 0;
let namaPengunjung = 'kamu';

function tampilkanPesan() {
  const data = daftarPesan[nomorPesan];

  emoji.textContent = data.emoji;
  judul.textContent = data.judul;

  pesan.textContent = 'Hai, ' + namaPengunjung + '! ' + data.pesan;

  hasil.classList.remove('hidden');

  nomorPesan = (nomorPesan + 1) % daftarPesan.length;
}

tombol.addEventListener('click', function () {
  namaPengunjung = inputNama.value.trim() || 'kamu';

  tampilkanPesan();

  tombol.classList.add('hidden');
  ulang.textContent = 'Ganti pesan ↻';
});

ulang.addEventListener('click', function () {
  tampilkanPesan();
});

inputNama.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && !hasil.classList.contains('hidden')) {
    tampilkanPesan();
  } else if (event.key === 'Enter') {
    tombol.click();
  }
});

console.log('Website ucapan berhasil dijalankan!');
