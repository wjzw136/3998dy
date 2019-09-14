var express = require('express');
var select = require("../mysql/sqlconfig");
var multer = require("multer");
var router = express.Router();


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
var upload = multer({ storage: storage });

/* GET home page. */
router.get('/select', function (req, res, next) {
    let selectsql = "select * from huodong";
    var connect = select.getconnect();
    connect.query(selectsql, function (err, rows, fields) {
        // res.json({row:rows})
        if (rows != false) {
            res.send(rows);
        } else {
            rows = { zhuangtai: "flase" };
            res.send(rows);
        }
    });
    // //res.render("xiexie", { data: "谢谢您提出宝贵意见！" });
    connect.end();

                                                                                                                                                                                  
});

/* GET yxlm 咨询 page. */
router.get('/yx/yxlm', function (req, res, next) {
    let selectsql = "select * from zixun where yx_name = 'yxlm' ";
    var connect = select.getconnect();
    connect.query(selectsql, function (err, rows, fields) {
        // res.json({row:rows})
        if (rows != false) {
            res.send(rows);
        } else {
            rows = { zhuangtai: "flase" };
            res.send(rows);
        }
    });
    connect.end();
});
/* GET yxlm 咨询 page. */
router.get('/yxlist', function (req, res, next) {
    let selectsql = "select * from yxlist where isopen = 'yes' ";
    var connect = select.getconnect();
    connect.query(selectsql, function (err, rows, fields) {
        // res.json({row:rows})
        if (rows != false) {
            res.send(rows);
        } else {
            rows = { zhuangtai: "flase" };
            res.send(rows);
        }
    });
    connect.end();
});

router.post("/add_sql_gonglue", upload.any(), function (req, res, next) {


    let imgs_array = [];
    if (req.files.length > 0 || req.files != false) {
        for (let i = 0; i < req.files.length; i++) {
            imgs_array.push('/uploads/' + req.files[i].filename)
        }
    }
    req.body.data = JSON.parse(req.body.data)
    let neirong = JSON.stringify(req.body.data.neirong);
    let paixu = req.body.data.paixu.join(';');
    let biaoti = req.body.data.biaoti;
    let user = req.body.data.user;
    let time = Date.now();
    let shenhe = 0;
    let imgs = imgs_array.join(';')

    let sql = "INSERT INTO gonglue (imgs,neirong,paixu,biaoti,user,time,shenhe) VALUES (?,?,?,?,?,?,?)";
    let connect = select.getconnect();
    connect.query(sql, [imgs, neirong, paixu, biaoti, user, time, shenhe], function (err, row) {
        if (err) throw err;
        if (row) {
            row.zhuangtai = "发表成功";
            res.json(row);
        } else {
            //res.render("xiexie", { data: "查询出错" });
            row.zhuangtai = "发表攻略失败";
            res.json(row);
        }
    }
    );
    connect.end();
});

module.exports = router;