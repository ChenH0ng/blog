class Post {
    constructor({
        title = '', text = '', userSynopsis = {},
        date = new Date().toLocaleDateString(), time = Date.now(), tags = [], comments = [], _id,
    }) {
        Object.assign(this, {title, text, userSynopsis: new UserSynopsis(userSynopsis), date, time, tags, comments})
        _id && (this._id = _id);
    }
}
class UserSynopsis {
    constructor({username = '', nickname = '', avatar = ''}) {
        Object.assign(this, {username, nickname, avatar});
    }
}

class Tag {
    constructor({text = ''}) {
        Object.assign(this, {text});
    }
}
class Comment {
    constructor({userSynopsis = {}, date = new Date().toLocaleDateString(), time = Date.now(), text = '',}) {
        Object.assign(this, {userSynopsis: new UserSynopsis(userSynopsis), date, time, text});
    }
}

module.exports = {
    Post,
};