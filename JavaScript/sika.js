//グローバル変数にしないために全体を関数にしている
// (function () {
//コマの座標
let imagearray_honto = [
    [
        {
            x: 660,
            y: 440,
        },
        {
            x: 840,
            y: 190,
        },
        {
            x: 490,
            y: 190,
        },
        {
            x: 90,
            y: 20,
        },
        {
            x: 190,
            y: 190,
        },
        {
            x: 340,
            y: 440,
        },
    ],
    [
        {
            x: 490,
            y: 190,
        },
        {
            x: 660,
            y: 440,
        },
        {
            x: 840,
            y: 190,
        },
        {
            x: 590,
            y: 20,
        },
        {
            x: 190,
            y: 190,
        },
        {
            x: 340,
            y: 440,
        },
    ],
    [
        {
            x: 340,
            y: 440,
        },
        {
            x: 660,
            y: 440,
        },
        {
            x: 840,
            y: 190,
        },
        {
            x: 940,
            y: 20,
        },
        {
            x: 490,
            y: 190,
        },
        {
            x: 190,
            y: 190,
        },
    ],
    [
        {
            x: 190,
            y: 190,
        },
        {
            x: 340,
            y: 440,
        },
        {
            x: 660,
            y: 440,
        },
        {
            x: 940,
            y: 290,
        },
        {
            x: 840,
            y: 190,
        },
        {
            x: 490,
            y: 190,
        },
    ],
    [
        {
            x: 490,
            y: 190,
        },
        {
            x: 190,
            y: 190,
        },
        {
            x: 340,
            y: 440,
        },
        {
            x: 390,
            y: 290,
        },
        {
            x: 660,
            y: 440,
        },
        {
            x: 840,
            y: 190,
        },
    ],
    [
        {
            x: 840,
            y: 190,
        },
        {
            x: 490,
            y: 190,
        },
        {
            x: 190,
            y: 190,
        },
        {
            x: 90,
            y: 290,
        },
        {
            x: 340,
            y: 440,
        },
        {
            x: 660,
            y: 440,
        },
    ],
];

var imagearray = [
    [
        {
            x: 730,//730
            y: 700,//700
        },
        {
            x: 900,
            y: 430,
        },
        {
            x: 570,
            y: 430,
        },
        {
            x: 180,
            y: 100,
        },
        {
            x: 250,
            y: 430,
        },
        {
            x: 400,
            y: 700,
        },
    ],
    [
        {
            x: 550,
            y: 250,
        },
        {
            x: 720,
            y: 500,
        },
        {
            x: 900,
            y: 250,
        },
        {
            x: 650,
            y: 80,
        },
        {
            x: 250,
            y: 250,
        },
        {
            x: 400,
            y: 500,
        },
    ],
    [
        {
            x: 400,
            y: 500,
        },
        {
            x: 720,
            y: 500,
        },
        {
            x: 900,
            y: 250,
        },
        {
            x: 1000,
            y: 80,
        },
        {
            x: 550,
            y: 250,
        },
        {
            x: 250,
            y: 250,
        },
    ],
    [
        {
            x: 250,
            y: 250,
        },
        {
            x: 400,
            y: 500,
        },
        {
            x: 720,
            y: 500,
        },
        {
            x: 1000,
            y: 350,
        },
        {
            x: 900,
            y: 250,
        },
        {
            x: 550,
            y: 250,
        },
    ],
    [
        {
            x: 550,
            y: 250,
        },
        {
            x: 250,
            y: 250,
        },
        {
            x: 400,
            y: 500,
        },
        {
            x: 450,
            y: 350,
        },
        {
            x: 720,
            y: 500,
        },
        {
            x: 900,
            y: 250,
        },
    ],
    [
        {
            x: 900,
            y: 250,
        },
        {
            x: 550,
            y: 250,
        },
        {
            x: 250,
            y: 250,
        },
        {
            x: 150,
            y: 350,
        },
        {
            x: 400,
            y: 500,
        },
        {
            x: 720,
            y: 500,
        },
    ],
];//arcarray

//canvasに描画する準備
const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');

