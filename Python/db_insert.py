import MySQLdb
import db_config as dbc
# -*- using:utf-8 -*-
import numpy as np
import pandas as pd

# 接続する
conn = MySQLdb.connect(
    dbc.host,
    dbc.user,
    dbc.passwd,
    dbc.db)

# カーソルを取得する
cur = conn.cursor()


# csvname = ['anzai_hinata/anzai_hinata_220614_01.csv', 'anzai_hinata/anzai_hinata_220617_03.csv', 'anzai_hinata/anzai_hinata_220620_02.csv', 'anzai_hinata/anzai_hinata_220627_01(2).csv', 'anzai_hinata/anzai_hinata_220627_01.csv', 'anzai_hinata/anzai_hinata_220627_02(2).csv', 'anzai_hinata/anzai_hinata_220627_02.csv', 'anzai_hinata/anzai_hinata_220628_03(2).csv', 'anzai_hinata/anzai_hinata_220628_03.csv'] #安西-西根
# csvname = ['anzai_keisuke/anzai_keisuke_220614_01.csv', 'anzai_keisuke/anzai_keisuke_220617_03.csv', 'anzai_keisuke/anzai_keisuke_220620_02.csv', 'anzai_keisuke/anzai_keisuke_220627_01(2).csv', 'anzai_keisuke/anzai_keisuke_220627_01.csv', 'anzai_keisuke/anzai_keisuke_220627_02.csv', 'anzai_keisuke/anzai_keisuke_220628_02.csv', 'anzai_keisuke/anzai_keisuke_220628_03(2).csv', 'anzai_keisuke/anzai_keisuke_220628_03.csv'] #安西-けいすけ
# csvname = ['anzai_kento/anzai_kento_220614_01.csv', 'anzai_kento/anzai_kento_220617_03.csv', 'anzai_kento/anzai_kento_220620_02.csv', 'anzai_kento/anzai_kento_220627_02.csv', 'anzai_kento/anzai_kento_220628_01(2).csv', 'anzai_kento/anzai_kento_220628_01.csv', 'anzai_kento/anzai_kento_220628_02.csv', 'anzai_kento/anzai_kento_220628_03(2).csv', 'anzai_kento/anzai_kento_220628_03.csv'] #安西-けんと

