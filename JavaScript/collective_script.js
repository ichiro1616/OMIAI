let str = localStorage.getItem('key');
let imagearray = JSON.parse(str);
let my_imagearray_center = JSON.parse(str);
console.log(imagearray);
//コマの座標（左上基準）
let array = [
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
let my_can; //自分の配置を表示するキャンバス
let ot_can; //選択した配置を表示するキャンバス
let com_can; //コマを重ねて表示するキャンバス
let data = 0;
let gene_level = 0;
let exp_level = 0;
let counter = 0;
let size = 1; //メイン画面のコマの大きさの倍率
let koma_w = 100; //コマの横幅
let koma_h = 100; //コマの高さ
let scale = 610 / 1200; //my_canとcanvasの比
let genekeep; // 世代 別で区切った配列

window.onclick = canvas_draw();
area(counter);

function canvas_draw() {
  //自分の配置koma
  my_can = document.getElementById('my'); //キャンバスのidを取得
  my_ctx = my_can.getContext('2d');//キャンバスの2Dコンテキストを取得
  //他の配置・集合知koma
  ot_can = document.getElementById('other');
  ot_ctx = ot_can.getContext('2d');
  //自分と他の重ねた配置
  com_can = document.getElementById('comparison2');
  com_ctx = com_can.getContext('2d');
}
//自分の配置canvas
let my_can3 = document.getElementById('my3'); //キャンバスのidを取得
my_ctx3 = my_can.getContext('2d');//キャンバスの2Dコンテキストを取得
//他の配置・集合知canvas
let ot_can3 = document.getElementById('other3');
ot_ctx3 = ot_can.getContext('2d');
my_ctx3.globalAlpha = 1;
ot_ctx3.globalAlpha = 1;
com_ctx.globalAlpha = 0.8;

//画像パス
const path = ['../Picture/koma/0/2-1.png', //けんすけ
  '../Picture/koma/1/front/2-2.png', '../Picture/koma/1/back/2-2.png', //るい
  '../Picture/koma/2/front/2-3.png', '../Picture/koma/2/back/2-3.png', //ひなた
  '../Picture/koma/3/front/2-4.png', '../Picture/koma/3/back/2-4.png', //けんと
  '../Picture/koma/4/front/2-5.png', '../Picture/koma/4/back/2-5.png', //りく
  '../Picture/koma/5/front/2-6.png', '../Picture/koma/5/back/2-6.png', //けいすけ
  '../Picture/koma/red.png', '../Picture/koma/blue.png',
];
const img = [[path[0], path[1], path[3], path[6], path[8], path[10]],
[path[0], path[1], path[4], path[6], path[8], path[9]],
[path[0], path[2], path[4], path[6], path[7], path[9]],
[path[0], path[2], path[4], path[5], path[7], path[9]],
[path[0], path[2], path[3], path[5], path[7], path[10]],
[path[0], path[1], path[3], path[5], path[8], path[10]]];
const blue_img = path[11];
const red_img = path[12];

//コマの中心の座標を用意
for (var i in imagearray) {
  for (var j in imagearray[i]) {
    my_imagearray_center[i][j].x += koma_w / 2 * size;
    my_imagearray_center[i][j].y += koma_h / 2 * size;
  }
}

//セッターの座標を修正
my_imagearray_center[3][0].x = my_imagearray_center[3][5].x + koma_w / 2 * size * Math.cos(Math.PI / 4) - 50 + 10 * size;//45°
my_imagearray_center[3][0].y = my_imagearray_center[3][5].y + koma_h / 2 * size * Math.sin(Math.PI / 4) - 50 + 10 * size;//45°
imagearray[3][0].x += koma_w / 2 * size * Math.cos(Math.PI / 4) - 50 + 10 * size;//45°
imagearray[3][0].y += koma_h / 2 * size * Math.sin(Math.PI / 4) - 50 + 10 * size;//45°

my_imagearray_center[4][0].x = my_imagearray_center[4][3].x - koma_w / 2 * size * Math.cos(Math.PI / 4) + 50 - 10 * size;//45°
my_imagearray_center[4][0].y = my_imagearray_center[4][3].y + koma_h / 2 * size * Math.sin(Math.PI / 4) + 50 - 10 * size;//45°
imagearray[4][0].x -= koma_w / 2 * size * Math.cos(Math.PI / 4) - 50 + 10 * size;//45°
imagearray[4][0].y += koma_h / 2 * size * Math.sin(Math.PI / 4) - 50 + 10 * size;//45°

my_imagearray_center[5][0].x = my_imagearray_center[5][1].x - koma_w / 2 * size * Math.cos(Math.PI / 4) - 50 + 10 * size;//45°
my_imagearray_center[5][0].y = my_imagearray_center[5][1].y + koma_h / 2 * size * Math.sin(Math.PI / 4) - 50 + 10 * size;//45°
imagearray[5][0].x -= koma_w / 2 * size * Math.cos(Math.PI / 4) - 50 + 10 * size;//45°
imagearray[5][0].y += koma_h / 2 * size * Math.sin(Math.PI / 4) - 50 + 10 * size;//45°


let images = new Array(6); //要素数6の配列imagesを作成
for (var i = 0; i < 6; i++) {
  images[i] = new Array(6).fill(0);
}
for (var i = 0; i < 6; i++) { //ローテーション
  for (var j = 0; j < 6; j++) { //コマ番号
    images[i][j] = new Image();
  }
}

let blue_koma = new Array(6); //要素数6の配列imagesを作成
for (var i = 0; i < 6; i++) {
  blue_koma[i] = new Array(6).fill(0);
}
for (var i = 0; i < 6; i++) { //ローテーション
  for (var j = 0; j < 6; j++) { //コマ番号
    blue_koma[i][j] = new Image();
  }
}
let red_koma = new Array(6); //要素数6の配列imagesを作成
for (var i = 0; i < 6; i++) {
  red_koma[i] = new Array(6).fill(0);
}
for (var i = 0; i < 6; i++) { //ローテーション
  for (var j = 0; j < 6; j++) { //コマ番号
    red_koma[i][j] = new Image();
  }
}

//経験年数
inputSliderEle = document.getElementById('experience_change');
inputSliderEle.addEventListener('change', function () {
  exp_level = inputSliderEle.value;
  console.log(exp_level);
  collective();
});

//世代別表示
inputSlideBarElement = document.getElementById('generation_change');
inputSlideBarElement.addEventListener('change', function () {
  gene_level = inputSlideBarElement.value;
  console.log(gene_level);
  collective();
});

let datakeep = [];
formData = new FormData();
xhr = new XMLHttpRequest();
xhr.open("GET", "/PHP/collective.php");
xhr.addEventListener("loadend", function () {
  if (xhr.status === 200) {
    let data = JSON.parse(xhr.response);
    console.log('data', data);
    if (xhr.response == "error") {
      console.log("通信に失敗しました。");
    }
    console.log(data[1]);
    let gene = new Array();
    for (let i = 0; i < data[1][0][0]; i++) {
      gene[i] = Array();
    }
    for (let i = 0; i < data[1][0][0]; i++) {
      for (let j = 0; j < data[0].length; j++) {
        if (data[0][j].generation == i) {
          gene[i].push(data[0][j])
        }
      }
    }
    console.log('generation', gene);
    genekeep = gene;
    document.getElementById("generation_change").max = genekeep.length;
  }
  collective();
});
xhr.send(formData)

//初期配置
// あなたの配置
for (let i = 0; i < 6; i++) {
  images[0][i].addEventListener('load', () => {
    my_ctx.drawImage(images[0][i], imagearray[0][i].x * scale, imagearray[0][i].y * scale, koma_w * size, koma_h * size)
  })
}

// 集合知
for (let i = 0; i < 6; i++) {
  images[0][i].addEventListener('load', () => {
    ot_ctx.drawImage(images[0][i], array[0][i].x * scale, array[0][i].y * scale, koma_w * size, koma_h * size)
  })
}
// 選手配置比較
for (let i = 0; i < 6; i++) {
  red_koma[0][i].addEventListener('load', () => {
    com_ctx.drawImage(blue_koma[0][i], array[0][i].x * scale, array[0][i].y * scale, koma_w * size, koma_h * size)
    com_ctx.drawImage(red_koma[0][i], imagearray[0][i].x * scale, imagearray[0][i].y * scale, koma_w * size, koma_h * size)
  });
}
// 画像を読み込み終わってからソースを取得する
for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++)
    images[i][j].src = img[i][j];
}
for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++)
    blue_koma[i][j].src = blue_img;
}
for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++)
    red_koma[i][j].src = red_img;
}

