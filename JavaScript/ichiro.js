window.addEventListener("DOMContentLoaded", () => {
  a();
});

let color_array = [];
let test_data = [];
let judge_color = [];
function a() {
  //lr.coef_の値取得、テストデータ作成、特徴量として変換、
  let formData = new FormData();
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "../PHP/ichiro.php");
  xhr.addEventListener("loadend", function () {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.response);
      console.log(data);

      let color = ["blue", "red", "green"];
      for (i = 0; i < 3; i++) {
        color_array_data = [];
        for (j = 0; j < data.length; j++) {
          if (data[j]["color"] == color[i]) {
            color_array_data.push(data[j]["data"]);
          }
        }
        color_array.push(color_array_data);
      }
      console.log(color_array);
      for (i = 0; i < color_array.length; i++) {
        for (j = 0; j < color_array[i].length; j++) {
          color_array[i][j] = Number(color_array[i][j]);
        }
      }
      //player1 = 安西、player2 = 西根
      let player1_x = 2.16;
      let player1_y = 6.57;
      let player2_x = 6.45;
      let player2_y = 5.48;

      // let player1_x = 6;
      // let player1_y = 4.5;
      // let player2_x = 3;
      // let player2_y = 4.5;
      let reverce = 0;
      if (player1_x > player2_x) {
        // idでの条件を描く
        player1_x = 9 - player1_x;
        player2_x = 9 - player2_x;
        reverce = 1;
      }
      console.log("judge");
      console.log("color_array", color_array);
      for (i = 0; i < 9.2; i += 0.2) {
        for (j = 0; j < 9.2; j += 0.2) {
          let data_tmp = {};
          data_tmp.players_sabun_x = player1_x - player2_x;
          data_tmp.players_sabun_y = player1_y - player2_y;
          data_tmp.player1_ball_sabun_x = player1_x - i;
          data_tmp.player1_ball_sabun_y = player1_y - j;
          data_tmp.player2_ball_sabun_x = player2_x - i;
          data_tmp.player2_ball_sabun_y = player2_y - j;
          test_data.push(data_tmp);

          let data_view = {};
          data_view.ball_x = i;
          data_view.ball_y = j;
          data_view.judge = 100;
          judge_color.push(data_view);
        }
      }
      console.log(test_data);

      // 標準化 meanとstdに代入するdataのindex番号はdataに入っている量によって変えないといけない
      let mean = [
        data[0]["mean_players_sabun_x"],
        data[0]["mean_players_sabun_y"],
        data[0]["mean_player1_ball_sabun_x"],
        data[0]["mean_player1_ball_sabun_y"],
        data[0]["mean_player2_ball_sabun_x"],
        data[0]["mean_player2_ball_sabun_y"],
      ];
      let std = [
        data[0]["std_players_sabun_x"],
        data[0]["std_players_sabun_y"],
        data[0]["std_player1_ball_sabun_x"],
        data[0]["std_player1_ball_sabun_y"],
        data[0]["std_player2_ball_sabun_x"],
        data[0]["std_player2_ball_sabun_y"],
      ];
      console.log(mean, std);

      for (i = 0; i < test_data.length; i++) {
        test_data[i].players_sabun_x = (test_data[i].players_sabun_x - mean[0]) / std[0];
        test_data[i].players_sabun_y = (test_data[i].players_sabun_y - mean[1]) / std[1];
        test_data[i].player1_ball_sabun_x = (test_data[i].player1_ball_sabun_x - mean[2]) / std[2];
        test_data[i].player1_ball_sabun_y = (test_data[i].player1_ball_sabun_y - mean[3]) / std[3];
        test_data[i].player2_ball_sabun_x = (test_data[i].player2_ball_sabun_x - mean[4]) / std[4];
        test_data[i].player2_ball_sabun_y = (test_data[i].player2_ball_sabun_y - mean[5]) / std[5];
      }

      console.log(test_data);

      let blue = [];
      let red = [];
      let green = [];
      let answer = [];

      for (o = 0; o < test_data.length; o++) {
        answer.push(
          sum(
            test_data[o].players_sabun_x,
            test_data[o].players_sabun_y,
            test_data[o].player1_ball_sabun_x,
            test_data[o].player1_ball_sabun_y,
            test_data[o].player2_ball_sabun_x,
            test_data[o].player2_ball_sabun_y
          )
        );
        // console.log("aa");
      }
      // console.log(answer);

      // array = [];
      //列で正規化をしている
      // for (i = 0; i < answer[0].length; i++) {
      //   for (j = 0; j < answer.length; j++) {
      //     array.push(answer[j][i]);
      //   }
      //   max = Math.max(...array);
      //   min = Math.min(...array);
      //   // console.log(array, "max", max, "min", min);

      //   //NaNを0にしてる
      //   for (k = 0; k < answer.length; k++) {
      //     if (isNaN((answer[k][i] - min) / (max - min))) {
      //       answer[k][i] = 0;
      //     } else {
      //       answer[k][i] = (answer[k][i] - min) / (max - min);
      //     }
      //   }

      //   array.length = 0;
      // }

      console.log(answer);
      console.log(color_array);
      for (i = 0; i < answer.length; i++) {
        let b = 0;
        let r = 0;
        let g = 0;

        //lr.coef_の値とpolynomialの値をかける
        for (j = 0; j < color_array[0].length - 1; j++) {
          b = b + answer[i][j] * color_array[0][j];
          r = r + answer[i][j] * color_array[1][j];
          g = g + answer[i][j] * color_array[2][j];
        }

        //lr.intercept_の値を足している
        b = b + color_array[0][color_array[0].length - 1];
        r = r + color_array[1][color_array[0].length - 1];
        g = g + color_array[2][color_array[0].length - 1];
        // console.log(b, r, g);

        aa = Math.exp(b) / (1 + Math.exp(-b) + Math.exp(-r) + Math.exp(-g));
        bb = Math.exp(r) / (1 + Math.exp(-b) + Math.exp(-r) + Math.exp(-g));
        cc = Math.exp(g) / (1 + Math.exp(-b) + Math.exp(-r) + Math.exp(-g));
        blue.push(aa);
        red.push(bb);
        green.push(cc);
        // console.log(b, r, g, aa, bb, cc);
      }
      // console.log(answer[0]);
      // console.log(color_array[0]);
      judge_array = [0, 0, 0];
      for (i = 0; i < blue.length; i++) {
        //どの色になるかの判断
        judge = [blue[i], red[i], green[i]];
        // console.log(judge);
        console.log(blue[i], red[i], green[i]);
        judge_color[i].judge = judge.lastIndexOf(Math.max(...judge));
        judge_array[judge_color[i].judge] += 1;
        judge.length = 0;
      }
      console.log(judge_color);
      console.log(judge_array);
      let counter = 1;
      if (reverce == 1) {
        console.log("reverce");
        for (i = 0; i < judge_color.length / 2; i++) {
          let keep = judge_color[i]["judge"];
          judge_color[i]["judge"] = judge_color[judge_color.length - counter]["judge"];
          judge_color[judge_color.length - counter]["judge"] = keep;
          counter++;
        }
        // console.log(judge_color);
      }
    }
  });
  xhr.send(formData);
}

