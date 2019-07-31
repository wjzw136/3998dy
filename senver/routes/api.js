var express = require('express');
var select = require("../mysql/sqlconfig");
var router = express.Router();

/* GET home page. */
router.get('/select', function (req, res, next) {
    let selectsql = "select * from huodong";
    var connect = select.getconnect();
    connect.query(selectsql, function (err, rows, fields) {
        // res.json({row:rows})
        if (rows != false) {
            res.send('sdsdsd');
        } else {
            rows = { zhuangtai: "flase" };
            res.send(rows);
        }
    });
    // //res.render("xiexie", { data: "谢谢您提出宝贵意见！" });
    connect.end();

                                                                                                                                                                                  
});

module.exports = router;