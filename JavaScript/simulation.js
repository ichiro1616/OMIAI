//コマの座標（中心基準）
let imagearray_center = [
    [
        {
            x: 50,
            y: 10,
        },
        {
            x: 500,
            y: 370,
        },
        {
            x: 840,
            y: 370,
        },
        {
            x: 690,
            y: 700,
        },
        {
            x: 310,
            y: 700,
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
            x: 840,
            y: 370,
        },
        {
            x: 690,
            y: 700,
        },
        {
            x: 500,
            y: 370,
        },
        {
            x: 310,
            y: 700,
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
            x: 840,
            y: 370,
        },
        {
            x: 690,
            y: 700,
        },
        {
            x: 310,
            y: 700,
        },
        {
            x: 160,
            y: 370,
        },
        {
            x: 500,
            y: 370,
        },
    ],
    [
        {
            x: 940,
            y: 460,
        },
        {
            x: 690,
            y: 700,
        },
        {
            x: 310,
            y: 700,
        },
        {
            x: 160,
            y: 370,
        },
        {
            x: 500,
            y: 370,
        },
        {
            x: 840,
            y: 370,
        },
    ],
    [
        {
            x: 390,
            y: 460,
        },
        {
            x: 310,
            y: 700,
        },
        {
            x: 160,
            y: 370,
        },
        {
            x: 500,
            y: 370,
        },
        {
            x: 840,
            y: 370,
        },
        {
            x: 690,
            y: 700,
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
            x: 500,
            y: 370,
        },
        {
            x: 840,
            y: 370,
        },
        {
            x: 690,
            y: 700,
        },
        {
            x: 310,
            y: 700,
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
            x: 500,
            y: 370,
        },
        {
            x: 840,
            y: 370,
        },
        {
            x: 690,
            y: 700,
        },
        {
            x: 310,
            y: 700,
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
            x: 840,
            y: 370,
        },
        {
            x: 690,
            y: 700,
        },
        {
            x: 500,
            y: 370,
        },
        {
            x: 310,
            y: 700,
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
            x: 840,
            y: 370,
        },
        {
            x: 690,
            y: 700,
        },
        {
            x: 310,
            y: 700,
        },
        {
            x: 160,
            y: 370,
        },
        {
            x: 500,
            y: 370,
        },
    ],
    [
        {
            x: 940,
            y: 460,
        },
        {
            x: 690,
            y: 700,
        },
        {
            x: 310,
            y: 700,
        },
        {
            x: 160,
            y: 370,
        },
        {
            x: 500,
            y: 370,
        },
        {
            x: 840,
            y: 370,
        },
    ],
    [
        {
            x: 390,
            y: 460,
        },
        {
            x: 310,
            y: 700,
        },
        {
            x: 160,
            y: 370,
        },
        {
            x: 500,
            y: 370,
        },
        {
            x: 840,
            y: 370,
        },
        {
            x: 690,
            y: 700,
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
            x: 500,
            y: 370,
        },
        {
            x: 840,
            y: 370,
        },
        {
            x: 690,
            y: 700,
        },
        {
            x: 310,
            y: 700,
        },
    ],
];

//canvasに描画する準備
const canvas = document.getElementById('canvas3');
const context = canvas.getContext('2d');
//under_canvasに描画する準備
const canvas_id = ["under_canvas1", "under_canvas2", "under_canvas3", "under_canvas4", "under_canvas5", "under_canvas6"];
const under_canvas = [];
const under_context = [];
for (let i = 0; i < 6; i++) {
    under_canvas[i] = document.getElementById(canvas_id[i]);
    under_context[i] = under_canvas[i].getContext('2d');
}
const button_id = ["rota0", "rota1", "rota2", "rota3", "rota4", "rota5"];

//スライダーバー
//経験年数選択バー
const SlideBar_experience = document.getElementById('input-range');
//お見合い割合変化バー
const SlideBar_subject_object = document.getElementById('subject_object');

//画像パス
const path = ['../Picture/koma/0/2-1.png', //けんすけ
    '../Picture/koma/1/front/2-2.png', '../Picture/koma/1/back/2-2.png', //るい
    '../Picture/koma/2/front/2-3.png', '../Picture/koma/2/back/2-3.png', //ひなた
    '../Picture/koma/3/front/2-4.png', '../Picture/koma/3/back/2-4.png', //けんと
    '../Picture/koma/4/front/2-5.png', '../Picture/koma/4/back/2-5.png', //りく
    '../Picture/koma/5/front/2-6.png', '../Picture/koma/5/back/2-6.png', //けいすけ
];
const rotation_images = [
    '../Picture/サイクル_1.png',
    '../Picture/サイクル_2.png',
    '../Picture/サイクル_3.png',
    '../Picture/サイクル_4.png',
    '../Picture/サイクル_5.png',
    '../Picture/サイクル_6.png',
];
const img = [[path[0], path[1], path[3], path[6], path[8], path[10]],
[path[0], path[1], path[4], path[6], path[8], path[9]],
[path[0], path[2], path[4], path[6], path[7], path[9]],
[path[0], path[2], path[4], path[5], path[7], path[9]],
[path[0], path[2], path[3], path[5], path[7], path[10]],
[path[0], path[1], path[3], path[5], path[8], path[10]]];

let message = [
    '<b>けんすけ</b><br><c>60kg　178cm<br>なぜかあだ名が「けんぴ」な男！<br>スマブラが上手いぞ!!</c>',
    '<b>るい</b><br><c>68kg　173cm<br>信頼感溢れる優しいキャプテン！<br>皆にご飯を奢ってくれるぞ!!</c>',
    '<b>ひなた</b><br><c> 63kg　169cm<br><nobr>誰も怒った姿を見たことがないお兄さん！</nobr><br>まるで仏のようだ!!</c>',
    '<b>けんと</b><br><c>76kg　176cm<br>ご飯大好き食いしん坊！<br>パワー満点のスパイクを放つぞ!!</c>',
    ' <b>りく</b><br><c>64kg　180cm<br>ゲーム大好きの高身長男！<br>ゲームばかりせずに勉強しよう!!</c>',
    '<b>けいすけ</b><br><c>80kg　165cm<br>安心感抜群の圧倒的お父さん感！<br>レシーブがもの凄く上手いぞ！</c>',
];
let player_id = ['kensuke', 'rui', 'hinata', 'kento', 'riku', 'keisuke'];

