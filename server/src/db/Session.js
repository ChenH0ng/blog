const { db } = require("./context");

module.exports = {
  create({ username = "", password = "" }) {
    return new Promise((resolve, reject) => {
      db
        .collection("users")
        .findOne({ username, password })
        .then(doc => {
          if (doc) {
            resolve(doc);
          } else
            resolve(null);
        })
        .catch(e => reject(e));
    });
  }
};