function sum(x1, x2, x3, x4, x5, x6) {
  //polynomialfeatureの3次元の乗算の組み合わせを表示
  let array = [x1, x2, x3, x4, x5, x6];
  let counter_k = -1;
  let counter_j = 7;
  let counter_i = -1;
  let one = [];
  let two = [];
  let three = [];
  let four = [];
  let five = [];
  let six = [];
  let box = [one, two, three, four, five, six];
  let answer = [1];
  for (i = 0; i < array.length + 1; i++) {
    for (j = 0; j < array.length + 1; j++) {
      for (k = 0; k < array.length; k++) {
        if (i == 0) {
          if (j == 0) {
            answer.push(array[k]);
          } else {
            if (isNaN(array[j - 1] * array[k + counter_k])) {
            } else {
              box[j - 1].push(array[j - 1] * array[k + counter_k]);
              answer.push(array[j - 1] * array[k + counter_k]);
            }
          }
        } else {
          if (j == 0) {
          } else {
            if (k < counter_j) {
              if (j > counter_i) {
                if (isNaN(box[j - 1][k] * array[i - 1])) {
                } else {
                  // console.log("k", k, "j", j, "i", i, "answer", box[j - 1][k] * i, "counter_j", counter_j, "box[j-1]", box[j - 1]);
                  answer.push(box[j - 1][k] * array[i - 1]);
                }
              }
            }
          }
        }
      }
      counter_k++;
      // console.log("counter", counter_k);
    }
    counter_j--;
    counter_i++;
    counter_k = -1;
    // console.log("NOW", answer);
  }
  // console.log(answer);
  // console.log(box);
  return answer;
}
