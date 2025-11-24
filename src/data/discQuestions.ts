export interface DISCStatement {
  text: string;
  dimension: 'D' | 'I' | 'S' | 'C';
}

export interface DISCQuestion {
  id: number;
  statements: DISCStatement[];
}

export const discQuestions: DISCQuestion[] = [
  {
    id: 1,
    statements: [
      { text: "Saya suka mengambil keputusan dengan cepat dan tegas", dimension: "D" },
      { text: "Saya senang berinteraksi dan berkomunikasi dengan orang lain", dimension: "I" },
      { text: "Saya lebih suka lingkungan kerja yang stabil dan konsisten", dimension: "S" },
      { text: "Saya selalu memperhatikan detail dan akurasi dalam pekerjaan", dimension: "C" }
    ]
  },
  {
    id: 2,
    statements: [
      { text: "Saya tidak takut menghadapi tantangan dan kompetisi", dimension: "D" },
      { text: "Saya mudah bergaul dan membuat orang lain merasa nyaman", dimension: "I" },
      { text: "Saya adalah pendengar yang baik dan sabar", dimension: "S" },
      { text: "Saya suka mengikuti aturan dan prosedur yang ada", dimension: "C" }
    ]
  },
  {
    id: 3,
    statements: [
      { text: "Saya senang memimpin dan mengarahkan orang lain", dimension: "D" },
      { text: "Saya optimis dan antusias dalam menghadapi situasi baru", dimension: "I" },
      { text: "Saya menghargai keharmonisan dan menghindari konflik", dimension: "S" },
      { text: "Saya berpikir secara logis dan analitis", dimension: "C" }
    ]
  },
  {
    id: 4,
    statements: [
      { text: "Saya fokus pada hasil dan pencapaian target", dimension: "D" },
      { text: "Saya ekspresif dan mudah menunjukkan emosi saya", dimension: "I" },
      { text: "Saya dapat diandalkan dan konsisten dalam bekerja", dimension: "S" },
      { text: "Saya perfeksionis dan menginginkan hasil yang sempurna", dimension: "C" }
    ]
  },
  {
    id: 5,
    statements: [
      { text: "Saya berani mengambil risiko untuk mencapai tujuan", dimension: "D" },
      { text: "Saya suka menjadi pusat perhatian dalam kelompok", dimension: "I" },
      { text: "Saya lebih suka bekerja dalam tim daripada sendiri", dimension: "S" },
      { text: "Saya teliti dan hati-hati dalam mengambil keputusan", dimension: "C" }
    ]
  },
  {
    id: 6,
    statements: [
      { text: "Saya langsung to the point dalam berkomunikasi", dimension: "D" },
      { text: "Saya kreatif dan suka berbagi ide-ide baru", dimension: "I" },
      { text: "Saya tenang dan tidak mudah terpancing emosi", dimension: "S" },
      { text: "Saya objektif dan menggunakan data dalam berargumen", dimension: "C" }
    ]
  },
  {
    id: 7,
    statements: [
      { text: "Saya tidak suka membuang waktu dan ingin semuanya efisien", dimension: "D" },
      { text: "Saya mudah beradaptasi dengan perubahan sosial", dimension: "I" },
      { text: "Saya loyal dan berkomitmen pada tim saya", dimension: "S" },
      { text: "Saya metodis dan sistematis dalam pendekatan saya", dimension: "C" }
    ]
  },
  {
    id: 8,
    statements: [
      { text: "Saya kompetitif dan ingin menjadi yang terbaik", dimension: "D" },
      { text: "Saya persuasif dan bisa mempengaruhi orang lain", dimension: "I" },
      { text: "Saya mendukung dan membantu anggota tim lainnya", dimension: "S" },
      { text: "Saya skeptis dan mempertanyakan asumsi", dimension: "C" }
    ]
  },
  {
    id: 9,
    statements: [
      { text: "Saya percaya diri dan asertif dalam menyampaikan pendapat", dimension: "D" },
      { text: "Saya ramah dan mudah tersenyum", dimension: "I" },
      { text: "Saya sabar dan tidak terburu-buru", dimension: "S" },
      { text: "Saya kritis dan menganalisa sebelum bertindak", dimension: "C" }
    ]
  },
  {
    id: 10,
    statements: [
      { text: "Saya suka tantangan yang menguji kemampuan saya", dimension: "D" },
      { text: "Saya suka bercerita dan berbagi pengalaman", dimension: "I" },
      { text: "Saya stabil dan tidak suka perubahan mendadak", dimension: "S" },
      { text: "Saya menghargai presisi dan ketepatan", dimension: "C" }
    ]
  },
  {
    id: 11,
    statements: [
      { text: "Saya tegas dalam memberikan instruksi", dimension: "D" },
      { text: "Saya spontan dan fleksibel", dimension: "I" },
      { text: "Saya tenang dalam situasi yang penuh tekanan", dimension: "S" },
      { text: "Saya membutuhkan informasi lengkap sebelum memutuskan", dimension: "C" }
    ]
  },
  {
    id: 12,
    statements: [
      { text: "Saya ambisius dan selalu ingin maju", dimension: "D" },
      { text: "Saya senang berkolaborasi dan brainstorming", dimension: "I" },
      { text: "Saya puas dengan rutinitas yang nyaman", dimension: "S" },
      { text: "Saya mengikuti standar kualitas yang tinggi", dimension: "C" }
    ]
  },
  {
    id: 13,
    statements: [
      { text: "Saya langsung menghadapi masalah secara frontal", dimension: "D" },
      { text: "Saya bisa memotivasi dan menginspirasi orang lain", dimension: "I" },
      { text: "Saya akomodatif dan mudah menyesuaikan diri", dimension: "S" },
      { text: "Saya cermat dan tidak melewatkan detail penting", dimension: "C" }
    ]
  },
  {
    id: 14,
    statements: [
      { text: "Saya dominan dalam diskusi kelompok", dimension: "D" },
      { text: "Saya ekspresif dalam bahasa tubuh dan gesture", dimension: "I" },
      { text: "Saya pendengar yang empati", dimension: "S" },
      { text: "Saya mempertanyakan validitas informasi", dimension: "C" }
    ]
  },
  {
    id: 15,
    statements: [
      { text: "Saya suka mengontrol situasi dan mengambil alih", dimension: "D" },
      { text: "Saya menikmati networking dan membangun relasi", dimension: "I" },
      { text: "Saya kooperatif dan mudah bekerjasama", dimension: "S" },
      { text: "Saya memerlukan penjelasan yang mendetail", dimension: "C" }
    ]
  },
  {
    id: 16,
    statements: [
      { text: "Saya berorientasi pada kekuasaan dan pengaruh", dimension: "D" },
      { text: "Saya terbuka dan mudah berbagi informasi pribadi", dimension: "I" },
      { text: "Saya menjaga hubungan jangka panjang dengan baik", dimension: "S" },
      { text: "Saya berhati-hati dan menghindari kesalahan", dimension: "C" }
    ]
  },
  {
    id: 17,
    statements: [
      { text: "Saya menuntut dan memiliki ekspektasi tinggi", dimension: "D" },
      { text: "Saya ceria dan membawa energi positif", dimension: "I" },
      { text: "Saya humble dan tidak suka menonjolkan diri", dimension: "S" },
      { text: "Saya menggunakan data untuk mendukung argumen", dimension: "C" }
    ]
  },
  {
    id: 18,
    statements: [
      { text: "Saya independen dan tidak suka dikontrol", dimension: "D" },
      { text: "Saya dramatis dalam menyampaikan cerita", dimension: "I" },
      { text: "Saya dapat dipercaya dan menjaga rahasia", dimension: "S" },
      { text: "Saya skeptis terhadap klaim yang tidak terbukti", dimension: "C" }
    ]
  },
  {
    id: 19,
    statements: [
      { text: "Saya suka membuat keputusan penting sendirian", dimension: "D" },
      { text: "Saya mudah terhubung dengan orang baru", dimension: "I" },
      { text: "Saya setia pada komitmen yang telah dibuat", dimension: "S" },
      { text: "Saya formal dalam komunikasi profesional", dimension: "C" }
    ]
  },
  {
    id: 20,
    statements: [
      { text: "Saya tidak takut menghadapi konfrontasi", dimension: "D" },
      { text: "Saya suka merayakan pencapaian bersama tim", dimension: "I" },
      { text: "Saya menghindari spotlight dan lebih suka di belakang layar", dimension: "S" },
      { text: "Saya menggunakan checklist dan planning yang detail", dimension: "C" }
    ]
  },
  {
    id: 21,
    statements: [
      { text: "Saya bertindak cepat tanpa terlalu banyak pertimbangan", dimension: "D" },
      { text: "Saya mudah bersemangat dengan ide-ide baru", dimension: "I" },
      { text: "Saya memerlukan waktu untuk merasa nyaman dengan perubahan", dimension: "S" },
      { text: "Saya mengikuti prosedur yang sudah terbukti efektif", dimension: "C" }
    ]
  },
  {
    id: 22,
    statements: [
      { text: "Saya langsung memberikan feedback dengan jujur", dimension: "D" },
      { text: "Saya diplomatis dalam menyampaikan kritik", dimension: "I" },
      { text: "Saya menghindari memberikan feedback negatif", dimension: "S" },
      { text: "Saya memberikan feedback berdasarkan fakta objektif", dimension: "C" }
    ]
  },
  {
    id: 23,
    statements: [
      { text: "Saya fokus pada bottom line dan ROI", dimension: "D" },
      { text: "Saya peduli pada aspek manusia dalam bisnis", dimension: "I" },
      { text: "Saya menjaga stabilitas organisasi", dimension: "S" },
      { text: "Saya memastikan compliance dengan regulasi", dimension: "C" }
    ]
  },
  {
    id: 24,
    statements: [
      { text: "Saya suka menghadapi deadline yang ketat", dimension: "D" },
      { text: "Saya kreatif dalam menemukan solusi inovatif", dimension: "I" },
      { text: "Saya konsisten dalam kualitas pekerjaan", dimension: "S" },
      { text: "Saya thoroughness dalam menjalankan tugas", dimension: "C" }
    ]
  }
];

export interface DISCScores {
  D: number;
  I: number;
  S: number;
  C: number;
}

export interface DISCAnswer {
  questionId: number;
  mostLikeMe: number; // index of statement (0-3)
  leastLikeMe: number; // index of statement (0-3)
}
