import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { DISCAnswer } from '@/data/discQuestions';
import { calculateDISCScores, generateDISCReport, DISCReport } from '@/utils/discCalculator';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { toast } from 'sonner';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [report, setReport] = useState<DISCReport | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const answers = location.state?.answers as DISCAnswer[] | undefined;
    
    if (!answers || answers.length === 0) {
      toast.error('Tidak ada data hasil test. Silakan ambil test terlebih dahulu.');
      navigate('/');
      return;
    }

    // Simulate loading for better UX
    setTimeout(() => {
      const scores = calculateDISCScores(answers);
      const generatedReport = generateDISCReport(scores);
      setReport(generatedReport);
      setLoading(false);
    }, 1500);
  }, [location, navigate]);

  const handlePrint = () => {
    window.print();
    toast.success('Membuka dialog print...');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Hasil DISC Test Saya',
          text: `Tipe kepribadian DISC saya adalah ${report?.type}! Cek hasil lengkap di Career Center Darmajaya.`,
          url: window.location.href,
        });
        toast.success('Berhasil membagikan hasil!');
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link hasil telah disalin ke clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-light/10 via-background to-accent/5 flex items-center justify-center">
        <Card className="p-8 shadow-strong text-center max-w-md">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <h2 className="text-2xl font-bold mb-2">Menganalisa Hasil Anda...</h2>
            <p className="text-muted-foreground">Mohon tunggu sebentar</p>
          </div>
          <Progress value={66} className="h-2" />
        </Card>
      </div>
    );
  }

  if (!report) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/10 via-background to-accent/5">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start print:hidden">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleShare} className="gap-2">
              <Share2 className="w-4 h-4" />
              Bagikan
            </Button>
            <Button onClick={handlePrint} className="gap-2">
              <Download className="w-4 h-4" />
              Download/Print
            </Button>
          </div>
        </div>

        {/* Main Result Card */}
        <Card className="p-8 md:p-12 shadow-strong mb-8 text-center animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">HASIL DISC TEST ANDA</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
            Tipe {report.type}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {report.summary}
          </p>
        </Card>

        {/* Score Breakdown */}
        <Card className="p-6 md:p-8 shadow-medium mb-8">
          <h2 className="text-2xl font-bold mb-6">Skor DISC Anda</h2>
          <div className="space-y-6">
            {Object.entries(report.scoreMeanings).map(([key, meaning]) => {
              const score = report.scores[key as keyof typeof report.scores];
              const maxScore = 24; // Based on 24 questions
              const percentage = ((score + maxScore) / (maxScore * 2)) * 100; // Normalize to 0-100%
              
              return (
                <div key={key}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-lg">{key}</span>
                    <span className="text-muted-foreground">{score} poin</span>
                  </div>
                  <Progress value={Math.max(0, percentage)} className="h-3 mb-2" />
                  <p className="text-sm text-muted-foreground">{meaning}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Detailed Sections */}
        <div className="space-y-8">
          <ReportSection title="Ciri-ciri Kepribadian Utama" items={report.traits} />
          <ReportSection title="Perilaku Biasa" items={report.usualBehavior} />
          <ReportSection title="Perilaku di Bawah Tekanan" items={report.stressBehavior} variant="warning" />
          <ReportSection title="Kekuatan Utama" items={report.strengths} variant="success" />
          <ReportSection title="Tantangan / Kelemahan" items={report.challenges} variant="warning" />
          <ReportSection title="Motivator" items={report.motivators} />
          <ReportSection title="Lingkungan Kerja Ideal" items={report.idealEnvironment} />
          <ReportSection title="Peran dalam Tim" items={report.teamRole} />
          <ReportSection title="Rekomendasi Pengembangan Pribadi" items={report.development} variant="info" />
        </div>

        {/* Footer CTA */}
        <Card className="p-8 mt-12 text-center gradient-hero text-white print:hidden">
          <h3 className="text-2xl font-bold mb-4">Siap Mengembangkan Karir Anda?</h3>
          <p className="mb-6 text-white/90">
            Gunakan insight dari hasil DISC test ini untuk memaksimalkan potensi karir Anda
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate('/')}
            className="font-semibold"
          >
            Ambil Test Lagi
          </Button>
        </Card>
      </div>
    </div>
  );
};

interface ReportSectionProps {
  title: string;
  items: string[];
  variant?: 'default' | 'success' | 'warning' | 'info';
}

const ReportSection = ({ title, items, variant = 'default' }: ReportSectionProps) => {
  const variantStyles = {
    default: 'border-l-primary',
    success: 'border-l-green-500',
    warning: 'border-l-orange-500',
    info: 'border-l-blue-500'
  };

  return (
    <Card className={`p-6 md:p-8 shadow-soft border-l-4 ${variantStyles[variant]}`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ResultPage;
