// let cdt = [{ x: 50, y: 10, }, { x: 550, y: 50, }, { x: 840, y: 10, }, { x: 870, y: 460, }, { x: 350, y: 460, }, { x: 50, y: 460, },
// { x: 460, y: 370, }, { x: 760, y: 370, }, { x: 620, y: 600, }, { x: 310, y: 600, }, { x: 160, y: 370, }];

// let cdt_center = [{ x: 50, y: 10, }, { x: 550, y: 50, }, { x: 840, y: 10, }, { x: 870, y: 460, }, { x: 350, y: 460, }, { x: 50, y: 460, },
// { x: 460, y: 370, }, { x: 760, y: 370, }, { x: 620, y: 600, }, { x: 310, y: 600, }, { x: 160, y: 370, }];



// let imagearray = [
//     [cdt[0], cdt[6], cdt[7], cdt[8], cdt[9], cdt[10]],
//     [cdt[1], cdt[7], cdt[8], cdt[6], cdt[9], cdt[10]],
//     [cdt[2], cdt[7], cdt[8], cdt[9], cdt[10], cdt[6]],
//     [cdt[3], cdt[8], cdt[9], cdt[10], cdt[6], cdt[7]],
//     [cdt[4], cdt[9], cdt[10], cdt[6], cdt[7], cdt[8]],
//     [cdt[5], cdt[10], cdt[6], cdt[7], cdt[8], cdt[9]]
// ];

// let imagearray_center = imagearray;

// let imagearray_center = [
//     [cdt_center[0], cdt_center[6], cdt_center[7], cdt_center[8], cdt_center[9], cdt_center[10]],
//     [cdt_center[1], cdt_center[7], cdt_center[8], cdt_center[6], cdt_center[9], cdt_center[10]],
//     [cdt_center[2], cdt_center[7], cdt_center[8], cdt_center[9], cdt_center[10], cdt_center[6]],
//     [cdt_center[3], cdt_center[8], cdt_center[9], cdt_center[10], cdt_center[6], cdt_center[7]],
//     [cdt_center[4], cdt_center[9], cdt_center[10], cdt_center[6], cdt_center[7], cdt_center[8]],
//     [cdt_center[5], cdt_center[10], cdt_center[6], cdt_center[7], cdt_center[8], cdt_center[9]]
// ];

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
let canvas_id = ["under_canvas1", "under_canvas2", "under_canvas3", "under_canvas4", "under_canvas5", "under_canvas6"];
const under_canvas = [];
const under_context = [];
for (let i = 0; i < 6; i++) {
    under_canvas[i] = document.getElementById(canvas_id[i]);
    under_context[i] = under_canvas[i].getContext('2d');
}
//スライダーバー
const SlideBar_experience = document.getElementById('input-range');//経験年数
const SlideBar_subject_object = document.getElementById('subject_object');//主観的・客観的

//画像パス
const path = ['../Picture/koma/0/2-1.png', //けんすけ
    '../Picture/koma/1/front/2-2.png', '../Picture/koma/1/back/2-2.png', //るい
    '../Picture/koma/2/front/2-3.png', '../Picture/koma/2/back/2-3.png', //ひなた
    '../Picture/koma/3/front/2-4.png', '../Picture/koma/3/back/2-4.png', //けんと
    '../Picture/koma/4/front/2-5.png', '../Picture/koma/4/back/2-5.png', //りく
    '../Picture/koma/5/front/2-6.png', '../Picture/koma/5/back/2-6.png', //けいすけ
];

const img = [[path[0], path[1], path[3], path[6], path[8], path[10]],
[path[0], path[1], path[4], path[6], path[8], path[9]],
[path[0], path[2], path[4], path[6], path[7], path[9]],
[path[0], path[2], path[4], path[5], path[7], path[9]],
[path[0], path[2], path[3], path[5], path[7], path[10]],
[path[0], path[1], path[3], path[5], path[8], path[10]]];



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

console.log(imagearray_center);
//コマの中心の座標を用意
for (var i in imagearray) {
    for (var j in imagearray[i]) {
        imagearray_center[i][j].x += koma_w / 2 * size;
        imagearray_center[i][j].y += koma_h / 2 * size;
    }
}
console.log('確認');
console.log(imagearray_center);

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
    simulation_area.style.display = 'none';//配置シミュレーションを非表示
    // row_justify_content_center.style.display = 'none';
    document.getElementById("experience").className = "modalBg modalBgOpen"; //モーダルディスプレイで経験年数の質問を表示
    experience_years = 2; //経験年数の初期値は2
    console.log('経験年数', experience_years);

    console.log('座標', imagearray);
    console.log('中心座標', imagearray_center);

    SlideBar_experience.addEventListener('change', () => {
        experience_years = SlideBar_experience.value;
        console.log('経験年数', experience_years);
    })

    SlideBar_subject_object.addEventListener('change', () => {
        subject_object_level = SlideBar_subject_object.value;
        console.log('主観的か客観的か', subject_object_level);
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

    //画像読み込み終わってからソース取得する
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            images[i][j].src = img[i][j];
        }
    }
});

