// コマの座標（左上基準）
// let imagearray = [
//   [
//     {
//       x: 50,
//       y: 10,
//     },
//     {
//       x: 460,
//       y: 370,
//     },
//     {
//       x: 760,
//       y: 370,
//     },
//     {
//       x: 620,
//       y: 600,
//     },
//     {
//       x: 310,
//       y: 600,
//     },
//     {
//       x: 160,
//       y: 370,
//     },
//   ],
//   [
//     {
//       x: 550,
//       y: 10,
//     },
//     {
//       x: 760,
//       y: 370,
//     },
//     {
//       x: 620,
//       y: 600,
//     },
//     {
//       x: 460,
//       y: 370,
//     },
//     {
//       x: 310,
//       y: 600,
//     },
//     {
//       x: 160,
//       y: 370,
//     },
//   ],
//   [
//     {
//       x: 840,
//       y: 10,
//     },
//     {
//       x: 760,
//       y: 370,
//     },
//     {
//       x: 620,
//       y: 600,
//     },
//     {
//       x: 310,
//       y: 600,
//     },
//     {
//       x: 160,
//       y: 370,
//     },
//     {
//       x: 460,
//       y: 370,
//     },
//   ],
//   [
//     {
//       x: 870,
//       y: 460,
//     },
//     {
//       x: 620,
//       y: 600,
//     },
//     {
//       x: 310,
//       y: 600,
//     },
//     {
//       x: 160,
//       y: 370,
//     },
//     {
//       x: 460,
//       y: 370,
//     },
//     {
//       x: 760,
//       y: 370,
//     },
//   ],
//   [
//     {
//       x: 350,
//       y: 460,
//     },
//     {
//       x: 310,
//       y: 600,
//     },
//     {
//       x: 160,
//       y: 370,
//     },
//     {
//       x: 460,
//       y: 370,
//     },
//     {
//       x: 760,
//       y: 370,
//     },
//     {
//       x: 620,
//       y: 600,
//     },
//   ],
//   [
//     {
//       x: 50,
//       y: 460,
//     },
//     {
//       x: 160,
//       y: 370,
//     },
//     {
//       x: 460,
//       y: 370,
//     },
//     {
//       x: 760,
//       y: 370,
//     },
//     {
//       x: 620,
//       y: 600,
//     },
//     {
//       x: 310,
//       y: 600,
//     },
//   ],
// ];

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
let size = 2; //メイン画面のコマの大きさの倍率
let koma_w = 35; //コマの横幅
let koma_h = 35; //コマの高さ
let scale = my_can1.width / 1200; //my_can1とcanvasの比

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
        for(var i = 0; i < 6; i++){
          imagearray_data[i][0] = data_keep[i].x_coordinate;
          imagearray_data[i][1] = data_keep[i].y_coordinate;
        }
        if (xhr.response === "error") {
          console.log("通信に失敗しました");
        } else {
          data = data_keep;
        }       
      }
    });
    xhr.send(formData);
    return{
      imagearray_data
    };
  }

  let imagearray = register_db().imagearray_data
console.log(imagearray);

// あなたの配置
  for (let i = 0; i < 6; i++) {
    images[0][i].addEventListener('load', () => {
      my_ctx1.drawImage(images[0][i], imagearray[i][0] * scale, imagearray[i][1] * scale, koma_w * size, koma_h * size)
    })
  }
  for (let i = 0; i < 6; i++) {
    images[1][i].addEventListener('load', () => {
      my_ctx2.drawImage(images[1][i], imagearray[i][0] * scale, imagearray[i][1] * scale, koma_w * size, koma_h * size)
    })
  }
  for (let i = 0; i < 6; i++) {
    images[2][i].addEventListener('load', () => {
      my_ctx3.drawImage(images[2][i], imagearray[i][0] * scale, imagearray[i][1] * scale, koma_w * size, koma_h * size)
    })
  }
  for (let i = 0; i < 6; i++) {
    images[3][i].addEventListener('load', () => {
      my_ctx4.drawImage(images[3][i], imagearray[i][0] * scale, imagearray[i][1] * scale, koma_w * size, koma_h * size)
    })
  }
  for (let i = 0; i < 6; i++) {
    images[4][i].addEventListener('load', () => {
      my_ctx5.drawImage(images[4][i], imagearray[i][0] * scale, imagearray[i][1] * scale, koma_w * size, koma_h * size)
    })
  }
  for (let i = 0; i < 6; i++) {
    images[5][i].addEventListener('load', () => {
      my_ctx6.drawImage(images[5][i], imagearray[i][0] * scale, imagearray[i][1] * scale, koma_w * size, koma_h * size)
    })
  }
  // 画像を読み込み終わってからソースを取得する
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++)
      images[i][j].src = srcs[i][j];
  }

  // 集合知
output.innerHTML = '未経験の' + "集合知";
for (let i = 0; i < 6; i++) {
  images[0][i].addEventListener('load', () => {
    ot_ctx1.drawImage(images[0][i], imagearray[i][0] * scale, imagearray[i][1] * scale, koma_w * size, koma_h * size)
  })
}
for (let i = 0; i < 6; i++) {
  images[1][i].addEventListener('load', () => {
    ot_ctx2.drawImage(images[1][i], imagearray[i][0] * scale, imagearray[i][1] * scale, koma_w * size, koma_h * size)
  })
}
for (let i = 0; i < 6; i++) {
  images[2][i].addEventListener('load', () => {
    ot_ctx3.drawImage(images[2][i], imagearray[i][0] * scale, imagearray[i][1] * scale, koma_w * size, koma_h * size)
  })
}
for (let i = 0; i < 6; i++) {
  images[3][i].addEventListener('load', () => {
    ot_ctx4.drawImage(images[3][i], imagearray[i][0] * scale, imagearray[i][1] * scale, koma_w * size, koma_h * size)
  })
}
for (let i = 0; i < 6; i++) {
  images[4][i].addEventListener('load', () => {
    ot_ctx5.drawImage(images[4][i], imagearray[i][0] * scale, imagearray[i][1] * scale, koma_w * size, koma_h * size)
  })
}
for (let i = 0; i < 6; i++) {
  images[5][i].addEventListener('load', () => {
    ot_ctx6.drawImage(images[5][i], imagearray[i][0] * scale, imagearray[i][1] * scale, koma_w * size, koma_h * size)
  })
}
