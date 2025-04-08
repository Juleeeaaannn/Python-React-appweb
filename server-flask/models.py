from __main__ import app #Importamos la app de flask
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy(app) #Conectamos la base de datos con la App de flask

class Producto(db.Model):
    __tablename__= 'producto'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), nullable=False)
    informacion = db.Column(db.String(120), nullable=False)
    img = db.Column(db.LongBlob, nullable=False)
    precio = db.Column(db.Float, nullable=False)

class Venta(db.Model):
    __tablename__= 'venta'
    id = db.Column(db.Integer, primary_key=True)
    list_productos = db.Column(db.Text, nullable=False)
    list_precios = db.Column(db.Text, nullable=False)
    list_cantidad = db.Column(db.Text, nullable=False)
    hora = db.Column(db.Time, nullable=False)
    fecha = db.Column(db.Date, nullable=False)
    total = db.Column(db.Float, nullable=False)