function talk_bubble() {
    document.getElementById(player_id[dragkoma]).innerHTML = message[dragkoma];
}
//画像
let images = new Array(6);//要素数6の配列imagesを作成
for (var i = 0; i < 6; i++) {
    images[i] = new Array(6).fill(0);//imagesの多次元配列を作成し0で初期化
}
for (var i = 0; i < 6; i++) {//ローテーション
    for (var j = 0; j < 6; j++) {//コマ番号
        images[i][j] = new Image();
    }
}

//グラデーション用配列
let gradation = new Array(10);
let G_gra = 120;
let A_gra = 1;
for (i = 0; i < gradation.length; i++) {
    gradation[i] = new Array(4).fill(0);
}
for (i = 0; i < gradation.length; i++) {
    for (j = 1; j < gradation[i].length; j += 2) {
        if (j == 1) {
            //Gの変化
            gradation[i][j] = G_gra;
        }
        if (j == 3) {
            //透明度の変化
            //小数誤差の調整
            gradation[i][j] = Math.floor(A_gra * 10) / 10;
        }
    }
    //変化量120から255
    G_gra += (255 - 120) / (gradation.length - 1);
    //変化量0から1
    A_gra -= 0.1;
}

let scale = under_canvas[0].width / canvas.width;//canvasとunder_canvasの比
let dragmode = false;//ドラッグモード
let dragkoma = null;//ドラッグするコマの添え字
let size = 2.0;//メイン画面のコマの大きさの倍率
let size_under = scale * size;//サブ画面のコマの大きさの倍率
let koma_w = 100;//コマの横幅
let koma_h = 100;//コマの高さ
let counter = 0;//ローテーションカウント用
let experience_years = 0;//バレーボールの経験年数　初期値0
let subject_object_level = 2;//主観的・客観的レベル　初期値2(中央)

//コマの中心の座標を用意
for (var i in imagearray) {
    for (var j in imagearray[i]) {
        imagearray_center[i][j].x += koma_w / 2 * size;
        imagearray_center[i][j].y += koma_h / 2 * size;
    }
}

//セッターの座標を修正
imagearray[3][0].x += koma_w / 2 * size * Math.cos(Math.PI / 4) - 50 + 10 * size;//45°
imagearray[3][0].y += koma_h / 2 * size * Math.sin(Math.PI / 4) - 50 + 10 * size;//45°
imagearray_center[3][0].x = imagearray[3][0].x + koma_w / 2 * size;//45°
imagearray_center[3][0].y = imagearray[3][0].y + koma_h / 2 * size;//45°

imagearray[4][0].x -= koma_w / 2 * size * Math.cos(Math.PI / 4) - 50 + 10 * size;//45°
imagearray[4][0].y += koma_h / 2 * size * Math.sin(Math.PI / 4) - 50 + 10 * size;//45°
imagearray_center[4][0].x = imagearray[4][0].x + koma_w / 2 * size;//45°
imagearray_center[4][0].y = imagearray[4][0].y + koma_h / 2 * size;//45°

imagearray[5][0].x -= koma_w / 2 * size * Math.cos(Math.PI / 4) - 50 + 10 * size;//45°
imagearray[5][0].y += koma_h / 2 * size * Math.sin(Math.PI / 4) - 50 + 10 * size;//45°
imagearray_center[5][0].x = imagearray[5][0].x + koma_w / 2 * size;//45°
imagearray_center[5][0].y = imagearray[5][0].y + koma_h / 2 * size;//45°

let subject_array = [];//主観的データ2550
let object_array = [];//客観的データ2550
//主観的のdata
let data_array_sub_0 = [];//2-3
let data_array_sub_1 = [];//2-4
let data_array_sub_2 = [];//2-5
let data_array_sub_3 = [];//2-6
let data_array_sub_4 = [];//3-4
let data_array_sub_5 = [];//3-5
let data_array_sub_6 = [];//3-6
let data_array_sub_7 = [];//4-5
let data_array_sub_8 = [];//4-6
let data_array_sub_9 = [];//5-6
//客観的のdata
let data_array_ob_0 = [];//2-3
let data_array_ob_1 = [];//2-4
let data_array_ob_2 = [];//2-5
let data_array_ob_3 = [];//2-6
let data_array_ob_4 = [];//3-4
let data_array_ob_5 = [];//3-5
let data_array_ob_6 = [];//3-6
let data_array_ob_7 = [];//4-5
let data_array_ob_8 = [];//4-6
let data_array_ob_9 = [];//5-6


