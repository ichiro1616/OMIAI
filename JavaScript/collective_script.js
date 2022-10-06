let str = localStorage.getItem("key");
let imagearray = JSON.parse(str);
let my_imagearray_center = JSON.parse(str);
let array_center = [
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
let array = [
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
let my_can; //自分の配置を表示するキャンバス
let ot_can; //選択した配置を表示するキャンバス
let com_can; //コマを重ねて表示するキャンバス
let gene_level = 0; //世代選択バー
let exp_level = 0; //経験年数選択バー
let counter = 0;
let size = 1; //メイン画面のコマの大きさの倍率
let koma_w = 100; //コマの横幅
let koma_h = 100; //コマの高さ
let scale = 610 / 1200; //my_canとcanvasの比
let genekeep; // 世代 別で区切った配列
let check = 0; //集合知があるかどうか

window.onclick = canvas_draw();
function canvas_draw() {
  //自分の配置koma
  my_can = document.getElementById("my"); //キャンバスのidを取得
  my_ctx = my_can.getContext("2d"); //キャンバスの2Dコンテキストを取得
  //他の配置・集合知koma
  ot_can = document.getElementById("other");
  ot_ctx = ot_can.getContext("2d");
  ot_can4 = document.getElementById("other4");
  ot_ctx4 = ot_can4.getContext("2d");
  //自分と他の重ねた配置
  com_can = document.getElementById("comparison2");
  com_ctx = com_can.getContext("2d");
}
//自分の配置canvas
let my_can3 = document.getElementById("my3"); //キャンバスのidを取得
my_ctx3 = my_can.getContext("2d"); //キャンバスの2Dコンテキストを取得
//他の配置・集合知canvas
let ot_can3 = document.getElementById("other3");
ot_ctx3 = ot_can.getContext("2d");
my_ctx3.globalAlpha = 1;
ot_ctx3.globalAlpha = 1;
com_ctx.globalAlpha = 0.8;
//お見合い範囲を描画するcanvasの準備
const my_can2 = document.getElementById("my2");
const my_ctx2 = my_can2.getContext("2d");
const ot_can2 = document.getElementById("other2");
const ot_ctx2 = ot_can2.getContext("2d");
//コート左側枠線のx座標
let originX = 39;
//コート上側枠線のy座標
let endY = 39;
//bitmap用のHTMLCanvasElementオブジェクトを作成する
let mycanvasBit = document.createElement("canvas");
let otcanvasBit = document.createElement("canvas");
mycanvasBit.width = my_can2.width;
mycanvasBit.height = my_can2.height;
otcanvasBit.width = my_can2.width;
otcanvasBit.height = my_can2.height;
//CanvasRenderingContext2Dオブジェクトを取得する
let mycontextBit = mycanvasBit.getContext("2d");
let otcontextBit = otcanvasBit.getContext("2d");
//ImageDataオブジェクトを作成する
let myimage_dataBit = mycontextBit.createImageData(46, 46);
let otimage_dataBit = otcontextBit.createImageData(46, 46);
//Uint8ClampedArrayオブジェクトを取得する
let myary_u8Bit = myimage_dataBit.data;
let otary_u8Bit = otimage_dataBit.data;
//ImageDataオブジェクトのサイズを取得
let mywBit = myimage_dataBit.width;
let myhBit = myimage_dataBit.height;
let otwBit = otimage_dataBit.width;
let othBit = otimage_dataBit.height;
//画像パス
const path = [
  "../Picture/koma/0/2-1.png", //けんすけ
  "../Picture/koma/1/front/2-2.png",
  "../Picture/koma/1/back/2-2.png", //るい
  "../Picture/koma/2/front/2-3.png",
  "../Picture/koma/2/back/2-3.png", //ひなた
  "../Picture/koma/3/front/2-4.png",
  "../Picture/koma/3/back/2-4.png", //けんと
  "../Picture/koma/4/front/2-5.png",
  "../Picture/koma/4/back/2-5.png", //りく
  "../Picture/koma/5/front/2-6.png",
  "../Picture/koma/5/back/2-6.png", //けいすけ
  "../Picture/koma/blue_1.png",
  "../Picture/koma/blue_2.png",
  "../Picture/koma/blue_3.png",
  "../Picture/koma/blue_4.png",
  "../Picture/koma/blue_5.png",
  "../Picture/koma/blue_6.png",
  "../Picture/koma/red_1.png",
  "../Picture/koma/red_2.png",
  "../Picture/koma/red_3.png",
  "../Picture/koma/red_4.png",
  "../Picture/koma/red_5.png",
  "../Picture/koma/red_6.png",
];
const img = [
  [path[0], path[1], path[3], path[6], path[8], path[10]],
  [path[0], path[1], path[4], path[6], path[8], path[9]],
  [path[0], path[2], path[4], path[6], path[7], path[9]],
  [path[0], path[2], path[4], path[5], path[7], path[9]],
  [path[0], path[2], path[3], path[5], path[7], path[10]],
  [path[0], path[1], path[3], path[5], path[8], path[10]],
];
const rotation_images = ["../Picture/サイクル_1.png", "../Picture/サイクル_2.png", "../Picture/サイクル_3.png", "../Picture/サイクル_4.png", "../Picture/サイクル_5.png", "../Picture/サイクル_6.png"];
const blue_img = [path[11], path[12], path[13], path[14], path[15], path[16]];
const red_img = [path[17], path[18], path[19], path[20], path[21], path[22]];
//Imageを作成
let images = new Array(6);
for (var i = 0; i < 6; i++) {
  images[i] = new Array(6).fill(0);
}
for (var i = 0; i < 6; i++) {
  //ローテーション
  for (var j = 0; j < 6; j++) {
    //コマ番号
    images[i][j] = new Image();
  }
}
let blue_koma = new Array(6);
for (var i = 0; i < 6; i++) {
  blue_koma[i] = new Array(6).fill(0);
}
for (var i = 0; i < 6; i++) {
  //ローテーション
  for (var j = 0; j < 6; j++) {
    //コマ番号
    blue_koma[i][j] = new Image();
  }
}
let red_koma = new Array(6);
for (var i = 0; i < 6; i++) {
  red_koma[i] = new Array(6).fill(0);
}
for (var i = 0; i < 6; i++) {
  //ローテーション
  for (var j = 0; j < 6; j++) {
    //コマ番号
    red_koma[i][j] = new Image();
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
//コマの中心の座標を用意
for (var i in imagearray) {
  for (var j in imagearray[i]) {
    my_imagearray_center[i][j].x += (koma_w / 2) * size;
    my_imagearray_center[i][j].y += (koma_h / 2) * size;
  }
}
for (var i in array_center) {
  for (var j in array_center[i]) {
    array_center[i][j].x += (koma_w / 2) * size;
    array_center[i][j].y += (koma_h / 2) * size;
  }
}
//セッターの座標を修正
my_imagearray_center[3][0].x = my_imagearray_center[3][5].x + (koma_w / 2) * size * Math.cos(Math.PI / 4) - 50 + 10 * size; //45°
my_imagearray_center[3][0].y = my_imagearray_center[3][5].y + (koma_h / 2) * size * Math.sin(Math.PI / 4) - 50 + 10 * size; //45°
imagearray[3][0].x += (koma_w / 2) * size * Math.cos(Math.PI / 4) - 50 + 10 * size; //45°
imagearray[3][0].y += (koma_h / 2) * size * Math.sin(Math.PI / 4) - 50 + 10 * size; //45°
my_imagearray_center[4][0].x = my_imagearray_center[4][3].x - (koma_w / 2) * size * Math.cos(Math.PI / 4) + 50 - 10 * size; //45°
my_imagearray_center[4][0].y = my_imagearray_center[4][3].y + (koma_h / 2) * size * Math.sin(Math.PI / 4) + 50 - 10 * size; //45°
imagearray[4][0].x -= (koma_w / 2) * size * Math.cos(Math.PI / 4) - 50 + 10 * size; //45°
imagearray[4][0].y += (koma_h / 2) * size * Math.sin(Math.PI / 4) - 50 + 10 * size; //45°
my_imagearray_center[5][0].x = my_imagearray_center[5][1].x - (koma_w / 2) * size * Math.cos(Math.PI / 4) - 50 + 10 * size; //45°
my_imagearray_center[5][0].y = my_imagearray_center[5][1].y + (koma_h / 2) * size * Math.sin(Math.PI / 4) - 50 + 10 * size; //45°
imagearray[5][0].x -= (koma_w / 2) * size * Math.cos(Math.PI / 4) - 50 + 10 * size; //45°
imagearray[5][0].y += (koma_h / 2) * size * Math.sin(Math.PI / 4) - 50 + 10 * size; //45°
array_center[3][0].x = array_center[3][5].x + (koma_w / 2) * size * Math.cos(Math.PI / 4) - 50 + 10 * size; //45°
array_center[3][0].y = array_center[3][5].y + (koma_h / 2) * size * Math.sin(Math.PI / 4) - 50 + 10 * size; //45°
array[3][0].x += (koma_w / 2) * size * Math.cos(Math.PI / 4) - 50 + 10 * size; //45°
array[3][0].y += (koma_h / 2) * size * Math.sin(Math.PI / 4) - 50 + 10 * size; //45°
array_center[4][0].x = array_center[4][3].x - (koma_w / 2) * size * Math.cos(Math.PI / 4) + 50 - 10 * size; //45°
array_center[4][0].y = array_center[4][3].y + (koma_h / 2) * size * Math.sin(Math.PI / 4) + 50 - 10 * size; //45°
array[4][0].x -= (koma_w / 2) * size * Math.cos(Math.PI / 4) - 50 + 10 * size; //45°
array[4][0].y += (koma_h / 2) * size * Math.sin(Math.PI / 4) - 50 + 10 * size; //45°
array_center[5][0].x = array_center[5][1].x - (koma_w / 2) * size * Math.cos(Math.PI / 4) - 50 + 10 * size; //45°
array_center[5][0].y = array_center[5][1].y + (koma_h / 2) * size * Math.sin(Math.PI / 4) - 50 + 10 * size; //45°
array[5][0].x -= (koma_w / 2) * size * Math.cos(Math.PI / 4) - 50 + 10 * size; //45°
array[5][0].y += (koma_h / 2) * size * Math.sin(Math.PI / 4) - 50 + 10 * size; //45°
//選手データ2550
let subject_array = [];
//観客データ2550
let object_array = [];
//選手のdata
let data_array_sub_0 = [];
let data_array_sub_1 = [];
let data_array_sub_2 = [];
let data_array_sub_3 = [];
let data_array_sub_4 = [];
let data_array_sub_5 = [];
let data_array_sub_6 = [];
let data_array_sub_7 = [];
let data_array_sub_8 = [];
let data_array_sub_9 = [];
//観客のdata
let data_array_ob_0 = [];
let data_array_ob_1 = [];
let data_array_ob_2 = [];
let data_array_ob_3 = [];
let data_array_ob_4 = [];
let data_array_ob_5 = [];
let data_array_ob_6 = [];
let data_array_ob_7 = [];
let data_array_ob_8 = [];
let data_array_ob_9 = [];
//lr.coef_の値取得、テストデータ作成、特徴量として変換、
let formData_area = new FormData();
let xhr_area = new XMLHttpRequest();
xhr_area.open("POST", "../PHP/simulation.php");
xhr_area.addEventListener("loadend", function () {
  if (xhr_area.status === 200) {
    let data = JSON.parse(xhr_area.response);
    for (i = 0; i < data.length; i++) {
      if (data[i].type == 0) {
        //選手
        subject_array.push(data[i]);
      } else if (data[i].type == 1) {
        //観客
        object_array.push(data[i]);
      }
    }
    //選手データをペアごとに分ける各255
    for (i = 0; i < subject_array.length; i++) {
      switch (subject_array[i].left_player * subject_array[i].right_player) {
        case 6: //2-3
          data_array_sub_0.push(subject_array[i]);
          break;
        case 8: //2-4
          data_array_sub_1.push(subject_array[i]);
          break;
        case 10: //2-5
          data_array_sub_2.push(subject_array[i]);
          break;
        case 12: //2-6 3-4
          if (subject_array[i].left_player == 2 || subject_array[i].right_player == 2) {
            data_array_sub_3.push(subject_array[i]);
          } else {
            data_array_sub_4.push(subject_array[i]);
          }
          break;
        case 15: //3-5
          data_array_sub_5.push(subject_array[i]);
          break;
        case 18: //3-6
          data_array_sub_6.push(subject_array[i]);
          break;
        case 20: //4-5
          data_array_sub_7.push(subject_array[i]);
          break;
        case 24: //4-6
          data_array_sub_8.push(subject_array[i]);
          break;
        case 30: //5-6
          data_array_sub_9.push(subject_array[i]);
          break;
      }
    }
    //観客データをペアごとに分ける各255
    for (i = 0; i < object_array.length; i++) {
      switch (object_array[i].left_player * object_array[i].right_player) {
        case 6: //2-3
          data_array_ob_0.push(object_array[i]);
          break;
        case 8: //2-4
          data_array_ob_1.push(object_array[i]);
          break;
        case 10: //2-5
          data_array_ob_2.push(object_array[i]);
          break;
        case 12: //2-6 3-4
          if (object_array[i].left_player == 2 || object_array[i].right_player == 2) {
            data_array_ob_3.push(object_array[i]);
          } else {
            data_array_ob_4.push(object_array[i]);
          }
          break;
        case 15: //3-5
          data_array_ob_5.push(object_array[i]);
          break;
        case 18: //3-6
          data_array_ob_6.push(object_array[i]);
          break;
        case 20: //4-5
          data_array_ob_7.push(object_array[i]);
          break;
        case 24: //4-6
          data_array_ob_8.push(object_array[i]);
          break;
        case 30: //5-6
          data_array_ob_9.push(object_array[i]);
          break;
      }
    }
    collective();
  }
});
xhr_area.send(formData_area);
//経験年数
inputSliderEle = document.getElementById("experience_change");
inputSliderEle.addEventListener("change", function () {
  exp_level = inputSliderEle.value;
  collective();
});
//世代別表示
inputSlideBarElement = document.getElementById("generation_change");
inputSlideBarElement.addEventListener("change", function () {
  gene_level = inputSlideBarElement.value;
  collective();
});
//世代データ
let datakeep = [];
//最大世代数
let max_gene;
formData = new FormData();
xhr = new XMLHttpRequest();
xhr.open("GET", "../PHP/collective.php");
xhr.addEventListener("loadend", function () {
  if (xhr.status === 200) {
    let data = JSON.parse(xhr.response);
    if (xhr.response == "error") {
      console.log("通信に失敗しました。");
    }
    let gene = new Array();
    for (let i = 0; i < data[1][0][0]; i++) {
      gene[i] = Array();
    }
    for (let i = 0; i < data[1][0][0]; i++) {
      for (let j = 0; j < data[0].length; j++) {
        if (data[0][j].generation == i + 1) {
          gene[i].push(data[0][j]);
        }
      }
    }
    genekeep = gene;
    max_gene = genekeep.length;
    if (max_gene != 1) {
      document.getElementById("max_gene").innerHTML = max_gene + "世代目";
    }
    document.getElementById("generation_change").max = genekeep.length - 1;
  }
});
xhr.send(formData);
// 画像を読み込み終わってからソースを取得する
for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++) images[i][j].src = img[i][j];
}
for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++) blue_koma[i][j].src = blue_img[j];
}
for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++) red_koma[i][j].src = red_img[j];
}
//初期配置
// あなたの配置
for (let i = 0; i < 6; i++) {
  images[0][i].addEventListener("load", () => {
    my_ctx.drawImage(images[0][i], imagearray[0][i].x * scale, imagearray[0][i].y * scale, koma_w * size, koma_h * size);
  });
}
// 集合知
for (let i = 0; i < 6; i++) {
  images[0][i].addEventListener("load", () => {
    ot_ctx.drawImage(images[0][i], array[0][i].x * scale, array[0][i].y * scale, koma_w * size, koma_h * size);
  });
}
// 選手配置比較
for (let i = 0; i < 6; i++) {
  red_koma[0][i].addEventListener("load", () => {
    com_ctx.drawImage(red_koma[0][i], array[0][i].x * scale, array[0][i].y * scale, koma_w * size, koma_h * size);
    com_ctx.drawImage(blue_koma[0][i], imagearray[0][i].x * scale, imagearray[0][i].y * scale, koma_w * size, koma_h * size);
  });
}

