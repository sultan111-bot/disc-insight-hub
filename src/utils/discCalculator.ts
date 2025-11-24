import { DISCAnswer, DISCScores, discQuestions } from '@/data/discQuestions';

export function calculateDISCScores(answers: DISCAnswer[]): DISCScores {
  const scores: DISCScores = {
    D: 0,
    I: 0,
    S: 0,
    C: 0
  };

  answers.forEach(answer => {
    const question = discQuestions.find(q => q.id === answer.questionId);
    if (!question) return;

    // MOST LIKE ME: +1 point
    const mostStatement = question.statements[answer.mostLikeMe];
    scores[mostStatement.dimension] += 1;

    // LEAST LIKE ME: -1 point
    const leastStatement = question.statements[answer.leastLikeMe];
    scores[leastStatement.dimension] -= 1;
  });

  return scores;
}

export function getDominantType(scores: DISCScores): string {
  const sortedScores = Object.entries(scores)
    .sort(([, a], [, b]) => b - a);

  const highest = sortedScores[0];
  const secondHighest = sortedScores[1];

  // If the top two scores are close (within 3 points), it's a combination type
  if (Math.abs(highest[1] - secondHighest[1]) <= 3) {
    return `${highest[0]}${secondHighest[0]}`;
  }

  return highest[0];
}

export interface DISCReport {
  type: string;
  scores: DISCScores;
  summary: string;
  scoreMeanings: Record<string, string>;
  traits: string[];
  usualBehavior: string[];
  stressBehavior: string[];
  strengths: string[];
  challenges: string[];
  motivators: string[];
  idealEnvironment: string[];
  teamRole: string[];
  development: string[];
}