window.addEventListener('DOMContentLoaded', () => {
    simulation_area.style.display = 'none';//配置シミュレーションを非表示
    under.style.display = 'none';
    document.getElementById("experience").className = "modalBg modalBgOpen"; //モーダルディスプレイで経験年数の質問を表示
    experience_years = 2; //経験年数の初期値は2

    SlideBar_experience.addEventListener('change', () => {
        experience_years = SlideBar_experience.value;
    })

    SlideBar_subject_object.addEventListener('change', () => {
        subject_object_level = SlideBar_subject_object.value;
        area(counter);
    })

    //初期座標にコマを表示させる
    for (let i = 0; i < 6; i++) {
        images[0][i].addEventListener('load', () => {
            context.drawImage(images[0][i], imagearray[0][i].x, imagearray[0][i].y, koma_w * size, koma_h * size)
        })
        for (let j = 0; j < 6; j++) {
            images[i][j].addEventListener('load', () => {
                under_context[i].drawImage(images[i][j], imagearray[i][j].x * scale, imagearray[i][j].y * scale, koma_w * size_under, koma_h * size_under);
            })
        }
    };

    //画像の読み込みが終わってからソース取得する
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            images[i][j].src = img[i][j];
        }
    }

    //lr.coef_の値取得、テストデータ作成、特徴量として変換、
    let formData_area = new FormData();
    let xhr_area = new XMLHttpRequest();
    xhr_area.open("POST", "../PHP/simulation.php");
    xhr_area.addEventListener("loadend", function () {
        if (xhr_area.status === 200) {
            let data = JSON.parse(xhr_area.response);
            for (i = 0; i < data.length; i++) {
                if (data[i].type == 0) {
                    //主観的
                    subject_array.push(data[i]);
                } else if (data[i].type == 1) {
                    //客観的
                    object_array.push(data[i]);
                }
            }
            //主観的データをペアごとに分ける各255
            for (i = 0; i < subject_array.length; i++) {
                switch (subject_array[i].left_player * subject_array[i].right_player) {
                    case 6://2-3
                        data_array_sub_0.push(subject_array[i]);
                        break;
                    case 8://2-4
                        data_array_sub_1.push(subject_array[i]);
                        break;
                    case 10://2-5
                        data_array_sub_2.push(subject_array[i]);
                        break;
                    case 12://2-6 3-4
                        if (subject_array[i].left_player == 2 || subject_array[i].right_player == 2) {
                            data_array_sub_3.push(subject_array[i]);
                        } else {
                            data_array_sub_4.push(subject_array[i]);
                        }
                        break;
                    case 15://3-5
                        data_array_sub_5.push(subject_array[i]);
                        break;
                    case 18://3-6
                        data_array_sub_6.push(subject_array[i]);
                        break;
                    case 20://4-5
                        data_array_sub_7.push(subject_array[i]);
                        break;
                    case 24://4-6
                        data_array_sub_8.push(subject_array[i]);
                        break;
                    case 30://5-6
                        data_array_sub_9.push(subject_array[i]);
                        break;
                }
            }
            //客観的データをペアごとに分ける各255
            for (i = 0; i < object_array.length; i++) {
                switch (object_array[i].left_player * object_array[i].right_player) {
                    case 6://2-3
                        data_array_ob_0.push(object_array[i]);
                        break;
                    case 8://2-4
                        data_array_ob_1.push(object_array[i]);
                        break;
                    case 10://2-5
                        data_array_ob_2.push(object_array[i]);
                        break;
                    case 12://2-6 3-4
                        if (object_array[i].left_player == 2 || object_array[i].right_player == 2) {
                            data_array_ob_3.push(object_array[i]);
                        } else {
                            data_array_ob_4.push(object_array[i]);
                        }
                        break;
                    case 15://3-5
                        data_array_ob_5.push(object_array[i]);
                        break;
                    case 18://3-6
                        data_array_ob_6.push(object_array[i]);
                        break;
                    case 20://4-5
                        data_array_ob_7.push(object_array[i]);
                        break;
                    case 24://4-6
                        data_array_ob_8.push(object_array[i]);
                        break;
                    case 30://5-6
                        data_array_ob_9.push(object_array[i]);
                        break;
                }
            }
            //お見合い範囲初期表示
            for (i = 0; i < 6; i++) {
                area(i);
            }
        }
    });
    xhr_area.send(formData_area);
});

//経験年数選択のポップアップを非表示
function simulation() {
    simulation_area.style.display = "block";
    under.style.display = "block";
    experience.style.display = "none";
    kensuke.style.display = "block";//けんすけ
    rui.style.display = "none";//るい
    hinata.style.display = "none";//ひなた
    kento.style.display = "none";//けんと
    riku.style.display = "none";//りく
    keisuke.style.display = "none";//けいすけ
    document.getElementById("face_img").src = img[0][0];
}

//画像を表示する
function draw(rota) {
    // canvas内を一旦クリア
    context.clearRect(0, 0, canvas.width, canvas.height);
    // コマを表示
    for (var i in images) {
        let x = imagearray[rota][i].x;
        let y = imagearray[rota][i].y;
        let w = koma_w * size;
        let h = koma_h * size;
        context.drawImage(images[rota][i], x, y, w, h);
    }
}

//ドラッグ開始処理
let mousedown = function (e, type) {
    //タッチのデフォルト処理を禁止
    e.preventDefault();
    //ウェブサイト上のcanvasの座標
    let rect = canvas.getBoundingClientRect();
    let posX;
    let posY;
    //PCかタブレットに合わせて座標を取得
    if (type == 0) {
        posX = parseInt(e.clientX) - rect.left;
        posY = parseInt(e.clientY) - rect.top;
    } else if (type == 1) {
        posX = parseInt(e.targetTouches[0].clientX) - rect.left;
        posY = parseInt(e.targetTouches[0].clientY) - rect.top;
    }
    //表示されているサイズと実際のキャンバスサイズの比率を求める
    let scaleWidth = canvas.clientWidth / canvas.width,
        scaleHeight = canvas.clientHeight / canvas.height;
    //調整後の座標
    let canvasX = Math.floor(posX / scaleWidth),
        canvasY = Math.floor(posY / scaleHeight);
    //コマ0（セッター）は計算しない
    for (var i = images.length - 1; i >= 0; i--) {
        //コマの中心座標
        let centerX = imagearray_center[counter][i].x;
        let centerY = imagearray_center[counter][i].y;
        let name = [kensuke, rui, hinata, kento, riku, keisuke];
        //コマの当たり判定処理
        if ((centerX - canvasX) * (centerX - canvasX) + (centerY - canvasY) * (centerY - canvasY) <= (koma_h / 2 * size) * (koma_h / 2 * size)) {
            //ドラッグしているコマ
            dragkoma = i;
            //ドラッグモードにする
            dragmode = true;
            for (let i = 0; i < 6; i++) {
                if (dragkoma == i) {
                    document.getElementById("face_img").src = img[counter][dragkoma];
                    let new_name = name;
                    name[dragkoma].style.display = "block";
                    new_name = name.filter(n => n !== name[dragkoma]);
                    for (let j = 0; j < new_name.length; j++) {
                        new_name[j].style.display = "none";
                    }
                    if (dragkoma == 0) {
                        dragmode = false;
                    }
                }
            }
        }
    }
}

