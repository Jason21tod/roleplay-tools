import flask


app = flask.Flask(__name__)


@app.route('/', methods=['get'])
def main():
    return 'Hello'

if __name__ == "__main__":
    app.run(debug=True)