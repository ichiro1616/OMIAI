//コマの座標（中心基準）
let imagearray_center = [
    [
        {
            x: 50,
            y: 10,
        },
        {
            x: 460,
            y: 370,
        },
        {
            x: 760,
            y: 370,
        },
        {
            x: 620,
            y: 600,
        },
        {
            x: 310,
            y: 600,
        },
        {
            x: 160,
            y: 370,
        },
    ],
    [
        {
            x: 550,
            y: 10,
        },
        {
            x: 760,
            y: 370,
        },
        {
            x: 620,
            y: 600,
        },
        {
            x: 460,
            y: 370,
        },
        {
            x: 310,
            y: 600,
        },
        {
            x: 160,
            y: 370,
        },
    ],
    [
        {
            x: 840,
            y: 10,
        },
        {
            x: 760,
            y: 370,
        },
        {
            x: 620,
            y: 600,
        },
        {
            x: 310,
            y: 600,
        },
        {
            x: 160,
            y: 370,
        },
        {
            x: 460,
            y: 370,
        },
    ],
    [
        {
            x: 870,
            y: 460,
        },
        {
            x: 620,
            y: 600,
        },
        {
            x: 310,
            y: 600,
        },
        {
            x: 160,
            y: 370,
        },
        {
            x: 460,
            y: 370,
        },
        {
            x: 760,
            y: 370,
        },
    ],
    [
        {
            x: 350,
            y: 460,
        },
        {
            x: 310,
            y: 600,
        },
        {
            x: 160,
            y: 370,
        },
        {
            x: 460,
            y: 370,
        },
        {
            x: 760,
            y: 370,
        },
        {
            x: 620,
            y: 600,
        },
    ],
    [
        {
            x: 50,
            y: 460,
        },
        {
            x: 160,
            y: 370,
        },
        {
            x: 460,
            y: 370,
        },
        {
            x: 760,
            y: 370,
        },
        {
            x: 620,
            y: 600,
        },
        {
            x: 310,
            y: 600,
        },
    ],
];

//コマの座標（左上基準）
let imagearray = [
    [
        {
            x: 50,
            y: 10,
        },
        {
            x: 460,
            y: 370,
        },
        {
            x: 760,
            y: 370,
        },
        {
            x: 620,
            y: 600,
        },
        {
            x: 310,
            y: 600,
        },
        {
            x: 160,
            y: 370,
        },
    ],
    [
        {
            x: 550,
            y: 10,
        },
        {
            x: 760,
            y: 370,
        },
        {
            x: 620,
            y: 600,
        },
        {
            x: 460,
            y: 370,
        },
        {
            x: 310,
            y: 600,
        },
        {
            x: 160,
            y: 370,
        },
    ],
    [
        {
            x: 840,
            y: 10,
        },
        {
            x: 760,
            y: 370,
        },
        {
            x: 620,
            y: 600,
        },
        {
            x: 310,
            y: 600,
        },
        {
            x: 160,
            y: 370,
        },
        {
            x: 460,
            y: 370,
        },
    ],
    [
        {
            x: 870,
            y: 460,
        },
        {
            x: 620,
            y: 600,
        },
        {
            x: 310,
            y: 600,
        },
        {
            x: 160,
            y: 370,
        },
        {
            x: 460,
            y: 370,
        },
        {
            x: 760,
            y: 370,
        },
    ],
    [
        {
            x: 350,
            y: 460,
        },
        {
            x: 310,
            y: 600,
        },
        {
            x: 160,
            y: 370,
        },
        {
            x: 460,
            y: 370,
        },
        {
            x: 760,
            y: 370,
        },
        {
            x: 620,
            y: 600,
        },
    ],
    [
        {
            x: 50,
            y: 460,
        },
        {
            x: 160,
            y: 370,
        },
        {
            x: 460,
            y: 370,
        },
        {
            x: 760,
            y: 370,
        },
        {
            x: 620,
            y: 600,
        },
        {
            x: 310,
            y: 600,
        },
    ],
];

