// コマの座標（左上基準）:１ローテ目だけ
let imagearray = [
  [
  {
    x: 10,
    y: 10,
  },
  {
    x: 145,
    y:100,
  },
  {
    x: 245,
    y: 100,
  },
  {
    x: 195,
    y: 180,
  },
  {
    x: 95,
    y: 180,
  },
  {
    x: 45,
    y: 100,
  },
  ],
  [
    {
      x: 10,
      y: 10,
    },
    {
      x: 145,
      y: 100,
    },
    {
      x: 245,
      y: 100,
    },
    {
      x: 195,
      y: 180,
    },
    {
      x: 95,
      y: 180,
    },
    {
      x: 45,
      y: 100,
    },
  ],
  [
    {
      x: 10,
      y: 10,
    },
    {
      x: 145,
      y: 100,
    },
    {
      x: 245,
      y: 100,
    },
    {
      x: 195,
      y: 180,
    },
    {
      x: 95,
      y: 180,
    },
    {
      x: 45,
      y: 100,
    },
  ],
  [
    {
      x: 10,
      y: 10,
    },
    {
      x: 145,
      y: 100,
    },
    {
      x: 245,
      y: 100,
    },
    {
      x: 195,
      y: 180,
    },
    {
      x: 95,
      y: 180,
    },
    {
      x: 45,
      y: 100,
    },
  ],
  [
    {
      x: 10,
      y: 10,
    },
    {
      x: 145,
      y: 100,
    },
    {
      x: 245,
      y: 100,
    },
    {
      x: 195,
      y: 180,
    },
    {
      x: 95,
      y: 180,
    },
    {
      x: 45,
      y: 100,
    },
  ],
  [
    {
      x: 10,
      y: 10,
    },
    {
      x: 145,
      y: 100,
    },
    {
      x: 245,
      y: 100,
    },
    {
      x: 195,
      y: 180,
    },
    {
      x: 95,
      y: 180,
    },
    {
      x: 45,
      y: 100,
    },
  ],
]

//経験年数選択バーの実装
//dbから配置データを抽出
//集合知計算functionを作成
//抽出した配置データを表示
//経験年数選択による表示切り替えの実装
//世代選択バーの実装
//世代選択による表示切り替えの実装
//お気に入り度の表示

let my_can1, my_can2, my_can3, my_can4, my_can5, my_can6; //自分の配置を表示するキャンバス
let ot_can1, ot_can2, ot_can3, ot_can4, ot_can5, ot_can6; //選択した配置を表示するキャンバス
let canvas_line = 350;
let data; //registerテーブルから取得したデータを全て格納する
window.onclick = canvas_draw();

function canvas_draw(){
//自分の配置
    //キャンバスのidを取得
    my_can1 = document.getElementById('my1');
    my_can2 = document.getElementById('my2');
    my_can3 = document.getElementById('my3');
    my_can4 = document.getElementById('my4');
    my_can5 = document.getElementById('my5');
    my_can6 = document.getElementById('my6');
    //キャンバスの2Dコンテキストを取得
    my_ctx1 = my_can1.getContext('2d');
    my_ctx2 = my_can2.getContext('2d');
    my_ctx3 = my_can3.getContext('2d');
    my_ctx4 = my_can4.getContext('2d');
    my_ctx5 = my_can5.getContext('2d');
    my_ctx6 = my_can6.getContext('2d');
    //キャンバスの縁を描画
    my_ctx1.strokeRect(0,0,canvas_line,canvas_line);
    my_ctx2.strokeRect(0,0,canvas_line,canvas_line);
    my_ctx3.strokeRect(0,0,canvas_line,canvas_line);
    my_ctx4.strokeRect(0,0,canvas_line,canvas_line);
    my_ctx5.strokeRect(0,0,canvas_line,canvas_line);
    my_ctx6.strokeRect(0,0,canvas_line,canvas_line);

//他の配置・集合知
    //キャンバスのidを取得
    ot_can1 = document.getElementById('other1');
    ot_can2 = document.getElementById('other2');
    ot_can3 = document.getElementById('other3');
    ot_can4 = document.getElementById('other4');
    ot_can5 = document.getElementById('other5');
    ot_can6 = document.getElementById('other6');
    //キャンバスの2Dコンテキストを取得
    ot_ctx1 = ot_can1.getContext('2d');
    ot_ctx2 = ot_can2.getContext('2d');
    ot_ctx3 = ot_can3.getContext('2d');
    ot_ctx4 = ot_can4.getContext('2d');
    ot_ctx5 = ot_can5.getContext('2d');
    ot_ctx6 = ot_can6.getContext('2d');
    //キャンバスの縁を描画
    ot_ctx1.strokeRect(0,0,canvas_line,canvas_line);
    ot_ctx2.strokeRect(0,0,canvas_line,canvas_line);
    ot_ctx3.strokeRect(0,0,canvas_line,canvas_line);
    ot_ctx4.strokeRect(0,0,canvas_line,canvas_line);
    ot_ctx5.strokeRect(0,0,canvas_line,canvas_line);
    ot_ctx6.strokeRect(0,0,canvas_line,canvas_line);
}