//コマを表示する
function draw(rota) {
  // canvas内を一旦クリア
  my_ctx.clearRect(0, 0, my_can.width, my_can.height);
  for (var i in images) {
    let x = imagearray[rota][i].x * scale;
    let y = imagearray[rota][i].y * scale;
    let w = koma_w * size;
    let h = koma_h * size;
    my_ctx.drawImage(images[rota][i], x, y, w, h);
  }
  ot_ctx.clearRect(0, 0, ot_can.width, ot_can.height);
  for (var i in images) {
    let x = array[rota][i].x;
    let y = array[rota][i].y;
    let w = koma_w * size;
    let h = koma_h * size;
    ot_ctx.drawImage(images[rota][i], x * scale, y * scale, w, h);
  }
  if (check == 0) {
    com_ctx.clearRect(0, 0, com_can.width, ot_can.height);
    for (let i in images) {
      com_ctx.drawImage(red_koma[rota][i], array[rota][i].x * scale, array[rota][i].y * scale, koma_w * size, koma_h * size);
      com_ctx.drawImage(blue_koma[rota][i], imagearray[rota][i].x * scale, imagearray[rota][i].y * scale, koma_w * size, koma_h * size);
    }
  } else {
    com_ctx.clearRect(0, 0, com_can.width, ot_can.height);
    for (let i in images) {
      com_ctx.drawImage(blue_koma[rota][i], imagearray[rota][i].x * scale, imagearray[rota][i].y * scale, koma_w * size, koma_h * size);
    }
  }
}

