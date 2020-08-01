from backend.app import app
from backend.db import db

db.init_app(app)

@app.before_first_request
def create_tables():
    db.create_all()
