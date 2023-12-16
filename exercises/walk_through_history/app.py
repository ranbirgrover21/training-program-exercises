from flask import Flask, render_template

app = Flask(__name__)

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