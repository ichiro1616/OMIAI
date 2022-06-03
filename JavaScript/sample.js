(() => {
    //コマの画像
    var img = new Image();
  img.src ="/Picture/透過いちろ.png";
  var img1 = new Image();
  img1.src ="/Picture/透過さとなか.png";
  var img2 = new Image();
  img2.src ="/Picture/透過けんと.png";
  var img3 = new Image();
  img3.src ="/Picture/透過りく.png";
  var img4 = new Image();
  img4.src ="/Picture/透過ひろゆき.png";
  var img5 = new Image();
  img5.src ="/Picture/透過ながい.png";
  
  var paths = [
    context => {
      context.lineWidth = 12;
      context.arc( 720,500,70,0,2 * Math.PI );//(X,Y,コマの大きさ、円を描き始める角度、描き終わる終わる角度)
      context.drawImage(img5,660,440,120,120);
  },
  context => {
      context.lineWidth = 12;
      context.arc( 900,250,70,0,2 * Math.PI );
      context.lineWidth = 12;
      context.arc( 1000,350,70,0,2 * Math.PI );
      context.drawImage(img2,840,190,120,120);
  },
  context => {
      context.lineWidth = 12;
      context.arc( 550,250,70,0,2 * Math.PI );
      context.drawImage(img1,490,190,120,120);
  },
  context => {
      context.lineWidth = 12;
      context.arc( 150,80,70,0,2 * Math.PI );
      context.drawImage(img,90,20,120,120);
  },
  context => {
      context.lineWidth = 12;
      context.arc( 250,250,70,0,2 * Math.PI );
      context.drawImage(img3,190,190,120,120);
  },
  context => {
       context.lineWidth = 12;
       context.arc( 400,500,70,0,2 * Math.PI );
       context.drawImage(img4,340,440,120,120);
   },
  ];
  
  //ボタンが押されたときの処理
  document.getElementById("button").onclick = function() {
    target = document.getElementById("rotation");
     target.innerHTML = "ローテしました";
  }

  window.onload = function() {

  // オブジェクトと変数の準備
  var count_disp = document.getElementById("disp_count");  
     var count_up_btn = document.getElementById("btn_count_up");
     var reset_btn = document.getElementById("btn_reset");
     var count_value = 0;

     // カウントアップボタンクリック処理
     count_up_btn.onclick = function (){
          count_value += 1;
          count_disp.innerHTML = count_value;
     };
     // カウントアップボタンのマウスダウン処理
     count_up_btn.onmousedown = function() {
          count_up_btn.style.backgroundColor = "#00FF00";
     }
     // カウントアップボタンのマウスアップ処理
     count_up_btn.onmouseup = function() {
          count_up_btn.style.backgroundColor = "";
     }
     // リセットボタンのクリック処理
     reset_btn.onclick = function (){
          count_value = 0; count_disp.innerHTML = count_value;
     }
     // リセットボタンのマウスダウン処理
     reset_btn.onmousedown = function() {
          reset_btn.style.backgroundColor = "#00FF00";
     }
     // リセットボタンのマウスアップ処理
     reset_btn.onmouseup = function() {
          reset_btn.style.backgroundColor = "";
     }
    };
  
    // 線色
    var pathObjStrokeColor = "rgba( 0, 0, 255, .5)";
  
    // 図形処理用オブジェクト
    var pathObj = function (canvas, effectCanvas, callBack) {
      this.canvas = canvas;
      this.effectCanvas = effectCanvas;//図形を移動させる時のキャンバス
      this.callBack = callBack; // パスを作成する関数
      this.moveX = 0;
      this.moveY = 0;
    };
  
    pathObj.prototype = {
      // 図形の描画
      draw(effect = false, eX = 0, eY = 0) {
        var context = this.context(effect, eX, eY);
  
        console.log(this.moveX + eX, this.moveY + eY);
  
        if (effect) context.strokeStyle = pathObjStrokeColor;//図形を移動するときの色を変えている
  
        context.stroke();//図形の枠線の描画
        context.restore();
      },
      //図形の座標を移動後の座標に更新
      setPos(eX, eY) {
        this.moveX += eX;
        this.moveY += eY;
      },
      isIn(x, y) {
        var context = this.context();
        var result = context.isPointInStroke(x - this.moveX, y - this.moveY);
        context.restore();
        return result;
      },
      // コンテキスト取得
      context(effect, eX, eY) {
        var context = (effect ? this.effectCanvas : this.canvas).getContext("2d");
        context.save();
        context.translate(this.moveX + eX, this.moveY + eY);//図形の移動距離を表す（これがないと動かない）
  
        context.beginPath();
  
        // パスをセット
        this.callBack(context);
        return context;
      },
    };
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
          if (this.path[i].isIn(x, y)) return i;
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
  
            var [x, y] = this.getPoint(e);
            this.clearEffect();
            this.currentPath.setPos(x - this.currentX, y - this.currentY);
            this.currentPath = null;
            this.draw();
          },
          false
        );
        this.effectCanvas.addEventListener(
          "dblclick",
          (e) => {
            var [x, y] = this.getPoint(e);
            let index = this.inStroke(x, y);
            var current = this.path[index];
  
            this.path = this.path.filter((e, i) => i !== index);
            this.path.push(current);
  
            this.draw();
          },
          false
        );
      },
    };
  
    // DOMが構築されるのを待つ
    window.addEventListener("DOMContentLoaded", () => {
      var cvs = document.getElementById("canvas2");
      var cvs2 = document.getElementById("canvas3");
  
      var pathListObj = new pathList(cvs, cvs2);
  
      paths.forEach((e) => pathListObj.add(e));
  
      pathListObj.draw();var img = new Image()
  
      pathListObj.clickEvent();
    });
  })();
  