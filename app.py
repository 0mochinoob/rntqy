from flask import Flask, request, jsonify, render_template
from datetime import datetime
import sqlite3

app = Flask(__name__)

# データベース初期化
def init_db():
    with sqlite3.connect("questions.db") as conn:
        cursor = conn.cursor()
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            content TEXT NOT NULL,
            timestamp TEXT NOT NULL,
            user_id TEXT NOT NULL
        )
        """)
        conn.commit()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/questions", methods=["GET", "POST"])
def handle_questions():
    with sqlite3.connect("questions.db") as conn:
        cursor = conn.cursor()
        
        if request.method == "POST":
            data = request.json
            content = data.get("content")
            user_id = data.get("user_id")
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
            
            cursor.execute("INSERT INTO questions (content, timestamp, user_id) VALUES (?, ?, ?)",
                           (content, timestamp, user_id))
            conn.commit()
            return jsonify({"message": "Question added!"}), 201
        
        elif request.method == "GET":
            cursor.execute("SELECT id, content, timestamp, user_id FROM questions")
            questions = cursor.fetchall()
            return jsonify(questions)

@app.route("/questions/<int:question_id>", methods=["PUT", "DELETE"])
def modify_question(question_id):
    with sqlite3.connect("questions.db") as conn:
        cursor = conn.cursor()
        
        if request.method == "PUT":
            data = request.json
            content = data.get("content")
            user_id = data.get("user_id")
            
            cursor.execute("SELECT user_id FROM questions WHERE id = ?", (question_id,))
            result = cursor.fetchone()
            
            if result and result[0] == user_id:
                cursor.execute("UPDATE questions SET content = ? WHERE id = ?", (content, question_id))
                conn.commit()
                return jsonify({"message": "Question updated!"})
            return jsonify({"error": "Unauthorized"}), 403
        
        elif request.method == "DELETE":
            user_id = request.args.get("user_id")
            
            cursor.execute("SELECT user_id FROM questions WHERE id = ?", (question_id,))
            result = cursor.fetchone()
            
            if result and result[0] == user_id:
                cursor.execute("DELETE FROM questions WHERE id = ?", (question_id,))
                conn.commit()
                return jsonify({"message": "Question deleted!"})
            return jsonify({"error": "Unauthorized"}), 403

if __name__ == "__main__":
    init_db()
    app.run(debug=True)