function simulation() {
    simulation_area.style.display = "block";
    // row_justify_content_center.style.display = "block";
    experience.style.display = "none";
    kensuke.style.display = "block";//けんすけ
    rui.style.display = "none";//るい
    hinata.style.display = "none";//ひなた
    kento.style.display = "none";//けんと
    riku.style.display = "none";//りく
    keisuke.style.display = "none";//けいすけ
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

    console.log('type', type);
    if (type == 0) {
        console.log('mousedown');
    } else if (type == 1) {
        console.log('touchstart');
    }

    //タッチのデフォルト処理を禁止
    e.preventDefault();

    // console.log('targetTouches', e.targetTouches[0].clientX);


    //ドラッグ開始時のウェブサイト上のマウスの座標
    let rect = canvas.getBoundingClientRect();
    let posX;
    let posY;

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

    console.log('------------------------------------');
    console.log('x,y', canvasX, canvasY);

    //コマ0（セッター）は計算しない
    for (var i = images.length - 1; i >= 0; i--) {
        //コマの中心座標
        let centerX = imagearray_center[counter][i].x;
        let centerY = imagearray_center[counter][i].y;
        let name = [kensuke, rui, hinata, kento, riku, keisuke];

        //コマの当たり判定処理
        if ((centerX - canvasX) * (centerX - canvasX) + (centerY - canvasY) * (centerY - canvasY) <= (koma_h / 2 * size) * (koma_h / 2 * size)) {
            dragkoma = i;//ドラッグしているコマ
            console.log(dragkoma);
            dragmode = true;//ドラッグモードにする

            console.log('dragmode');

            for (let i = 0; i < 6; i++) {
                if (dragkoma == i) {
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

// let rock = 0;
// let my_x;
// let your_x;
//ドラッグ中処理
let mousemove = function (e, type) {



    if (type == 0) {
        console.log('mousemove');
    } else if (type == 1) {
        console.log('touchmove');
    }
    // ドラッグ終了位置
    let rect = canvas.getBoundingClientRect();
    let posX;
    let posY;

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

    if (type == 1) {
        if (canvasX >= canvas.width || canvasX <= 0 || canvasY >= canvas.height || canvasY <= 0) {
            mouseup(e);
        }
    }


    if (dragmode) {
        // canvas内を一旦クリア
        context.clearRect(0, 0, canvas.width, canvas.height);

        let x = 0;
        let y = 0;
        let w = koma_w * size;
        let h = koma_h * size;

        // let rot1 = [1, 1, 0, 0, 0];
        // let rot2 = [1, 0, 0, 0, 1];
        // let rot3 = [0, 0, 0, 1, 1];
        // let rot4 = [0, 0, 1, 1, 1];
        // let rot5 = [0, 1, 1, 1, 0];
        // let rot6 = [1, 1, 1, 0, 0];

        // let rotation_array = [rot1, rot2, rot3, rot4, rot5, rot6];

        for (var i = 5; i >= 0; i--) {
            if (i == dragkoma) {
                //コマの座標
                x = canvasX - koma_w / 2 * size;
                y = canvasY - koma_h / 2 * size;

                let min;

                // for(j = 0; j < rotation_array.length; j++){
                //     if(j == counter){
                // if(rotation_array[counter][dragkoma - 1] == 1){
                //     console.log("1");
                //     rotation_array[counter][dragkoma - 1] = 100;
                //     for(j =0; j < rotation_array[counter].length; j++){
                //         if(rotation_array[counter][j] == 1){
                //             judge = j;
                //             break;
                //         }
                //     }
                //     console.log("j", j);
                //     console.log(imagearray_center[counter][dragkoma].x ,  imagearray_center[counter][judge + 1].x);
                //     if(rock == 0){
                //     console.log("aaa");
                //     my_x = imagearray_center[counter][dragkoma].x;
                //     your_x = imagearray_center[counter][judge + 1].x;
                //     }
                //     console.log("my:", my_x, "your;", your_x);
                //     if(my_x > your_x){
                //         console.log("a>b");
                //         if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][judge + 1].x){
                //             console.log("auto, 左にいかない");
                //             x = my_x;
                //             rock = 0;
                //         }
                //     }else{
                //         console.log("a<b");

                //         if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][judge + 1].x) {
                //             console.log("auto, 右にいかない");
                //             x = my_x;

                //             rock = 0;
                //         }
                //     }
                //     rotation_array[counter][dragkoma - 1] = 1;
                //     rock = 1;
                // }
                // }
                //     }
                // }




                //コマの動きがルールに合ってるか確認+ローテーション(counter)3~5のときはセッターを付随しているコマと一緒に動かす
                switch (counter) {
                    case 0://1ローテーション目
                        switch (dragkoma) {
                            case 1://前衛真ん中
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][2].x) {
                                    x = imagearray[counter][2].x - 10;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][3].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][3].y) {
                                        min = imagearray[counter][3].y;
                                    } else if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y) {
                                        min = imagearray[counter][4].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min - 10;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;

                            case 2://前衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][1].x) {
                                    x = imagearray[counter][1].x + 10;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][3].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][3].y) {
                                        min = imagearray[counter][3].y;
                                    } else if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y) {
                                        min = imagearray[counter][4].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min - 10;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;

                            case 3://後衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][4].x) {
                                    x = imagearray[counter][4].x + 10;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y) {
                                    if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y) {
                                        min = imagearray[counter][0].y;
                                    } else if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else {
                                        min = imagearray[counter][2].y;
                                    }
                                    y = min + 10;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;

                            case 4://後衛真ん中
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][3].x) {
                                    x = imagearray[counter][3].x - 10;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][5].x) {
                                    x = imagearray[counter][5].x + 10;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y) {
                                    if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y) {
                                        min = imagearray[counter][0].y;
                                    } else if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else {
                                        min = imagearray[counter][2].y;
                                    }
                                    y = min + 10;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;

                            case 5://後衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][4].x) {
                                    x = imagearray[counter][4].x - 10;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y) {
                                    if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y) {
                                        min = imagearray[counter][0].y;
                                    } else if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else {
                                        min = imagearray[counter][2].y;
                                    }
                                    y = min + 10;
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
                                    x = imagearray[counter][5].x + 10;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][3].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y) {
                                        min = imagearray[counter][2].y;
                                    } else if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][3].y) {
                                        min = imagearray[counter][3].y;
                                    } else {
                                        min = imagearray[counter][4].y;
                                    }
                                    y = min - 10;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;

                            case 2://後衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][3].x) {
                                    x = imagearray[counter][3].x + 10;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y) {
                                        min = imagearray[counter][0].y;
                                    } else if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min + 10;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;

                            case 3://後衛真ん中
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][2].x) {
                                    x = imagearray[counter][2].x - 10;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][4].x) {
                                    x = imagearray[counter][4].x + 10;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y) {
                                        min = imagearray[counter][0].y;
                                    } else if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min + 10;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;

                            case 4://後衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][3].x) {
                                    x = imagearray[counter][3].x - 10;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y) {
                                        min = imagearray[counter][0].y;
                                    } else if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min + 10;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;

                            case 5://前衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][1].x) {
                                    x = imagearray[counter][1].x - 10;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][3].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y) {
                                        min = imagearray[counter][2].y;
                                    } else if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][3].y) {
                                        min = imagearray[counter][3].y;
                                    } else {
                                        min = imagearray[counter][4].y;
                                    }
                                    y = min - 10;
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
                                    x = imagearray[counter][2].x + 10;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y) {
                                        min = imagearray[counter][0].y;
                                    } else if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y) {
                                        min = imagearray[counter][4].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min + 10;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;
                            case 2://後衛真ん中
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][1].x) {
                                    x = imagearray[counter][1].x - 10;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][3].x) {
                                    x = imagearray[counter][3].x + 10;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y) {
                                        min = imagearray[counter][0].y;
                                    } else if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y) {
                                        min = imagearray[counter][4].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min + 10;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;
                            case 3://後衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][2].x) {
                                    x = imagearray[counter][2].x - 10;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][0].y) {
                                        min = imagearray[counter][0].y;
                                    } else if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y) {
                                        min = imagearray[counter][4].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min + 10;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;
                            case 4://前衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][5].x) {
                                    x = imagearray[counter][5].x - 10;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][3].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y) {
                                        min = imagearray[counter][2].y;
                                    } else {
                                        min = imagearray[counter][3].y;
                                    }
                                    y = min - 10;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;
                            case 5://前衛真ん中
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][4].x) {
                                    x = imagearray[counter][4].x + 10;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][3].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y) {
                                        min = imagearray[counter][2].y;
                                    } else {
                                        min = imagearray[counter][3].y;
                                    }
                                    y = min - 10;
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
                                    x = imagearray[counter][2].x + 10;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][3].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][3].y) {
                                        min = imagearray[counter][3].y;
                                    } else if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y) {
                                        min = imagearray[counter][4].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min + 10;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;
                            case 2://後衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][1].x) {
                                    x = imagearray[counter][1].x - 10;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][3].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][3].y) {
                                        min = imagearray[counter][3].y;
                                    } else if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y) {
                                        min = imagearray[counter][4].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min + 10;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;
                            case 3://前衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][4].x) {
                                    x = imagearray[counter][4].x - 10;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else {
                                        min = imagearray[counter][2].y;
                                    }
                                    y = min - 10;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;
                            case 4://前衛真ん中
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][5].x) {
                                    x = imagearray[counter][5].x - 10;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][3].x) {
                                    x = imagearray[counter][3].x + 10;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else {
                                        min = imagearray[counter][2].y;
                                    }
                                    y = min - 10;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;
                            case 5://前衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][4].x) {
                                    x = imagearray[counter][4].x + 10;
                                    let tempX = imagearray[counter][0].x - imagearray[counter][5].x;
                                    let tempY = imagearray[counter][0].y - imagearray[counter][5].y;
                                    imagearray[counter][0].x = x + tempX;
                                    imagearray[counter][0].y = y + tempY;
                                    dragmode = false;
                                    console.log('セッター座標x,y', imagearray[counter][0].x, imagearray[counter][0].y);
                                    console.log('左の選手を超えようとした');
                                    //後衛の選手を超えようとした
                                } else if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][2].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else {
                                        min = imagearray[counter][2].y;
                                    }
                                    y = min - 10;
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
                                    x = imagearray[counter][5].x - 10;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][3].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y) {
                                    if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y) {
                                        min = imagearray[counter][2].y;
                                    } else if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][3].y) {
                                        min = imagearray[counter][3].y;
                                    } else {
                                        min = imagearray[counter][4].y;
                                    }
                                    y = min + 10;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;
                            case 2://前衛左
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][3].x) {
                                    x = imagearray[counter][3].x - 10;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min - 10;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;
                            case 3://前衛真ん中
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][2].x) {
                                    x = imagearray[counter][2].x + 10;
                                    let tempX = imagearray[counter][0].x - imagearray[counter][3].x;
                                    let tempY = imagearray[counter][0].y - imagearray[counter][3].y;
                                    imagearray[counter][0].x = x + tempX;
                                    imagearray[counter][0].y = y + tempY;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                    //右の選手を超えようとした
                                } else if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][4].x) {
                                    x = imagearray[counter][4].x - 10;
                                    let tempX = imagearray[counter][0].x - imagearray[counter][3].x;
                                    let tempY = imagearray[counter][0].y - imagearray[counter][3].y;
                                    imagearray[counter][0].x = x + tempX;
                                    imagearray[counter][0].y = y + tempY;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                    //後衛の選手を超えようとした
                                } else if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min - 10;
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
                                    x = imagearray[counter][3].x + 10;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min - 10;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;
                            case 5://後衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][1].x) {
                                    x = imagearray[counter][1].x + 10;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][3].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][4].y) {
                                    if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y) {
                                        min = imagearray[counter][2].y;
                                    } else if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][3].y) {
                                        min = imagearray[counter][3].y;
                                    } else {
                                        min = imagearray[counter][4].y;
                                    }
                                    y = min + 10;
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
                                    x = imagearray[counter][2].x - 10;
                                    let tempX = imagearray[counter][0].x - imagearray[counter][1].x;
                                    let tempY = imagearray[counter][0].y - imagearray[counter][1].y;
                                    imagearray[counter][0].x = x + tempX;
                                    imagearray[counter][0].y = y + tempY;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                    //後衛の選手を超えようとした
                                } else if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y) {
                                        min = imagearray[counter][4].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min - 10;
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
                                    x = imagearray[counter][3].x - 10;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][1].x) {
                                    x = imagearray[counter][1].x + 10;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y) {
                                        min = imagearray[counter][4].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min - 10;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;
                            case 3://前衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][2].x) {
                                    x = imagearray[counter][2].x + 10;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //後衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y || imagearray_center[counter][dragkoma].y > imagearray_center[counter][5].y) {
                                    if (imagearray_center[counter][dragkoma].y > imagearray_center[counter][4].y) {
                                        min = imagearray[counter][4].y;
                                    } else {
                                        min = imagearray[counter][5].y;
                                    }
                                    y = min - 10;
                                    dragmode = false;
                                    console.log('後衛の選手を超えようとした');
                                }
                                break;
                            case 4://後衛右
                                //左の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x < imagearray_center[counter][5].x) {
                                    x = imagearray[counter][5].x + 10;
                                    dragmode = false;
                                    console.log('左の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][3].y) {
                                    if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y) {
                                        min = imagearray[counter][2].y;
                                    } else {
                                        min = imagearray[counter][3].y;
                                    }
                                    y = min + 10;
                                    dragmode = false;
                                    console.log('前衛の選手を超えようとした');
                                }
                                break;
                            case 5://後衛真ん中
                                //右の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].x > imagearray_center[counter][4].x) {
                                    x = imagearray[counter][4].x - 10;
                                    dragmode = false;
                                    console.log('右の選手を超えようとした');
                                }
                                //前衛の選手を超えようとした
                                if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y || imagearray_center[counter][dragkoma].y < imagearray_center[counter][3].y) {
                                    if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][1].y) {
                                        min = imagearray[counter][1].y;
                                    } else if (imagearray_center[counter][dragkoma].y < imagearray_center[counter][2].y) {
                                        min = imagearray[counter][2].y;
                                    } else {
                                        min = imagearray[counter][3].y;
                                    }
                                    y = min + 10;
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
            under_context[counter].clearRect(0, 0, under_canvas[counter].width, under_canvas[counter].height);
            for (let j = 5; j >= 0; j--) {
                under_context[counter].drawImage(images[counter][j], imagearray[counter][j].x * scale, imagearray[counter][j].y * scale, koma_w * size_under, koma_h * size_under);
            }
            if (counter == 0) {
                under_context[0].clearRect(0, 0, under_canvas[0].width, under_canvas[0].height);
                for (let j = 5; j >= 0; j--) {
                    under_context[0].drawImage(images[0][j], imagearray[0][j].x * scale, imagearray[0][j].y * scale, koma_w * size_under, koma_h * size_under);
                }
            }
        }
    }
};

