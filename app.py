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
    return hashlib.sha256(username + app.secret_key + password).hexdigest()


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
    return jsonify('OK')


@app.route('/list-hand')
def list_hand():
    ret = [{'username': k, 'hand': v['hand']} for k, v in db.items()]
    return jsonify(ret)

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
