let str = localStorage.getItem('key');
let imagearray = JSON.parse(str)
console.log(imagearray);
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
let data; //registerテーブルから取得したデータを全て格納する
window.onclick = canvas_draw();

function canvas_draw(){
//自分の配置
    my_can = document.getElementById('my'); //キャンバスのidを取得
    my_ctx = my_can.getContext('2d');//キャンバスの2Dコンテキストを取得
//他の配置・集合知
    ot_can = document.getElementById('other'); 
    ot_ctx = ot_can.getContext('2d'); 
//自分と他の重ねた配置
    com_can = document.getElementById('comparison');
    com_ctx = com_can.getContext('2d');
}

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

let images = new Array(6); //要素数6の配列imagesを作成
for(var i = 0; i < 6; i++){
  images[i] = new Array(6).fill(0);
}
for(var i = 0; i< 6; i++){ //ローテーション
  for(var j = 0; j < 6; j++){ //コマ番号
      images[i][j] = new Image();
  }
}
let size = 1.8; //メイン画面のコマの大きさの倍率
let koma_w = 70; //コマの横幅
let koma_h = 70; //コマの高さ
let scale = 650 / 1200; //my_canとcanvasの比
let counter = 0;

//経験年数
inputSliderEle = document.getElementById('experience_years');
inputSliderEle.addEventListener('change', function(){
    experience_years = inputSliderEle.value;
    console.log(experience_years);
});

//世代別表示
inputSlideBarElement = document.getElementById('generation');
inputSlideBarElement.addEventListener('change', function(){
    generation = inputSlideBarElement.value;
    console.log(generation);
});

// dbのregisterテーブルからデータを取得する
function register_db(){
    console.log("db内の情報を参照します。"); 
    formData = new FormData();
    xhr = new XMLHttpRequest();
    xhr.open("GET", "/PHP/register_receive.php");
    xhr.addEventListener("loadend", function () {
      if (xhr.status === 200) {
        let data_keep = JSON.parse(xhr.response);
        console.log('data_keep',data_keep);
        if (xhr.response === "error") {
          console.log("通信に失敗しました");
        } else {
          data = data_keep;
        }       
      }
    });
    xhr.send(formData);
  }
// あなたの配置
  for (let i = 0; i < 6; i++) {
    images[0][i].addEventListener('load', () => {
      my_ctx.drawImage(images[0][i], imagearray[0][i].x * scale, imagearray[0][i].y * scale, koma_w * size, koma_h * size)
    })
    }

  // 集合知
for (let i = 0; i < 6; i++) {
  images[0][i].addEventListener('load', () => {
    ot_ctx.drawImage(images[0][i], array[0][i].x * scale,array[0][i].y * scale, koma_w * size, koma_h * size)
  })
}
// 選手配置比較
for (let i = 0; i < 6; i++) {
  images[0][i].addEventListener('load', () => {
    com_ctx.drawImage(images[0][i], imagearray[0][i].x * scale, imagearray[0][i].y * scale, koma_w * size, koma_h * size)
    com_ctx.drawImage(images[0][i], array[0][i].x * scale, array[0][i].y * scale, koma_w * size, koma_h * size)
});
}
// 画像を読み込み終わってからソースを取得する
for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++)
    images[i][j].src = img[i][j];
}

//画像を表示する
function draw(rota) {
  // canvas内を一旦クリア
  my_ctx.clearRect(0, 0, my_can.width, my_can.height);
  for (var i in images) {
    let x = imagearray[rota][i].x*scale;
    let y = imagearray[rota][i].y*scale;
    let w = koma_w * size;
    let h = koma_h * size;
    my_ctx.drawImage(images[rota][i], x, y, w, h);
  }

  ot_ctx.clearRect(0,0,ot_can.width,ot_can.height);
  for(var i in images){
    let x = array[rota][i].x;
    let y = array[rota][i].y;
    let w = koma_w * size;
    let h = koma_h * size;
    ot_ctx.drawImage(images[rota][i],x*scale,y*scale,w,h);
  }

  com_ctx.clearRect(0,0,com_can.width,ot_can.height);
  for(var i in images){
    com_ctx.drawImage(images[rota][i],imagearray[rota][i].x*scale,imagearray[rota][i].y*scale,koma_w*size,koma_h*size);
    com_ctx.drawImage(images[rota][i],array[rota][i].x * scale,array[rota][i].y * scale, koma_w * size, koma_h * size);
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
}


// const omiai_color = '#00EA5F';//お見合い範囲の色 #00EA5F
// // const red = '';
// // const blue = '';
// my_ctx.fillStyle = omiai_color;//色
// my_ctx.globalAlpha = 0.4;//不透明度 0.7
// let originX = 42;
// let originY = 610;
// let endX = 610;
// let endY = 42;
// let k= 0;
// let pixel_sizeX = (endX - originX) / 46;//1ドットの大きさ（単位[m]）　横幅
// let pixel_sizeY = (originY - endY) / 46;//1ドットの大きさ（単位[m])　縦幅
// originY = originY - pixel_sizeY;//1ドットの大きさ分引く
// endX = endX - pixel_sizeX;//1ドットの大きさ分引く
// let str2 = localStorage.getItem('key2');
// let judge_area = JSON.parse(str2)
// for (let i = 0; i < 46; i++) {//x
//   for (let j = 0; j < 46; j++) {//y
//     if (judge_area[k].judge == 0) {//後で2に
//       my_ctx.fillRect(originX + i * pixel_sizeX, originY - j * pixel_sizeY, pixel_sizeX, pixel_sizeY);//塗る範囲(x,y,塗る幅,塗る高さ)
//     }
//     k++;
//   }
// }
