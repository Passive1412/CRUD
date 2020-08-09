from flask_restful import Resource, reqparse
from models.user import UserModel

class UserRegister(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('username',
        type=str,
        required=True,
        help="This field cannot be left blank!"
    )
    parser.add_argument('password',
        type=str,
        required=True,
        help="This field cannot be left blank!"
    )     

    def post(self):   
        data = UserRegister.parser.parse_args()

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