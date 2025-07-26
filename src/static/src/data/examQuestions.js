// Questions d'examen pour Intellect-Group
// Organisées par niveau et matière

export const examQuestions = {
  'ce2-cm1': {
    title: 'CE2 à CM1',
    duration: 20, // minutes
    questions: [
      // Écriture (5 questions)
      {
        id: 1,
        subject: 'Écriture',
        question: 'Quelle est la bonne orthographe du mot ?',
        options: ['Bateaux', 'Bataux', 'Batto', 'Bateau'],
        correct: 0
      },
      {
        id: 2,
        subject: 'Écriture',
        question: 'Comment écrit-on le pluriel de "cheval" ?',
        options: ['Chevals', 'Chevaux', 'Chevaus', 'Chevales'],
        correct: 1
      },
      {
        id: 3,
        subject: 'Écriture',
        question: 'Quelle est la bonne conjugaison : "Je ... à l\'école"',
        options: ['va', 'vais', 'vas', 'vont'],
        correct: 1
      },
      {
        id: 4,
        subject: 'Écriture',
        question: 'Comment écrit-on le féminin de "boulanger" ?',
        options: ['Boulangère', 'Boulangère', 'Boulangaire', 'Boulangere'],
        correct: 0
      },
      {
        id: 5,
        subject: 'Écriture',
        question: 'Quelle phrase est correctement écrite ?',
        options: [
          'Les enfants joue dans la cour',
          'Les enfants jouent dans la cour',
          'Les enfant jouent dans la cour',
          'Les enfants joues dans la cour'
        ],
        correct: 1
      },
      
      // Règles de grammaire (5 questions)
      {
        id: 6,
        subject: 'Grammaire',
        question: 'Dans la phrase "Le chat mange", quel est le sujet ?',
        options: ['Le', 'chat', 'mange', 'Le chat'],
        correct: 3
      },
      {
        id: 7,
        subject: 'Grammaire',
        question: 'Quel est le verbe dans la phrase "Marie lit un livre" ?',
        options: ['Marie', 'lit', 'un', 'livre'],
        correct: 1
      },
      {
        id: 8,
        subject: 'Grammaire',
        question: 'Quelle est la nature du mot "rapidement" ?',
        options: ['Nom', 'Verbe', 'Adjectif', 'Adverbe'],
        correct: 3
      },
      {
        id: 9,
        subject: 'Grammaire',
        question: 'Dans "une belle maison", quel mot est l\'adjectif ?',
        options: ['une', 'belle', 'maison', 'aucun'],
        correct: 1
      },
      {
        id: 10,
        subject: 'Grammaire',
        question: 'Quel est le complément d\'objet direct dans "Paul mange une pomme" ?',
        options: ['Paul', 'mange', 'une pomme', 'une'],
        correct: 2
      },
      
      // Culture générale (5 questions)
      {
        id: 11,
        subject: 'Culture générale',
        question: 'Quelle est la capitale de la Côte d\'Ivoire ?',
        options: ['Abidjan', 'Yamoussoukro', 'Bouaké', 'San Pedro'],
        correct: 1
      },
      {
        id: 12,
        subject: 'Culture générale',
        question: 'Combien y a-t-il de continents sur Terre ?',
        options: ['5', '6', '7', '8'],
        correct: 2
      },
      {
        id: 13,
        subject: 'Culture générale',
        question: 'Quel animal est le roi de la savane ?',
        options: ['L\'éléphant', 'Le lion', 'La girafe', 'Le rhinocéros'],
        correct: 1
      },
      {
        id: 14,
        subject: 'Culture générale',
        question: 'Combien de jours y a-t-il dans une année normale ?',
        options: ['364', '365', '366', '367'],
        correct: 1
      },
      {
        id: 15,
        subject: 'Culture générale',
        question: 'Quelle couleur obtient-on en mélangeant le rouge et le jaune ?',
        options: ['Vert', 'Violet', 'Orange', 'Bleu'],
        correct: 2
      }
    ]
  },

  '6eme-3eme': {
    title: '6ème à 3ème',
    duration: 20,
    questions: [
      // Mathématiques (3 questions)
      {
        id: 1,
        subject: 'Mathématiques',
        question: 'Combien vaut 15 + 27 ?',
        options: ['41', '42', '43', '44'],
        correct: 1
      },
      {
        id: 2,
        subject: 'Mathématiques',
        question: 'Quelle est la valeur de x dans l\'équation : 2x + 5 = 13 ?',
        options: ['3', '4', '5', '6'],
        correct: 1
      },
      {
        id: 3,
        subject: 'Mathématiques',
        question: 'Quelle est l\'aire d\'un rectangle de longueur 8 cm et largeur 5 cm ?',
        options: ['13 cm²', '26 cm²', '40 cm²', '80 cm²'],
        correct: 2
      },
      
      // Français (3 questions)
      {
        id: 4,
        subject: 'Français',
        question: 'Quel est le participe passé du verbe "prendre" ?',
        options: ['Pris', 'Prend', 'Prendu', 'Prenant'],
        correct: 0
      },
      {
        id: 5,
        subject: 'Français',
        question: 'Dans quelle proposition "que" est-il un pronom relatif ?',
        options: [
          'Je pense que tu as raison',
          'Le livre que je lis',
          'Que fais-tu ?',
          'Il faut que tu viennes'
        ],
        correct: 1
      },
      {
        id: 6,
        subject: 'Français',
        question: 'Quel est le genre du mot "armoire" ?',
        options: ['Masculin', 'Féminin', 'Les deux', 'Neutre'],
        correct: 1
      },
      
      // Histoire-Géo (2 questions)
      {
        id: 7,
        subject: 'Histoire-Géo',
        question: 'En quelle année la Côte d\'Ivoire a-t-elle obtenu son indépendance ?',
        options: ['1958', '1960', '1962', '1965'],
        correct: 1
      },
      {
        id: 8,
        subject: 'Histoire-Géo',
        question: 'Quel est le plus long fleuve d\'Afrique ?',
        options: ['Le Congo', 'Le Niger', 'Le Nil', 'Le Zambèze'],
        correct: 2
      },
      
      // Culture générale (2 questions)
      {
        id: 9,
        subject: 'Culture générale',
        question: 'Qui a écrit "Les Misérables" ?',
        options: ['Molière', 'Victor Hugo', 'Voltaire', 'Balzac'],
        correct: 1
      },
      {
        id: 10,
        subject: 'Culture générale',
        question: 'Quelle est la monnaie de la Côte d\'Ivoire ?',
        options: ['Le Dollar', 'L\'Euro', 'Le Franc CFA', 'Le Dinar'],
        correct: 2
      },
      
      // Physique-Chimie (3 questions)
      {
        id: 11,
        subject: 'Physique-Chimie',
        question: 'À quelle température l\'eau bout-elle ?',
        options: ['90°C', '95°C', '100°C', '105°C'],
        correct: 2
      },
      {
        id: 12,
        subject: 'Physique-Chimie',
        question: 'Quelle est la formule chimique de l\'eau ?',
        options: ['H2O', 'CO2', 'O2', 'H2SO4'],
        correct: 0
      },
      {
        id: 13,
        subject: 'Physique-Chimie',
        question: 'Que mesure-t-on avec un voltmètre ?',
        options: ['L\'intensité', 'La tension', 'La résistance', 'La puissance'],
        correct: 1
      },
      
      // Logique (2 questions)
      {
        id: 14,
        subject: 'Logique',
        question: 'Quelle est la suite logique : 2, 4, 8, 16, ... ?',
        options: ['24', '32', '30', '20'],
        correct: 1
      },
      {
        id: 15,
        subject: 'Logique',
        question: 'Si tous les chats sont des mammifères et que Félix est un chat, alors :',
        options: [
          'Félix n\'est pas un mammifère',
          'Félix est un mammifère',
          'On ne peut pas savoir',
          'Félix est un oiseau'
        ],
        correct: 1
      }
    ]
  },

  'serie-a2': {
    title: 'Série A2',
    duration: 20,
    questions: [
      // Philosophie (5 questions)
      {
        id: 1,
        subject: 'Philosophie',
        question: 'Qui a dit "Je pense, donc je suis" ?',
        options: ['Platon', 'Aristote', 'Descartes', 'Kant'],
        correct: 2
      },
      {
        id: 2,
        subject: 'Philosophie',
        question: 'Qu\'est-ce que l\'empirisme ?',
        options: [
          'La connaissance vient de la raison',
          'La connaissance vient de l\'expérience',
          'La connaissance est innée',
          'La connaissance est impossible'
        ],
        correct: 1
      },
      {
        id: 3,
        subject: 'Philosophie',
        question: 'Selon Platon, le monde sensible est :',
        options: [
          'La vraie réalité',
          'Une copie du monde des Idées',
          'Une illusion totale',
          'Plus parfait que le monde des Idées'
        ],
        correct: 1
      },
      {
        id: 4,
        subject: 'Philosophie',
        question: 'Qu\'est-ce que le libre arbitre ?',
        options: [
          'L\'absence de choix',
          'La capacité de choisir librement',
          'L\'obéissance aux lois',
          'La soumission au destin'
        ],
        correct: 1
      },
      {
        id: 5,
        subject: 'Philosophie',
        question: 'Qui est l\'auteur de "L\'Être et le Néant" ?',
        options: ['Camus', 'Sartre', 'Beauvoir', 'Merleau-Ponty'],
        correct: 1
      },
      
      // Français (5 questions)
      {
        id: 6,
        subject: 'Français',
        question: 'Quel est le mouvement littéraire de Baudelaire ?',
        options: ['Romantisme', 'Réalisme', 'Symbolisme', 'Surréalisme'],
        correct: 2
      },
      {
        id: 7,
        subject: 'Français',
        question: 'Dans quel siècle a vécu Molière ?',
        options: ['XVIe siècle', 'XVIIe siècle', 'XVIIIe siècle', 'XIXe siècle'],
        correct: 1
      },
      {
        id: 8,
        subject: 'Français',
        question: 'Qu\'est-ce qu\'une métaphore ?',
        options: [
          'Une comparaison avec "comme"',
          'Une comparaison sans outil de comparaison',
          'Une répétition de sons',
          'Une exagération'
        ],
        correct: 1
      },
      {
        id: 9,
        subject: 'Français',
        question: 'Qui a écrit "Madame Bovary" ?',
        options: ['Zola', 'Flaubert', 'Maupassant', 'Balzac'],
        correct: 1
      },
      {
        id: 10,
        subject: 'Français',
        question: 'Quel est le registre de la tragédie classique ?',
        options: ['Comique', 'Pathétique', 'Tragique', 'Épique'],
        correct: 2
      },
      
      // Anglais (5 questions)
      {
        id: 11,
        subject: 'Anglais',
        question: 'What is the past tense of "go"?',
        options: ['Goed', 'Went', 'Gone', 'Going'],
        correct: 1
      },
      {
        id: 12,
        subject: 'Anglais',
        question: 'Which sentence is correct?',
        options: [
          'She don\'t like coffee',
          'She doesn\'t like coffee',
          'She not like coffee',
          'She no like coffee'
        ],
        correct: 1
      },
      {
        id: 13,
        subject: 'Anglais',
        question: 'What does "beautiful" mean in French?',
        options: ['Beau/Belle', 'Grand', 'Petit', 'Intelligent'],
        correct: 0
      },
      {
        id: 14,
        subject: 'Anglais',
        question: 'Complete: "I have been living here ... 2010"',
        options: ['since', 'for', 'during', 'from'],
        correct: 0
      },
      {
        id: 15,
        subject: 'Anglais',
        question: 'What is the plural of "child"?',
        options: ['Childs', 'Children', 'Childes', 'Childrens'],
        correct: 1
      }
    ]
  },

  'serie-a1': {
    title: 'Série A1',
    duration: 20,
    questions: [
      // Mathématiques (3 questions)
      {
        id: 1,
        subject: 'Mathématiques',
        question: 'Quelle est la dérivée de f(x) = x² ?',
        options: ['x', '2x', 'x²', '2x²'],
        correct: 1
      },
      {
        id: 2,
        subject: 'Mathématiques',
        question: 'Résoudre : log₁₀(100) = ?',
        options: ['1', '2', '10', '100'],
        correct: 1
      },
      {
        id: 3,
        subject: 'Mathématiques',
        question: 'Dans un triangle rectangle, si les côtés de l\'angle droit mesurent 3 et 4, quelle est l\'hypoténuse ?',
        options: ['5', '6', '7', '8'],
        correct: 0
      },
      
      // Histoire-Géo (3 questions)
      {
        id: 4,
        subject: 'Histoire-Géo',
        question: 'Quand a eu lieu la Révolution française ?',
        options: ['1789', '1799', '1804', '1815'],
        correct: 0
      },
      {
        id: 5,
        subject: 'Histoire-Géo',
        question: 'Quel est le plus grand océan du monde ?',
        options: ['Atlantique', 'Indien', 'Pacifique', 'Arctique'],
        correct: 2
      },
      {
        id: 6,
        subject: 'Histoire-Géo',
        question: 'Qui était le premier président de la Côte d\'Ivoire ?',
        options: ['Félix Houphouët-Boigny', 'Henri Konan Bédié', 'Laurent Gbagbo', 'Alassane Ouattara'],
        correct: 0
      },
      
      // Physique (3 questions)
      {
        id: 7,
        subject: 'Physique',
        question: 'Quelle est la vitesse de la lumière dans le vide ?',
        options: ['300 000 km/s', '3 000 000 km/s', '30 000 km/s', '3 000 km/s'],
        correct: 0
      },
      {
        id: 8,
        subject: 'Physique',
        question: 'Quelle est l\'unité de la force dans le système international ?',
        options: ['Joule', 'Newton', 'Watt', 'Pascal'],
        correct: 1
      },
      {
        id: 9,
        subject: 'Physique',
        question: 'Que dit la première loi de Newton ?',
        options: [
          'F = ma',
          'Un corps au repos reste au repos',
          'Action = Réaction',
          'E = mc²'
        ],
        correct: 1
      },
      
      // Philosophie (3 questions)
      {
        id: 10,
        subject: 'Philosophie',
        question: 'Qu\'est-ce que la dialectique selon Hegel ?',
        options: [
          'L\'art de la discussion',
          'Le mouvement thèse-antithèse-synthèse',
          'La logique formelle',
          'La rhétorique'
        ],
        correct: 1
      },
      {
        id: 11,
        subject: 'Philosophie',
        question: 'Selon Kant, qu\'est-ce qu\'un impératif catégorique ?',
        options: [
          'Un ordre conditionnel',
          'Un commandement absolu',
          'Une suggestion',
          'Une hypothèse'
        ],
        correct: 1
      },
      {
        id: 12,
        subject: 'Philosophie',
        question: 'Qui a développé la théorie de l\'évolution ?',
        options: ['Lamarck', 'Darwin', 'Mendel', 'Pasteur'],
        correct: 1
      },
      
      // Français (3 questions)
      {
        id: 13,
        subject: 'Français',
        question: 'Quel est le mouvement littéraire du XVIIIe siècle ?',
        options: ['Baroque', 'Classicisme', 'Lumières', 'Romantisme'],
        correct: 2
      },
      {
        id: 14,
        subject: 'Français',
        question: 'Qui a écrit "Candide" ?',
        options: ['Rousseau', 'Diderot', 'Voltaire', 'Montesquieu'],
        correct: 2
      },
      {
        id: 15,
        subject: 'Français',
        question: 'Qu\'est-ce qu\'un alexandrin ?',
        options: [
          'Un vers de 10 syllabes',
          'Un vers de 12 syllabes',
          'Un vers de 8 syllabes',
          'Un vers libre'
        ],
        correct: 1
      }
    ]
  },

  'serie-d': {
    title: 'Série D',
    duration: 20,
    questions: [
      // SVT (5 questions)
      {
        id: 1,
        subject: 'SVT',
        question: 'Combien de chromosomes possède l\'être humain ?',
        options: ['44', '46', '48', '50'],
        correct: 1
      },
      {
        id: 2,
        subject: 'SVT',
        question: 'Quel est le rôle de la chlorophylle ?',
        options: [
          'Respiration',
          'Photosynthèse',
          'Digestion',
          'Circulation'
        ],
        correct: 1
      },
      {
        id: 3,
        subject: 'SVT',
        question: 'Où se déroule la digestion des protéines ?',
        options: ['Bouche', 'Estomac', 'Intestin grêle', 'Gros intestin'],
        correct: 1
      },
      {
        id: 4,
        subject: 'SVT',
        question: 'Quel est l\'organe principal de la respiration ?',
        options: ['Cœur', 'Poumons', 'Foie', 'Reins'],
        correct: 1
      },
      {
        id: 5,
        subject: 'SVT',
        question: 'Qu\'est-ce que l\'ADN ?',
        options: [
          'Une protéine',
          'Un lipide',
          'Un acide nucléique',
          'Un glucide'
        ],
        correct: 2
      },
      
      // Mathématiques (5 questions)
      {
        id: 6,
        subject: 'Mathématiques',
        question: 'Quelle est la primitive de cos(x) ?',
        options: ['-sin(x)', 'sin(x)', '-cos(x)', 'tan(x)'],
        correct: 1
      },
      {
        id: 7,
        subject: 'Mathématiques',
        question: 'Résoudre l\'équation : x² - 5x + 6 = 0',
        options: ['x = 2 ou x = 3', 'x = 1 ou x = 6', 'x = -2 ou x = -3', 'x = 0 ou x = 5'],
        correct: 0
      },
      {
        id: 8,
        subject: 'Mathématiques',
        question: 'Quelle est la limite de (1/x) quand x tend vers l\'infini ?',
        options: ['0', '1', '∞', '-∞'],
        correct: 0
      },
      {
        id: 9,
        subject: 'Mathématiques',
        question: 'Dans un repère orthonormé, quelle est la distance entre A(1,2) et B(4,6) ?',
        options: ['3', '4', '5', '6'],
        correct: 2
      },
      {
        id: 10,
        subject: 'Mathématiques',
        question: 'Combien vaut ln(e²) ?',
        options: ['1', '2', 'e', 'e²'],
        correct: 1
      },
      
      // Physique (5 questions)
      {
        id: 11,
        subject: 'Physique',
        question: 'Quelle est la formule de l\'énergie cinétique ?',
        options: ['E = mc²', 'E = ½mv²', 'E = mgh', 'E = Pt'],
        correct: 1
      },
      {
        id: 12,
        subject: 'Physique',
        question: 'Que vaut l\'accélération de la pesanteur sur Terre ?',
        options: ['9,8 m/s²', '10 m/s²', '9,81 m/s²', '9,7 m/s²'],
        correct: 2
      },
      {
        id: 13,
        subject: 'Physique',
        question: 'Quelle est l\'unité de la résistance électrique ?',
        options: ['Ampère', 'Volt', 'Ohm', 'Watt'],
        correct: 2
      },
      {
        id: 14,
        subject: 'Physique',
        question: 'Que dit la loi d\'Ohm ?',
        options: ['U = RI', 'P = UI', 'F = ma', 'E = hf'],
        correct: 0
      },
      {
        id: 15,
        subject: 'Physique',
        question: 'Quelle est la fréquence d\'une onde de période T = 0,02 s ?',
        options: ['20 Hz', '50 Hz', '100 Hz', '200 Hz'],
        correct: 1
      }
    ]
  }
};

// Fonction pour obtenir les questions d'un niveau spécifique
export const getQuestionsForLevel = (level) => {
  return examQuestions[level] || null;
};

// Fonction pour calculer le score et la remarque
export const calculateResult = (answers, correctAnswers) => {
  const score = answers.reduce((total, answer, index) => {
    return total + (answer === correctAnswers[index] ? 1 : 0);
  }, 0);
  
  const percentage = (score / correctAnswers.length) * 100;
  
  let remark = '';
  if (percentage < 50) {
    remark = 'Renforcez vos connaissances';
  } else if (percentage < 75) {
    remark = 'Bravo mais améliorez vos bases';
  } else {
    remark = 'Félicitations, vous serez sans aucun doute un membre précieux de notre structure';
  }
  
  return {
    score,
    total: correctAnswers.length,
    percentage: Math.round(percentage),
    remark
  };
};

