//担当：上村
let STOP = 0;
let movie_id = []; 
let stop_time = []; //動画を一時停止するフレーム
let left_player_id = []; //左の選手に割り振られたid
let right_player_id = []; //右の選手に割り振られたid

window.onclick = movie_db();

// 動画をdbからランダムに1つ呼び出す
function movie_db(){
  console.log("dbから動画を選択します。"); 
  let formData = new FormData();
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "/PHP/movie_receive.php");
  xhr.addEventListener("loadend", function (data) {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.response);
      console.log(data);
      if (xhr.response === "error") {
        console.log("通信に失敗しました");
      } else {
        console.log(data);
        console.log(data[0]["movie_path"]);
        mv.setAttribute("src", data[0]["movie_path"]);
        movie_id = data[0]["movie_id"];
        stop_time = data[0]["stop_time"];
        left_player_id = data[0]["left_player_id"];
        right_player_id = data[0]["right_player_id"];
        console.log(movie_id, stop_time, left_player_id, right_player_id);
      }
      
    }
  });
  xhr.send(formData);
}

// 指定フレームで動画を停止させる
function pause(){
  console.log("動画を停止しました。");
  }

// 選手の選択ボタンが押されたらボタンのidを取得し、dbに送信する
function choose(btn) {
  if (STOP == 0) {
    button_id = btn.getAttribute("id"); // input要素のid属性の値を取得
    console.log(button_id);

    let formData = new FormData();
    let xhr = new XMLHttpRequest();
    // xhr.open("GET", "/PHP/button_send.php");
    xhr.addEventListener("loadend", function () {
      if (xhr.status === 200) {
        console.log(data);
        if (xhr.response === "error") {
          console.log("登録に失敗しました");
        } else {
          console.log(data);

        }
        
      }
    });
    xhr.send(formData);
}}