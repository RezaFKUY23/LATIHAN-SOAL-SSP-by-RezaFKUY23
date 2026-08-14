
(function resetPreviousUserData(){
  const RESET_MARKER="ssp-medical-v15-reset-done";
  try{
    if(localStorage.getItem(RESET_MARKER)!=="1"){
      const keys=[];
      for(let i=0;i<localStorage.length;i++) keys.push(localStorage.key(i));
      keys.forEach(k=>{
        if(k && (/ssp|quiz|bookmark|progress|history|wrong|session/i.test(k))) localStorage.removeItem(k);
      });
      localStorage.setItem(RESET_MARKER,"1");
    }
  }catch(e){}
})();
const dataKuis = [
  {
    "soal": "1. Seorang pria 27th datang ke rs keluhan sulit tidur 2 bulan yg lalu. Pulang kerja ia selalu nongkrong dicafe. Setelah kembali untuk tidur diperlukan 2 jam lebih untuk beristirahat. Dokter menyarankan untuk melakukan hygine tidur.",
    "opsi": [
      "A. menaruh jam dinding dan jam kamar diluar kamar tidur",
      "B. Mandi air dingin sebelum tidur",
      "C. Makan makanan sebelum tidur",
      "D. Berbaring ditempat tidur sejak petang",
      "E. Menonton tv didalam kamar"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Menyingkirkan jam mencegah perilaku clock-watching yang memicu kecemasan. Opsi lain melanggar prinsip sleep hygiene.",
    "pembahasanPilihan": [
      "Sleep hygiene: menghilangkan jam dari kamar mengurangi clock-watching dan kecemasan saat sulit tidur.",
      "Mandi air dingin sebelum tidur bukan intervensi utama; paparan dingin dapat meningkatkan kewaspadaan pada sebagian orang.",
      "Makan menjelang tidur dapat menimbulkan rasa penuh/refluks dan bukan strategi sleep hygiene utama.",
      "Berbaring sejak petang memperpanjang waktu terjaga di tempat tidur dan memperkuat asosiasi tempat tidur dengan sulit tidur.",
      "TV di kamar memberi cahaya dan stimulasi; stimulus control justru menganjurkan kamar digunakan untuk tidur, bukan menonton TV."
    ]
  },
  {
    "soal": "2. Intinya fobia naik pesawat?",
    "opsi": [
      "A. Aviophobia",
      "B. Agrophobia",
      "C. Akrofobia",
      "D. Klaustrofobia",
      "E. Zoofobia"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Aviophobia (aerophobia) adalah ketakutan spesifik terhadap penerbangan.",
    "pembahasanPilihan": [
      "Aviophobia/aerophobia adalah fobia spesifik terhadap penerbangan atau naik pesawat.",
      "Agorafobia adalah takut situasi yang sulit ditinggalkan/ditolong, misalnya kerumunan atau transportasi umum, bukan khusus pesawat.",
      "Akrofobia adalah takut ketinggian; contoh klinisnya takut berada di gedung tinggi atau jembatan.",
      "Klaustrofobia adalah takut ruang sempit/tertutup seperti lift atau ruang MRI.",
      "Zoofobia adalah ketakutan terhadap hewan tertentu, bukan terhadap penerbangan."
    ]
  },
  {
    "soal": "3. Neurotransmiter perasaan baik adalah",
    "opsi": [
      "A. GABA",
      "B. Serotonin",
      "C. Oxitosin",
      "D. Norephinefrin",
      "E. Ephinerphrin"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Serotonin dikenal sebagai neurotransmiter pengatur mood dan perasaan baik.",
    "pembahasanPilihan": [
      "GABA adalah neurotransmiter inhibitorik utama SSP; peningkatan GABA cenderung menekan eksitabilitas neuron.",
      "Serotonin berperan dalam regulasi mood, tidur, nafsu makan, dan kecemasan; karena itu sering dikaitkan dengan mood positif.",
      "Oksitosin terutama terkait ikatan sosial, kontraksi uterus, dan ejeksi ASI; bukan jawaban utama untuk neurotransmiter mood pada soal ini.",
      "Norepinefrin berperan pada arousal, perhatian, dan respons stres; gangguannya dapat terkait depresi atau kecemasan.",
      "Epinefrin terutama merupakan hormon/adrenalin dari medula adrenal; bukan neurotransmiter utama yang dimaksud dalam konteks mood ini."
    ]
  },
  {
    "soal": "4. Laki2 umur 45 tahun terbentur di bagian kepala, ia tidak mengingat apapun saat kejadian tetapi mengingat semuanya sebelum kejadian. bagian otak apa yang mengalami gangguan?",
    "opsi": [
      "A. Corteks cerebri",
      "B. Amigdala",
      "C. Hippokampus",
      "D. Hipotalamus",
      "E. Thalamus"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Hipokampus bertugas mengkonsolidasi memori baru. Kerusakan memicu amnesia anterograd.",
    "pembahasanPilihan": [
      "Cortex cerebri berperan luas pada fungsi kognitif, tetapi bukan struktur utama konsolidasi memori baru.",
      "Amigdala terutama memproses emosi dan memori emosional, bukan pusat utama pembentukan memori deklaratif baru.",
      "Hipokampus penting untuk konsolidasi memori baru; lesi bilateral dapat menyebabkan amnesia anterograd.",
      "Hipotalamus mengatur homeostasis, endokrin, dan fungsi otonom; bukan pusat utama konsolidasi memori episodik.",
      "Thalamus adalah relay sensorik penting dan dapat berperan pada memori, tetapi bukan struktur utama yang ditanyakan."
    ]
  },
  {
    "soal": "5. Seorang wanita 20 THN mengalami malnutrisi. Pasien riwayat epilepsi dan menjalani fenitonin. Kadar albumin pasien 3.0. Jika farmakokinetik fenitoin mengikat kuat plasma protein, apa risiko tersebut?",
    "opsi": [
      "A. Bioavailabilitas fenotonin menurun",
      "B. Efektivitas fenotonin menurun",
      "C. Ekskresi fenotonin meningkat",
      "D. Toksisitas fenotonin meningkat",
      "E. Menghambat terapi malnutrisi"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Albumin rendah (malnutrisi) membuat fraksi obat bebas meningkat drastis, memicu toksisitas.",
    "pembahasanPilihan": [
      "Albumin rendah meningkatkan fraksi fenitoin bebas; bukan terutama menurunkan bioavailabilitas obat yang sudah diberikan.",
      "Efek farmakodinamik dapat tampak lebih kuat karena kadar bebas meningkat, sehingga pernyataan 'efektivitas menurun' tidak tepat.",
      "Albumin rendah tidak otomatis meningkatkan ekskresi fenitoin; masalah utamanya adalah perubahan ikatan protein.",
      "Fenitoin sangat terikat albumin; hipoalbuminemia meningkatkan fraksi bebas sehingga risiko nistagmus, ataksia, diplopia, dan toksisitas meningkat.",
      "Malnutrisi tidak diatasi dengan mengubah ikatan fenitoin; kondisi nutrisi harus ditangani terpisah."
    ]
  },
  {
    "soal": "6. Ulil albab dalam alquran",
    "opsi": [
      "A. Beriman",
      "B. Bertaqwa",
      "C. Berakal",
      "D. Soleh",
      "E. Fasik"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Ulil Albab merujuk pada orang-orang yang berakal atau memiliki pikiran jernih.",
    "pembahasanPilihan": [
      "Beriman berarti percaya kepada Allah dan ajaran-Nya; maknanya tidak sama persis dengan istilah Ulul Albab.",
      "Bertakwa berarti menjalankan perintah dan menjauhi larangan Allah; bukan arti literal Ulul Albab.",
      "Ulul Albab merujuk pada orang-orang yang menggunakan akal/pikiran yang jernih dan mampu mengambil pelajaran.",
      "Saleh berarti orang yang baik/taat; merupakan karakter, bukan terjemahan khusus Ulul Albab.",
      "Fasik berarti keluar dari ketaatan atau melakukan kefasikan; jelas bukan makna Ulul Albab."
    ]
  },
  {
    "soal": "7. Ada anak laki laki menunjukan kemaluannya dihadapan umum dan perempuan. Nah itu apa",
    "opsi": [
      "A. Frottoriesme",
      "B. Voyeurisme",
      "C. Ekshibisionisme",
      "D. Fetishme",
      "E. Pedofilia"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Gangguan mendapat kepuasan dengan memperlihatkan alat kelamin secara tiba-tiba adalah Ekshibisionisme.",
    "pembahasanPilihan": [
      "Frotteurisme adalah mencari rangsangan seksual dengan menggesekkan tubuh/alat kelamin kepada orang yang tidak memberi persetujuan.",
      "Voyeurisme adalah memperoleh rangsangan dengan mengintip orang lain yang sedang telanjang atau beraktivitas seksual secara diam-diam.",
      "Ekshibisionisme adalah mempertontonkan genital kepada orang yang tidak mengharapkannya; gambaran soal paling sesuai.",
      "Fetishisme berfokus pada benda mati atau bagian tubuh tertentu sebagai sumber rangsangan seksual.",
      "Pedofilia berkaitan dengan ketertarikan seksual terhadap anak yang belum pubertas; sekadar mempertontonkan genital lebih khas ekshibisionisme."
    ]
  },
  {
    "soal": "8. Apa obat untuk bangkitan lena?",
    "opsi": [
      "A. Diazepam",
      "B. Topiramat",
      "C. Etosuksimid",
      "D. Klomazepam",
      "E. Midazolam"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Etosuksimid adalah drug of choice yang paling efektif untuk kejang lena (absence seizure).",
    "pembahasanPilihan": [
      "Diazepam adalah benzodiazepin untuk penghentian kejang akut/status epileptikus, bukan terapi pilihan jangka panjang absence seizure.",
      "Topiramat merupakan antikejang spektrum luas, tetapi bukan obat lini pertama untuk absence seizure.",
      "Etosuksimid adalah pilihan klasik lini pertama untuk absence seizure karena bekerja terutama pada kanal Ca2+ tipe-T di talamus.",
      "Klonazepam dapat menekan absence seizure, tetapi bukan pilihan utama dibanding etosuksimid karena toleransi dan efek sedasi.",
      "Midazolam digunakan terutama untuk menghentikan kejang akut; bukan terapi utama absence seizure kronis."
    ]
  },
  {
    "soal": "9. Seorang laki-laki usia 60 tahun stroke hemoragic. Ditemukan gumpalan darah pada daerah gyrus cinguli. apakah alat yang mempercabangkan daerah tersebut :",
    "opsi": [
      "A. Arteri cerebrii anterior",
      "B. Arteri communis anterior",
      "C. Arteri cerebrii media",
      "D. Arteri communis posterior",
      "E. Arteri cerebrii posterior"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Vaskularisasi utama untuk area medial otak termasuk gyrus cinguli adalah Arteri Cerebri Anterior.",
    "pembahasanPilihan": [
      "ACA memperdarahi permukaan medial hemisfer, termasuk banyak bagian gyrus cinguli.",
      "Arteri communicans anterior menghubungkan kedua ACA, tetapi bukan pembuluh utama yang langsung memperdarahi gyrus cinguli.",
      "MCA terutama memperdarahi permukaan lateral hemisfer, bukan wilayah medial cinguli.",
      "Arteri communicans posterior menghubungkan sirkulasi anterior dan posterior; bukan pemasok utama gyrus cinguli.",
      "PCA terutama memperdarahi lobus oksipital dan bagian medial temporal; bukan pemasok utama gyrus cinguli."
    ]
  },
  {
    "soal": "10. Seorang laki-laki 40 tahun, penjaga kantin, suka memperlihatkan alat kelamin terutama pada siswi, gangguannya apa?",
    "opsi": [
      "A. Frottoriesme",
      "B. Voyeurisme",
      "C. Ekshibisionisme",
      "D. Fetishme",
      "E. Pedofilia"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Ekshibisionisme adalah dorongan memamerkan alat kelamin kepada orang yang tidak menduganya.",
    "pembahasanPilihan": [
      "Frotteurisme adalah mencari rangsangan seksual dengan menggesekkan tubuh/alat kelamin kepada orang yang tidak memberi persetujuan.",
      "Voyeurisme adalah memperoleh rangsangan dengan mengintip orang lain yang sedang telanjang atau beraktivitas seksual secara diam-diam.",
      "Ekshibisionisme adalah mempertontonkan genital kepada orang yang tidak mengharapkannya; gambaran soal paling sesuai.",
      "Fetishisme berfokus pada benda mati atau bagian tubuh tertentu sebagai sumber rangsangan seksual.",
      "Pedofilia berkaitan dengan ketertarikan seksual terhadap anak yang belum pubertas; sekadar mempertontonkan genital lebih khas ekshibisionisme."
    ]
  },
  {
    "soal": "11. Apa fobia pesawat terbang?",
    "opsi": [
      "A. Akrofobia",
      "B. Aviophobia",
      "C. Agorafobia",
      "D. Klaustrofobia",
      "E. Nomophobia"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Aviophobia atau aerophobia adalah fobia naik pesawat terbang.",
    "pembahasanPilihan": [
      "Akrofobia adalah takut ketinggian, misalnya berada di balkon atau gedung tinggi.",
      "Aviophobia/aerophobia adalah fobia spesifik terhadap penerbangan atau naik pesawat.",
      "Agorafobia adalah takut situasi yang sulit ditinggalkan/ditolong, bukan khusus pesawat.",
      "Klaustrofobia adalah takut ruang sempit atau tertutup.",
      "Nomofobia adalah ketakutan/ketidaknyamanan karena tidak memiliki akses ke telepon seluler."
    ]
  },
  {
    "soal": "12. Apa fobia jauh dari hape?",
    "opsi": [
      "A. Nomophobia",
      "B. Xenophobia",
      "C. Fotophobia",
      "D. Akrofobia",
      "E. Agorafobia"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Nomophobia (no-mobile-phone phobia) adalah rasa takut kehilangan akses pada ponsel.",
    "pembahasanPilihan": [
      "Nomofobia adalah istilah untuk ketakutan atau kecemasan ketika tidak dapat menggunakan atau mengakses ponsel.",
      "Xenofobia adalah ketakutan/permusuhan terhadap orang asing atau kelompok luar, bukan ponsel.",
      "Fotofobia adalah sensitivitas/ketidaknyamanan terhadap cahaya terang.",
      "Akrofobia adalah takut ketinggian.",
      "Agorafobia berkaitan dengan situasi seperti kerumunan, tempat terbuka/tertutup, atau transportasi yang dianggap sulit ditinggalkan."
    ]
  },
  {
    "soal": "13. Laki-laki 45 tahun mengalami benturan di kepala, ia tidak dapat mengingat kejadian setelah benturan tersebut (Amnesia Antegrade). Struktur yang mengalami gangguan?",
    "opsi": [
      "A. Cortex Cerebri",
      "B. Amygdala",
      "C. Ganglia Basalis",
      "D. Hyppocampus",
      "E. Hypothalamus"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Hipokampus mengatur konsolidasi memori baru; lesi memicu amnesia anterograde.",
    "pembahasanPilihan": [
      "Cortex cerebri berperan luas pada fungsi kognitif, tetapi bukan struktur utama konsolidasi memori baru.",
      "Amigdala terutama memproses emosi dan memori emosional, bukan pusat utama pembentukan memori deklaratif baru.",
      "Hipokampus penting untuk konsolidasi memori baru; lesi bilateral dapat menyebabkan amnesia anterograd.",
      "Hipotalamus mengatur homeostasis, endokrin, dan fungsi otonom; bukan pusat utama konsolidasi memori episodik.",
      "Thalamus adalah relay sensorik penting dan dapat berperan pada memori, tetapi bukan struktur utama yang ditanyakan."
    ]
  },
  {
    "soal": "14. Anak 17 tahun jatuh dari motor, kepala terbentur. Hasil CT Scan pendarahan temporal dextra bentuk crescent sign. HU=65. Tidak tampak pergeseran garis tengah. Diagnosisnya?",
    "opsi": [
      "A. Pendarahan subarachnoid",
      "B. Pendarahan subdural",
      "C. Pendarahan epidural",
      "D. Infark cerebri",
      "E. Abses cerebri"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Crescent sign (bentuk bulan sabit) pada CT scan patognomonis untuk Hematoma Subdural (SDH).",
    "pembahasanPilihan": [
      "Subarachnoid hemorrhage biasanya tampak darah di sulkus/cisterna dan sering terkait thunderclap headache; bukan gambaran crescent.",
      "Subdural hematoma berbentuk crescent karena darah terkumpul di antara dura dan arachnoid; sering akibat robekan bridging veins.",
      "Epidural hematoma khas berbentuk lentiform/bikonveks dan dapat terkait fraktur temporal serta robekan middle meningeal artery.",
      "Infark cerebri menunjukkan area hipodens karena iskemia, bukan koleksi darah berbentuk crescent.",
      "Abses serebri berupa lesi massa dengan edema dan biasanya ring enhancement; bukan hematoma crescent."
    ]
  },
  {
    "soal": "15. (Soal sama dengan 14) Hasil CT Scan ditemukan pendarahan bentuk crescent sign. Apakah diagnosisnya?",
    "opsi": [
      "A. Pendarahan subarachnoid",
      "B. Pendarahan subdural",
      "C. Pendarahan epidural",
      "D. Infark cerebri",
      "E. Abses cerebri"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Crescent sign adalah tanda hematoma subdural.",
    "pembahasanPilihan": [
      "Subarachnoid hemorrhage biasanya tampak darah di sulkus/cisterna dan sering terkait thunderclap headache; bukan gambaran crescent.",
      "Subdural hematoma berbentuk crescent karena darah terkumpul di antara dura dan arachnoid; sering akibat robekan bridging veins.",
      "Epidural hematoma khas berbentuk lentiform/bikonveks dan dapat terkait fraktur temporal serta robekan middle meningeal artery.",
      "Infark cerebri menunjukkan area hipodens karena iskemia, bukan koleksi darah berbentuk crescent.",
      "Abses serebri berupa lesi massa dengan edema dan biasanya ring enhancement; bukan hematoma crescent."
    ]
  },
  {
    "soal": "16. Perempuan usia 53 keluhan nyeri punggung, pf didapatkan deformitas pada regio korpus torakal berbentuk tonjolan keras. Etiologi yg mungkin?",
    "opsi": [
      "A. Infeksi",
      "B. Inflamasi",
      "C. Degeneratif",
      "D. Mekanik",
      "E. Neoplasma"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Tonjolan keras (gibbus) di torakal akibat destruksi tulang paling sering disebabkan infeksi Spondilitis TB.",
    "pembahasanPilihan": [
      "Infeksi, khususnya spondilitis TB, dapat menyebabkan nyeri, destruksi korpus, dan deformitas gibbus.",
      "Inflamasi adalah mekanisme umum, tetapi deformitas korpus torakal khas perlu mencari penyebab struktural seperti infeksi TB.",
      "Degeneratif lebih sering mengenai diskus/faset dan menghasilkan nyeri mekanik; tidak khas untuk tonjolan keras gibbus.",
      "Kelainan mekanik dapat menyebabkan nyeri punggung, tetapi tidak menjelaskan pola destruksi korpus yang khas infeksi.",
      "Neoplasma dapat merusak korpus vertebra, tetapi harus didukung red flags lain; pada konteks ini infeksi merupakan etiologi penting."
    ]
  },
  {
    "soal": "17. Ada orang susah tidur biasa dia tidur jam 21.00 tapi baru bisa tidur 2 jam setelahnya, ga ada gangguan lainnya cuman susah tidur diagnosisnya apa",
    "opsi": [
      "A. Insomnia early",
      "B. Insomnia mid",
      "C. Insomnia late",
      "D. Hipersomnia",
      "E. Parasomnia"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Early insomnia (sleep onset) adalah kesulitan memulai fase tidur di awal malam.",
    "pembahasanPilihan": [
      "Early insomnia adalah sulit memulai tidur; pasien baru tertidur jauh setelah masuk tempat tidur.",
      "Middle insomnia adalah sering terbangun di tengah malam dan sulit tidur kembali.",
      "Late insomnia adalah bangun terlalu dini dan tidak dapat kembali tidur.",
      "Hipersomnia berarti tidur berlebihan atau kantuk berlebihan di siang hari, kebalikan dari keluhan ini.",
      "Parasomnia adalah perilaku/fenomena abnormal saat tidur, misalnya sleepwalking atau night terror."
    ]
  },
  {
    "soal": "18. Wanita 65 tahun sulit tidur sudah di kasur sejak jam 21:00 baru tertidur dua jam kemudian. Tidak ada gejala waham. Diagnosisnya apa?",
    "opsi": [
      "A. Gejala insomnia organik",
      "B. Gejala insomnia non-organik",
      "C. Hipersomnia",
      "D. Parasomnia",
      "E. Sleep apnea"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Tidak ada kelainan organik medis langsung atau psikotik penyerta, diklasifikasikan sebagai insomnia non-organik.",
    "pembahasanPilihan": [
      "Insomnia organik berarti sulit tidur yang berkaitan dengan kondisi medis/neurologis tertentu; soal menyatakan tidak ada penyebab organik.",
      "Insomnia non-organik ditandai kesulitan memulai atau mempertahankan tidur tanpa penyebab organik yang jelas.",
      "Hipersomnia menyebabkan kebutuhan tidur berlebihan/kantuk siang, bukan sleep-onset insomnia.",
      "Parasomnia berupa kejadian abnormal selama tidur, bukan sekadar terlambat tertidur.",
      "Sleep apnea biasanya disertai dengkuran, henti napas, dan kantuk siang; bukan gambaran utama kasus."
    ]
  },
  {
    "soal": "19. Perempuan 52th terkena stroke hemoragik, pada area broca (44 dan 45) di bagian lobus mana?",
    "opsi": [
      "A. Lobus frontalis",
      "B. Lobus parietal",
      "C. Lobus limbik",
      "D. Lobus occipital",
      "E. Lobus temporalis"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Area Broca untuk motorik bahasa terletak pada gyrus frontalis inferior, yakni di Lobus Frontalis.",
    "pembahasanPilihan": [
      "Area Broca berada pada gyrus frontalis inferior hemisfer dominan, sehingga termasuk lobus frontalis.",
      "Lobus parietalis terutama berperan pada sensasi somatik dan integrasi spasial.",
      "Lobus limbik mencakup jaringan yang terkait emosi dan memori; bukan lokasi utama Broca.",
      "Lobus oksipital terutama memproses penglihatan.",
      "Lobus temporalis penting untuk pendengaran dan pemahaman bahasa, terutama area Wernicke."
    ]
  },
  {
    "soal": "20. Tukang jualan kantin suka ngeliatin kemaluan depan umum khususnya pada anak-anak perempuan?",
    "opsi": [
      "A. Transvertisme",
      "B. Eksibisionisme",
      "C. Voyeurisme",
      "D. Frotteurisme",
      "E. Pedofilia"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Tindakan mempertontonkan kemaluan secara mendadak kepada publik adalah Eksibisionisme.",
    "pembahasanPilihan": [
      "Fetishisme berfokus pada benda mati atau bagian tubuh tertentu sebagai sumber rangsangan seksual.",
      "Ekshibisionisme adalah mempertontonkan genital kepada orang yang tidak mengharapkannya; gambaran soal paling sesuai.",
      "Voyeurisme adalah memperoleh rangsangan dengan mengintip orang lain yang sedang telanjang atau beraktivitas seksual secara diam-diam.",
      "Frotteurisme adalah mencari rangsangan seksual dengan menggesekkan tubuh/alat kelamin kepada orang yang tidak memberi persetujuan.",
      "Pedofilia berkaitan dengan ketertarikan seksual terhadap anak yang belum pubertas; sekadar mempertontonkan genital lebih khas ekshibisionisme."
    ]
  },
  {
    "soal": "21. Perempuan 22 tahun kontrol epilepsi. Tidak ada bangkitan selama 3 bulan, ada kelemahan anggota gerak dan BB naik. Obat apa yang menimbulkan efek samping tersebut?",
    "opsi": [
      "A. Asam valproat",
      "B. Fenobarbital",
      "C. Etosuksimid",
      "D. Alpramazol",
      "E. Metronidazole"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Asam valproat (anti-konvulsan) terkenal dengan efek samping berupa peningkatan berat badan.",
    "pembahasanPilihan": [
      "Asam valproat dapat menyebabkan kenaikan berat badan; juga perlu memperhatikan tremor dan hepatotoksisitas.",
      "Fenobarbital dapat menyebabkan sedasi, gangguan kognitif, dan efek metabolisme obat; bukan pilihan paling khas untuk kenaikan BB pada kasus ini.",
      "Etosuksimid terutama digunakan untuk absence seizure dan efek samping khasnya adalah gangguan GI, bukan kenaikan BB.",
      "Alprazolam adalah benzodiazepin untuk kecemasan; tidak digunakan sebagai terapi pemeliharaan epilepsi dan dapat menyebabkan sedasi/dependensi.",
      "Metronidazol adalah antibiotik/antiprotozoa; bukan obat antikejang pemeliharaan."
    ]
  },
  {
    "soal": "22. Laki laki 23 tahun membutuhkan analgesik. Diberikan agonis antagonis pentazocin. Keuntungan lebih rendah dari morfin. Apa kekurangan dari obat tersebut?",
    "opsi": [
      "A. Lebih mudah timbul depresi nafas",
      "B. Lebih cepat timbul gejala putus obat",
      "C. Tidak digunakan pada pasien asma",
      "D. Dosis terapi lebih besar dari morfin",
      "E. Dapat meninbulkan retensi urin"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Pentazocine adalah agonis-antagonis opioid dengan efek analgesik dan ceiling effect pada depresi napas. Kekurangan penting dibanding morfin adalah dapat memicu withdrawal pada pasien yang sudah bergantung opioid karena aktivitas antagonistiknya pada reseptor μ.",
    "pembahasanPilihan": [
      "SALAH. Pentazocine justru memiliki ceiling effect terhadap depresi napas sehingga risiko depresi napas berat cenderung lebih rendah daripada agonis μ murni seperti morfin.",
      "BENAR. Sebagai agonis-antagonis, pentazocine dapat menggeser agonis μ dari reseptor dan memicu withdrawal pada pasien yang sudah toleran/dependen opioid.",
      "SALAH. Asma bukan kontraindikasi spesifik pentazocine; seperti semua opioid, depresi napas tetap harus diwaspadai pada pasien dengan gangguan napas.",
      "SALAH. Potensi analgesiknya lebih rendah daripada morfin, tetapi masalah yang paling khas pada soal adalah antagonisme parsial yang dapat memicu withdrawal, bukan semata kebutuhan dosis lebih besar.",
      "SALAH. Retensi urin memang dapat terjadi pada opioid, tetapi bukan kekurangan utama yang membedakan pentazocine dari morfin pada konteks ini."
    ],
    "catatanKlinis": "⚠️ Poin ujian: pentazocine = mixed agonist-antagonist. Kata kunci pembeda adalah withdrawal precipitation pada pasien opioid-dependent."
  },
  {
    "soal": "23. Wanita percaya dia menikah dgn ustad dan sedang menanti dia pulang. Tidak ada halusinasi. Diagnosis?",
    "opsi": [
      "A. Waham menetap",
      "B. Skizofrenia",
      "C. Bipolar",
      "D. Depresi berat",
      "E. Gangguan stres pasca trauma"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Waham erotomania yang menetap tanpa gejala skizofrenia lainnya merujuk pada Gangguan Waham Menetap.",
    "pembahasanPilihan": [
      "Waham menetap/delusional disorder dapat berupa keyakinan salah yang menetap tanpa gangguan psikotik global; erotomania adalah salah satu bentuknya.",
      "Skizofrenia biasanya memerlukan gejala psikotik yang lebih luas seperti halusinasi, waham, disorganisasi, atau gejala negatif.",
      "Gangguan bipolar memerlukan episode mania/hipomania atau depresi; waham saja tidak cukup untuk diagnosis.",
      "Depresi berat dengan gejala psikotik membutuhkan episode depresi yang jelas dan biasanya waham/hallusinasi mood-congruent atau incongruent.",
      "PTSD membutuhkan trauma dan gejala intrusi, avoidance, perubahan mood/kognisi, serta hyperarousal."
    ]
  },
  {
    "soal": "24. Pasien sulit tidur dan berulang kali terbangun, kemudian sulit tidur lg. Diagnosis?",
    "opsi": [
      "A. Insomnia early",
      "B. Insomnia mid",
      "C. Insomnia late",
      "D. Hipersomnia",
      "E. Parainsomnia"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Insomnia mid (sleep maintenance insomnia) ditandai dengan sering terbangun di pertengahan tidur.",
    "pembahasanPilihan": [
      "Insomnia sleep-onset/early terjadi saat sulit mulai tidur.",
      "Middle insomnia adalah terbangun berulang pada malam hari lalu sulit tidur kembali, sesuai kasus.",
      "Late insomnia berupa bangun terlalu dini pada pagi hari.",
      "Hipersomnia adalah tidur berlebihan atau kantuk siang berlebihan.",
      "Parasomnia adalah fenomena abnormal selama tidur, bukan pola terbangun berulang sederhana."
    ]
  },
  {
    "soal": "25. Seorang wanita mudah panik sesak napas. Meringkuk mendengar suara berderap. Riwayat hampir diperkosa temannya. Diagnosis?",
    "opsi": [
      "A. PTSD (post traumatic stress disorder)",
      "B. Gangguan cemas menyeluruh",
      "C. Depresi",
      "D. Fobia spesifik",
      "E. Serangan panik"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Riwayat trauma nyata yang mengancam nyawa memicu gejala kilas balik dan penghindaran, khas untuk PTSD.",
    "pembahasanPilihan": [
      "PTSD dapat muncul setelah trauma seksual dengan re-experiencing/flashback, avoidance, hyperarousal, dan respons takut.",
      "Gangguan cemas menyeluruh ditandai kekhawatiran berlebihan menetap terhadap banyak hal, bukan terutama terikat trauma.",
      "Depresi dominan dengan mood rendah/anhedonia dan gejala neurovegetatif; riwayat trauma saja tidak cukup.",
      "Fobia spesifik adalah takut terhadap objek/situasi tertentu; kasus lebih sesuai dengan respons trauma kompleks.",
      "Serangan panik adalah episode mendadak berupa takut intens dengan gejala otonom; pada kasus ini ada konteks trauma dan gejala PTSD."
    ]
  },
  {
    "soal": "26. Perempuan 45 tahun, kebas di ujung-ujung telapak tangan dan kaki. Riwayat diabetes tidak terkontrol 5 tahun. Patogenesis kondisi tersebut?",
    "opsi": [
      "A. Pasca infeksi",
      "B. Peningkatan myoinositol",
      "C. Mikroangiopati",
      "D. Autoimun",
      "E. Makroangiopati"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Neuropati diabetikum tipe stocking-glove disebabkan oleh kerusakan pembuluh darah kapiler halus (mikroangiopati) saraf.",
    "pembahasanPilihan": [
      "Neuropati diabetik bukan terutama komplikasi pascainfeksi.",
      "Peningkatan myoinositol bukan mekanisme utama yang menjelaskan kerusakan saraf diabetik; perubahan jalur poliol dan mikrovaskular lebih relevan.",
      "Mikroangiopati menyebabkan iskemia saraf dan merupakan mekanisme penting neuropati diabetik.",
      "Autoimun lebih khas pada neuropati tertentu seperti GBS/CIDP, bukan mekanisme utama polineuropati diabetik kronis.",
      "Makroangiopati menyebabkan penyakit pembuluh besar seperti PAD; dapat menyertai DM tetapi bukan mekanisme utama neuropati distal simetris."
    ]
  },
  {
    "soal": "27. Wanita 74 tahun dengan alzhemeir, otopsi ditemukan atrofi pada gyrus bilateral dan hipokampus. Kemungkinan temuan lainnya?",
    "opsi": [
      "A. Penyakit lessyenchema",
      "B. Periventrical patches",
      "C. Cerebritis",
      "D. Pachygyria",
      "E. Hydrocephalus ex vacuo"
    ],
    "jawabanBenar": 4,
    "pembahasan": "Atrofi otak pada Alzheimer akan memicu pelebaran sekunder ventrikel otak yang disebut Hydrocephalus ex vacuo.",
    "pembahasanPilihan": [
      "Lesi tertentu bukan temuan khas Alzheimer; diagnosis neuropatologi Alzheimer lebih terkait plak amyloid dan neurofibrillary tangles.",
      "Periventrical patches lebih terkait demielinisasi seperti multiple sclerosis, bukan Alzheimer tipikal.",
      "Cerebritis adalah inflamasi jaringan otak dan bukan temuan neuropatologi khas Alzheimer.",
      "Pachygyria adalah kelainan migrasi kortikal kongenital, bukan perubahan degeneratif Alzheimer.",
      "Atrofi hipokampus dan korteks pada Alzheimer menyebabkan pelebaran ventrikel ex vacuo; juga dapat ditemukan plak amyloid dan tangles tau."
    ]
  },
  {
    "soal": "28. Perempuan 53 tahun nyeri punggung berat, demam, BB turun. Deformitas korpus torakal bawah berbentuk benjolan keras. Deformitas yang di maksud?",
    "opsi": [
      "A. Lordosis",
      "B. Gibbus",
      "C. Beak",
      "D. Kifosis",
      "E. Skoliosis"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Deformitas tajam menonjol akibat infeksi (TB Spondilitis) pada korpus tulang belakang disebut Gibbus.",
    "pembahasanPilihan": [
      "Lordosis adalah lengkung anterior berlebihan, terutama lumbal; bukan deformitas tajam akibat kolaps korpus torakal.",
      "Gibbus adalah kifosis angular tajam akibat kolaps/destruksi beberapa korpus, klasik pada spondilitis TB.",
      "Beak menggambarkan osteofit atau tonjolan tulang, bukan istilah utama untuk deformitas gibbus.",
      "Kifosis adalah lengkung posterior torakal; gibbus merupakan bentuk angular yang lebih tajam.",
      "Skoliosis adalah deviasi lateral tulang belakang."
    ]
  },
  {
    "soal": "29. Seneng main hp ga bisa lepas dari hp sampe ganggu presentasi kuliah:",
    "opsi": [
      "A. Nomofobia",
      "B. Klaustrofobia",
      "C. Agorafobia",
      "D. Akrofobia",
      "E. Xenofobia"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Nomofobia (no-mobile-phone phobia) adalah ketakutan berlebih bila tidak mengakses ponsel.",
    "pembahasanPilihan": [
      "Nomofobia adalah istilah untuk ketakutan atau kecemasan ketika tidak dapat menggunakan atau mengakses ponsel.",
      "Fotofobia adalah sensitivitas/ketidaknyamanan terhadap cahaya terang.",
      "Agorafobia berkaitan dengan situasi seperti kerumunan, tempat terbuka/tertutup, atau transportasi yang dianggap sulit ditinggalkan.",
      "Akrofobia adalah takut ketinggian.",
      "Xenofobia adalah ketakutan/permusuhan terhadap orang asing atau kelompok luar, bukan ponsel."
    ]
  },
  {
    "soal": "30. Perempuan ngaku ustad adalah suaminya, istri kedua ustad makanya ga di publish. Diagnosis?",
    "opsi": [
      "A. Skizofrenia",
      "B. Bipolar",
      "C. Waham Erotomania",
      "D. Waham Kebesaran",
      "E. Waham Kejar"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Keyakinan menetap bahwa seseorang (biasanya berstatus lebih tinggi) mencintainya adalah Waham Erotomania.",
    "pembahasanPilihan": [
      "Skizofrenia membutuhkan gangguan psikotik yang lebih luas dan durasi sesuai kriteria; waham terisolasi tidak otomatis skizofrenia.",
      "Bipolar memerlukan episode mood (mania/hipomania/depresi) selain gejala psikotik.",
      "Erotomania adalah waham bahwa orang lain, sering seseorang berstatus lebih tinggi, mencintai pasien; kasus ini khas.",
      "Waham kebesaran berisi keyakinan memiliki kekuasaan, identitas, kemampuan, atau status luar biasa.",
      "Waham kejar berisi keyakinan bahwa dirinya sedang diikuti, disadap, diracuni, atau dirugikan."
    ]
  },
  {
    "soal": "31. Fobia ketinggian disebut:",
    "opsi": [
      "A. Akrofobia",
      "B. Agorafobia",
      "C. Klaustrofobia",
      "D. Aviophobia",
      "E. Xenofobia"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Akrofobia adalah istilah medis untuk ketakutan ekstrem pada tempat tinggi.",
    "pembahasanPilihan": [
      "Akrofobia adalah takut ketinggian.",
      "Agorafobia adalah takut situasi yang sulit ditinggalkan atau mendapat pertolongan.",
      "Klaustrofobia adalah takut ruang tertutup/sempit.",
      "Aviophobia adalah takut terbang.",
      "Xenofobia adalah ketakutan/permusuhan terhadap orang asing atau kelompok luar."
    ]
  },
  {
    "soal": "32. Bola mata ke arah medial terus, nervus apa yg bermasalah?",
    "opsi": [
      "A. N. Trochlearis",
      "B. N. Abduscens",
      "C. N. Oculomotorius",
      "D. N. Opticus",
      "E. N. Facialis"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Lesi pada Nervus VI (Abduscens) menyebabkan otot rektus lateral lumpuh, sehingga mata tertarik ke medial (esotropia).",
    "pembahasanPilihan": [
      "N. trochlearis (IV) mempersarafi superior oblique; lesinya menyebabkan diplopia vertikal dan kesulitan melihat ke bawah-adduksi.",
      "N. abducens (VI) mempersarafi lateral rectus; lesinya membuat mata deviasi medial/esotropia karena lateral rectus lemah.",
      "N. oculomotorius (III) mempersarafi medial rectus dan sebagian besar otot ekstraokular; lesi lengkap biasanya menyebabkan mata down-and-out.",
      "N. opticus (II) membawa penglihatan aferen; lesinya tidak menyebabkan esotropia primer.",
      "N. facialis (VII) mempersarafi otot ekspresi wajah, bukan otot ekstraokular."
    ]
  },
  {
    "soal": "33. Kebas di ujung telapak tangan kaki. Riwayat diabetes tidak terkontrol. Diagnosis yang paling TIDAK mungkin?",
    "opsi": [
      "A. Mononeuropati multipleks",
      "B. Neuropati perifer",
      "C. Polineuropati diabetikum",
      "D. Infark thalamus",
      "E. Guillain Barre Syndrome"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Infark thalamus adalah lesi saraf pusat, bukan neuropati tepi (sarung tangan dan kaus kaki) seperti pada DM.",
    "pembahasanPilihan": [
      "Mononeuropati multipleks dapat terjadi pada diabetes, vasculitis, atau penyakit sistemik; jadi masih mungkin.",
      "Neuropati perifer merupakan istilah luas dan sangat mungkin pada diabetes kronis.",
      "Polineuropati diabetikum adalah penyebab klasik kebas distal simetris pada tangan dan kaki.",
      "Infark thalamus lebih sering menimbulkan gangguan sensorik sentral pada hemibody, bukan pola stocking-glove distal simetris.",
      "Guillain-Barré dapat menyebabkan parestesia dan kelemahan progresif, tetapi biasanya akut/subakut dan sering ascending; tetap merupakan diagnosis banding."
    ]
  },
  {
    "soal": "34. (Sama dgn 32) Bola mata ke arah medial terus, nervus apa yg bermasalah?",
    "opsi": [
      "A. N. III",
      "B. N. IV",
      "C. N. V",
      "D. N. VI",
      "E. N. VII"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Nervus VI (Abduscens).",
    "pembahasanPilihan": [
      "N. III mempersarafi medial rectus, tetapi lesi III lengkap biasanya juga memberi ptosis dan pupil abnormal; bukan jawaban terbaik pada kasus ini.",
      "N. IV mempersarafi superior oblique.",
      "N. V mempersarafi sensasi wajah dan otot mastikasi, bukan gerakan bola mata.",
      "N. VI mempersarafi lateral rectus; lesinya menyebabkan mata tertarik ke medial karena kehilangan abduksi.",
      "N. VII mempersarafi otot ekspresi wajah."
    ]
  },
  {
    "soal": "35. Arteri yg memperdarahi gyrus cinguli?",
    "opsi": [
      "A. Cerebri media",
      "B. Cerebri posterior",
      "C. Cerebri anterior",
      "D. Communicans anterior",
      "E. Basilaris"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Permukaan otak bagian medial, termasuk gyrus cinguli, diperdarahi oleh arteri cerebri anterior.",
    "pembahasanPilihan": [
      "MCA memperdarahi permukaan lateral hemisfer, termasuk area bahasa motorik lateral, bukan gyrus cinguli medial.",
      "PCA terutama memperdarahi lobus oksipital dan medial temporal.",
      "ACA memperdarahi permukaan medial frontal-parietal, termasuk gyrus cinguli.",
      "Communicans anterior menghubungkan kedua ACA; bukan pembuluh utama yang memperdarahi jaringan cinguli.",
      "Basilaris memberi cabang ke batang otak dan berlanjut menjadi PCA; bukan pemasok utama cinguli."
    ]
  },
  {
    "soal": "36. Pria 35 tahun gejala psikiatrik dan demensia (Creutzfeldt Jakob). Sifat mikroorganisme penyebab?",
    "opsi": [
      "A. Sensitif enzim nuklease",
      "B. Resisten terhadap enzim nuklease",
      "C. Masa inkubasi sangat cepat",
      "D. Bakteri gram negatif",
      "E. Anaerob"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Penyakit Prion (BSE/CJD) disebabkan oleh protein tanpa asam nukleat sehingga resisten terhadap enzim nuklease.",
    "pembahasanPilihan": [
      "Prion tidak seperti bakteri biasa; agen penyebab CJD terutama berupa protein salah lipat dan sangat resisten terhadap inaktivasi nuklease.",
      "Prion tidak mengandung asam nukleat seperti DNA/RNA, sehingga relatif resisten terhadap nuklease.",
      "Masa inkubasi CJD biasanya panjang, sering bertahun-tahun, bukan sangat cepat.",
      "CJD bukan penyakit bakteri gram negatif.",
      "CJD bukan infeksi anaerob bakteri; penyebabnya adalah prion."
    ]
  },
  {
    "soal": "37. Sistem saraf otonom yang bekerja pada saat relax?",
    "opsi": [
      "A. Saraf simpatis",
      "B. Saraf parasimpatis",
      "C. Saraf motorik",
      "D. Saraf sensorik",
      "E. Saraf somatik"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Saraf parasimpatis mengontrol respon rest and digest (relaksasi).",
    "pembahasanPilihan": [
      "Simpatis dominan pada fight-or-flight: meningkatkan denyut jantung, bronkodilatasi, dan menurunkan aktivitas GI.",
      "Parasimpatis dominan saat rest-and-digest: menurunkan denyut jantung dan meningkatkan fungsi gastrointestinal.",
      "Saraf motorik somatik mengendalikan otot rangka secara sadar, bukan sistem relaksasi viseral.",
      "Saraf sensorik membawa informasi aferen ke SSP; bukan sistem otonom yang mengatur keadaan istirahat.",
      "Sistem somatik berhubungan dengan sensasi sadar dan motorik volunter."
    ]
  },
  {
    "soal": "38. Parkinson disease (tremor, rigitas, bradikinesia). Pernyataan yang TIDAK TEPAT?",
    "opsi": [
      "A. Kerusakan substansia nigra pars kompakta",
      "B. Dopamin menurun",
      "C. Meningkatnya eksitasi pada korteks cerebri",
      "D. Instabilitas postural",
      "E. Gangguan traktus ekstrapiramidal"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Pada Parkinson, justru eksitasi thalamus ke korteks cerebri berkurang (menyebabkan gerak melambat/bradikinesia).",
    "pembahasanPilihan": [
      "Parkinson terutama berkaitan dengan degenerasi neuron dopaminergik substantia nigra pars compacta.",
      "Kadar dopamin di striatum menurun sehingga keseimbangan direct/indirect pathway terganggu.",
      "Pernyataan peningkatan eksitasi korteks secara umum tidak tepat sebagai mekanisme utama; output thalamokortikal justru cenderung menurun pada jalur motorik.",
      "Instabilitas postural merupakan gejala motorik Parkinson, terutama pada stadium lanjut.",
      "Gangguan sirkuit basal ganglia/ekstrapiramidal merupakan inti patofisiologi Parkinson."
    ]
  },
  {
    "soal": "39. Wanita 24 tahun menyayat tangannya. Tidak semangat hidup 3 minggu. Tatalaksana utama?",
    "opsi": [
      "A. Escitalopram",
      "B. Propanolol",
      "C. Trifenidil",
      "D. Diazepam",
      "E. Zolpidem"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Tatalaksana episode depresi mayor yang utama adalah antidepresan golongan SSRI seperti Escitalopram.",
    "pembahasanPilihan": [
      "Escitalopram adalah SSRI; pada depresi dengan risiko bunuh diri tetap perlu pemantauan ketat dan safety planning.",
      "Propranolol bukan terapi utama episode depresi mayor; lebih sering untuk tremor atau gejala otonom tertentu.",
      "Trihexyphenidyl adalah antikolinergik untuk gejala Parkinson, bukan terapi depresi.",
      "Diazepam dapat meredakan kecemasan akut tetapi tidak mengobati episode depresi mayor dan berisiko ketergantungan.",
      "Zolpidem adalah hipnotik untuk insomnia; bukan terapi inti depresi mayor."
    ]
  },
  {
    "soal": "40. Perempuan, 60 tahun tidak bisa membedakan semua sensasi somatosensorik, organ yang mungkin terganggu?",
    "opsi": [
      "A. Epithalamus",
      "B. Subthalamus",
      "C. Metathalamus",
      "D. Hypothalamus",
      "E. Thalamus"
    ],
    "jawabanBenar": 4,
    "pembahasan": "Thalamus merupakan stasiun pemancar utama untuk semua sinyal sensorik (kecuali penciuman).",
    "pembahasanPilihan": [
      "Epithalamus berkaitan dengan habenula dan pineal, bukan relay utama semua sensasi somatosensorik.",
      "Subthalamus merupakan bagian sirkuit basal ganglia, bukan pusat relay sensorik utama.",
      "Metathalamus terutama mencakup corpus geniculatum lateral/medial untuk visual dan auditorik.",
      "Hipotalamus mengatur homeostasis dan fungsi endokrin/otonom, bukan relay utama sensasi sadar.",
      "Thalamus adalah relay utama hampir semua sensasi somatosensorik menuju korteks, kecuali olfaksi."
    ]
  },
  {
    "soal": "41. Perempuan 24 tahun menyayat tangan. Sedih, kesulitan tidur selama 3 minggu. Tidak ada halusinasi/waham. Diagnosis?",
    "opsi": [
      "A. Episode depresi sedang",
      "B. Episode depresi berat dengan gejala psikotik",
      "C. Episode depresi berat tanpa gejala psikotik",
      "D. Episode depresi ringan",
      "E. Episode depresi minor"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Percobaan bunuh diri masuk depresi berat, namun karena tidak ada halusinasi, diklasifikasikan tanpa gejala psikotik.",
    "pembahasanPilihan": [
      "Episode depresi sedang memiliki gejala lebih banyak/berat dibanding ringan tetapi belum memenuhi gambaran berat.",
      "Gejala psikotik mensyaratkan waham/halusinasi; kasus menyatakan tidak ada gejala tersebut.",
      "Episode depresi berat tanpa gejala psikotik sesuai dengan gejala depresi bermakna selama ≥2 minggu disertai perilaku menyakiti diri.",
      "Episode ringan biasanya gangguan fungsi lebih ringan dan gejala lebih sedikit.",
      "Depresi minor adalah istilah nonformal/subthreshold; bukan pilihan terbaik ketika kriteria episode berat terpenuhi."
    ]
  },
  {
    "soal": "42. Arti kata ulil albab dalam al quran adalah",
    "opsi": [
      "A. Orang yang berakal",
      "B. Orang yang beriman",
      "C. Orang yang bertakwa",
      "D. Orang yang fasik",
      "E. Orang yang soleh"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Ulil Albab merujuk kepada kaum yang menggunakan akalnya untuk merenungkan penciptaan.",
    "pembahasanPilihan": [
      "Saleh berarti orang yang baik/taat; merupakan karakter, bukan terjemahan khusus Ulul Albab.",
      "Beriman berarti percaya kepada Allah dan ajaran-Nya; maknanya tidak sama persis dengan istilah Ulul Albab.",
      "Bertakwa berarti menjalankan perintah dan menjauhi larangan Allah; bukan arti literal Ulul Albab.",
      "Fasik berarti keluar dari ketaatan atau melakukan kefasikan; jelas bukan makna Ulul Albab.",
      "Ulul Albab merujuk pada orang-orang yang menggunakan akal/pikiran yang jernih dan mampu mengambil pelajaran."
    ]
  },
  {
    "soal": "43. Struktur yang mempengaruhi jalur saraf motorik ekstrapiramid adalah...",
    "opsi": [
      "A. Korteks premotorik, medulla oblongata",
      "B. Corpus striatum, nukleus lentiformis, tegmentum mesencephali, cerebellum",
      "C. Mesencephalon, pons, medulla spinalis",
      "D. Diencephalon, substansia grisea",
      "E. Nukleus caudatus, pons"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Jalur ekstrapiramidal sangat terkait dengan anatomi Ganglia Basalis dan serebelum.",
    "pembahasanPilihan": [
      "Korteks premotor dan medula bukan keseluruhan struktur ekstrapiramidal; jalur piramidal terutama berasal dari korteks motorik.",
      "Basal ganglia seperti corpus striatum/nukleus lentiformis bekerja bersama sirkuit mesensefalon dan serebelum untuk modulasi gerak.",
      "Mesensefalon, pons, dan medula adalah batang otak; bukan keseluruhan pusat ekstrapiramidal.",
      "Diencephalon dan substansia grisea terlalu umum dan tidak menggambarkan inti sirkuit basal ganglia.",
      "Nukleus caudatus memang bagian basal ganglia, tetapi pons bukan struktur utama ekstrapiramidal; opsi ini tidak lengkap."
    ]
  },
  {
    "soal": "44. Efek penambahan vasokonstriktor pada anestesi lokal?",
    "opsi": [
      "A. Konstriksi pembuluh darah besar",
      "B. Penurunan perfusi jaringan sekitar",
      "C. Penurunan durasi waktu eliminasi",
      "D. Peningkatan risiko toksisitas sistemik",
      "E. Mempercepat obat masuk darah"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Vasokonstriktor menurunkan aliran/perfusi darah di area lokal sehingga obat menetap lebih lama.",
    "pembahasanPilihan": [
      "Vasokonstriktor seperti epinefrin menyempitkan pembuluh lokal, tetapi efek klinis yang dicari adalah mengurangi aliran/perfusi lokal.",
      "Penurunan perfusi lokal memperlambat absorpsi anestetik ke sirkulasi sehingga durasi blok memanjang dan toksisitas sistemik berkurang.",
      "Vasokonstriktor justru cenderung memperpanjang, bukan memperpendek, durasi anestesi lokal.",
      "Risiko toksisitas sistemik umumnya menurun karena absorpsi sistemik diperlambat; overdosis tetap harus dihindari.",
      "Vasokonstriktor tidak mempercepat masuknya anestetik ke darah; justru menghambat absorpsi sistemik."
    ]
  },
  {
    "soal": "45. Wanita Ca ovarium metastase. Aktivitas terhambat karena nyeri abdomen (VAS tinggi). Analgesik?",
    "opsi": [
      "A. Gol opioid",
      "B. Gol COX 2",
      "C. Gabungan NSAID lemah",
      "D. Gol COX 3",
      "E. Blok epidural"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Untuk nyeri hebat pada kasus kanker metastasis, opioid kuat (WHO step 3) adalah lini utama.",
    "pembahasanPilihan": [
      "Opioid merupakan analgesik utama untuk nyeri kanker berat dengan VAS tinggi, dengan titrasi berdasarkan respons dan efek samping.",
      "COX-2/NSAID dapat membantu nyeri inflamasi tetapi sering tidak cukup untuk nyeri kanker berat sendiri.",
      "NSAID lemah tidak memadai sebagai monoterapi untuk nyeri kanker berat.",
      "COX-3 bukan target klinis standar untuk terapi nyeri kanker.",
      "Epidural dapat dipertimbangkan pada kasus terpilih, tetapi bukan pilihan awal umum dibanding opioid sistemik untuk nyeri kanker berat."
    ]
  },
  {
    "soal": "46. Pasien Parkinson, pernyataan dibawah yang TIDAK tepat adalah?",
    "opsi": [
      "A. Kerusakan substansia nigra pars kompakta",
      "B. Menurunnya inhibisi pada Globus palidus interna",
      "C. Dopamin menurun",
      "D. Meningkatnya eksitasi pada korteks cerebri",
      "E. Terjadi resting tremor"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Hambatan dari GPi ke thalamus meningkat pada Parkinson, sehingga eksitasi ke korteks serebri justru menurun.",
    "pembahasanPilihan": [
      "Parkinson terutama berkaitan dengan degenerasi neuron dopaminergik substantia nigra pars compacta.",
      "Gangguan sirkuit basal ganglia/ekstrapiramidal merupakan inti patofisiologi Parkinson.",
      "Kadar dopamin di striatum menurun sehingga keseimbangan direct/indirect pathway terganggu.",
      "Pernyataan peningkatan eksitasi korteks secara umum tidak tepat sebagai mekanisme utama; output thalamokortikal justru cenderung menurun pada jalur motorik.",
      "Instabilitas postural merupakan gejala motorik Parkinson, terutama pada stadium lanjut."
    ]
  },
  {
    "soal": "47. Pulang dari Texas, diduga Meningitis. Pemeriksaan penunjang?",
    "opsi": [
      "A. Darah lengkap",
      "B. CT Scan Kepala",
      "C. LCS (Lumbal Pungsi)",
      "D. MRI",
      "E. EEG"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Pemeriksaan Cairan Serebrospinal (LCS) adalah baku emas untuk diagnosis meningitis.",
    "pembahasanPilihan": [
      "Darah lengkap dapat membantu menilai infeksi tetapi tidak mengonfirmasi etiologi meningitis.",
      "CT kepala dipakai bila ada indikasi sebelum LP, misalnya defisit fokal, penurunan kesadaran tertentu, atau risiko massa.",
      "Lumbal pungsi memungkinkan analisis LCS: sel, protein, glukosa, Gram/kultur, dan pemeriksaan etiologi.",
      "MRI lebih sensitif untuk komplikasi tertentu tetapi bukan pemeriksaan awal rutin untuk memastikan meningitis.",
      "EEG menilai aktivitas listrik otak dan bukan pemeriksaan utama untuk diagnosis meningitis."
    ]
  },
  {
    "soal": "48. Diurut untuk menghilangkan rasa nyeri dan memberikan perasaan senang. Neurotransmitter pereda nyeri?",
    "opsi": [
      "A. Dopamin",
      "B. Histamin",
      "C. GABA",
      "D. Endorfin",
      "E. Melatonin"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Endorfin adalah analgesik alami tubuh (opioid endogen) pereda nyeri yang memicu rasa sejahtera.",
    "pembahasanPilihan": [
      "Dopamin terutama terkait reward, motivasi, dan gerakan; bukan opioid endogen utama untuk analgesia.",
      "Histamin berperan dalam alergi, inflamasi, dan wakefulness; bukan mediator utama analgesia opioid.",
      "GABA adalah inhibitorik utama SSP dan dapat memodulasi nyeri, tetapi bukan neurotransmiter analgesik endogen klasik yang dimaksud.",
      "Endorfin adalah opioid endogen yang mengaktivasi reseptor opioid dan mengurangi persepsi nyeri.",
      "Melatonin mengatur ritme sirkadian dan tidur; bukan neurotransmiter utama pereda nyeri."
    ]
  },
  {
    "soal": "49. Sifat kimia cairan liquor cerebrospinal (LCS) normal?",
    "opsi": [
      "A. Osmolaritasnya sama dengan osmolaritas darah",
      "B. Klorida lebih rendah dari plasma",
      "C. pH sangat basa",
      "D. Protein sama dengan darah",
      "E. Glukosa LCS lebih tinggi dari darah"
    ],
    "jawabanBenar": 0,
    "pembahasan": "LCS isotonis/isosmolar dengan plasma darah, dengan kadar protein yang jauh lebih rendah dan glukosa sekitar 60% plasma.",
    "pembahasanPilihan": [
      "Osmolalitas LCS mendekati plasma; komposisinya mirip tetapi tidak identik.",
      "Klorida LCS relatif lebih tinggi daripada plasma, bukan lebih rendah.",
      "pH LCS sedikit lebih rendah dari darah dan tidak sangat basa.",
      "Protein LCS jauh lebih rendah daripada plasma karena sawar darah-LCS.",
      "Glukosa LCS sekitar 60% kadar plasma dan biasanya lebih rendah, bukan lebih tinggi."
    ]
  },
  {
    "soal": "50. Tetanus karena paku, trismus, risus sardonicus. Yang TIDAK TEPAT pada tatalaksana pasien?",
    "opsi": [
      "A. Observasi di ICU redup",
      "B. Penisilin G dan metronidazole",
      "C. Diazepam",
      "D. Debridement, necrotomy, jahit ulang rapat",
      "E. Pemberian HTIG 500 UI"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Luka dicurigai C. tetani (anaerob) tidak boleh dijahit rapat; harus dibiarkan terbuka terkena oksigen setelah debridement.",
    "pembahasanPilihan": [
      "Pasien tetanus berat memerlukan monitoring intensif karena spasme dapat mengganggu napas dan otonom.",
      "Metronidazol adalah pilihan antimikroba yang baik; penisilin G juga secara historis digunakan.",
      "Diazepam/benzodiazepin membantu mengontrol spasme dan kekakuan.",
      "Luka tetanus harus dibersihkan dan didebridement; luka tusuk kotor tidak dianjurkan dijahit rapat primer karena menjebak kondisi anaerob.",
      "HTIG menetralkan toksin yang masih bebas; dosis mengikuti pedoman lokal, sehingga angka dosis harus disesuaikan protokol."
    ],
    "catatanKlinis": "⚠️ Catatan: pada tetanus modern, metronidazol umumnya lebih disukai daripada penisilin. Yang jelas TIDAK TEPAT adalah menjahit luka tusuk kotor rapat primer setelah debridement."
  },
  {
    "soal": "51. Pasien tidak bisa lepas dari gadget atau gawai",
    "opsi": [
      "A. Xenophobia",
      "B. Nomophobia",
      "C. Fotophobia",
      "D. Akrofobia",
      "E. Klaustrofobia"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Nomophobia adalah rasa takut tidak bisa mengakses ponsel/gawai.",
    "pembahasanPilihan": [
      "Nomofobia adalah istilah untuk ketakutan atau kecemasan ketika tidak dapat menggunakan atau mengakses ponsel.",
      "Xenofobia adalah ketakutan/permusuhan terhadap orang asing atau kelompok luar, bukan ponsel.",
      "Fotofobia adalah sensitivitas/ketidaknyamanan terhadap cahaya terang.",
      "Akrofobia adalah takut ketinggian.",
      "Agorafobia berkaitan dengan situasi seperti kerumunan, tempat terbuka/tertutup, atau transportasi yang dianggap sulit ditinggalkan."
    ]
  },
  {
    "soal": "52. Jatuh dari motor. CT Scan perdarahan temporal dextra crescent sign. Diagnosis?",
    "opsi": [
      "A. Abses serebri",
      "B. Infark serebri",
      "C. Perdarahan epidural",
      "D. Perdarahan subdural",
      "E. Perdarah subaracnoid"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Crescent sign (bentuk bulan sabit) = Subdural Hematoma (SDH).",
    "pembahasanPilihan": [
      "Abses serebri berupa lesi massa dengan edema dan biasanya ring enhancement; bukan hematoma crescent.",
      "Infark cerebri menunjukkan area hipodens karena iskemia, bukan koleksi darah berbentuk crescent.",
      "Epidural hematoma khas berbentuk lentiform/bikonveks dan dapat terkait fraktur temporal serta robekan middle meningeal artery.",
      "Subdural hematoma berbentuk crescent karena darah terkumpul di antara dura dan arachnoid; sering akibat robekan bridging veins.",
      "Subarachnoid hemorrhage biasanya tampak darah di sulkus/cisterna dan sering terkait thunderclap headache; bukan gambaran crescent."
    ]
  },
  {
    "soal": "53. Meningitis dengan LCS keruh, bakteri diplokokus gram positif. Bakteri apa?",
    "opsi": [
      "A. Neisseria hemophilia",
      "B. Neisseria meningitidis",
      "C. Streptococcus pneumonia",
      "D. Streptococcus pyogenes",
      "E. Listeria"
    ],
    "jawabanBenar": 2,
    "pembahasan": "S. pneumoniae adalah diplokokus gram positif khas penyebab radang selaput otak (meningitis).",
    "pembahasanPilihan": [
      "Neisseria haemophilus bukan nama spesies penyebab meningitis; Haemophilus influenzae adalah bakteri berbeda dan gram negatif coccobacillus.",
      "N. meningitidis berbentuk diplokokus gram negatif, bukan gram positif.",
      "Streptococcus pneumoniae adalah diplokokus gram positif berkapsul dan merupakan penyebab penting meningitis komunitas.",
      "Streptococcus pyogenes adalah kokus gram positif beta-hemolitik yang terutama menyebabkan faringitis dan infeksi kulit.",
      "Listeria monocytogenes adalah basil gram positif intraseluler fakultatif, penting pada neonatus, lansia, dan imunokompromais."
    ]
  },
  {
    "soal": "54. GCS: tidak membuka mata (E1), suara mengerang (V2), tangan bergerak tidak melokalisir nyeri (fleksi/M4). Nilai GCS?",
    "opsi": [
      "A. E1V2M5",
      "B. E1V3M5",
      "C. E1V2M4",
      "D. E2V1M5",
      "E. E2V2M4"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Sesuai skor E1, V2, dan M4.",
    "pembahasanPilihan": [
      "E1V2M5 salah karena M5 berarti melokalisasi nyeri; kasus hanya fleksi abnormal M4.",
      "E1V3M5 salah karena suara mengerang adalah V2, bukan V3 (kata-kata tidak sesuai).",
      "E1V2M4 benar: mata tidak membuka, suara mengerang, dan menarik/fleksi terhadap nyeri sesuai skor 1+2+4=7.",
      "E2V1M5 salah karena mata hanya terbuka terhadap nyeri dan respons verbal bukan V1 jika mengerang.",
      "E2V2M4 salah karena E pada kasus adalah 1, bukan 2."
    ]
  },
  {
    "soal": "55. Kejang dgn tatapan kosong, menepuk-nepuk tangan berulang. Apa yang dimaksud dengan automatisme?",
    "opsi": [
      "A. Bangkitan kejang",
      "B. Tatapan kosong",
      "C. Mengompol",
      "D. Menepuk nepuk tangan berulang",
      "E. Pandangan gelap"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Automatisme adalah gerakan repetitif, tak bertujuan, tanpa disadari (seperti menepuk tangan atau mengecap bibir).",
    "pembahasanPilihan": [
      "Bangkitan kejang adalah aktivitas listrik abnormal; automatisme merupakan perilaku otomatis yang terjadi selama bangkitan.",
      "Tatapan kosong dapat terjadi pada absence seizure tetapi bukan definisi automatisme.",
      "Mengompol dapat menjadi manifestasi kejang, tetapi bukan automatisme.",
      "Menepuk-nepuk tangan berulang tanpa tujuan sadar merupakan contoh automatisme, terutama pada kejang fokal dengan gangguan kesadaran.",
      "Pandangan gelap lebih menggambarkan gangguan visual/presinkop, bukan automatisme."
    ]
  },
  {
    "soal": "56. Percobaan bunuh diri sayat tangan, sedih, tidak berguna selama 3 minggu. Diagnosis?",
    "opsi": [
      "A. Episode depresi minor",
      "B. Episode depresi berat dengan gejala psikotik",
      "C. Episode depresi sedang",
      "D. Episode depresi ringan",
      "E. Episode depresi berat tanpa gejala psikotik"
    ],
    "jawabanBenar": 4,
    "pembahasan": "Percobaan bunuh diri tergolong gejala berat. Tanpa halusinasi/waham = tanpa gejala psikotik.",
    "pembahasanPilihan": [
      "Depresi minor adalah istilah nonformal/subthreshold; bukan pilihan terbaik ketika kriteria episode berat terpenuhi.",
      "Gejala psikotik mensyaratkan waham/halusinasi; kasus menyatakan tidak ada gejala tersebut.",
      "Episode depresi sedang memiliki gejala lebih banyak/berat dibanding ringan tetapi belum memenuhi gambaran berat.",
      "Episode ringan biasanya gangguan fungsi lebih ringan dan gejala lebih sedikit.",
      "Episode depresi berat tanpa gejala psikotik sesuai dengan gejala depresi bermakna selama ≥2 minggu disertai perilaku menyakiti diri."
    ]
  },
  {
    "soal": "57. Kecurigaan epilepsi, radiologi dengan menggunakan medan magnet. Apa nama pemeriksaan tersebut?",
    "opsi": [
      "A. USG kepala",
      "B. CT Scan kepala",
      "C. MRI kepala",
      "D. Intravenous urography",
      "E. Foto polos"
    ],
    "jawabanBenar": 2,
    "pembahasan": "MRI (Magnetic Resonance Imaging) menggunakan medan magnetik dan gelombang radio.",
    "pembahasanPilihan": [
      "USG kepala tidak menjadi pemeriksaan pilihan untuk evaluasi epilepsi pada dewasa.",
      "CT dapat mendeteksi lesi struktural akut, tetapi tidak menggunakan medan magnet.",
      "MRI menggunakan medan magnet dan memberi resolusi tinggi untuk lesi struktural penyebab epilepsi.",
      "Intravenous urography adalah pemeriksaan sistem urinaria, bukan otak.",
      "Foto polos tengkorak tidak cukup sensitif untuk evaluasi etiologi epilepsi."
    ]
  },
  {
    "soal": "58. Percabangan yang menghubungkan antara a.cerebri anterior kiri dan kanan adalah?",
    "opsi": [
      "A. Cerebri media",
      "B. Communicans anterior",
      "C. Cerebri anterior",
      "D. Communicans posterior",
      "E. Cerebri posterior"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Arteri communicans anterior menjembatani kedua ACA di sirkulus Willisi.",
    "pembahasanPilihan": [
      "MCA bukan pembuluh yang menghubungkan kedua sisi sirkulasi anterior.",
      "Arteri communicans anterior menghubungkan ACA kiri dan kanan di bagian anterior circle of Willis.",
      "ACA adalah pembuluh yang dihubungkan oleh ACom; ACA sendiri bukan 'jembatan' antara keduanya.",
      "Communicans posterior menghubungkan ICA dengan PCA pada masing-masing sisi.",
      "PCA merupakan cabang terminal basilaris dan tidak menghubungkan kedua ACA."
    ]
  },
  {
    "soal": "59. N. cranialis untuk mempersarafi pengecapan rasa pahit (posterior lidah) adalah?",
    "opsi": [
      "A. N. glossopharyngeal",
      "B. N. trigeminal",
      "C. N. opticus",
      "D. N. abduscens",
      "E. N. fascialis"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Nervus IX (Glossopharyngeal) mensarafi pengecapan 1/3 posterior lidah tempat papila sirkumvalata merespons pahit.",
    "pembahasanPilihan": [
      "N. glossopharyngeus (IX) membawa sensasi rasa dari sepertiga posterior lidah, termasuk rasa pahit.",
      "N. trigeminus membawa sensasi umum anterior 2/3 lidah, seperti nyeri dan suhu, bukan taste.",
      "N. opticus membawa informasi visual.",
      "N. abducens menggerakkan lateral rectus.",
      "N. facialis membawa taste dari dua pertiga anterior lidah melalui chorda tympani."
    ]
  },
  {
    "soal": "60. Terapi antihipertensi propranolol. Bagaimana mekanisme kerja obat tersebut?",
    "opsi": [
      "A. Menghambat alfa-1",
      "B. Menghambat beta-2",
      "C. Menghambat alfa-2",
      "D. Menghambat beta-1 (dan beta 2)",
      "E. Merangsang beta-1"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Propranolol adalah agen beta-blocker non-selektif (menghambat reseptor Beta 1 dan 2).",
    "pembahasanPilihan": [
      "Propranolol bukan selektif alfa-1; blokade alfa-1 merupakan mekanisme obat seperti prazosin.",
      "Propranolol memblok beta-1 dan beta-2; beta-2 blockade dapat menyebabkan bronkospasme.",
      "Alfa-2 bukan target utama propranolol.",
      "Propranolol adalah non-selective beta blocker, menghambat beta-1 dan beta-2 sehingga menurunkan HR, kontraktilitas, dan renin.",
      "Merangsang beta-1 justru meningkatkan denyut/kontraktilitas; berlawanan dengan propranolol."
    ]
  },
  {
    "soal": "61. Pasien curiga stroke tanpa CT Scan, dinilai dengan Siriraj Stroke Score. SSS digunakan untuk?",
    "opsi": [
      "A. Membedakan stroke hemoragik vs iskemik klinis",
      "B. Menilai koma",
      "C. Menentukan dosis obat",
      "D. Menilai area lumpuh",
      "E. Skrining depresi"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Skor SSS digunakan khusus untuk menduga patologi stroke apakah perdarahan atau iskemik.",
    "pembahasanPilihan": [
      "Siriraj Stroke Score membantu membedakan stroke hemoragik dan nonhemoragik secara klinis ketika CT belum tersedia; bukan pengganti CT.",
      "SSS bukan alat utama untuk grading koma; GCS digunakan untuk tingkat kesadaran.",
      "SSS tidak menentukan dosis obat secara langsung.",
      "SSS tidak dirancang untuk memetakan luas area kelumpuhan.",
      "SSS bukan instrumen skrining depresi."
    ]
  },
  {
    "soal": "62. Pasien PTSD (hampir diperkosa), meringkuk, cemas. Terapi farmako yang tepat?",
    "opsi": [
      "A. SSRI (Sertraline / Fluoxetine)",
      "B. Antipsikotik tipikal",
      "C. Haloperidol",
      "D. Obat anti-epilepsi",
      "E. Litium"
    ],
    "jawabanBenar": 0,
    "pembahasan": "SSRI adalah lini pertama farmakoterapi standar untuk PTSD.",
    "pembahasanPilihan": [
      "PTSD dapat muncul setelah trauma seksual dengan re-experiencing/flashback, avoidance, hyperarousal, dan respons takut.",
      "Gangguan cemas menyeluruh ditandai kekhawatiran berlebihan menetap terhadap banyak hal, bukan terutama terikat trauma.",
      "Depresi dominan dengan mood rendah/anhedonia dan gejala neurovegetatif; riwayat trauma saja tidak cukup.",
      "Fobia spesifik adalah takut terhadap objek/situasi tertentu; kasus lebih sesuai dengan respons trauma kompleks.",
      "Serangan panik adalah episode mendadak berupa takut intens dengan gejala otonom; pada kasus ini ada konteks trauma dan gejala PTSD."
    ]
  },
  {
    "soal": "63. Kebas di ujung tangan kaki, DM 5 tahun. Diagnosis yang PALING TIDAK mungkin?",
    "opsi": [
      "A. Guillain Barre Syndrome",
      "B. Infark Thalamus",
      "C. Mononeuropati",
      "D. Polineuropati diabetikum",
      "E. Neuropati perifer"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Infark thalamus merusak sistem saraf pusat di otak, bukan menyebabkan kebas ujung jari pola stocking-glove.",
    "pembahasanPilihan": [
      "GBS biasanya onset akut/subakut dengan kelemahan ascending dan arefleksia; bukan pola kronis khas DM.",
      "Infark thalamus dapat menyebabkan sensory syndrome hemibody, bukan stocking-glove distal simetris.",
      "Mononeuropati dapat terjadi pada DM, tetapi tidak menjelaskan pola distal simetris secara umum.",
      "Polineuropati diabetikum sangat khas dengan kebas distal simetris pola stocking-glove.",
      "Neuropati perifer adalah istilah payung dan dapat mencakup neuropati diabetik."
    ]
  },
  {
    "soal": "64. Jatuh dari motor tanpa helm. CT Scan perdarahan temporal dextra cresent sign (bulan sabit). Diagnosis?",
    "opsi": [
      "A. Infark serebri",
      "B. Edema serebri",
      "C. Perdarahan subdural",
      "D. Perdarahan epidural",
      "E. Perdarahan subarachnoid"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Subdural Hematoma (SDH) identik dengan gambaran crescent sign pada CT Scan.",
    "pembahasanPilihan": [
      "Infark cerebri menunjukkan area hipodens karena iskemia, bukan koleksi darah berbentuk crescent.",
      "Abses serebri berupa lesi massa dengan edema dan biasanya ring enhancement; bukan hematoma crescent.",
      "Subdural hematoma berbentuk crescent karena darah terkumpul di antara dura dan arachnoid; sering akibat robekan bridging veins.",
      "Epidural hematoma khas berbentuk lentiform/bikonveks dan dapat terkait fraktur temporal serta robekan middle meningeal artery.",
      "Subarachnoid hemorrhage biasanya tampak darah di sulkus/cisterna dan sering terkait thunderclap headache; bukan gambaran crescent."
    ]
  },
  {
    "soal": "65. GCS: buka mata dgn nyeri (E2), suara mengerang (V2), fleksi dekortikasi (M3). Termasuk kondisi?",
    "opsi": [
      "A. Trauma kepala ringan",
      "B. Trauma kepala sedang",
      "C. Trauma kepala berat",
      "D. Coma sedang",
      "E. Coma dalam"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Total skor = 7. Kategori Cedera Kepala Berat (CKB) adalah GCS < 8.",
    "pembahasanPilihan": [
      "Trauma kepala ringan umumnya GCS 13-15; skor kasus jauh di bawah itu.",
      "Trauma kepala sedang GCS 9-12; skor kasus lebih rendah.",
      "Trauma kepala berat didefinisikan GCS ≤8; kasus E2V2M3 = 7.",
      "Coma sedang bukan klasifikasi standar yang menggantikan penilaian GCS pada trauma kepala.",
      "Coma dalam bukan istilah yang tepat untuk menentukan derajat trauma; gunakan GCS dan kondisi klinis."
    ]
  },
  {
    "soal": "66. Sel saraf motorik yang ada di kornu anterior medulla spinalis bermorfologi?",
    "opsi": [
      "A. Unipolar",
      "B. Bipolar",
      "C. Pseudounipolar",
      "D. Multipolar",
      "E. Tripolar"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Sebagian besar neuron eferen motorik adalah sel-sel bertipe multipolar (1 akson banyak dendrit).",
    "pembahasanPilihan": [
      "Neuron unipolar memiliki satu proses; bukan morfologi khas motor neuron kornu anterior.",
      "Neuron bipolar memiliki dua proses, misalnya pada retina/epitel olfaktorius tertentu.",
      "Neuron pseudounipolar khas ganglion sensorik spinal dan membawa aferen, bukan motor neuron.",
      "Motor neuron kornu anterior adalah neuron multipolar dengan banyak dendrit dan satu akson.",
      "Tripolar bukan klasifikasi morfologi neuron yang lazim digunakan dalam anatomi dasar."
    ]
  },
  {
    "soal": "67. Pasien terapi fenitoin, albumin 3.0 (rendah). Efek protein plasma rendah terhadap fenitoin?",
    "opsi": [
      "A. Toksisitas fenitoin meningkat",
      "B. Fenitoin gagal diserap",
      "C. Efektivitas menurun",
      "D. Ekskresi meningkat tajam",
      "E. Obat rusak di hati"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Pengikatan protein yang kurang (karena albumin rendah) menaikkan jumlah fenitoin bebas, berisiko intoksikasi.",
    "pembahasanPilihan": [
      "Hipoalbuminemia meningkatkan fraksi fenitoin bebas; kadar total dapat tampak rendah sementara kadar bebas/toksisitas meningkat.",
      "Fenitoin tetap dapat diserap; masalah utama adalah ikatan protein, bukan absorpsi usus.",
      "Efektivitas tidak otomatis menurun; efek farmakologis dapat meningkat karena fraksi bebas naik.",
      "Ekskresi tidak meningkat tajam hanya karena albumin rendah.",
      "Albumin rendah tidak membuat fenitoin rusak di hati."
    ]
  },
  {
    "soal": "68. Anak demam 3 hari, muntah proyektil, tanda peningkatan tekanan intrakranial?",
    "opsi": [
      "A. Muntah proyektil (menyemprot)",
      "B. Diare",
      "C. Berkeringat",
      "D. Nadi cepat",
      "E. Batuk"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Muntah mendadak tanpa rasa mual adalah salah satu indikator klasik peningkatan TIK (Tekanan Intra Kranial).",
    "pembahasanPilihan": [
      "Muntah proyektil dapat menjadi tanda peningkatan tekanan intrakranial, terutama bila disertai sakit kepala, papiledema, atau perubahan kesadaran.",
      "Diare bukan tanda khas peningkatan tekanan intrakranial.",
      "Berkeringat bersifat nonspesifik dan tidak menunjukkan ICP meningkat.",
      "Nadi cepat bukan tanda klasik; peningkatan ICP berat dapat menimbulkan Cushing triad berupa hipertensi, bradikardi, dan napas abnormal.",
      "Batuk tidak spesifik untuk peningkatan tekanan intrakranial."
    ]
  },
  {
    "soal": "69. Bola mata kiri selalu melihat ke medial (esotropia strabismus). Alat mana yang mengalami gangguan?",
    "opsi": [
      "A. N. Glossopharygeus",
      "B. N. Occulomatorius",
      "C. N. Opticus",
      "D. N. Trigeminus",
      "E. N. Abduscens (VI)"
    ],
    "jawabanBenar": 4,
    "pembahasan": "Lesi pada N. Abduscens melumpuhkan m. rektus lateralis sehingga bola mata tertarik kuat ke arah medial.",
    "pembahasanPilihan": [
      "N. trochlearis (IV) mempersarafi superior oblique; lesinya menyebabkan diplopia vertikal dan kesulitan melihat ke bawah-adduksi.",
      "N. abducens (VI) mempersarafi lateral rectus; lesinya membuat mata deviasi medial/esotropia karena lateral rectus lemah.",
      "N. oculomotorius (III) mempersarafi medial rectus dan sebagian besar otot ekstraokular; lesi lengkap biasanya menyebabkan mata down-and-out.",
      "N. opticus (II) membawa penglihatan aferen; lesinya tidak menyebabkan esotropia primer.",
      "N. facialis (VII) mempersarafi otot ekspresi wajah, bukan otot ekstraokular."
    ]
  },
  {
    "soal": "70. Benjolan kongenital lumbosakral berisi saraf (meningen & myelo) jika tidak diatasi bisa kelumpuhan?",
    "opsi": [
      "A. Meningochele",
      "B. Spina bifida oculata",
      "C. Meningitis",
      "D. Meningoensefalitis",
      "E. Myelomeningochele"
    ],
    "jawabanBenar": 4,
    "pembahasan": "Jika isi kantong berupa meningen tulang belakang bersama korda spinal, disebut myelomeningocele.",
    "pembahasanPilihan": [
      "Meningokel hanya berisi meninges dan cairan, tanpa jaringan saraf utama.",
      "Spina bifida occulta adalah defek tulang dengan kulit relatif utuh dan biasanya tanpa kantong saraf terbuka.",
      "Meningitis adalah infeksi meningen, bukan malformasi kongenital.",
      "Meningoensefalitis adalah inflamasi otak dan meningen, bukan kelainan tabung saraf.",
      "Myelomeningocele berisi meninges, cairan, dan jaringan medula/saraf; merupakan bentuk spina bifida terbuka yang dapat menyebabkan defisit neurologis."
    ]
  },
  {
    "soal": "71. Bangunan yang berfungsi untuk memori (konsolidasi jangka pendek ke jangka panjang)?",
    "opsi": [
      "A. Hippocampus",
      "B. Thalamus",
      "C. Corpus callous",
      "D. Gyrus cinguli",
      "E. Amigdala"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Hipokampus bertugas esensial dalam memproses memori baru.",
    "pembahasanPilihan": [
      "Hipokampus berperan penting dalam pembentukan dan konsolidasi memori deklaratif dari jangka pendek menjadi jangka panjang.",
      "Thalamus berfungsi sebagai relay sensorik dan berperan dalam beberapa sirkuit memori, tetapi bukan pusat konsolidasi utama.",
      "Corpus callosum menghubungkan kedua hemisfer dan memungkinkan komunikasi antarsisi.",
      "Gyrus cinguli berperan pada emosi, motivasi, perhatian, dan komponen memori.",
      "Amigdala terutama memproses emosi dan memperkuat memori emosional."
    ]
  },
  {
    "soal": "72. Maqasyid syariah menjaga akal?",
    "opsi": [
      "A. Hifzun aql",
      "B. Hifzun nafs",
      "C. Hifzun din",
      "D. Hifzun mal",
      "E. Hifzun nasl"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Hifdz al-aql berarti pelestarian/penjagaan terhadap akal.",
    "pembahasanPilihan": [
      "Hifz al-'aql berarti menjaga akal/intelek; salah satu tujuan utama maqashid al-syari'ah.",
      "Hifz al-nafs berarti menjaga jiwa/kehidupan.",
      "Hifz al-din berarti menjaga agama.",
      "Hifz al-mal berarti menjaga harta.",
      "Hifz al-nasl berarti menjaga keturunan."
    ]
  },
  {
    "soal": "73. Pilihan obat pelumpuh otot untuk memfasilitasi intubasi cepat RSI (Rapid Sequence Intubation)?",
    "opsi": [
      "A. Atracurium",
      "B. Vecuronium",
      "C. Rocuronium (atau Suksinilkolin)",
      "D. Sulfentanyn",
      "E. Propofol"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Pelumpuh otot dengan mula kerja paling cepat direkomendasikan untuk intubasi darurat.",
    "pembahasanPilihan": [
      "Atracurium bekerja lebih lambat dan umumnya bukan pilihan utama untuk RSI.",
      "Vecuronium efektif sebagai relaksan, tetapi onsetnya lebih lambat daripada rocuronium untuk RSI.",
      "Rocuronium memiliki onset cepat; suksinilkolin juga cepat dan merupakan pilihan klasik bila tidak kontraindikasi.",
      "Sufentanil adalah opioid analgesik, bukan obat pelumpuh otot.",
      "Propofol adalah agen induksi anestesi, bukan neuromuscular blocker."
    ]
  },
  {
    "soal": "74. Kakek tidak bisa membedakan sensasi somatosensori separuh tubuh, bagian organ apa yg kena?",
    "opsi": [
      "A. Metthalamus",
      "B. Subtahalmus",
      "C. Epithalamus",
      "D. Thalamus",
      "E. Hipothalamus"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Thalamus merupakan pusat pemancar untuk nyeri, suhu, dan semua jaras somatosensorik.",
    "pembahasanPilihan": [
      "Hipotalamus mengatur homeostasis dan fungsi endokrin/otonom, bukan relay utama sensasi sadar.",
      "Metathalamus terutama mencakup corpus geniculatum lateral/medial untuk visual dan auditorik.",
      "Epithalamus berkaitan dengan habenula dan pineal, bukan relay utama semua sensasi somatosensorik.",
      "Thalamus adalah relay utama hampir semua sensasi somatosensorik menuju korteks, kecuali olfaksi.",
      "Subthalamus merupakan bagian sirkuit basal ganglia, bukan pusat relay sensorik utama."
    ]
  },
  {
    "soal": "75. Struktur yang berperan sentral pada sistem gerak motorik ekstrapiramidal?",
    "opsi": [
      "A. Corpus striatum, nukleus lentiformis, serebelum",
      "B. Korteks piramidal motor",
      "C. Hipokampus",
      "D. Saraf perifer tepi",
      "E. Medulla spinalis posterior"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Sistem ekstrapiramidal sangat bergantung pada ganglia basalis (termasuk corpus striatum) untuk koordinasi otot halus.",
    "pembahasanPilihan": [
      "Basal ganglia/corpus striatum dan nukleus lentiformis merupakan pusat utama sirkuit ekstrapiramidal; serebelum juga memodulasi koordinasi gerak.",
      "Korteks motorik piramidal terutama menggerakkan jalur corticospinal/piramidal.",
      "Hipokampus berperan pada memori, bukan pusat utama kontrol gerak ekstrapiramidal.",
      "Saraf perifer membawa output motorik ke otot tetapi bukan pusat ekstrapiramidal.",
      "Kolumna posterior medula spinalis terutama membawa sensasi propriosepsi, vibrasi, dan diskriminasi."
    ]
  },
  {
    "soal": "76. Kekurangan dari obat analgesik opioid dosis tinggi adalah efek toksiknya berupa?",
    "opsi": [
      "A. Depresi nafas berat",
      "B. Retensi urin",
      "C. Mual muntah ringan",
      "D. Alergi kulit",
      "E. Diare kronis"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Efek toksik paling berbahaya dari golongan obat opioid adalah mendepresi pusat pernapasan di medula oblongata.",
    "pembahasanPilihan": [
      "Depresi napas adalah toksisitas opioid yang paling mengancam nyawa, terutama pada dosis tinggi atau kombinasi depresan SSP.",
      "Retensi urin memang dapat terjadi akibat inhibisi parasimpatis kandung kemih, tetapi bukan efek toksik paling berbahaya.",
      "Mual muntah dapat terjadi, terutama pada awal terapi, tetapi umumnya bukan toksisitas paling serius.",
      "Ruam/alergi dapat terjadi namun bukan efek toksik khas yang paling penting pada overdosis opioid.",
      "Diare bukan efek khas; opioid justru menyebabkan konstipasi karena menurunkan motilitas usus."
    ]
  },
  {
    "soal": "77. Cortex kornu anterior medulla spinalis memiliki neuron bertipe eferen. Apa namanya?",
    "opsi": [
      "A. Sel purkinje",
      "B. Sel pyramid",
      "C. Sel ganglion",
      "D. Sel saraf motoris",
      "E. Sel saraf sensoris"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Neuron di sisi depan (anterior) korda spinalis adalah neuron motorik (Lower Motor Neurons).",
    "pembahasanPilihan": [
      "Sel Purkinje adalah neuron inhibitorik utama korteks serebelum.",
      "Sel piramidal terutama ditemukan di korteks serebri dan merupakan neuron proyeksi utama jalur corticospinal.",
      "Sel ganglion adalah istilah umum untuk badan sel di ganglion; bukan nama spesifik motor neuron kornu anterior.",
      "Neuron motorik alfa/gamma di kornu anterior adalah neuron eferen multipolar yang menginervasi otot rangka.",
      "Neuron sensorik primer berada di dorsal root ganglion dan bersifat pseudounipolar."
    ]
  },
  {
    "soal": "78. Stroke haemoragik gyrus cinguli. Nama pembuluh darah yang pecah?",
    "opsi": [
      "A. A. communicans anterior",
      "B. A. Communicans posterior",
      "C. A. cerebri anterior",
      "D. A. cerebri media",
      "E. A. cerebri posterior"
    ],
    "jawabanBenar": 2,
    "pembahasan": "A. Cerebri Anterior (ACA) mendistribusikan darah ke sisi medial lobus frontoparietal otak.",
    "pembahasanPilihan": [
      "Arteri communicans anterior menghubungkan kedua ACA, tetapi bukan pembuluh utama yang langsung memperdarahi gyrus cinguli.",
      "Arteri communicans posterior menghubungkan sirkulasi anterior dan posterior; bukan pemasok utama gyrus cinguli.",
      "PCA terutama memperdarahi lobus oksipital dan bagian medial temporal; bukan pemasok utama gyrus cinguli.",
      "MCA terutama memperdarahi permukaan lateral hemisfer, bukan wilayah medial cinguli.",
      "ACA memperdarahi permukaan medial hemisfer, termasuk banyak bagian gyrus cinguli."
    ]
  },
  {
    "soal": "79. Pasien sesak diberikan aminofilin cepat, malah terjadi kejang akut. Obat lini pertama untuk hentikan kejang?",
    "opsi": [
      "A. Propofol",
      "B. Diazepam intravena",
      "C. Atropin sulfat",
      "D. Magnesium",
      "E. Valproat oral"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Kejang aktif di IGD segera ditangani dengan agen abortif utama seperti Diazepam IV.",
    "pembahasanPilihan": [
      "Propofol dapat digunakan sebagai terapi anestetik/refrakter pada status tertentu, tetapi bukan lini pertama kejang akut umum di luar setting khusus.",
      "Diazepam IV adalah benzodiazepin yang efektif untuk menghentikan kejang akut; pada status epileptikus benzodiazepin merupakan lini awal.",
      "Atropin adalah antimuskarinik untuk bradikardia/sekresi, bukan antikejang.",
      "Magnesium adalah terapi spesifik kejang pada eklampsia, bukan pilihan umum untuk kejang akibat aminofilin.",
      "Valproat oral bukan pilihan untuk menghentikan kejang akut karena onset oral tidak sesuai keadaan emergensi."
    ]
  },
  {
    "soal": "80. Arti Ulul Albab dalam Alquran?",
    "opsi": [
      "A. Orang yang berakal",
      "B. Orang yang beriman",
      "C. Orang yang bertakwa",
      "D. Orang yang sabar",
      "E. Orang mukmin"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Mereka yang memikirkan dan mengambil hikmah menggunakan akalnya (orang yang berakal).",
    "pembahasanPilihan": [
      "Fasik berarti keluar dari ketaatan atau melakukan kefasikan; jelas bukan makna Ulul Albab.",
      "Beriman berarti percaya kepada Allah dan ajaran-Nya; maknanya tidak sama persis dengan istilah Ulul Albab.",
      "Bertakwa berarti menjalankan perintah dan menjauhi larangan Allah; bukan arti literal Ulul Albab.",
      "Saleh berarti orang yang baik/taat; merupakan karakter, bukan terjemahan khusus Ulul Albab.",
      "Ulul Albab merujuk pada orang-orang yang menggunakan akal/pikiran yang jernih dan mampu mengambil pelajaran."
    ]
  },
  {
    "soal": "81. Pasien demam malam, nyeri kepala, riwayat TB putus obat. Kaku kuduk (+). Hasil CSS pendukung diagnosis?",
    "opsi": [
      "A. Ditemukan pellicle (cobweb sign)",
      "B. Tekanan cairan normal",
      "C. Protein normal",
      "D. Glukosa sangat tinggi",
      "E. Cairan sangat jernih"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Meningitis TB khas memiliki bentukan jaring (pellicle/cobweb) apabila tabung cairan otak didiamkan.",
    "pembahasanPilihan": [
      "Pada meningitis TB, LCS dapat menunjukkan cobweb clot/pellicle setelah didiamkan karena kadar protein tinggi; juga biasanya limfositosis dan glukosa rendah.",
      "Tekanan pembukaan dapat meningkat pada meningitis TB; jadi tidak selalu normal.",
      "Protein LCS biasanya meningkat pada meningitis TB, bukan normal.",
      "Glukosa LCS biasanya menurun, bukan sangat tinggi.",
      "LCS dapat tampak jernih tetapi tetap abnormal secara biokimia; 'jernih' tidak menyingkirkan meningitis TB."
    ]
  },
  {
    "soal": "82. Massa di kanalis spinalis torakolumbal yang berada tepat di bawah duramater namun di luar medula spinalis?",
    "opsi": [
      "A. Ekstra dural",
      "B. Ekstra dural ekstra medular",
      "C. Intra dural",
      "D. Intra dural ekstra medular",
      "E. Intra dular intra medular"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Tumor meningen punggung (seperti meningioma) secara tipikal berlokasi intradural ekstramedular.",
    "pembahasanPilihan": [
      "Ekstradural berarti massa berada di luar dura; berbeda dengan gambaran yang disebut dalam soal.",
      "Ekstradural ekstramedular berarti di luar dura dan di luar medula; tidak sesuai dengan massa tepat di bawah dura.",
      "Intradural saja belum menentukan apakah massa berada di dalam atau di luar medula.",
      "Intradural ekstramedular berarti di bawah dura tetapi di luar medula spinalis; meningioma adalah contoh klasik.",
      "Intradural intramedular berarti massa berada di dalam medula spinalis, bukan di luar medula."
    ]
  },
  {
    "soal": "83. Efek samping opioid jangka panjang yang paling toleransinya lambat berkembang (selalu ada)?",
    "opsi": [
      "A. Bradikardi",
      "B. Hipotensi",
      "C. Defekasi",
      "D. Konstipasi (sembelit)",
      "E. Sedasi"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Pasien pengguna opioid rutin nyaris tidak mengembangkan toleransi terhadap miosis (pupil mengecil) dan konstipasi.",
    "pembahasanPilihan": [
      "Bradikardia dapat terjadi pada opioid akut, tetapi toleransi terhadap beberapa efek kardiovaskular dapat berkembang.",
      "Hipotensi dapat terjadi karena vasodilatasi, terutama pada dosis tinggi, tetapi bukan efek dengan toleransi paling lambat.",
      "Opioid justru menyebabkan konstipasi; defekasi meningkat bukan efek khas.",
      "Konstipasi sangat sedikit mengalami toleransi sehingga sering menetap selama penggunaan opioid kronis.",
      "Sedasi dapat mengalami toleransi relatif terhadap waktu pada sebagian pasien."
    ]
  },
  {
    "soal": "84. Yang termasuk panel pemeriksaan KIMIA likuor serebrospinal adalah?",
    "opsi": [
      "A. Pemeriksaan protein albumin dan glukosa",
      "B. Pemeriksaan hitung jenis sel",
      "C. Pemeriksaan hitung jumlah sel total",
      "D. Pemeriksaan warna fisik",
      "E. Pemeriksaan kultur kuman"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Uji protein dan glukosa termasuk area biokimia cairan tubuh, sedangkan sel darah masuk hematologi/sitologi.",
    "pembahasanPilihan": [
      "Protein dan glukosa merupakan parameter biokimia utama LCS bersama beberapa analit lain; keduanya membantu membedakan infeksi tertentu.",
      "Hitung jenis sel termasuk analisis sitologi/hematologi LCS, bukan panel kimia.",
      "Jumlah sel total termasuk pemeriksaan sitologi/seluler.",
      "Warna dan kejernihan adalah pemeriksaan makroskopik/fisik.",
      "Kultur kuman adalah pemeriksaan mikrobiologi."
    ]
  },
  {
    "soal": "85. Pada medulla spinalis, neuron multipolar (tanduk anterior) fungsinya mengirim sinyal. Apakah nama neuron ini?",
    "opsi": [
      "A. Sel saraf motoris",
      "B. Sel ganglion",
      "C. Sel purkinje",
      "D. Sel pyramid",
      "E. Sel saraf sensoris"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Tanduk ventral (anterior horn) berisi motor neuron.",
    "pembahasanPilihan": [
      "Neuron motorik alfa/gamma di kornu anterior adalah neuron eferen multipolar yang menginervasi otot rangka.",
      "Neuron sensorik primer berada di dorsal root ganglion dan bersifat pseudounipolar.",
      "Sel Purkinje adalah neuron inhibitorik utama korteks serebelum.",
      "Sel ganglion adalah istilah umum untuk badan sel di ganglion; bukan nama spesifik motor neuron kornu anterior.",
      "Sel piramidal terutama ditemukan di korteks serebri dan merupakan neuron proyeksi utama jalur corticospinal."
    ]
  },
  {
    "soal": "86. Anestesi lokal epidural dengan ditambahkan ajuvan opioid morfin akan menghasilkan efek apa?",
    "opsi": [
      "Memperpanjang efek analgesia epidural dan memungkinkan kebutuhan anestetik lokal lebih rendah",
      "B. Penurunan tekanan darah cepat",
      "C. Peningkatan suhu tubuh",
      "D. Peningkatan GFR",
      "E. Blokade saraf motorik total"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Morfin epidural sebagai adjuvan memberikan analgesia segmental yang lebih lama melalui reseptor opioid spinal, sehingga kebutuhan anestetik lokal dapat dikurangi. Ini bukan berarti morfin memperpanjang kerja anestetik lokal di SSP.",
    "pembahasanPilihan": [
      "BENAR. Morfin neuraksial memperpanjang analgesia melalui reseptor opioid di medula spinalis dan dapat mengurangi kebutuhan anestetik lokal.",
      "SALAH. Hipotensi dapat terjadi akibat blok simpatis dari anestetik lokal, tetapi bukan efek utama yang dicari dari penambahan morfin sebagai adjuvan.",
      "SALAH. Morfin epidural tidak ditujukan untuk meningkatkan suhu tubuh; efek samping yang lebih relevan justru pruritus, mual, retensi urin, dan depresi napas terlambat.",
      "SALAH. Tidak ada alasan fisiologis morfin epidural meningkatkan GFR; perubahan tekanan darah atau retensi urin justru dapat mengganggu fungsi ginjal secara tidak langsung.",
      "SALAH. Morfin adalah adjuvan analgesik, bukan obat yang menyebabkan blok motorik total; blok motorik terutama ditentukan oleh anestetik lokal dan konsentrasinya."
    ]
  },
  {
    "soal": "87. Neurotransmitter di celah sinaps harus dihilangkan agar fungsi kembali normal, bagaimana mekanismenya?",
    "opsi": [
      "A. Di-reuptake ke vesikel presinaps (reuptake inhibitor SSRI) atau dipecah enzim",
      "B. Diserap semua postsinaps",
      "C. Dibiarkan",
      "D. Diproduksi dendrit",
      "E. Selalu berada di celah"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Aktivitas sinaps diregulasi dengan membuang sisa neurotransmitter via daur ulang (reuptake) maupun pemecahan kimiawi.",
    "pembahasanPilihan": [
      "Neurotransmiter diakhiri melalui reuptake, degradasi enzimatik, atau difusi; mekanisme berbeda menurut neurotransmiter.",
      "Neurotransmiter tidak semuanya diserap oleh neuron postsinaps; sebagian besar dibersihkan dari celah sinaps melalui mekanisme terminasi.",
      "Neurotransmiter tidak dibiarkan terus berada di celah karena akan mempertahankan sinyal.",
      "Neurotransmiter umumnya dilepas dari terminal presinaps, bukan diproduksi oleh dendrit postsinaps untuk mengakhiri sinyal.",
      "Jika neurotransmiter menetap di celah, reseptor akan terus teraktivasi; karena itu harus ada mekanisme terminasi."
    ]
  },
  {
    "soal": "88. Kesadaran turun, pelihara merpati, meningitis. Tinta india ink positif sel ragi polisakarida kapsul lebar?",
    "opsi": [
      "A. Histoplasma capsulatumb",
      "B. Blastomyces dermatitidis",
      "C. Coccidiodes Immitis",
      "D. Aspergillus Fumigatus",
      "E. Cryptococcus neoformans"
    ],
    "jawabanBenar": 4,
    "pembahasan": "Jamur berkapsul tebal penyebab meningitis yang dihubungkan dengan paparan merpati (guano) adalah C. neoformans.",
    "pembahasanPilihan": [
      "Histoplasma dapat terkait paparan kotoran burung/kelelawar dan menyebabkan penyakit paru/diseminata; bukan gambaran tinta India positif.",
      "Blastomyces adalah jamur dimorfik dengan broad-based budding dan dapat menyebabkan penyakit paru/kulit, bukan meningitis berkapsul khas.",
      "Coccidioides membentuk spherules berisi endospora dan terutama menyebabkan infeksi paru; bukan jamur berkapsul dengan India ink.",
      "Aspergillus memiliki hifa bersepta dengan acute-angle branching dan dapat menyebabkan penyakit invasif pada imunokompromais; bukan jamur berkapsul klasik.",
      "Cryptococcus neoformans memiliki kapsul polisakarida tebal, dapat positif India ink, dan berkaitan dengan paparan kotoran merpati serta meningitis."
    ]
  },
  {
    "soal": "89. Perempuan 33 obesitas sangat masif, merasa tidak pernah kenyang (pusat lapar tak terhambat). Struktur yang rusak?",
    "opsi": [
      "A. Hypothalamus",
      "B. Hypocampus",
      "C. Gyrus post centralis",
      "D. Ganglia basalis",
      "E. Tectum"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Hipotalamus menampung pusat selera/satiety (nukleus ventromedial & area hipotalamik lateral).",
    "pembahasanPilihan": [
      "Hipotalamus mengatur homeostasis energi; nukleus ventromedial berperan pada satiety dan area lateral pada hunger.",
      "Hipokampus terutama untuk pembentukan memori dan navigasi spasial, bukan pusat utama rasa kenyang.",
      "Gyrus postcentralis adalah korteks somatosensorik primer.",
      "Ganglia basalis terutama memodulasi gerak dan pembelajaran kebiasaan, bukan pusat utama regulasi lapar.",
      "Tectum mesensefalon berperan pada refleks visual/auditorik, bukan pusat nafsu makan."
    ]
  },
  {
    "soal": "90. Wanita 24 thn sayat pergelangan. Depresi mayor. Tatalaksana aman yang tepat?",
    "opsi": [
      "A. Propanolol",
      "B. Trihexilperidyl",
      "C. Diazepam",
      "D. Zolpidem",
      "E. Antidepresan SSRI (Sertraline/Escitalopram)"
    ],
    "jawabanBenar": 4,
    "pembahasan": "SSRI memiliki batas rasio terapeutik paling aman dan efektif sebagai lini pertama depresi dan pencegah bunuh diri.",
    "pembahasanPilihan": [
      "Propranolol dapat mengurangi gejala adrenergik tertentu tetapi bukan terapi inti episode depresi mayor dengan risiko bunuh diri.",
      "Trihexyphenidyl adalah antikolinergik untuk gejala Parkinson dan dapat memperburuk fungsi kognitif; bukan terapi depresi.",
      "Diazepam bukan terapi utama depresi mayor dan berisiko sedasi serta ketergantungan.",
      "Zolpidem ditujukan untuk insomnia dan tidak mengobati gangguan depresi mayor.",
      "SSRI seperti sertraline/escitalopram adalah lini pertama depresi mayor; pada suicidal behavior perlu safety planning, monitoring ketat, dan evaluasi psikiatri."
    ]
  },
  {
    "soal": "91. Tangan tungkai kanan tidak bergerak. CT Scan: ada lesi hipodens (gelap) di thalamus sinistra. Mengapa?",
    "opsi": [
      "A. Infark (Iskemik serebri)",
      "B. Tumor intra cerebral",
      "C. Stroke hemoragik",
      "D. Perdarahan subdural",
      "E. Meningitis"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Bentukan lesi hipodens (menghitam) menandai infark atau kurangnya perfusi darah (stroke non-hemoragik).",
    "pembahasanPilihan": [
      "Lesi hipodens pada CT dalam konteks defisit fokal paling sesuai dengan infark iskemik; lesi thalamus kiri dapat menyebabkan gangguan motorik/sensorik kontralateral.",
      "Tumor dapat tampak hipodens, tetapi biasanya merupakan proses massa/subakut dan tidak langsung menjelaskan gambaran stroke akut.",
      "Perdarahan akut biasanya hiperdens pada CT, sehingga kurang sesuai dengan lesi hipodens.",
      "Subdural hematoma biasanya berupa koleksi crescent sepanjang permukaan hemisfer, bukan fokus di thalamus.",
      "Meningitis dapat menyebabkan komplikasi neurologis tetapi bukan diagnosis utama dari lesi hipodens thalamus pada kasus ini."
    ]
  },
  {
    "soal": "92. Sering meringkuk tengah malam, ketakutan derap kaki, flashback 6 bulan lalu hampir diperkosa. Diagnosis?",
    "opsi": [
      "A. Reaksi stress akut",
      "B. Gangguan stress pasca trauma (PTSD)",
      "C. Fobia social",
      "D. Agorafobia",
      "E. Depresi mayor"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Trauma mengancam eksistensi tubuh diikuti kilas balik yang menetap lebih dari sebulan.",
    "pembahasanPilihan": [
      "Serangan panik adalah episode mendadak berupa takut intens dengan gejala otonom; pada kasus ini ada konteks trauma dan gejala PTSD.",
      "PTSD dapat muncul setelah trauma seksual dengan re-experiencing/flashback, avoidance, hyperarousal, dan respons takut.",
      "Fobia spesifik adalah takut terhadap objek/situasi tertentu; kasus lebih sesuai dengan respons trauma kompleks.",
      "Gangguan cemas menyeluruh ditandai kekhawatiran berlebihan menetap terhadap banyak hal, bukan terutama terikat trauma.",
      "Depresi dominan dengan mood rendah/anhedonia dan gejala neurovegetatif; riwayat trauma saja tidak cukup."
    ]
  },
  {
    "soal": "93. Kejang tetanus (trismus) dari paku kotor. Yang TIDAK TEPAT dari tatalaksana di bawah ini?",
    "opsi": [
      "A. Penisilin G dan metronidazol",
      "B. Debridement dan penjahitan ulang rapat-rapat",
      "C. Pemberian antikejang diazepam",
      "D. Pemberian HTIG 500 IU",
      "E. Observasi ruang redup"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Luka gigitan kotor, tusuk paku berkarat, tidak boleh dijahit rapat primer untuk mencegah bakteri anaerob berkembang.",
    "pembahasanPilihan": [
      "Metronidazol adalah pilihan antimikroba yang baik; penisilin G juga secara historis digunakan.",
      "Luka tetanus harus dibersihkan dan didebridement; luka tusuk kotor tidak dianjurkan dijahit rapat primer karena menjebak kondisi anaerob.",
      "Diazepam/benzodiazepin membantu mengontrol spasme dan kekakuan.",
      "HTIG menetralkan toksin yang masih bebas; dosis mengikuti pedoman lokal, sehingga angka dosis harus disesuaikan protokol.",
      "Pasien tetanus berat memerlukan monitoring intensif karena spasme dapat mengganggu napas dan otonom."
    ]
  },
  {
    "soal": "94. Penjaga kantin mengeluarkan kemaluannya terutama ke siswi. Diagnosis paraphilia?",
    "opsi": [
      "A. Voyeurisme",
      "B. Transvestisme",
      "C. Fethisme",
      "D. Pedofilia",
      "E. Eksibionisme"
    ],
    "jawabanBenar": 4,
    "pembahasan": "Dorongan paksaan menampilkan alat kelamin ke publik (ekshibisionisme).",
    "pembahasanPilihan": [
      "Voyeurisme adalah memperoleh rangsangan dengan mengintip orang lain tanpa sepengetahuan mereka, terutama saat telanjang atau aktivitas seksual.",
      "Transvestic disorder berkaitan dengan rangsangan seksual dari cross-dressing, bukan mempertontonkan genital kepada orang lain.",
      "Fetishistic disorder melibatkan objek mati atau bagian tubuh tertentu sebagai fokus rangsangan seksual.",
      "Pedofilia adalah ketertarikan seksual persisten terhadap anak prepubertas; tidak identik dengan tindakan memamerkan genital.",
      "Exhibitionistic disorder adalah mempertontonkan genital kepada orang yang tidak mengharapkannya; pola soal paling sesuai."
    ]
  },
  {
    "soal": "95. Seseorang gangguan sulit tidur murni (insomnia primer) 5 bulan. Tatalaksana pereda singkat?",
    "opsi": [
      "A. Sertralin",
      "B. Carbamazepin",
      "C. Asam valproa",
      "D. Etosuksimide",
      "E. Diazepam / Gol. Sedatif Hipnotik"
    ],
    "jawabanBenar": 4,
    "pembahasan": "Obat golongan sedatif hipnotik (benzodiazepine like drug) dapat merangsang induksi kantuk.",
    "pembahasanPilihan": [
      "Sertraline adalah antidepresan SSRI dan bukan hipnotik untuk pereda insomnia jangka pendek.",
      "Carbamazepine adalah antikejang/stabilisator mood, bukan obat utama insomnia.",
      "Asam valproat adalah antikejang/stabilisator mood, bukan hipnotik.",
      "Etosuksimid adalah terapi absence seizure, bukan terapi insomnia.",
      "Benzodiazepin seperti diazepam dapat mempercepat tidur dalam jangka pendek, tetapi berisiko toleransi, ketergantungan, dan gangguan kognitif; untuk insomnia kronis CBT-I lebih diutamakan."
    ],
    "catatanKlinis": "⚠️ Catatan: CBT-I adalah terapi lini pertama insomnia kronis. Benzodiazepin bukan pilihan ideal untuk penggunaan rutin; pada opsi arsip, golongan sedatif-hipnotik adalah jawaban yang dimaksud untuk pereda singkat."
  },
  {
    "soal": "96. Mikroskopis bentuk jamur polisakarida kapsul, vektor kotoran merpati, pasien demam kejang (meningitis). Patogen?",
    "opsi": [
      "A. Histoplasma capsulatum",
      "B. Blastomyces dermatitidis",
      "C. Coccidiodes Immitis",
      "D. Aspergillus Fumigatus",
      "E. Cryptococcus neoformans"
    ],
    "jawabanBenar": 4,
    "pembahasan": "Vektor merpati + jamur berkapsul (tinta india) khas = C. neoformans.",
    "pembahasanPilihan": [
      "Histoplasma dapat terkait paparan kotoran burung/kelelawar dan menyebabkan penyakit paru/diseminata; bukan gambaran tinta India positif.",
      "Blastomyces adalah jamur dimorfik dengan broad-based budding dan dapat menyebabkan penyakit paru/kulit, bukan meningitis berkapsul khas.",
      "Coccidioides membentuk spherules berisi endospora dan terutama menyebabkan infeksi paru; bukan jamur berkapsul dengan India ink.",
      "Aspergillus memiliki hifa bersepta dengan acute-angle branching dan dapat menyebabkan penyakit invasif pada imunokompromais; bukan jamur berkapsul klasik.",
      "Cryptococcus neoformans memiliki kapsul polisakarida tebal, dapat positif India ink, dan berkaitan dengan paparan kotoran merpati serta meningitis."
    ]
  },
  {
    "soal": "97. Analgesik opioid campuran pentazocin dipilih karena toleransi respirasi baik, apa kekurangan obat ini dibandingkan morfin?",
    "opsi": [
      "A. Lebih mudah timbul depresi nafas pada agonis murni",
      "B. Lebih cepat timbulnya gejala putus obat (withdrawal precipitator)",
      "C. Tidak digunakan pada asma",
      "D. Dosis terapi lebih besar",
      "E. Menyebabkan retensi urin"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Agonis-antagonis parsial dapat memicu gejala withdrawal drastis jika digunakan bersamaan dengan opioid murni.",
    "pembahasanPilihan": [
      "Pentazocine adalah agonis-antagonis opioid; depresi napas cenderung memiliki ceiling effect dibanding agonis μ murni.",
      "Gejala withdrawal dapat dipicu pada pasien yang sudah bergantung pada agonis μ karena efek antagonis parsial pentazocine.",
      "Pentazocine tetap dapat menyebabkan depresi napas dan bukan otomatis kontraindikasi hanya karena pasien asma.",
      "Pentazocine umumnya memiliki potensi analgesik lebih rendah daripada morfin; tetapi 'dosis terapi lebih besar' bukan kekurangan utama yang ditanyakan.",
      "Retensi urin memang dapat terjadi pada opioid, termasuk pentazocine, sehingga bukan kekurangan khas dibanding morfin."
    ]
  },
  {
    "soal": "98. Penyakit Parkinson, gerak otot tertahan dan tak terkontrol. Neurotransmitter gerakan ekstrapiramidal apa yang turun?",
    "opsi": [
      "A. Histamin",
      "B. Dopamin",
      "C. GABA",
      "D. Serotonin",
      "E. Glisin"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Neurotransmiter dopamin dari pars kompakta nigra ke striatum melemah.",
    "pembahasanPilihan": [
      "Histamin berperan pada alergi, inflamasi, dan regulasi tidur, bukan defisit utama Parkinson.",
      "Dopamin nigrostriatal dari substantia nigra pars compacta menurun pada Parkinson sehingga aktivitas jalur motorik basal ganglia terganggu.",
      "GABA penting dalam sirkuit basal ganglia, tetapi bukan neurotransmiter yang terutama mengalami defisit pada Parkinson.",
      "Serotonin berperan pada mood dan fungsi otonom, bukan neurotransmiter utama yang turun pada Parkinson.",
      "Glisin adalah inhibitorik utama di medula spinalis/batang otak, bukan neurotransmiter nigrostriatal utama."
    ]
  },
  {
    "soal": "99. Stroke yang menjepit area gyrus frontalis inferior (area Broca). Area fungsional ini berada di lobus mana?",
    "opsi": [
      "A. Lobus Occipitalis",
      "B. Lobus Frontalis",
      "C. Lobus Parietalis",
      "D. Lobus Limbicus",
      "E. Lobus Temporalis"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Area Broca untuk memproduksi gerakan wicara terletak di Lobus Frontal.",
    "pembahasanPilihan": [
      "Lobus oksipital terutama memproses penglihatan.",
      "Area Broca berada pada gyrus frontalis inferior hemisfer dominan, sehingga termasuk lobus frontalis.",
      "Lobus parietalis terutama berperan pada sensasi somatik dan integrasi spasial.",
      "Lobus limbik mencakup jaringan yang terkait emosi dan memori; bukan lokasi utama Broca.",
      "Lobus temporalis penting untuk pendengaran dan pemahaman bahasa, terutama area Wernicke."
    ]
  },
  {
    "soal": "100. Pemeriksaan panel biokimia Cairan LCS",
    "opsi": [
      "A. Pemeriksaan Warna fisik",
      "B. Pemeriksaan hitung jenis leukosit",
      "C. Pemeriksaan jumlah sel (sitologi)",
      "D. Pemeriksaan protein albumin dan glukosa",
      "E. Pemeriksaan kultur kuman"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Biokimia (Kimia Klinik) standar cairan otak digunakan untuk mengecek rasio Glukosa dan Total Protein/Albumin.",
    "pembahasanPilihan": [
      "Warna dan kejernihan adalah pemeriksaan makroskopik/fisik.",
      "Hitung jenis sel termasuk analisis sitologi/hematologi LCS, bukan panel kimia.",
      "Jumlah sel total termasuk pemeriksaan sitologi/seluler.",
      "Protein dan glukosa merupakan parameter biokimia utama LCS bersama beberapa analit lain; keduanya membantu membedakan infeksi tertentu.",
      "Kultur kuman adalah pemeriksaan mikrobiologi."
    ]
  }
];

const $=id=>document.getElementById(id);
const APP_VERSION="v16.0";
const KEY={
  theme:"gaster_v8_theme",
  book:"gaster_v8_bookmarks",
  hist:"gaster_v8_history",
  session:"gaster_v8_quiz_session",
  sound:"gaster_v8_sound",
  wrong:"gaster_v8_wrong_stats",
  goal:"gaster_v9_daily_goal",
  xp:"gaster_v11_xp",
  gender:"gaster_v15_gender", name:"gaster_v16_character_name", gear:"gaster_v15_gear_inventory", gearCycle:"gaster_v15_gear_cycle", gearCount:"gaster_v15_questions_count"
};
let selectedCount=20, selectedBank="utama", quiz=[], pos=0, score=0, answered=false;
let selectedAnswer=null, streak=0, sessionStart=0, timerSeconds=0, timerDuration=0, timerDeadline=0, timerId=null;
let quizMode="study", flagged=new Set();
let sessionXP=0, lastXPGain=0;
let playerHP=100, wrongCombo=0;

const get=(k,d)=>{try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v)}catch{return d}};
const set=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
const del=k=>{try{localStorage.removeItem(k)}catch{}};

// v15.2: one-time clean slate for quiz history/progress requested by the user.
const RESET_PROGRESS_MARKER="gaster_v16_3_full_progress_reset";
if(localStorage.getItem(RESET_PROGRESS_MARKER)!=="1"){
  [KEY.book,KEY.hist,KEY.session,KEY.wrong,KEY.goal,KEY.xp,KEY.gender,KEY.name,KEY.gear,KEY.gearCycle,KEY.gearCount].forEach(del);
  localStorage.setItem(RESET_PROGRESS_MARKER,"1");
}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const letter=i=>String.fromCharCode(65+i);
const qid=(bank,i,q)=>q.id || `${bank}-${q.no||i+1}`;
// RPG progression: 100 levels, 100 XP per level.
function xpLevel(xp){
  return Math.min(100, Math.floor(Math.max(0, Number(xp)||0) / 100) + 1);
}
function xpInfo(xp){
  const total=Math.max(0, Number(xp)||0);
  const level=xpLevel(total);
  if(level>=100) return {level,current:100,need:100,next:10000,total};
  const current=total % 100;
  return {level,current,need:100,next:level*100,total};
}
function xpTitle(level){
  if(level>=55) return "Professor";
  if(level>=46) return "Sub-Spesialis";
  if(level>=36) return "Spesialis";
  if(level>=26) return "Dokter";
  if(level>=16) return "S.Ked";
  if(level>=6) return "Pre-Klinik";
  return "Noob";
}
function characterName(){return String(get(KEY.name,"")||"").trim();}
const GEAR_POOL=[{type:"helmet",name:"Iron Helmet",icon:"🪖",rarity:"Common"},{type:"helmet",name:"Knight Crown",icon:"👑",rarity:"Rare"},{type:"armor",name:"Iron Armor",icon:"🛡️",rarity:"Common"},{type:"armor",name:"Dragon Armor",icon:"🐉",rarity:"Epic"},{type:"pants",name:"Battle Pants",icon:"👖",rarity:"Common"},{type:"pants",name:"Shadow Pants",icon:"🥷",rarity:"Rare"},{type:"weapon",name:"Iron Sword",icon:"⚔️",rarity:"Common"},{type:"weapon",name:"Flame Blade",icon:"🔥",rarity:"Epic"},{type:"weapon",name:"Thunder Blade",icon:"⚡",rarity:"Rare"}];
function gearState(){const v=get(KEY.gear,[]);return Array.isArray(v)?v:[]}
function gearCycleState(){let c=get(KEY.gearCycle,null);if(!c||!Array.isArray(c.slots)||c.slots.length!==5){c={cycle:1,slots:shuffle(Array.from({length:100},(_,i)=>i+1)).slice(0,5).sort((a,b)=>a-b),earned:[]};set(KEY.gearCycle,c)}return c}
function makeCharacter(gender){
  const inv=gearState();
  const equipped=t=>inv.find(x=>x.equipped&&x.type===t);
  const helmet=equipped("helmet"), armor=equipped("armor"), pants=equipped("pants"), weapon=equipped("weapon");
  const safeIcon=x=>x?esc(x.icon):"";
  return `<div class="rpg-char ${gender==="female"?"female":"male"} ${helmet?"has-helmet":""} ${armor?"has-armor":""} ${weapon?"has-weapon":""} ${pants?"has-pants":""}">
    <div class="helmet">${safeIcon(helmet)}</div><div class="head"></div>
    <div class="body"></div><div class="armor">${safeIcon(armor)}</div>
    <div class="arm left"></div><div class="arm right"></div>
    <div class="pants">${safeIcon(pants)}</div><div class="leg left"></div><div class="leg right"></div>
    <div class="weapon">${safeIcon(weapon)}</div>
  </div>`
}
function renderCharacter(){
  const g=get(KEY.gender,null)||"male";
  const name=characterName();
  if($("characterMini"))$("characterMini").innerHTML=makeCharacter(g);
  if($("characterPreview"))$("characterPreview").innerHTML=makeCharacter(g);
  if($("characterNameInput"))$("characterNameInput").value=name;
  const miniCaption=document.querySelector("#characterWidget .character-caption");
  if(miniCaption) miniCaption.textContent=name?`⚔️ ${name}`:"⚔️ Karakter";
  const nameBadge=$("characterNameDisplay");
  if(nameBadge) nameBadge.textContent=name||"Belum diberi nama";
  document.querySelectorAll(".gender-choice").forEach(b=>b.classList.toggle("selected",b.dataset.gender===g));
  renderGearSummary();
}
function renderGearSummary(){if(!$('gearSummary'))return;const inv=gearState(),types=[['helmet','🪖 Helmet'],['armor','🛡️ Armor'],['pants','👖 Celana'],['weapon','⚔️ Senjata']];$('gearSummary').innerHTML=types.map(([t,l])=>{const x=inv.find(g=>g.type===t&&g.equipped);return `<div class="gear-chip"><b>${l}</b><br>${x?`${esc(x.icon)} ${esc(x.name)} <small>(${esc(x.rarity)})</small>`:'Belum ada gear'}</div>`}).join('')}
function openCharacter(){renderCharacter();$("characterModal").hidden=false}
function closeCharacter(){$("characterModal").hidden=true}
function chooseGender(g){set(KEY.gender,g);renderCharacter()}
function resetCharacterName(){
  del(KEY.name);
  renderCharacter();
  const input=$("characterNameInput");
  if(input){ input.value=""; input.focus(); }
}
function saveCharacterName(){
  const input=$("characterNameInput");
  if(!input)return;
  const name=input.value.trim().replace(/\s+/g," ").slice(0,24);
  if(name)set(KEY.name,name);else del(KEY.name);
  renderCharacter();
  input.blur();
}
function showGearDrop(item){const layer=document.createElement('div');layer.className='gear-drop-overlay';layer.innerHTML=`<div class="gear-drop-box"><div class="gear-icon">${esc(item.icon)}</div><h2>🎁 GEAR DROP!</h2><p>${esc(item.name)} • ${esc(item.rarity)}</p><small>Gear otomatis dipasang</small></div>`;document.body.appendChild(layer);setTimeout(()=>layer.remove(),2300)}
function randomGear(){const base=GEAR_POOL[Math.floor(Math.random()*GEAR_POOL.length)],item={...base,id:`gear-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,equipped:true,obtainedAt:new Date().toISOString()};let inv=gearState().map(x=>x.type===item.type?{...x,equipped:false}:x);inv.push(item);set(KEY.gear,inv);renderCharacter();showGearDrop(item)}
function gearAnswerProgress(correct){const n=(Number(get(KEY.gearCount,0))||0)+1;set(KEY.gearCount,n);let c=gearCycleState(),within=((n-1)%100)+1;if(within===1&&n>1){c={cycle:(c.cycle||1)+1,slots:shuffle(Array.from({length:100},(_,i)=>i+1)).slice(0,5).sort((a,b)=>a-b),earned:[]};set(KEY.gearCycle,c)}if(correct&&c.slots.includes(within)&&!c.earned.includes(within)){c.earned.push(within);set(KEY.gearCycle,c);randomGear()}}
function addXP(amount,reason=""){
  const before=Number(get(KEY.xp,0))||0;
  const gained=Math.max(0,Math.round(amount));
  const after=before+gained;
  set(KEY.xp,after);
  lastXPGain=gained;sessionXP+=gained;
  renderXP();
  showXPPopup(gained,reason, xpLevel(after)>xpLevel(before));
  return {before,after,gained,leveledUp:xpLevel(after)>xpLevel(before)};
}
function renderXP(){
  const info=xpInfo(Number(get(KEY.xp,0))||0);
  const pct=Math.min(100,Math.round(info.current/info.need*100));
  if($("levelBadge"))$("levelBadge").textContent=`Lv. ${info.level}`;
  if($("xpTitle"))$("xpTitle").textContent=xpTitle(info.level);
  if($("xpTotal"))$("xpTotal").textContent=`${info.total} XP`;
  if($("xpBar"))$("xpBar").style.width=pct+"%";
  if($("xpProgressText"))$("xpProgressText").textContent=`${info.current} / ${info.need} XP`;
  if($("xpNextText"))$("xpNextText").textContent=info.level>=100?"MAX LEVEL":`${info.need-info.current} XP ke Level ${info.level+1}`;
  if($("xpLive"))$("xpLive").textContent=`⚡ ${info.total} XP`;
  if($("playerBadges")){
    const badges=[];
    if(info.level>=2)badges.push("🔥 Pejuang");
    if(info.level>=4)badges.push("🎯 Konsisten");
    if(info.level>=6)badges.push("🧠 Tajam");
    if(info.level>=10)badges.push("🏆 Master");
    $("playerBadges").innerHTML=badges.map(x=>`<span>${x}</span>`).join("");
  }
}
function showXPPopup(gained,reason,levelUp=false){
  if(!gained)return;
  const layer=document.createElement("div");layer.className="xp-popup-layer";
  layer.innerHTML=`<div class="xp-popup ${levelUp?"level-up":""}"><b>+${gained} XP</b><span>${levelUp?"🎉 LEVEL UP!":esc(reason||"Progress bertambah")}</span></div>`;
  document.body.appendChild(layer);
  requestAnimationFrame(()=>layer.classList.add("show"));
  setTimeout(()=>layer.remove(),1200);
  if(levelUp){vibrate([30,45,30,45,60]);beep("level");}
}
const BANKS={
  utama:{name:"SSP GASTER 2023",data:dataKuis},
  pulmonis:{name:"SSP PULMONIS 2022",data:dataKuisPulmonis},
  arsip2021:{name:"SSP 2021",data:dataKuis2021}
};
function show(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function vibrate(pattern){try{if(navigator.vibrate)navigator.vibrate(pattern)}catch{}}

function beep(type="correct"){
  if(!soundEnabled)return;
  try{
    const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
    const ctx=new C(),o=ctx.createOscillator(),g=ctx.createGain();
    o.connect(g);g.connect(ctx.destination);
    const now=ctx.currentTime;
    if(type==="correct"){
      o.frequency.setValueAtTime(520,now);o.frequency.exponentialRampToValueAtTime(760,now+.11);
    }else if(type==="level"){
      o.frequency.setValueAtTime(520,now);o.frequency.exponentialRampToValueAtTime(1040,now+.18);
    }else{
      o.frequency.setValueAtTime(220,now);o.frequency.exponentialRampToValueAtTime(140,now+.14);
    }
    g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(.055,now+.012);
    g.gain.exponentialRampToValueAtTime(.0001,now+.17);
    o.start(now);o.stop(now+.18);
  }catch{}
}

function combatFx(type,damageInfo=null){
  const card=document.querySelector("#quiz .quiz-card");
  if(!card)return;
  const rect=card.getBoundingClientRect();
  const layer=document.createElement("div");
  layer.className=`combat-fx ${type}`;
  // Put the effect on top of the whole card so it is always visible,
  // even when the quiz content is scrolled or another element has a z-index.
  Object.assign(layer.style,{position:"fixed",left:rect.left+"px",top:rect.top+"px",width:rect.width+"px",height:rect.height+"px",zIndex:"99999",pointerEvents:"none",overflow:"hidden",borderRadius:getComputedStyle(card).borderRadius||"18px"});
  if(type==="hit"){
    layer.innerHTML=`
      <div class="battle-whiteout"></div>
      <div class="battle-impact"><span></span></div>
      <div class="battle-slash s1"></div><div class="battle-slash s2"></div><div class="battle-slash s3"></div>
      <div class="battle-label">⚔️ CRITICAL HIT!</div><div class="battle-sub">SPLASH DAMAGE</div>`;
    for(let i=0;i<34;i++){
      const p=document.createElement("i");p.className="battle-particle";
      p.style.setProperty("--a",(Math.random()*360)+"deg");
      p.style.setProperty("--d",(70+Math.random()*170)+"px");
      p.style.setProperty("--s",(.45+Math.random()*1.25).toFixed(2));
      p.style.setProperty("--delay",(Math.random()*.16).toFixed(2)+"s");
      layer.appendChild(p);
    }
    document.body.appendChild(layer);
    requestAnimationFrame(()=>layer.classList.add("show"));
    vibrate([18,25,45,15,70]); beep("correct");
    setTimeout(()=>layer.remove(),1050);
  }else{
    layer.innerHTML=`
      <div class="battle-redout"></div>
      <div class="battle-damage-ring"></div>
      <div class="battle-crack c1"></div><div class="battle-crack c2"></div><div class="battle-crack c3"></div>
      <div class="battle-label damage">💥 DAMAGE!</div><div class="battle-sub damage-sub">-${damageInfo?.damage||1} HP • COMBO ${damageInfo?.combo||1}x</div>`;
    for(let i=0;i<16;i++){
      const p=document.createElement("i");p.className="damage-particle";
      p.style.setProperty("--a",(Math.random()*360)+"deg");
      p.style.setProperty("--d",(35+Math.random()*100)+"px");
      p.style.setProperty("--delay",(Math.random()*.1).toFixed(2)+"s");
      layer.appendChild(p);
    }
    document.body.appendChild(layer);
    requestAnimationFrame(()=>layer.classList.add("show"));
    card.classList.remove("damage-shake"); void card.offsetWidth; card.classList.add("damage-shake");
    vibrate([70,35,100]); beep("wrong");
    setTimeout(()=>{layer.remove();card.classList.remove("damage-shake")},900);
  }
}
function celebrate(){
  combatFx("hit");
  const layer=document.createElement("div");layer.className="pop-celebration";
  layer.innerHTML=`<div class="pop-burst"><span>✓</span></div><div class="pop-text">Benar!</div>`;
  document.body.appendChild(layer);
  for(let i=0;i<18;i++){
    const p=document.createElement("i");p.className="confetti";
    p.style.setProperty("--x",(Math.random()*180-90)+"px");
    p.style.setProperty("--r",(Math.random()*540-270)+"deg");
    p.style.setProperty("--d",(.25+Math.random()*.3)+"s");
    layer.appendChild(p);
  }
  requestAnimationFrame(()=>layer.classList.add("show"));
  setTimeout(()=>layer.remove(),900);
  vibrate([18,35,18]);beep("correct");
}
function wrongFx(){
  $("quiz")?.classList.add("shake");
  setTimeout(()=>$("quiz")?.classList.remove("shake"),430);
  vibrate(28);beep("wrong");
}

function initTheme(){
  if(get(KEY.theme,"light")==="dark")document.documentElement.classList.add("dark");
  soundEnabled=get(KEY.sound,true);updateThemeIcon();updateSoundIcon();
}
function updateThemeIcon(){
  const d=document.documentElement.classList.contains("dark");
  $("themeBtn").textContent=d?"☀︎":"☾";
}
function updateSoundIcon(){
  if($("soundBtn"))$("soundBtn").textContent=soundEnabled?"🔊":"🔇";
}
$("themeBtn").onclick=()=>{
  document.documentElement.classList.toggle("dark");
  set(KEY.theme,document.documentElement.classList.contains("dark")?"dark":"light");
  updateThemeIcon();
};
if($("soundBtn"))$("soundBtn").onclick=()=>{
  soundEnabled=!soundEnabled;set(KEY.sound,soundEnabled);updateSoundIcon();
};

function currentBank(){
  return BANKS[selectedBank].data;
}
function bankName(){return BANKS[selectedBank].name}
function renderBanks(){
  if(!$('bankChoices'))return;
  const banks={
    utama:{name:"🧠 GASTER 2023",desc:`${dataKuis.length} soal`},
    pulmonis:{name:"🫁 PULMONIS 2022",desc:`${dataKuisPulmonis.length} soal`},
    arsip2021:{name:"📚 SSP 2021",desc:`${dataKuis2021.length} soal`}
  };
  $('bankChoices').innerHTML=Object.entries(banks).map(([id,b])=>`<button class="bank-choice ${id===selectedBank?"selected":""}" data-bank="${id}"><span class="bank-name">${b.name}</span><span class="bank-desc">${b.desc}</span><i>${id===selectedBank?"✓":""}</i></button>`).join("");
  $('bankNote').textContent="";
  document.querySelectorAll('.bank-choice').forEach(b=>b.onclick=()=>{selectedBank=b.dataset.bank;selectedCount=10;renderBanks();renderCounts();});
}
function renderCounts(){
  const bank=currentBank(), max=bank.length;
  const choices=[10,20,50,100].filter(n=>n<=max);
  if(max>0)choices.push('all');
  if(selectedCount!==max && !choices.includes(selectedCount))selectedCount=choices[0]||max;
  $('countChoices').innerHTML=choices.map(n=>{const val=n==='all'?max:n;return `<button class="choice ${selectedCount===val?"selected":""}" data-n="${val}">${n==='all'?"Semua":n}<small>${n==='all'?` (${max})`:" soal"}</small></button>`}).join('');
  document.querySelectorAll('#countChoices .choice').forEach(b=>b.onclick=()=>{selectedCount=+b.dataset.n;renderCounts();});
  const books=get(KEY.book,[]),hist=get(KEY.hist,[]);
  $('totalStat').textContent=max;$('bookmarkStat').textContent=books.length;$('historyStat').textContent=hist.length;
  $('bestStat').textContent=hist.length?Math.max(...hist.map(x=>x.pct))+"%":"0%";
  renderBanks();renderResume();
}
function buildQuiz(count){
  const bank=currentBank();
  return shuffle(bank).slice(0,count).map((q)=>{
    const originalIndex=bank.indexOf(q);
    const id=qid(selectedBank,originalIndex,q);
    const order=shuffle(q.opsi.map((_,i)=>i));
    const correct=q.jawabanBenar==null?null:order.indexOf(q.jawabanBenar);
    return {
      id, bank:selectedBank, source:q.source||bankName(), no:q.no||originalIndex+1,
      soal:q.soal, opsi:order.map(i=>q.opsi[i]), jawabanBenar:correct,
      pembahasan:q.pembahasan,
      pembahasanPilihan:order.map(i=>(q.pembahasanPilihan&&q.pembahasanPilihan[i])||q.pembahasan||"Belum ada pembahasan khusus untuk opsi ini."),
      catatanKlinis:q.catatanKlinis||"", incomplete:!!q.incomplete
    };
  });
}

function saveSession(){
  if(!quiz.length)return;
  if(timerDuration && timerDeadline){
    timerSeconds=Math.max(0,Math.ceil((timerDeadline-Date.now())/1000));
  }
  set(KEY.session,{
    quiz,pos,score,selectedCount,selectedBank,streak,sessionXP,playerHP,wrongCombo,
    answered,selectedAnswer,quizMode,timerSeconds,timerDuration,timerDeadline,
    flagged:[...flagged],savedAt:new Date().toISOString()
  });
  renderResume();
}
function clearSession(){stopTimer();del(KEY.session);renderResume()}
function renderResume(){
  const s=get(KEY.session,null);
  if(!s||!s.quiz?.length){$("resumeCard").hidden=true;return}
  $("resumeCard").hidden=false;
  $("resumeText").textContent=`${BANKS[s.selectedBank||"utama"]?.name||"Kuis"} • Soal ${Math.min((s.pos||0)+1,s.quiz.length)} dari ${s.quiz.length} • ${s.score||0} benar • ${new Date(s.savedAt).toLocaleString("id-ID")}`;
}
$("resumeBtn").onclick=()=>{
  const s=get(KEY.session,null);if(!s)return;
  quiz=s.quiz;pos=s.pos||0;score=s.score||0;selectedCount=s.selectedCount||quiz.length;
  selectedBank=s.selectedBank||"utama";streak=s.streak||0;sessionXP=Number(s.sessionXP||0);playerHP=Number.isFinite(Number(s.playerHP))?Math.max(0,Math.min(100,Number(s.playerHP))):100;wrongCombo=Number(s.wrongCombo||0);answered=!!s.answered;selectedAnswer=s.selectedAnswer??null;
  selectedBank=s.selectedBank||"utama";
  quizMode=s.quizMode||"study";
  timerDuration=Number(s.timerDuration||0);
  timerSeconds=Number.isFinite(s.timerSeconds)?s.timerSeconds:timerDuration;
  timerDeadline=Number(s.timerDeadline||0);
  if(timerDuration && !timerDeadline) timerDeadline=Date.now()+timerSeconds*1000;
  flagged=new Set(s.flagged||[]);
  show("quiz");renderQuestion(true);startTimer();
};
$("discardResumeBtn").onclick=()=>{if(confirm("Hapus progres kuis tersimpan?"))clearSession()};


function renderModes(){
  const modeBox=$("modeChoices"), timeBox=$("timeChoices");
  if(!modeBox || !timeBox)return;
  const modes=[
    ["study","📖 Belajar","Pembahasan langsung setelah menjawab"],
    ["exam","📝 Ujian","Pembahasan dibuka setelah selesai"]
  ];
  modeBox.innerHTML=modes.map(([id,title,desc])=>
    `<button type="button" class="choice mode-choice ${quizMode===id?"selected":""}" data-mode="${id}">
      <b>${title}</b><small>${desc}</small>
    </button>`).join("");
  modeBox.querySelectorAll(".mode-choice").forEach(b=>b.onclick=()=>{
    quizMode=b.dataset.mode;
    renderModes();
  });

  const times=[
    [0,"Tanpa batas"],
    [1800,"30 menit"],
    [3600,"60 menit"],
    [5400,"90 menit"]
  ];
  timeBox.innerHTML=times.map(([sec,label])=>
    `<button type="button" class="choice time-choice ${timerDuration===sec?"selected":""}" data-sec="${sec}">${label}</button>`
  ).join("");
  timeBox.querySelectorAll(".time-choice").forEach(b=>b.onclick=()=>{
    timerDuration=Number(b.dataset.sec);
    renderModes();
  });
}
function getTimeSeconds(){
  const el=document.querySelector("#timeChoices .time-choice.selected");
  return el ? Number(el.dataset.sec||0) : Number(timerDuration||0);
}

function startQuiz(){
  if(!get(KEY.gender,null)){openCharacter();return;}
  if(!selectedCount || !currentBank().length){
    alert("Bank soal belum tersedia.");
    return;
  }
  clearSession();
  quiz=buildQuiz(selectedCount);
  if(!quiz.length){
    alert("Tidak ada soal yang dapat dimuat dari bank ini.");
    return;
  }
  pos=0;score=0;streak=0;sessionXP=0;lastXPGain=0;playerHP=100;wrongCombo=0;answered=false;selectedAnswer=null;
  flagged=new Set();sessionStart=Date.now();
  timerDuration=getTimeSeconds();timerSeconds=timerDuration;timerDeadline=timerDuration?Date.now()+timerDuration*1000:0;
  show("quiz");renderQuestion();startTimer();
}

function updateFlagUI(){
  const q=quiz[pos]; if(!q)return;
  const on=flagged.has(q.id);
  $("flagBtn").textContent=on?"⚑ Ditandai":"⚑ Tandai soal";
  $("flagState").textContent=on?"Akan masuk daftar review":"";
}
$("flagBtn").onclick=()=>{
  if(!quiz[pos])return;
  const id=quiz[pos].id;
  if(flagged.has(id))flagged.delete(id);else flagged.add(id);
  updateFlagUI();saveSession();
};
$("startBtn").onclick=startQuiz;
$("againBtn").onclick=startQuiz;

function renderHP(){
  const hp=Math.max(0,Math.min(100,Math.round(playerHP)));
  const total=Math.max(1,quiz.length);
  const base=Math.max(1,Math.ceil(100/total));
  $("hpText").textContent=`${hp} / 100`;
  $("hpBar").style.width=hp+"%";
  $("hpBar").classList.toggle("critical",hp<=25);
  $("hpBar").classList.toggle("warning",hp<=50 && hp>25);
  $("damageHint").textContent=wrongCombo>0?`Combo salah ${wrongCombo}x • Damage berikutnya ${Math.min(100,base*Math.pow(2,wrongCombo))}`:`Damage dasar: ${base} HP`;
}
function applyDamage(){
  const total=Math.max(1,quiz.length);
  const base=Math.max(1,Math.ceil(100/total));
  wrongCombo++;
  const damage=Math.min(100,base*Math.pow(2,wrongCombo-1));
  const before=playerHP;
  playerHP=Math.max(0,playerHP-damage);
  renderHP();
  return {damage,before,after:playerHP,combo:wrongCombo,base};
}

function renderQuestion(resume=false){
  const q=quiz[pos]; if(!q)return;
  // Set the current question's state from the question itself so Back/Next
  // navigation never loses an already selected answer.
  selectedAnswer=q.selectedAnswer ?? null;
  answered=selectedAnswer!==null || !!(resume && pos===Number(get(KEY.session,null)?.pos));
  $("info").textContent=`Soal ${pos+1} / ${quiz.length}`;
  if($("scoreLive"))$("scoreLive").textContent=`${score} benar`;
  renderXP();
  renderHP();
  $("streakLive").textContent=streak>1?`🔥 ${streak} beruntun`:"";
  $("progress").style.width=((pos+1)/quiz.length*100)+"%";
  $("question").textContent=q.soal;
  $("answers").innerHTML=q.opsi.map((o,i)=>`<button class="answer" data-i="${i}">
    <span class="answer-letter">${letter(i)}</span><span>${esc(o)}</span>
  </button>`).join("");
  $("explain").style.display="none";
  $("nextBtn").style.display=answered?"block":"none";
  $("nextBtn").textContent=pos===quiz.length-1?"Lihat Hasil →":"Selanjutnya →";
  $("prevBtn").style.display=pos>0?"block":"none";
  const b=get(KEY.book,[]);
  $("bookmarkBtn").textContent=b.includes(q.id)?"★ Tersimpan":"☆ Simpan";
  $("bookmarkBtn").onclick=()=>toggleBookmark(q.id);
  updateFlagUI();
  document.querySelectorAll(".answer").forEach(x=>x.onclick=()=>answer(+x.dataset.i));
  if(answered) applyAnsweredState();
}
function applyAnsweredState(){
  const q=quiz[pos]; if(!q)return;
  const chosen=q.selectedAnswer ?? selectedAnswer;
  document.querySelectorAll(".answer").forEach((b,j)=>{
    b.disabled=true;
    if(q.jawabanBenar!=null && j===q.jawabanBenar)b.classList.add("correct");
    if(chosen!=null && j===chosen && chosen!==q.jawabanBenar)b.classList.add("wrong");
  });
  selectedAnswer=chosen;
  answered=chosen!==null;
  if(quizMode==="study"){
    $("explainText").innerHTML=allExplanations(q);
    $("explain").style.display="block";
  }
  $("nextBtn").style.display="block";
  $("nextBtn").textContent=pos===quiz.length-1?"Lihat Hasil →":"Selanjutnya →";
}
function isNegativeStem(stem){
  return /\b(tidak benar|tidak tepat|yang salah|manakah yang salah|mana yang salah|kecuali|bukan merupakan|bukan yang|tidak sesuai|tidak termasuk)\b/i.test(stem||"");
}
function stripTruthLabel(s){
  return String(s||"").replace(/^\s*(BENAR|SALAH)\s*[\.:—-]?\s*/i,"").trim();
}
function truthFromDetail(s){
  const m=String(s||"").match(/^\s*(BENAR|SALAH)\b/i);
  return m?m[1].toUpperCase():null;
}
function allExplanations(q){
  if(q.incomplete || q.jawabanBenar==null){
    return `<div class="explain-title">⚠️ Pembahasan Arsip</div><div class="option-review"><div class="option-review-text">${esc(q.pembahasan||"Soal ini tidak lengkap pada arsip asli.")}</div></div>`;
  }
  const negative=isNegativeStem(q.soal);
  const keyLabel=negative?"✓ KUNCI — PERNYATAAN SALAH":"✓ KUNCI — JAWABAN BENAR";
  return `<div class="explain-title">Pembahasan semua pilihan</div>
    <div class="main-explain"><b>🎯 Konsep inti:</b> ${esc(q.pembahasan||"Tidak ada pembahasan khusus.")}</div>`+
    (q.catatanKlinis?`<div class="clinical-note"><b>🩺 Catatan klinis:</b> ${esc(q.catatanKlinis)}</div>`:"")+
    q.opsi.map((o,i)=>{
      const good=i===q.jawabanBenar;
      let detail=(q.pembahasanPilihan&&q.pembahasanPilihan[i])||"";
      const truth = negative ? (good ? "SALAH" : "BENAR") : (good ? "BENAR" : "SALAH");
      detail=stripTruthLabel(detail);
      const truthLabel=`<span class="truth-badge ${truth==="BENAR"?"truth-true":"truth-false"}">Pernyataan ${truth==="BENAR"?"BENAR":"SALAH"}</span>`;
      const status=good?keyLabel:(negative?"✕ BUKAN KUNCI":"✕ SALAH — BUKAN JAWABAN");
      if(!detail){
        detail=good?(q.pembahasan||"Sesuai dengan konsep yang diuji."):`Opsi ini tidak paling sesuai dengan temuan pada stem.`;
      }
      return `<div class="option-review ${good?"is-correct":"is-wrong"}">
        <div class="option-review-head"><b>${letter(i)}. ${esc(o)}</b><span>${status}</span></div>
        <div class="option-truth">${truthLabel}</div>
        <div class="option-review-text">${esc(detail)}</div>
      </div>`;
    }).join("");
}
function answer(i){
  if(answered)return;
  answered=true;selectedAnswer=i;
  const q=quiz[pos];
  gearAnswerProgress(i===q.jawabanBenar);
  if(q.incomplete || q.jawabanBenar==null){
    q.selectedAnswer=i;
    document.querySelectorAll(".answer").forEach(b=>b.disabled=true);
    if(quizMode==="study"){$("explainText").innerHTML=allExplanations(q);$("explain").style.display="block";}
    $("nextBtn").style.display="block";$("nextBtn").textContent=pos===quiz.length-1?"Lihat Hasil →":"Selanjutnya →";
    saveSession();return;
  }
  const good=i===q.jawabanBenar;
  q.selectedAnswer=i;
  if(good){
    wrongCombo=0; renderHP();
    score++;streak++;celebrate();
    const gain=20 + Math.min(30,Math.max(0,(streak-1)*5));
    addXP(gain,streak>1?`Jawaban benar • streak ${streak} 🔥`:"Jawaban benar");
  }else{
    streak=0;
    const dmg=applyDamage();
    wrongFx();combatFx("damage",dmg);recordWrong(q);
    addXP(5,"Tetap semangat — jawaban salah");
  }
  document.querySelectorAll(".answer").forEach((b,j)=>{
    b.disabled=true;
    if(j===q.jawabanBenar)b.classList.add("correct");
    if(j===i&&!good)b.classList.add("wrong");
  });
  $("scoreLive").textContent=`${score} benar`;
  $("streakLive").textContent=streak>1?`🔥 ${streak} beruntun`:"";
  if(quizMode==="study"){
    $("explainText").innerHTML=allExplanations(q);
    $("explain").style.display="block";
  }
  $("nextBtn").style.display="block";
  $("nextBtn").textContent=pos===quiz.length-1?"Lihat Hasil →":"Selanjutnya →";
  saveSession();
}
function goToQuestion(target){
  if(!quiz.length)return;
  const next=Math.max(0,Math.min(quiz.length-1,target));
  if(next===pos)return;
  pos=next;
  selectedAnswer=quiz[pos].selectedAnswer ?? null;
  answered=selectedAnswer!==null;
  renderQuestion();
  saveSession();
}

$("prevBtn").onclick=()=>goToQuestion(pos-1);
$("nextBtn").onclick=()=>{
  if(!answered){return;}
  if(pos<quiz.length-1)goToQuestion(pos+1);
  else finish();
};

function finish(reason="complete"){
  stopTimer();
  const validTotal=quiz.filter(q=>q.jawabanBenar!=null&&!q.incomplete).length;
  const total=quiz.length,pct=validTotal?Math.round(score/validTotal*100):0,h=get(KEY.hist,[]);
  h.unshift({
    date:new Date().toISOString(),score,total,pct,validTotal,
    bank:selectedBank,bankName:bankName(),mode:quizMode,
    duration:timerDuration?timerDuration-timerSeconds:null,reason
  });
  set(KEY.hist,h.slice(0,50));clearSession();
  $("resultScore").textContent=pct+"%";
  if($("resultXP"))$("resultXP").textContent=`+${sessionXP} XP`;
  if($("resultLevel"))$("resultLevel").textContent=`Lv. ${xpLevel(Number(get(KEY.xp,0))||0)}`;
  $("resultDetail").textContent=`${score} benar dari ${validTotal} soal dinilai${validTotal<total?` • ${total-validTotal} arsip tidak lengkap`:""}${reason==="timeout"?" • waktu habis":""}`;
  $("resultCorrect").textContent=score;
  $("resultWrong").textContent=Math.max(0,validTotal-score);
  $("resultTotal").textContent=total;
  $("resultBar").style.width=pct+"%";
  $("resultGrade").textContent=pct>=85?"🏆 Sangat Baik":pct>=70?"✨ Baik":pct>=60?"👍 Cukup":"📚 Perlu Belajar Lagi";
  $("reviewWrongBtn").style.display=quiz.some(q=>q.id && get(KEY.wrong,[]).some(x=>x.id===q.id))?"block":"none";
  $("reviewQuizBtn").style.display=quiz.length?"block":"none";
  show("result");renderCounts();
}
function formatTime(s){
  s=Math.max(0,Math.floor(s||0)); const m=Math.floor(s/60),sec=s%60;
  return `${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
}
function updateTimerUI(){
  const el=$("timerLive"); if(!el)return;
  if(!timerDuration){el.textContent="⏱ ∞";el.classList.remove("urgent");return}
  if(timerDeadline) timerSeconds=Math.max(0,Math.ceil((timerDeadline-Date.now())/1000));
  el.textContent=`⏱ ${formatTime(timerSeconds)}`;
  el.classList.toggle("urgent",timerSeconds<=60);
}
function startTimer(){
  stopTimer(); updateTimerUI();
  if(!timerDuration)return;
  if(!timerDeadline)timerDeadline=Date.now()+Math.max(0,timerSeconds)*1000;
  timerId=setInterval(()=>{
    updateTimerUI();
    if(timerSeconds<=0){stopTimer(); if(quiz.length && $("quiz").classList.contains("active")) finish("timeout");}
    else if(timerSeconds%5===0)saveSession();
  },250);
}
function stopTimer(){if(timerId){clearInterval(timerId);timerId=null}}
function recordWrong(q){
  const w=get(KEY.wrong,[]);
  const idx=w.findIndex(x=>x.id===q.id);
  if(idx>=0){w[idx].wrong++;w[idx].lastWrong=new Date().toISOString();}
  else w.push({id:q.id,bank:q.bank||selectedBank,wrong:1,lastWrong:new Date().toISOString(),soal:q.soal,opsi:q.opsi,jawabanBenar:q.jawabanBenar,pembahasan:q.pembahasan,pembahasanPilihan:q.pembahasanPilihan,catatanKlinis:q.catatanKlinis});
  set(KEY.wrong,w);
}
function renderWrong(){
  const w=get(KEY.wrong,[]).sort((a,b)=>b.wrong-a.wrong),box=$("wrongList");
  $("wrongSummary").textContent=w.length?`${w.length} soal • Diurutkan dari yang paling sering salah`:"Belum ada soal yang salah.";
  if(!w.length){box.innerHTML='<div class="empty">Kerjakan kuis dulu. Soal yang kamu jawab salah akan muncul di sini.</div>';return}
  box.innerHTML=w.slice(0,50).map((q,i)=>`<div class="list-item wrong-item">
    <div><b>#${i+1} • ${BANKS[q.bank]?.name||q.bank} • salah ${q.wrong}×</b><br>${esc(q.soal)}</div>
    <span class="score">${letter(q.jawabanBenar)}</span>
  </div>`).join("");
}
$("wrongBtn").onclick=()=>{renderWrong();show("wrong")};

function renderReview(){
  $("reviewSummary").textContent=`${quiz.length} soal • ${score} benar`;
  $("reviewList").innerHTML=quiz.map((q,idx)=>{
    const negative=isNegativeStem(q.soal);
    const selected=q.selectedAnswer;
    const key=q.jawabanBenar;
    return `<article class="review-card">
      <div class="review-q"><b>Soal ${idx+1}</b><div>${esc(q.soal)}</div></div>
      <div class="review-options">${q.opsi.map((o,i)=>{
        const truth=negative ? (i===key?"SALAH":"BENAR") : (i===key?"BENAR":"SALAH");
        const cls=i===key?"review-key":(selected===i?"review-user-wrong":"");
        return `<div class="review-option ${cls}"><b>${letter(i)}.</b> ${esc(o)} ${i===key?'<span>✓ KUNCI</span>':selected===i?'<span>✕ Pilihanmu</span>':""}<small>Pernyataan ${truth==="BENAR"?"BENAR":"SALAH"} · ${esc(stripTruthLabel(q.pembahasanPilihan?.[i]||""))}</small></div>`;
      }).join("")}</div>
      <div class="review-concept"><b>🎯 Konsep inti:</b> ${esc(q.pembahasan||"")}</div>
    </article>`;
  }).join("");
}
$("reviewQuizBtn").onclick=()=>{renderReview();show("review")};
$("reviewWrongBtn").onclick=()=>{const w=get(KEY.wrong,[]); const ids=new Set(w.map(x=>x.id)); quiz=quiz.filter(q=>ids.has(q.id)).map(q=>({...q,selectedAnswer:null})); if(!quiz.length){show("home");return} pos=0;score=0;sessionXP=0;answered=false;selectedAnswer=null;streak=0;timerDuration=getTimeSeconds();timerSeconds=timerDuration;show("quiz");renderQuestion();startTimer()};

$("quizBack").onclick=()=>{
  if(confirm("Keluar dari kuis? Progres akan disimpan agar bisa dilanjutkan.")){
    saveSession();stopTimer();show("home");renderCounts();
  }
};
$("resultHome").onclick=()=>{show("home");renderCounts()};

function toggleBookmark(id){
  let b=get(KEY.book,[]);
  b=b.includes(id)?b.filter(x=>x!==id):[...b,id];set(KEY.book,b);
  $("bookmarkStat").textContent=b.length;
  if(quiz[pos])$("bookmarkBtn").textContent=b.includes(quiz[pos].id)?"★ Tersimpan":"☆ Simpan";
}
function renderBookmarks(){
  const b=get(KEY.book,[]),w=$("bookmarkList");
  if(!b.length){w.innerHTML='<div class="empty">Belum ada soal yang disimpan.</div>';return}
  w.innerHTML=b.map(id=>{
    const [bank,...rest]=String(id).split(":"); const wanted=rest.join(":");
    const arr=BANKS[bank]?.data||[];
    const idx=arr.findIndex((q,i)=>qid(bank,i,q)===id || qid(bank,i,q)===wanted);
    const q=idx>=0?arr[idx]:null;
    if(!q)return '';
    return `<div class="list-item"><div><b>${BANKS[bank].name} • Soal ${q.no||idx+1}</b><br>${esc(q.soal)}</div><button class="bookmark" data-id="${esc(id)}">★</button></div>`;
  }).join("");
  w.querySelectorAll("[data-id]").forEach(x=>x.onclick=()=>{toggleBookmark(x.dataset.id);renderBookmarks();renderCounts()});
}
function renderHistory(){
  const h=get(KEY.hist,[]),w=$("historyList");
  if(!h.length){$("historySummary").textContent="";w.innerHTML='<div class="empty">Belum ada riwayat kuis.</div>';return}
  const avg=Math.round(h.reduce((a,x)=>a+x.pct,0)/h.length),best=Math.max(...h.map(x=>x.pct));
  $("historySummary").textContent=`${h.length} percobaan • Rata-rata ${avg}% • Terbaik ${best}%`;
  w.innerHTML=h.map(x=>`<div class="list-item"><div><b>${x.pct}%</b><div class="date">${x.bankName||"Kuis"} • ${x.mode==="exam"?"Ujian":"Belajar"} • ${new Date(x.date).toLocaleString("id-ID")}</div></div><span class="score">${x.score}/${x.validTotal||x.total}</span></div>`).join("");
}
$("bookmarksBtn").onclick=()=>{renderBookmarks();show("bookmarks")};
$("historyBtn").onclick=()=>{renderHistory();show("history")};
document.querySelectorAll("[data-home]").forEach(b=>b.onclick=()=>{show("home");renderCounts()});
$("clearHistory").onclick=()=>{if(confirm("Hapus semua riwayat skor?")){set(KEY.hist,[]);renderHistory();renderCounts()}};


function dateKey(iso){
  try{return new Date(iso).toLocaleDateString("en-CA")}catch{return ""}
}
function daysStudied(history){
  return new Set(history.map(x=>dateKey(x.date)).filter(Boolean));
}
function currentStudyStreak(history){
  const days=daysStudied(history), now=new Date();
  let streakDays=0;
  for(let i=0;i<366;i++){
    const d=new Date(now);d.setHours(0,0,0,0);d.setDate(d.getDate()-i);
    const key=dateKey(d.toISOString());
    if(days.has(key)) streakDays++; else if(i>0) break;
  }
  return streakDays;
}
function renderAnalytics(){
  const h=get(KEY.hist,[]),w=get(KEY.wrong,[]),b=get(KEY.book,[]);
  const attempts=h.length, avg=attempts?Math.round(h.reduce((s,x)=>s+Number(x.pct||0),0)/attempts):0;
  const best=attempts?Math.max(...h.map(x=>Number(x.pct||0))):0;
  const answered=h.reduce((s,x)=>s+Number(x.validTotal||0),0);
  const correct=h.reduce((s,x)=>s+Number(x.score||0),0);
  const accuracy=answered?Math.round(correct/answered*100):0;
  const streakDays=currentStudyStreak(h);
  $("analyticsSummary").textContent=attempts?`${attempts} percobaan • Akurasi keseluruhan ${accuracy}% • ${streakDays} hari belajar beruntun`:`Belum ada data belajar. Mulai satu kuis untuk melihat analitik.`;
  $("analyticsCards").innerHTML=[
    [best+"%","Nilai terbaik"],[avg+"%","Rata-rata"],[w.length,"Soal perlu diulang"],[b.length,"Bookmark"]
  ].map(x=>`<div class="analytics-stat"><b>${x[0]}</b><span>${x[1]}</span></div>`).join("");
  const byBank={};
  h.forEach(x=>{const k=x.bank||"lainnya";(byBank[k]??={name:x.bankName||k,n:0,sum:0,best:0});byBank[k].n++;byBank[k].sum+=Number(x.pct||0);byBank[k].best=Math.max(byBank[k].best,Number(x.pct||0));});
  const bankEntries=Object.values(byBank);
  $("analyticsBanks").innerHTML=bankEntries.length?bankEntries.map(x=>{
    const avgB=Math.round(x.sum/x.n);return `<div class="analytics-row"><div><b>${esc(x.name)}</b><small>${x.n} percobaan • terbaik ${x.best}%</small></div><strong>${avgB}%</strong></div>`;
  }).join(""):"<div class='empty'>Belum ada riwayat per bank.</div>";
  const focus=w.sort((x,y)=>y.wrong-x.wrong).slice(0,5);
  $("analyticsFocus").innerHTML=focus.length?focus.map((x,i)=>`<div class="analytics-row"><div><b>${i+1}. ${esc(x.soal)}</b><small>${BANKS[x.bank]?.name||x.bank||"Soal"} • salah ${x.wrong}×</small></div><strong>${letter(x.jawabanBenar)}</strong></div>`).join(""):"<div class='empty'>Belum ada pola kesalahan. Terus latihan.</div>";
}
$("analyticsBtn").onclick=()=>{renderAnalytics();show("analytics")};

function practiceWrong(){
  const w=get(KEY.wrong,[]).filter(q=>q.jawabanBenar!=null);
  if(!w.length){alert("Belum ada soal yang pernah dijawab salah.");return}
  quiz=shuffle(w).slice(0,Math.min(20,w.length)).map(q=>({
    id:q.id,bank:q.bank||selectedBank,source:BANKS[q.bank]?.name||q.bank,no:q.no,soal:q.soal,opsi:q.opsi,
    jawabanBenar:q.jawabanBenar,pembahasan:q.pembahasan,pembahasanPilihan:q.pembahasanPilihan||[],catatanKlinis:q.catatanKlinis||"",incomplete:false,selectedAnswer:null
  }));
  selectedBank=quiz[0]?.bank||selectedBank;selectedCount=quiz.length;pos=0;score=0;streak=0;sessionXP=0;lastXPGain=0;playerHP=100;wrongCombo=0;answered=false;selectedAnswer=null;flagged=new Set();timerDuration=0;timerSeconds=0;timerDeadline=0;
  clearSession();show("quiz");renderQuestion();startTimer();
}
$("quickWrongBtn").onclick=practiceWrong;

// Keyboard shortcuts make desktop study sessions faster without changing mobile behavior.
document.addEventListener("keydown",e=>{
  if(!$('quiz')?.classList.contains('active') || answered)return;
  if(e.target?.matches("input,textarea,select"))return;
  const n=Number(e.key);
  if(n>=1 && n<=9 && n<=quiz[pos].opsi.length){e.preventDefault();answer(n-1);return;}
  if(e.key.toLowerCase()==="b"){e.preventDefault();toggleBookmark(quiz[pos].id);updateFlagUI();return;}
  if(e.key==="Enter" && answered){e.preventDefault();$("nextBtn").click();}
});

window.addEventListener("beforeunload",saveSession);
document.addEventListener("visibilitychange",()=>{
  if(document.visibilityState==="hidden"){
    saveSession();
    stopTimer();
  }else if($("quiz").classList.contains("active") && quiz.length && !answered){
    updateTimerUI();
    startTimer();
  }
});
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));

// Character controls: explicit listeners keep the character UI independent from the Home controls.
if($('characterOpen'))$('characterOpen').addEventListener('click',openCharacter);
if($('closeCharacter'))$('closeCharacter').addEventListener('click',closeCharacter);
if($('saveCharacterName'))$('saveCharacterName').addEventListener('click',saveCharacterName); if($('resetCharacterName'))$('resetCharacterName').addEventListener('click',resetCharacterName);
if($('characterNameInput')){
  $('characterNameInput').addEventListener('input',e=>{
    const preview=String(e.target.value||'').slice(0,24);
    const caption=document.querySelector('#characterWidget .character-caption');
    if(caption) caption.textContent=preview?`⚔️ ${preview}`:'⚔️ Karakter';
    const badge=$('characterNameDisplay');
    if(badge) badge.textContent=preview||'Belum diberi nama';
  });
  $('characterNameInput').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();saveCharacterName()}});
}
document.querySelectorAll('.gender-choice').forEach(btn=>btn.addEventListener('click',()=>chooseGender(btn.dataset.gender)));
if($('characterModal'))$('characterModal').addEventListener('click',e=>{if(e.target===$('characterModal'))closeCharacter()});

initTheme();renderCharacter();renderBanks();renderCounts();renderModes();updateTimerUI();renderResume();renderXP();
if(!get(KEY.gender,null))setTimeout(openCharacter,250);
