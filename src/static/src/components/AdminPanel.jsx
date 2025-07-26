import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Users, Calendar, Clock, CheckCircle, XCircle, Home, Eye, EyeOff, RefreshCw } from 'lucide-react';
import { api } from '../utils/api';
import logo from '../assets/logo.jpg';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [examResults, setExamResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    totalCandidates: 0,
    excellentResults: 0,
    averageResults: 0,
    poorResults: 0
  });

  useEffect(() => {
    if (isAuthenticated) {
      loadExamResults();
      loadStats();
    }
  }, [isAuthenticated]);

  const loadExamResults = async () => {
    setLoading(true);
    try {
      const results = await api.getAllExamResults();
      setExamResults(results);
    } catch (error) {
      console.error('Erreur lors du chargement des résultats:', error);
      // Fallback vers localStorage en cas d'erreur
      const localResults = JSON.parse(localStorage.getItem('examResults') || '[]');
      setExamResults(localResults.sort((a, b) => b.id - a.id));
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const statsData = await api.getExamStats();
      setStats(statsData);
    } catch (error) {
      console.error('Erreur lors du chargement des statistiques:', error);
      // Calculer les stats localement en cas d'erreur
      const localResults = JSON.parse(localStorage.getItem('examResults') || '[]');
      const localStats = {
        totalCandidates: localResults.length,
        excellentResults: localResults.filter(r => r.percentage >= 75).length,
        averageResults: localResults.filter(r => r.percentage >= 50 && r.percentage < 75).length,
        poorResults: localResults.filter(r => r.percentage < 50).length
      };
      setStats(localStats);
    }
  };

  const handleLogin = () => {
    if (password === '1231') {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Code d\'accès incorrect !');
      setPassword('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const getScoreColor = (percentage) => {
    if (percentage < 50) return 'text-red-600 bg-red-100';
    if (percentage < 75) return 'text-yellow-600 bg-yellow-100';
    return 'text-green-600 bg-green-100';
  };

  const clearAllResults = async () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer tous les résultats ?')) {
      setLoading(true);
      try {
        await api.clearAllExamResults();
        setExamResults([]);
        setSelectedResult(null);
        setStats({
          totalCandidates: 0,
          excellentResults: 0,
          averageResults: 0,
          poorResults: 0
        });
        alert('Tous les résultats ont été supprimés avec succès !');
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
        // Fallback vers localStorage
        localStorage.removeItem('examResults');
        setExamResults([]);
        setSelectedResult(null);
        alert('Résultats supprimés localement (erreur serveur)');
      } finally {
        setLoading(false);
      }
    }
  };

  const refreshData = () => {
    loadExamResults();
    loadStats();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-yellow-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
          <div className="text-center mb-8">
            <img src={logo} alt="Intellect-Group" className="h-20 w-20 mx-auto rounded-full mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Panneau d'Administration</h1>
            <p className="text-gray-600">Accès sécurisé</p>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              <Lock className="inline h-4 w-4 mr-2" />
              Code d'accès :
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none pr-12"
                placeholder="Entrez le code d'accès"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
          
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 mb-4"
          >
            Se connecter
          </button>

          <button
            onClick={() => navigate('/')}
            className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Home className="h-4 w-4" />
            <span>Retour à l'accueil</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-yellow-400">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Intellect-Group" className="h-16 w-16 rounded-full" />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Panneau d'Administration</h1>
                <p className="text-yellow-600 font-semibold">Intellect-Group - Résultats globaux</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={refreshData}
                disabled={loading}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center space-x-2 disabled:opacity-50"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                <span>Actualiser</span>
              </button>
              <button
                onClick={clearAllResults}
                disabled={loading}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300 disabled:opacity-50"
              >
                Effacer tout
              </button>
              <button
                onClick={() => navigate('/')}
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-all duration-300 flex items-center space-x-2"
              >
                <Home className="h-4 w-4" />
                <span>Accueil</span>
              </button>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-all duration-300"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{stats.totalCandidates}</div>
            <div className="text-gray-600">Total candidats</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{stats.excellentResults}</div>
            <div className="text-gray-600">Excellents résultats</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Clock className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{stats.averageResults}</div>
            <div className="text-gray-600">Résultats moyens</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <XCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{stats.poorResults}</div>
            <div className="text-gray-600">Résultats faibles</div>
          </div>
        </div>

        {loading ? (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <RefreshCw className="h-16 w-16 text-gray-400 mx-auto mb-4 animate-spin" />
            <h3 className="text-xl font-bold text-gray-600 mb-2">Chargement en cours...</h3>
            <p className="text-gray-500">Récupération des données depuis le serveur</p>
          </div>
        ) : examResults.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-600 mb-2">Aucun résultat d'examen</h3>
            <p className="text-gray-500">Les résultats des examens apparaîtront ici une fois que les candidats auront passé les tests.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Results List */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Résultats des examens ({examResults.length})
                </h2>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {examResults.map((result) => (
                  <div
                    key={result.id}
                    onClick={() => setSelectedResult(result)}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedResult?.id === result.id ? 'bg-yellow-50 border-yellow-200' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{result.candidateName}</h3>
                        <p className="text-sm text-gray-600">{result.level}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {result.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {result.time}
                          </span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getScoreColor(result.percentage)}`}>
                        {result.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed View */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800">
                  {selectedResult ? 'Détails de l\'examen' : 'Sélectionnez un résultat'}
                </h2>
              </div>
              <div className="p-6">
                {selectedResult ? (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{selectedResult.candidateName}</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Niveau :</span>
                          <span className="ml-2 font-medium">{selectedResult.level}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Date :</span>
                          <span className="ml-2 font-medium">{selectedResult.date}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Heure :</span>
                          <span className="ml-2 font-medium">{selectedResult.time}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Score :</span>
                          <span className="ml-2 font-medium">{selectedResult.score}/{selectedResult.total}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className={`inline-block px-4 py-2 rounded-lg text-sm font-semibold ${getScoreColor(selectedResult.percentage)}`}>
                          {selectedResult.remark}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 max-h-64 overflow-y-auto">
                      <h4 className="font-semibold text-gray-800">Réponses détaillées :</h4>
                      {selectedResult.questions.map((question, index) => {
                        const userAnswer = selectedResult.answers[index];
                        const correctAnswer = selectedResult.correctAnswers[index];
                        const isCorrect = userAnswer === correctAnswer;
                        
                        return (
                          <div key={index} className="border border-gray-200 rounded-lg p-3">
                            <div className="flex items-start justify-between mb-2">
                              <span className="text-sm font-medium text-gray-600">
                                Q{index + 1} - {question.subject}
                              </span>
                              {isCorrect ? (
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              ) : (
                                <XCircle className="h-5 w-5 text-red-600" />
                              )}
                            </div>
                            <p className="text-sm text-gray-800 mb-2">{question.question}</p>
                            <div className="text-xs space-y-1">
                              <div className={`${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                Réponse donnée : {userAnswer !== -1 ? question.options[userAnswer] : 'Aucune réponse'}
                              </div>
                              {!isCorrect && (
                                <div className="text-green-600">
                                  Bonne réponse : {question.options[correctAnswer]}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <Users className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                    <p>Cliquez sur un résultat dans la liste pour voir les détails</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;