//ドラッグ終了処理
let mouseup = function (e, type) {

    if (type == 0) {
        console.log('mouseup');
    } else if (type == 1) {
        console.log('touchend');
    }


    if (dragmode) {
        area(counter);
        // omiai();
    }
    dragmode = false;
}

//コマ以外を押したとき
let mouseout = function (e, type) {
    if (type == 0) {
        console.log('mouseout');
    } else if (type == 1) {
        console.log('touchcancel');
    }

    mouseup(e);
}

canvas.addEventListener('mousedown', function (e) { mousedown(e, 0); }, false);
canvas.addEventListener('mousemove', function (e) { mousemove(e, 0); }, false);
canvas.addEventListener('mouseup', function (e) { mouseup(e, 0); }, false);
canvas.addEventListener('mouseout', function (e) { mouseout(e, 0); false });
canvas.addEventListener('touchstart', function (e) { mousedown(e, 1); }, false);
canvas.addEventListener('touchmove', function (e) { mousemove(e, 1); }, false);
canvas.addEventListener('touchend', function (e) { mouseup(e, 1); }, false);
canvas.addEventListener('touchcancel', function (e) { mouseout(e, 1); false });


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

    for (var i = 0; i <= 5; i++) {//ローテーション0~5
        for (var j = 0; j <= 5; j++) {//コマ番号1~6
            let formData = new FormData();
            formData.append("experience_years", experience_years);
            formData.append("subject_object_level", subject_object_level);
            formData.append("rotation_counter", i);
            formData.append("player_number", j + 1);
            formData.append("player0_x", imagearray[i][j].x);
            formData.append("player0_y", imagearray[i][j].y);
            console.log(j)
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "../PHP/sample.php");
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

    var json_str1 = JSON.stringify(imagearray);
    localStorage.setItem('key', json_str1);

}

