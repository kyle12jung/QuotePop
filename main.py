import speech_recognition as sr

def testing():
    print("Python works!!")

def speech_to_text():
    r = sr.Recognizer()

    with sr.Microphone() as source:
        print("Say Something")
        audio = r.listen(source)
        voice_data = r.recognize_google(audio)
        print(voice_data)
        return voice_data

if __name__ == "__main__":
    speech_to_text()