from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    password = data.get('password')
    if password == 'yuhiintro2025ver':
        return jsonify({'success': True}), 200
    return jsonify({'success': False, 'message': 'Incorrect password'}), 401

if __name__ == '__main__':
    app.run(debug=True)
