from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)

players = []


@app.route("/add_player", methods=["POST"])
def add_player():
    player = request.form["name"]
    players.append(player)
    return player


@app.route("/send_message", methods=["POST"])
@cross_origin()
def receive_message():
    print("called")
    message = request.form["message"]
    return message


if __name__ == "__main__":
    app.run(host="0.0.0.0")