//後で
let l = 2;
let r = 3;
function XY() {
    let lp = document.getElementById('left');
    let lx = document.getElementById('leftx');
    let ly = document.getElementById('lefty');
    let rp = document.getElementById('right');
    let rx = document.getElementById('rightx');
    let ry = document.getElementById('righty');
    if (lx.value == 0 || ly.value == 0 || rx == 0 || ry == 0) {

    } else {
        imagearray_center[counter][lp.value - 1].x = lx.value * 1200 / 9;
        imagearray_center[counter][lp.value - 1].y = 1200 - ly.value * 1200 / 9;
        imagearray[counter][lp.value - 1].x = imagearray_center[counter][lp.value - 1].x - koma_w / 2 * size;
        imagearray[counter][lp.value - 1].y = imagearray_center[counter][lp.value - 1].y - koma_h / 2 * size;
        imagearray_center[counter][rp.value - 1].x = rx.value * 1200 / 9;
        imagearray_center[counter][rp.value - 1].y = 1200 - ry.value * 1200 / 9;
        imagearray[counter][rp.value - 1].x = imagearray_center[counter][rp.value - 1].x - koma_w / 2 * size;
        imagearray[counter][rp.value - 1].y = imagearray_center[counter][rp.value - 1].y - koma_h / 2 * size;
    }
    // console.log(lx.value, ly.value, rx.value, ry.value);
    // imagearray_center[counter][lp.value - 1].x = lx.value * 1200 / 9;
    // imagearray_center[counter][lp.value - 1].y = 1200 - ly.value * 1200 / 9;
    // imagearray[counter][lp.value - 1].x = imagearray_center[counter][lp.value - 1].x - koma_w / 2 * size;
    // imagearray[counter][lp.value - 1].y = imagearray_center[counter][lp.value - 1].y - koma_h / 2 * size;
    // imagearray_center[counter][rp.value - 1].x = rx.value * 1200 / 9;
    // imagearray_center[counter][rp.value - 1].y = 1200 - ry.value * 1200 / 9;
    // imagearray[counter][rp.value - 1].x = imagearray_center[counter][rp.value - 1].x - koma_w / 2 * size;
    // imagearray[counter][rp.value - 1].y = imagearray_center[counter][rp.value - 1].y - koma_h / 2 * size;
    // console.log(imagearray[counter][lp.value - 1].x);
    // console.log(imagearray[counter][lp.value - 1].y);
    // console.log(lx * 1200 / 9);
    l = lp.value;
    r = rp.value;
    draw(counter);
    area(counter);
}

