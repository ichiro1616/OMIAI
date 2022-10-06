# OMIAI

OMIAI（オミアイ）はバレーボールで”お見合い”をなくすシステムです。

お見合い範囲を可視化し、選手の配置をオンラインのみんなで考えて「成長」させることで守備力の向上を目指します。

## HTML/CSSの各ファイルの機能

- ### OMIAI.html, OMIAI.css
  ホーム画面を表示します。

- ### watch_movie.html, watch_movie.css
  観客クイズページを表示します。ホーム画面からのボタンで遷移します。

- ### simulation.html, simulation.css
  配置シミュレーションページを表示します。ホーム画面からのボタンで遷移します。

- ### collective.html, collective.css
  集合知表示ページを表示します。ホーム画面からのボタンで遷移します。

- ### objectivity_insert.html
  db_insert_lr.coef_phpを通じてobjectivity_predict.pyを定期実行し、観客データから導出したお見合い範囲を計算するための式の係数をDBへ挿入します。

## JavaScriptの各ファイルの機能

- ### OMIAI.js
  観客クイズの回答人数、配置シミュレーションの登録人数、集合知の最大世代人数を取得し表示します。

- ### movie_script.js
  movie_receive.phpを通じてDBから回答数の少ない動画を優先的に取り出して再生・停止を行います。停止したときにボタンを表示し、ボタンの入力結果をbutton_send.phpを通してDBへ挿入します。
　percent_recieve.phpを通してDBから現在回答した動画の左右回答数を取得し、左右それぞれの回答割合をボタンに表示します。

- ### simulation.js
  コート上に配置された選手コマの座標とお見合い判断基準スライダーバーからお見合い範囲を計算し、ビットマップで表示します。
  登録ボタンが押されると、選手コマの座標をlocalStorageとDBに挿入します。
  選手コマの座標をDBに挿入したあと、execute.phpを通じてcollective.pyを実行し集合知の計算を行い、計算結果をDBへ挿入します。

- ### collective_script.js
  localStorageとDBから選手の座標を取得し、表示させます。またその座標をもとにお見合い範囲を計算し、ビットマップで表示します。

- ### objectivity_insert.js
  db_inesrt_lr.coef_.phpを通じてobjectivity_predict.pyを定期実行し、観客データから導出したお見合い範囲を計算するための式の係数をDBへ挿入します。
  
## Pythonの各ファイルの機能

システム動作に使用

- ### objectivity_predict.py
  観客データからお見合い範囲を計算するための式を導出します。db_insert_lr.coef_.phpでこのコードを呼び出し、DBへ挿入します。

- ### collective.py
  配置シミュレーションで登録された選手のx,y座標をDBから取り出し、5人で1世代として座標の平均値の計算を行います。計算が完了したら、結果をDBへ挿入します。
  
システム動作に不使用

- ### db_config.py
  DBへ接続するためのホスト名、ユーザー名、パスワード、DB名をローカル用とロリポップ用で切り替えます。
  
- ### db_insert.py
  csvファイルから動画のパスを取得し、DBへ挿入します。
  
- ### coord_transformation.py
  2台のカメラで撮った動画から取得される座標を使って変換式を連立させ、スクリーン座標からワールド座標へ変換します。
  
- ### subjectivity_predict.py
  選手データからお見合い範囲を計算するための式を導出します。db_insert_lr.coef_.phpでこのコードを呼び出し、DBへ挿入します。

## PHPの各ファイルの機能

- ### db_config.php
  DBへ接続するためのホスト名、ユーザー名、パスワード、DB名をローカル用とロリポップ用で切り替えます。
  
- ### OMIAI.php
  DBから観客クイズの回答人数、配置シミュレーションの登録人数、集合知の最大世代人数を取得します。

- ### movie_receive.php
  DBから回答数の少ない動画を優先的に取得します。
  
- ### percent_receive.php
  DBから、現在回答した動画の左右回答数を取得します。

- ### button_send.php
  answer_tableへ観客がどちらの選手がとるべきか選択したボタンのidを挿入します。

- ### simulation.php
  DBからお見合い範囲を計算するための係数を取得します。

- ### registration.php
  DBへ選手の配置データを挿入します。
  
- ### execute.php
  collective.pyを実行し、集合知計算を行いDBへ挿入します。
  
- ### collective.php
  collect_tableから集合知の情報を取得します。
  
- ### db_insert_lr.coef_.php
  objectivity_predict.pyを実行し、観客データからお見合い範囲を計算するための式の係数をDBへ挿入します。

## SQLの各ファイルの機能

- ### omiai_db.sql
  以下の6つのテーブルがあるDBです。
  - 動画の回答結果が入っているanswer_table
  - 集合知の情報が入っているcollective_table
  - お見合い範囲計算の式の係数が入っているlr.coef_table
  - 動画のパスが入っているmovie_table
  - 選手の情報が入っているplayer_table
  - 選手の配置データが入っているregister_table
