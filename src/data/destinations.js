export const DESTINATION_FILTERS = ['Semua', 'Bahari', 'Budaya', 'Alam']

export const DESTINATIONS = [
  {
    id: 'anyer',
    name: 'Pantai Anyer',
    category: 'Bahari',
    location: 'Kabupaten Serang',
    span: 'sm:col-span-2 lg:col-span-2 lg:row-span-2',
    image: '/images/anyer.jpg',
    tagline: 'Garis pantai memanjang di tepi Selat Sunda',
    description:
      'Berjarak sekitar 1,5 jam dari Jakarta, Pantai Anyer membentang di pesisir barat Banten dengan pasir putih, air tenang, dan pemandangan Gunung Krakatau di kejauhan. Pesona matahari terbenamnya menjadi alasan utama wisatawan datang berkali-kali.',
    highlights: ['Sunset Selat Sunda', 'Volcano view dari bibir pantai', 'Resor & kafe tepi pasir'],
    bestTime: 'Mei – Oktober',
    duration: 'Setengah hari',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pantai+Anyer+Banten',
  },
  {
    id: 'baduy',
    name: 'Baduy Luar & Dalam',
    category: 'Budaya',
    location: 'Kabupaten Lebak',
    span: 'sm:col-span-2 lg:col-span-2',
    image: '/images/baduy.jpg',
    tagline: 'Desa adat Kanekes yang hidup tanpa listrik',
    description:
      'Masyarakat Kanekes menjaga pikukuh dengan rumah bambu, hutan larangan, dan ladang sawah berundak. Perjalanan menuju Baduy Dalam ditempuh dengan berjalan kaki menyusuri hutan dan jembatan gantung dari desa pintu masuk.',
    highlights: ['Trekking desa adat', 'Tenun tangan warga', 'Hutan larangan & jembatan gantung'],
    bestTime: 'April – Oktober',
    duration: '2 hari 1 malam',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Desa+Kanekes+Baduy+Lebak',
  },
  {
    id: 'ujung-kulon',
    name: 'Taman Nasional Ujung Kulon',
    category: 'Alam',
    location: 'Kabupaten Pandeglang',
    span: 'lg:col-span-1',
    image: '/images/ujung-kulon.jpg',
    tagline: 'Rumah terakhir badak jawa dunia',
    description:
      'Semenanjung vulkanik di ujung barat Jawa dengan hutan tropis lebat, satwa liar, dan pulau-pulau kecil di sekitarnya. Ditetapkan sebagai Situs Warisan Dunia UNESCO pada tahun 1991.',
    highlights: ['Trekking badak jawa', 'Pulau Peucang & Panaitan', 'Snorkeling terumbu karang'],
    bestTime: 'Juni – September',
    duration: '3 hari 2 malam',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Taman+Nasional+Ujung+Kulon',
  },
  {
    id: 'karang-bolong',
    name: 'Karang Bolong',
    category: 'Bahari',
    location: 'Kabupaten Serang',
    span: 'lg:col-span-1',
    image: '/images/karang-bolong.jpg',
    tagline: 'Batu karang berlubang di bibir ombak',
    description:
      'Formasi batu karang raksasa berlubang yang dihantam ombak Selat Sunda — ikon pesisir Banten yang paling fotogenik. Buih putih dan tebing karstnya menjadi latar favorit fotografer.',
    highlights: ['Panorama tebing karst', 'Spot foto matahari terbenam', 'Tebing & pantai berbatu'],
    bestTime: 'Mei – September',
    duration: '2 jam',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Karang+Bolong+Banten',
  },
  {
    id: 'tanjung-lesung',
    name: 'Tanjung Lesung',
    category: 'Bahari',
    location: 'Kabupaten Pandeglang',
    span: 'sm:col-span-2 lg:col-span-2',
    image: '/images/tanjung-lesung.jpg',
    tagline: 'Kawasan wisata bahari kelas dunia',
    description:
      'Kawasan Ekonomi Khusus pariwisata di ujung barat Banten dengan teluk teduh, resort, dan gugusan pulau kecil. Air jernihnya pas untuk berenang, kano, hingga snorkeling santai bersama keluarga.',
    highlights: ['Resort tepi teluk', 'Gugusan pulau kecil', 'Kano & snorkeling'],
    bestTime: 'April – November',
    duration: '2 hari 1 malam',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Tanjung+Lesung+Banten',
  },
  {
    id: 'banten-lama',
    name: 'Banten Lama',
    category: 'Budaya',
    location: 'Kota Serang',
    span: 'sm:col-span-2 lg:col-span-2',
    image: '/images/banten-lama.jpg',
    tagline: 'Jejak keemasan Kesultanan Banten',
    description:
      'Bekas pusat Kesultanan Banten: Masjid Agung Banten dengan menara khasnya, menara mercusuar peninggalan kolonial, serta reruntuhan Keraton Surosowan yang menyimpan kisah bandar niaga berusia ratusan tahun.',
    highlights: ['Masjid Agung Banten', 'Mercusuar & Surosowan', 'Wisata sejarah Islam'],
    bestTime: 'Sepanjang tahun',
    duration: 'Setengah hari',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Banten+Lama+Serang',
  },
]

export const heroImage = '/images/tanjung-lesung.jpg'
export const aboutImages = {
  tree: '/images/ujung-kulon.jpg',
  hills: '/images/baduy.jpg',
}
export const heroFloatImage = '/images/anyer.jpg'
export const sectionTexture = '/images/banten-lama.jpg'