//----------------------------------------------------------------
//お見合い範囲表示
// const canvas_omiai_width = canvas_omiai.width;//canvas1の横幅
// const canvas_omiai_height = canvas_omiai.height;//canvas1の縦幅

const canvas_omiai = document.getElementById('canvas1');//お見合い範囲用
const context_omiai = canvas_omiai.getContext('2d');

//(36,0)   (563,0)
//(36,480) (563,480)
const omiai_color = '#00EA5F';//お見合い範囲の色 #00EA5F 0,234,95
const red = '';
const blue = '';
context_omiai.fillStyle = omiai_color;//色
context_omiai.globalAlpha = 0.3;//不透明度 0.4

// under_canvas
// const canvas_under = document.getElementById('under_area');//お見合い範囲用
// const context_under = canvas_under.getContext('2d');

// context_under.fillStyle = omiai_color;//色
// context_under.globalAlpha = 0.4;//不透明度 0.7
// let set = canvas_omiai.getBoundingClientRect();

let originX = 60;//コート原点左下）x
let originY = 1135;//コート原点（左下）y
let endY = 0;//コート上端y
let endX = 1140;//コート右端x
let pixel_sizeX = (endX - originX) / 46;//1ドットの大きさ（単位[m]）　横幅
let pixel_sizeY = (originY - endY) / 46;//1ドットの大きさ（単位[m])　縦幅
originY = originY - pixel_sizeY;//1ドットの大きさ分引く
endX = endX - pixel_sizeX;//1ドットの大きさ分引く

//お見合い範囲チューニング用パラメータ
let overlap = 6.8;