//ローテーションボタンが押されたら
function rotation() {
  counter++;
  //6回目なら最初に戻す
  if (counter == 6) {
    counter = 0;
  }
  //コマとお見合い範囲を描画し直す
  my_ctx2.clearRect(0, 0, my_can2.width, my_can2.height);
  ot_ctx2.clearRect(0, 0, ot_can2.width, ot_can2.height);
  document.getElementById("rotation_image").src = rotation_images[counter];
  draw(counter);
  collective();
}

//お見合い範囲表示関数
function my_omiai(judge_area) {
  // canvasをクリア
  mycontextBit.clearRect(0, 0, mycontextBit.width, mycontextBit.height);
  my_ctx2.clearRect(0, 0, my_can2.width, my_can2.height);
  let k_sum = 0;
  let percentage = 0;
  for (xBit = 0; xBit < mywBit; ++xBit) {
    for (yBit = myhBit; yBit > 0; --yBit) {
      //RGBAのRを取得
      let base = (xBit + yBit * mywBit) * 4;
      //9~0のindexを取得
      let judge_index = 10 - Math.round(judge_area[k_sum].judge);
      if (judge_index != 10) {
        //Rの情報を操作
        myary_u8Bit[base] = 0;
        //Gの情報を操作
        myary_u8Bit[base + 1] = gradation[judge_index][1];
        //Bの情報を操作
        myary_u8Bit[base + 2] = 0;
        //Aの情報を操作
        myary_u8Bit[base + 3] = gradation[judge_index][3] * 255;
        percentage += gradation[judge_index][3];
      } else {
        //Rの情報を操作
        myary_u8Bit[base] = 0;
        //Gの情報を操作
        myary_u8Bit[base + 1] = 0;
        //Bの情報を操作
        myary_u8Bit[base + 2] = 0;
        //Aの情報を操作
        myary_u8Bit[base + 3] = 0;
      }
      k_sum++;
    }
  }
  //BitMapで描画
  mycontextBit.putImageData(myimage_dataBit, 0, 0);
  //コートに描画
  my_ctx2.drawImage(mycanvasBit, 40, 25, 7070, 7260);
  return percentage;
}
function ot_omiai(judge_area) {
  // canvasをクリア
  otcontextBit.clearRect(0, 0, otcontextBit.width, otcontextBit.height);
  ot_ctx2.clearRect(0, 0, ot_can2.width, ot_can2.height);
  let k_sum = 0;
  let percentage = 0;
  for (xBit = 0; xBit < otwBit; ++xBit) {
    for (yBit = othBit; yBit > 0; --yBit) {
      //RGBAのRを取得
      let base = (xBit + yBit * otwBit) * 4;
      //9~0のindexを取得
      let judge_index = 10 - Math.round(judge_area[k_sum].judge);
      if (judge_index != 10) {
        //Rの情報を操作s
        otary_u8Bit[base] = 0;
        //Gの情報を操作
        otary_u8Bit[base + 1] = gradation[judge_index][1];
        //Bの情報を操作
        otary_u8Bit[base + 2] = 0;
        //Aの情報を操作
        otary_u8Bit[base + 3] = gradation[judge_index][3] * 255;
        percentage += gradation[judge_index][3];
      } else {
        //Rの情報を操作
        otary_u8Bit[base] = 0;
        //Gの情報を操作
        otary_u8Bit[base + 1] = 0;
        //Bの情報を操作
        otary_u8Bit[base + 2] = 0;
        //Aの情報を操作
        otary_u8Bit[base + 3] = 0;
      }
      k_sum++;
    }
  }
  //BitMapで描画
  otcontextBit.putImageData(otimage_dataBit, 0, 0);
  //コートに描画
  ot_ctx2.drawImage(otcanvasBit, 40, 25, 7070, 7260);
  return percentage;
}

