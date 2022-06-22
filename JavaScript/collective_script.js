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
let canvas_line = 300;
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