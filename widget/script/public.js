var server = 'http://192.168.137.1:3000';
var Group = {
    'SY_BOX': { 'header': 'SY_header', 'Group': 'SY_Group', 'headerh': 50 },
    'FL_BOX': { 'header': 'FL_header', 'Group': 'FL_Group', 'headerh': 187 },
    'ME_BOX': { 'header': 'ME_header', 'Group': 'ME_Group', 'headerh': 150 }
}
var zhuangtai = {
    'denglu': {
        "zhanghao": "wjzw136",
        "isdenglu": true
    }
}
var FL_GroupHtml = ['FL_zx_muban', 'FL_fl_muban', 'FL_jhm_muban'];

var pingdao = {
    new: [
        { name: '', image: '',enname:"" }
    ],
    yixuan: [
        { name: "综合", img: "../image/8.png",enname:'zonghe' },
        { name: "DNF", img: "../image/ui/dnf.png", enname: 'dnf' },
        { name: "梦幻西游", img: "../image/ui/mssj.png", enname: 'mhxy' },
        { name: "英雄联盟", img: "../image/ui/yxlm.png", enname: 'yxlm' }
    ],
    pc: [
        { name: "DNF", img: "../image/ui/dnf.png", enname: 'dnf' },
        { name: "梦幻西游", img: "../image/ui/mssj.png", enname: 'mhxy' },
        { name: "英雄联盟", img: "../image/ui/yxlm.png", enname: 'yxlm'},
        { name: "穿越火线", img: "../image/ui/yxlm.png", enname: 'yxlm' }
    ],
    shouyou: [
        { name: "DNF手游", img: "../image/2.jpg", enname: 'dnfsy' },
        { name: "梦幻西游手游", img: "../image/3.jpg", enname: 'mhxysy' },
        { name: "王者荣耀", img: "../image/5.jpg", enname: 'wzry' },
    ],
    yeyou: [
        { name: "DNF", img: "../image/2.jpg", enname: 'dnf' },
        { name: "梦幻西游", img: "../image/3.jpg", enname: 'mhxy' },
        { name: "英雄联盟", img: "../image/4.jpg", enname: 'yxlm'},
        { name: "王者荣耀", img: "../image/5.jpg", enname: 'wzry'},
    ]
};

var lunbotu = {
    paths: [
        '../image/1.jpg',
        '../image/2.jpg',
        '../image/3.jpg',
        '../image/4.jpg'
    ],
    captions: [
        'sjdakd',
        'sjdakd',
        'sjdakd',
        'sjdakd',
    ],
    click: [
        'a',
        'b',
        'c',
        'd'
    ]
};

// INSERT INTO`yxlist`(`name`, `enname`, `leibie`, `isopen`) VALUES('DNF', 'dnf', 'pc', 'yes');
// INSERT INTO`yxlist`(`name`, `enname`, `leibie`, `isopen`) VALUES('梦幻西游', 'mhxy', 'pc', 'yes');
// INSERT INTO`yxlist`(`name`, `enname`, `leibie`, `isopen`) VALUES('英雄联盟', 'yxlm', 'pc', 'yes');
// INSERT INTO`yxlist`(`name`, `enname`, `leibie`, `isopen`) VALUES('穿越火线', 'cyhx', 'pc', 'yes');
// INSERT INTO`yxlist`(`name`, `enname`, `leibie`, `isopen`) VALUES('DNF手游', 'dnfsy', 'shouyou', 'yes');
// INSERT INTO`yxlist`(`name`, `enname`, `leibie`, `isopen`) VALUES('梦幻西游手游', 'mhxysy', 'shouyou', 'yes');
// INSERT INTO`yxlist`(`name`, `enname`, `leibie`, `isopen`) VALUES('王者荣耀', 'wzry', 'shouyou', 'yes');



function hiddenframegroup(frame, framegroup) {
    for (var i = 0; i < frame.length; i++) {
        api.setFrameAttr({
            name: frame[i],
            hidden: true
        });
    }
    for (var i = 0; i < framegroup.length; i++) {
        api.setFrameGroupAttr({
            name: framegroup[i],
            hidden: true
        });
    }
}

