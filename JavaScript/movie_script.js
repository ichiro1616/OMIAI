//担当：上村
//参考　https://qiita.com/iiishokoiii/items/3037d6d01248502aee68

var v = document.getElementById("video");

function getDuration() {
	//動画の長さ（秒）を表示
	document.getElementById("nagasa").innerHTML = v.duration;
}

function playVideo() {
	//再生完了の表示をクリア
	document.getElementById("kanryou").innerHTML = "";
	//動画を再生
	v.play();
	//現在の再生位置（秒）を表示
	v.addEventListener("timeupdate", function(){
		document.getElementById("ichi").innerHTML = v.currentTime;
	}, false);
	//再生完了を知らせる
	v.addEventListener("ended", function(){
		document.getElementById("kanryou").innerHTML = "動画の再生が完了しました。";
	}, false);
}

function pauseVideo() {
	//動画を一時停止
	v.pause();
}

function upVolume() {
	//音量を上げる
	v.volume = v.volume + 0.25;
}

function downVolume() {
	//音量を下げる
	v.volume = v.volume - 0.25;
}
// クリック時の答え判定
function hantei(btnNo) {
  //btnNoの中にどちらの選手が取ったかの情報が入る
  }