//canvasに描画する準備
const canvas = document.getElementById('canvas3');
const context = canvas.getContext('2d');

//under_canvasに描画する準備
const under_canvas = document.getElementById('under_canvas');//1ローテーション目
const under_context = under_canvas.getContext('2d');
const under_canvas2 = document.getElementById('under_canvas2');//2ローテーション目
const under_context2 = under_canvas2.getContext('2d');
const under_canvas3 = document.getElementById('under_canvas3');//3ローテーション目
const under_context3 = under_canvas3.getContext('2d');
const under_canvas4 = document.getElementById('under_canvas4');//4ローテーション目
const under_context4 = under_canvas4.getContext('2d');
const under_canvas5 = document.getElementById('under_canvas5');//5ローテーション目
const under_context5 = under_canvas5.getContext('2d');
const under_canvas6 = document.getElementById('under_canvas6');//6ローテーション目
const under_context6 = under_canvas6.getContext('2d');


//画像パス
const srcs = [
    //ローテーション0
    [
        '../Picture/koma/0/2-1.png',//セッター（コマ0）前衛
        '../Picture/koma/1/front/2-2.png',//るい（コマ1）前衛
        '../Picture/koma/2/front/2-3.png',//ひなた（コマ2）前衛
        '../Picture/koma/3/back/2-4.png',//けんと（コマ3）後衛
        '../Picture/koma/4/back/2-5.png',//りく（コマ4）後衛
        '../Picture/koma/5/back/2-6.png',//けいすけ（コマ5）後衛
    ],
    //ローテーション1
    [
        '../Picture/koma/0/2-1.png',//セッター（コマ0）前衛
        '../Picture/koma/1/front/2-2.png',//るい（コマ1）前衛
        '../Picture/koma/2/back/2-3.png',//ひなた（コマ2）後衛
        '../Picture/koma/3/back/2-4.png',//けんと（コマ3）後衛
        '../Picture/koma/4/back/2-5.png',//りく（コマ4）後衛
        '../Picture/koma/5/front/2-6.png',//けいすけ（コマ5）前衛
    ],
    //ローテーション2
    [
        '../Picture/koma/0/2-1.png',//セッター（コマ0）前衛
        '../Picture/koma/1/back/2-2.png',//るい（コマ1）後衛
        '../Picture/koma/2/back/2-3.png',//ひなた（コマ2）後衛
        '../Picture/koma/3/back/2-4.png',//けんと（コマ3）後衛
        '../Picture/koma/4/front/2-5.png',//りく（コマ4）前衛
        '../Picture/koma/5/front/2-6.png',//けいすけ（コマ5）前衛
    ],
    //ローテーション3
    [
        '../Picture/koma/0/2-1.png',//セッター（コマ0）後衛
        '../Picture/koma/1/back/2-2.png',//るい（コマ1）後衛
        '../Picture/koma/2/back/2-3.png',//ひなた（コマ2）後衛
        '../Picture/koma/3/front/2-4.png',//けんと（コマ3）前衛
        '../Picture/koma/4/front/2-5.png',//りく（コマ4）前衛
        '../Picture/koma/5/front/2-6.png',//けいすけ（コマ5）前衛
    ],
    //ローテーション4
    [
        '../Picture/koma/0/2-1.png',//セッター（コマ0）後衛
        '../Picture/koma/1/back/2-2.png',//るい（コマ1）後衛
        '../Picture/koma/2/front/2-3.png',//ひなた（コマ2）前衛
        '../Picture/koma/3/front/2-4.png',//けんと（コマ3）前衛
        '../Picture/koma/4/front/2-5.png',//りく（コマ4）前衛
        '../Picture/koma/5/back/2-6.png',//けいすけ（コマ5）後衛
    ],
    //ローテーション5
    [
        '../Picture/koma/0/2-1.png',//セッター（コマ0）後衛
        '../Picture/koma/1/front/2-2.png',//るい（コマ1）前衛
        '../Picture/koma/2/front/2-3.png',//ひなた（コマ2）前衛
        '../Picture/koma/3/front/2-4.png',//けんと（コマ3）前衛
        '../Picture/koma/4/back/2-5.png',//りく（コマ4）後衛
        '../Picture/koma/5/back/2-6.png',//けいすけ（コマ5）後衛
    ]
];

