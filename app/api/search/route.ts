import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("q")?.toLowerCase() || ""

  // Data peraturan perusahaan untuk pencarian
  const regulations = [
    // KEBIJAKAN KHUSUS PERUSAHAAN
    {
      id: "point-1",
      title: "1. Larangan Hubungan Romantis di Lingkungan Kerja",
      content:
        "Cretivox melarang keras hubungan romantis (pacaran) antara",
      bab: "KEBIJAKAN KHUSUS PERUSAHAAN",
      url: "/peraturan/KKP#point-1",
    },
    {
      id: "point-2",
      title: "2. Budaya 3S: Senyum, Sapa, Salam",
      content:
        "Seluruh karyawan dan intern diwajibkan menerapkan budaya 3S dalam interaksi sehari-hari",
      bab: "KEBIJAKAN KHUSUS PERUSAHAAN",
      url: "/peraturan/KKP#point-2",
    },
    {
      id: "point-3",
      title: "3. Ketuk Pintu Sebelum Masuk",
      content:
        "Setiap karyawan dan intern wajib mengetuk pintu",
      bab: "KEBIJAKAN KHUSUS PERUSAHAAN",
      url: "/peraturan/KKP#point-3",
    },
    {
      id: "point-4",
      title: "4. Penekanan Nilai Kerja",
      content:
        "Semua kebijakan di atas adalah cerminan dari nilai dasar Cretivox: Tanggung Jawab, Etika, dan Kolaborasi.",
      bab: "KEBIJAKAN KHUSUS PERUSAHAAN",
      url: "/peraturan/KKP#point-4",
    },

    // BAB I
    {
      id: "pasal-1",
      title: "PASAL 1: Ketentuan Umum",
      content:
        "Peraturan Perusahaan adalah peraturan yang dibuat secara tertulis oleh pengusaha yang memuat syarat-syarat kerja dan tata tertib perusahaan.",
      bab: "BAB I: KETENTUAN UMUM",
      url: "/peraturan/bab-1#pasal-1",
    },
    {
      id: "pasal-2",
      title: "PASAL 2: Maksud Dan Tujuan",
      content:
        "Peraturan Perusahaan ini bertujuan untuk menciptakan hubungan kerja yang harmonis, dinamis, dan berkeadilan.",
      bab: "BAB I: KETENTUAN UMUM",
      url: "/peraturan/bab-1#pasal-2",
    },

    // BAB II
    {
      id: "pasal-3",
      title: "PASAL 3: Penerimaan Karyawan",
      content: "Penerimaan karyawan dilakukan berdasarkan prinsip kesetaraan dan non-diskriminasi.",
      bab: "BAB II: PENERIMAAN KARYAWAN",
      url: "/peraturan/bab-2#pasal-3",
    },
    {
      id: "pasal-4",
      title: "PASAL 4: Masa Percobaan",
      content: "Masa percobaan ditetapkan untuk paling lama 3 (tiga) bulan.",
      bab: "BAB II: PENERIMAAN KARYAWAN",
      url: "/peraturan/bab-2#pasal-4",
    },
    {
      id: "pasal-5",
      title: "PASAL 5: Karyawan Tidak Tetap",
      content: " Perusahaan dapat menerima karyawan Tidak Tetap dengan Perjanjian Kerja Waktu Tertentu (PKWT) ",
      bab: "BAB II: PENERIMAAN KARYAWAN",
      url: "/peraturan/bab-2#pasal-5",
    },
    {
      id: "pasal-6",
      title: "PASAL 6: Pengangkatan, dan Pemindahan Karyawan",
      content: " Karyawan yang menjalani masa percobaan dengan hasil baik akan diangkat menjadi karyawan tetap",
      bab: "BAB II: PENERIMAAN KARYAWAN",
      url: "/peraturan/bab-2#pasal-6",
    },
    {
      id: "pasal-7",
      title: "PASAL 7: Evaluasi dan Penilaian Kinerja ",
      content: "Evaluasi Kinerja Karyawan yaitu evaluasi terhadap kinerja karyawan dalam jangka waktu tertentu dan dilaksanakan secara berkala setiap 1 (satu) tahun sekali.",
      bab: "BAB II: PENERIMAAN KARYAWAN",
      url: "/peraturan/bab-2#pasal-7",
    },
    {
      id: "pasal-8",
      title: "PASAL 8: Promosi",
      content: "Perusahaan akan memberikan kesempatan kepada karyawan yang memenuhi persyaratan",
      bab: "BAB II: PENERIMAAN KARYAWAN",
      url: "/peraturan/bab-2#pasal-8",
    },
    {
      id: "pasal-9",
      title: "PASAL 9: Demosi",
      content: "Perusahaan dapat mengambil tindakan berupa pencabutan atau penurunan pangkat dan/atau jabatan dari karyawan yang melakukan perbuatan yang melanggar peraturan tata tertib kerja",
      bab: "BAB II: PENERIMAAN KARYAWAN",
      url: "/peraturan/bab-2#pasal-9",
    },
    
    // BAB III
    {
      id: "pasal-10",
      title: "PASAL 10: Hari dan Jam Kerja",
      content: "Hari Kerja di Perusahaan adalah 5 (Lima) hari dalam seminggu.",
      bab: "BAB III: PERJANJIAN KERJA",
      url: "/peraturan/bab-3#pasal-10",
    },

    // BAB IV
    {
      id: "pasal-11",
      title: "PASAL 11: Hari Libur",
      content: "Hari Istirahat Mingguan adalah hari Sabtu dan hari Minggu dalam 1 (Satu) minggu.",
      bab: "BAB IV: HARI LIBUR, CUTI, DAN MENINGGALKAN PEKERJAAN",
      url: "/peraturan/bab-4#pasal-11",
    },
    {
      id: "pasal-12",
      title: "PASAL 12: Cuti Tahunan",
      content: "Karyawan berhak atas cuti tahunan selama 12 hari kerja setelah bekerja selama 12 bulan berturut-turut.",
      bab: "BAB IV: HARI LIBUR, CUTI, DAN MENINGGALKAN PEKERJAAN",
      url: "/peraturan/bab-4#pasal-12",
    },
    {
      id: "pasal-13",
      title: "PASAL 13: Cuti Melahirkan/Keguguran",
      content: "Karyawan wanita yang akan melahirkan diberikan Cuti Melahirkan",
      bab: "BAB IV: HARI LIBUR, CUTI, DAN MENINGGALKAN PEKERJAAN",
      url: "/peraturan/bab-4#pasal-13",
    },
    {
      id: "pasal-14",
      title: "PASAL 14: Cuti Sakit",
      content: "Karyawan yang menderita sakit selama lebih dari sama dengan 1 (satu) hari, tapi kurang dari 12 (dua belas) hari, dan dapat membuktikan sakitnya berdasarkan Surat Keterangan Dokter dan/atau Surat Keterangan dari Rumah Sakit, dapat diberikan cuti/istirahat;",
      bab: "BAB IV: HARI LIBUR, CUTI, DAN MENINGGALKAN PEKERJAAN",
      url: "/peraturan/bab-4#pasal-14",
    },
    {
      id: "pasal-15",
      title: "PASAL 15: Ijin Meninggalkan Pekerjaan dengan Gaji Penuh",
      content: "Karyawan diberikan ijin meninggalkan pekerjaan untuk keperluan-keperluan tersebut",
      bab: "BAB IV: HARI LIBUR, CUTI, DAN MENINGGALKAN PEKERJAAN",
      url: "/peraturan/bab-4#pasal-15",
    },
    {
      id: "pasal-16",
      title: "PASAL 16: Ijin Meninggalkan Pekerjaan Pada Waktu Jam Kerja",
      content: "Atasan dapat memberikan izin kepada Karyawan yang terlambat datang atau meninggalkan pekerjaan pada waktu jam kerja",
      bab: "HARI LIBUR, CUTI, DAN MENINGGALKAN PEKERJAAN",
      url: "/peraturan/bab-4#pasal-16",
    },
    {
      id: "pasal-17",
      title: "PASAL 17: Meninggalkan Pekerjaan Tanpa Ijin/Mangkir",
      content: "Karyawan yang tidak masuk kerja tanpa adanya pemberitahuan tertulis atau tanpa ijin Perusahaan dianggap mangkir.",
      bab: "HARI LIBUR, CUTI, DAN MENINGGALKAN PEKERJAAN",
      url: "/peraturan/bab-4#pasal-17",
    },
    {
      id: "pasal-18",
      title: "PASAL 18: Cuti Lainnya",
      content: "Perusahaan dapat menentukan cuti lainnya di kemudian hari yang belum diatur pada Peraturan Perusahaan ini",
      bab: "HARI LIBUR, CUTI, DAN MENINGGALKAN PEKERJAAN",
      url: "/peraturan/bab-4#pasal-18",
    },

    // BAB V
    {
      id: "pasal-19",
      title: "PASAL 19: SisteM Pengupahan",
      content: "Kebijakan dan pengaturan upah Karyawan merupakan hak dan wewenang penuh Pimpinan Perusahaan.",
      bab: "BAB V: PENGUPAHAN",
      url: "/peraturan/bab-5#pasal-19",
    },
    {
      id: "pasal-20",
      title: "PASAL 20: Lembur",
      content: "Lembur adalah pekerjaan yang dilakukan oleh Karyawan melebihi jam kerja biasa dan dilakukan untuk kepentingan Perusahaan.",
      bab: "BAB V: PENGUPAHAN",
      url: "/peraturan/bab-5#pasal-20",
    },
    {
      id: "pasal-21",
      title: "PASAL 21: Upah Selama Sakit Berkepanjangan",
      content: "Yang dimaksud dengan gaji selama sakit berkepanjangan adalah gaji yang dibayarkan kepada Karyawan yang mengalami sakit yang lama dan terus menerus yang dibuktikan dengan surat keterangan dokter.",
      bab: "BAB V: PENGUPAHAN",
      url: "/peraturan/bab-5#pasal-21",
    },
    {
      id: "pasal-22",
      title: "PASAL 22: Tunjangan Hari Raya Keagamaan",
      content: "Perusahaan memberikan Tunjangan Hari Raya Keagamaan kepada Karyawan.",
      bab: "BAB V: PENGUPAHAN",
      url: "/peraturan/bab-5#pasal-22",
    },
    {
      id: "pasal-23",
      title: "PASAL 23: Tunjangan Transportasi",
      content: "Perusahaan memberikan Tunjangan Transport kepada setiap karyawan",
      bab: "BAB V: PENGUPAHAN",
      url: "/peraturan/bab-5#pasal-23",
    },
    {
      id: "pasal-24",
      title: "PASAL 24: Bantuan Bagi Karyawan Yang Ditahan Pihak Berwajib",
      content: "Untuk karyawan yang ditahan oleh Pihak Berwajib bukan karena pengaduan Perusahaan dan bukan berhubungan dengan pekerjaannya, tidak mendapat upah",
      bab: "BAB V: PENGUPAHAN",
      url: "/peraturan/bab-5#pasal-24",
    },

    // BAB VI
    {
      id: "pasal-25",
      title: "PASAL 25: Umum",
      content: "Perusahaan memberikan bantuan biaya perawatan di rumah sakit kepada Karyawan beserta keluarganya.",
      bab: "BAB VI: PERAWATAN DI RUMAH SAKIT",
      url: "/peraturan/bab-6#pasal-25",
    },
    {
      id: "pasal-26",
      title: "PASAL 26: Perawatan di Rumah Sakit PEMERINTAH",
      content: "Perusahaan memberikan bantuan biaya perawatan di rumah sakit berdasarkan keterangan Dokter.",
      bab: "BAB VI: PERAWATAN DI RUMAH SAKIT",
      url: "/peraturan/bab-6#pasal-26",
    },
    {
      id: "pasal-27",
      title: "PASAL 27: Tunjangan Melahirkan",
      content: "Tunjangan melahirkan diberikan oleh Perusahaan kepada Karyawan yang sudah lolos masa percobaan atau sudah menjadi karyawan tetap.",
      bab: "BAB VI: PERAWATAN DI RUMAH SAKIT",
      url: "/peraturan/bab-6#pasal-27",
    },

    // BAB VII
    {
      id: "pasal-28",
      title: "PASAL 28: Peralatan Kerja",
      content: "Perusahaan menyediakan peralatan kerja yang sesuai untuk digunakan Karyawan dalam melaksanakan tugasnya",
      bab: "BAB VII: FASILITAS KERJA",
      url: "/peraturan/bab-7#pasal-28",
    },
    {
      id: "pasal-29",
      title: "PASAL 29: Pakaian Kerja",
      content: "Pakaian kerja untuk karyawan akan diatur tersendiri didalam Perangkat Peraturan",
      bab: "BAB VII: FASILITAS KERJA",
      url: "/peraturan/bab-7#pasal-29",
    },
    {
      id: "pasal-30",
      title: "PASAL 30: Perjalanan Dinas Dalam Dan Luar Negeri",
      content: "Perjalanan Dinas adalah setiap perjalanan dalam rangka kepentingan pekerjaan dan ditugaskan oleh Pimpinan Perusahaan berdasarkan Surat Perintah Perjalanan Dinas (SPPD)..",
      bab: "BAB VII: FASILITAS KERJA",
      url: "/peraturan/bab-7#pasal-30",
    },

    // BAB VIII
    {
      id: "pasal-31",
      title: "PASAL 31: BPJS Ketenagakerjaan",
      content: "Sesuai Ketentuan peraturan perundang-undangan yang berlaku, Perusahaan mengikutsertakan Karyawan dalam program BPJS (Badan Penyelenggara Jaminan Sosial).",
      bab: "BAB X: PERATURAN KERJA KARYAWAN",
      url: "/peraturan/bab-8#pasal-31",
    },
    {
      id: "pasal-32",
      title: "PASAL 32: Bantuan Kematian",
      content: "Tunjangan Kematian diberikan oleh Perusahaan kepada karyawan tetap dan karyawan kontrak yang sudah bekerja selama 6 (enam) bulan bekerja.",
      bab: "BAB X: PERATURAN KERJA KARYAWAN",
      url: "/peraturan/bab-8#pasal-32",
    },

    // BAB IX
    {
      id: "pasal-33",
      title: "PASAL 33: Pelatihan dan Pendidikan Karyawan",
      content: "Untuk meningkatkan dan menambah kemampuan karyawan serta untuk memenuhi kebutuhan perusahaan akan tenaga-tenaga terampil.",
      bab: "BAB IX: PENINGKATAN KETERAMPILAN KARYAWAN",
      url: "/peraturan/bab-9#pasal-33",
    },

    // BAB X
    {
      id: "pasal-34",
      title: "PASAL 34: Tata Tertib",
      content: "Setiap Karyawan wajib memeriksa peralatan kerja masing-masing sebelum mulai bekerja dan saat meninggalkan pekerjaan",
      bab: "BAB X: PERATURAN KERJA KARYAWAN",
      url: "/peraturan/bab-10#pasal-34",
    },
    {
      id: "pasal-35",
      title: "PASAL 35: Kehadiran",
      content: "Setiap karyawan wajib hadir pada waktu kerja dan mendata kehadirannya dengan sistem pencatat waktu (Time Recorder/Finger Scan) yang telah disediakan, pada saat masuk kerja dan pulang kerja. (absensi)",
      bab: "BAB X: PERATURAN KERJA KARYAWAN",
      url: "/peraturan/bab-10#pasal-35",
    },
    {
      id: "pasal-36",
      title: "PASAL 36: Kewajiban dan Tanggung Jawab Karyawan",
      content: "Setiap Karyawan wajib mengutamakan kepentingan Perusahaan dengan sebaik-baiknya dan berupaya semaksimal mungkin untuk memenuhi tugas dan kewajiban yang diberikan kepadanya oleh Perusahaan dengan baik dan penuh rasa tanggung jawab termasuk pada saat melakukan Perjalanan Bisnis jika diperlukan.",
      bab: "BAB X: PERATURAN KERJA KARYAWAN",
      url: "/peraturan/bab-10#pasal-36",
    },
    {
      id: "pasal-37",
      title: "PASAL 37: Larangan Bagi Karyawan",
      content: "Setiap Karyawan dilarang merokok di ruang kerja, baik di Perusahaan maupun di Kantor Pelanggan.",
      bab: "BAB X: PERATURAN KERJA KARYAWAN",
      url: "/peraturan/bab-10#pasal-37",
    },

    // BAB XI
    {
      id: "pasal-38",
      title: "PASAL 38: Ketentuan Umum",
      content:
        "Perusahaan berupaya menciptakan suasana kerja yang kondusif, harmonis dengan tetap menjaga kedisiplinan dan ketertiban serta mengembangkan sikap saling menghormati dengan penuh pemahaman akan hak dan kewajiban baik Perusahaan maupun Karyawan.",
      bab: "BAB XI: PELANGGARAN DAN SANKSI",
      url: "/peraturan/bab-11#pasal-38",
    },
    {
      id: "pasal-39",
      title: "PASAL 39: Tindakan Disiplin",
      content:
        "Setiap pelanggaran dan/atau perbuatan indisipliner yang dilakukan karyawan atas tata tertib kerja maupun ketentuan/peraturan Perusahaan lainnya akan diberikan sanksi sesuai dengan berat/ ringannya perbuatan yang dilakukannya.",
      bab: "BAB XI: PELANGGARAN DAN SANKSI",
      url: "/peraturan/bab-11#pasal-39",
    },
    {
      id: "pasal-40",
      title: "PASAL 40: Pelanggaran Tata Tertib Kerja",
      content:
        "Dalam mengadakan penilaian atas pelanggaran tata tertib, diambil pedoman dasar atas perbuatan-perbuatan yang dapat mengakibatkan diberikannya teguran lisan atau Surat Peringatan Pertama (SP I) sampai dengan Surat Peringatan Ketiga (SP III).",
      bab: "BAB XI: PELANGGARAN DAN SANKSI",
      url: "/peraturan/bab-11#pasal-40",
    },

    // BAB XII
    {
      id: "pasal-41",
      title: "PASAL 41: Ketentuan Umum",
      content:
        "Perusahaan wajib berusaha agar tidak terjadi pemutusan hubungan kerja. Putusnya hubungan kerja dapat terjadi karena berbagai sebab.",
      bab: "BAB XII: PEMUTUSAN HUBUNGAN KERJA (PHK)",
      url: "/peraturan/bab-12#pasal-41",
    },
    {
      id: "pasal-42",
      title: "PASAL 42: Penghentian Selama Periode Percobaan",
      content:
        "Selama masa percobaan, baik perusahaan maupun karyawan dapat memutuskan hubungan kerja sewaktu-waktu tanpa kewajiban menjelaskan alasannya.",
      bab: "BAB XII: PEMUTUSAN HUBUNGAN KERJA (PHK)",
      url: "/peraturan/bab-12#pasal-42",
    },
    {
      id: "pasal-43",
      title: "PASAL 43: Berakhirnya Perjanjian Kerja Waktu Tertentu",
      content:
        "Hubungan kerja waktu tertentu berakhir demi hukum pada saat berakhirnya masa kontrak atau selesainya pekerjaan yang telah ditentukan.",
      bab: "BAB XII: PEMUTUSAN HUBUNGAN KERJA (PHK)",
      url: "/peraturan/bab-12#pasal-43",
    },
    {
      id: "pasal-44",
      title: "PASAL 44: Pengunduran Diri",
      content:
        "Karyawan yang ingin memutuskan hubungan kerja dengan Perusahaan, wajib mengajukan permintaan berhenti secara tertulis 45 hari sebelum hari terakhir bekerja.",
      bab: "BAB XII: PEMUTUSAN HUBUNGAN KERJA (PHK)",
      url: "/peraturan/bab-12#pasal-44",
    },
    {
      id: "pasal-45",
      title: "PASAL 45: Karyawan Mencapai Usia Pensiun",
      content:
        "Seorang Karyawan yang telah mencapai usia genap 57 tahun, akan diputuskan hubungan kerjanya dengan hormat dari Perusahaan.",
      bab: "BAB XII: PEMUTUSAN HUBUNGAN KERJA (PHK)",
      url: "/peraturan/bab-12#pasal-45",
    },
    {
      id: "pasal-46",
      title: "PASAL 46: Karyawan Melanggar Tata tertib",
      content:
        "Dalam hal pemutusan hubungan kerja karena pelanggaran peraturan tata tertib, akan ada perubahan untuk perhitungan pemberian pesangon.",
      bab: "BAB XII: PEMUTUSAN HUBUNGAN KERJA (PHK)",
      url: "/peraturan/bab-12#pasal-46",
    },
    {
      id: "pasal-47",
      title: "PASAL 47: Pemutusan Hubungan Kerja Karena Alasan Mendesak",
      content:
        "Pelanggaran-pelanggaran yang dapat mengakibatkan Pemutusan Hubungan Kerja seketika meliputi penipuan, pencurian, penggelapan, dan pelanggaran berat lainnya.",
      bab: "BAB XII: PEMUTUSAN HUBUNGAN KERJA (PHK)",
      url: "/peraturan/bab-12#pasal-47",
    },
    {
      id: "pasal-48",
      title: "PASAL 48: Tidak Dapat Mencapai Standar Prestasi Kerja",
      content:
        "Karyawan yang tidak mampu mencapai standar prestasi kerja yang ditetapkan, akan diberikan surat peringatan dan pembinaan.",
      bab: "BAB XII: PEMUTUSAN HUBUNGAN KERJA (PHK)",
      url: "/peraturan/bab-12#pasal-48",
    },
    {
      id: "pasal-49",
      title: "PASAL 49: Perusahaan Menyalahi Aturan",
      content:
        "Karyawan dapat mengajukan permohonan pemutusan hubungan kerja dalam hal perusahaan melakukan pelanggaran tertentu.",
      bab: "BAB XII: PEMUTUSAN HUBUNGAN KERJA (PHK)",
      url: "/peraturan/bab-12#pasal-49",
    },
    {
      id: "pasal-50",
      title: "PASAL 50: Bipartit",
      content:
        "Bipartit adalah perundingan yang dilakukan dengan karyawan dan perusahaan dalam upaya menyelesaikan suatu masalah industrial dalam satu perusahaan.",
      bab: "BAB XII: PEMUTUSAN HUBUNGAN KERJA (PHK)",
      url: "/peraturan/bab-12#pasal-50",
    },
    {
      id: "pasal-51",
      title: "PASAL 51: Uang Pesangon, Uang Penghargaan Masa Kerja Uang Penggantian Hak",
      content:
        "Uang pesangon, uang penghargaan masa kerja dan penggantian hak dibayarkan satu kali dan sekaligus yang dilakukan pada saat pemutusan hubungan kerja berlaku.",
      bab: "BAB XII: PEMUTUSAN HUBUNGAN KERJA (PHK)",
      url: "/peraturan/bab-12#pasal-51",
    },
    {
      id: "pasal-52",
      title: "PASAL 52: Uang Pisah",
      content:
        "Uang pisah akan diberikan kepada karyawan yang mengundurkan diri secara baik dan telah bekerja dengan prestasi sangat baik dengan masa kerja lebih dari 3 tahun dan untuk Karyawan yang mangkir dengan ketentuan yang telah ditetapkan.",
      bab: "BAB XII: PEMUTUSAN HUBUNGAN KERJA (PHK)",
      url: "/peraturan/bab-12#pasal-52",
    },

    // BAB XIII
    {
      id: "pasal-53",
      title: "PASAL 53: Tata Cara Penyelesaian Keluh Kesah",
      content:
        "Jika seorang Karyawan menganggap bahwa perlakuan terhadapnya bertentangan dengan Peraturan Perusahaan, dapat menyampaikan keluhan kepada atasannya secara langsung untuk diselesaikan secara musyawarah.",
      bab: "BAB XIII: PENYELESAIAN KELUH KESAH",
      url: "/peraturan/bab-13#pasal-53",
    },

    // BAB XIV
    {
      id: "pasal-54",
      title: "PASAL 54: Interpretasi Dan Amandemen",
      content:
        "Perusahaan berhak untuk menafsirkan semua ketentuan-ketentuan yang termuat di dalam pasal-pasal maupun ayat-ayat dari Peraturan Perusahaan ini sesuai dengan makna, arti, dan maksud tujuannya dalam pembinaan Hubungan Industrial.",
      bab: "BAB XIV: PENUTUP",
      url: "/peraturan/bab-14#pasal-54",
    },
    {
      id: "pasal-55",
      title: "PASAL 55: Penyelesaian Sengketa",
      content:
        "Setiap perbedaan yang dapat menimbulkan perselisihan antara Perusahaan dan RA Karyawan sehubungan dengan pelaksanaan Peraturan Perusahaan ini, pada tahap awal harus segera dibicarakan dan diselesaikan di lingkungan Perusahaan melalui musyawarah untuk mufakat.",
      bab: "BAB XIV: PENUTUP",
      url: "/peraturan/bab-14#pasal-55",
    },
    {
      id: "pasal-56",
      title: "PASAL 56: Penutup",
      content:
        "Masa berlaku Peraturan Perusahaan ini adalah 2 (dua) tahun dan mulai berlaku setelah mendapat pengesahan dari Dinas Tenaga Kerja, Transmigrasi dan Energi Provinsi DKI Jakarta.",
      bab: "BAB XIV: PENUTUP",
      url: "/peraturan/bab-14#pasal-56",
    },
  ]

  // Filter berdasarkan query pencarian
  const filteredRegulations = regulations.filter(
    (regulation) =>
      regulation.title.toLowerCase().includes(query) ||
      regulation.content.toLowerCase().includes(query) ||
      regulation.bab.toLowerCase().includes(query),
  )

  return NextResponse.json({
    results: filteredRegulations,
    total: filteredRegulations.length,
  })
}
