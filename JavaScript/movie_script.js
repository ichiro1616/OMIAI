//担当：上村
//1.questionで経験年数を聞くdivを表示。選択されたらexperience_yearsに格納し、divを非表示にする。
//2.movie_dbでdb内の全てのデータを取得してdataに格納する。
//3.movie_playで取り出してきたmovieの再生を行う。
//  (今まで再生していた動画とmovie_categorizeが異なる場合は新しい動画を読み込み、同じ場合はmovie_timeに飛ぶ。)
//4.movie_timeで動画の現在の再生時間を取得し続ける。stop_timeの位置になったらcontrolに飛んで動画の停止をし、ボタンを表示させる。
//5.ボタンが押されたら結果・情報をdbに送信し、controlに飛んで動画の再開をする。
//6.動画の再開をしたらまたmovie_playに飛び3~6を繰り返す。

let counter = 0;
let STOP = 0; //ボタン連打の防止
let data; //dbから取得したデータ
let categorize = 0; //前回取り出されたデータのmovie_categorize
let position = 0; //movie_timeでif比較をし続けないためのフラグ
let experience_years = 0; //バレーボールの経験年数
window.onclick = question();

//バレーボールの経験年数をきく
function question(){
  console.log("question");
  experience_years = 1;
  movie_db();
}

// dbのmovieテーブルからデータを取得する
function movie_db(){
  console.log("dbから動画を選択します。"); 
  let formData = new FormData();
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "/PHP/movie_receive.php");
  xhr.addEventListener("loadend", function (data_keep) {
    if (xhr.status === 200) {
      let data_keep = JSON.parse(xhr.response);
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


//動画の再生をする。前回と違うmovie_pathが呼び出されたら新しい動画を再生する。
function movie_play(){
  movie_id = data[counter]["movie_id"];
  movie_path = data[counter]["movie_path"];
  movie_categorize = data[counter]["movie_categorize"];
  stop_time = data[counter]["stop_time"];
  left_player_id = data[counter]["left_player_id"];
  right_player_id = data[counter]["right_player_id"];

  if(categorize != movie_categorize){
    mv.setAttribute("src", movie_path);
    categorize = movie_categorize;
    console.log("categorize = ", categorize);
    movie_time();
  } else{
    movie_time();
  }
}

//現在の動画の再生時間を取得する
function movie_time(){
  stop_time = data[counter]["stop_time"];
  console.log(stop_time);

  videoElement = document.getElementById('mv');
  videoElement.addEventListener('timeupdate',function(){
  submit = videoElement.currentTime;
  console.log(submit);
  
  if(stop_time - submit < 1 && position == 0){
    position = 1;
    control(1); //controlに1を送る(動画を停止する)
  }
});
}


// 指定フレームで動画を停止させる
function control(num){
  var obj = document.getElementById("mv");
  var n = parseInt(num);
  if (n == 0) {
      obj.play();
  }
  else {
      obj.pause();
      console.log("一時停止");
      // buttondiv.style.display = "block";　ボタンを表示する
  }
  }

// 選手の選択ボタンが押されたらボタンのidを取得し、dbに送信する
function choose(btn) {
  if (STOP == 0) {
    button_id = btn.getAttribute("id"); // input要素のid属性の値を取得
    console.log(button_id);
    if(button_id == 0){
      player_id = data[counter]["left_player_id"];
    } else{
      player_id = data[counter]["right_player_id"];
    }
    console.log("player_id = ",player_id);
    let formData = new FormData();
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/PHP/button_send.php");
    xhr.addEventListener("loadend", function () {
      if (xhr.status === 200) {
        formData.append("movie_id", data[counter]["movie_id"]); //今再生している動画に割り振られたid
        formData.append("experience_years", experience_years); //最初にきいた経験年数
        formData.append("player_id", player_id); //選ばれた選手に割り振られたid
        formData.append("left_or_right", button_id); //0なら左 1なら右
        counter = counter + 1;
        position = 0;
        if (xhr.response === "error") {
          console.log("登録に失敗しました");
        } else {
          console.log("データを登録しました!");
        }
        
      }
    });
    //xhr.send(formData);
}}