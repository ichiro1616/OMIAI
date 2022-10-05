let answer; //観客クイズ回答総数
let simu = 0; //配置登録総数
let colle = 0; //最大世代数
window.addEventListener("DOMContentLoaded", () => {
  total();
  setInterval(() => {
    total();
    preview();
  }, 3000);
});
function total() {
  form = new FormData();
  xhr = new XMLHttpRequest();
  xhr.open("GET", "../PHP/OMIAI.php");
  xhr.addEventListener("loadend", function () {
    if (xhr.status == 200) {
      let data = JSON.parse(xhr.response);
      answer = data[0];
      simu = data[1];
      colle = data[2];
      if (xhr.response == "error") {
        console.log("通信に失敗しました。");
      }
    }
  });
  xhr.send(form);
}
let judge = 1;
function preview() {
  if (judge == 0) {
    document.getElementById("answer").innerHTML = "観客クイズ";
    document.getElementById("simu").innerHTML = "配置シミュレーション";
    document.getElementById("colle").innerHTML = "集合知との比較";
    judge = 1;
  } else {
    document.getElementById("answer").innerHTML = "<font size=" + 1000 + ">" + Math.floor(answer / 100) + "</font>" + "人が回答！";
    document.getElementById("simu").innerHTML = Math.floor(simu / 6) + "人が配置！";
    document.getElementById("colle").innerHTML = Math.floor(colle) * 5 + "人の集合知！";
    judge = 0;
  }
}