export function generateDISCReport(scores: DISCScores): DISCReport {
  const type = getDominantType(scores);
  
  const reports: Record<string, Omit<DISCReport, 'scores' | 'type' | 'scoreMeanings'>> = {
    'D': {
      summary: 'Anda memiliki kepribadian Dominance yang kuat. Anda adalah individu yang tegas, kompetitif, dan berorientasi pada hasil. Anda senang mengambil keputusan cepat dan menghadapi tantangan.',
      traits: [
        'Tegas dan langsung dalam komunikasi',
        'Berani mengambil risiko',
        'Kompetitif dan ambisius',
        'Berorientasi pada hasil dan pencapaian',
        'Independen dan percaya diri'
      ],
      usualBehavior: [
        'Mengambil inisiatif dan memimpin',
        'Membuat keputusan dengan cepat',
        'Fokus pada tujuan dan deadline',
        'Menantang status quo',
        'Berkomunikasi dengan langsung dan tegas'
      ],
      stressBehavior: [
        'Menjadi terlalu agresif atau dominan',
        'Tidak sabar dengan proses yang lambat',
        'Mengabaikan perasaan orang lain',
        'Membuat keputusan terburu-buru',
        'Kesulitan mendengarkan pendapat orang lain'
      ],
      strengths: [
        'Kepemimpinan yang kuat',
        'Kemampuan membuat keputusan cepat',
        'Berani menghadapi konflik',
        'Fokus pada hasil',
        'Mendorong perubahan dan inovasi'
      ],
      challenges: [
        'Terlalu kritis terhadap orang lain',
        'Kurang empati dalam interaksi',
        'Tidak sabar dengan detail',
        'Kesulitan delegasi',
        'Terlalu fokus pada tujuan hingga mengabaikan proses'
      ],
      motivators: [
        'Tantangan dan kompetisi',
        'Kewenangan dan kontrol',
        'Hasil yang terukur',
        'Kemajuan karir yang cepat',
        'Pengakuan atas pencapaian'
      ],
      idealEnvironment: [
        'Lingkungan yang menghargai hasil',
        'Otonomi dalam pengambilan keputusan',
        'Tantangan yang bervariasi',
        'Peluang untuk memimpin',
        'Sistem reward berbasis kinerja'
      ],
      teamRole: [
        'Leader atau decision maker',
        'Mendorong tim mencapai target',
        'Mengambil inisiatif dalam proyek',
        'Mengatasi hambatan dengan tegas',
        'Membawa energi kompetitif ke tim'
      ],
      development: [
        'Latih kesabaran dan kemampuan mendengarkan',
        'Kembangkan empati dalam berinteraksi',
        'Belajar delegasi yang efektif',
        'Perhatikan detail dan proses, bukan hanya hasil',
        'Latih komunikasi yang lebih diplomatis'
      ]
    },
    'I': {
      summary: 'Anda memiliki kepribadian Influence yang dominan. Anda adalah individu yang ramah, optimis, dan senang berinteraksi dengan orang lain. Anda mudah bergaul dan bisa mempengaruhi orang lain dengan antusiasme Anda.',
      traits: [
        'Ramah dan mudah bergaul',
        'Optimis dan antusias',
        'Ekspresif dalam komunikasi',
        'Kreatif dan inovatif',
        'Persuasif dan mempengaruhi'
      ],
      usualBehavior: [
        'Membangun relasi dengan mudah',
        'Berbagi ide dan inspirasi',
        'Menciptakan atmosfer positif',
        'Berkomunikasi dengan ekspresif',
        'Menginspirasi dan memotivasi orang lain'
      ],
      stressBehavior: [
        'Terlalu terburu-buru dalam membuat keputusan',
        'Kesulitan fokus pada satu tugas',
        'Mengabaikan detail penting',
        'Over-promise dan under-deliver',
        'Terlalu bergantung pada persetujuan orang lain'
      ],
      strengths: [
        'Kemampuan komunikasi yang kuat',
        'Networking dan membangun relasi',
        'Kreativitas dan inovasi',
        'Kemampuan persuasi',
        'Membawa energi positif ke tim'
      ],
      challenges: [
        'Kesulitan dengan detail dan follow-through',
        'Terlalu optimis hingga tidak realistis',
        'Mudah teralihkan',
        'Menghindari konflik',
        'Terlalu banyak berbicara, kurang mendengarkan'
      ],
      motivators: [
        'Pengakuan publik',
        'Interaksi sosial',
        'Lingkungan yang fun dan kreatif',
        'Kebebasan berekspresi',
        'Peluang mempengaruhi orang lain'
      ],
      idealEnvironment: [
        'Lingkungan yang kolaboratif',
        'Budaya yang menghargai kreativitas',
        'Kesempatan untuk berinteraksi',
        'Suasana yang positif dan energik',
        'Fleksibilitas dalam bekerja'
      ],
      teamRole: [
        'Motivator dan cheerleader tim',
        'Membangun semangat tim',
        'Menghubungkan orang-orang',
        'Membawa ide-ide kreatif',
        'Representasi eksternal tim'
      ],
      development: [
        'Tingkatkan kemampuan follow-through',
        'Fokus pada detail dan akurasi',
        'Kelola waktu dengan lebih baik',
        'Dengarkan lebih banyak, bicara lebih sedikit',
        'Buat komitmen yang realistis'
      ]
    },
    'S': {
      summary: 'Anda memiliki kepribadian Steadiness yang menonjol. Anda adalah individu yang stabil, loyal, dan kooperatif. Anda menghargai keharmonisan dan konsistensi dalam lingkungan Anda.',
      traits: [
        'Stabil dan konsisten',
        'Loyal dan dapat diandalkan',
        'Sabar dan tenang',
        'Kooperatif dan supportif',
        'Pendengar yang baik'
      ],
      usualBehavior: [
        'Mendukung anggota tim',
        'Menjaga stabilitas dan rutinitas',
        'Mendengarkan dengan empati',
        'Bekerja secara konsisten',
        'Menghindari konflik dan drama'
      ],
      stressBehavior: [
        'Resistensi terhadap perubahan',
        'Kesulitan mengatakan "tidak"',
        'Menahan perasaan negatif',
        'Menjadi pasif-agresif',
        'Terlalu bergantung pada orang lain'
      ],
      strengths: [
        'Keandalan dan konsistensi',
        'Kemampuan mendengarkan',
        'Loyalitas pada tim',
        'Menciptakan harmoni',
        'Kesabaran dalam menghadapi masalah'
      ],
      challenges: [
        'Kesulitan menghadapi perubahan',
        'Terlalu akomodatif',
        'Kurang asertif',
        'Menghindari konfrontasi',
        'Sulit mengekspresikan ketidaksetujuan'
      ],
      motivators: [
        'Stabilitas dan keamanan',
        'Apresiasi personal',
        'Lingkungan yang harmonis',
        'Kontribusi pada tim',
        'Rutinitas yang jelas'
      ],
      idealEnvironment: [
        'Lingkungan yang stabil dan prediktable',
        'Budaya yang supportif',
        'Struktur organisasi yang jelas',
        'Minimal konflik',
        'Kesempatan membantu orang lain'
      ],
      teamRole: [
        'Stabilizer dan peacemaker',
        'Pendukung yang reliable',
        'Mediator dalam konflik',
        'Menjaga moral tim',
        'Implementer yang konsisten'
      ],
      development: [
        'Tingkatkan kemampuan beradaptasi dengan perubahan',
        'Latih asertivitas dan kemampuan mengatakan "tidak"',
        'Ekspresikan pendapat lebih terbuka',
        'Keluar dari comfort zone',
        'Kembangkan kemampuan menangani konflik'
      ]
    },
    'C': {
      summary: 'Anda memiliki kepribadian Compliance yang dominan. Anda adalah individu yang teliti, analitis, dan perfeksionis. Anda menghargai akurasi, kualitas, dan mengikuti standar yang tinggi.',
      traits: [
        'Analitis dan teliti',
        'Perfeksionis dan menghargai kualitas',
        'Sistematis dan terorganisir',
        'Objektif dan faktual',
        'Hati-hati dan berhati-hati'
      ],
      usualBehavior: [
        'Menganalisa data dengan detail',
        'Mengikuti prosedur dan aturan',
        'Memastikan akurasi dan kualitas',
        'Merencanakan dengan cermat',
        'Berkomunikasi berdasarkan fakta'
      ],
      stressBehavior: [
        'Terlalu kritis dan perfeksionis',
        'Paralysis by analysis',
        'Kesulitan membuat keputusan',
        'Menjadi terlalu kaku',
        'Fokus berlebihan pada detail kecil'
      ],
      strengths: [
        'Perhatian terhadap detail',
        'Kemampuan analitis yang kuat',
        'Standar kualitas tinggi',
        'Sistematis dan terorganisir',
        'Objektivitas dalam penilaian'
      ],
      challenges: [
        'Terlalu perfeksionis',
        'Lambat dalam pengambilan keputusan',
        'Kesulitan dengan ambiguitas',
        'Terlalu kritis terhadap diri sendiri dan orang lain',
        'Resistensi terhadap perubahan yang tidak terencana'
      ],
      motivators: [
        'Akurasi dan presisi',
        'Kesempatan menganalisa',
        'Standar kualitas tinggi',
        'Informasi dan data yang lengkap',
        'Pengakuan atas ketelitian'
      ],
      idealEnvironment: [
        'Lingkungan yang terstruktur',
        'Prosedur yang jelas',
        'Waktu untuk analisa',
        'Standar kualitas yang tinggi',
        'Minimal gangguan dan interupsi'
      ],
      teamRole: [
        'Quality controller',
        'Analyst dan problem solver',
        'Memastikan akurasi',
        'Mengidentifikasi risiko',
        'Mengembangkan sistem dan prosedur'
      ],
      development: [
        'Fleksibilitas dalam standar',
        'Kemampuan membuat keputusan lebih cepat',
        'Toleransi terhadap ambiguitas',
        'Mengurangi perfeksionisme',
        'Fokus pada big picture, tidak hanya detail'
      ]
    }
  };

  // For combination types (e.g., DI, DS, DC, etc.)
  const baseReport = reports[type[0]] || reports['D'];
  
  const scoreMeanings = {
    D: `Dominance (D) = ${scores.D} - Mengukur seberapa kuat Anda dalam menghadapi tantangan, mengambil keputusan, dan mengambil kontrol atas situasi.`,
    I: `Influence (I) = ${scores.I} - Mengukur seberapa kuat Anda dalam mempengaruhi orang lain, berkomunikasi, dan membangun relasi.`,
    S: `Steadiness (S) = ${scores.S} - Mengukur seberapa kuat Anda menghargai stabilitas, konsistensi, dan kerjasama tim.`,
    C: `Compliance (C) = ${scores.C} - Mengukur seberapa kuat Anda memperhatikan detail, kualitas, dan mengikuti standar/prosedur.`
  };

  return {
    type,
    scores,
    summary: baseReport.summary,
    scoreMeanings,
    traits: baseReport.traits,
    usualBehavior: baseReport.usualBehavior,
    stressBehavior: baseReport.stressBehavior,
    strengths: baseReport.strengths,
    challenges: baseReport.challenges,
    motivators: baseReport.motivators,
    idealEnvironment: baseReport.idealEnvironment,
    teamRole: baseReport.teamRole,
    development: baseReport.development
  };
}
