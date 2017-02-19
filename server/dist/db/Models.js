'use strict';function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var Post =
function Post(_ref)


{var _ref$title = _ref.title,title = _ref$title === undefined ? '' : _ref$title,_ref$text = _ref.text,text = _ref$text === undefined ? '' : _ref$text,_ref$userSynopsis = _ref.userSynopsis,userSynopsis = _ref$userSynopsis === undefined ? {} : _ref$userSynopsis,_ref$date = _ref.date,date = _ref$date === undefined ? new Date().toLocaleDateString() : _ref$date,_ref$time = _ref.time,time = _ref$time === undefined ? Date.now() : _ref$time,_ref$tags = _ref.tags,tags = _ref$tags === undefined ? [] : _ref$tags,_ref$comments = _ref.comments,comments = _ref$comments === undefined ? [] : _ref$comments,_id = _ref._id;_classCallCheck(this, Post);
    Object.assign(this, { title: title, text: text, userSynopsis: new UserSynopsis(userSynopsis), date: date, time: time, tags: tags, comments: comments });
    _id && (this._id = _id);
};var

UserSynopsis =
function UserSynopsis(_ref2) {var _ref2$username = _ref2.username,username = _ref2$username === undefined ? '' : _ref2$username,_ref2$nickname = _ref2.nickname,nickname = _ref2$nickname === undefined ? '' : _ref2$nickname,_ref2$avatar = _ref2.avatar,avatar = _ref2$avatar === undefined ? '' : _ref2$avatar;_classCallCheck(this, UserSynopsis);
    Object.assign(this, { username: username, nickname: nickname, avatar: avatar });
};var


Tag =
function Tag(_ref3) {var _ref3$text = _ref3.text,text = _ref3$text === undefined ? '' : _ref3$text;_classCallCheck(this, Tag);
    Object.assign(this, { text: text });
};var

Comment =
function Comment(_ref4) {var _ref4$userSynopsis = _ref4.userSynopsis,userSynopsis = _ref4$userSynopsis === undefined ? {} : _ref4$userSynopsis,_ref4$date = _ref4.date,date = _ref4$date === undefined ? new Date().toLocaleDateString() : _ref4$date,_ref4$time = _ref4.time,time = _ref4$time === undefined ? Date.now() : _ref4$time,_ref4$text = _ref4.text,text = _ref4$text === undefined ? '' : _ref4$text;_classCallCheck(this, Comment);
    Object.assign(this, { userSynopsis: new UserSynopsis(userSynopsis), date: date, time: time, text: text });
};


module.exports = {
    Post: Post };