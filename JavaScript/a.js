function a() {
  let formData = new FormData();
  let xhr = new XMLHttpRequest();

  formData.append("work", work);

  xhr.open("POST", "./php/local.php");
  xhr.addEventListener("loadend", function () {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.response);
      console.log(data);
      if (xhr.response === "error") {
        console.log("登録に失敗しました");
      } else {
        console.log("登録に成功しました");
      }
    }
  });
  xhr.send(formData);
}
