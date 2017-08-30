from flask import Flask, request, session, jsonify, abort
import hashlib
app = Flask('rememberme')
app.secret_key = 'E19B2598-E057-41E5-8104-EDB6AEB18184'

# /register -> {username, password, hand}
# Login -> {username, password} -> 200, username or 401
# Logout -> ok
# /sethand -> {newhand} -> 200, 401
# /listhand


# {
#   "Boat":  {password: "de921k24dieow", hand: "rock"},
#   ....
# }

db = {
    "piti": {
        "password": "643ebc14c890ac458fca7cbd6c32f76fc859dca0da955c18cd2e62ef7f35211e",
        "hand": "rock"
    }
}


def hash_password(username, password):
    tmp = username + app.secret_key + password
    return hashlib.sha256(tmp.encode('utf-8')).hexdigest()


@app.route("/register", methods=["POST"])
def register():
    username = request.json['username']
    password = request.json['password']
    hand = request.json['hand']
    if username in db:
        abort(400)
    new_user = {
        "password": hash_password(username, password),
        "hand": hand
    }
    db[username] = new_user
    return jsonify({"status": 'OK'})


@app.route("/login", methods=["POST"])
def login():
    username = request.json['username']
    password = request.json['password']
    if username not in db:
        abort(401)
    pw = db[username]['password']
    if hash_password(username, password) == pw:
        session['username'] = username
        session['login'] = True
        return jsonify({'username': username})
    else:
        abort(401)


@app.route("/logout")
def logout():
    session.clear()
    return jsonify({'status': 'OK'})


@app.route('/set-hand', methods=["POST"])
def set_hand():
    logged_in = session.get('login', False)
    if not logged_in:
        abort(401)
    new_hand = request.json['hand']
    username = session['username']
    db[username]['hand'] = new_hand
    return jsonify({'status': 'OK'})


@app.route('/list-hand')
def list_hand():
    ret = [
        dict(username=k, hand=v['hand'])
        for k, v in db.iteritems()
    ]
    return jsonify({
        'status': 'OK',
        'data': ret
    })

if __name__ == '__main__':
    app.run(debug=True)

#
#

#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