//画像を表示する
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

  com_ctx.clearRect(0, 0, com_can.width, ot_can.height);
  for (var i in images) {
    com_ctx.drawImage(blue_koma[rota][i], array[rota][i].x * scale, array[rota][i].y * scale, koma_w * size, koma_h * size);
    com_ctx.drawImage(red_koma[rota][i], imagearray[rota][i].x * scale, imagearray[rota][i].y * scale, koma_w * size, koma_h * size);
  }

}
//ローテーションボタンを押されたら
function rotation() {
  counter++;
  //6回目なら最初に戻す
  if (counter == 6) {
    counter = 0;
  }
  console.log("ローテーション", counter);
  draw(counter);
  collective();
  area(counter)
}

const my_can2 = document.getElementById('my2');
const my_ctx2 = my_can2.getContext('2d');
const ot_can2 = document.getElementById('other2');
const ot_ctx2 = ot_can2.getContext('2d');
const omiai_color = '#00EA5F';//お見合い範囲の色 #00EA5F
// const red = '';
// const blue = '';
my_ctx2.fillStyle = omiai_color;//色
ot_ctx2.fillStyle = omiai_color;
my_ctx2.globalAlpha = 0.4;//不透明度 0.7
ot_ctx2.globalAlpha = 0.4;
let originX = 39;
let originY = 571.5;
let endX = 571.5;
let endY = 39;
let pixel_sizeX = (endX - originX) / 46;//1ドットの大きさ（単位[m]）　横幅
let pixel_sizeY = (originY - endY) / 46;//1ドットの大きさ（単位[m])　縦幅
originY = originY - pixel_sizeY;//1ドットの大きさ分引く
endX = endX - pixel_sizeX;//1ドットの大きさ分引く
let overlap = 3;

function omiai(judge_area,rota) {
  my_ctx2.clearRect(0, 0, my_can2.width, my_can2.height);
  ot_ctx2.clearRect(0, 0, ot_can2.width, ot_can2.height);
  let k = 0;
  let l = 0;
  let my_percentage = 0;
  let ot_percentege = 0;
  for (let i = 0; i < 46; i++) {//x
    for (let j = 0; j < 46; j++) {//y
      if (judge_area[k].judge >= overlap || judge_area[k].judge == 1) {//後で2に
        my_ctx2.fillRect(originX + i * pixel_sizeX, originY - j * pixel_sizeY, pixel_sizeX, pixel_sizeY);//塗る範囲(x,y,塗る幅,塗る高さ)
        my_percentage++;
      }
      k++;
    }
  }
  for (let i = 0; i < 46; i++) {
    for (let j = 0; j < 46; j++) {
      if (judge_area[l].judge == 2) {
        ot_ctx2.fillRect(originX + i * pixel_sizeX, originY - j * pixel_sizeY, pixel_sizeX, pixel_sizeY);
        ot_percentege++;
      }
      l++;
    }
  }
  return my_percentage;
}

function collective() {
  let index = 100000;
  gene_level = Number(gene_level);
  console.log(exp_level, gene_level, counter, genekeep[gene_level].length);
  for (i = 0; i < genekeep[gene_level].length; i++) {
    if (genekeep[gene_level][i]["experience_years"] == exp_level && genekeep[gene_level][i]["rotation"] == counter + 1) {
      index = i;
      break;
    }
  }
  if (index != 100000) {
    for (i = 0; i < 5; i++) {
      console.log(genekeep[gene_level][index + i]["x_coordinate"], genekeep[gene_level][index + i]["y_coordinate"]);
      array[counter][i + 1].x = genekeep[gene_level][index + i]["x_coordinate"];
      array[counter][i + 1].y = genekeep[gene_level][index + i]["y_coordinate"];
    }
    draw(counter);
  } else {
  }
}

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
      console.log('data', data[0].type);
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

      console.log('----------------------------');
      //10パターンの重なってるところ 10+結果用の+1
      //judge_color_sub_0, judge_color_sub_1, judge_color_sub_2, judge_color_sub_3, judge_color_sub_4, judge_color_sub_5, judge_color_sub_6, judge_color_sub_7, judge_color_sub_8, judge_color_sub_9, judge_color_sub_0
      let judge_color_sub = color_sub(judge_color_sub_0, judge_color_sub_1, judge_color_sub_2, judge_color_sub_3, judge_color_sub_4, judge_color_sub_5, judge_color_sub_6, judge_color_sub_7, judge_color_sub_8, judge_color_sub_9, judge_color_sub_0);
      // let judge_color_ob = color_sub(judge_color_ob_0, judge_color_ob_1, judge_color_ob_2, judge_color_ob_3, judge_color_ob_4, judge_color_ob_5, judge_color_ob_6, judge_color_ob_7, judge_color_ob_8, judge_color_ob_9, judge_color_ob_0);

      //主観的・客観的で割合変化 judge_color_sub, judge_color_ob, subject_object_level
      let judge_color_merge = merge(judge_color_sub, omiaiarea);
      let my_area_percentage = omiai(judge_color_merge, rota);
      //お見合い範囲judge_colorを渡す 今はテストでjudge_color_subを渡しているが本来は変化割合調整バーで重みづけして１つにしたもの
      // let area_percentage = omiai(judge_color_sub_1, rota)
      let my_percent = percent(my_area_percentage);
      let ot_percent = percent(ot_area_percentage);
      function percent(area_percentage) {
        if(isNaN(area_percentage)){
          area_percentage = 0;
        }
        area_percentage = area_percentage / 2116 * 100;
        area_percentage = String(area_percentage);
        area_percentage = parseInt(area_percentage, 10);
        area_percentage = area_percentage + '%';
        return area_percentage;
      }
      document.getElementById('my_area_percentage').innerHTML = my_percent;
      document.getElementById('ot_area_percentage').innerHTML = ot_percent;
    }
  });
  xhr_area.send(formData_area);
}