//ドラッグ中処理
let mousemove = function (e, type) {
    //タッチのデフォルト処理を禁止
    e.preventDefault();
    //ウェブサイト上のcanvasの座標
    let rect = canvas.getBoundingClientRect();
    let posX;
    let posY;
    //PCかタブレットに合わせて座標を取得
    if (type == 0) {
        posX = parseInt(e.clientX) - rect.left;
        posY = parseInt(e.clientY) - rect.top;
    } else if (type == 1) {
        posX = parseInt(e.targetTouches[0].clientX) - rect.left;
        posY = parseInt(e.targetTouches[0].clientY) - rect.top;
    }
    //表示されているサイズと実際のキャンバスサイズの比率を求める
    let scaleWidth = canvas.clientWidth / canvas.width,
        scaleHeight = canvas.clientHeight / canvas.height;
    //調整後の座標
    let canvasX = Math.floor(posX / scaleWidth),
        canvasY = Math.floor(posY / scaleHeight);
    //canvas外にドラッグした場合
    if (canvasX >= 1100 || canvasX <= 100 || canvasY >= 1100 || canvasY <= 100) {
        mouseup(e);
        document.getElementById(player_id[dragkoma]).innerHTML = '<p id = "attention_2"><nobr>コートの外には出られないよ！</nobr></p>'
        setTimeout(talk_bubble, 1000)
    }
    if (dragmode) {
        // canvas内を一旦クリア
        context.clearRect(0, 0, canvas.width, canvas.height);
        under_context[counter].clearRect(0, 0, under_canvas[counter].width, under_canvas[counter].height);
        let x = 0;
        let y = 0;
        let w = koma_w * size;
        let h = koma_h * size;
        //コマが重ならないように
        for (i = 0; i < 6; i++) {
            if (i != dragkoma) {
                if (Math.abs(canvasX - imagearray_center[counter][i].x) <= koma_w / 2 * size && Math.abs(canvasY - imagearray_center[counter][i].y) <= koma_h / 2 * size) {
                    mouseup(e);
                }
            }
        }
        //コマの制約
        for (var i = 5; i >= 0; i--) {
            if (i == dragkoma) {
                //コマの座標
                x = canvasX - koma_w / 2 * size;
                y = canvasY - koma_h / 2 * size;
                let min;
                //右の選手を超えた場合
                function right_const(dragkoma, counter, right_id) {
                    if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][right_id].x) {
                        x = imagearray[counter][right_id].x - 10;
                        mouseup(e);
                        document.getElementById(player_id[dragkoma]).innerHTML = '<p id = "attention"><nobr>右の選手は超えられないよ！</nobr></p>'
                        setTimeout(talk_bubble, 1000)
                    }
                }
                //左の選手を超えた場合
                function left_const(dragkoma, counter, left_id) {
                    if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][left_id].x) {
                        x = imagearray[counter][left_id].x + 10;
                        mouseup(e);
                        document.getElementById(player_id[dragkoma]).innerHTML = '<p id = "attention"><nobr>左の選手は超えられないよ！</nobr></p>'
                        setTimeout(talk_bubble, 1000)
                    }
                }
                //前衛の選手を超えた場合
                function van_const(dragkoma, counter, van1_id, van2_id, van3_id) {
                    if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][van1_id].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][van2_id].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][van3_id].y) {
                        if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][van1_id].y) {
                            min = imagearray[counter][van1_id].y;
                        } else if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][van2_id].y) {
                            min = imagearray[counter][van2_id].y;
                        } else {
                            min = imagearray[counter][van3_id].y;
                        }
                        y = min + 10;
                        mouseup(e);
                        document.getElementById(player_id[dragkoma]).innerHTML = '<p id = "attention_2"><nobr>前衛の選手は超えられないよ！</nobr></p>'
                        setTimeout(talk_bubble, 1000)
                    }
                }
                //後衛の選手を超えた場合
                function rear_const(dragkoma, counter, rear1_id, rear2_id, rear3_id) {
                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][rear1_id].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][rear2_id].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][rear3_id].y) {
                        if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][rear1_id].y) {
                            min = imagearray[counter][rear1_id].y;
                        } else if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][rear2_id].y) {
                            min = imagearray[counter][rear2_id].y;
                        } else {
                            min = imagearray[counter][rear3_id].y;
                        }
                        y = min - 10;
                        mouseup(e);
                        document.getElementById(player_id[dragkoma]).innerHTML = '<p id = "attention_2"><nobr>後衛の選手は超えられないよ！</nobr></p>'
                        setTimeout(talk_bubble, 1000)
                    }
                }
                //後衛の選手を超えた場合
                function srear_const(dragkoma, counter, rear1_id, rear2_id) {
                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][rear1_id].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][rear2_id].y) {
                        if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][rear1_id].y) {
                            min = imagearray[counter][rear1_id].y;
                        } else {
                            min = imagearray[counter][rear2_id].y;
                        }
                        y = min - 10;
                        mouseup(e);
                        document.getElementById(player_id[dragkoma]).innerHTML = '<p id = "attention_2"><nobr>後衛の選手は超えられないよ！</nobr></p>'
                        setTimeout(talk_bubble, 1000)
                    }
                }
                //セッターの座標計算
                function setter(type, value, rear_id) {
                    if (type == 0) {
                        x = value;
                    } else if (type == 1) {
                        y = value;
                    }
                    let tempX = imagearray[counter][0].x - imagearray[counter][rear_id].x;
                    let tempY = imagearray[counter][0].y - imagearray[counter][rear_id].y;
                    imagearray[counter][0].x = x + tempX;
                    imagearray[counter][0].y = y + tempY;
                    imagearray_center[counter][0].x = imagearray[counter][0].x + koma_w / 2 * size;
                    imagearray_center[counter][0].y = imagearray[counter][0].y + koma_h / 2 * size;
                }
                //コマの動きがルールに合ってるか確認し、ローテーション(counter)3~5のときはセッターを付随しているコマと一緒に動かす
                switch (counter) {
                    case 0://1ローテーション目
                        switch (dragkoma) {
                            case 1://前衛真ん中
                                right_const(dragkoma, counter, 2)
                                left_const(dragkoma, counter, 0)
                                rear_const(dragkoma, counter, 3, 4, 5)
                                break;
                            case 2://前衛右
                                left_const(dragkoma, counter, 1)
                                rear_const(dragkoma, counter, 3, 4, 5)
                                break;
                            case 3://後衛右
                                left_const(dragkoma, counter, 4)
                                van_const(dragkoma, counter, 0, 1, 2)
                                break;
                            case 4://後衛真ん中
                                right_const(dragkoma, counter, 3)
                                left_const(dragkoma, counter, 5)
                                van_const(dragkoma, counter, 0, 1, 2)
                                break;
                            case 5://後衛左
                                right_const(dragkoma, counter, 4)
                                van_const(dragkoma, counter, 0, 1, 2)
                                break;
                            default:
                                break;
                        }
                        break;
                    case 1://2ローテーション目
                        switch (dragkoma) {
                            case 1://前衛右
                                left_const(dragkoma, counter, 0)
                                rear_const(dragkoma, counter, 2, 3, 4)
                                break;
                            case 2://後衛右
                                left_const(dragkoma, counter, 3)
                                van_const(dragkoma, counter, 0, 1, 5)
                                break;
                            case 3://後衛真ん中
                                right_const(dragkoma, counter, 2)
                                left_const(dragkoma, counter, 4)
                                van_const(dragkoma, counter, 0, 1, 5)
                                break;
                            case 4://後衛左
                                right_const(dragkoma, counter, 3)
                                van_const(dragkoma, counter, 0, 1, 5)
                                break;
                            case 5://前衛左
                                right_const(dragkoma, counter, 0)
                                rear_const(dragkoma, counter, 2, 3, 4)
                                break;
                            default:
                                break;
                        }
                        break;
                    case 2://3ローテーション目
                        switch (dragkoma) {
                            case 1://後衛右
                                left_const(dragkoma, counter, 2)
                                van_const(dragkoma, counter, 0, 4, 5)
                                break;
                            case 2://後衛真ん中
                                right_const(dragkoma, counter, 1)
                                left_const(dragkoma, counter, 3)
                                van_const(dragkoma, counter, 0, 4, 5)
                                break;
                            case 3://後衛左
                                right_const(dragkoma, counter, 2)
                                van_const(dragkoma, counter, 0, 4, 5)
                                break;
                            case 4://前衛左
                                right_const(dragkoma, counter, 5)
                                rear_const(dragkoma, counter, 1, 2, 3)
                                break;
                            case 5://前衛真ん中
                                left_const(dragkoma, counter, 4)
                                right_const(dragkoma, counter, 0)
                                rear_const(dragkoma, counter, 1, 2, 3)
                                break;
                            default:
                                break;
                        }
                        break;
                    case 3://4ローテーション目
                        switch (dragkoma) {
                            case 1://後衛真ん中
                                left_const(dragkoma, counter, 2)
                                right_const(dragkoma, counter, 0)
                                van_const(dragkoma, counter, 3, 4, 5)
                                break;
                            case 2://後衛左
                                right_const(dragkoma, counter, 1)
                                van_const(dragkoma, counter, 3, 4, 5)
                                break;
                            case 3://前衛左
                                right_const(dragkoma, counter, 4)
                                srear_const(dragkoma, counter, 1, 2)
                                break;
                            case 4://前衛真ん中
                                right_const(dragkoma, counter, 5)
                                left_const(dragkoma, counter, 3)
                                srear_const(dragkoma, counter, 1, 2,)
                                break;
                            case 5://前衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][4].x) {
                                    x = imagearray[counter][4].x + 10;
                                    setter(0, x, dragkoma);
                                    mouseup(e);
                                    document.getElementById(player_id[dragkoma]).innerHTML = '<p id = "attention"><nobr>左の選手は超えられないよ！</nobr></p>'
                                    setTimeout(talk_bubble, 1000)
                                    //セッターが左の選手を超えた
                                } else if (imagearray_center[counter][dragkoma].x + (imagearray_center[counter][0].x - imagearray_center[counter][dragkoma].x) < imagearray_center[counter][1].x) {
                                    x = imagearray[counter][1].x - (imagearray_center[counter][0].x - imagearray_center[counter][dragkoma].x) + 10;
                                    setter(0, x, dragkoma)
                                    mouseup(e);
                                    //後衛の選手を超えようとした
                                } else if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else {
                                        min = imagearray[counter][2].y;
                                    }
                                    y = min - 10;
                                    setter(1, y, dragkoma);
                                    mouseup(e);
                                    document.getElementById(player_id[dragkoma]).innerHTML = '<p id = "attention_2"><nobr>後衛の選手は超えられないよ！</nobr></p>'
                                    setTimeout(talk_bubble, 1000)
                                    //セッターを一緒に動かす
                                } else {
                                    setter(2, 0, dragkoma);
                                }
                                break;
                            default:
                                break;
                        }
                        break;
                    case 4://5ローテーション目
                        switch (dragkoma) {
                            case 1://後衛左
                                right_const(dragkoma, counter, 0)
                                van_const(dragkoma, counter, 2, 3, 4)
                                break;
                            case 2://前衛左
                                right_const(dragkoma, counter, 3)
                                srear_const(dragkoma, counter, 1, 5)
                                break;
                            case 3://前衛真ん中
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][2].x) {
                                    x = imagearray[counter][2].x + 10;
                                    setter(0, x, dragkoma);
                                    mouseup(e);
                                    document.getElementById(player_id[dragkoma]).innerHTML = '<p id = "attention"><nobr>左の選手は超えられないよ！</nobr></p>'
                                    setTimeout(talk_bubble, 1000)
                                    //セッターが左の選手を超えた
                                } else if (imagearray_center[counter][dragkoma].x - (imagearray_center[counter][dragkoma].x - imagearray_center[counter][0].x) < imagearray_center[counter][1].x) {
                                    x = imagearray[counter][1].x + (imagearray_center[counter][dragkoma].x - imagearray_center[counter][0].x) + 10;
                                    setter(0, x, dragkoma);
                                    mouseup(e);
                                    //右の選手を超えようとした
                                } else if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][4].x) {
                                    x = imagearray[counter][4].x - 10;
                                    setter(0, x, dragkoma);
                                    mouseup(e);
                                    document.getElementById(player_id[dragkoma]).innerHTML = '<p id = "attention"><nobr>右の選手は超えられないよ！</nobr></p>'
                                    setTimeout(talk_bubble, 1000)
                                    //セッターが右の選手を超えた
                                } else if (imagearray_center[counter][dragkoma].x - (imagearray_center[counter][dragkoma].x - imagearray_center[counter][0].x) > imagearray_center[counter][5].x) {
                                    x = imagearray[counter][5].x + (imagearray_center[counter][dragkoma].x - imagearray_center[counter][0].x) - 10;
                                    setter(0, x, dragkoma);
                                    mouseup(e);
                                    //後衛の選手を超えようとした
                                } else if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min - 10;
                                    setter(1, y, dragkoma);
                                    mouseup(e);
                                    document.getElementById(player_id[dragkoma]).innerHTML = '<p id = "attention_2"><nobr>後衛の選手は超えられないよ！</nobr></p>'
                                    setTimeout(talk_bubble, 1000)
                                    //セッターを一緒に動かす
                                } else {
                                    setter(2, 0, dragkoma);
                                }
                                break;
                            case 4://前衛右
                                left_const(dragkoma, counter, 3)
                                srear_const(dragkoma, counter, 1, 5)
                                break;
                            case 5://後衛右
                                left_const(dragkoma, counter, 0)
                                van_const(dragkoma, counter, 2, 3, 4)
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
                                    x = imagearray[counter][2].x - 10;
                                    setter(0, x, dragkoma);
                                    mouseup(e);
                                    document.getElementById(player_id[dragkoma]).innerHTML = '<p id = "attention"><nobr>右の選手は超えられないよ！</nobr></p>'
                                    setTimeout(talk_bubble, 1000)
                                    //セッターが右の選手を超えた
                                } else if (imagearray_center[counter][dragkoma].x - (imagearray_center[counter][dragkoma].x - imagearray_center[counter][0].x) > imagearray_center[counter][5].x) {
                                    x = imagearray[counter][5].x + (imagearray_center[counter][dragkoma].x - imagearray_center[counter][0].x) - 10;
                                    setter(0, x, dragkoma);
                                    mouseup(e);
                                    //後衛の選手を超えようとした
                                } else if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y) {
                                        min = imagearray[counter][4].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min - 10;
                                    setter(1, y, dragkoma);
                                    mouseup(e);
                                    document.getElementById(player_id[dragkoma]).innerHTML = '<p id = "attention_2"><nobr>後衛の選手は超えられないよ！</nobr></p>'
                                    setTimeout(talk_bubble, 1000)
                                    //セッターを一緒に動かす
                                } else {
                                    setter(2, 0, dragkoma);
                                }
                                break;
                            case 2://前衛真ん中
                                right_const(dragkoma, counter, 3)
                                left_const(dragkoma, counter, 1)
                                srear_const(dragkoma, counter, 4, 5)
                                break;
                            case 3://前衛右
                                left_const(dragkoma, counter, 2)
                                srear_const(dragkoma, counter, 4, 5)
                                break;
                            case 4://後衛右
                                left_const(dragkoma, counter, 5)
                                van_const(dragkoma, counter, 1, 2, 3)
                                break;
                            case 5://後衛真ん中
                                right_const(dragkoma, counter, 4)
                                left_const(dragkoma, counter, 0)
                                van_const(dragkoma, counter, 1, 2, 3)
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
            under_context[counter].drawImage(images[counter][i], imagearray[counter][i].x * scale, imagearray[counter][i].y * scale, koma_w * size_under, koma_h * size_under);
        }
    }
};

