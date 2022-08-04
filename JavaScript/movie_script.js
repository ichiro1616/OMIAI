//担当：上村
//1.questionで経験年数を聞くdivを表示。選択されたらexperience_yearsに格納し、divを非表示にする。
//2.movie_dbでdb内の全てのデータを取得してdataに格納する。
//3.movie_playで取り出してきたmovieの再生を行う。
//  (今まで再生していた動画とmovie_categorizeが異なる場合は新しい動画を読み込み、同じ場合はmovie_timeに飛ぶ。)
//4.movie_timeで動画の現在の再生時間を取得し続ける。stop_timeの位置になったらcontrolに飛んで動画の停止をし、ボタンを表示させる。
//5.ボタンが押されたら結果・情報をdbに送信し、controlに飛んで動画の再開をする。
//6.動画の再開をしたらまたmovie_playに飛び3~6を繰り返す。

let counter = 0;
let flag = 0; //couterの値がデータ数を超えたかを判定するフラグ
let STOP = 0; //ボタン連打の防止
let data; //dbから取得した動画関係のデータ
let sendData; //dbに送信する回答データ
let LR; //dbから取得した選手が選択されたパーセンテージを計算する用データ
let categorize = 0; //前回取り出されたデータのmovie_categorize
let position = 0; //movie_timeでif比較をし続けないためのフラグ
let experience_years = 2; //バレーボールの経験年数。3はスライドバーの初期値
let movie = document.getElementById("mv"); //動画のデータを取得してくる
movie.controls = false; //手動による動画の再生・停止・音量調節などを無効にする
buttons.style.display = "none"; //ボタンはデフォルトで非表示
end.style.display = "none"; //終了画面はデフォルトで非表示
window.onclick = question(); //ページが開かれたら自動でquestionを動かす

//バレーボールの経験年数をきく
function question() {
  video_button.style.display = "none"; //動画を非表示
  experience.style.display = "block"; //経験年数の質問を表示

  inputSlideBarElement = document.getElementById("input-range");
  inputSlideBarElement.addEventListener("change", function () {
    experience_years = inputSlideBarElement.value;
  });
}