function color_sub(j0, j1, j2, j3, j4, j5, j6, j7, j8, j9, judge_sum) {
  for (i = 0; i < j1.length; i++) {
    if (j0[i].judge == 2 || j1[i].judge == 2 || j2[i].judge == 2 || j3[i].judge == 2 || j4[i].judge == 2 || j5[i].judge == 2 || j6[i].judge == 2 || j7[i].judge == 2 || j8[i].judge == 2 || j9[i].judge == 2) {
      let j_count = 0;
      if (j0[i].judge == 2) {
        j_count++;
      }
      if (j1[i].judge == 2) {
        j_count++;
      }
      if (j2[i].judge == 2) {
        j_count++;
      }
      if (j3[i].judge == 2) {
        j_count++;
      }
      if (j4[i].judge == 2) {
        j_count++;
      }
      if (j5[i].judge == 2) {
        j_count++;
      }
      if (j6[i].judge == 2) {
        j_count++;
      }
      if (j7[i].judge == 2) {
        j_count++;
      }
      if (j8[i].judge == 2) {
        j_count++;
      }
      if (j9[i].judge == 2) {
        j_count++;
      }
      judge_sum[i].judge = j_count;
    } else {
      judge_sum[i].judge = 0;
    }
  }
  return judge_sum;
}

