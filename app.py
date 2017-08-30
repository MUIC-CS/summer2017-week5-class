from flask import Flask, request, session, jsonify

app = Flask('rememberme')
app.secret_key = 'E19B2598-E057-41E5-8104-EDB6AEB18184'


@app.route("/remember", methods=['POST'])
def remember():
    message = request.json['message']
    session['message'] = message
    print message
    return 'OK I will not forget about %s' % message


@app.route("/remember-get/<message>")
def remember_get(message):
    session['message'] = message
    return 'OK I will not forget about %s' % message


@app.route("/recall")
def recall():
    return jsonify({"message": session['message']})


if __name__ == '__main__':
    app.run(debug=True)
