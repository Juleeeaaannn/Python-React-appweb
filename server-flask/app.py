from flask import Flask, request, render_template
from flask_session import Session
from sqlalchemy import desc
from datetime import date, time
from models import Producto, Venta #Importamos las tablas de la base de datos

app = Flask(__name__)  #Creamos la app de flask
app.config['SECRET_KEY'] = "3f8e4b2a1c7d6e5f9a0b1c2d3e4f5a6b" #Configuramos la base datos
app.config['SQL_SQLALCHEMY_DATABASE_URI'] = "mysql://kioscodb.sql" #Configuramos la base de datos MYSQL
app.config['SQL_SQLALCHEMY_TRACK_MODIFICATIONS'] = False #Desactivamos el seguimiento de modificaciones
app.config['SESSION_PERMANENT'] = False #Desactivamos la sesion permanente
Session(app)

@app.route('/', methods=['GET', 'POST'])
def cargar():
    print("Cargando productos...")


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True) #debug activado para ver errores en la consola