//画像 ローテーションするなら多次元にした方がいいかも
let images = new Array(6);//要素数6の配列imagesを作成
for (var i = 0; i < 6; i++) {
    images[i] = new Array(6).fill(0);//imagesの多次元配列を作成し0で初期化
}
for (var i = 0; i < 6; i++) {//ローテーション
    for (var j = 0; j < 6; j++) {//コマ番号
        images[i][j] = new Image();
    }
}

let scale = under_canvas.width / canvas.width;//canvasとunder_canvasの比
let dragmode = false;//ドラッグモード
let dragkoma = null;//ドラッグするコマの添え字
let size = 2.0;//メイン画面のコマの大きさの倍率
let size_under = scale * size;//サブ画面のコマの大きさの倍率
let koma_w = 100;//コマの横幅
let koma_h = 100;//コマの高さ
let counter = 0;//ローテーションカウント用
let startX;//ドラッグ開始時のx座標
let startY;//ドラッグ開始時のy座標

//コマの中心の座標を用意
for (var i in imagearray) {
    for (var j in imagearray[i]) {
        imagearray_center[i][j].x += koma_w / 2 * size;
        imagearray_center[i][j].y += koma_h / 2 * size;
    }
}

//セッターの座標を修正
imagearray_center[3][0].x = imagearray_center[3][5].x + koma_w / 2 * size * Math.cos(Math.PI / 4) - 50 + 10 * size;//45°
imagearray_center[3][0].y = imagearray_center[3][5].y + koma_h / 2 * size * Math.sin(Math.PI / 4) - 50 + 10 * size;//45°
imagearray[3][0].x += koma_w / 2 * size * Math.cos(Math.PI / 4) - 50 + 10 * size;//45°
imagearray[3][0].y += koma_h / 2 * size * Math.sin(Math.PI / 4) - 50 + 10 * size;//45°

imagearray_center[4][0].x = imagearray_center[4][3].x - koma_w / 2 * size * Math.cos(Math.PI / 4) + 50 - 10 * size;//45°
imagearray_center[4][0].y = imagearray_center[4][3].y + koma_h / 2 * size * Math.sin(Math.PI / 4) + 50 - 10 * size;//45°
imagearray[4][0].x -= koma_w / 2 * size * Math.cos(Math.PI / 4) - 50 + 10 * size;//45°
imagearray[4][0].y += koma_h / 2 * size * Math.sin(Math.PI / 4) - 50 + 10 * size;//45°

imagearray_center[5][0].x = imagearray_center[5][1].x - koma_w / 2 * size * Math.cos(Math.PI / 4) - 50 + 10 * size;//45°
imagearray_center[5][0].y = imagearray_center[5][1].y + koma_h / 2 * size * Math.sin(Math.PI / 4) - 50 + 10 * size;//45°
imagearray[5][0].x -= koma_w / 2 * size * Math.cos(Math.PI / 4) - 50 + 10 * size;//45°
imagearray[5][0].y += koma_h / 2 * size * Math.sin(Math.PI / 4) - 50 + 10 * size;//45°


