import os

from datetime import timedelta
from flask import Flask, jsonify
from flask_restful import Api
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from resources.user import UserRegister, User, UserList, UserLogin, UserLogout, TokenRefresh
from resources.item import Item, ItemList
from resources.store import Store, StoreList
from blacklist import BLACKLIST

from db import db
DEBUG = True

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///data.db')
app.config['JWT_AUTH_URL_RULE'] = '/login'
app.config['JWT_EXPIRATION_DELT'] = timedelta(seconds=1800)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#app.config['JWT_AUTH_USERNAME_KEY'] = 'email'
app.config['JWT_SECRET_KEY'] = "marcus"
app.config['PROPAGATE_EXCEPTIONS'] = True
app.config['JWT_BLACKLIST_ENABLED'] = True
app.config['JWT_BLACKLIST_TOKEN_CHECKS'] = ['access', 'refresh']
app.secret_key = 'marcus'
api = Api(app)

@app.before_first_request
def create_tables():
    db.create_all()

jwt = JWTManager(app)

@jwt.user_claims_loader
def add_claims_to_jwt(identity):
    if identity == 1: # should read from config or database
        return {'is_admin': True}
    else:
        return {'is_admin': False}

@jwt.token_in_blacklist_loader
def check_if_token_in_blacklist(decrypted_token):
    return decrypted_token['jti'] in BLACKLIST

@jwt.expired_token_loader
def expired_token_callback():
    return jsonify({
        'description': 'The token has expired.',
        'error': 'token_expired'
    }), 401

@jwt.invalid_token_loader
def invalid_token_callback(error):
    return jsonify(
        {'description': 'Signature verification failed'}
    ), 401

@jwt.unauthorized_loader
def missing_token_callback(error):
    return jsonify({
        'description': 'Request does not contain an acces token.',
        'error': 'authorization_required'
    }), 401

@jwt.needs_fresh_token_loader
def token_not_fresh_callback():
    return jsonify({
        'description': 'the token is not fresh',
        'error': 'fresh_token_required'
    }), 401

@jwt.revoked_token_loader
def revoked_token_callback():
    return jsonify({
        'description': 'The token has been revoked',
        'error': 'token_revoked'
    }), 401


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

api.add_resource(Store, '/api/store/<string:name>')
api.add_resource(Item, '/api/item/<string:name>')
api.add_resource(ItemList, '/api/items')
api.add_resource(StoreList, '/api/stores')


api.add_resource(UserList, '/api/users')
api.add_resource(User, '/api/account/user/<int:user_id>')
api.add_resource(UserRegister, '/api/account/register')
api.add_resource(UserLogin, '/api/account/login')
api.add_resource(TokenRefresh, '/api/account/refresh')
api.add_resource(UserLogout, '/api/account/logout')

if __name__ == '__main__':
    db.init_app(app)
    if DEBUG:
        app.run(host='0.0.0.0', port=5000, debug=True)
    else:
        app.run(port=5000)
