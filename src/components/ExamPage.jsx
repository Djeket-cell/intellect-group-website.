import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, CheckCircle, XCircle, Home } from 'lucide-react';
import { getQuestionsForLevel, calculateResult } from '../data/examQuestions';
import logo from '../assets/logo.jpg';

const ExamPage = () => {
  const { level } = useParams();
  const navigate = useNavigate();
  const [examData, setExamData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [result, setResult] = useState(null);
  const [candidateName, setCandidateName] = useState('');
  const [showNameInput, setShowNameInput] = useState(true);

  useEffect(() => {
    const data = getQuestionsForLevel(level);
    if (data) {
      setExamData(data);
      setTimeLeft(data.duration * 60); // Convert minutes to seconds
      setAnswers(new Array(data.questions.length).fill(-1));
    } else {
      navigate('/');
    }
  }, [level, navigate]);

  useEffect(() => {
    let timer;
    if (examStarted && timeLeft > 0 && !examFinished) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            finishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [examStarted, timeLeft, examFinished]);

  const startExam = () => {
    if (candidateName.trim()) {
      setExamStarted(true);
      setShowNameInput(false);
    }
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < examData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishExam = () => {
    setExamFinished(true);
    const correctAnswers = examData.questions.map(q => q.correct);
    const examResult = calculateResult(answers, correctAnswers);
    setResult(examResult);
    
    // Save exam result to localStorage for admin panel
    const examResults = JSON.parse(localStorage.getItem('examResults') || '[]');
    const newResult = {
      id: Date.now(),
      candidateName,
      level: examData.title,
      date: new Date().toLocaleDateString('fr-FR'),
      time: new Date().toLocaleTimeString('fr-FR'),
      score: examResult.score,
      total: examResult.total,
      percentage: examResult.percentage,
      remark: examResult.remark,
      answers: answers,
      correctAnswers: correctAnswers,
      questions: examData.questions
    };
    examResults.push(newResult);
    localStorage.setItem('examResults', JSON.stringify(examResults));
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!examData) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }

  if (showNameInput) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-yellow-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
          <div className="text-center mb-8">
            <img src={logo} alt="Intellect-Group" className="h-20 w-20 mx-auto rounded-full mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Examen - {examData.title}</h1>
            <p className="text-gray-600">Durée : {examData.duration} minutes</p>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Votre nom complet :
            </label>
            <input
              type="text"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none"
              placeholder="Entrez votre nom complet"
            />
          </div>
          
          <button
            onClick={startExam}
            disabled={!candidateName.trim()}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Commencer l'examen
          </button>
        </div>
      </div>
    );
  }

  if (examFinished && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-yellow-50 flex items-center justify-center">
        <div className="result-card max-w-2xl w-full mx-4">
          <div className="text-center mb-8">
            <img src={logo} alt="Intellect-Group" className="h-20 w-20 mx-auto rounded-full mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Résultats de l'examen</h1>
            <p className="text-xl text-gray-600">{candidateName}</p>
            <p className="text-lg text-gray-500">{examData.title}</p>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg p-6 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">
                {result.score}/{result.total}
              </div>
              <div className="text-2xl mb-2">{result.percentage}%</div>
              <div className="text-lg font-semibold">{result.remark}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-800">{result.score}</div>
              <div className="text-green-600">Bonnes réponses</div>
            </div>
            <div className="bg-red-100 p-4 rounded-lg text-center">
              <XCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-800">{result.total - result.score}</div>
              <div className="text-red-600">Mauvaises réponses</div>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="w-full bg-gray-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Home className="h-5 w-5" />
            <span>Retour à l'accueil</span>
          </button>
        </div>
      </div>
    );
  }

  const question = examData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / examData.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-yellow-50">
      {/* Header with timer */}
      <header className="bg-white shadow-lg border-b-4 border-yellow-400 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Intellect-Group" className="h-12 w-12 rounded-full" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">{examData.title}</h1>
                <p className="text-gray-600">{candidateName}</p>
              </div>
            </div>
            <div className="exam-timer flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span className="text-lg">{formatTime(timeLeft)}</span>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="mt-4">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-center mt-2 text-sm text-gray-600">
              Question {currentQuestion + 1} sur {examData.questions.length}
            </div>
          </div>
        </div>
      </header>

      {/* Question content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="question-card">
            <div className="mb-4">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                {question.subject}
              </span>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(currentQuestion, index)}
                  className={`option-button ${answers[currentQuestion] === index ? 'selected' : ''}`}
                >
                  <span className="font-semibold mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="bg-gray-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Précédent
            </button>

            <div className="text-center">
              <p className="text-gray-600 mb-2">
                Réponses données : {answers.filter(a => a !== -1).length}/{examData.questions.length}
              </p>
              {answers.filter(a => a !== -1).length === examData.questions.length && (
                <button
                  onClick={finishExam}
                  className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-300"
                >
                  Terminer l'examen
                </button>
              )}
            </div>

            {currentQuestion < examData.questions.length - 1 ? (
              <button
                onClick={nextQuestion}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
              >
                Suivant
              </button>
            ) : (
              <button
                onClick={finishExam}
                className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-300"
              >
                Terminer
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExamPage;