function showframegroup(frame, framegroup) {
    for (var i = 0; i < frame.length; i++) {
        api.setFrameAttr({
            name: frame[i],
            hidden: false
        });
    }
    for (var i = 0; i < framegroup.length; i++) {
        api.setFrameGroupAttr({
            name: framegroup[i],
            hidden: false
        });
    }
}

zonghe = {

    zixun: [
        {
            "id": 1,
            "biaoti": "这是资讯第一条信息斯康杜尼借款收到好多",
            "neirong": "这是资讯第一条信息加快速度都看不见的课本上的开不开机",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "资讯",
            "youxi": 'DNF',
            "jifen": 200,
            'image': 'http://abc.2008php.com/2011_Website_appreciate/2011-09-12/20110912104833.jpg'
        }, {
            "id": 2,
            "biaoti": "这是资讯第二条信息",
            "neirong": "这是资讯第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': 'http://p1.so.qhimgs1.com/sdr/400__/t01ca306e893b88825b.jpg'
        }, {
            "id": 3,
            "biaoti": "这是资讯第三条信息",
            "neirong": "这是资讯第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': 'http://p0.so.qhimgs1.com/sdr/400__/t01a74f1e5db0b4e354.jpg'
        }
    ],
    fuli: [
        {
            "id": 1,
            "biaoti": "好礼现享，注册即送100积分",
            "neirong": "好礼现享，注册即送100积分，100积分可参与各种抽奖,100积分可参与各种抽奖",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "送分题",
            "youxi": 'DNF',
            "jifen": 100,
            'image': '../image/4.jpg'
        }, {
            "id": 2,
            "biaoti": "这是福利第二条信息",
            "neirong": "这是福利第二条信息这是福利第二条信息这是福利第二条信息这是福利第二条信息这是福利第二条信息这是福利第二条信息这是福利第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '../image/5.jpg'
        }, {
            "id": 3,
            "biaoti": "这是福利第三条信息",
            "neirong": "这是福利第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '../image/6.jpg'
        }
    ],
    jihuoma: [
        {
            "id": 1,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '../image/2.jpg'
        }, {
            "id": 2,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '../image/3.jpg'
        }, {
            "id": 3,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '../image/4.jpg'
        }
    ]

};


mhxy = {

    zixun: [
        {
            "id": 1,
            "biaoti": "这是资讯第一条信息",
            "neirong": "这是资讯第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "资讯",
            "youxi": 'mhxy',
            "jifen": 200,
            'image': '../image/1.jpg'
        }, {
            "id": 2,
            "biaoti": "这是资讯第二条信息",
            "neirong": "这是资讯第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '../image/3.jpg'
        }, {
            "id": 3,
            "biaoti": "这是资讯第三条信息",
            "neirong": "这是资讯第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '../image/2.jpg'
        }
    ],
    fuli: [
        {
            "id": 1,
            "biaoti": "这是福利第一条信息",
            "neirong": "这是福利第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'mhxy',
            "jifen": 200,
            'image': '../image/4.jpg'
        }, {
            "id": 2,
            "biaoti": "这是福利第二条信息",
            "neirong": "这是福利第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '../image/3.jpg'
        }, {
            "id": 3,
            "biaoti": "这是福利第三条信息",
            "neirong": "这是福利第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '../image/6.jpg'
        }
    ],
    jihuoma: [
        {
            "id": 1,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '../image/1.jpg'
        }, {
            "id": 2,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '../image/3.jpg'
        }, {
            "id": 3,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '../image/6.jpg'
        }
    ]

};

dnf = {

    zixun: [
        {
            "id": 1,
            "biaoti": "这是资讯第一条信息",
            "neirong": "这是资讯第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "资讯",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '../image/7.jpg'
        }, {
            "id": 2,
            "biaoti": "这是资讯第二条信息",
            "neirong": "这是资讯第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '../image/4.jpg'
        }, {
            "id": 3,
            "biaoti": "这是资讯第三条信息",
            "neirong": "这是资讯第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '../image/5.jpg'
        }
    ],
    fuli: [
        {
            "id": 1,
            "biaoti": "这是福利第一条信息",
            "neirong": "这是福利第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '../image/7.jpg'
        }, {
            "id": 2,
            "biaoti": "这是福利第二条信息",
            "neirong": "这是福利第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '../image/2.jpg'
        }, {
            "id": 3,
            "biaoti": "这是福利第三条信息",
            "neirong": "这是福利第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '../image/3.jpg'
        }
    ],
    jihuoma: [
        {
            "id": 1,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '../image/4.jpg'
        }, {
            "id": 2,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '../image/5.jpg'
        }, {
            "id": 3,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '../image/4.jpg'
        }
    ]

};