//judge_area, rota
//j0, j1, j2, j3, j4, j5, j6, j7, j8, j9
function omiai(judge_area, rota) {
    // canvas4内を一旦クリア
    context_omiai.clearRect(0, 0, canvas_omiai.width, canvas_omiai.height);
    let k = 0;
    let percentage = 0;


    var json_str2 = JSON.stringify(judge_area);
    localStorage.setItem('key2', json_str2);
    //後で　ローテーションごとのいる

    // let ad = canvas_under.width / canvas_omiai.width;
    // let oriX = 60 * ad;
    // let oriY = 1135 * ad;
    // let enY = 0;
    // let enX = 1140 * ad;
    // let pisiX = (enX - oriX) / 46;
    // let pisiY = (oriY - enY) / 46;
    // oriY = oriY - pisiY;
    // enX = enX - pisiX;

    // switch (rota) {
    //     case 0:
    //         let tem = 0;
    //         context_under.clearRect(0, 0, canvas_under.width, canvas_under.height);
    //         for (i = 0; i < 46; i++) {
    //             for (j = 0; j < 46; j++) {
    //                 if (judge_area[tem].judge == 0) {
    //                     context_under.fillRect(oriX + i * pisiX, oriY - j * pisiY, pisiX, pisiY);//塗る範囲(x,y,塗る幅,塗る高さ)
    //                 }
    //                 tem++;
    //             }
    //         }


    //         break;
    //     case 1:
    //         break;
    //     case 2:
    //         break;
    //     case 3:
    //         break;
    //     case 4:
    //         break;
    //     case 5:
    //         break;
    // }


    //グラデーションで表示
    let judge_result = judge_area.map(function (value) {
        return value.judge * 255;
    });

    for (let i = 0; i < 46; i++) {//x
        for (let j = 0; j < 46; j++) {//y
            context_omiai.globalAlpha = 0.8;
            context_omiai.fillStyle = 'rgb(' + Math.floor(judge_result[k]) + ',0,' + Math.floor(255 - judge_result[k]) + ')';
            context_omiai.fillRect(originX + i * pixel_sizeX, originY - j * pixel_sizeY, pixel_sizeX, pixel_sizeY);//塗る範囲(x,y,塗る幅,塗る高さ)
            percentage++;
            k++;
        }
    }

    console.log('area', judge_area);
    console.log('map', judge_result);


    //しきい値調整用
    // for (let i = 0; i < 46; i++) {//x
    //     for (let j = 0; j < 46; j++) {//y
    //         if (judge_area[k].judge >= 0.8) {
    //             context_omiai.fillRect(originX + i * pixel_sizeX, originY - j * pixel_sizeY, pixel_sizeX, pixel_sizeY);//塗る範囲(x,y,塗る幅,塗る高さ)
    //             percentage++;
    //         }
    //         k++;
    //     }
    // }

    //通常用
    // for (let i = 0; i < 46; i++) {//x
    //     for (let j = 0; j < 46; j++) {//y
    //         if (judge_area[k].judge >= overlap) {// || judge_area[k].judge == 1
    //             context_omiai.fillRect(originX + i * pixel_sizeX, originY - j * pixel_sizeY, pixel_sizeX, pixel_sizeY);//塗る範囲(x,y,塗る幅,塗る高さ)
    //             percentage++;
    //         }
    //         k++;
    //     }
    // }
    return percentage;
}

//----------------------------------------------------------------
// パターン
// 2-3  6
// 2-4  8
// 2-5 10
// 2-6 12
// 3-4 12
// 3-5 15
// 3-6 18
// 4-5 20
// 4-6 24
// 5-6 30

function area(rota) {
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

    //lr.coef_の値取得、テストデータ作成、特徴量として変換、
    let formData_area = new FormData();
    let xhr_area = new XMLHttpRequest();
    xhr_area.open("POST", "../PHP/simulation.php");
    xhr_area.addEventListener("loadend", function () {
        if (xhr_area.status === 200) {
            let data = JSON.parse(xhr_area.response);
            // console.log('data', data);
            for (i = 0; i < data.length; i++) {
                if (data[i].type == 0) {
                    //主観的
                    subject_array.push(data[i]);
                } else if (data[i].type == 1) {
                    //客観的
                    object_array.push(data[i]);
                }
            }
            // console.log('sub', subject_array);
            // console.log('ob', object_array);
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


            //主観的お見合い範囲
            let judge_color_sub_0 = calculation(counter, data_array_sub_0);
            let judge_color_sub_1 = calculation(counter, data_array_sub_1);
            let judge_color_sub_2 = calculation(counter, data_array_sub_2);
            let judge_color_sub_3 = calculation(counter, data_array_sub_3);
            let judge_color_sub_4 = calculation(counter, data_array_sub_4);
            let judge_color_sub_5 = calculation(counter, data_array_sub_5);
            let judge_color_sub_6 = calculation(counter, data_array_sub_6);
            let judge_color_sub_7 = calculation(counter, data_array_sub_7);
            let judge_color_sub_8 = calculation(counter, data_array_sub_8);
            let judge_color_sub_9 = calculation(counter, data_array_sub_9);

            //客観的お見合い範囲
            let judge_color_ob_0 = calculation(counter, data_array_ob_0);
            let judge_color_ob_1 = calculation(counter, data_array_ob_1);
            let judge_color_ob_2 = calculation(counter, data_array_ob_2);
            let judge_color_ob_3 = calculation(counter, data_array_ob_3);
            let judge_color_ob_4 = calculation(counter, data_array_ob_4);
            let judge_color_ob_5 = calculation(counter, data_array_ob_5);
            let judge_color_ob_6 = calculation(counter, data_array_ob_6);
            let judge_color_ob_7 = calculation(counter, data_array_ob_7);
            let judge_color_ob_8 = calculation(counter, data_array_ob_8);
            let judge_color_ob_9 = calculation(counter, data_array_ob_9);


            console.log('----------------------------');


            let area_percentage;
            console.log(l * r);
            switch (l * r) {
                case 6://2-3
                    area_percentage = omiai(judge_color_sub_0, rota);
                    break;
                case 8://2-4
                    area_percentage = omiai(judge_color_sub_1, rota);
                    break;
                case 10://2-5
                    area_percentage = omiai(judge_color_sub_2, rota);
                    break;
                case 12://2-6 3-4
                    if (l == 2 || r == 2) {
                        area_percentage = omiai(judge_color_sub_3, rota);
                    } else {
                        area_percentage = omiai(judge_color_sub_4, rota);
                    }
                    break;
                case 15://3-5
                    area_percentage = omiai(judge_color_sub_5, rota);
                    break;
                case 18://3-6
                    area_percentage = omiai(judge_color_sub_6, rota);
                    break;
                case 20://4-5
                    area_percentage = omiai(judge_color_sub_7, rota);
                    break;
                case 24://4-6
                    area_percentage = omiai(judge_color_sub_8, rota);
                    break;
                case 30://5-6
                    area_percentage = omiai(judge_color_sub_9, rota);
                    break;
            }
            // context_omiai.clearRect(0, 0, canvas_omiai.width, canvas_omiai.height);
            // let area_percentage = omiai(judge_color_sub_0, rota);
            // let area_percentage = omiai(judge_color_sub_1, rota);
            // area_percentage = omiai(judge_color_sub_2, rota);
            // area_percentage = omiai(judge_color_sub_3, rota);
            // area_percentage = omiai(judge_color_sub_4, rota);
            // area_percentage = omiai(judge_color_sub_5, rota);
            // let area_percentage = omiai(judge_color_sub_6, rota);
            // area_percentage = omiai(judge_color_sub_7, rota);
            // area_percentage = omiai(judge_color_sub_8, rota);
            // area_percentage = omiai(judge_color_sub_9, rota);

            // let area_percentage = omiai(judge_color_ob_0, rota);
            // let area_percentage = omiai(judge_color_ob_1, rota);
            // area_percentage = omiai(judge_color_ob_2, rota);
            // area_percentage = omiai(judge_color_ob_3, rota);
            // let area_percentage = omiai(judge_color_ob_4, rota);
            // area_percentage = omiai(judge_color_ob_5, rota);
            // area_percentage = omiai(judge_color_ob_6, rota);
            // area_percentage = omiai(judge_color_ob_7, rota);
            // area_percentage = omiai(judge_color_ob_8, rota);
            // area_percentage = omiai(judge_color_ob_9, rota);




            //10パターンの重なってるところ 10+結果用の+1
            // let judge_color_sub = color_sub(judge_color_sub_0, judge_color_sub_1, judge_color_sub_2, judge_color_sub_3, judge_color_sub_4, judge_color_sub_5, judge_color_sub_6, judge_color_sub_7, judge_color_sub_8, judge_color_sub_9, judge_color_sub_0);
            // let judge_color_ob = color_sub(judge_color_ob_0, judge_color_ob_1, judge_color_ob_2, judge_color_ob_3, judge_color_ob_4, judge_color_ob_5, judge_color_ob_6, judge_color_ob_7, judge_color_ob_8, judge_color_ob_9, judge_color_ob_0);

            //主観的・客観的で割合変化 judge_color_sub, judge_color_ob, subject_object_level
            // let judge_color_merge = merge(judge_color_sub, judge_color_ob, subject_object_level);

            // console.log('merge', judge_color_merge);
            console.log('left', data_array_sub_0[0].left_player);
            console.log('right', data_array_sub_0[0].right_player);

            //お見合い範囲judge_colorを渡す 今はテストでjudge_color_subを渡しているが本来は変化割合調整バーで重みづけして１つにしたもの
            // let area_percentage = omiai(judge_color_merge, rota);
            area_percentage = area_percentage / 2116 * 100;
            area_percentage = String(area_percentage);
            area_percentage = parseInt(area_percentage, 10);
            area_percentage = area_percentage + '%';
            document.getElementById('area_percentage').innerHTML = area_percentage;
        }
    });
    xhr_area.send(formData_area);
}

