//経験年数選択バーの実装
//dbから配置データを抽出
//集合知計算functionを作成
//抽出した配置データを表示
//経験年数選択による表示切り替えの実装
//世代選択バーの実装
//世代選択による表示切り替えの実装
//お気に入り度の表示

let data; //registerテーブルから取得したデータを全て格納する

//経験年数
inputSliderEle = document.getElementById('experience_years');
inputSliderEle.addEventListener('change', function(){
    experience_years = inputSliderEle.value;
    console.log(experience_years);
});

//世代別表示
inputSlideBarElement = document.getElementById('generation');
inputSlideBarElement.addEventListener('change', function(){
    generation = inputSlideBarElement.value;
    console.log(generation);
});

// dbのmovieテーブルからデータを取得する
function register_db(){
    console.log("db内の情報を参照します。"); 
    formData = new FormData();
    xhr = new XMLHttpRequest();
    xhr.open("GET", "/PHP/register_receive.php");
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
  output.innerHTML = '未経験の' + "集合知";