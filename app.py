import sqlite3
from flask import Flask, render_template, json, request, url_for, flash, redirect, Response
from flask_cors import CORS 


app = Flask(__name__)
CORS(app) 

def row_to_dict(cursor: sqlite3.Cursor, row: sqlite3.Row) -> dict:
    data = {}
    for idx, col in enumerate(cursor.description):
        data[col[0]] = row[idx]
    return data

def get_db_connection():
	conn = sqlite3.connect('database.db')
	conn.row_factory = row_to_dict
	return conn




@app.route('/students/create-student',methods = ['POST'])
def create():
    conn = get_db_connection()
    data = request.get_json(force=True)
    name = data.get("name")
    id = data.get("id")
    score = data.get("score")
    conn.execute("INSERT INTO posts (name, id, score) VALUES (?,?,?)", (name, id, score))
    conn.commit()
    conn.close()
    #print(data)
    return Response("hello", status=200)


@app.route('/students',methods = ['GET'])
def read():
	conn = get_db_connection()
	posts = conn.execute('SELECT * FROM posts').fetchall()
	conn.close()
	#print(posts)
	return json.dumps(posts)


@app.route('/students/update-student/<int:id>',methods = ['PUT', 'GET'])
def update(id):
	conn = get_db_connection()
	if request.method == 'PUT':
		data = request.get_json(force=True)
		name = data.get("name")
		score = data.get("score")
		conn.execute("UPDATE posts SET name = ? , score = ? WHERE id = " + str(id),(name, score))
		conn.commit()
	else:
		data = conn.execute('SELECT * FROM posts WHERE id = ' + str(id)).fetchall()
	conn.close()
	#print(data)
	return json.dumps(data)


@app.route('/students/delete-student/<int:id>',methods = ['DELETE'])
def delete(id):
    conn = get_db_connection()
    conn.execute("DELETE FROM posts WHERE id = "+ str(id))
    conn.commit()
    conn.close()
    return Response("hello", status=200)