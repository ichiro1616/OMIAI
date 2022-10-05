let answer; //観客クイズ回答総数
let simu = 0; //配置登録総数
let colle = 0; //最大世代数
window.addEventListener("DOMContentLoaded", () => {
  total();
  setInterval(() => {
    total();
  }, 3000);
});
function total() {
  form = new FormData();
  xhr = new XMLHttpRequest();
  xhr.open("GET", "/PHP/OMIAI.php");
  xhr.addEventListener("loadend", function () {
    if (xhr.status == 200) {
      let data = JSON.parse(xhr.response);
      answer = data[0];
      simu = data[1];
      colle = data[2];
      document.getElementById("answer").innerHTML = "累計回答数:" + answer;
      document.getElementById("simu").innerHTML = "累計登録数:" + Math.floor(simu);
      document.getElementById("colle").innerHTML = "最大世代数:" + Math.floor(colle);
      if (xhr.response == "error") {
        console.log("通信に失敗しました。");
      }
    }
  });
  xhr.send(form);
}