//ドラッグ終了処理
let mouseup = function (e) {
    if (dragmode) {
        area(counter);
    }
    dragmode = false;
}

//コマ以外を押したとき
let mouseout = function (e) {
    mouseup(e);
}

canvas.addEventListener('mousedown', function (e) { mousedown(e, 0); }, false);
canvas.addEventListener('mousemove', function (e) { mousemove(e, 0); }, false);
canvas.addEventListener('mouseup', function (e) { mouseup(e); }, false);
canvas.addEventListener('mouseout', function (e) { mouseout(e); false });
canvas.addEventListener('touchstart', function (e) { mousedown(e, 1); }, false);
canvas.addEventListener('touchmove', function (e) { mousemove(e, 1); }, false);
canvas.addEventListener('touchend', function (e) { mouseup(e); }, false);
canvas.addEventListener('touchcancel', function (e) { mouseout(e); false });

//ローテーション
function rotation(value) {
    if (value == -1) {
        counter++;
    } else {
        counter = value;
    }
    //6回目なら最初に戻す
    if (counter == 6) {
        counter = 0;
    }
    document.getElementById('rotation_image').src = rotation_images[counter];
    draw(counter);
    // under_context3[counter].clearRect(0, 0, under_canvas3[counter].width, under_canvas3[counter].height);
    context_omiai.clearRect(0, 0, canvas_omiai.width, canvas_omiai.height);
    area(counter);
}

