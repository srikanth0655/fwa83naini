var express = require("express");
var router = express.Router();
var rno;
var atan2;
var atanh;
var cbrt;

/* GET users listing. */

router.get("/", function (req, res, next) {
  rno = Math.random() * (100 - 1) + 1;
  rno1 = Math.random() * (100 - 1) + 1;

  atan2 = Math.atan2(rno, rno1);

  atanh = Math.atanh(0.5);

  cbrt = Math.cbrt(rno);

  res.send(`(atan2) applied to (${rno}, ${rno1}) is ${atan2} <br>

            (atanh) applied to (0.5) is ${atanh} <br>

            (cbrt) applied to (${rno}) is ${cbrt}`);
});

module.exports = router;