const srcs = [
 [
  '../Picture/koma/0/2-1.png',//セッター（コマ0）前衛
  '../Picture/koma/1/front/2-2.png',//るい（コマ1）前衛
  '../Picture/koma/2/front/2-3.png',//ひなた（コマ2）前衛
  '../Picture/koma/3/back/2-4.png',//けんと（コマ3）後衛
  '../Picture/koma/4/back/2-5.png',//りく（コマ4）後衛
  '../Picture/koma/5/back/2-6.png',//けいすけ（コマ5）後衛
 ], // 
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
 ],
];

let images = new Array(6); //要素数6の配列imagesを作成
for(var i = 0; i < 6; i++){
  images[i] = new Array(6).fill(0);
}
for(var i = 0; i< 6; i++){ //ローテーション
  for(var j = 0; j < 6; j++){ //コマ番号
      images[i][j] = new Image();
  }
}

let size = 2.0; //メイン画面のコマの大きさの倍率
let koma_w = 32; //コマの横幅
let koma_h = 32; //コマの高さ

window.addEventListener('DOMContentLoaded',() => {
  for(let i = 0; i < 6; i++){
    images[0][i].addEventListener('load',() =>{
      my_ctx1.drawImage(images[0][i],imagearray[0][i].x,imagearray[0][i].y, koma_w * size, koma_h * size)
  })
  }
  for (let i = 0; i < 6; i++) {
    images[1][i].addEventListener('load', () => {
      my_ctx2.drawImage(images[1][i], imagearray[1][i].x, imagearray[1][i].y, koma_w * size, koma_h * size)
    })
  }
  for (let i = 0; i < 6; i++) {
    images[2][i].addEventListener('load', () => {
      my_ctx3.drawImage(images[2][i], imagearray[2][i].x, imagearray[2][i].y, koma_w * size, koma_h * size)
    })
  }
  for (let i = 0; i < 6; i++) {
    images[3][i].addEventListener('load', () => {
      my_ctx4.drawImage(images[3][i], imagearray[3][i].x, imagearray[3][i].y, koma_w * size, koma_h * size)
    })
  }
  for (let i = 0; i < 6; i++) {
    images[4][i].addEventListener('load', () => {
      my_ctx5.drawImage(images[4][i], imagearray[4][i].x, imagearray[4][i].y, koma_w * size, koma_h * size)
    })
  }
  for (let i = 0; i < 6; i++) {
    images[5][i].addEventListener('load', () => {
      my_ctx6.drawImage(images[5][i], imagearray[5][i].x, imagearray[5][i].y, koma_w * size, koma_h * size)
    })
  }
  // 画像を読み込み終わってからソースを取得する
  for(var i = 0; i < 6; i++){
    for(var j = 0; j < 6; j++)
    images[i][j].src = srcs[i][j];
  }
});

// 画像を表示する
function draw(){
  my_ctx1.clearRect(0,0,my_can1.width,my_can1.height);
  for(var i in images){
    let x = imagearray[0][i].x;
    let y = imagearray[0][i].y;
    let w = koma_w * size;
    let h = koma_h * size;
    my_ctx1.drawImage(images[0][i],x,y,w,h);
  }
  my_ctx2.clearRect(0, 0, my_can2.width, my_can2.height);
  for (var i in images) {
    let x = imagearray[1][i].x;
    let y = imagearray[1][i].y;
    let w = koma_w * size;
    let h = koma_h * size;
    my_ctx2.drawImage(images[1][i], x, y, w, h);
  }
  my_ctx3.clearRect(0, 0, my_can3.width, my_can3.height);
  for (var i in images) {
    let x = imagearray[2][i].x;
    let y = imagearray[2][i].y;
    let w = koma_w * size;
    let h = koma_h * size;
    my_ctx3.drawImage(images[2][i], x, y, w, h);
  }
  my_ctx4.clearRect(0, 0, my_can4.width, my_can4.height);
  for (var i in images) {
    let x = imagearray[3][i].x;
    let y = imagearray[3][i].y;
    let w = koma_w * size;
    let h = koma_h * size;
    my_ctx4.drawImage(images[3][i], x, y, w, h);
  }
  my_ctx5.clearRect(0, 0, my_can5.width, my_can5.height);
  for (var i in images) {
    let x = imagearray[4][i].x;
    let y = imagearray[4][i].y;
    let w = koma_w * size;
    let h = koma_h * size;
    my_ctx5.drawImage(images[4][i], x, y, w, h);
  }
  my_ctx6.clearRect(0, 0, my_can6.width, my_can6.height);
  for (var i in images) {
    let x = imagearray[5][i].x;
    let y = imagearray[5][i].y;
    let w = koma_w * size;
    let h = koma_h * size;
    my_ctx6.drawImage(images[5][i], x, y, w, h);
  }
}
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

// dbのmovieテーブルからデータを取得する
function register_db(){
    console.log("db内の情報を参照します。"); 
    formData = new FormData();
    xhr = new XMLHttpRequest();
    xhr.open("GET", "/PHP/register_receive.php");
    xhr.addEventListener("loadend", function (data_keep) {
      if (xhr.status === 200) {
        data_keep = JSON.parse(xhr.response);
        console.log(data_keep);
        if (xhr.response === "error") {
          console.log("通信に失敗しました");
        } else {
          data = data_keep;
          console.log(data);
          movie_play();
        }        
      }
    });
    xhr.send(formData);
  }
  output.innerHTML = '未経験の' + "集合知";