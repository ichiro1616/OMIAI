(()=>{
    var img = new Image();
    img.src ="/透過いちろ.png";
    var img1 = new Image();
    img1.src ="/透過さとなか.png";
    var img2 = new Image();
    img2.src ="/透過けんと.png";
    var img3 = new Image();
    img3.src ="/透過りく.png";
    var img4 = new Image();
    img4.src ="/透過ひろゆき.png";
    var img5 = new Image();
    img5.src ="/透過ながい.png";
    // 図形パスの定義関数を格納した配列
    const paths = [
        context => {
            context.lineWidth = 12;
            context.arc( 720,500,70,0,2 * Math.PI );
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

         // 線色
     const pathObjStrokeColor = "rgba( 0, 0, 255, .5)";

     /*
     * 図形処理用オブジェクト
     */
     const pathObj = function (  callBack ) {
         this.callBack = callBack;   // パスを作成する関数
         this.moveX = 0;
         this.moveY = 0;
     };
     pathObj.prototype={
             // 図形の描画
         draw( context , effect = false , eX = 0 , eY = 0){
             const ctx = this.drawData( context , eX , eY );
             if( effect ) ctx.strokeStyle = pathObjStrokeColor;

             context.stroke();
             context.restore();
         },
         setPos( eX , eY ){
             this.moveX += eX;this.moveY += eY;
         },
         isIn( x , y ){
             const ctx = this.drawData( context , 0 , 0 );
             const result = ctx.isPointInStroke( x - this.moveX , y - this.moveY);
             ctx.restore();
             return  result;
         },
             // コンテキスト取得
         drawData( context ,  eX , eY){

             context.save();
             context.translate( this.moveX + eX , this.moveY + eY );

             context.beginPath();

                 // パスをセット
             this.callBack( context );
             return context;
         }
     };
     /*
     * 図形処理用オブジェクトのコンテナ
     */
     const pathList = function ( canvas , effectCanvas ) {
         this.canvas = canvas;
         this.effectCanvas = effectCanvas;
         this.context = this.canvas.getContext("2d");
         this.effectContext = this.effectCanvas.getContext("2d");
         this.path = [];
         this.currentPath = null;
         this.moveMode = false;
         this.currentX = 0;
         this.currentY = 0;
     };
     pathList.prototype={
             // 図形処理用オブジェクト追加
         add( callBack ){
             this.path.push( new pathObj( callBack) );
         },
             // 全図形の描画
         draw(){
             this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
             this.path.forEach( e => e.draw( this.context ));
         },
         clearEffect(){
             this.effectContext.clearRect(0,0,this.canvas.width,this.canvas.height);
         },
         drawEffect( x , y ){
             this.clearEffect();
             this.currentPath.draw(this.effectContext , true , x - this.currentX , y - this.currentY );
         },
         inStroke( x , y ){
                 // 配列の最後＝上階層の図形
             for( let i = this.path.length -1 ; i >= 0 ; i -- ){
                 if( this.path[i].isIn( this.context , x , y ) ) return i;
             }
             return -1;
         },
         getPoint( e ){
             const rect = e.target.getBoundingClientRect();
             const [w,h] = [this.canvas.width / this.canvas.clientWidth , this.canvas.height / this.canvas.clientHeight];
             return [ (e.clientX - rect.left) * w,(e.clientY - rect.top)*h];
         },
             // キャンバス上でのクリックイベント処理
         clickEvent(){
                 // マウスを押したときのイベント
             this.effectCanvas.addEventListener('mousedown', e => {
                 const [x,y] = this.getPoint(e);
                 let index = this.inStroke( x , y );
                 console.log( index );
                 console.log(x);
                 console.log(y);

                 if( index  > -1 ){
                     this.currentPath = this.path[index];
                     this.currentX = x;
                     this.currentY = y;
                     this.moveMode = true;
                 }
             }, false);
                 // マウスカーソルを移動したときのイベント
             this.effectCanvas.addEventListener('mousemove', e => {
                 if( !this.moveMode ) return;
                 const [x,y] = this.getPoint(e);
                 this.drawEffect( x , y );
             }, false);
                 // マウスボタンを離したときのイベント
             this.effectCanvas.addEventListener('mouseup', e => {
                 if( !this.moveMode ) return;
                 this.moveMode=false;

                 const [x,y] = this.getPoint(e);
                 this.clearEffect();
                 this.currentPath.setPos( x - this.currentX,y - this.currentY);
                 this.currentPath=null;
                 this.draw();
                 console.log(x);
                 console.log(y);
             }, false);
                 // マウスボタンをダブルクリックときのイベント
             this.effectCanvas.addEventListener('dblclick', e => {

                 const [x,y] = this.getPoint(e);
                 let index = this.inStroke( x , y );
                 const current = this.path[index];
                 this.path = this.path.filter( (e,i) => i !== index);
                 this.path.push( current );
                 this.draw();
             }, false);
         }
     };

         // DOMが構築されるのを待つ
     window.addEventListener( "DOMContentLoaded" , ()=> {
         const cvs = document.getElementById( "canvas2" );
         const cvs2 = document.getElementById( "canvas3" );
         const pathListObj = new pathList( cvs , cvs2 );
         paths.forEach( e=> pathListObj.add(e) );
         pathListObj.draw();
         pathListObj.clickEvent();
     });
})();