const canvas_omiai = document.getElementById('canvas1');//お見合い範囲用
const context_omiai = canvas_omiai.getContext('2d');

//under_canvasに描画する準備
let omi_canvas_id = ["under_canvas1-3", "under_canvas2-3", "under_canvas3-3", "under_canvas4-3", "under_canvas5-3", "under_canvas6-3"];
const under_canvas3 = [];
const under_context3 = [];
for (let i = 0; i < 6; i++) {
    under_canvas3[i] = document.getElementById(omi_canvas_id[i]);
    under_context3[i] = under_canvas3[i].getContext('2d');
}

let originX = 76.1;//コート原点左下）x
let originY = 1124.3;//コート原点（左下）y
let endY = 76.1;//コート上端y
let endX = 1124.3;//コート右端x
let pixel_sizeX = (endX - originX) / 46;//1ドットの大きさ（単位[m]）　横幅
let pixel_sizeY = (originY - endY) / 46;//1ドットの大きさ（単位[m])　縦幅
originY = originY - pixel_sizeY;//1ドットの大きさ分引く
endX = endX - pixel_sizeX;//1ドットの大きさ分引く
let overlap = 3;

//お見合い範囲表示関数
function omiai(judge_area, rota) {
    // canvas4内を一旦クリア
    context_omiai.clearRect(0, 0, canvas_omiai.width, canvas_omiai.height);
    let k_sum = 0;
    let percentage = 0;
    //お見合い範囲表示
    for (let i = 0; i < 46; i++) {//x
        for (let j = 0; j < 46; j++) {//y
            let judge_index = 10 - Math.round(judge_area[k_sum].judge);
            if (judge_index != 10) {
                let gra_g = gradation[judge_index][1];
                let gra_a = gradation[judge_index][3];
                context_omiai.globalAlpha = gra_a;
                context_omiai.fillStyle = 'rgb(0,' + gra_g + ',0)';
                context_omiai.fillRect(originX + i * pixel_sizeX, originY - j * pixel_sizeY, pixel_sizeX, pixel_sizeY);//塗る範囲(x,y,塗る幅,塗る高さ)
                percentage += gra_a;
            }
            k_sum++;
        }
    }

    // under_canvas
    let ad = under_canvas3[0].width / canvas_omiai.width;
    let oriX = 76.1 * ad;
    let oriY = 1124.3 * ad;
    let enY = 76.1 * ad;
    let enX = 1124.3 * ad;
    let pisiX = (enX - oriX) / 46;
    let pisiY = (oriY - enY) / 46;
    oriY = oriY - pisiY;
    enX = enX - pisiX;

    let tem = 0;
    under_context3[rota].clearRect(0, 0, under_canvas3[rota].width, under_canvas3[rota].height);
    for (j = 0; j < 46; j++) {
        for (k = 0; k < 46; k++) {
            let judge_index = 10 - Math.round(judge_area[tem].judge);
            if (judge_index != 10) {
                let gra_g = gradation[judge_index][1];
                let gra_a = gradation[judge_index][3];
                under_context3[rota].globalAlpha = gra_a;
                under_context3[rota].fillStyle = 'rgb(0,' + gra_g + ',0)';
                under_context3[rota].fillRect(oriX + j * pisiX, oriY - k * pisiY, pisiX, pisiY);//塗る範囲(x,y,塗る幅,塗る高さ)
            }
            tem++;
        }
    }
    return percentage;
}