//条件に合わせてarea()を呼び出す
function collective() {
  let index = 100000;
  let k = 0;
  gene_level = Number(gene_level);
  document.getElementById("other4").style.backgroundImage = 'url("")';
  for (i = 0; i < genekeep[gene_level].length; i++) {
    if (genekeep[gene_level][i]["experience_years"] == exp_level && genekeep[gene_level][i]["rotation"] == counter) {
      index = i;
      break;
    }
  }
  if (index != 100000) {
    for (i = 0; i < 6; i++) {
      array[counter][i].x = genekeep[gene_level][index + i]["x_coordinate"];
      array[counter][i].y = genekeep[gene_level][index + i]["y_coordinate"];
      array_center[counter][i].x = array[counter][i].x + (koma_w / 2) * size;
      array_center[counter][i].y = array[counter][i].y + (koma_h / 2) * size;
    }
    //セッターの座標を修正
    array_center[3][0].x = array_center[3][5].x + (koma_w / 2) * size * Math.cos(Math.PI / 4) - 50 + 10 * size; //45°
    array_center[3][0].y = array_center[3][5].y + (koma_h / 2) * size * Math.sin(Math.PI / 4) - 50 + 10 * size; //45°
    array[3][0].x += (koma_w / 2) * size * Math.cos(Math.PI / 4) - 50 + 10 * size; //45°
    array[3][0].y += (koma_h / 2) * size * Math.sin(Math.PI / 4) - 50 + 10 * size; //45°

    array_center[4][0].x = array_center[4][3].x - (koma_w / 2) * size * Math.cos(Math.PI / 4) + 50 - 10 * size; //45°
    array_center[4][0].y = array_center[4][3].y + (koma_h / 2) * size * Math.sin(Math.PI / 4) + 50 - 10 * size; //45°
    array[4][0].x -= (koma_w / 2) * size * Math.cos(Math.PI / 4) - 50 + 10 * size; //45°
    array[4][0].y += (koma_h / 2) * size * Math.sin(Math.PI / 4) - 50 + 10 * size; //45°

    array_center[5][0].x = array_center[5][1].x - (koma_w / 2) * size * Math.cos(Math.PI / 4) - 50 + 10 * size; //45°
    array_center[5][0].y = array_center[5][1].y + (koma_h / 2) * size * Math.sin(Math.PI / 4) - 50 + 10 * size; //45°
    array[5][0].x -= (koma_w / 2) * size * Math.cos(Math.PI / 4) - 50 + 10 * size; //45°
    array[5][0].y += (koma_h / 2) * size * Math.sin(Math.PI / 4) - 50 + 10 * size; //45°
    check = 0;
    draw(counter);
    area(counter);
  } else {
    // 世代がなかった時の処理
    document.getElementById("other4").style.backgroundImage = 'url("../Picture/バレーコート背景3.png")';
    check = 1;
    draw(counter);
    area(counter);
  }
}

