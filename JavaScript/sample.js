// 1.ページが開いたらDOMを構築。
//　　( draw()でcanvasをclearRectした後図形を描画。pathListObjのclickEvent()を呼び出す。)
// 2.effectCanvasがクリックされたらgetPoint()でマウスカーソルの座標を取得
// 3.isIn()に座標を渡して図形上だったらドラッグ出来るようにする
// 4.マウスでクリックした場所からどれだけ動いたか座標(moveX、moveY)を取得
// 5.動いた座標をコマの座標に足してコマの座標を更新
//    (console.logで動いた座標、更新後の座標をそれぞれ表示)
// 6.ローテボタンを押すたびにcounterを増やし、counterの値によって配列からコマ座標を選択
//    (counterが6になったら0に戻して1ローテの配置にする)
// 7.登録ボタン(register_btn)を押されたらdbに接続してコマの座標を送信




// DOMが構築されるのを待つ
window.addEventListener("DOMContentLoaded", () => {
  var cvs = document.getElementById("canvas2");
  var cvs2 = document.getElementById("canvas3");

  var pathListObj = new pathList(cvs, cvs2);

  paths = pathsfunction(0);
  paths.forEach((e) => pathListObj.add(e));

  pathListObj.draw();
  pathListObj.clickEvent();
});

// 図形処理用オブジェクトのコンテナ
var pathList = function (canvas, effectCanvas) {
  this.canvas = canvas;
  this.effectCanvas = effectCanvas;
  this.path = [];
  this.currentPath = null;
  this.moveMode = false;
  this.currentX = 0;
  this.currentY = 0;
};