function merge(sub, ob) {
  let sum_judge = sub;
  for (i = 0; i < sub.length; i++) {
    if (sub[i].judge >= overlap && ob[i].judge >= overlap) {
      sum_judge[i].judge = sub[i].judge;
    } else {
      sum_judge[i].judge = 0;
    }
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

  // //左の選手
  // let ot_player1_x = (my_imagearray_center[rota][data[0].left_player - 1].x + 50) / (1200 / 9);
  // let ot_player1_y = (my_imagearray_center[rota][data[0].left_player - 1].y + 50) / (1200 / 9) - 9;
  // ot_player1_y = Math.abs(my_player1_y);

  // //右の選手
  // let ot_player2_x = (my_imagearray_center[rota][data[0].right_player - 1].x + 50) / (1200 / 9);
  // let ot_player2_y = (my_imagearray_center[rota][data[0].right_player - 1].y + 50) / (1200 / 9) - 9;
  // ot_player2_y = Math.abs(my_player2_y);



  console.log('左ｘ', my_player1_x);
  console.log('左ｙ', my_player1_y);
  console.log('右ｘ', my_player2_x);
  console.log('右ｙ', my_player2_y);

  let reverce = 0;
  if (my_player1_x > my_player2_x) {
    // idでの条件を描く
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
    test_data[i].my_players_sabun_x = (test_data[i].my_players_sabun_x - mean[0]) / std[0];
    test_data[i].my_players_sabun_y = (test_data[i].my_players_sabun_y - mean[1]) / std[1];
    test_data[i].my_player1_ball_sabun_x = (test_data[i].my_player1_ball_sabun_x - mean[2]) / std[2];
    test_data[i].my_player1_ball_sabun_y = (test_data[i].my_player1_ball_sabun_y - mean[3]) / std[3];
    test_data[i].my_player2_ball_sabun_x = (test_data[i].my_player2_ball_sabun_x - mean[4]) / std[4];
    test_data[i].my_player2_ball_sabun_y = (test_data[i].my_player2_ball_sabun_y - mean[5]) / std[5];
  }

  // console.log(test_data);

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
  // console.log(answer);
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
    aa = 1 / (1 + Math.exp(-b));
    bb = 1 / (1 + Math.exp(-r));
    cc = 1 / (1 + Math.exp(-g));
    blue.push(aa);
    red.push(bb);
    green.push(cc);
  }

  judge_array = [0, 0, 0];
  for (i = 0; i < blue.length; i++) {
    judge = [blue[i], red[i], green[i]];
    judge_color[i].judge = judge.lastIndexOf(Math.max(...judge));
    judge_array[judge_color[i].judge] += 1;
    judge.length = 0;
  }
  let counter = 1;
  if (reverce == 1) {
    for (i = 0; i < judge_color.length / 2; i++) {
      let keep = judge_color[i]["judge"];
      judge_color[i]["judge"] = judge_color[judge_color.length - counter]["judge"];
      judge_color[judge_color.length - counter]["judge"] = keep;
      counter++;
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
                  // console.log("k", k, "j", j, "i", i, "answer", box[j - 1][k] * i, "counter_j", counter_j, "box[j-1]", box[j - 1]);
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
let omiaiarea = [
  {
    "ball_x": 0,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 5.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 5.600000000000002,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 5.8000000000000025,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 6.000000000000003,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 6.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 0,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 5.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 5.600000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 5.8000000000000025,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 6.000000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 6.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 0.2,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 5.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 5.600000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 5.8000000000000025,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 6.000000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 6.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 0.4,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 5.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 5.600000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 5.8000000000000025,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 6.000000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 6.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 0.6000000000000001,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 5.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 5.600000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 5.8000000000000025,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 6.000000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 6.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 0.8,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 5.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 5.600000000000002,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 5.8000000000000025,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 6.000000000000003,
    "judge": 1
  },
  {
    "ball_x": 1,
    "ball_y": 6.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 1,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 0,
    "judge": 1
  },
  {
    "ball_x": 1.2,
    "ball_y": 0.2,
    "judge": 1
  },
  {
    "ball_x": 1.2,
    "ball_y": 0.4,
    "judge": 1
  },
  {
    "ball_x": 1.2,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 5.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 5.600000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 5.8000000000000025,
    "judge": 1
  },
  {
    "ball_x": 1.2,
    "ball_y": 6.000000000000003,
    "judge": 1
  },
  {
    "ball_x": 1.2,
    "ball_y": 6.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 1.2,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 0,
    "judge": 2
  },
  {
    "ball_x": 1.4,
    "ball_y": 0.2,
    "judge": 2
  },
  {
    "ball_x": 1.4,
    "ball_y": 0.4,
    "judge": 2
  },
  {
    "ball_x": 1.4,
    "ball_y": 0.6000000000000001,
    "judge": 2
  },
  {
    "ball_x": 1.4,
    "ball_y": 0.8,
    "judge": 2
  },
  {
    "ball_x": 1.4,
    "ball_y": 1,
    "judge": 2
  },
  {
    "ball_x": 1.4,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 5.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 5.600000000000002,
    "judge": 1
  },
  {
    "ball_x": 1.4,
    "ball_y": 5.8000000000000025,
    "judge": 1
  },
  {
    "ball_x": 1.4,
    "ball_y": 6.000000000000003,
    "judge": 1
  },
  {
    "ball_x": 1.4,
    "ball_y": 6.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 1.4,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 0,
    "judge": 2
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 0.2,
    "judge": 2
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 0.4,
    "judge": 2
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 0.6000000000000001,
    "judge": 2
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 0.8,
    "judge": 2
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 1,
    "judge": 2
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 1.2,
    "judge": 2
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 1.4,
    "judge": 2
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 1.5999999999999999,
    "judge": 2
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 1.7999999999999998,
    "judge": 1
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 1.9999999999999998,
    "judge": 1
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 2.1999999999999997,
    "judge": 1
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 2.4,
    "judge": 1
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 5.400000000000002,
    "judge": 1
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 5.600000000000002,
    "judge": 1
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 5.8000000000000025,
    "judge": 1
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 6.000000000000003,
    "judge": 1
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 6.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 1.5999999999999999,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 0,
    "judge": 2
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 0.2,
    "judge": 2
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 0.4,
    "judge": 2
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 0.6000000000000001,
    "judge": 2
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 0.8,
    "judge": 2
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 1,
    "judge": 2
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 1.2,
    "judge": 2
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 1.4,
    "judge": 2
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 1.5999999999999999,
    "judge": 2
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 1.7999999999999998,
    "judge": 2
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 1.9999999999999998,
    "judge": 2
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 2.1999999999999997,
    "judge": 2
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 2.4,
    "judge": 2
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 2.6,
    "judge": 1
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 2.8000000000000003,
    "judge": 1
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 3.0000000000000004,
    "judge": 1
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 3.2000000000000006,
    "judge": 1
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 3.400000000000001,
    "judge": 1
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 5.200000000000002,
    "judge": 1
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 5.400000000000002,
    "judge": 1
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 5.600000000000002,
    "judge": 1
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 5.8000000000000025,
    "judge": 1
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 6.000000000000003,
    "judge": 1
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 6.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 1.7999999999999998,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 0,
    "judge": 2
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 0.2,
    "judge": 2
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 0.4,
    "judge": 2
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 0.6000000000000001,
    "judge": 2
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 0.8,
    "judge": 2
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 1,
    "judge": 2
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 1.2,
    "judge": 2
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 1.4,
    "judge": 2
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 1.5999999999999999,
    "judge": 2
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 1.7999999999999998,
    "judge": 2
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 1.9999999999999998,
    "judge": 2
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 2.1999999999999997,
    "judge": 2
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 2.4,
    "judge": 2
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 2.6,
    "judge": 2
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 2.8000000000000003,
    "judge": 2
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 3.0000000000000004,
    "judge": 2
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 3.2000000000000006,
    "judge": 1
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 3.400000000000001,
    "judge": 1
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 3.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 3.800000000000001,
    "judge": 1
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 4.000000000000001,
    "judge": 1
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 4.200000000000001,
    "judge": 1
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 5.000000000000002,
    "judge": 1
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 5.200000000000002,
    "judge": 1
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 5.400000000000002,
    "judge": 1
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 5.600000000000002,
    "judge": 1
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 5.8000000000000025,
    "judge": 1
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 6.000000000000003,
    "judge": 1
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 6.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 1.9999999999999998,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 0,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 0.2,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 0.4,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 0.6000000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 0.8,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 1,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 1.2,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 1.4,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 1.5999999999999999,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 1.7999999999999998,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 1.9999999999999998,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 2.1999999999999997,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 2.4,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 2.6,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 2.8000000000000003,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 3.0000000000000004,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 3.2000000000000006,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 3.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 3.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 3.800000000000001,
    "judge": 1
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 4.000000000000001,
    "judge": 1
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 4.200000000000001,
    "judge": 1
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 4.400000000000001,
    "judge": 1
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 4.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 4.800000000000002,
    "judge": 1
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 5.000000000000002,
    "judge": 1
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 5.200000000000002,
    "judge": 1
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 5.400000000000002,
    "judge": 1
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 5.600000000000002,
    "judge": 1
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 5.8000000000000025,
    "judge": 1
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 6.000000000000003,
    "judge": 1
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 6.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 2.1999999999999997,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 2.4,
    "ball_y": 0,
    "judge": 1
  },
  {
    "ball_x": 2.4,
    "ball_y": 0.2,
    "judge": 1
  },
  {
    "ball_x": 2.4,
    "ball_y": 0.4,
    "judge": 1
  },
  {
    "ball_x": 2.4,
    "ball_y": 0.6000000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 0.8,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 1,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 1.2,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 1.4,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 1.5999999999999999,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 1.7999999999999998,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 1.9999999999999998,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 2.1999999999999997,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 2.4,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 2.6,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 2.8000000000000003,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 3.0000000000000004,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 3.2000000000000006,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 3.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 3.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 3.800000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 4.000000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 4.200000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 4.400000000000001,
    "judge": 1
  },
  {
    "ball_x": 2.4,
    "ball_y": 4.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 2.4,
    "ball_y": 4.800000000000002,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 5.000000000000002,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 5.200000000000002,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 5.400000000000002,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 5.600000000000002,
    "judge": 2
  },
  {
    "ball_x": 2.4,
    "ball_y": 5.8000000000000025,
    "judge": 1
  },
  {
    "ball_x": 2.4,
    "ball_y": 6.000000000000003,
    "judge": 1
  },
  {
    "ball_x": 2.4,
    "ball_y": 6.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 2.4,
    "ball_y": 6.400000000000003,
    "judge": 1
  },
  {
    "ball_x": 2.4,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 2.4,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 2.4,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 2.4,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.4,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.4,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.4,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.4,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.4,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 2.4,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 2.4,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 2.4,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 2.4,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 2.6,
    "ball_y": 0,
    "judge": 1
  },
  {
    "ball_x": 2.6,
    "ball_y": 0.2,
    "judge": 1
  },
  {
    "ball_x": 2.6,
    "ball_y": 0.4,
    "judge": 1
  },
  {
    "ball_x": 2.6,
    "ball_y": 0.6000000000000001,
    "judge": 1
  },
  {
    "ball_x": 2.6,
    "ball_y": 0.8,
    "judge": 1
  },
  {
    "ball_x": 2.6,
    "ball_y": 1,
    "judge": 1
  },
  {
    "ball_x": 2.6,
    "ball_y": 1.2,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 1.4,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 1.5999999999999999,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 1.7999999999999998,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 1.9999999999999998,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 2.1999999999999997,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 2.4,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 2.6,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 2.8000000000000003,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 3.0000000000000004,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 3.2000000000000006,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 3.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 3.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 3.800000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 4.000000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 4.200000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 4.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 4.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 4.800000000000002,
    "judge": 3
  },
  {
    "ball_x": 2.6,
    "ball_y": 5.000000000000002,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 5.200000000000002,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 5.400000000000002,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 5.600000000000002,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 5.8000000000000025,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 6.000000000000003,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 6.200000000000003,
    "judge": 2
  },
  {
    "ball_x": 2.6,
    "ball_y": 6.400000000000003,
    "judge": 1
  },
  {
    "ball_x": 2.6,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 2.6,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 2.6,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 2.6,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.6,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.6,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.6,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.6,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.6,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 2.6,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 2.6,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 2.6,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 2.6,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 1,
    "judge": 1
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 1.2,
    "judge": 1
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 1.4,
    "judge": 1
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 1.5999999999999999,
    "judge": 1
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 1.7999999999999998,
    "judge": 1
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 1.9999999999999998,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 2.1999999999999997,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 2.4,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 2.6,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 2.8000000000000003,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 3.0000000000000004,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 3.2000000000000006,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 3.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 3.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 3.800000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 4.000000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 4.200000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 4.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 4.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 4.800000000000002,
    "judge": 3
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 5.000000000000002,
    "judge": 3
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 5.200000000000002,
    "judge": 3
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 5.400000000000002,
    "judge": 3
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 5.600000000000002,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 5.8000000000000025,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 6.000000000000003,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 6.200000000000003,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 6.400000000000003,
    "judge": 2
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 6.600000000000003,
    "judge": 1
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 6.800000000000003,
    "judge": 1
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 7.0000000000000036,
    "judge": 1
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 7.200000000000004,
    "judge": 1
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 2.8000000000000003,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 2.8000000000000003,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 3.0000000000000004,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 3.2000000000000006,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 3.400000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 3.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 3.800000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 4.000000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 4.200000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 4.400000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 4.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 4.800000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 5.000000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 5.200000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 5.400000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 5.600000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 5.8000000000000025,
    "judge": 3
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 6.000000000000003,
    "judge": 3
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 6.200000000000003,
    "judge": 3
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 6.400000000000003,
    "judge": 2
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 6.600000000000003,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 6.800000000000003,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 7.0000000000000036,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 7.200000000000004,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 7.400000000000004,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 7.600000000000004,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 7.800000000000004,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 8.000000000000004,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 8.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 8.400000000000002,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 8.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 8.8,
    "judge": 1
  },
  {
    "ball_x": 3.0000000000000004,
    "ball_y": 9,
    "judge": 1
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 3.800000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 4.000000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 4.200000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 4.400000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 4.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 4.800000000000002,
    "judge": 2
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 5.000000000000002,
    "judge": 2
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 5.200000000000002,
    "judge": 2
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 5.400000000000002,
    "judge": 2
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 5.600000000000002,
    "judge": 2
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 5.8000000000000025,
    "judge": 3
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 6.000000000000003,
    "judge": 3
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 6.200000000000003,
    "judge": 3
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 6.400000000000003,
    "judge": 3
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 6.600000000000003,
    "judge": 3
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 6.800000000000003,
    "judge": 2
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 7.0000000000000036,
    "judge": 2
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 7.200000000000004,
    "judge": 1
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 7.400000000000004,
    "judge": 1
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 7.600000000000004,
    "judge": 1
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 7.800000000000004,
    "judge": 1
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 8.000000000000004,
    "judge": 1
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 8.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 8.400000000000002,
    "judge": 1
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 8.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 8.8,
    "judge": 1
  },
  {
    "ball_x": 3.2000000000000006,
    "ball_y": 9,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 0,
    "judge": 2
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 0.2,
    "judge": 2
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 0.4,
    "judge": 2
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 0.6000000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 0.8,
    "judge": 2
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 1,
    "judge": 2
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 1.2,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 1.4,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 1.5999999999999999,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 1.7999999999999998,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 1.9999999999999998,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 2.1999999999999997,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 2.4,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 2.6,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 2.8000000000000003,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 3.0000000000000004,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 3.2000000000000006,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 3.400000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 3.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 3.800000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 4.000000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 4.200000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 4.400000000000001,
    "judge": 1
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 4.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 4.800000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 5.000000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 5.200000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 5.400000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 5.600000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 5.8000000000000025,
    "judge": 3
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 6.000000000000003,
    "judge": 3
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 6.200000000000003,
    "judge": 3
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 6.400000000000003,
    "judge": 3
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 6.600000000000003,
    "judge": 4
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 6.800000000000003,
    "judge": 3
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 7.0000000000000036,
    "judge": 3
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 7.200000000000004,
    "judge": 3
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 7.400000000000004,
    "judge": 3
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 7.600000000000004,
    "judge": 3
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 7.800000000000004,
    "judge": 3
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 8.000000000000004,
    "judge": 3
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 8.200000000000003,
    "judge": 2
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 8.400000000000002,
    "judge": 2
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 8.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 8.8,
    "judge": 2
  },
  {
    "ball_x": 3.400000000000001,
    "ball_y": 9,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 0,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 0.2,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 0.4,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 0.6000000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 0.8,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 1,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 1.2,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 1.4,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 1.5999999999999999,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 1.7999999999999998,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 1.9999999999999998,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 2.1999999999999997,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 2.4,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 2.6,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 2.8000000000000003,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 3.0000000000000004,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 3.2000000000000006,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 3.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 3.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 3.800000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 4.000000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 4.200000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 4.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 4.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 4.800000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 5.000000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 5.200000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 5.400000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 5.600000000000002,
    "judge": 4
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 5.8000000000000025,
    "judge": 4
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 6.000000000000003,
    "judge": 4
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 6.200000000000003,
    "judge": 4
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 6.400000000000003,
    "judge": 4
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 6.600000000000003,
    "judge": 4
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 6.800000000000003,
    "judge": 3
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 7.0000000000000036,
    "judge": 3
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 7.200000000000004,
    "judge": 4
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 7.400000000000004,
    "judge": 4
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 7.600000000000004,
    "judge": 4
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 7.800000000000004,
    "judge": 4
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 8.000000000000004,
    "judge": 4
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 8.200000000000003,
    "judge": 4
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 8.400000000000002,
    "judge": 4
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 8.600000000000001,
    "judge": 4
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 8.8,
    "judge": 4
  },
  {
    "ball_x": 3.600000000000001,
    "ball_y": 9,
    "judge": 4
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 0,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 0.2,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 0.4,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 0.6000000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 0.8,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 1,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 1.2,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 1.4,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 1.5999999999999999,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 1.7999999999999998,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 1.9999999999999998,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 2.1999999999999997,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 2.4,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 2.6,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 2.8000000000000003,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 3.0000000000000004,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 3.2000000000000006,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 3.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 3.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 3.800000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 4.000000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 4.200000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 4.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 4.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 4.800000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 5.000000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 5.200000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 5.400000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 5.600000000000002,
    "judge": 3
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 5.8000000000000025,
    "judge": 3
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 6.000000000000003,
    "judge": 3
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 6.200000000000003,
    "judge": 3
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 6.400000000000003,
    "judge": 3
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 6.600000000000003,
    "judge": 4
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 6.800000000000003,
    "judge": 3
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 7.0000000000000036,
    "judge": 3
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 7.200000000000004,
    "judge": 3
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 7.400000000000004,
    "judge": 3
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 7.600000000000004,
    "judge": 3
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 7.800000000000004,
    "judge": 4
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 8.000000000000004,
    "judge": 4
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 8.200000000000003,
    "judge": 4
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 8.400000000000002,
    "judge": 4
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 8.600000000000001,
    "judge": 4
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 8.8,
    "judge": 4
  },
  {
    "ball_x": 3.800000000000001,
    "ball_y": 9,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 0,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 0.2,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 0.4,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 0.6000000000000001,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 0.8,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 1,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 1.2,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 1.4,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 1.5999999999999999,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 1.7999999999999998,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 1.9999999999999998,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 2.1999999999999997,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 2.4,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 2.6,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 2.8000000000000003,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 3.0000000000000004,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 3.2000000000000006,
    "judge": 3
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 3.400000000000001,
    "judge": 3
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 3.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 3.800000000000001,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 4.000000000000001,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 4.200000000000001,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 4.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 4.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 4.800000000000002,
    "judge": 3
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 5.000000000000002,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 5.200000000000002,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 5.400000000000002,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 5.600000000000002,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 5.8000000000000025,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 6.000000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 6.200000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 6.400000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 6.600000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 6.800000000000003,
    "judge": 3
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 7.0000000000000036,
    "judge": 3
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 7.200000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 7.400000000000004,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 7.600000000000004,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 7.800000000000004,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 8.000000000000004,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 8.200000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 8.400000000000002,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 8.600000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 8.8,
    "judge": 4
  },
  {
    "ball_x": 4.000000000000001,
    "ball_y": 9,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 0,
    "judge": 2
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 0.2,
    "judge": 2
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 0.4,
    "judge": 2
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 0.6000000000000001,
    "judge": 2
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 0.8,
    "judge": 2
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 1,
    "judge": 2
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 1.2,
    "judge": 2
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 1.4,
    "judge": 2
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 1.5999999999999999,
    "judge": 2
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 1.7999999999999998,
    "judge": 2
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 1.9999999999999998,
    "judge": 2
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 2.1999999999999997,
    "judge": 2
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 2.4,
    "judge": 2
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 2.6,
    "judge": 2
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 2.8000000000000003,
    "judge": 3
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 3.0000000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 3.2000000000000006,
    "judge": 3
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 3.400000000000001,
    "judge": 3
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 3.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 3.800000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 4.000000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 4.200000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 4.400000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 4.600000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 4.800000000000002,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 5.000000000000002,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 5.200000000000002,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 5.400000000000002,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 5.600000000000002,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 5.8000000000000025,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 6.000000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 6.200000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 6.400000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 6.600000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 6.800000000000003,
    "judge": 3
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 7.0000000000000036,
    "judge": 3
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 7.200000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 7.400000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 7.600000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 7.800000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 8.000000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 8.200000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 8.400000000000002,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 8.600000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 8.8,
    "judge": 5
  },
  {
    "ball_x": 4.200000000000001,
    "ball_y": 9,
    "judge": 5
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 0,
    "judge": 2
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 0.2,
    "judge": 2
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 0.4,
    "judge": 2
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 0.6000000000000001,
    "judge": 2
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 0.8,
    "judge": 2
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 1,
    "judge": 2
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 1.2,
    "judge": 2
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 1.4,
    "judge": 2
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 1.5999999999999999,
    "judge": 2
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 1.7999999999999998,
    "judge": 2
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 1.9999999999999998,
    "judge": 2
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 2.1999999999999997,
    "judge": 2
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 2.4,
    "judge": 2
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 2.6,
    "judge": 2
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 2.8000000000000003,
    "judge": 3
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 3.0000000000000004,
    "judge": 4
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 3.2000000000000006,
    "judge": 4
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 3.400000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 3.600000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 3.800000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 4.000000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 4.200000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 4.400000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 4.600000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 4.800000000000002,
    "judge": 5
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 5.000000000000002,
    "judge": 5
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 5.200000000000002,
    "judge": 5
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 5.400000000000002,
    "judge": 4
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 5.600000000000002,
    "judge": 4
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 5.8000000000000025,
    "judge": 4
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 6.000000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 6.200000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 6.400000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 6.600000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 6.800000000000003,
    "judge": 3
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 7.0000000000000036,
    "judge": 3
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 7.200000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 7.400000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 7.600000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 7.800000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 8.000000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 8.200000000000003,
    "judge": 3
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 8.400000000000002,
    "judge": 3
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 8.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 8.8,
    "judge": 3
  },
  {
    "ball_x": 4.400000000000001,
    "ball_y": 9,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 0,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 0.2,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 0.4,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 0.6000000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 0.8,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 1,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 1.2,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 1.4,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 1.5999999999999999,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 1.7999999999999998,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 1.9999999999999998,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 2.1999999999999997,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 2.4,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 2.6,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 2.8000000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 3.0000000000000004,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 3.2000000000000006,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 3.400000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 3.600000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 3.800000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 4.000000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 4.200000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 4.400000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 4.600000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 4.800000000000002,
    "judge": 5
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 5.000000000000002,
    "judge": 5
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 5.200000000000002,
    "judge": 5
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 5.400000000000002,
    "judge": 5
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 5.600000000000002,
    "judge": 5
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 5.8000000000000025,
    "judge": 5
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 6.000000000000003,
    "judge": 5
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 6.200000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 6.400000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 6.600000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 6.800000000000003,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 7.0000000000000036,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 7.200000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 7.400000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 7.600000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 7.800000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 8.000000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 8.200000000000003,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 8.400000000000002,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 8.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 8.8,
    "judge": 3
  },
  {
    "ball_x": 4.600000000000001,
    "ball_y": 9,
    "judge": 2
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 0,
    "judge": 4
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 0.2,
    "judge": 4
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 0.4,
    "judge": 4
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 0.6000000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 0.8,
    "judge": 4
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 1,
    "judge": 4
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 1.2,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 1.4,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 1.5999999999999999,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 1.7999999999999998,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 1.9999999999999998,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 2.1999999999999997,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 2.4,
    "judge": 4
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 2.6,
    "judge": 4
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 2.8000000000000003,
    "judge": 4
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 3.0000000000000004,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 3.2000000000000006,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 3.400000000000001,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 3.600000000000001,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 3.800000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 4.000000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 4.200000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 4.400000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 4.600000000000001,
    "judge": 4
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 4.800000000000002,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 5.000000000000002,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 5.200000000000002,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 5.400000000000002,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 5.600000000000002,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 5.8000000000000025,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 6.000000000000003,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 6.200000000000003,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 6.400000000000003,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 6.600000000000003,
    "judge": 5
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 6.800000000000003,
    "judge": 3
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 7.0000000000000036,
    "judge": 3
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 7.200000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 7.400000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 7.600000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 7.800000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 8.000000000000004,
    "judge": 3
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 8.200000000000003,
    "judge": 3
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 8.400000000000002,
    "judge": 3
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 8.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 8.8,
    "judge": 2
  },
  {
    "ball_x": 4.800000000000002,
    "ball_y": 9,
    "judge": 2
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 0,
    "judge": 4
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 0.2,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 0.4,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 0.6000000000000001,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 0.8,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 1,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 1.2,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 1.4,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 1.5999999999999999,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 1.7999999999999998,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 1.9999999999999998,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 2.1999999999999997,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 2.4,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 2.6,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 2.8000000000000003,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 3.0000000000000004,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 3.2000000000000006,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 3.400000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 3.600000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 3.800000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 4.000000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 4.200000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 4.400000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 4.600000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 4.800000000000002,
    "judge": 6
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 5.000000000000002,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 5.200000000000002,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 5.400000000000002,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 5.600000000000002,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 5.8000000000000025,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 6.000000000000003,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 6.200000000000003,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 6.400000000000003,
    "judge": 5
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 6.600000000000003,
    "judge": 4
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 6.800000000000003,
    "judge": 4
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 7.0000000000000036,
    "judge": 4
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 7.200000000000004,
    "judge": 4
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 7.400000000000004,
    "judge": 3
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 7.600000000000004,
    "judge": 3
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 7.800000000000004,
    "judge": 3
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 8.000000000000004,
    "judge": 4
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 8.200000000000003,
    "judge": 3
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 8.400000000000002,
    "judge": 3
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 8.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 8.8,
    "judge": 3
  },
  {
    "ball_x": 5.000000000000002,
    "ball_y": 9,
    "judge": 3
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 0,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 0.2,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 0.4,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 0.6000000000000001,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 0.8,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 1,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 1.2,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 1.4,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 1.5999999999999999,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 1.7999999999999998,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 1.9999999999999998,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 2.1999999999999997,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 2.4,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 2.6,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 2.8000000000000003,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 3.0000000000000004,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 3.2000000000000006,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 3.400000000000001,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 3.600000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 3.800000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 4.000000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 4.200000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 4.400000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 4.600000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 4.800000000000002,
    "judge": 6
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 5.000000000000002,
    "judge": 7
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 5.200000000000002,
    "judge": 7
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 5.400000000000002,
    "judge": 7
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 5.600000000000002,
    "judge": 7
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 5.8000000000000025,
    "judge": 7
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 6.000000000000003,
    "judge": 7
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 6.200000000000003,
    "judge": 6
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 6.400000000000003,
    "judge": 6
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 6.600000000000003,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 6.800000000000003,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 7.0000000000000036,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 7.200000000000004,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 7.400000000000004,
    "judge": 5
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 7.600000000000004,
    "judge": 4
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 7.800000000000004,
    "judge": 3
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 8.000000000000004,
    "judge": 3
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 8.200000000000003,
    "judge": 3
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 8.400000000000002,
    "judge": 3
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 8.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 8.8,
    "judge": 3
  },
  {
    "ball_x": 5.200000000000002,
    "ball_y": 9,
    "judge": 3
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 0,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 0.2,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 0.4,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 0.6000000000000001,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 0.8,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 1,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 1.2,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 1.4,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 1.5999999999999999,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 1.7999999999999998,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 1.9999999999999998,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 2.1999999999999997,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 2.4,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 2.6,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 2.8000000000000003,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 3.0000000000000004,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 3.2000000000000006,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 3.400000000000001,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 3.600000000000001,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 3.800000000000001,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 4.000000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 4.200000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 4.400000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 4.600000000000001,
    "judge": 6
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 4.800000000000002,
    "judge": 6
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 5.000000000000002,
    "judge": 7
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 5.200000000000002,
    "judge": 7
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 5.400000000000002,
    "judge": 7
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 5.600000000000002,
    "judge": 7
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 5.8000000000000025,
    "judge": 7
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 6.000000000000003,
    "judge": 7
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 6.200000000000003,
    "judge": 7
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 6.400000000000003,
    "judge": 6
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 6.600000000000003,
    "judge": 6
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 6.800000000000003,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 7.0000000000000036,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 7.200000000000004,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 7.400000000000004,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 7.600000000000004,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 7.800000000000004,
    "judge": 5
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 8.000000000000004,
    "judge": 4
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 8.200000000000003,
    "judge": 3
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 8.400000000000002,
    "judge": 3
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 8.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 8.8,
    "judge": 3
  },
  {
    "ball_x": 5.400000000000002,
    "ball_y": 9,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 0,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 0.2,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 0.4,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 0.6000000000000001,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 0.8,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 1,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 1.2,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 1.4,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 1.5999999999999999,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 1.7999999999999998,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 1.9999999999999998,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 2.1999999999999997,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 2.4,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 2.6,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 2.8000000000000003,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 3.0000000000000004,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 3.2000000000000006,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 3.400000000000001,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 3.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 3.800000000000001,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 4.000000000000001,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 4.200000000000001,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 4.400000000000001,
    "judge": 4
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 4.600000000000001,
    "judge": 4
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 4.800000000000002,
    "judge": 4
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 5.000000000000002,
    "judge": 4
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 5.200000000000002,
    "judge": 6
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 5.400000000000002,
    "judge": 6
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 5.600000000000002,
    "judge": 6
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 5.8000000000000025,
    "judge": 5
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 6.000000000000003,
    "judge": 5
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 6.200000000000003,
    "judge": 5
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 6.400000000000003,
    "judge": 4
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 6.600000000000003,
    "judge": 4
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 6.800000000000003,
    "judge": 4
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 7.0000000000000036,
    "judge": 4
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 7.200000000000004,
    "judge": 4
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 7.400000000000004,
    "judge": 4
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 7.600000000000004,
    "judge": 4
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 7.800000000000004,
    "judge": 4
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 8.000000000000004,
    "judge": 4
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 8.200000000000003,
    "judge": 4
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 8.400000000000002,
    "judge": 4
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 8.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 8.8,
    "judge": 3
  },
  {
    "ball_x": 5.600000000000002,
    "ball_y": 9,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 0,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 0.2,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 0.4,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 0.6000000000000001,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 0.8,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 1,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 1.2,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 1.4,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 1.5999999999999999,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 1.7999999999999998,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 1.9999999999999998,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 2.1999999999999997,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 2.4,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 2.6,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 2.8000000000000003,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 3.0000000000000004,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 3.2000000000000006,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 3.400000000000001,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 3.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 3.800000000000001,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 4.000000000000001,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 4.200000000000001,
    "judge": 2
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 4.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 4.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 4.800000000000002,
    "judge": 2
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 5.000000000000002,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 5.200000000000002,
    "judge": 4
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 5.400000000000002,
    "judge": 4
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 5.600000000000002,
    "judge": 4
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 5.8000000000000025,
    "judge": 4
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 6.000000000000003,
    "judge": 4
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 6.200000000000003,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 6.400000000000003,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 6.600000000000003,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 6.800000000000003,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 7.0000000000000036,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 7.200000000000004,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 7.400000000000004,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 7.600000000000004,
    "judge": 3
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 7.800000000000004,
    "judge": 4
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 8.000000000000004,
    "judge": 4
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 8.200000000000003,
    "judge": 4
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 8.400000000000002,
    "judge": 4
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 8.600000000000001,
    "judge": 4
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 8.8,
    "judge": 4
  },
  {
    "ball_x": 5.8000000000000025,
    "ball_y": 9,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 0,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 0.2,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 0.4,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 0.6000000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 0.8,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 1,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 1.2,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 1.4,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 1.5999999999999999,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 1.7999999999999998,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 1.9999999999999998,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 2.1999999999999997,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 2.4,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 2.6,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 2.8000000000000003,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 3.0000000000000004,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 3.2000000000000006,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 3.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 3.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 3.800000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 4.000000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 4.200000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 4.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 4.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 4.800000000000002,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 5.000000000000002,
    "judge": 2
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 5.200000000000002,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 5.400000000000002,
    "judge": 4
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 5.600000000000002,
    "judge": 4
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 5.8000000000000025,
    "judge": 4
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 6.000000000000003,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 6.200000000000003,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 6.400000000000003,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 6.600000000000003,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 6.800000000000003,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 7.0000000000000036,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 7.200000000000004,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 7.400000000000004,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 7.600000000000004,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 7.800000000000004,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 8.000000000000004,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 8.200000000000003,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 8.400000000000002,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 8.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 8.8,
    "judge": 3
  },
  {
    "ball_x": 6.000000000000003,
    "ball_y": 9,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 0,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 0.2,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 0.4,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 0.6000000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 0.8,
    "judge": 1
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 1,
    "judge": 1
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 1.2,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 1.4,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 1.5999999999999999,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 1.7999999999999998,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 1.9999999999999998,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 2.1999999999999997,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 2.4,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 2.6,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 2.8000000000000003,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 3.0000000000000004,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 3.2000000000000006,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 3.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 3.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 3.800000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 4.000000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 4.200000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 4.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 4.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 4.800000000000002,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 5.000000000000002,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 5.200000000000002,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 5.400000000000002,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 5.600000000000002,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 5.8000000000000025,
    "judge": 2
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 6.000000000000003,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 6.200000000000003,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 6.400000000000003,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 6.600000000000003,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 6.800000000000003,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 7.0000000000000036,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 7.200000000000004,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 7.400000000000004,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 7.600000000000004,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 7.800000000000004,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 8.000000000000004,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 8.200000000000003,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 8.400000000000002,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 8.600000000000001,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 8.8,
    "judge": 3
  },
  {
    "ball_x": 6.200000000000003,
    "ball_y": 9,
    "judge": 3
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 0,
    "judge": 1
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 0.2,
    "judge": 1
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 0.4,
    "judge": 1
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 0.6000000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 0.8,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 1,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 1.2,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 1.4,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 1.5999999999999999,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 1.7999999999999998,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 1.9999999999999998,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 2.1999999999999997,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 2.4,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 2.6,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 2.8000000000000003,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 3.0000000000000004,
    "judge": 1
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 3.2000000000000006,
    "judge": 1
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 3.400000000000001,
    "judge": 1
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 3.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 3.800000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 4.000000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 4.200000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 4.400000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 4.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 4.800000000000002,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 5.000000000000002,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 5.200000000000002,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 5.400000000000002,
    "judge": 3
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 5.600000000000002,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 5.8000000000000025,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 6.000000000000003,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 6.200000000000003,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 6.400000000000003,
    "judge": 3
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 6.600000000000003,
    "judge": 3
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 6.800000000000003,
    "judge": 3
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 7.0000000000000036,
    "judge": 3
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 7.200000000000004,
    "judge": 3
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 7.400000000000004,
    "judge": 3
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 7.600000000000004,
    "judge": 3
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 7.800000000000004,
    "judge": 3
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 8.000000000000004,
    "judge": 3
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 8.200000000000003,
    "judge": 3
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 8.400000000000002,
    "judge": 3
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 8.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 8.8,
    "judge": 2
  },
  {
    "ball_x": 6.400000000000003,
    "ball_y": 9,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 0,
    "judge": 1
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 0.2,
    "judge": 1
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 0.4,
    "judge": 1
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 0.6000000000000001,
    "judge": 1
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 0.8,
    "judge": 1
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 1,
    "judge": 1
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 1.2,
    "judge": 1
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 1.4,
    "judge": 1
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 1.5999999999999999,
    "judge": 1
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 1.7999999999999998,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 1.9999999999999998,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 2.1999999999999997,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 2.4,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 2.6,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 2.8000000000000003,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 3.0000000000000004,
    "judge": 1
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 3.2000000000000006,
    "judge": 1
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 5.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 5.600000000000002,
    "judge": 0
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 5.8000000000000025,
    "judge": 0
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 6.000000000000003,
    "judge": 0
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 6.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 6.400000000000003,
    "judge": 1
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 6.600000000000003,
    "judge": 1
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 6.800000000000003,
    "judge": 1
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 7.0000000000000036,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 7.200000000000004,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 7.400000000000004,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 7.600000000000004,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 7.800000000000004,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 8.000000000000004,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 8.200000000000003,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 8.400000000000002,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 8.600000000000001,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 8.8,
    "judge": 2
  },
  {
    "ball_x": 6.600000000000003,
    "ball_y": 9,
    "judge": 2
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 0,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 0.2,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 0.4,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 0.6000000000000001,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 0.8,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 2.4,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 2.6,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 2.8000000000000003,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 3.0000000000000004,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 3.2000000000000006,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 3.400000000000001,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 3.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 5.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 5.600000000000002,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 5.8000000000000025,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 6.000000000000003,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 6.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 7.600000000000004,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 7.800000000000004,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 8.000000000000004,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 8.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 8.400000000000002,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 8.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 6.800000000000003,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 3.0000000000000004,
    "judge": 1
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 3.2000000000000006,
    "judge": 1
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 3.400000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 3.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 3.800000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 4.000000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 5.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 5.600000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 5.8000000000000025,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 6.000000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 6.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 7.0000000000000036,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 3.2000000000000006,
    "judge": 1
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 3.400000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 3.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 3.800000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 4.000000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 4.200000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 5.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 5.600000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 5.8000000000000025,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 6.000000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 6.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 7.200000000000004,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 3.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 3.800000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 4.000000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 4.200000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 4.400000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 4.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 5.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 5.600000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 5.8000000000000025,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 6.000000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 6.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 7.400000000000004,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 4.000000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 4.200000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 4.400000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 4.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 4.800000000000002,
    "judge": 1
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 5.000000000000002,
    "judge": 1
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 5.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 5.600000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 5.8000000000000025,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 6.000000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 6.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 7.600000000000004,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 4.200000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 4.400000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 4.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 4.800000000000002,
    "judge": 1
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 5.000000000000002,
    "judge": 1
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 5.200000000000002,
    "judge": 1
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 5.400000000000002,
    "judge": 1
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 5.600000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 5.8000000000000025,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 6.000000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 6.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 7.800000000000004,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 4.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 4.800000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 5.000000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 5.200000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 5.400000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 5.600000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 5.8000000000000025,
    "judge": 1
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 6.000000000000003,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 6.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 6.400000000000003,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 8.000000000000004,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 4.800000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 5.000000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 5.200000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 5.400000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 5.600000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 5.8000000000000025,
    "judge": 1
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 6.000000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 6.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 6.400000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 6.600000000000003,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 6.800000000000003,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 7.0000000000000036,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 7.200000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 8.200000000000003,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 5.200000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 5.400000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 5.600000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 5.8000000000000025,
    "judge": 1
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 6.000000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 6.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 6.400000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 6.600000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 6.800000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 7.0000000000000036,
    "judge": 1
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 7.200000000000004,
    "judge": 1
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 7.400000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 7.600000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 7.800000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 8.000000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 8.200000000000003,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 8.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 8.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 8.8,
    "judge": 0
  },
  {
    "ball_x": 8.400000000000002,
    "ball_y": 9,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 5.400000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 5.600000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 5.8000000000000025,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 6.000000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 6.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 6.400000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 6.600000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 6.800000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 7.0000000000000036,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 7.200000000000004,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 7.400000000000004,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 7.600000000000004,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 7.800000000000004,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 8.000000000000004,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 8.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 8.400000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 8.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 8.8,
    "judge": 1
  },
  {
    "ball_x": 8.600000000000001,
    "ball_y": 9,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 5.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 5.600000000000002,
    "judge": 0
  },
  {
    "ball_x": 8.8,
    "ball_y": 5.8000000000000025,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 6.000000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 6.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 6.400000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 6.600000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 6.800000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 7.0000000000000036,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 7.200000000000004,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 7.400000000000004,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 7.600000000000004,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 7.800000000000004,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 8.000000000000004,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 8.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 8.400000000000002,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 8.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 8.8,
    "judge": 1
  },
  {
    "ball_x": 8.8,
    "ball_y": 9,
    "judge": 1
  },
  {
    "ball_x": 9,
    "ball_y": 0,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 0.2,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 0.4,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 0.6000000000000001,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 0.8,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 1,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 1.2,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 1.4,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 1.5999999999999999,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 1.7999999999999998,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 1.9999999999999998,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 2.1999999999999997,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 2.4,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 2.6,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 2.8000000000000003,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 3.0000000000000004,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 3.2000000000000006,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 3.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 3.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 3.800000000000001,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 4.000000000000001,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 4.200000000000001,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 4.400000000000001,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 4.600000000000001,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 4.800000000000002,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 5.000000000000002,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 5.200000000000002,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 5.400000000000002,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 5.600000000000002,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 5.8000000000000025,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 6.000000000000003,
    "judge": 0
  },
  {
    "ball_x": 9,
    "ball_y": 6.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 9,
    "ball_y": 6.400000000000003,
    "judge": 1
  },
  {
    "ball_x": 9,
    "ball_y": 6.600000000000003,
    "judge": 1
  },
  {
    "ball_x": 9,
    "ball_y": 6.800000000000003,
    "judge": 1
  },
  {
    "ball_x": 9,
    "ball_y": 7.0000000000000036,
    "judge": 1
  },
  {
    "ball_x": 9,
    "ball_y": 7.200000000000004,
    "judge": 1
  },
  {
    "ball_x": 9,
    "ball_y": 7.400000000000004,
    "judge": 1
  },
  {
    "ball_x": 9,
    "ball_y": 7.600000000000004,
    "judge": 1
  },
  {
    "ball_x": 9,
    "ball_y": 7.800000000000004,
    "judge": 1
  },
  {
    "ball_x": 9,
    "ball_y": 8.000000000000004,
    "judge": 1
  },
  {
    "ball_x": 9,
    "ball_y": 8.200000000000003,
    "judge": 1
  },
  {
    "ball_x": 9,
    "ball_y": 8.400000000000002,
    "judge": 1
  },
  {
    "ball_x": 9,
    "ball_y": 8.600000000000001,
    "judge": 1
  },
  {
    "ball_x": 9,
    "ball_y": 8.8,
    "judge": 1
  },
  {
    "ball_x": 9,
    "ball_y": 9,
    "judge": 1
  }
];