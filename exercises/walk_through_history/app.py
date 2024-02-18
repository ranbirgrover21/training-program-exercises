from flask import Flask, render_template, session
from datetime import datetime
from time import sleep
import json

app = Flask(__name__)

app.secret_key = "SUPER SECRET KEY"

@app.route("/")
def index():
    return "<p>Hello, World!</p>"

@app.route("/hello_bob")
def hello_bob():
    return render_template('index.html', name='bob')

@app.route("/hello/<name>")
def hello(name="None"):
    return render_template('index.html',name=name)

@app.route("/login", methods=['get','post'])
def login():
    return render_template('login.html')

@app.route("/button", methods=['get','post'])
def button():
    if not 'count' in session:
        session['count'] = 0
    session['count'] += 1
    time = datetime.now()
    return render_template('button.html', count=session['count'], time = time.strftime("%H:%M:%S"))

@app.route('/on')
def green_square():
    numbers = [0,1,2]
    # Insert expensive task here 
    #sleep(5)
    return render_template('square.html', on=True, numbers = numbers)

@app.route('/off')
def red_square():
    return render_template('square.html', on=False, numbers = [])

@app.route('/fetch')
def fetch():
    return render_template('fetch.html')

@app.route('/fetch_data')
def fetch_data():
    msg = f'Hello from fetch_data {datetime.now().strftime("%H:%M:%S")}'
    resp = json.dumps(msg)
    print(resp)
    return resp