pathList.prototype = {
  // 図形処理用オブジェクト追加
  add(callBack) {
    this.path.push(new pathObj(this.canvas, this.effectCanvas, callBack));
  },
  // 全図形の描画
  draw() {
    var context = this.canvas.getContext("2d");
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.path.forEach((e) => e.draw());
  },
  clearEffect() {
    var context = this.effectCanvas.getContext("2d");
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  drawEffect(x, y) {
    this.clearEffect();
    this.currentPath.draw(true, x - this.currentX, y - this.currentY);
  },
  inStroke(x, y) {
    // 配列の最後＝上階層の図形
    for (let i = this.path.length - 1; i >= 0; i--) {
      // クリックした座標が図形の上か
      if (this.path[i].isIn(x, y, i)) return i;
    }
    return -1;
  },
  getPoint(e) {
    var rect = e.target.getBoundingClientRect();
    var [w, h] = [this.canvas.width / this.canvas.clientWidth, this.canvas.height / this.canvas.clientHeight];
    return [(e.clientX - rect.left) * w, (e.clientY - rect.top) * h];
  },
  
  // キャンバス上でのクリックイベント処理
  clickEvent() {
    this.effectCanvas.addEventListener(
      "mousedown",
      (e) => {
        var [x, y] = this.getPoint(e);

        let index = this.inStroke(x, y);
        comanumber = index;

        if (index > -1) {
          this.currentPath = this.path[index];
          this.currentX = x;
          this.currentY = y;
          this.moveMode = true;
        }
      },
      false
    );
    this.effectCanvas.addEventListener(
      "mousemove",
      (e) => {
        if (!this.moveMode) return;

        var [x, y] = this.getPoint(e);

        this.drawEffect(x, y);
      },
      false
    );
    this.effectCanvas.addEventListener(
      "mouseup",
      (e) => {
        if (!this.moveMode) return;
        this.moveMode = false;
        console.log("a");
        var [x, y] = this.getPoint(e);
        this.clearEffect();
        this.currentPath.setPos(x - this.currentX, y - this.currentY);
        this.currentPath = null;
        this.draw();
      },
      false
    );
    // this.effectCanvas.addEventListener(
    // "dblclick",
    // (e) => {
    // var [x, y] = this.getPoint(e);
    // let index = this.inStroke(x, y);
    // var current = this.path[index];


    // this.path = this.path.filter((e, i) => i !== index);
    // this.path.push(current);

    // this.draw();
    // },
    // false
    // );
  },
};

var imagearray = [
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

var arcarray = [
  [
    {
      x: 720,
      y: 500,
    },
    {
      x: 900,
      y: 250,
    },
    {
      x: 550,
      y: 250,
    },
    {
      x: 150,
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
];

//コマの画像
var img = new Image();
img.src = "../Picture/透過いちろ.png";
var img1 = new Image();
img1.src = "../Picture/透過さとなか.png";
var img2 = new Image();
img2.src = "../Picture/透過けんと.png";
var img3 = new Image();
img3.src = "../Picture/透過りく.png";
var img4 = new Image();
img4.src = "../Picture/透過ひろゆき.png";
var img5 = new Image();
img5.src = "../Picture/透過ながい.png";

//初期配置座標
var initial_position = 0; 
var paths;
let comanumber;
function pathsfunction(index) {
  const p = imagearray[index];
  const q = arcarray[index];
  console.log(index);
  return [
    (context) => {
      context.lineWidth = 12;
      context.arc(q[0].x, q[0].y, 70, 0, 2 * Math.PI); //(X,Y,コマの大きさ、円を描き始める角度、描き終わる終わる角度)
      // 画像を読み込んでから表示する
      if (initial_position == 0) {
        img5.addEventListener('load', function () {
          context.drawImage(img5, p[0].x, p[0].y, 120, 120);
        }, false);
      } else {
        context.drawImage(img5, p[0].x, p[0].y, 120, 120);
      }
    },
    (context) => {
      context.lineWidth = 12;
      context.arc(q[1].x, q[1].y, 70, 0, 2 * Math.PI);
      // 画像を読み込んでから表示する
      if (initial_position == 0) {
        img2.addEventListener('load', function () {
          context.drawImage(img2, p[1].x, p[1].y, 120, 120);
        }, false);
      } else {
        context.drawImage(img2, p[1].x, p[1].y, 120, 120);
      }
    },
    (context) => {
      context.lineWidth = 12;
      context.arc(q[2].x, q[2].y, 70, 0, 2 * Math.PI);
      // 画像を読み込んでから表示する
      if (initial_position == 0) {
        img1.addEventListener('load', function () {
          context.drawImage(img1, p[2].x, p[2].y, 120, 120);
        }, false);
      } else {
        context.drawImage(img1, p[2].x, p[2].y, 120, 120);
      }
    },
    (context) => {
      context.lineWidth = 12;
      context.arc(q[3].x, q[3].y, 70, 0, 2 * Math.PI);
      // 画像を読み込んでから表示する
      if (initial_position == 0) {
        img.addEventListener('load', function () {
          context.drawImage(img, p[3].x, p[3].y, 120, 120);
        }, false);
      } else {
        context.drawImage(img, p[3].x, p[3].y, 120, 120);
      }
    },
    (context) => {
      context.lineWidth = 12;
      context.arc(q[4].x, q[4].y, 70, 0, 2 * Math.PI);
      // 画像を読み込んでから表示する
      if (initial_position == 0) {
        img3.addEventListener('load', function () {
          context.drawImage(img3, p[4].x, p[4].y, 120, 120);
        }, false);
      } else {
        context.drawImage(img3, p[4].x, p[4].y, 120, 120);
      }
    },
    (context) => {
      context.lineWidth = 12;
      context.arc(q[5].x, q[5].y, 70, 0, 2 * Math.PI);
      // 画像を読み込んでから表示する
      if (initial_position == 0) {
        img4.addEventListener('load', function () {
          context.drawImage(img4, p[5].x, p[5].y, 120, 120);
        }, false);
        initial_position = 1;
      } 
      else {
        context.drawImage(img4, p[5].x, p[5].y, 120, 120);
      }
    },
  ];
};

// 線色
var pathObjStrokeColor = "rgba( 0, 0, 255, .5)";

// 図形処理用オブジェクト
var pathObj = function (canvas, effectCanvas, callBack) {
  this.canvas = canvas;
  this.effectCanvas = effectCanvas; //図形を移動させる時のキャンバス
  this.callBack = callBack; // パスを作成する関数
  this.moveX = 0;
  this.moveY = 0;
};

pathObj.prototype = {
  // 図形の描画
  draw(effect = false, eX = 0, eY = 0) {
    var context = this.context(effect, eX, eY);

    console.log(eX, eY);
    console.log(this.moveX, this.moveY);

    // console.log(comanumber, "駒の番号");

    if (comanumber) {
      arcarray[counter][comanumber].x = arcarray[counter][comanumber].x + this.moveX;
      arcarray[counter][comanumber].y = arcarray[counter][comanumber].y + this.moveY;
      imagearray[counter][comanumber].x = imagearray[counter][comanumber].x + this.moveX;
      imagearray[counter][comanumber].y = imagearray[counter][comanumber].y + this.moveY;

      console.log(arcarray[counter][comanumber]);

    }

    if (effect) context.strokeStyle = pathObjStrokeColor; //図形を移動するときの色を変えている

    context.stroke(); //図形の枠線の描画
    context.restore();
  },
  //図形の座標を移動後の座標に更新
  setPos(eX, eY) {
    this.moveX += eX;
    this.moveY += eY;
    console.log(this.moveX, this.moveY);
    console.log(eX, eY);
  },
  // クリックした座標が図形の領域か
  isIn(x, y, piece) {
    var context = this.context();
    // 枠線の当たり判定
    var result = context.isPointInStroke(x - this.moveX, y - this.moveY);
    // 枠線の内側の当たり判定(中心の座標-クリックした座標)
    if ((arcarray[counter][piece].x + this.moveX - x) * (arcarray[counter][piece].x + this.moveX - x) + (arcarray[counter][piece].y + this.moveY - y) * (arcarray[counter][piece].y + this.moveY - y) <= 70 * 70) {
      result = true;
    } else {
      false;
    }
    context.restore();
    return result;
  },
  // コンテキスト取得
  context(effect, eX, eY) {
    var context = (effect ? this.effectCanvas : this.canvas).getContext("2d");
    context.save();
    context.translate(this.moveX + eX, this.moveY + eY); //図形の移動距離を表す（これがないと動かない）

    context.beginPath();

    // パスをセット
    this.callBack(context);
    return context;
  },
};



let counter = 0;
function rotation() {
  console.log("a");
  counter++;
  if (counter == 6) {
    counter = 0;
  }
  paths = pathsfunction(counter);
  paths.forEach((e) => pathListObj.add(e));

  pathListObj.draw();
  pathListObj.clickEvent();
}

document.getElementById("register_btn").onclick = function () {

  console.log(arcarray[0][0]);
  register_x = arcarray[0][0].x;
  register_y = arcarray[0][0].y;
  console.log(register_x, register_y);
// 
  let formData = new FormData();
  formData.append("player0_x", arcarray[0][0].x);
  formData.append("player0_y", arcarray[0][0].y);

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/PHP/sample.php",);
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

var canvasElem = document.getElementById('canvas2'),
ctx = canvasElem.getContext('2d');

ctx.fillStyle = '#ccc';
ctx.strokeStyle = '#7C00BA';
ctx.rect(25, 25, 100, 100);
ctx.fill();
ctx.stroke();

// var canvas = document.querySelector('#canvas3');
// var context = canvas.getContext('2d');
// 
// context.beginPath();
// context.fillStyle = '#FFCC66';
// context.fillRect(0, 0, canvas3.width, canvas3.height);