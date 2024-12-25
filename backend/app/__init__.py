import flask
import flask_socketio
import flask_cors

app = flask.Flask(__name__)
cors = flask_cors.CORS(app, resources={r"/*": {"origins": ["https://roleplay-tools-jf3cghwr6-gian-p-nunes-projects.vercel.app/","*"]}})
socket_io = flask_socketio.SocketIO(app, cors_allowed_origins="*")

pressed_times = 0

@app.route("/", methods=["GET"])
def main():
    return "Hello Sockets tests"

@socket_io.on("connect")
def handle_connection():
    print("Cliente conectado")
    global pressed_times
    socket_io.emit("state_received", pressed_times)

@socket_io.on("button_pressed")
def handle_message(data):
    print(f"Mensagem recebida: {data}")
    global pressed_times
    pressed_times += 1
    socket_io.emit("state_received", pressed_times)


if __name__ == "__main__":
    socket_io.run(app, debug=True, host="0.0.0.0", port=5000)