# csvname = ['anzai_riku/anzai_riku_220614_01.csv', 'anzai_riku/anzai_riku_220617_03.csv', 'anzai_riku/anzai_riku_220620_02.csv', 'anzai_riku/anzai_riku_220627_01(2).csv', 'anzai_riku/anzai_riku_220627_01.csv', 'anzai_riku/anzai_riku_220627_02(2).csv', 'anzai_riku/anzai_riku_220627_02.csv', 'anzai_riku/anzai_riku_220628_03(2).csv', 'anzai_riku/anzai_riku_220628_03.csv'] #安西-りく
# csvname = ['hinata_keisuke/hinata_keisuke_220614_01.csv', 'hinata_keisuke/hinata_keisuke_220617_03.csv', 'hinata_keisuke/hinata_keisuke_220620_02.csv', 'hinata_keisuke/hinata_keisuke_220628_01.csv', 'hinata_keisuke/hinata_keisuke_220707_01.csv', 'hinata_keisuke/hinata_keisuke_220707_02(2).csv', 'hinata_keisuke/hinata_keisuke_220707_02.csv', 'hinata_keisuke/hinata_keisuke_220707_03(2).csv', 'hinata_keisuke/hinata_keisuke_220707_03.csv'] #西根-けいすけ
# csvname = ['hinata_kento/hinata_kento_220614_01.csv', 'hinata_kento/hinata_kento_220617_03.csv', 'hinata_kento/hinata_kento_220628_01.csv', 'hinata_kento/hinata_kento_220705_01.csv', 'hinata_kento/hinata_kento_220705_02(2).csv', 'hinata_kento/hinata_kento_220705_02.csv', 'hinata_kento/hinata_kento_220705_03(2).csv', 'hinata_kento/hinata_kento_220705_03.csv',  'hinata_kento/hinata_kento_220729_02.csv'] #西根-けんと 
# csvname = ['hinata_riku/hinata_riku_220614_01.csv', 'hinata_riku/hinata_riku_220617_03.csv', 'hinata_riku/hinata_riku_220620_02.csv', 'hinata_riku/hinata_riku_220627_01.csv', 'hinata_riku/hinata_riku_220705_01.csv', 'hinata_riku/hinata_riku_220705_02(2).csv', 'hinata_riku/hinata_riku_220705_02.csv', 'hinata_riku/hinata_riku_220705_03(2).csv' , 'hinata_riku/hinata_riku_220705_03.csv'] #西根-りく
# csvname = ['keisuke_kento/keisuke_kento_220614_01.csv', 'keisuke_kento/keisuke_kento_220617_03.csv', 'keisuke_kento/keisuke_kento_220620_02.csv',  'keisuke_kento/keisuke_kento_220627_01.csv', 'keisuke_kento/keisuke_kento_220707_01.csv', 'keisuke_kento/keisuke_kento_220707_02(2).csv', 'keisuke_kento/keisuke_kento_220707_02.csv', 'keisuke_kento/keisuke_kento_220707_03(2).csv', 'keisuke_kento/keisuke_kento_220707_03.csv'] #けんと-けいすけ 
# csvname = ['keisuke_riku/keisuke_riku_220614_01.csv', 'keisuke_riku/keisuke_riku_220617_03.csv', 'keisuke_riku/keisuke_riku_220620_02.csv', 'keisuke_riku/keisuke_riku_220627_01.csv', 'keisuke_riku/keisuke_riku_220707_01.csv', 'keisuke_riku/keisuke_riku_220707_02(2).csv', 'keisuke_riku/keisuke_riku_220707_02.csv', 'keisuke_riku/keisuke_riku_220707_03(2).csv' , 'keisuke_riku/keisuke_riku_220707_03.csv'] #けいすけ-りく
csvname = ['riku_kento/riku_kento_220614_01.csv', 'riku_kento/riku_kento_220617_03.csv', 'riku_kento/riku_kento_220620_02.csv', 'riku_kento/riku_kento_220628_01.csv', 'riku_kento/riku_kento_220705_01.csv', 'riku_kento/riku_kento_220705_02(2).csv', 'riku_kento/riku_kento_220705_02.csv', 'riku_kento/riku_kento_220705_03(2).csv', 'riku_kento/riku_kento_220705_03.csv'] #りく-けんと




counter = 1

for i,filename in enumerate(csvname):

    left_player = '"' + (filename.split('/')[1]).split('_')[0] + '"'
    right_player = '"' + filename.split('_')[2] + '"'
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
    print(df)
    for j in range(len(df)):

        # SQL（データベースを操作するコマンド）を実行する
        if(movie_categotrize[0][0] == None):
            sql = "INSERT INTO `movie`(`movie_categorize`, `stop_time`, `movie_path`, `left_player_id`, `right_player_id`, `left_player_x`, `left_player_y`, `right_player_x`, `right_player_y`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
            if(df["judge"][j] == 1):
                cur.execute(sql, (counter, df["stop_time"][j], df["movie_path"][j], right[0][0], left[0][0], 9 - df["player1_x"][j], df["player1_y"][j], 9 - df["player2_x"][j], df["player2_y"][j]))
            else:
                cur.execute(sql, (counter, df["stop_time"][j], df["movie_path"][j], left[0][0], right[0][0], df["player1_x"][j], df["player1_y"][j], df["player2_x"][j], df["player2_y"][j]))

            conn.commit()
        else:
            sql = "INSERT INTO `movie`(`movie_categorize`, `stop_time`, `movie_path`, `left_player_id`, `right_player_id`, `left_player_x`, `left_player_y`, `right_player_x`, `right_player_y`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
            if(df["judge"][j] == 1):
                cur.execute(sql, (movie_categotrize[0][0] + counter, df["stop_time"][j], df["movie_path"][j], right[0][0], left[0][0], 9 - df["player1_x"][j], df["player1_y"][j], 9 - df["player2_x"][j], df["player2_y"][j]))
            else:
                cur.execute(sql, (movie_categotrize[0][0] + counter, df["stop_time"][j], df["movie_path"][j], left[0][0], right[0][0], df["player1_x"][j], df["player1_y"][j], df["player2_x"][j], df["player2_y"][j]))
            conn.commit()

counter += 1







cur.close

# 接続を閉じる
conn.close