//画像パス
const srcs = [
    '../Picture/nagai.png',
    '../Picture/nagai.png',
    '../Picture/nagai.png',
    '../Picture/nagai.png',
    '../Picture/nagai.png',
    '../Picture/nagai.png',
];

//画像 ローテーションするなら多次元にした方がいいかも
let images = [];
for (var i in srcs) {
    images[i] = new Image();
    images[i].src = srcs[i];
}

// let loadkomas = 1;//画像のカウント
let dragmode = true;//ドラッグモード
let dragkoma = null;//ドラッグするコマの添え字
let size = 1.5;//コマの大きさの倍率
let koma_w = 100;//コマの横幅
let koma_h = 100;//コマの高さ
let counter = 0;//ローテーションカウント用

window.addEventListener('DOMContentLoaded', () => {
    initial_draw(0);
});

//初期座標に画像を表示する
function initial_draw(rota) {
    // canvas内を一旦クリア
    context.clearRect(0, 0, canvas.width, canvas.height);
    //画像を読み込み終わってから
    for (var i in images) {
        images[i].addEventListener('load', function () {
            var x = imagearray[rota][i].x;
            var y = imagearray[rota][i].y;
            var w = koma_w * size;
            var h = koma_h * size;

            context.drawImage(images[i], x, y, w, h);
        }, false);
    }
}

//画像を表示する
function draw(rota) {
    // canvas内を一旦クリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (var i in images) {
        var x = imagearray[rota][i].x;
        var y = imagearray[rota][i].y;
        var w = koma_w * size;
        var h = koma_h * size;

        context.drawImage(images[i], x, y, w, h);
    }
}

//ドラッグ開始処理
let mousedown = function (e) {
    //ドラッグ開始時のウェブサイト上のマウスの座標
    var posX = parseInt(e.clientX) - 17 / 2;
    var posY = parseInt(e.clientY) - 181 / 2;

    //表示されているサイズと実際のキャンバスサイズの比率を求める
    var scaleWidth = canvas.clientWidth / canvas.width,
        scaleHeight = canvas.clientHeight / canvas.height;

    //調整後の座標
    var canvasX = Math.floor(posX / scaleWidth),
        canvasY = Math.floor(posY / scaleHeight);

    for (var i = images.length - 1; i >= 0; i--) {
        //コマの中心座標
        var centerX = imagearray[0][i].x + koma_w / 2 * size;
        var centerY = imagearray[0][i].y + koma_h / 2 * size;

        //コマの当たり判定処理
        if ((centerX - canvasX) * (centerX - canvasX) + (centerY - canvasY) * (centerY - canvasY) <= (koma_h / 2 * size) * (koma_h / 2 * size)) {
            dragkoma = i;
            dragmode = true;
            break;
        }
    }
}

//ドラッグ中処理
let mousemove = function (e) {
    // ドラッグ終了位置
    var posX = parseInt(e.clientX) - 17 / 2;
    var posY = parseInt(e.clientY) - 181 / 2;

    var scaleWidth = canvas.clientWidth / canvas.width,
        scaleHeight = canvas.clientHeight / canvas.height;

    var canvasX = Math.floor(posX / scaleWidth),
        canvasY = Math.floor(posY / scaleHeight);


    if (dragmode) {
        // canvas内を一旦クリア
        context.clearRect(0, 0, canvas.width, canvas.height);

        var x = 0;
        var y = 0;
        var w = koma_w * size;
        var h = koma_h * size;
        for (var i in images) {
            if (i == dragkoma) {
                //コマの座標
                x = canvasX - koma_w / 2 * size;
                y = canvasY - koma_h / 2 * size;

                // ドラッグが終了した時の情報を記憶
                imagearray[0][i].x = x;
                imagearray[0][i].y = y;
            } else {
                x = imagearray[0][i].x;
                y = imagearray[0][i].y;
            }
            // 画像を描画
            context.drawImage(images[i], x, y, w, h);
        }
    }
};

//ドラッグ終了処理
let mouseup = function (e) {
    dragmode = false;
    // console.log("imagearray", imagearray[0][0].x);
    // console.log("imagearray", imagearray[0][1].x);
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
    console.log("ローテーション");
    counter++;
    //6回目なら最初に戻す
    if (counter == 6) {
        counter = 0;
    }
    draw(counter);
}