// Utilitaires pour communiquer avec l'API backend

const API_BASE_URL = window.location.origin; // Utilise la même origine que le frontend

export const api = {
  // Sauvegarder un résultat d'examen
  saveExamResult: async (resultData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/exam-results`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resultData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la sauvegarde');
      }
      
      return data;
    } catch (error) {
      console.error('Erreur API saveExamResult:', error);
      throw error;
    }
  },

  // Récupérer tous les résultats d'examens
  getAllExamResults: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/exam-results`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la récupération');
      }
      
      return data.results || [];
    } catch (error) {
      console.error('Erreur API getAllExamResults:', error);
      throw error;
    }
  },

  // Supprimer tous les résultats d'examens
  clearAllExamResults: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/exam-results/clear`, {
        method: 'DELETE'
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la suppression');
      }
      
      return data;
    } catch (error) {
      console.error('Erreur API clearAllExamResults:', error);
      throw error;
    }
  },

  // Récupérer les statistiques
  getExamStats: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/stats`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la récupération des statistiques');
      }
      
      return data.stats || {};
    } catch (error) {
      console.error('Erreur API getExamStats:', error);
      throw error;
    }
  }
};