//お見合い範囲関数
function area(rota) {
    //主観的お見合い範囲
    let judge_color_sub_0 = calculation(data_array_sub_0);
    let judge_color_sub_1 = calculation(data_array_sub_1);
    let judge_color_sub_2 = calculation(data_array_sub_2);
    let judge_color_sub_3 = calculation(data_array_sub_3);
    let judge_color_sub_4 = calculation(data_array_sub_4);
    let judge_color_sub_5 = calculation(data_array_sub_5);
    let judge_color_sub_6 = calculation(data_array_sub_6);
    let judge_color_sub_7 = calculation(data_array_sub_7);
    let judge_color_sub_8 = calculation(data_array_sub_8);
    let judge_color_sub_9 = calculation(data_array_sub_9);

    //客観的お見合い範囲
    let judge_color_ob_0 = calculation(data_array_ob_0);
    let judge_color_ob_1 = calculation(data_array_ob_1);
    let judge_color_ob_2 = calculation(data_array_ob_2);
    let judge_color_ob_3 = calculation(data_array_ob_3);
    let judge_color_ob_4 = calculation(data_array_ob_4);
    let judge_color_ob_5 = calculation(data_array_ob_5);
    let judge_color_ob_6 = calculation(data_array_ob_6);
    let judge_color_ob_7 = calculation(data_array_ob_7);
    let judge_color_ob_8 = calculation(data_array_ob_8);
    let judge_color_ob_9 = calculation(data_array_ob_9);

    //10パターンの重なってるところ 10+結果用の+1
    let judge_color_sub = color_sub(judge_color_sub_0, judge_color_sub_1, judge_color_sub_2, judge_color_sub_3, judge_color_sub_4, judge_color_sub_5, judge_color_sub_6, judge_color_sub_7, judge_color_sub_8, judge_color_sub_9, judge_color_sub_0);
    let judge_color_ob = color_sub(judge_color_ob_0, judge_color_ob_1, judge_color_ob_2, judge_color_ob_3, judge_color_ob_4, judge_color_ob_5, judge_color_ob_6, judge_color_ob_7, judge_color_ob_8, judge_color_ob_9, judge_color_ob_0);

    //主観的・客観的で割合変化 judge_color_sub, judge_color_ob, subject_object_level
    let judge_color_merge = merge(judge_color_sub, judge_color_ob, subject_object_level);

    //お見合い範囲judge_colorを渡す
    let area_percentage = omiai(judge_color_merge, rota);
    area_percentage = area_percentage / 2116 * 100;
    area_percentage = area_percentage.toFixed(1);
    area_percentage = String(area_percentage);
    area_percentage = area_percentage + '%';
    document.getElementById('area_percentage').innerHTML = area_percentage;
}

//judgeのアナログ値を足し合わせる
function color_sub(j0, j1, j2, j3, j4, j5, j6, j7, j8, j9, judge_sum) {
    for (i = 0; i < j0.length; i++) {
        judge_sum[i].judge = j0[i].judge + j1[i].judge + j2[i].judge + j3[i].judge + j4[i].judge + j5[i].judge + j6[i].judge + j7[i].judge + j8[i].judge + j9[i].judge;
    }
    return judge_sum;
}

//お見合い範囲割合変化
function merge(sub, ob, level) {
    let sum_judge = sub;
    //主観的
    if (level == 0) {
        sum_judge = sub;
    }
    //普通
    else if (level == 2) {
        for (i = 0; i < sub.length; i++) {
            sum_judge[i].judge = (sub[i].judge + ob[i].judge) / 2;
        }
    }
    //客観的
    else if (level == 4) {
        sum_judge = ob;
    }
    return sum_judge;
}

