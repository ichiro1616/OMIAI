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

const srcs = [
 [
  '../Picture/koma/0/2-1.png',//セッター（コマ0）前衛
  '../Picture/koma/1/front/2-2.png',//るい（コマ1）前衛
  '../Picture/koma/2/front/2-3.png',//ひなた（コマ2）前衛
  '../Picture/koma/3/back/2-4.png',//けんと（コマ3）後衛
  '../Picture/koma/4/back/2-5.png',//りく（コマ4）後衛
  '../Picture/koma/5/back/2-6.png',//けいすけ（コマ5）後衛
 ], 
 // ローテーション1
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
    imagearray_data = new Array(6);
    for(var i = 0; i < 6; i++){
         imagearray_data[i]= new Array(2);
      }
    console.log("db内の情報を参照します。"); 
    formData = new FormData();
    xhr = new XMLHttpRequest();
    xhr.open("GET", "/PHP/register_receive.php");
    xhr.addEventListener("loadend", function () {
      if (xhr.status === 200) {
        let data_keep = JSON.parse(xhr.response);
        console.log('data_keep',data_keep);
        // for(var i = 0; i < 6; i++){
        //   imagearray_data[i][0] = data_keep[i].x_coordinate;
        //   imagearray_data[i][1] = data_keep[i].y_coordinate;
        // }
        if (xhr.response === "error") {
          console.log("通信に失敗しました");
        } else {
          data = data_keep;
        }       
      }
    });
    xhr.send(formData);
    return{
      // imagearray_data
    };
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
  images[5][i].addEventListener('load', () => {
    com_ctx.drawImage(images[5][i], array[5][i].x * scale, array[5][i].y * scale, koma_w * size, koma_h * size)
});
}
// 画像を読み込み終わってからソースを取得する
for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++)
    images[i][j].src = srcs[i][j];
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