window.addEventListener('DOMContentLoaded', () => {
    //初期座標にコマを表示させる
    for (let i = 0; i < 6; i++) {
        images[0][i].addEventListener('load', () => {
            context.drawImage(images[0][i], imagearray[0][i].x, imagearray[0][i].y, koma_w * size, koma_h * size)
        })
        switch (i) {
            case 0://1ローテーション目
                for (let j = 0; j < 6; j++) {
                    images[i][j].addEventListener('load', () => {
                        under_context.drawImage(images[i][j], imagearray[i][j].x * scale, imagearray[i][j].y * scale, koma_w * size_under, koma_h * size_under);
                    })
                }
                break;
            case 1://2ローテーション
                for (let j = 0; j < 6; j++) {
                    images[i][j].addEventListener('load', () => {
                        under_context2.drawImage(images[i][j], imagearray[i][j].x * scale, imagearray[i][j].y * scale, koma_w * size_under, koma_h * size_under);
                    })
                }
                break;
            case 2://3ローテーション目
                for (let j = 0; j < 6; j++) {
                    images[i][j].addEventListener('load', () => {
                        under_context3.drawImage(images[i][j], imagearray[i][j].x * scale, imagearray[i][j].y * scale, koma_w * size_under, koma_h * size_under);
                    })
                }
                break;
            case 3://4ローテーション
                for (let j = 0; j < 6; j++) {
                    images[i][j].addEventListener('load', () => {
                        under_context4.drawImage(images[i][j], imagearray[i][j].x * scale, imagearray[i][j].y * scale, koma_w * size_under, koma_h * size_under);
                    })
                }
                break;
            case 4://5ローテーション
                for (let j = 0; j < 6; j++) {
                    images[i][j].addEventListener('load', () => {
                        under_context5.drawImage(images[i][j], imagearray[i][j].x * scale, imagearray[i][j].y * scale, koma_w * size_under, koma_h * size_under);
                    })
                }
                break;
            case 5://6ローテーション
                for (let j = 0; j < 6; j++) {
                    images[i][j].addEventListener('load', () => {
                        under_context6.drawImage(images[i][j], imagearray[i][j].x * scale, imagearray[i][j].y * scale, koma_w * size_under, koma_h * size_under);
                    })
                }
                break;
            default:
                break;
        }
    }

    //画像読み込み終わってからソース取得する
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            images[i][j].src = srcs[i][j];
        }
    }
});


//画像を表示する
function draw(rota) {
    // canvas内を一旦クリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (var i in images) {
        let x = imagearray[rota][i].x;
        let y = imagearray[rota][i].y;
        let w = koma_w * size;
        let h = koma_h * size;

        context.drawImage(images[rota][i], x, y, w, h);
    }
}

//ドラッグ開始処理
let mousedown = function (e) {

    //ドラッグ開始時のウェブサイト上のマウスの座標
    let rect = canvas.getBoundingClientRect();
    let posX = parseInt(e.clientX) - rect.left;
    let posY = parseInt(e.clientY) - rect.top;

    //表示されているサイズと実際のキャンバスサイズの比率を求める
    let scaleWidth = canvas.clientWidth / canvas.width,
        scaleHeight = canvas.clientHeight / canvas.height;

    //調整後の座標
    let canvasX = Math.floor(posX / scaleWidth),
        canvasY = Math.floor(posY / scaleHeight);

    //コマ0（セッター）は計算しない
    for (var i = images.length - 1; i > 0; i--) {
        //コマの中心座標
        let centerX = imagearray_center[counter][i].x;
        let centerY = imagearray_center[counter][i].y;

        //コマの当たり判定処理
        if ((centerX - canvasX) * (centerX - canvasX) + (centerY - canvasY) * (centerY - canvasY) <= (koma_h / 2 * size) * (koma_h / 2 * size)) {
            dragkoma = i;//ドラッグしているコマ
            startX = centerX;//ドラッグ開始時のコマのx座標
            startY = centerY;//ドラッグ開始時のコマのy座標
            dragmode = true;//ドラッグモードにする
            break;
        }
    }

    // if (dragkoma == 0) {
    //     document.getElementById("syoukai_bun").innerHTML = "安西";
    // }
    // if (dragkoma == 1) {
    //     document.getElementById("syoukai_bun").innerHTML = "けんと";
    // }
    // if (dragkoma == 2) {
    //     document.getElementById("syoukai_bun").innerHTML = "りく";
    // }
    // if (dragkoma == 3) {
    //     document.getElementById("syoukai_bun").innerHTML = "いちろ";
    // }
    // if (dragkoma == 4) {
    //     document.getElementById("syoukai_bun").innerHTML = "けいすけ";
    // }
    // if (dragkoma == 5) {
    //     document.getElementById("syoukai_bun").innerHTML = "ひなた";
    // }
}

