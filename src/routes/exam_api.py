from flask import Blueprint, request, jsonify
import json

def create_exam_api_blueprint(db, ExamResult):
    exam_api = Blueprint('exam_api', __name__)

    @exam_api.route('/api/exam-results', methods=['POST'])
    def save_exam_result():
        """Sauvegarder un résultat d'examen"""
        try:
            data = request.get_json()
            
            # Créer un nouveau résultat d'examen
            exam_result = ExamResult(
                candidate_name=data['candidateName'],
                level=data['level'],
                date=data['date'],
                time=data['time'],
                score=data['score'],
                total=data['total'],
                percentage=data['percentage'],
                remark=data['remark'],
                answers=json.dumps(data['answers']),
                correct_answers=json.dumps(data['correctAnswers']),
                questions=json.dumps(data['questions'])
            )
            
            db.session.add(exam_result)
            db.session.commit()
            
            return jsonify({
                'success': True,
                'message': 'Résultat sauvegardé avec succès',
                'id': exam_result.id
            }), 201
            
        except Exception as e:
            db.session.rollback()
            return jsonify({
                'success': False,
                'message': f'Erreur lors de la sauvegarde: {str(e)}'
            }), 500

    @exam_api.route('/api/exam-results', methods=['GET'])
    def get_all_exam_results():
        """Récupérer tous les résultats d'examen"""
        try:
            results = ExamResult.query.order_by(ExamResult.id.desc()).all()
            
            # Convertir les résultats en format JSON
            results_data = []
            for result in results:
                result_dict = result.to_dict()
                # Convertir les chaînes JSON en objets Python
                result_dict['answers'] = json.loads(result.answers)
                result_dict['correctAnswers'] = json.loads(result.correct_answers)
                result_dict['questions'] = json.loads(result.questions)
                results_data.append(result_dict)
            
            return jsonify({
                'success': True,
                'results': results_data
            }), 200
            
        except Exception as e:
            return jsonify({
                'success': False,
                'message': f'Erreur lors de la récupération: {str(e)}'
            }), 500

    @exam_api.route('/api/exam-results/<int:result_id>', methods=['DELETE'])
    def delete_exam_result(result_id):
        """Supprimer un résultat d'examen spécifique"""
        try:
            result = ExamResult.query.get_or_404(result_id)
            db.session.delete(result)
            db.session.commit()
            
            return jsonify({
                'success': True,
                'message': 'Résultat supprimé avec succès'
            }), 200
            
        except Exception as e:
            db.session.rollback()
            return jsonify({
                'success': False,
                'message': f'Erreur lors de la suppression: {str(e)}'
            }), 500

    @exam_api.route('/api/exam-results/clear', methods=['DELETE'])
    def clear_all_exam_results():
        """Supprimer tous les résultats d'examen"""
        try:
            ExamResult.query.delete()
            db.session.commit()
            
            return jsonify({
                'success': True,
                'message': 'Tous les résultats ont été supprimés'
            }), 200
            
        except Exception as e:
            db.session.rollback()
            return jsonify({
                'success': False,
                'message': f'Erreur lors de la suppression: {str(e)}'
            }), 500

    @exam_api.route('/api/stats', methods=['GET'])
    def get_exam_stats():
        """Récupérer les statistiques des examens"""
        try:
            total_candidates = ExamResult.query.count()
            excellent_results = ExamResult.query.filter(ExamResult.percentage >= 75).count()
            average_results = ExamResult.query.filter(
                ExamResult.percentage >= 50, 
                ExamResult.percentage < 75
            ).count()
            poor_results = ExamResult.query.filter(ExamResult.percentage < 50).count()
            
            return jsonify({
                'success': True,
                'stats': {
                    'totalCandidates': total_candidates,
                    'excellentResults': excellent_results,
                    'averageResults': average_results,
                    'poorResults': poor_results
                }
            }), 200
            
        except Exception as e:
            return jsonify({
                'success': False,
                'message': f'Erreur lors de la récupération des statistiques: {str(e)}'
            }), 500
    
    return exam_api

