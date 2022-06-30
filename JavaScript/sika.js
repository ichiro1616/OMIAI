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

//canvasに描画する準備
const under_canvas = document.getElementById('under_canvas');
const under_context = under_canvas.getContext('2d');


//画像パス
const srcs = [
    '../Picture/コマ_透過ながい.png',
    '../Picture/コマ_透過ながい.png',
    '../Picture/コマ_透過ながい.png',
    '../Picture/コマ_透過ながい.png',
    '../Picture/コマ_透過ながい.png',
    '../Picture/コマ_透過ながい.png',
];

//画像 ローテーションするなら多次元にした方がいいかも
let images = [];
for (var i in srcs) {
    images[i] = new Image();
    images[i].src = srcs[i];
}


let dragmode = true;//ドラッグモード
let dragkoma = null;//ドラッグするコマの添え字
let size = 2.5;//コマの大きさの倍率
let koma_w = 130;//コマの横幅
let koma_h = 100;//コマの高さ
let counter = 0;//ローテーションカウント用

window.addEventListener('DOMContentLoaded', () => {
    //初期座標にコマを表示させる
    images[0].addEventListener('load', () => {
        context.drawImage(images[0], imagearray[0][0].x, imagearray[0][0].y, koma_w * size, koma_h * size);
    })
    images[1].addEventListener('load', () => {
        context.drawImage(images[1], imagearray[0][1].x, imagearray[0][1].y, koma_w * size, koma_h * size);
    })
    images[2].addEventListener('load', () => {
        context.drawImage(images[2], imagearray[0][2].x, imagearray[0][2].y, koma_w * size, koma_h * size);
    })
    images[3].addEventListener('load', () => {
        context.drawImage(images[3], imagearray[0][3].x, imagearray[0][3].y, koma_w * size, koma_h * size);
    })
    images[4].addEventListener('load', () => {
        context.drawImage(images[4], imagearray[0][4].x, imagearray[0][4].y, koma_w * size, koma_h * size);
    })
    images[5].addEventListener('load', () => {
        context.drawImage(images[5], imagearray[0][5].x, imagearray[0][5].y, koma_w * size, koma_h * size);
    })
});

//コマの中心の座標を用意
for (var i in imagearray) {
    for (var j in imagearray[i]) {
        imagearray_center[i][j].x += koma_w / 2 * size;
        imagearray_center[i][j].y += koma_h / 2 * size;
    }
}

//画像を表示する
function draw(rota) {
    // canvas内を一旦クリア
    context.clearRect(0, 0, canvas.width, canvas.height);
    under_context.clearRect(0, 0, under_canvas.width, under_canvas.height);

    for (var i in images) {
        let x = imagearray[rota][i].x;
        let y = imagearray[rota][i].y;
        let w = koma_w * size;
        let h = koma_h * size;

        context.drawImage(images[i], x, y, w, h);
        under_context.drawImage(images[i], x, y, w, h);
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
            dragkoma = i;
            dragmode = true;
            break;
        }
    }

    if (dragkoma == 0) {
        document.getElementById("syoukai_bun").innerHTML = "安西";
    }
    if (dragkoma == 1) {
        document.getElementById("syoukai_bun").innerHTML = "けんと";
    }
    if (dragkoma == 2) {
        document.getElementById("syoukai_bun").innerHTML = "りく";
    }
    if (dragkoma == 3) {
        document.getElementById("syoukai_bun").innerHTML = "いちろ";
    }
    if (dragkoma == 4) {
        document.getElementById("syoukai_bun").innerHTML = "けいすけ";
    }
    if (dragkoma == 5) {
        document.getElementById("syoukai_bun").innerHTML = "ひなた";
    }
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
        for (var i = 0; i < images.length; i++) {
            if (i == dragkoma) {
                //コマの座標
                x = canvasX - koma_w / 2 * size;
                y = canvasY - koma_h / 2 * size;

                //ローテーション(counter)~5のときはセッターを付随しているコマと一緒に動かす
                switch (counter) {
                    case 3:
                        if (i == 5) {
                            let tempX = imagearray[counter][0].x - imagearray[counter][5].x;
                            let tempY = imagearray[counter][0].y - imagearray[counter][5].y;

                            imagearray[counter][0].x = x + tempX;
                            imagearray[counter][0].y = y + tempY;
                        }
                        break;
                    case 4:
                        if (i == 3) {
                            let tempX = imagearray[counter][0].x - imagearray[counter][3].x;
                            let tempY = imagearray[counter][0].y - imagearray[counter][3].y;

                            imagearray[counter][0].x = x + tempX;
                            imagearray[counter][0].y = y + tempY;
                        }
                        break;
                    case 5:
                        if (i == 1) {
                            let tempX = imagearray[counter][0].x - imagearray[counter][1].x;
                            let tempY = imagearray[counter][0].y - imagearray[counter][1].y;

                            imagearray[counter][0].x = x + tempX;
                            imagearray[counter][0].y = y + tempY;
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
            context.drawImage(images[i], x, y, w, h)
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