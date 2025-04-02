from flask import Flask, jsonify
app = Flask(__name__)

mascotas = [
    {"id": 1, "nombre": "Firulais", "dueño": "Juan"}
]

@app.route('/mascotas')
def get_mascotas():
    return jsonify(mascotas)

if __name__ == '__main__':
    app.run(debug=True)
