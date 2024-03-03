'use strict';

const crypto = require('crypto');

class DecodeService {
  static VERSION = process.env.ZING_VERSION
  static SECRET_KEY = process.env.ZING_SECRET_KEY
  static API_KEY = process.env.ZING_API_KEY

  static getHast256(str) {
    return crypto.createHash('sha256').update(str).digest('hex');
  }

  static getHmac512(str) {
    let hmac = crypto.createHmac("sha512", this.SECRET_KEY);
    return hmac.update(Buffer.from(str, "utf8")).digest("hex");
  }

  static hashParamNoId(path, ctime) {
    return this.getHmac512(path + this.getHast256(`ctime=${ctime}version=${this.VERSION}`));
  }

  static hashParam(path, ctime, id) {
    return this.getHmac512(path + this.getHast256(`ctime=${ctime}id=${id}version=${this.VERSION}`));
  }
}

module.exports = DecodeService
