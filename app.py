from flask import Flask
from flask import request
from flask import jsonify

app = Flask(__name__)

@app.route('/home')
def home():
    return jsonify({'name':'Jimit',
                    'address':'India'})

app.run(debug=True)