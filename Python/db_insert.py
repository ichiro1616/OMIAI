#mysqlclientパッケージを利用する
import MySQLdb
# -*- using:utf-8 -*-
import numpy as np
import pandas as pd

# 接続する
conn = MySQLdb.connect(
user='root',
passwd='',
host='localhost',
db='omiai_db')

# カーソルを取得する
cur = conn.cursor()



csvname = ['../Python/anzai_hinata/trans_anzai_hinata_220614_01.csv'] #ここに複数のcsvファイルを書く

counter = 1

for i,filename in enumerate(csvname):

    left_player = '"' + filename.split('_')[2] + '"'
    right_player = '"' + filename.split('_')[3] + '"'
    print(left_player)
    print(right_player)

    sql = "SELECT `player_id` FROM `player` WHERE `name` = %s"
    cur.execute(sql % left_player)
    # 実行結果を取得する
    left = cur.fetchall()
    print(left[0][0])

    sql = "SELECT `player_id` FROM `player` WHERE `name` = %s"
    cur.execute(sql % right_player)
    # 実行結果を取得する
    right = cur.fetchall()
    print(right[0][0])

    sql = "SELECT MAX(`movie_categorize`) FROM `movie`"
    cur.execute(sql)
    # 実行結果を取得する
    movie_categotrize = cur.fetchall()
    print(movie_categotrize[0][0])
    

    # print("aaaa")
    df = pd.read_csv(filename, encoding="utf_8")
    for j in range(len(df)):
        # SQL（データベースを操作するコマンド）を実行する
        if(movie_categotrize[0][0] == None):
            sql = "INSERT INTO `movie`(`movie_categorize`, `stop_time`, `movie_path`, `left_player_id`, `right_player_id`, `left_player_x`, `left_player_y`, `right_player_x`, `right_player_y`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
            cur.execute(sql, (counter, df["stop_time"][j], df["movie_path"][j], left[0][0], right[0][0], df["player1_x"][j], df["player1_y"][j], df["player2_x"][j], df["player2_y"]))
            conn.commit()
        else:
            sql = "INSERT INTO `movie`(`movie_categorize`, `stop_time`, `movie_path`, `left_player_id`, `right_player_id`, `left_player_x`, `left_player_y`, `right_player_x`, `right_player_y`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
            cur.execute(sql, (movie_categotrize[0][0] + counter, df["stop_time"][j], df["movie_path"][j], left[0][0], right[0][0], df["player1_x"][j], df["player1_y"][j], df["player2_x"][j], df["player2_y"]))
            conn.commit()

counter += 1







cur.close

# 接続を閉じる
conn.close