//ドラッグ中処理
let mousemove = function (e) {
    // ドラッグ終了位置
    let rect = canvas.getBoundingClientRect();
    let posX = parseInt(e.clientX) - rect.left;
    let posY = parseInt(e.clientY) - rect.top;

    //表示されているサイズと実際のキャンバスサイズの比率を求める
    let scaleWidth = canvas.clientWidth / canvas.width,
        scaleHeight = canvas.clientHeight / canvas.height;

    //調整後の座標
    let canvasX = Math.floor(posX / scaleWidth),
        canvasY = Math.floor(posY / scaleHeight);


    if (dragmode) {
        // canvas内を一旦クリア
        context.clearRect(0, 0, canvas.width, canvas.height);

        let x = 0;
        let y = 0;
        let w = koma_w * size;
        let h = koma_h * size;
        for (var i = 5; i >= 0; i--) {
            if (i == dragkoma) {
                //コマの座標
                x = canvasX - koma_w / 2 * size;
                y = canvasY - koma_h / 2 * size;

                //コマの動きがルールに合ってるか確認+ローテーション(counter)3~5のときはセッターを付随しているコマと一緒に動かす
                switch (counter) {
                    case 0://1ローテーション目
                        switch (dragkoma) {
                            case 1://前衛真ん中
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][2].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][3].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;

                            case 2://前衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][1].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][3].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;

                            case 3://後衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][4].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;

                            case 4://後衛真ん中
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][3].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][5].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;

                            case 5://後衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][4].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;

                            default:
                                break;
                        }
                        break;

                    case 1://2ローテーション目
                        switch (dragkoma) {
                            case 1://前衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][5].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][3].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;

                            case 2://後衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][3].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][5].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;

                            case 3://後衛真ん中
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][2].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][4].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][5].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;

                            case 4://後衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][3].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][5].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;

                            case 5://前衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][1].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][3].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;

                            default:
                                break;
                        }
                        break;

                    case 2://3ローテーション目
                        switch (dragkoma) {
                            case 1://後衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][2].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][5].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;
                            case 2://後衛真ん中
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][1].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][3].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][5].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;
                            case 3://後衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][2].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][5].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;
                            case 4://前衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][5].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][3].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;
                            case 5://前衛真ん中
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][4].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][3].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;
                            default:
                                break;
                        }
                        break;

                    case 3://4ローテーション目
                        switch (dragkoma) {
                            case 1://後衛真ん中
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][2].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][3].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][5].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;
                            case 2://後衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][1].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][3].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][5].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;
                            case 3://前衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][4].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;
                            case 4://前衛真ん中
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][5].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][3].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;
                            case 5://前衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][4].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    let tempX = imagearray[counter][0].x - imagearray[counter][5].x;
                                    let tempY = imagearray[counter][0].y - imagearray[counter][5].y;
                                    imagearray[counter][0].x = x + tempX;
                                    imagearray[counter][0].y = y + tempY;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                    //後衛の選手を超えようとした
                                } else if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    let tempX = imagearray[counter][0].x - imagearray[counter][5].x;
                                    let tempY = imagearray[counter][0].y - imagearray[counter][5].y;
                                    imagearray[counter][0].x = x + tempX;
                                    imagearray[counter][0].y = y + tempY;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                    //セッターを一緒に動かす
                                } else {
                                    let tempX = imagearray[counter][0].x - imagearray[counter][5].x;
                                    let tempY = imagearray[counter][0].y - imagearray[counter][5].y;

                                    imagearray[counter][0].x = x + tempX;
                                    imagearray[counter][0].y = y + tempY;
                                }
                                break;
                            default:
                                break;
                        }
                        break;

                    case 4://5ローテーション目
                        switch (dragkoma) {
                            case 1://後衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][5].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][3].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;
                            case 2://前衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][3].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;
                            case 3://前衛真ん中
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][2].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    let tempX = imagearray[counter][0].x - imagearray[counter][3].x;
                                    let tempY = imagearray[counter][0].y - imagearray[counter][3].y;
                                    imagearray[counter][0].x = x + tempX;
                                    imagearray[counter][0].y = y + tempY;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                    //右の選手を超えようとした
                                } else if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][4].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    let tempX = imagearray[counter][0].x - imagearray[counter][3].x;
                                    let tempY = imagearray[counter][0].y - imagearray[counter][3].y;
                                    imagearray[counter][0].x = x + tempX;
                                    imagearray[counter][0].y = y + tempY;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                    //後衛の選手を超えようとした
                                } else if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    let tempX = imagearray[counter][0].x - imagearray[counter][3].x;
                                    let tempY = imagearray[counter][0].y - imagearray[counter][3].y;
                                    imagearray[counter][0].x = x + tempX;
                                    imagearray[counter][0].y = y + tempY;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                    //セッターを一緒に動かす
                                } else {
                                    let tempX = imagearray[counter][0].x - imagearray[counter][3].x;
                                    let tempY = imagearray[counter][0].y - imagearray[counter][3].y;
                                    imagearray[counter][0].x = x + tempX;
                                    imagearray[counter][0].y = y + tempY;
                                }
                                break;
                            case 4://前衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][3].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;
                            case 5://後衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][1].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][3].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;
                            default:
                                break;
                        }
                        break;

                    case 5://6ローテーション目
                        switch (dragkoma) {
                            case 1://前衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][2].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    let tempX = imagearray[counter][0].x - imagearray[counter][1].x;
                                    let tempY = imagearray[counter][0].y - imagearray[counter][1].y;
                                    imagearray[counter][0].x = x + tempX;
                                    imagearray[counter][0].y = y + tempY;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                    //後衛の選手を超えようとした
                                } else if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    let tempX = imagearray[counter][0].x - imagearray[counter][1].x;
                                    let tempY = imagearray[counter][0].y - imagearray[counter][1].y;
                                    imagearray[counter][0].x = x + tempX;
                                    imagearray[counter][0].y = y + tempY;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                    //セッターを一緒に動かす
                                } else {
                                    let tempX = imagearray[counter][0].x - imagearray[counter][1].x;
                                    let tempY = imagearray[counter][0].y - imagearray[counter][1].y;
                                    imagearray[counter][0].x = x + tempX;
                                    imagearray[counter][0].y = y + tempY;
                                }
                                break;
                            case 2://前衛真ん中
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][3].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][1].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;
                            case 3://前衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][2].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;
                            case 4://後衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][5].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][3].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;
                            case 5://後衛真ん中
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][4].x) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][3].y) {
                                    x = startX - koma_w / 2 * size;
                                    y = startY - koma_h / 2 * size;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;
                            default:
                                break;
                        }
                }

                // ドラッグが終了した時の情報を記憶
                imagearray[counter][i].x = x;
                imagearray[counter][i].y = y;
                imagearray_center[counter][i].x = x + koma_w / 2 * size;
                imagearray_center[counter][i].y = y + koma_h / 2 * size;

            } else {
                x = imagearray[counter][i].x;
                y = imagearray[counter][i].y;
            }

            // 画像を描画
            context.drawImage(images[counter][i], x, y, w, h);
            switch (counter) {
                case 0://1ローテーション目
                    under_context.clearRect(0, 0, under_canvas.width, under_canvas.height);
                    for (let j = 5; j >= 0; j--) {
                        under_context.drawImage(images[counter][j], imagearray[counter][j].x * scale, imagearray[counter][j].y * scale, koma_w * size_under, koma_h * size_under);
                    }
                    break;
                case 1://2ローテーション目
                    under_context2.clearRect(0, 0, under_canvas2.width, under_canvas2.height);
                    for (let j = 5; j >= 0; j--) {
                        under_context2.drawImage(images[counter][j], imagearray[counter][j].x * scale, imagearray[counter][j].y * scale, koma_w * size_under, koma_h * size_under);
                    }
                    break;
                case 2://3ローテーション目
                    under_context3.clearRect(0, 0, under_canvas3.width, under_canvas3.height);
                    for (let j = 5; j >= 0; j--) {
                        under_context3.drawImage(images[counter][j], imagearray[counter][j].x * scale, imagearray[counter][j].y * scale, koma_w * size_under, koma_h * size_under);
                    }
                    break;
                case 3://4ローテーション目
                    under_context4.clearRect(0, 0, under_canvas4.width, under_canvas4.height);
                    for (let j = 5; j >= 0; j--) {
                        under_context4.drawImage(images[counter][j], imagearray[counter][j].x * scale, imagearray[counter][j].y * scale, koma_w * size_under, koma_h * size_under);
                    }
                    break;
                case 4://5ローテーション目
                    under_context5.clearRect(0, 0, under_canvas5.width, under_canvas5.height);
                    for (let j = 5; j >= 0; j--) {
                        under_context5.drawImage(images[counter][j], imagearray[counter][j].x * scale, imagearray[counter][j].y * scale, koma_w * size_under, koma_h * size_under);
                    }
                    break;
                case 5://6ローテーション目
                    under_context6.clearRect(0, 0, under_canvas6.width, under_canvas6.height);
                    for (let j = 5; j >= 0; j--) {
                        under_context6.drawImage(images[counter][j], imagearray[counter][j].x * scale, imagearray[counter][j].y * scale, koma_w * size_under, koma_h * size_under);
                    }
                    break;
                default:
                    break;
            }
            if (counter == 0) {
                under_context.clearRect(0, 0, under_canvas.width, under_canvas.height);
                for (let j = 5; j >= 0; j--) {
                    under_context.drawImage(images[0][j], imagearray[0][j].x * scale, imagearray[0][j].y * scale, koma_w * size_under, koma_h * size_under);
                }
            }
        }
    }
};