yxlm = {

    zixun: [
        {
            "id": 1,
            "biaoti": "这是资讯第一条信息",
            "neirong": "这是资讯第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "资讯",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/2.jpg'
        }, {
            "id": 2,
            "biaoti": "这是资讯第二条信息",
            "neirong": "这是资讯第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/3.jpg'
        }, {
            "id": 3,
            "biaoti": "这是资讯第三条信息",
            "neirong": "这是资讯第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/5.jpg'
        }
    ],
    fuli: [
        {
            "id": 1,
            "biaoti": "这是福利第一条信息",
            "neirong": "这是福利第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/1.jpg'
        }, {
            "id": 2,
            "biaoti": "这是福利第二条信息",
            "neirong": "这是福利第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/3.jpg'
        }, {
            "id": 3,
            "biaoti": "这是福利第三条信息",
            "neirong": "这是福利第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/2.jpg'
        }
    ],
    jihuoma: [
        {
            "id": 1,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/3.jpg'
        }, {
            "id": 2,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/4.jpg'
        }, {
            "id": 3,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/5.jpg'
        }
    ]

};
dnfsy = {

    zixun: [
        {
            "id": 1,
            "biaoti": "这是资讯第一条信息",
            "neirong": "这是资讯第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "资讯",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/2.jpg'
        }, {
            "id": 2,
            "biaoti": "这是资讯第二条信息",
            "neirong": "这是资讯第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/3.jpg'
        }, {
            "id": 3,
            "biaoti": "这是资讯第三条信息",
            "neirong": "这是资讯第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/5.jpg'
        }
    ],
    fuli: [
        {
            "id": 1,
            "biaoti": "这是福利第一条信息",
            "neirong": "这是福利第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/1.jpg'
        }, {
            "id": 2,
            "biaoti": "这是福利第二条信息",
            "neirong": "这是福利第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/3.jpg'
        }, {
            "id": 3,
            "biaoti": "这是福利第三条信息",
            "neirong": "这是福利第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/2.jpg'
        }
    ],
    jihuoma: [
        {
            "id": 1,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/3.jpg'
        }, {
            "id": 2,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/4.jpg'
        }, {
            "id": 3,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/5.jpg'
        }
    ]

};
mhxysy = {

    zixun: [
        {
            "id": 1,
            "biaoti": "这是资讯第一条信息",
            "neirong": "这是资讯第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "资讯",
            "youxi": 'yxlmsy',
            "jifen": 200,
            'image': '../image/2.jpg'
        }, {
            "id": 2,
            "biaoti": "这是资讯第二条信息",
            "neirong": "这是资讯第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlmsy',
            "jifen": 200,
            'image': '../image/3.jpg'
        }, {
            "id": 3,
            "biaoti": "这是资讯第三条信息",
            "neirong": "这是资讯第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlmsy',
            "jifen": 200,
            'image': '../image/5.jpg'
        }
    ],
    fuli: [
        {
            "id": 1,
            "biaoti": "这是福利第一条信息",
            "neirong": "这是福利第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '../image/1.jpg'
        }, {
            "id": 2,
            "biaoti": "这是福利第二条信息",
            "neirong": "这是福利第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlmsy',
            "jifen": 200,
            'image': '../image/3.jpg'
        }, {
            "id": 3,
            "biaoti": "这是福利第三条信息",
            "neirong": "这是福利第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlmsy',
            "jifen": 200,
            'image': '../image/2.jpg'
        }
    ],
    jihuoma: [
        {
            "id": 1,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlmsy',
            "jifen": 200,
            'image': '../image/3.jpg'
        }, {
            "id": 2,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlmsy',
            "jifen": 200,
            'image': '../image/4.jpg'
        }, {
            "id": 3,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlmsy',
            "jifen": 200,
            'image': '../image/5.jpg'
        }
    ]

}

yxdata = {
    zonghe: zonghe,
    dnf: dnf,
    mhxy: mhxy,
    yxlm: yxlm,
    mhxysy: mhxysy,
    dnfsy: dnfsy
};