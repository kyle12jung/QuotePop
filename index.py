from flask import Flask, render_template, redirect, url_for, request
from main import speech_to_text
from quote_generator import quote_pop



app = Flask(__name__)
transcript = "Text here!"
output = " "

@app.route("/")
def init():
    return render_template('hello.html', transcript=transcript, output=output)

@app.route("/speech")
def background_print():
    global transcript
    global output
    transcript = speech_to_text()
    transcript = transcript.capitalize()
    transcript += "."
    output = quote_pop(transcript)
    return render_template("hello.html",transcript=transcript, output=output)
