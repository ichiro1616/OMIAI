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
      for (i = 0; i < data.length; i++) {
        data[i] = data[i].slice(1);
        data[i] = data[i].slice(0, -1);
        color_array[i] = data[i].split(",");
      }
      console.log(color_array);
      for (i = 0; i < color_array.length; i++) {
        for (j = 0; j < color_array[i].length; j++) {
          color_array[i][j] = Number(color_array[i][j]);
        }
      }
      let player1_x = 3;
      let player1_y = 4.5;
      let player2_x = 6;
      let player2_y = 4.5;
      // for (i = 0; i < 9.2; i += 0.2) {
      //   for (j = 0; j < 10; j++) {
      //     let data_tmp = {};

      //     data_tmp.players_sabun_x = Math.abs(player1_x - player2_x);
      //     data_tmp.players_sabun_y = Math.abs(player1_y - player2_y);
      //     data_tmp.player1_ball_sabun_x = Math.abs(player1_x - i);
      //     data_tmp.player1_ball_sabun_y = Math.abs(player1_y - j);
      //     data_tmp.player2_ball_sabun_x = Math.abs(player2_x - i);
      //     data_tmp.player2_ball_sabun_y = Math.abs(player2_y - j);
      //     test_data.push(data_tmp);

      //     // let data_view = {};
      //     // data_view.ball_x = i;
      //     // data_view.ball_y = j;
      //     // data_view.judge = 100;
      //     // judge_color.push(data_view);

      //   }
      // }
      let ball_x_array = [0, 0.4, 0.8, 1.2, 1.6, 2.0, 2.4, 2.8, 3.2, 3.6, 9, 8.6, 8.2, 7.8, 7.4, 7.0, 6.6, 6.2, 5.8, 5.4, 3.6, 3.8, 4.0, 4.2, 4.4, 4.6, 4.8, 5, 5.2, 5.4];
      for (i = 0; i < ball_x_array.length; i++) {
        for (j = 0; j < 10; j++) {
          let data_tmp = {};

          data_tmp.players_sabun_x = Math.abs(player1_x - player2_x);
          data_tmp.players_sabun_y = Math.abs(player1_y - player2_y);
          data_tmp.player1_ball_sabun_x = Math.abs(player1_x - ball_x_array[i]);
          data_tmp.player1_ball_sabun_y = Math.abs(player1_y - j);
          data_tmp.player2_ball_sabun_x = Math.abs(player2_x - ball_x_array[i]);
          data_tmp.player2_ball_sabun_y = Math.abs(player2_y - j);
          test_data.push(data_tmp);

          let data_view = {};
          data_view.ball_x = ball_x_array[i];
          data_view.ball_y = j;
          data_view.judge = 100;
          judge_color.push(data_view);
        }
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
        console.log("aa");
      }
      console.log(answer);

      for (i = 0; i < answer.length; i++) {
        // console.log(i, "i");

        //lr.coef_の値とpolynomialの値をかける
        let b = 0;
        let r = 0;
        let g = 0;
        for (j = 0; j < answer[i].length; j++) {
          b = b + answer[i][j] * color_array[0][j];
          r = r + answer[i][j] * color_array[1][j];
          g = g + answer[i][j] * color_array[2][j];
          // console.log(color_array[0][j], color_array[1][j], color_array[2][j]);
        }
        console.log(b, r, g);

        b = 1 / (1 + Math.exp(-b));
        r = 1 / (1 + Math.exp(-r));
        g = 1 / (1 + Math.exp(-g));
        blue.push(b);
        red.push(r);
        green.push(g);
        console.log(b, r, g);
      }

      for (i = 0; i < blue.length; i++) {
        //どの色になるかの判断
        judge = [blue[i], red[i], green[i]];
        // console.log(judge);
        console.log(blue[i], red[i], green[i]);
        judge_color[i].judge = judge.lastIndexOf(Math.max(...judge));
        console.log(judge_color[i].judge);

        judge.length = 0;
      }
      console.log(judge_color);
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
            if (isNaN(j * array[k + counter_k])) {
            } else {
              box[j - 1].push(j * array[k + counter_k]);
              answer.push(j * array[k + counter_k]);
            }
          }
        } else {
          if (j == 0) {
          } else {
            if (k < counter_j) {
              if (j > counter_i) {
                if (isNaN(box[j - 1][k] * i)) {
                } else {
                  // console.log("k", k, "j", j, "i", i, "answer", box[j - 1][k] * i, "counter_j", counter_j, "box[j-1]", box[j - 1]);
                  answer.push(box[j - 1][k] * i);
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