//お見合い範囲関数
function area() {
  //あなたの配置
  //選手お見合い範囲
  let my_judge_color_sub_0 = my_calculation(counter, data_array_sub_0);
  let my_judge_color_sub_1 = my_calculation(counter, data_array_sub_1);
  let my_judge_color_sub_2 = my_calculation(counter, data_array_sub_2);
  let my_judge_color_sub_3 = my_calculation(counter, data_array_sub_3);
  let my_judge_color_sub_4 = my_calculation(counter, data_array_sub_4);
  let my_judge_color_sub_5 = my_calculation(counter, data_array_sub_5);
  let my_judge_color_sub_6 = my_calculation(counter, data_array_sub_6);
  let my_judge_color_sub_7 = my_calculation(counter, data_array_sub_7);
  let my_judge_color_sub_8 = my_calculation(counter, data_array_sub_8);
  let my_judge_color_sub_9 = my_calculation(counter, data_array_sub_9);
  //観客お見合い範囲
  let my_judge_color_ob_0 = my_calculation(counter, data_array_ob_0);
  let my_judge_color_ob_1 = my_calculation(counter, data_array_ob_1);
  let my_judge_color_ob_2 = my_calculation(counter, data_array_ob_2);
  let my_judge_color_ob_3 = my_calculation(counter, data_array_ob_3);
  let my_judge_color_ob_4 = my_calculation(counter, data_array_ob_4);
  let my_judge_color_ob_5 = my_calculation(counter, data_array_ob_5);
  let my_judge_color_ob_6 = my_calculation(counter, data_array_ob_6);
  let my_judge_color_ob_7 = my_calculation(counter, data_array_ob_7);
  let my_judge_color_ob_8 = my_calculation(counter, data_array_ob_8);
  let my_judge_color_ob_9 = my_calculation(counter, data_array_ob_9);
  //集合知の配置
  //選手お見合い範囲
  let ot_judge_color_sub_0 = ot_calculation(counter, data_array_sub_0);
  let ot_judge_color_sub_1 = ot_calculation(counter, data_array_sub_1);
  let ot_judge_color_sub_2 = ot_calculation(counter, data_array_sub_2);
  let ot_judge_color_sub_3 = ot_calculation(counter, data_array_sub_3);
  let ot_judge_color_sub_4 = ot_calculation(counter, data_array_sub_4);
  let ot_judge_color_sub_5 = ot_calculation(counter, data_array_sub_5);
  let ot_judge_color_sub_6 = ot_calculation(counter, data_array_sub_6);
  let ot_judge_color_sub_7 = ot_calculation(counter, data_array_sub_7);
  let ot_judge_color_sub_8 = ot_calculation(counter, data_array_sub_8);
  let ot_judge_color_sub_9 = ot_calculation(counter, data_array_sub_9);
  //観客お見合い範囲
  let ot_judge_color_ob_0 = ot_calculation(counter, data_array_ob_0);
  let ot_judge_color_ob_1 = ot_calculation(counter, data_array_ob_1);
  let ot_judge_color_ob_2 = ot_calculation(counter, data_array_ob_2);
  let ot_judge_color_ob_3 = ot_calculation(counter, data_array_ob_3);
  let ot_judge_color_ob_4 = ot_calculation(counter, data_array_ob_4);
  let ot_judge_color_ob_5 = ot_calculation(counter, data_array_ob_5);
  let ot_judge_color_ob_6 = ot_calculation(counter, data_array_ob_6);
  let ot_judge_color_ob_7 = ot_calculation(counter, data_array_ob_7);
  let ot_judge_color_ob_8 = ot_calculation(counter, data_array_ob_8);
  let ot_judge_color_ob_9 = ot_calculation(counter, data_array_ob_9);
  //10パターンを足し合わせる
  let my_judge_color_sub = color_sub(
    my_judge_color_sub_0,
    my_judge_color_sub_1,
    my_judge_color_sub_2,
    my_judge_color_sub_3,
    my_judge_color_sub_4,
    my_judge_color_sub_5,
    my_judge_color_sub_6,
    my_judge_color_sub_7,
    my_judge_color_sub_8,
    my_judge_color_sub_9,
    my_judge_color_sub_0
  );
  let my_judge_color_ob = color_sub(
    my_judge_color_ob_0,
    my_judge_color_ob_1,
    my_judge_color_ob_2,
    my_judge_color_ob_3,
    my_judge_color_ob_4,
    my_judge_color_ob_5,
    my_judge_color_ob_6,
    my_judge_color_ob_7,
    my_judge_color_ob_8,
    my_judge_color_ob_9,
    my_judge_color_ob_0
  );
  let ot_judge_color_sub = color_sub(
    ot_judge_color_sub_0,
    ot_judge_color_sub_1,
    ot_judge_color_sub_2,
    ot_judge_color_sub_3,
    ot_judge_color_sub_4,
    ot_judge_color_sub_5,
    ot_judge_color_sub_6,
    ot_judge_color_sub_7,
    ot_judge_color_sub_8,
    ot_judge_color_sub_9,
    ot_judge_color_sub_0
  );
  let ot_judge_color_ob = color_sub(
    ot_judge_color_ob_0,
    ot_judge_color_ob_1,
    ot_judge_color_ob_2,
    ot_judge_color_ob_3,
    ot_judge_color_ob_4,
    ot_judge_color_ob_5,
    ot_judge_color_ob_6,
    ot_judge_color_ob_7,
    ot_judge_color_ob_8,
    ot_judge_color_ob_9,
    ot_judge_color_ob_0
  );
  //選手・観客で割合変化
  let my_judge_color_merge = merge(my_judge_color_sub, my_judge_color_ob);
  let ot_judge_color_merge = merge(ot_judge_color_sub, ot_judge_color_ob);
  //お見合い範囲計算結果を渡す
  let my_area_percentage = my_omiai(my_judge_color_merge);
  let ot_area_percentage = ot_omiai(ot_judge_color_merge);
  let my_percent = percent(my_area_percentage);
  let ot_percent = percent(ot_area_percentage);
  function percent(area_percentage) {
    if (isNaN(area_percentage)) {
      area_percentage = 0;
    }
    area_percentage = (area_percentage / 2116) * 100;
    area_percentage = area_percentage.toFixed(1);
    area_percentage = String(area_percentage);
    area_percentage = area_percentage + "%";
    return area_percentage;
  }
  document.getElementById("my_area_percentage").innerHTML = my_percent;
  if (check == 0) {
    document.getElementById("ot_area_percentage").innerHTML = ot_percent;
  } else {
    document.getElementById("ot_area_percentage").innerHTML = "－%";
  }
}

