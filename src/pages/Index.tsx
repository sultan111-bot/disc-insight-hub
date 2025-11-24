import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Brain, Target, Users, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
              <span className="text-sm font-semibold">Career Center Darmajaya</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              DISC Personality Test
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
              Temukan kepribadian dan potensi terbaik Anda untuk mengembangkan karir yang sukses
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate('/test')}
              className="text-lg px-8 py-6 font-semibold shadow-strong hover:shadow-medium transition-all animate-fade-in gap-2"
            >
              Mulai Test Sekarang
              <ArrowRight className="w-5 h-5" />
            </Button>
            <p className="mt-4 text-sm text-white/80 animate-fade-in">
              ✓ Gratis • ✓ 24 Pertanyaan • ✓ Hasil Instan
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa DISC Test Penting?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              DISC adalah metode asesmen kepribadian yang telah terbukti membantu jutaan orang memahami diri mereka dengan lebih baik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard
              icon={<Brain className="w-8 h-8" />}
              title="Kenali Diri Sendiri"
              description="Pahami kekuatan, kelemahan, dan gaya komunikasi Anda"
            />
            <BenefitCard
              icon={<Target className="w-8 h-8" />}
              title="Karir yang Tepat"
              description="Temukan jalur karir yang sesuai dengan kepribadian Anda"
            />
            <BenefitCard
              icon={<Users className="w-8 h-8" />}
              title="Kolaborasi Lebih Baik"
              description="Tingkatkan kemampuan bekerja sama dengan orang lain"
            />
            <BenefitCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Pengembangan Diri"
              description="Dapatkan rekomendasi untuk meningkatkan potensi Anda"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cara Kerja Test</h2>
            <p className="text-lg text-muted-foreground">Sederhana, cepat, dan akurat</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Jawab 24 Pertanyaan"
              description="Pilih pernyataan yang PALING dan PALING TIDAK menggambarkan diri Anda"
            />
            <StepCard
              number="2"
              title="Analisa Otomatis"
              description="Sistem kami menghitung skor D, I, S, dan C Anda secara instan"
            />
            <StepCard
              number="3"
              title="Laporan Lengkap"
              description="Dapatkan insight mendalam tentang kepribadian dan rekomendasi karir Anda"
            />
          </div>
        </div>
      </section>

      {/* DISC Types Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">4 Tipe Kepribadian DISC</h2>
            <p className="text-lg text-muted-foreground">Setiap orang memiliki kombinasi unik dari keempat dimensi ini</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <DISCTypeCard
              type="D"
              title="Dominance"
              color="bg-red-500"
              traits={["Tegas", "Kompetitif", "Berorientasi hasil"]}
            />
            <DISCTypeCard
              type="I"
              title="Influence"
              color="bg-yellow-500"
              traits={["Ramah", "Optimis", "Persuasif"]}
            />
            <DISCTypeCard
              type="S"
              title="Steadiness"
              color="bg-green-500"
              traits={["Stabil", "Loyal", "Kooperatif"]}
            />
            <DISCTypeCard
              type="C"
              title="Compliance"
              color="bg-blue-500"
              traits={["Teliti", "Analitis", "Perfeksionis"]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Siap Menemukan Potensi Terbaik Anda?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Ambil DISC Test sekarang dan dapatkan insight berharga untuk mengembangkan karir Anda
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate('/test')}
            className="text-lg px-8 py-6 font-semibold shadow-strong hover:shadow-medium transition-all gap-2"
          >
            Mulai Test Gratis
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Career Center Darmajaya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <Card className="p-6 shadow-soft hover:shadow-medium transition-all hover-scale">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
};

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-medium">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

interface DISCTypeCardProps {
  type: string;
  title: string;
  color: string;
  traits: string[];
}

const DISCTypeCard = ({ type, title, color, traits }: DISCTypeCardProps) => {
  return (
    <Card className="p-6 shadow-soft hover:shadow-medium transition-all hover-scale">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${color} text-white flex items-center justify-center text-3xl font-bold shadow-medium`}>
        {type}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
      <ul className="space-y-2">
        {traits.map((trait, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
            {trait}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Index;
