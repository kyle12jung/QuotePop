import speech_recognition as sr
from quote_generator import quote_pop
import ssl
import playsound
import os
from gtts import gTTS

# This is a terrible practice data-privacy-wise but we needed a quick fix
ssl._create_default_https_context = ssl._create_unverified_context



def testing():
    print("Python works!!")

def speech_to_text():
    r = sr.Recognizer()

    with sr.Microphone() as source:
        print("Say Something")
        audio = r.listen(source)
        voice_data = r.recognize_google(audio)
       # quote = quote_pop(voice_data)
        print(voice_data)
        #print(quote)
        return voice_data #, quote

def speak(audio_str):
    tts = gTTS(text=audio_str, lang='en')
    audio_file = 'audio-999.mp3' 
    tts.save(audio_file)
    playsound.playsound(audio_file)
    print(audio_str)
    os.remove(audio_file)

if __name__ == "__main__":
    text = speech_to_text()
    quote_pop(text)