// dbのmovieテーブルからデータを取得する
function movie_db() {
  console.log("dbから動画を選択します。");
  console.log("経験年数 = ", experience_years);
  video_button.style.display = "block";
  experience.style.display = "none";
  formData = new FormData();
  xhr = new XMLHttpRequest();
  xhr.open("GET", "/PHP/movie_receive.php");
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

//動画の再生をする。前回と違うmovie_pathが呼び出されたら新しい動画を再生する。
function movie_play() {
  buttons.style.display = "none"; //ボタンを非表示にする
  console.log(Object.keys(data).length);
  if (Object.keys(data).length <= counter) {
    //全ての動画を再生し終えたらmovie_end()を動かす。
    flag = 1;
    movie_end();
  }
  if (flag == 0) {
    movie_id = data[counter]["movie_id"];
    movie_path = data[counter]["movie_path"];
    movie_categorize = data[counter]["movie_categorize"];
    stop_time = data[counter]["stop_time"] / 60; //dbにはフレーム数で登録されている。60fpsのため60で割る。
    left_player_id = data[counter]["left_player_id"];
    right_player_id = data[counter]["right_player_id"];

    if (categorize != movie_categorize) {
      mv.setAttribute("src", movie_path);
      categorize = movie_categorize;
      console.log("categorize = ", categorize);
      movie_time();
    } else {
      control(0);
      movie_time();
    }
  }
}

//現在の動画の再生時間を取得する
function movie_time() {
  stop_time = data[counter]["stop_time"] / 60;
  console.log(stop_time);

  videoElement = document.getElementById("mv");
  videoElement.addEventListener("timeupdate", function () {
    submit = videoElement.currentTime;
    console.log(submit);

    if (stop_time - submit < 0.5 && position == 0) {
      position = 1;
      STOP = 0;
      control(1); //controlに1を送る(動画を停止する)
    }
  });
}

// 指定フレームで動画を停止させる
function control(num) {
  var obj = document.getElementById("mv");
  var n = parseInt(num);
  if (n == 0) {
    obj.play();
  } else {
    document.querySelector('[id="0"]').value = "左選手";
    document.querySelector('[id="1"]').value = "右選手";
    document.getElementById("buttons").style.display = "block"; //ボタンを表示させる
    obj.pause(); //動画を停止させる
    console.log("一時停止");
  }
}

function EncodeHTMLForm(data) {
  //データの送信時、phpで受け取れる形に変換する
  var params = [];
  for (var name in data) {
    var value = data[name];
    var param = encodeURIComponent(name).replace(/%20/g, "+") + "=" + encodeURIComponent(value).replace(/%20/g, "+");
    params.push(param);
  }
  return params.join("&");
}

// 選手の選択ボタンが押されたらボタンのidを取得し、dbに送信する
function choose(btn) {
  if (STOP == 0) {
    button = btn.getAttribute("id"); // input要素のid属性の値を取得
    button_id = parseInt(button); //取得したIDをint形式に変換する
    console.log(button_id);
    if (button_id == 0) {
      //選択された選手に割り振られたidをplayer_idに格納する
      player_id = data[counter]["left_player_id"];
    } else {
      player_id = data[counter]["right_player_id"];
    }
    // console.log("player_id = ", player_id);
    sendData = {
      movie_id: data[counter]["movie_id"],
      movie_categorize: data[counter]["movie_categorize"],
      experience_years: experience_years,
      player_id: player_id,
      left_or_right: button_id,
    };
    xhr = new XMLHttpRequest();
    xhr.open("POST", "/PHP/button_send.php");
    xhr.addEventListener("loadend", function () {
      if (xhr.status === 200) {
        console.log("接続しました");
        percentage();

        if (xhr.response === "error") {
          console.log("登録に失敗しました");
        }
      }
    });
    console.log(sendData);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(EncodeHTMLForm(sendData));
    console.log("登録しました");
  }
}

//他の人もどのくらいその選手を選択したのかのパーセンテージを表示する
function percentage() {
  formData = new FormData();
  console.log(data[counter]["movie_id"]);
  formData.append("movie_id", data[counter]["movie_id"]);
  xhr = new XMLHttpRequest();
  xhr.open("POST", "/PHP/percent_receive.php");
  xhr.addEventListener("loadend", function (LR_temp) {
    if (xhr.status === 200) {
      LR_temp = JSON.parse(xhr.response);
      if (xhr.response === "error") {
        console.log("通信に失敗しました");
      } else {
        LR = LR_temp;
        console.log(LR);
        //パーセンテージの計算
        per = Object.keys(LR).length; //要素の数
        left = 0; //左選手を選択した人の数
        for (i = 0; i < per; i++) {
          //左選手を選択した人の数を数える
          if (LR[i] == 0) {
            left++;
          }
        }
        right = per - left; //右選手を選択した人の数
        console.log(per);
        console.log(left, right);
        left_per = Math.round((left / per) * 100);
        right_per = Math.round((right / per) * 100);
        console.log(left_per);
        console.log(right_per);
        //パーセンテージの表示
        document.querySelector('[id="0"]').value = left_per + "%";
        document.querySelector('[id="1"]').value = right_per + "%";
      }
    }
  });
  xhr.send(formData);

  counter = counter + 1;
  position = 0;
  STOP = 1;
  setTimeout(movie_play, 3000);
}

//全ての動画に回答し終えたら動く
function movie_end() {
  video_button.style.display = "none"; //動画を非表示
  end.style.display = "block"; //終了画面を表示

  let formData = new FormData();

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "../PHP/db_insert_lr.coef_.php");
  xhr.addEventListener("loadend", function () {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.response);
      console.log(data);
    }
  });
  xhr.send(formData);
}
