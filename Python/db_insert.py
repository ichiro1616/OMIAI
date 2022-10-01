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

#データベースに登録したいペアのcsvを表示させる

csvname = ['1/anzai_hinata/anzai_hinata_220614_01.csv', '1/anzai_hinata/anzai_hinata_220617_03.csv', '1/anzai_hinata/anzai_hinata_220620_02.csv', '1/anzai_hinata/anzai_hinata_220627_01(2).csv', '1/anzai_hinata/anzai_hinata_220627_01.csv', '1/anzai_hinata/anzai_hinata_220627_02(2).csv', '1/anzai_hinata/anzai_hinata_220627_02.csv', '1/anzai_hinata/anzai_hinata_220628_03(2).csv', '1/anzai_hinata/anzai_hinata_220628_03.csv'] #安西-西根
# csvname = ['1/anzai_keisuke/anzai_keisuke_220614_01.csv', '1/anzai_keisuke/anzai_keisuke_220617_03.csv', '1/anzai_keisuke/anzai_keisuke_220620_02.csv', '1/anzai_keisuke/anzai_keisuke_220627_01(2).csv', '1/anzai_keisuke/anzai_keisuke_220627_01.csv', '1/anzai_keisuke/anzai_keisuke_220627_02.csv', '1/anzai_keisuke/anzai_keisuke_220628_02.csv', '1/anzai_keisuke/anzai_keisuke_220628_03(2).csv', '1/anzai_keisuke/anzai_keisuke_220628_03.csv'] #安西-けいすけ
# csvname = ['1/anzai_kento/anzai_kento_220614_01.csv', '1/anzai_kento/anzai_kento_220617_03.csv', '1/anzai_kento/anzai_kento_220620_02.csv', '1/anzai_kento/anzai_kento_220627_02.csv', '1/anzai_kento/anzai_kento_220628_01(2).csv', '1/anzai_kento/anzai_kento_220628_01.csv', '1/anzai_kento/anzai_kento_220628_02.csv', '1/anzai_kento/anzai_kento_220628_03(2).csv', '1/anzai_kento/anzai_kento_220628_03.csv'] #安西-けんと
# csvname = ['1/anzai_riku/anzai_riku_220614_01.csv', '1/anzai_riku/anzai_riku_220617_03.csv', '1/anzai_riku/anzai_riku_220620_02.csv', '1/anzai_riku/anzai_riku_220627_01(2).csv', '1/anzai_riku/anzai_riku_220627_01.csv', '1/anzai_riku/anzai_riku_220627_02(2).csv', '1/anzai_riku/anzai_riku_220627_02.csv', '1/anzai_riku/anzai_riku_220628_03(2).csv', '1/anzai_riku/anzai_riku_220628_03.csv'] #安西-りく
# csvname = ['1/hinata_keisuke/hinata_keisuke_220614_01.csv', '1/hinata_keisuke/hinata_keisuke_220617_03.csv', '1/hinata_keisuke/hinata_keisuke_220620_02.csv', '1/hinata_keisuke/hinata_keisuke_220628_01.csv', '1/hinata_keisuke/hinata_keisuke_220707_01.csv', '1/hinata_keisuke/hinata_keisuke_220707_02(2).csv', '1/hinata_keisuke/hinata_keisuke_220707_02.csv', '1/hinata_keisuke/hinata_keisuke_220707_03(2).csv', '1/hinata_keisuke/hinata_keisuke_220707_03.csv'] #西根-けいすけ
# csvname = ['1/hinata_kento/hinata_kento_220614_01.csv', '1/hinata_kento/hinata_kento_220617_03.csv', '1/hinata_kento/hinata_kento_220628_01.csv', '1/hinata_kento/hinata_kento_220705_01.csv', '1/hinata_kento/hinata_kento_220705_02(2).csv', '1/hinata_kento/hinata_kento_220705_02.csv', '1/hinata_kento/hinata_kento_220705_03(2).csv', '1/hinata_kento/hinata_kento_220705_03.csv',  '1/hinata_kento/hinata_kento_220729_02.csv'] #西根-けんと 
# csvname = ['1/hinata_riku/hinata_riku_220614_01.csv', '1/hinata_riku/hinata_riku_220617_03.csv', '1/hinata_riku/hinata_riku_220620_02.csv', '1/hinata_riku/hinata_riku_220627_01.csv', '1/hinata_riku/hinata_riku_220705_01.csv', '1/hinata_riku/hinata_riku_220705_02(2).csv', '1/hinata_riku/hinata_riku_220705_02.csv', '1/hinata_riku/hinata_riku_220705_03(2).csv' , '1/hinata_riku/hinata_riku_220705_03.csv'] #西根-りく
# csvname = ['1/keisuke_kento/keisuke_kento_220614_01.csv', '1/keisuke_kento/keisuke_kento_220617_03.csv', '1/keisuke_kento/keisuke_kento_220620_02.csv',  '1/keisuke_kento/keisuke_kento_220627_01.csv', '1/keisuke_kento/keisuke_kento_220707_01.csv', '1/keisuke_kento/keisuke_kento_220707_02(2).csv', '1/keisuke_kento/keisuke_kento_220707_02.csv', '1/keisuke_kento/keisuke_kento_220707_03(2).csv', '1/keisuke_kento/keisuke_kento_220707_03.csv'] #けんと-けいすけ 
# csvname = ['1/keisuke_riku/keisuke_riku_220614_01.csv', '1/keisuke_riku/keisuke_riku_220617_03.csv', '1/keisuke_riku/keisuke_riku_220620_02.csv', '1/keisuke_riku/keisuke_riku_220627_01.csv', '1/keisuke_riku/keisuke_riku_220707_01.csv', '1/keisuke_riku/keisuke_riku_220707_02(2).csv', '1/keisuke_riku/keisuke_riku_220707_02.csv', '1/keisuke_riku/keisuke_riku_220707_03(2).csv' , '1/keisuke_riku/keisuke_riku_220707_03.csv'] #けいすけ-りく
# csvname = ['1/riku_kento/riku_kento_220614_01.csv', '1/riku_kento/riku_kento_220617_03.csv', '1/riku_kento/riku_kento_220620_02.csv', '1/riku_kento/riku_kento_220628_01.csv', '1/riku_kento/riku_kento_220705_01.csv', '1/riku_kento/riku_kento_220705_02(2).csv', '1/riku_kento/riku_kento_220705_02.csv', '1/riku_kento/riku_kento_220705_03(2).csv', '1/riku_kento/riku_kento_220705_03.csv'] #りく-けんと




counter = 1

for i,filename in enumerate(csvname):

    sql = "SELECT MAX(`movie_categorize`) FROM `movie`"
    cur.execute(sql)
    # 実行結果を取得する
    movie_categotrize = cur.fetchall()
    print(movie_categotrize[0][0])

    df = pd.read_csv(filename, encoding="utf_8")
    print(df)
    for j in range(len(df)):

        if(movie_categotrize[0][0] == None):
            sql = "INSERT INTO `movie`(`movie_categorize`, `stop_time`, `movie_path`) VALUES (%s, %s, %s)"
            cur.execute(sql, (counter, df["stop_time"][j], df["movie_path"][j]))

            conn.commit()
        else:
            sql = "INSERT INTO `movie`(`movie_categorize`, `stop_time`, `movie_path`) VALUES (%s, %s, %s)"
            cur.execute(sql, (movie_categotrize[0][0] + counter, df["stop_time"][j], df["movie_path"][j]))

            conn.commit()

counter += 1

cur.close
conn.close




