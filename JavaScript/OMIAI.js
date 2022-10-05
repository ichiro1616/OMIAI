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
    let answernum = Math.floor(answer / 100);
    let simunum = Math.floor(simu / 6);
    let collenum = Math.floor(colle) * 5;
    if (answernum > 300) {
      answernum = 300;
    }
    if (simunum > 300) {
      simunum = 300;
    }
    if (collenum > 300) {
      collenum = 300;
    }
    document.getElementById("answer").innerHTML = "<div style ='white-space:nowrap;'><span style='font-size:" + (answernum / 150 + 1) + "em;'>" + Math.floor(answer / 100) + "</span>" + "人が回答！</div>";
    document.getElementById("simu").innerHTML = "<div style ='white-space:nowrap;'><span style='font-size:" + (simunum / 150 + 1) + "em;'>" + Math.floor(simu / 6) + "</span>人が配置！</div>";//Math.floor(simu / 6)
    document.getElementById("colle").innerHTML = "<div style ='white-space:nowrap;'><span style='font-size:" + (collenum / 150 + 1) + "em;'>" + Math.floor(colle) * 5 + "</span>人の集合知！</div>";//Math.floor(colle)*5

    judge = 0;
  }
}
