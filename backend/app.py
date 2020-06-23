from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

# Init app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))



# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)

# Product Class/Model
class Account(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(20), unique=True)
  surname = db.Column(db.String(20))
  status = db.Column(db.String(50))

  def __init__(self, name, surname, status):
    self.name = name
    self.surname = surname
    self.status = status


# Product Schema
class AccountSchema(ma.Schema):
  class Meta:
   fields = ('name', 'surname', 'status')


# Init schema
account_schema = AccountSchema()
accounts_schema = AccountSchema(many=True)

# Create an account
@app.route('/account', methods=['POST'])
def add_product():
  name = request.json['name']
  surname = request.json['surname']
  status = request.json['status']

  new_account = Account(name, surname, status)

  db.session.add(new_account)
  db.session.commit()

  return account_schema.jsonify(new_account)


# Get account info
@app.route('/account/<id>', methods=['GET'])
def get_product(id):
  account = Account.query.get(id)
  return account_schema.jsonify(account)


# # Update a Product
# @app.route('/product/<id>', methods=['PUT'])
# def update_product(id):
#   product = Product.query.get(id)
#
#   name = request.json['name']
#   description = request.json['description']
#   price = request.json['price']
#   qty = request.json['qty']
#
#   product.name = name
#   product.description = description
#   product.price = price
#   product.qty = qty
#
#   db.session.commit()
#
#   return product_schema.jsonify(product)


# Delete Product
@app.route('/account/<id>', methods=['DELETE'])
def delete_account(id):
  account = Account.query.get(id)
  db.session.delete(account)
  db.session.commit()

  return account_schema.jsonify(account)


#Run Server
if __name__ == '__main__':
  app.run(debug=True)