//ドラッグ終了処理
let mouseup = function (e) {
    dragmode = false;
    document.getElementById("syoukai_bun").innerHTML = "";
}

//コマ以外を押したとき
let mouseout = function (e) {
    mouseup(e);
}

canvas.addEventListener('mousedown', function (e) { mousedown(e); }, false);
canvas.addEventListener('mousemove', function (e) { mousemove(e); }, false);
canvas.addEventListener('mouseup', function (e) { mouseup(e); }, false);
canvas.addEventListener('mouseout', function (e) { mouseout(e); false });

//ローテーション
function rotation() {
    counter++;
    //6回目なら最初に戻す
    if (counter == 6) {
        counter = 0;
    }
    console.log("ローテーション", counter);
    draw(counter);
}


//登録ボタンを押したときの処理
document.getElementById("register_btn").onclick = function () {
    console.log(counter);

    counter = 0;
    i = 0;
    player_num = 1;
    while (i <= 5 && counter <= 5) {
        console.log(imagearray[counter][i]);

        let formData = new FormData();
        formData.append("rotation_counter", counter);
        formData.append("player_number", i + 1);
        formData.append("player0_x", imagearray[counter][i].x);
        formData.append("player0_y", imagearray[counter][i].y);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/PHP/sample.php");
        xhr.addEventListener("loadend", function () {
            if (xhr.status === 200) {
                if (xhr.response === "error") {
                    console.log("登録に失敗しました");
                } else {
                    console.log("データを登録しました!");
                }
            }
        });
        xhr.send(formData);

        i++;
        if (i == 6) {
            i = 0;
            counter++;
            player_num++;
        }
    }
}