//judgeのアナログ値を足し合わせる
function color_sub(j0, j1, j2, j3, j4, j5, j6, j7, j8, j9, judge_sum) {
  for (i = 0; i < j0.length; i++) {
    judge_sum[i].judge = j0[i].judge + j1[i].judge + j2[i].judge + j3[i].judge + j4[i].judge + j5[i].judge + j6[i].judge + j7[i].judge + j8[i].judge + j9[i].judge;
  }
  return judge_sum;
}

//お見合い範囲変化
function merge(sub, ob) {
  let sum_judge = sub;
  for (i = 0; i < sub.length; i++) {
    sum_judge[i].judge = (sub[i].judge + ob[i].judge) / 2;
  }
  return sum_judge;
}

//お見合い範囲を計算
function my_calculation(rota, data) {
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
  let my_player1_x = (my_imagearray_center[rota][data[0].left_player - 1].x + 50) / (1200 / 9);
  let my_player1_y = (my_imagearray_center[rota][data[0].left_player - 1].y + 50) / (1200 / 9) - 9;
  my_player1_y = Math.abs(my_player1_y);
  //右の選手
  let my_player2_x = (my_imagearray_center[rota][data[0].right_player - 1].x + 50) / (1200 / 9);
  let my_player2_y = (my_imagearray_center[rota][data[0].right_player - 1].y + 50) / (1200 / 9) - 9;
  my_player2_y = Math.abs(my_player2_y);
  let reverce = 0;
  if (my_player1_x > my_player2_x) {
    my_player1_x = 9 - my_player1_x;
    my_player2_x = 9 - my_player2_x;
    reverce = 1;
  }
  for (i = 0; i < 9.2; i += 0.2) {
    for (j = 0; j < 9.2; j += 0.2) {
      let data_tmp = {};
      data_tmp.my_players_sabun_x = my_player1_x - my_player2_x;
      data_tmp.my_players_sabun_y = my_player1_y - my_player2_y;
      data_tmp.my_player1_ball_sabun_x = my_player1_x - i;
      data_tmp.my_player1_ball_sabun_y = my_player1_y - j;
      data_tmp.my_player2_ball_sabun_x = my_player2_x - i;
      data_tmp.my_player2_ball_sabun_y = my_player2_y - j;
      test_data.push(data_tmp);

      let data_view = {};
      data_view.ball_x = i;
      data_view.ball_y = j;
      data_view.judge = 100;
      judge_color.push(data_view);
    }
  }
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
    test_data[i].my_players_sabun_x = (test_data[i].my_players_sabun_x - mean[0]) / std[0];
    test_data[i].my_players_sabun_y = (test_data[i].my_players_sabun_y - mean[1]) / std[1];
    test_data[i].my_player1_ball_sabun_x = (test_data[i].my_player1_ball_sabun_x - mean[2]) / std[2];
    test_data[i].my_player1_ball_sabun_y = (test_data[i].my_player1_ball_sabun_y - mean[3]) / std[3];
    test_data[i].my_player2_ball_sabun_x = (test_data[i].my_player2_ball_sabun_x - mean[4]) / std[4];
    test_data[i].my_player2_ball_sabun_y = (test_data[i].my_player2_ball_sabun_y - mean[5]) / std[5];
  }
  let blue = [];
  let red = [];
  let green = [];
  let answer = [];
  for (o = 0; o < test_data.length; o++) {
    answer.push(
      sum(
        test_data[o].my_players_sabun_x,
        test_data[o].my_players_sabun_y,
        test_data[o].my_player1_ball_sabun_x,
        test_data[o].my_player1_ball_sabun_y,
        test_data[o].my_player2_ball_sabun_x,
        test_data[o].my_player2_ball_sabun_y
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
function ot_calculation(rota, data) {
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
  let ot_player1_x = (array_center[rota][data[0].left_player - 1].x + 50) / (1200 / 9);
  let ot_player1_y = (array_center[rota][data[0].left_player - 1].y + 50) / (1200 / 9) - 9;
  ot_player1_y = Math.abs(ot_player1_y);
  //右の選手
  let ot_player2_x = (array_center[rota][data[0].right_player - 1].x + 50) / (1200 / 9);
  let ot_player2_y = (array_center[rota][data[0].right_player - 1].y + 50) / (1200 / 9) - 9;
  ot_player2_y = Math.abs(ot_player2_y);
  let reverce = 0;
  if (ot_player1_x > ot_player2_x) {
    ot_player1_x = 9 - ot_player1_x;
    ot_player2_x = 9 - ot_player2_x;
    reverce = 1;
  }
  for (i = 0; i < 9.2; i += 0.2) {
    for (j = 0; j < 9.2; j += 0.2) {
      let data_tmp = {};
      data_tmp.ot_players_sabun_x = ot_player1_x - ot_player2_x;
      data_tmp.ot_players_sabun_y = ot_player1_y - ot_player2_y;
      data_tmp.ot_player1_ball_sabun_x = ot_player1_x - i;
      data_tmp.ot_player1_ball_sabun_y = ot_player1_y - j;
      data_tmp.ot_player2_ball_sabun_x = ot_player2_x - i;
      data_tmp.ot_player2_ball_sabun_y = ot_player2_y - j;
      test_data.push(data_tmp);

      let data_view = {};
      data_view.ball_x = i;
      data_view.ball_y = j;
      data_view.judge = 100;
      judge_color.push(data_view);
    }
  }

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
    test_data[i].ot_players_sabun_x = (test_data[i].ot_players_sabun_x - mean[0]) / std[0];
    test_data[i].ot_players_sabun_y = (test_data[i].ot_players_sabun_y - mean[1]) / std[1];
    test_data[i].ot_player1_ball_sabun_x = (test_data[i].ot_player1_ball_sabun_x - mean[2]) / std[2];
    test_data[i].ot_player1_ball_sabun_y = (test_data[i].ot_player1_ball_sabun_y - mean[3]) / std[3];
    test_data[i].ot_player2_ball_sabun_x = (test_data[i].ot_player2_ball_sabun_x - mean[4]) / std[4];
    test_data[i].ot_player2_ball_sabun_y = (test_data[i].ot_player2_ball_sabun_y - mean[5]) / std[5];
  }
  let blue = [];
  let red = [];
  let green = [];
  let answer = [];
  for (o = 0; o < test_data.length; o++) {
    answer.push(
      sum(
        test_data[o].ot_players_sabun_x,
        test_data[o].ot_players_sabun_y,
        test_data[o].ot_player1_ball_sabun_x,
        test_data[o].ot_player1_ball_sabun_y,
        test_data[o].ot_player2_ball_sabun_x,
        test_data[o].ot_player2_ball_sabun_y
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