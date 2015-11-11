module.exports = function () {
  return new Promise(function (resolve, reject) {
    child_process.execFile('scutil', ['--get', 'LocalHostName'], function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(('' + result).trim());
      }
    });
  });
}
