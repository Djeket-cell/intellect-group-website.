import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Award, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.jpg';

const HomePage = () => {
  const examLevels = [
    {
      id: 'ce2-cm1',
      title: 'CE2 à CM1',
      description: 'Évaluation pour les classes de CE2 à CM1',
      subjects: ['Écriture', 'Règles de grammaire', 'Culture générale'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: '6eme-3eme',
      title: '6ème à 3ème',
      description: 'Évaluation pour le collège',
      subjects: ['Mathématiques', 'Français', 'Histoire-Géo', 'Culture générale', 'Physique-Chimie', 'Logique'],
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'serie-a2',
      title: 'Série A2',
      description: 'Évaluation pour la série A2',
      subjects: ['Philosophie', 'Français', 'Anglais'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'serie-a1',
      title: 'Série A1',
      description: 'Évaluation pour la série A1',
      subjects: ['Mathématiques', 'Histoire-Géo', 'Physique', 'Philosophie', 'Français'],
      color: 'from-red-400 to-red-600'
    },
    {
      id: 'serie-d',
      title: 'Série D',
      description: 'Évaluation pour la série D',
      subjects: ['SVT', 'Mathématiques', 'Physique'],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-yellow-400">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Intellect-Group Logo" className="h-16 w-16 rounded-full shadow-lg" />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Intellect-Group</h1>
                <p className="text-yellow-600 font-semibold">L'excellence à tout prix</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-5 w-5" />
                <span>+225 05 02 14 4623</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>Marcory, Côte d'Ivoire</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-gold py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-6 animate-pulse-gold">
            L'excellence à tout prix
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Intellect-Group est votre partenaire de confiance pour le placement de professeurs à domicile 
            en Côte d'Ivoire. Nous couvrons toutes les séries : A, D, C avec des enseignants qualifiés 
            et expérimentés.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
              <Award className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Série A</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
              <GraduationCap className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Série D</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
              <Users className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Série C</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Évaluations par Niveau
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choisissez votre niveau d'enseignement pour passer l'évaluation correspondante. 
              Chaque test dure 20 minutes et évalue vos compétences dans les matières spécifiques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examLevels.map((level) => (
              <div key={level.id} className="question-card group hover:scale-105 transition-transform duration-300">
                <div className={`h-2 bg-gradient-to-r ${level.color} rounded-t-lg mb-4`}></div>
                <h4 className="text-2xl font-bold text-gray-800 mb-3">{level.title}</h4>
                <p className="text-gray-600 mb-4">{level.description}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-700 mb-2">Matières évaluées :</h5>
                  <div className="flex flex-wrap gap-2">
                    {level.subjects.map((subject, index) => (
                      <span 
                        key={index}
                        className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  to={`/exam/${level.id}`}
                  className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 px-6 rounded-lg text-center hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Commencer l'évaluation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-8">
              Pourquoi choisir Intellect-Group ?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-yellow-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Professeurs Qualifiés</h4>
                <p className="text-gray-600">
                  Nos enseignants sont rigoureusement sélectionnés et évalués pour garantir 
                  la qualité de l'enseignement.
                </p>
              </div>
              <div className="p-6">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Excellence Garantie</h4>
                <p className="text-gray-600">
                  Notre devise "L'excellence à tout prix" reflète notre engagement 
                  envers la réussite de nos élèves.
                </p>
              </div>
              <div className="p-6">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Toutes Séries</h4>
                <p className="text-gray-600">
                  Nous couvrons toutes les séries (A, D, C) et tous les niveaux 
                  du primaire au secondaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src={logo} alt="Intellect-Group Logo" className="h-12 w-12 rounded-full" />
              <div>
                <h5 className="text-xl font-bold">Intellect-Group</h5>
                <p className="text-yellow-400">L'excellence à tout prix</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2">
                <Phone className="inline h-4 w-4 mr-2" />
                +225 05 02 14 4623
              </p>
              <p>
                <MapPin className="inline h-4 w-4 mr-2" />
                Marcory, Côte d'Ivoire
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center">
            <p>&copy; 2024 Intellect-Group. Tous droits réservés.</p>
            <Link 
              to="/admin" 
              className="text-yellow-400 hover:text-yellow-300 text-sm mt-2 inline-block"
            >
              Panneau d'administration
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

