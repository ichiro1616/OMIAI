//担当：上村
//参考　https://qiita.com/iiishokoiii/items/3037d6d01248502aee68
let video_path = "/Movie/sample1.mov"; //動画のファイルパス
let STOP = 0;
let movie;
window.onclick = movie_db();

//mv.setAttribute("src", video_path); //動画を選択・表示する

// 動画をdbからランダムに1つ呼び出す
function movie_db(){
  console.log("dbから動画を選択します。"); 
  $.ajax({
    url: "/PHP/db_connect.php",
    dataType: "json",
    }).done(function (data) {
      // movie = JSON.parse(data);
      console.log('通信に成功しました');
      console.log(data);
      console.log(data[0]["movie_path"]);
      mv.setAttribute("src", data[0]["movie_path"]);
  }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
      console.log('通信に失敗しました');
      console.log("XMLHttpRequest : " + XMLHttpRequest.status);
      console.log("textStatus     : " + textStatus);
      console.log("errorThrown    : " + errorThrown.message);
  });
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
    $.ajax({
    type: "GET",
    url: "/PHP/db_connect.php",
    dataType: "json",
    data: {
      "movie_id": movie_id,
      "experience_years": experience_years,
      "player_id": player_id,
      "left_or_right": left_or_right,
    },
    })
    .done(function (data) {
      console.log('通信に成功しました', data);
  }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
      console.log('通信に失敗しました');
      console.log("XMLHttpRequest : " + XMLHttpRequest.status);
      console.log("textStatus     : " + textStatus);
      console.log("errorThrown    : " + errorThrown.message);
  });
}}