//複数重なってるところだけのjudgeを作成
//j0, j1, j2, j3, j4, j5, j6, j7, j8, j9, judge_sum
function color_sub(j0, j1, j2, j3, j4, j5, j6, j7, j8, j9, judge_sum) {
    for (i = 0; i < j0.length; i++) {
        judge_sum[i].judge = j0[i].judge + j1[i].judge + j2[i].judge + j3[i].judge + j4[i].judge + j5[i].judge + j6[i].judge + j7[i].judge + j8[i].judge + j9[i].judge;
    }
    console.log('judge_sum', judge_sum);
    return judge_sum;
}

//お見合い範囲割合変化 sub, ob, level
function merge(sub, ob, level) {
    console.log('level', level);
    let sum_judge = sub;
    let tuning = 0.4;
    //主観的
    if (level == 0) {
        sum_judge = sub;
    }
    //少し主観的
    else if (level == 1) {
        for (i = 0; i < sub.length; i++) {
            if (sub[i].judge >= overlap && ob[i].judge >= overlap) {
                sum_judge[i].judge = sub[i].judge;
            } else if (sub[i].judge >= overlap + tuning) {
                sum_judge[i].judge = sub[i].judge;
            } else {
                sum_judge[i].judge = 0;
            }
        }
    }
    //普通
    else if (level == 2) {
        for (i = 0; i < sub.length; i++) {
            if (sub[i].judge >= overlap && ob[i].judge >= overlap) {
                sum_judge[i].judge = sub[i].judge;
            } else {
                sum_judge[i].judge = 0;
            }
        }
    }
    //少し客観的
    else if (level == 3) {
        for (i = 0; i < sub.length; i++) {
            if (sub[i].judge >= overlap && ob[i].judge >= overlap) {
                sum_judge[i].judge = ob[i].judge;
            } else if (ob[i].judge >= overlap + tuning) {
                sum_judge[i].judge = ob[i].judge;
            } else {
                sum_judge[i].judge = 0;
            }
            //overlap + 1 確認用
            // if (sub[i].judge >= overlap + 1) {
            //     sum_judge[i].judge = sub[i].judge;
            // } else {
            //     sum_judge[i].judge = 0;
            // }
        }
    }
    //客観的
    else if (level == 4) {
        sum_judge = ob;
    }
    return sum_judge;
}

