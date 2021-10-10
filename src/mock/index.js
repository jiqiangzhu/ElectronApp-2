import Mock from 'mockjs';
import { getRandomCode, getRandomNumber } from '@/utils/string-util';

Mock.setup({
  timeout: '800-1000',
});

Mock.mock('/user/details', 'get', () => {
  return {
    level: 5,
    listenSongs: 339,
    userPoint: {
      userId: 2003935822,
      balance: 100,
      updateTime: 1617714681815,
      version: 10,
      status: 0,
      blockBalance: 0,
    },
    mobileSign: false,
    pcSign: false,
    profile: {
      avatarDetail: null,
      mutual: false,
      followed: false,
      remarkName: null,
      authStatus: 0,
      nickname: '你管他那么多嘞',
      avatarUrl: 'avatar.jpg',
      detailDescription: '',
      experts: {},
      expertTags: null,
      djStatus: 0,
      accountStatus: 0,
      birthday: -2209017600000,
      gender: 1,
      province: 410000,
      city: 411100,
      defaultAvatar: false,
      avatarImgId: 109951164411577060,
      backgroundImgId: 109951162868128400,
      backgroundUrl: 'http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg',
      vipType: 0,
      userType: 0,
      createTime: 1570336833373,
      backgroundImgIdStr: '109951162868128395',
      avatarImgIdStr: '109951164411577061',
      description: '',
      userId: 2003935822,
      signature: '',
      authority: 0,
      followeds: 0,
      follows: 5,
      blacklist: false,
      eventCount: 0,
      allSubscribedCount: 0,
      playlistBeSubscribedCount: 0,
      avatarImgId_str: '109951164411577061',
      followTime: null,
      followMe: false,
      artistIdentity: [],
      cCount: 0,
      sDJPCount: 0,
      playlistCount: 2,
      sCount: 0,
      newFollows: 5,
    },
    peopleCanSeeMyPlayRecord: true,
    bindings: [
      {
        expiresIn: 2147483647,
        refreshTime: 1570336815,
        bindingTime: 1570336815706,
        tokenJsonStr: null,
        expired: false,
        url: '',
        userId: 2003935822,
        id: 6972487356,
        type: 1,
      },
      {
        expiresIn: 7200,
        refreshTime: 1570336855,
        bindingTime: 1570336792882,
        tokenJsonStr: null,
        expired: true,
        url: '',
        userId: 2003935822,
        id: 6972487357,
        type: 10,
      },
    ],
    adValid: true,
    code: 200,
    createTime: 1570336833373,
    createDays: 549,
  };
});
// get recommand music list
Mock.mock('/home/musiclist', 'get', () => {
  return {
    hasTaste: false,
    code: 200,
    category: 0,
    result: [
      {
        id: 6678233267,
        type: 0,
        name: '温暖爵士｜咖啡与猫，治愈周末时光',
        copywriter: '编辑推荐：太快没有故事，太急没有人生',
        picUrl: 'https://p1.music.126.net/ybw7-ePjz1AfFnmZuJjgGQ==/109951165832891814.jpg',
        canDislike: false,
        trackNumberUpdateTime: 1618055984799,
        playCount: 695800,
        trackCount: 45,
        highQuality: false,
        alg: 'featured',
      },
      {
        id: 3046489325,
        type: 0,
        name: '巴适得板丨indie音乐场景·「成都乐队」',
        copywriter: '编辑推荐：用现场音乐去感染广大乐迷',
        picUrl: 'https://p1.music.126.net/tBExJm3AqJeMBuEuxkIIgA==/109951165855060204.jpg',
        canDislike: false,
        trackNumberUpdateTime: 1617872035103,
        playCount: 813815,
        trackCount: 146,
        highQuality: false,
        alg: 'featured',
      },
      {
        id: 5068534740,
        type: 0,
        name: '还好大雾四起 藏匿难言爱意',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/UDv_LqXIRs91911xBuVhhg==/109951165612512203.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1617290647019,
        playCount: 3066233,
        trackCount: 178,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 5074680104,
        type: 0,
        name: '白月光在照耀 朱砂痣久难消',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/28X_3AI7sUlmRMuZfRT8Gg==/109951165618512619.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1616425067364,
        playCount: 1242195,
        trackCount: 96,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 6688627277,
        type: 0,
        name: '请把烦恼放一放，一起与治愈的歌相伴',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/YmovNx-NoUr3Bxod3LcMYA==/109951165850854348.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1617509984528,
        playCount: 2259891,
        trackCount: 51,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 897784673,
        type: 0,
        name: '原神OST(收录至《漩涡、落星与冰山》)',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/p868nK-_3WwLcFZhO3lFQg==/109951165854538793.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1617337161750,
        playCount: 739148,
        trackCount: 181,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 3110865674,
        type: 0,
        name: '你数数 这是你第几次丢下我',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/Xvo6PwBcdOA69ipcpV9YYg==/109951165463253777.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1617880530990,
        playCount: 10157738,
        trackCount: 124,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 6688783634,
        type: 0,
        name: '2021第41届全英音乐奖提名名单',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/IkSP7JLZ-9UGrSAVGQrEpA==/109951165851477028.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1617241211153,
        playCount: 405130,
        trackCount: 45,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 2763727863,
        type: 0,
        name: '人在经历一些事以后就会悄悄改变性格.',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/L442wBO_UgPUSQZfxFhQng==/109951165882032924.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1618142893014,
        playCount: 179683,
        trackCount: 111,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 5117963951,
        type: 0,
        name: '有些心动 一开始就覆水难收',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/u3c3zFkIT64V6MFxTfQWXw==/109951165479782064.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1616245639011,
        playCount: 1141599,
        trackCount: 119,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 5051447966,
        type: 0,
        name: '神仙翻唱 | 这些翻唱这么火大概就是好听吧',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/ns0C_DgZp8SAxwWLjtJ_7Q==/109951165137169029.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1617005638707,
        playCount: 7809122,
        trackCount: 63,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 5152332685,
        type: 0,
        name: '我们不能总为不值得的人流太多眼泪',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/AB-3WsIeCfDPkRyF_csLVQ==/109951165260265255.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1617604686375,
        playCount: 21881348,
        trackCount: 234,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 6667393873,
        type: 0,
        name: '今天天气很好，想晒晒太阳和你见一面',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/3ifBOkDOG5tth5PGUYOcBg==/109951165834727863.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1617501235695,
        playCount: 709177,
        trackCount: 33,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 3184948872,
        type: 0,
        name: '「神仙翻唱」原创听腻了？试试这些神仙翻唱',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/rVQlZwxRpeLWO7BC0t4Z6w==/109951165054685886.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1612729523115,
        playCount: 1367996,
        trackCount: 97,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 6676257866,
        type: 0,
        name: '《暗恋》：一封自写自读的情书',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/nWufCmwMIkTICDIObc8oxQ==/109951165829974966.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1617449710057,
        playCount: 706136,
        trackCount: 26,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 5382682753,
        type: 0,
        name: '你会对我第二次心动吗',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/GjpC4y21lxvh-wbvRZCPDQ==/109951165602360304.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1617429985207,
        playCount: 2008361,
        trackCount: 227,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 5480620895,
        type: 0,
        name: '这次我站在雾里 连自己都看不清',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/lK_syWrzR9dyW5AuuaEQ_g==/109951165679982343.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1617418636129,
        playCount: 829586,
        trackCount: 104,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 4985344057,
        type: 0,
        name: '有人为了和你相遇而正在错过别人',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/xpwmY-yXuHaP9hg82XXGsg==/109951165594900119.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1617447260809,
        playCount: 2686208,
        trackCount: 58,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 5121921415,
        type: 0,
        name: '神仙翻唱:超好听的翻唱集',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/e2NZVcG4fR60Hc0BO3pDeg==/109951165143676266.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1618075585552,
        playCount: 5848588,
        trackCount: 264,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 5027070307,
        type: 0,
        name: '翻唱｜我为你翻山越岭 却无心看风景',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/m96Avv3sw-EJjL8QlRFg8A==/109951165007346256.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1617469140060,
        playCount: 5891539,
        trackCount: 98,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 5346481834,
        type: 0,
        name: '把挽留的话停在对话框',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/xQYcCLMmayn1aeBc3TD1sQ==/109951165489499941.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1616750105777,
        playCount: 1198175,
        trackCount: 94,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 3173391820,
        type: 0,
        name: '“中途离开的人都是说过会陪你好久的人”',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/zyiAnTJpsfHPSPVCVPXSEA==/109951165764984626.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1614438622110,
        playCount: 1829922,
        trackCount: 81,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 948229732,
        type: 0,
        name: '“红色感叹号是有多失望.”',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/jLnWyD3TxzKeqDF2Vpy4Hw==/109951165463437339.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1618130614601,
        playCount: 1379016,
        trackCount: 179,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 906626701,
        type: 0,
        name: '精选新疆买西来普舞曲，',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/kHhWviQwPuSgOj5P-zUCzQ==/109951163024332153.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1615370038568,
        playCount: 1714486,
        trackCount: 81,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 2974449693,
        type: 0,
        name: '我想你了 其实我也很脆弱',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/fob5pHV3xzGlJ_-KEeLFLg==/109951165693966983.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1612493399745,
        playCount: 53767880,
        trackCount: 186,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 92146466,
        type: 0,
        name: '个人喜欢的极致旋律嘻哈',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/QVx2lJdcZAb8aFSPyj94qw==/7965961744732997.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1574159952226,
        playCount: 9598061,
        trackCount: 33,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 5050189373,
        type: 0,
        name: 'Rap情歌|夏日汽水甜味满分',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/2LVFxsK2tm0_LzjEDEBcMQ==/109951165048394869.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1617894614522,
        playCount: 1274653,
        trackCount: 78,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 739999145,
        type: 0,
        name: '抖断腿系列｜后面的朋友让我看到你们的双腿',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/iHhjPIgH4UmdJOoaBYJz-w==/19123805742064721.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1614212100219,
        playCount: 1877630,
        trackCount: 96,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 5058285471,
        type: 0,
        name: '发呆指南｜听这些才能放空大脑',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/k1Qnn6bxIknlr_NmjoVjPg==/109951165052746168.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1591854807800,
        playCount: 1861694,
        trackCount: 42,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
      {
        id: 5060516187,
        type: 0,
        name: '翻唱精选集·好听的歌没有完整版系列',
        copywriter: '热门推荐',
        picUrl: 'https://p1.music.126.net/M7je-gvIoxMbwXJrwZ183g==/109951165730235311.jpg',
        canDislike: true,
        trackNumberUpdateTime: 1616939746762,
        playCount: 840229,
        trackCount: 94,
        highQuality: false,
        alg: 'cityLevel_unknow',
      },
    ],
  };
});

// get covid-19 map
Mock.mock('/sina/fymap', 'get', () => {
  try {
    const jsonStr = require('../../src/static/fydata.json');
    console.log('jsonStr', jsonStr);
    return {
      data: jsonStr.data.data,
    };
  } catch (e) {
    console.warn('e', e);
  }
});

// get recommend picture url
Mock.mock('/home/recommend', 'get', () => {
  let arr = [];
  try {
    for (let i = 1; i <= 30; i++) {
      arr.push({
        default: require(`@/assets/img/recommend1/${i}.jpg`).default,
        real: require(`@/assets/img/recommend/${i}.jpg`).default
      });
    }
    return {
      data: arr,
    };
  } catch (e) {
    console.warn('e', e);
  }
});

// get tear-clothe photo
Mock.mock('/tear/clothe', 'get', () => {
  try {
    const hara_A = require('../assets/img/sex/hara_A.jpg');
    const hara_B = require('../assets/img/sex/hara_B.jpg');
    const hoshino_A = require('../assets/img/sex/hoshino_A.jpg');
    const hoshino_B = require('../assets/img/sex/hoshino_B.jpg');
    const kinokuchi_A = require('../assets/img/sex/kinokuchi_A.jpg');
    const kinokuchi_B = require('../assets/img/sex/kinokuchi_B.jpg');
    const nagasaki_A = require('../assets/img/sex/nagasaki_A.jpg');
    const nagasaki_B = require('../assets/img/sex/nagasaki_B.jpg');
    const suzuki_A = require('../assets/img/sex/suzuki_A.jpg');
    const suzuki_B = require('../assets/img/sex/suzuki_B.jpg');
    const tani_A = require('../assets/img/sex/tani_A.jpg');
    const tani_B = require('../assets/img/sex/tani_B.jpg');
    const watanabe_A = require('../assets/img/sex/watanabe_A.jpg');
    const watanabe_B = require('../assets/img/sex/watanabe_B.jpg');
    return {
      data: [
        hara_A, hara_B, hoshino_A, hoshino_B, kinokuchi_A, kinokuchi_B, nagasaki_A,
        nagasaki_B, suzuki_A, suzuki_B, tani_A, tani_B, watanabe_A, watanabe_B
      ],
    };
  } catch (e) {
    console.warn('e', e);
  }
});

// get movie photo
Mock.mock('/movie/photo', 'get', () => {
  let arr = [];
  try {
    for (let i = 1; i < 19; i++) {
      arr.push({
        "default": require(`@/assets/img/movie/${i}.jpg`),
        "key": getRandomCode(10),
        "number": getRandomNumber(5)
      })
    }
    return {
      photoList: arr
    }
  } catch (e) {
    console.warn('e', e);
  }
})

// get cool switch photo 
Mock.mock('/rank/photo', 'get', () => {
  let arr = [];
  try {
    for (let i = 1; i <= 30; i++) {
      arr.push({
        "default": require(`@/assets/img/recommend1/${i}.jpg`),
        "key": getRandomCode(10),
        "number": Math.random() * 6 | 0
      })
    }
    return {
      photoList: arr
    }

  } catch (e) {
    console.warn('e', e);
  }
})
