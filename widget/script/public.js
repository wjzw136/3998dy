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
var FL_GroupHtml = ['FL_zonghe', 'FL_mhxy', 'FL_dnf'];
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