//question() → movie_db() → movie_play() → movie_time() → control() → choose(btn)
// → EncodeHTMLForm(data) → percentage() → control() → movie_time() → //// → movie_end()
let counter = 0;
let flag = 0; //couterの値がデータ数を超えたかを判定するフラグ
let STOP = 0; //ボタン連打の防止
let data; //dbから取得した動画関係のデータ
let sendData; //dbに送信する回答データ
let LR; //dbから取得した選手が選択されたパーセンテージを計算する用データ
let categorize = 0; //前回取り出されたデータのmovie_categorize
let position = 0; //movie_timeでif比較をし続けないためのフラグ
let playing = 0; //現在再生中かを判断するためのフラグ
let experience_years = 2; //バレーボールの経験年数。2はスライドバーの初期値
let movie = document.getElementById("mv"); //動画のデータを取得してくる
let answer = 0; //回答した動画数をカウント
let answer_c = document.getElementById("answer_c"); //回答数表示用
answer_c.innerHTML = answer;
movie.controls = false; //手動による動画の再生・停止・音量調節などを無効にする

//バレーボールの経験年数をきく
function question() {
  buttons.style.display = "none"; //ボタンはデフォルトで非表示
  end.style.display = "none"; //終了画面はデフォルトで非表示
  video_button.style.display = "none"; //動画を非表示
  document.getElementById("experience").className = "modalBg modalBgOpen"; //モーダルディスプレイで経験年数の質問を表示
  inputSlideBarElement = document.getElementById("input-range");
  inputSlideBarElement.addEventListener("change", function () {
    experience_years = inputSlideBarElement.value;
    console.log(experience_years);
  });
}

//ページが開かれたら自動でquestionを動かす
document.addEventListener("DOMContentLoaded", function () {
  question();
});

//データの送信時、phpで受け取れる形に変換する
function EncodeHTMLForm(data) {
  var params = [];
  for (var name in data) {
    var value = data[name];
    var param = encodeURIComponent(name).replace(/%20/g, "+") + "=" + encodeURIComponent(value).replace(/%20/g, "+");
    params.push(param);
  }
  return params.join("&");
}

//全ての動画に回答し終えたら動く
function movie_end() {
  video_button.style.display = "none"; //動画を非表示
  end.style.display = "block"; //終了画面を表示
}

// 指定フレームで動画を停止させる
function control(num) {
  Velement = document.querySelector("video");
  var obj = document.getElementById("mv");
  var n = parseInt(num);
  if (n == 0) {
    if (data[0][counter]["start_time"] == 0) {
      obj.play();
    } else {
      obj.currentTime = data[0][counter]["start_time"] / 60 + 2; //start_timeの位置から再生を開始する
      obj.play();
    }
  } else {
    document.querySelector('[id="0"]').value = "⇦";
    document.querySelector('[id="1"]').value = "⇨";
    document.getElementById("buttons").style.display = "block"; //ボタンを表示させる
    obj.pause(); //動画を停止させる
    console.log("pause");
  }
}

//現在の動画の再生時間を取得する
function movie_time() {
  stop_time = data[1][counter]["stop_time"] / 60;
  videoElement = document.getElementById("mv");
  Velement = document.querySelector("video");
  if (position == 0 && playing == 0) {
    control(0); //再生開始
  }
  videoElement.addEventListener("timeupdate", function () {
    if (position == 0) {
      submit = videoElement.currentTime;
      playing = 1;
      if (stop_time - submit <= 0.55) {
        console.log("slow");
        position = 2;
      }
    }
    if (position == 2) {
      Velement.playbackRate = 0.2;
      submit = videoElement.currentTime;
      if (stop_time - submit <= 0.001) {
        position = 1;
        playing = 0;
        STOP = 0;
        control(1); //controlに1を送る(動画を停止する)
      }
    }
  });
}

