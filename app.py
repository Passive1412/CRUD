import os

from datetime import timedelta
from flask import Flask, jsonify
from flask_restful import Api
#from flask_jwt import JWT
from flask_jwt_extended import JWTManager

#from security import authenticate, identity as identity_function
from resources.user import UserRegister, User, UserList, UserLogin
from resources.item import Item, ItemList
from resources.store import Store, StoreList

from db import db
DEBUG = False

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///data.db')
app.config['JWT_AUTH_URL_RULE'] = '/login'
app.config['JWT_EXPIRATION_DELT'] = timedelta(seconds=1800)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#app.config['JWT_AUTH_USERNAME_KEY'] = 'email'
app.config['JWT_SECRET_KEY'] = "marcus"
app.config['PROPAGATE_EXCEPTIONS'] = True
app.secret_key = 'marcus'
api = Api(app)

@app.before_first_request
def create_tables():
    db.create_all()

#jwt = JWT(app, authenticate, identity_function)
jwt = JWTManager(app)

@jwt.user_claims_loader
def add_claims_to_jwt(identity):
    if identity == 1: # should read from config or database
        return {'is_admin': True}
    else:
        return {'is_admin': False}

#@jwt.auth_response_handler
#def customized_response_handler(access_token, identity):
#    return jsonify({
#        'access_token': access_token.decode('utf-8'),
#        'user_id': identity.id
#    })

#@jwt.jwt_error_handler
#def customized_error_handler(error):
#    return jsonify({
#        'message': error.description,
#        'code': error.status_code
#    }). error.status_code

 # host 0.0.0.0:5000 at 172.18.64.200:5000
api.add_resource(Store, '/store/<string:name>')
api.add_resource(Item, '/item/<string:name>')
api.add_resource(ItemList, '/items')
api.add_resource(StoreList, '/stores')
api.add_resource(UserRegister, '/register')
api.add_resource(User, '/user/<int:user_id>')
api.add_resource(UserList, '/users')
api.add_resource(UserLogin, '/login')

if __name__ == '__main__':
    db.init_app(app)
    if DEBUG:
        app.run(host='0.0.0.0', port=5000, debug=True)
    else:
        app.run(port=5000)
