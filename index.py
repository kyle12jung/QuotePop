from flask import Flask, render_template, redirect, url_for, request
from main import speech_to_text

app = Flask(__name__)
transcript = "Text here!"

@app.route("/")
def init():
    return render_template('hello.html', transcript=transcript)

@app.route("/speech")
def background_print():
    global transcript
    transcript = speech_to_text()
    transcript = transcript.capitalize()
    transcript += "."
    return render_template("hello.html", transcript=transcript)
