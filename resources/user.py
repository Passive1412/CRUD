from flask_restful import Resource, reqparse
from flask_jwt_extended import create_access_token, create_refresh_token
from models.user import UserModel
from werkzeug.security import safe_str_cmp

_user_parser = reqparse.RequestParser()
_user_parser.add_argument('username',
    type=str,
    required=True,
    help="This field cannot be left blank!"
)
_user_parser.add_argument('password',
    type=str,
    required=True,
    help="This field cannot be left blank!"
)     

class UserRegister(Resource):

    def post(self):   
        data = _user_parser.parse_args()

        if UserModel.find_by_username(data['username']):
            return {"mesage": "User with that name already exist"}, 201
        else:
            user = UserModel(**data)
            user.upserting_to_db()
        return {"mesage": "User created sucessfully"}, 201


class User(Resource):

    @classmethod
    def get(cls, user_id):
        user = UserModel.find_by_id(user_id)
        if not user:
            return {'message': 'User not found'}, 404
        else:
            return user.json()

    @classmethod
    def delete(cls, user_id):
        user = UserModel.find_by_id(user_id)
        if not user:
            return {'message': 'User not found'}, 404
        else:
            user.delete_from_db()
            return {'message': 'User deleted'}, 200

class UserLogin(Resource):

    @classmethod
    def post(cls):
        data = _user_parser.parse_args()

        user = UserModel.find_by_username(data['username'])

        if user and safe_str_cmp(user.password, data['password']):
            access_token = create_access_token(identity=user.id, fresh=True) 
            refresh_token = create_refresh_token(user.id)
            return {
                'access_token': access_token,
                'refresh_token': refresh_token
            }, 200
        else:
            return {'Message': 'Wrong user credentials'}, 401


class UserList(Resource):
    def get(self):
        return {'items': [x.json() for x in UserModel.find_all()]}
