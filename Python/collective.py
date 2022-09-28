#ライブラリのインポート
import db_config as dbc
import MySQLdb
import pandas as pd
import numpy as np
import time

#ループ制御用変数
ex_years = 5 
Sub_Ob = 5 
player = 6

#dbとの接続・ローテーション別にテーブルから情報を抽出する
conn = MySQLdb.connect(
    dbc.host,
    dbc.user,
    dbc.passwd,
    dbc.db)
cur = conn.cursor()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`, `player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 0;")
data0_db = cur.fetchall()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`, `player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 1;")
data1_db = cur.fetchall()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`, `player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 2;")
data2_db = cur.fetchall()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`, `player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 3;")
data3_db = cur.fetchall()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`, `player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 4;")
data4_db = cur.fetchall()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`, `player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 5;")
data5_db = cur.fetchall()
conn.commit()

#タプルをリストに変換する
data_0 = []
data_1 = []
data_2 = []
data_3 = []
data_4 = []
data_5 = []

data0_db = list(data0_db)
for counter0 in range (len(data0_db)):
    data_0.append(list(data0_db[counter0]))
    
data1_db = list(data1_db)
for counter1 in range (len(data1_db)):
    data_1.append(list(data1_db[counter1]))

data2_db = list(data2_db)
for counter2 in range (len(data2_db)):
    data_2.append(list(data2_db[counter2]))

data3_db = list(data3_db)
for counter3 in range (len(data3_db)):
    data_3.append(list(data3_db[counter3]))

data4_db = list(data4_db)
for counter4 in range (len(data4_db)):
    data_4.append(list(data4_db[counter4]))

data5_db = list(data5_db)
for counter5 in range (len(data5_db)):
    data_5.append(list(data5_db[counter5]))

#リストをデータフレーム化する
columns = pd.Index(['ex_years', 'Sub_Ob', 'rotation', 'player_id', 'x', 'y'])
data0 = pd.DataFrame(data_0,columns=columns)
data1 = pd.DataFrame(data_1,columns=columns)
data2 = pd.DataFrame(data_2,columns=columns)
data3 = pd.DataFrame(data_3,columns=columns)
data4 = pd.DataFrame(data_4,columns=columns)
data5 = pd.DataFrame(data_5,columns=columns)
#すべてのデータフレームを配列に格納する。
data = [data0,data1,data2,data3,data4,data5]
time.sleep(0.2)

##---集合知の計算--------------------------------------------------------------------------------
def add():
    print("集合知の計算を行います")
    counter = 0 #while文から抜ける用の条件変数
    x_tmp = [] #今回の世代のx座標を一時的に格納する
    y_tmp = [] #今回の世代のy座標を一時的に格納する
    flug = 0 #世代計算用のフラグ

    for Dcount in range(6):
        for h in range(ex_years): #キー：experience_years
            for i in range(player): #キー：player_id
                while(counter == 0):
                    if(flug==0):
                        #collectiveテーブルに入っている世代の数を取得する
                        cur.execute("SELECT MAX(`generation`) FROM `collective` WHERE `rotation` = %s AND `experience_years` = %s AND `player_id` = %s;",(Dcount,h,i+1))
                        generation = cur.fetchall()
                        print("---------------------------------")
                        #世代の値がNaNだった場合は世代1から計算する
                        if generation[0][0] is None:
                            gene = 1
                            clip = 5
                            print("最初から計算します")
                        #世代の値がある場合はテーブルに入っていた世代の次の世代から計算をする
                        else:
                            gene = int(generation[0][0])
                            gene += 1
                            clip = (gene*5)
                            flug = 1
                    length = len(data[Dcount][(data[Dcount]['ex_years']==h) & (data[Dcount]['player_id']==i+1)]['x'])-clip
                    print("rotation = ",Dcount)
                    print("h(ex_years)=",h, "i(player_id)=",i+1)
                    print("generation = ", gene)
                    print("clip = ", clip)
                    print("残りデータ数：",length)
                    if((length<5) & (length != 0)): #現在取得したデータを5つずつ区切って残りデータが5より少なくなった場合はループから抜ける
                        counter = 1
                    else: #現在取得したデータを5つずつ区切ってその中で平均を出す
                        x_tmp = ((data[Dcount][(data[Dcount]['ex_years']==h) & (data[Dcount]['player_id']==i+1)]['x'][0:clip]).values.tolist())
                        y_tmp = ((data[Dcount][(data[Dcount]['ex_years']==h) & (data[Dcount]['player_id']==i+1)]['y'][0:clip]).values.tolist())
                        x = round((np.mean(np.array(x_tmp))),4)
                        y = round((np.mean(np.array(y_tmp))),4)
                        clip += 5
                        print("x_tmp = ",x_tmp)
                        print("y_tmp = ", y_tmp)
                        print("x_mean = ", x)
                        print("y_mean = ", y)
                        cur.execute('INSERT INTO `collective`(`rotation`, `generation`, `experience_years`,`player_id`, `x_coordinate`, `y_coordinate`) VALUES (%s,%s,%s,%s,%s,%s);',(Dcount,gene,h,i+1,x,y))
                        conn.commit()
                        print("rotation=",Dcount ,"experience_years=",h ,"player_id=",i+1, "x_coordinate=",x, "y_coordinate=",y, "generation=",gene)
                        gene += 1
                        time.sleep(0.2)
                counter = 0
                gene = 0
                flug = 0
            time.sleep(0.2)

add()

conn.close()