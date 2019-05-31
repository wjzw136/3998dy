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
var FL_GroupHtml = ['FL_zonghe', 'FL_yx_muban', 'FL_jhm_muban'];

var pingdao = {
    new: [
        {name:'',image:''}
    ],
    yixuan: [
        { name: "DNF", img: "../image/2.jpg" },
        { name: "梦幻西游", img: "../image/3.jpg" },
        { name: "英雄联盟", img: "../image/4.jpg" }
    ],
    pc: [
        { name: "DNF", img: "../image/2.jpg" },
        { name: "梦幻西游", img: "../image/3.jpg" },
        { name: "英雄联盟", img: "../image/4.jpg" },
    ],
    shouyou: [
        { name: "DNF手游", img: "../image/2.jpg" },
        { name: "梦幻西游手游", img: "../image/3.jpg" },
        { name: "王者荣耀", img: "../image/5.jpg" },
    ],
    yeyou: [
        { name: "DNF", img: "../image/2.jpg" },
        { name: "梦幻西游", img: "../image/3.jpg" },
        { name: "英雄联盟", img: "../image/4.jpg" },
        { name: "王者荣耀", img: "../image/5.jpg" },
    ]
}

var lunbotu ={
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
}





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
            "biaoti": "这是资讯第一条信息",
            "neirong": "这是资讯第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "资讯",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '1.jpg'
        }, {
            "id": 2,
            "biaoti": "这是资讯第二条信息",
            "neirong": "这是资讯第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '2.jpg'
        }, {
            "id": 3,
            "biaoti": "这是资讯第三条信息",
            "neirong": "这是资讯第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '3.jpg'
        }
    ],
    fuli: [
        {
            "id": 1,
            "biaoti": "好礼现享，注册即送100积分",
            "neirong": "好礼现享，注册即送100积分，100积分可参与各种抽奖",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "送分题",
            "youxi": 'DNF',
            "jifen": 100,
            'image': '4.jpg'
        }, {
            "id": 2,
            "biaoti": "这是福利第二条信息",
            "neirong": "这是福利第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '5.jpg'
        }, {
            "id": 3,
            "biaoti": "这是福利第三条信息",
            "neirong": "这是福利第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '6.jpg'
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
            'image': '2.jpg'
        }, {
            "id": 2,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '3.jpg'
        }, {
            "id": 3,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '4.jpg'
        }
    ]

}


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
            'image': '1.jpg'
        }, {
            "id": 2,
            "biaoti": "这是资讯第二条信息",
            "neirong": "这是资讯第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '3.jpg'
        }, {
            "id": 3,
            "biaoti": "这是资讯第三条信息",
            "neirong": "这是资讯第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '2.jpg'
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
            'image': '4.jpg'
        }, {
            "id": 2,
            "biaoti": "这是福利第二条信息",
            "neirong": "这是福利第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '3.jpg'
        }, {
            "id": 3,
            "biaoti": "这是福利第三条信息",
            "neirong": "这是福利第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '6.jpg'
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
            'image': '1.jpg'
        }, {
            "id": 2,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '3.jpg'
        }, {
            "id": 3,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'MHXY',
            "jifen": 200,
            'image': '6.jpg'
        }
    ]

}

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
            'image': '7.jpg'
        }, {
            "id": 2,
            "biaoti": "这是资讯第二条信息",
            "neirong": "这是资讯第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '4.jpg'
        }, {
            "id": 3,
            "biaoti": "这是资讯第三条信息",
            "neirong": "这是资讯第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '5.jpg'
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
            'image': '7.jpg'
        }, {
            "id": 2,
            "biaoti": "这是福利第二条信息",
            "neirong": "这是福利第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '2.jpg'
        }, {
            "id": 3,
            "biaoti": "这是福利第三条信息",
            "neirong": "这是福利第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '3.jpg'
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
            'image': '4.jpg'
        }, {
            "id": 2,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '5.jpg'
        }, {
            "id": 3,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'DNF',
            "jifen": 200,
            'image': '4.jpg'
        }
    ]

}

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
            'image': '2.jpg'
        }, {
            "id": 2,
            "biaoti": "这是资讯第二条信息",
            "neirong": "这是资讯第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '3.jpg'
        }, {
            "id": 3,
            "biaoti": "这是资讯第三条信息",
            "neirong": "这是资讯第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '5.jpg'
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
            'image': '1.jpg'
        }, {
            "id": 2,
            "biaoti": "这是福利第二条信息",
            "neirong": "这是福利第二条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '3.jpg'
        }, {
            "id": 3,
            "biaoti": "这是福利第三条信息",
            "neirong": "这是福利第三条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '2.jpg'
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
            'image': '3.jpg'
        }, {
            "id": 2,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '4.jpg'
        }, {
            "id": 3,
            "biaoti": "这是激活码第一条信息",
            "neirong": "这是激活码第一条信息",
            "time": "2018-05-22,11:21:0",
            "user": "admin",
            "biaoqian": "幻神",
            "youxi": 'yxlm',
            "jifen": 200,
            'image': '5.jpg'
        }
    ]

}

yxdata = {
    zonghe: zonghe,
    DNF: dnf,
    梦幻西游: mhxy,
    王者荣耀: zonghe,
    英雄联盟: yxlm
}