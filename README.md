# OMIAI

JavaScript,Pythonの各ファイルの機能

- ### OMIAI.js
  観客クイズの回答総数、配置シミュレーションの登録総数、集合知の最大世代数を取得し表示します。

- ### movie_script.js
  概要を記述

- ### simulation.js
  コート上に配置された選手コマの座標からお見合い範囲を計算し、ビットマップで表示します。登録ボタンが押されると、選手コマの座標をlocalStorageとDBに登録します。

- ### collective_script.js
  概要を記述

- ### objectivity_insert.js
  概要を記述
  
- ### collecitve copy.py
  概要を記述
  
- ### collective.py
  概要を記述
  
- ### coord_transformation.py
  概要を記述
  
- ### db_config.py
  概要を記述
  
- ### db_insert.py
  概要を記述
  
- ### objectivity_predict.py
  概要を記述
  
- ### subjectivity_predict.py
  概要を記述





# SENKEN　参考用

- ### upload.py  
　新しくフォルダに追加された動画のPATHをDBに挿入します。  

- ### analysis.py  
　DBからYOLOv3を掛けていない動画を取得し、動画に対してYOLOv３を掛けてボールの座標をjsonファイルで出力します。  

- ### insert.py  
  analysis.pyで出力されたファイルから、スパイクのフレームを検出し、それに関する情報をDBに挿入します。 

- ### openpose.py  
  DBからopenposeを掛けていない動画を取得し、動画に対してopenposeを掛けてボールの座標をjsonファイルで出力します。  

- ### body_width.py    
  openpose.pyで出力されたファイルから、体の開きと顔の向きを計算し、DBに挿入します。  

- ### pick_frame1img.py  
   DBから、ボールが打たれた瞬間のフレームを取得し、そのフレームの画像のパスをDBに挿入します。  

- ### upload_badminton.py  
  upload.pyのバドミントン用です。  
  
- ### analysis_badminton.py  
  analysis.pyのバドミントン用です。  
  
- ### insert_badminton.py  
  upload.pyのバドミントン用です。  
  
- ### openpose_badminton.py  
  openpose.pyのバドミントン用です。  