function calculation(rota, data) {
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
    // console.log(color_array);
    for (i = 0; i < color_array.length; i++) {
        for (j = 0; j < color_array[i].length; j++) {
            color_array[i][j] = Number(color_array[i][j]);
        }
    }

    console.log('left', data[0].left_player, 'right', data[0].right_player);
    // console.log('right', data[0].right_player);

    // console.log('kl;jfsda', data);

    //左の選手
    let player1_x = imagearray_center[rota][data[0].left_player - 1].x / (1200 / 9);
    let player1_y = imagearray_center[rota][data[0].left_player - 1].y / (1200 / 9) - 9;
    player1_y = Math.abs(player1_y);
    //右の選手
    let player2_x = imagearray_center[rota][data[0].right_player - 1].x / (1200 / 9);
    let player2_y = imagearray_center[rota][data[0].right_player - 1].y / (1200 / 9) - 9;
    player2_y = Math.abs(player2_y);

    console.log('左ｘ', player1_x, '左ｙ', player1_y, '右ｘ', player2_x, '右ｙ', player2_y);
    // console.log('左ｙ', player1_y);
    // console.log('右ｘ', player2_x);
    // console.log('右ｙ', player2_y);

    let reverce = 0;
    if (player1_x > player2_x) {
        // idでの条件を描く
        player1_x = 9 - player1_x;
        player2_x = 9 - player2_x;
        reverce = 1;
    }
    // console.log("judge");
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
    // console.log(mean, std);

    for (i = 0; i < test_data.length; i++) {
        test_data[i].players_sabun_x = (test_data[i].players_sabun_x - mean[0]) / std[0];
        test_data[i].players_sabun_y = (test_data[i].players_sabun_y - mean[1]) / std[1];
        test_data[i].player1_ball_sabun_x = (test_data[i].player1_ball_sabun_x - mean[2]) / std[2];
        test_data[i].player1_ball_sabun_y = (test_data[i].player1_ball_sabun_y - mean[3]) / std[3];
        test_data[i].player2_ball_sabun_x = (test_data[i].player2_ball_sabun_x - mean[4]) / std[4];
        test_data[i].player2_ball_sabun_y = (test_data[i].player2_ball_sabun_y - mean[5]) / std[5];
    }

    // console.log(test_data);

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
        // console.log("aa");
    }
    // console.log(answer);

    // array = [];
    //列で正規化をしている
    // for (i = 0; i < answer[0].length; i++) {
    //   for (j = 0; j < answer.length; j++) {
    //     array.push(answer[j][i]);
    //   }
    //   max = Math.max(...array);
    //   min = Math.min(...array);
    //   // console.log(array, "max", max, "min", min);

    //   //NaNを0にしてる
    //   for (k = 0; k < answer.length; k++) {
    //     if (isNaN((answer[k][i] - min) / (max - min))) {
    //       answer[k][i] = 0;
    //     } else {
    //       answer[k][i] = (answer[k][i] - min) / (max - min);
    //     }
    //   }

    //   array.length = 0;
    // }

    // console.log(answer);
    for (i = 0; i < answer.length; i++) {
        //lr.intercept_の値を足している
        let b = 0;
        let r = 0;
        let g = 0;

        //lr.coef_の値とpolynomialの値をかける
        for (j = 0; j < color_array[0].length - 1; j++) {
            // answer[i][j] = (answer[i][j] - min) / (max - min);
            // answer[i][j] = (answer[i][j] - min_array[i]) / (max_array[i] - min_array[i]);

            b = b + answer[i][j] * color_array[0][j];
            r = r + answer[i][j] * color_array[1][j];
            g = g + answer[i][j] * color_array[2][j];
            // console.log(j, b);
        }
        b = b + color_array[0][color_array[0].length - 1];
        r = r + color_array[1][color_array[0].length - 1];
        g = g + color_array[2][color_array[0].length - 1];
        // console.log(b, r, g);

        aa = Math.exp(b) / (Math.exp(b) + Math.exp(r) + Math.exp(g));
        bb = Math.exp(r) / (Math.exp(b) + Math.exp(r) + Math.exp(g));
        cc = Math.exp(g) / (Math.exp(b) + Math.exp(r) + Math.exp(g));
        blue.push(aa);
        red.push(bb);
        green.push(cc);
        // console.log(i, b, r, g, aa, bb, cc);
    }
    // console.log(answer[0]);
    // console.log(color_array[0]);
    judge_array = [0, 0, 0];
    for (i = 0; i < blue.length; i++) {
        //どの色になるかの判断
        judge = [blue[i], red[i], green[i]];
        // console.log(judge);
        // console.log(blue[i], red[i], green[i]);
        // judge_color[i].judge = judge.lastIndexOf(Math.max(...judge));
        judge_color[i].judge = green[i];

        // console.log(judge_color[i].judge);
        judge_array[judge_color[i].judge] += 1;
        judge.length = 0;
    }
    // console.log('judge_color', judge_color[1104].judge);
    // console.log('judge_array', judge_array);
    // console.log('aiueo', aiueo[200].judge);
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
            console.log(i, judge_color.length - 1 - coun2 + coun1);
            coun1++;
        }
        // console.log(judge_color);
    }
    return judge_color;
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
                                    // console.log("k", k, "j", j, "i", i, "answer", box[j - 1][k] * i, "counter_j", counter_j, "box[j-1]", box[j - 1]);
                                    answer.push(box[j - 1][k] * array[i - 1]);
                                }
                            }
                        }
                    }
                }
            }
            counter_k++;
            // console.log("counter", counter_k);
        }
        counter_j--;
        counter_i++;
        counter_k = -1;
        // console.log("NOW", answer);
    }
    // console.log(answer);
    // console.log(box);
    return answer;
}