//お見合い範囲計算
function calculation(data) {
    let color_array = [];
    let test_data = [];
    let judge_color = [];
    let color = ["blue", "red", "green"];
    for (i = 0; i < 3; i++) {
        color_array_data = [];
        for (j = 0; j < data.length; j++) {
            if (data[j]["color"] == color[i]) {
                color_array_data.push(data[j]["data"]);
            }
        }
        color_array.push(color_array_data);
    }
    for (i = 0; i < color_array.length; i++) {
        for (j = 0; j < color_array[i].length; j++) {
            color_array[i][j] = Number(color_array[i][j]);
        }
    }

    //左の選手
    let player1_x = imagearray_center[counter][data[0].left_player - 1].x / (1200 / 9);
    let player1_y = imagearray_center[counter][data[0].left_player - 1].y / (1200 / 9) - 9;
    player1_y = Math.abs(player1_y);
    //右の選手
    let player2_x = imagearray_center[counter][data[0].right_player - 1].x / (1200 / 9);
    let player2_y = imagearray_center[counter][data[0].right_player - 1].y / (1200 / 9) - 9;
    player2_y = Math.abs(player2_y);

    let reverce = 0;
    if (player1_x > player2_x) {
        // idでの条件を描く
        player1_x = 9 - player1_x;
        player2_x = 9 - player2_x;
        reverce = 1;
    }
    for (i = 0; i < 9.2; i += 0.2) {
        for (j = 0; j < 9.2; j += 0.2) {
            let data_tmp = {};
            data_tmp.players_sabun_x = player1_x - player2_x;
            data_tmp.players_sabun_y = player1_y - player2_y;
            data_tmp.player1_ball_sabun_x = player1_x - i;
            data_tmp.player1_ball_sabun_y = player1_y - j;
            data_tmp.player2_ball_sabun_x = player2_x - i;
            data_tmp.player2_ball_sabun_y = player2_y - j;
            test_data.push(data_tmp);

            let data_view = {};
            data_view.ball_x = i;
            data_view.ball_y = j;
            data_view.judge = 100;
            judge_color.push(data_view);
        }
    }

    // 標準化 meanとstdに代入するdataのindex番号はdataに入っている量によって変えないといけない
    let mean = [
        data[0]["mean_players_sabun_x"],
        data[0]["mean_players_sabun_y"],
        data[0]["mean_player1_ball_sabun_x"],
        data[0]["mean_player1_ball_sabun_y"],
        data[0]["mean_player2_ball_sabun_x"],
        data[0]["mean_player2_ball_sabun_y"],
    ];
    let std = [
        data[0]["std_players_sabun_x"],
        data[0]["std_players_sabun_y"],
        data[0]["std_player1_ball_sabun_x"],
        data[0]["std_player1_ball_sabun_y"],
        data[0]["std_player2_ball_sabun_x"],
        data[0]["std_player2_ball_sabun_y"],
    ];

    for (i = 0; i < test_data.length; i++) {
        test_data[i].players_sabun_x = (test_data[i].players_sabun_x - mean[0]) / std[0];
        test_data[i].players_sabun_y = (test_data[i].players_sabun_y - mean[1]) / std[1];
        test_data[i].player1_ball_sabun_x = (test_data[i].player1_ball_sabun_x - mean[2]) / std[2];
        test_data[i].player1_ball_sabun_y = (test_data[i].player1_ball_sabun_y - mean[3]) / std[3];
        test_data[i].player2_ball_sabun_x = (test_data[i].player2_ball_sabun_x - mean[4]) / std[4];
        test_data[i].player2_ball_sabun_y = (test_data[i].player2_ball_sabun_y - mean[5]) / std[5];
    }

    let blue = [];
    let red = [];
    let green = [];
    let answer = [];

    for (o = 0; o < test_data.length; o++) {
        answer.push(
            sum(
                test_data[o].players_sabun_x,
                test_data[o].players_sabun_y,
                test_data[o].player1_ball_sabun_x,
                test_data[o].player1_ball_sabun_y,
                test_data[o].player2_ball_sabun_x,
                test_data[o].player2_ball_sabun_y
            )
        );
    }
    for (i = 0; i < answer.length; i++) {
        //lr.intercept_の値を足している
        let b = 0;
        let r = 0;
        let g = 0;

        //lr.coef_の値とpolynomialの値をかける
        for (j = 0; j < color_array[0].length - 1; j++) {
            b = b + answer[i][j] * color_array[0][j];
            r = r + answer[i][j] * color_array[1][j];
            g = g + answer[i][j] * color_array[2][j];
        }
        b = b + color_array[0][color_array[0].length - 1];
        r = r + color_array[1][color_array[0].length - 1];
        g = g + color_array[2][color_array[0].length - 1];

        aa = Math.exp(b) / (Math.exp(b) + Math.exp(r) + Math.exp(g));
        bb = Math.exp(r) / (Math.exp(b) + Math.exp(r) + Math.exp(g));
        cc = Math.exp(g) / (Math.exp(b) + Math.exp(r) + Math.exp(g));
        blue.push(aa);
        red.push(bb);
        green.push(cc);
    }
    judge_array = [0, 0, 0];
    for (i = 0; i < blue.length; i++) {
        //どの色になるかの判断
        judge = [blue[i], red[i], green[i]];
        judge_color[i].judge = green[i];
        judge_array[judge_color[i].judge] += 1;
        judge.length = 0;
    }
    let coun1 = 0;
    let coun2 = 45;
    if (reverce == 1) {
        for (i = 0; i < judge_color.length / 2; i++) {
            if (coun1 == 46) {
                coun1 = 0;
                coun2 += 46;
            }
            let keep = judge_color[i]["judge"];
            judge_color[i]["judge"] = judge_color[judge_color.length - 1 - coun2 + coun1]["judge"];
            judge_color[judge_color.length - 1 - coun2 + coun1]["judge"] = keep;
            coun1++;
        }
    }
    return judge_color;
}

//登録ボタンを押したときの処理
let load_button = document.querySelector('span');
document.getElementById("register_btn").onclick = function () {
    load_button.innerHTML = `<div class="loading"></div>`;
    var json_str1 = JSON.stringify(imagearray);
    localStorage.setItem('key', json_str1);
    for (var i = 0; i <= 5; i++) {//ローテーション0~5
        for (var j = 0; j <= 5; j++) {//コマ番号1~6
            let formData = new FormData();
            formData.append("experience_years", experience_years);
            formData.append("subject_object_level", subject_object_level);
            formData.append("rotation_counter", i);
            formData.append("player_number", j + 1);
            formData.append("player0_x", imagearray[i][j].x);
            formData.append("player0_y", imagearray[i][j].y);
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "../PHP/registration.php");
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
        }
    }
    //集合知の計算
    form = new FormData();
    xhr = new XMLHttpRequest();
    xhr.open("POST", "../PHP/execute.php");
    xhr.addEventListener("loadend", function () {
        if (xhr.status == 200) {
            load_button.innerHTML = "SUCCESS!"
            setTimeout(jump, 500)
            if (xhr.response == 'error') {
                console.log("通信に失敗しました")
            }
        }
    });
    xhr.send(form);
}
function jump() {
    location.href = "../HTML/OMIAI.html";
}

function sum(x1, x2, x3, x4, x5, x6) {
    //polynomialfeatureの3次元の乗算の組み合わせを表示
    let array = [x1, x2, x3, x4, x5, x6];
    let counter_k = -1;
    let counter_j = 7;
    let counter_i = -1;
    let one = [];
    let two = [];
    let three = [];
    let four = [];
    let five = [];
    let six = [];
    let box = [one, two, three, four, five, six];
    let answer = [1];
    for (i = 0; i < array.length + 1; i++) {
        for (j = 0; j < array.length + 1; j++) {
            for (k = 0; k < array.length; k++) {
                if (i == 0) {
                    if (j == 0) {
                        answer.push(array[k]);
                    } else {
                        if (isNaN(array[j - 1] * array[k + counter_k])) {
                        } else {
                            box[j - 1].push(array[j - 1] * array[k + counter_k]);
                            answer.push(array[j - 1] * array[k + counter_k]);
                        }
                    }
                } else {
                    if (j == 0) {
                    } else {
                        if (k < counter_j) {
                            if (j > counter_i) {
                                if (isNaN(box[j - 1][k] * array[i - 1])) {
                                } else {
                                    answer.push(box[j - 1][k] * array[i - 1]);
                                }
                            }
                        }
                    }
                }
            }
            counter_k++;
        }
        counter_j--;
        counter_i++;
        counter_k = -1;
    }
    return answer;
}