import sqlite3
from db import db

class UserModel(db.Model):
    __tablename__ = 'users'
    
    id              = db.Column(db.Integer, primary_key=True)
    username        = db.Column(db.String(80))
    password        = db.Column(db.String(80))

    provider        = db.Column(db.String(80))
    email           = db.Column(db.String(80))
    name            = db.Column(db.String(80))
    photoUrl        = db.Column(db.String(80))
    firstName       = db.Column(db.String(80))
    lastName        = db.Column(db.String(80))
    phoneNumber     = db.Column(db.String(80))

    def __init__(self, username, password, provider, email, name, photoUrl, firstName, lastName, phoneNumber):
        self.username = username
        self.password = password
        self.provider = provider
        self.email = email
        self.name = name
        self.photoUrl = photoUrl
        self.firstName = firstName
        self.lastName = lastName
        self.phoneNumber = phoneNumber

    def json(self):
        return {
            'id': self.id,
            'username': self.username,

            'provider': self.provider,
            'email': self.email,
            'name': self.name,
            'photoUrl': self.photoUrl,
            'firstname': self.firstName,
            'lastname': self.lastName,
            'phoneNumber': self.phoneNumber
            }

    def upserting_to_db(self):
        db.session.add(self)
        db.session.commit()   

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_all(cls):
        return cls.query.all()

    @classmethod
    def find_by_username(cls, username):
        return cls.query.filter_by(username=username).first()

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()