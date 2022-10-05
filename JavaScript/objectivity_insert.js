setInterval(insert, 300000);
//5分に1回実行
function insert() {
  form = new FormData();
  xhr = new XMLHttpRequest();
  xhr.open("POST", "../PHP/db_insert_lr.coef_.php");
  xhr.addEventListener("loadend", function () {
    if (xhr.status == 200) {
      let data = JSON.parse(xhr.response);
      console.log(data);
      if (xhr.response == "error") {
        console.log("通信に失敗しました。");
      } else {
        console.log("データ登録成功しました");
      }
    }
  });
  xhr.send(form);
}