//動画の再生をする。前回と違うmovie_pathが呼び出されたら新しい動画を再生する。
function movie_play() {
  buttons.style.display = "none"; //ボタンを非表示にする
  if (Object.keys(data[1]).length <= counter) {
    //全ての動画を再生し終えたらmovie_end()を動かす。
    flag = 1;
    movie_end();
  }
  if (flag == 0) {
    //再生停止位置の取得
    movie_id = data[1][counter]["movie_id"];
    movie_path = data[1][counter]["movie_path"];
    movie_categorize = data[1][counter]["movie_categorize"];
    stop_time = data[1][counter]["stop_time"] / 60; //dbにはフレーム数で登録されている。60fpsのため60で割る。
    console.log("再生開始位置 = ", data[0][counter]["start_time"] / 60);
    console.log("動画停止位置 = ", data[1][counter]["stop_time"] / 60);

    if (categorize != movie_categorize) {
      mv.setAttribute("src", movie_path);
      categorize = movie_categorize;
      console.log("categorize = ", categorize);
      movie_time();
    } else {
      Velement = document.querySelector("video");
      console.log("play");
      Velement.playbackRate = 1.0;
      control(0);
      movie_time();
    }
  }
}

// dbのmovieテーブルからデータを取得する
function movie_db() {
  console.log("dbから動画を選択します。");
  console.log("経験年数 = ", experience_years);
  video_button.style.display = "block";
  experience.style.display = "none";
  form = new FormData();
  form.append("experience_years", experience_years);
  xhr = new XMLHttpRequest();
  xhr.open("POST", "../PHP/movie_receive.php");
  xhr.addEventListener("loadend", function () {
    if (xhr.status === 200) {
      data_keep = JSON.parse(xhr.response);
      if (xhr.response === "error") {
        console.log("通信に失敗しました");
      } else {
        data = data_keep;
        console.log(data);
        movie_play();
      }
    }
  });
  console.log("form=", form);
  xhr.send(form);
}

//他の人もどのくらいその選手を選択したのかのパーセンテージを表示する
function percentage() {
  formData = new FormData();
  formData.append("movie_id", data[1][counter]["movie_id"]);
  xhr = new XMLHttpRequest();
  xhr.open("POST", "../PHP/percent_receive.php");
  xhr.addEventListener("loadend", function (LR_temp) {
    if (xhr.status === 200) {
      LR_temp = JSON.parse(xhr.response);
      LR = LR_temp;
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
      left_per = Math.round((left / per) * 100);
      right_per = Math.round((right / per) * 100);
      //パーセンテージの表示
      document.getElementById("0").value = left_per + "%";
      document.getElementById("1").value = right_per + "%";
      if (xhr.response === "error") {
        console.log("通信に失敗しました");
      }
    }
  });
  xhr.send(formData);

  counter = counter + 1;
  position = 0;
  STOP = 1;
  setTimeout(movie_play, 1500);
}

// 選手の選択ボタンが押されたらボタンのidを取得し、dbに送信する
function choose(btn) {
  if (STOP == 0) {
    button = btn.getAttribute("id"); // input要素のid属性の値を取得
    button_id = parseInt(button); //取得したIDをint形式に変換する
    console.log("左右選択(0なら左 1なら右) = ", button_id);
    sendData = {
      movie_id: data[1][counter]["movie_id"],
      movie_categorize: data[1][counter]["movie_categorize"],
      experience_years: experience_years,
      left_or_right: button_id,
    };
    xhr = new XMLHttpRequest();
    xhr.open("POST", "../PHP/button_send.php");
    xhr.addEventListener("loadend", function () {
      if (xhr.status === 200) {
        console.log("接続しました");
        if (xhr.response === "error") {
          console.log("登録に失敗しました");
        }
      }
    });
    console.log(sendData);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(EncodeHTMLForm(sendData));
    console.log("登録しました");
    answer += 1;
    answer_c.innerHTML = answer;
    setTimeout(percentage, 50);
    //percentage();
  }
}