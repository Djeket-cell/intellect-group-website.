from flask_sqlalchemy import SQLAlchemy

# Utilisation de l'instance db importée depuis main
def init_exam_result_model(db):
    class ExamResult(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        candidate_name = db.Column(db.String(100), nullable=False)
        level = db.Column(db.String(50), nullable=False)
        date = db.Column(db.String(20), nullable=False)
        time = db.Column(db.String(20), nullable=False)
        score = db.Column(db.Integer, nullable=False)
        total = db.Column(db.Integer, nullable=False)
        percentage = db.Column(db.Integer, nullable=False)
        remark = db.Column(db.String(200), nullable=False)
        answers = db.Column(db.Text, nullable=False) # Store as JSON string
        correct_answers = db.Column(db.Text, nullable=False) # Store as JSON string
        questions = db.Column(db.Text, nullable=False) # Store as JSON string

        def __repr__(self):
            return f'<ExamResult {self.candidate_name} - {self.level}>'

        def to_dict(self):
            return {
                'id': self.id,
                'candidateName': self.candidate_name,
                'level': self.level,
                'date': self.date,
                'time': self.time,
                'score': self.score,
                'total': self.total,
                'percentage': self.percentage,
                'remark': self.remark,
                'answers': self.answers,
                'correctAnswers': self.correct_answers,
                'questions': self.questions
            }
    
    return ExamResult

