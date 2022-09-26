const rateLimit = require("express-rate-limit");

module.exports.store = new rateLimit.MemoryStore();
