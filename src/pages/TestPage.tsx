import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { discQuestions, DISCAnswer } from '@/data/discQuestions';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

const TestPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<DISCAnswer[]>([]);
  const [mostLikeMe, setMostLikeMe] = useState<number | null>(null);
  const [leastLikeMe, setLeastLikeMe] = useState<number | null>(null);

  const question = discQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / discQuestions.length) * 100;

  const handleSelectMost = (index: number) => {
    if (leastLikeMe === index) {
      toast.error('Anda tidak bisa memilih pernyataan yang sama untuk MOST dan LEAST!');
      return;
    }
    setMostLikeMe(index);
  };

  const handleSelectLeast = (index: number) => {
    if (mostLikeMe === index) {
      toast.error('Anda tidak bisa memilih pernyataan yang sama untuk MOST dan LEAST!');
      return;
    }
    setLeastLikeMe(index);
  };

  const validateAnswer = (): boolean => {
    if (mostLikeMe === null || leastLikeMe === null) {
      toast.error('Silakan pilih MOST LIKE ME dan LEAST LIKE ME sebelum melanjutkan!');
      return false;
    }
    if (mostLikeMe === leastLikeMe) {
      toast.error('MOST dan LEAST tidak boleh sama!');
      return false;
    }
    return true;
  };

  const saveCurrentAnswer = () => {
    if (!validateAnswer()) return false;

    const newAnswer: DISCAnswer = {
      questionId: question.id,
      mostLikeMe: mostLikeMe!,
      leastLikeMe: leastLikeMe!
    };

    const existingIndex = answers.findIndex(a => a.questionId === question.id);
    if (existingIndex >= 0) {
      const newAnswers = [...answers];
      newAnswers[existingIndex] = newAnswer;
      setAnswers(newAnswers);
    } else {
      setAnswers([...answers, newAnswer]);
    }

    return true;
  };

  const goToNext = () => {
    if (!saveCurrentAnswer()) return;

    if (currentQuestion < discQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      // Load existing answer if available
      const existingAnswer = answers.find(a => a.questionId === discQuestions[currentQuestion + 1].id);
      if (existingAnswer) {
        setMostLikeMe(existingAnswer.mostLikeMe);
        setLeastLikeMe(existingAnswer.leastLikeMe);
      } else {
        setMostLikeMe(null);
        setLeastLikeMe(null);
      }
    } else {
      // Submit test
      navigate('/result', { state: { answers: [...answers, { questionId: question.id, mostLikeMe: mostLikeMe!, leastLikeMe: leastLikeMe! }] } });
    }
  };

  const goToPrev = () => {
    if (currentQuestion > 0) {
      saveCurrentAnswer();
      setCurrentQuestion(currentQuestion - 1);
      // Load previous answer
      const prevAnswer = answers.find(a => a.questionId === discQuestions[currentQuestion - 1].id);
      if (prevAnswer) {
        setMostLikeMe(prevAnswer.mostLikeMe);
        setLeastLikeMe(prevAnswer.leastLikeMe);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/10 via-background to-accent/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">DISC Personality Test</h1>
            <span className="text-sm text-muted-foreground">
              Pertanyaan {currentQuestion + 1} dari {discQuestions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="p-6 md:p-8 shadow-strong mb-8 animate-fade-in">
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-foreground">
              Pilih 1 pernyataan yang <span className="text-primary">PALING</span> menggambarkan diri Anda dan 1 yang <span className="text-destructive">PALING TIDAK</span> menggambarkan diri Anda:
            </h2>
          </div>

          <div className="space-y-4">
            {question.statements.map((statement, index) => (
              <div key={index} className="flex items-start gap-3 p-4 border rounded-lg hover:shadow-soft transition-all">
                <div className="flex-1">
                  <p className="text-sm md:text-base">{statement.text}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={mostLikeMe === index ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleSelectMost(index)}
                    className="min-w-[80px]"
                  >
                    {mostLikeMe === index ? '✓ MOST' : 'MOST'}
                  </Button>
                  <Button
                    variant={leastLikeMe === index ? 'destructive' : 'outline'}
                    size="sm"
                    onClick={() => handleSelectLeast(index)}
                    className="min-w-[80px]"
                  >
                    {leastLikeMe === index ? '✓ LEAST' : 'LEAST'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={goToPrev}
            disabled={currentQuestion === 0}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Sebelumnya
          </Button>

          <Button
            onClick={goToNext}
            className="gap-2"
          >
            {currentQuestion === discQuestions.length - 1 ? 'Selesai & Lihat Hasil' : 'Selanjutnya'}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
