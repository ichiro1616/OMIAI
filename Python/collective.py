#担当　上村
#ローテーション別、経験年数、主観/客観的で全てが同じものにひとまずカテゴライズをする。
#その中から世代分けをして計算してdbにお気に入り度と共に予め入れておく。

#ライブラリのインポート
import MySQLdb
import pandas as pd
import numpy as np

#dbとの接続・ローテーション別にテーブルから情報を抽出する
#ダミーデータでの経験年数が1~6表記なのでりくと揃えるときにここを書き換える必要がある
conn = MySQLdb.connect(
    host='localhost',
    user='root',
    passwd='Pa22wadoh',
    db='omiai_db')
cur = conn.cursor()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`, `player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 1;")
data0_db = cur.fetchall()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`, `player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 2;")
data1_db = cur.fetchall()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`, `player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 3;")
data2_db = cur.fetchall()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`, `player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 4;")
data3_db = cur.fetchall()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`, `player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 5;")
data4_db = cur.fetchall()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`, `player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 6;")
data5_db = cur.fetchall()
conn.commit() #結果を保存・確定する


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

################################
#
#以下変数名をxとyで変えておくこと。今は同じものになっているので値が書き換わってしまっている。
#
################################

#ダミーデータだと経験年数は1から始まっているのであとからりくと揃えるときに修正が必要
#x軸集合知
#ローテーション：0 ---------------------------------------------------------------------------------
#経験年数：0　主観/客観的：0
df0_e0_so0_pi1 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==0) & (data0['player_id']==1)]['x'].mean()
df0_e0_so0_pi2 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==0) & (data0['player_id']==2)]['x'].mean()
df0_e0_so0_pi3 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==0) & (data0['player_id']==3)]['x'].mean()
df0_e0_so0_pi4 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==0) & (data0['player_id']==4)]['x'].mean()
df0_e0_so0_pi5 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==0) & (data0['player_id']==5)]['x'].mean()
df0_e0_so0_pi6 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==0) & (data0['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：1
df0_e0_so1_pi1 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==1) & (data0['player_id']==1)]['x'].mean()
df0_e0_so1_pi2 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==1) & (data0['player_id']==2)]['x'].mean()
df0_e0_so1_pi3 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==1) & (data0['player_id']==3)]['x'].mean()
df0_e0_so1_pi4 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==1) & (data0['player_id']==4)]['x'].mean()
df0_e0_so1_pi5 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==1) & (data0['player_id']==5)]['x'].mean()
df0_e0_so1_pi6 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==1) & (data0['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：2
df0_e0_so2_pi1 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==2) & (data0['player_id']==1)]['x'].mean()
df0_e0_so2_pi2 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==2) & (data0['player_id']==2)]['x'].mean()
df0_e0_so2_pi3 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==2) & (data0['player_id']==3)]['x'].mean()
df0_e0_so2_pi4 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==2) & (data0['player_id']==4)]['x'].mean()
df0_e0_so2_pi5 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==2) & (data0['player_id']==5)]['x'].mean()
df0_e0_so2_pi6 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==2) & (data0['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：3
df0_e0_so3_pi1 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==3) & (data0['player_id']==1)]['x'].mean()
df0_e0_so3_pi2 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==3) & (data0['player_id']==2)]['x'].mean()
df0_e0_so3_pi3 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==3) & (data0['player_id']==3)]['x'].mean()
df0_e0_so3_pi4 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==3) & (data0['player_id']==4)]['x'].mean()
df0_e0_so3_pi5 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==3) & (data0['player_id']==5)]['x'].mean()
df0_e0_so3_pi6 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==3) & (data0['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：4
df0_e0_so4_pi1 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==4) & (data0['player_id']==1)]['x'].mean()
df0_e0_so4_pi2 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==4) & (data0['player_id']==2)]['x'].mean()
df0_e0_so4_pi3 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==4) & (data0['player_id']==3)]['x'].mean()
df0_e0_so4_pi4 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==4) & (data0['player_id']==4)]['x'].mean()
df0_e0_so4_pi5 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==4) & (data0['player_id']==5)]['x'].mean()
df0_e0_so4_pi6 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==4) & (data0['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：0
df0_e1_so0_pi1 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==0) & (data0['player_id']==1)]['x'].mean()
df0_e1_so0_pi2 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==0) & (data0['player_id']==2)]['x'].mean()
df0_e1_so0_pi3 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==0) & (data0['player_id']==3)]['x'].mean()
df0_e1_so0_pi4 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==0) & (data0['player_id']==4)]['x'].mean()
df0_e1_so0_pi5 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==0) & (data0['player_id']==5)]['x'].mean()
df0_e1_so0_pi6 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==0) & (data0['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：1
df0_e1_so1_pi1 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==1) & (data0['player_id']==1)]['x'].mean()
df0_e1_so1_pi2 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==1) & (data0['player_id']==2)]['x'].mean()
df0_e1_so1_pi3 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==1) & (data0['player_id']==3)]['x'].mean()
df0_e1_so1_pi4 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==1) & (data0['player_id']==4)]['x'].mean()
df0_e1_so1_pi5 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==1) & (data0['player_id']==5)]['x'].mean()
df0_e1_so1_pi6 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==1) & (data0['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：2
df0_e1_so2_pi1 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==2) & (data0['player_id']==1)]['x'].mean()
df0_e1_so2_pi2 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==2) & (data0['player_id']==2)]['x'].mean()
df0_e1_so2_pi3 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==2) & (data0['player_id']==3)]['x'].mean()
df0_e1_so2_pi4 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==2) & (data0['player_id']==4)]['x'].mean()
df0_e1_so2_pi5 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==2) & (data0['player_id']==5)]['x'].mean()
df0_e1_so2_pi6 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==2) & (data0['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：3
df0_e1_so3_pi1 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==3) & (data0['player_id']==1)]['x'].mean()
df0_e1_so3_pi2 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==3) & (data0['player_id']==2)]['x'].mean()
df0_e1_so3_pi3 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==3) & (data0['player_id']==3)]['x'].mean()
df0_e1_so3_pi4 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==3) & (data0['player_id']==4)]['x'].mean()
df0_e1_so3_pi5 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==3) & (data0['player_id']==5)]['x'].mean()
df0_e1_so3_pi6 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==3) & (data0['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：4
df0_e1_so4_pi1 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==4) & (data0['player_id']==1)]['x'].mean()
df0_e1_so4_pi2 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==4) & (data0['player_id']==2)]['x'].mean()
df0_e1_so4_pi3 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==4) & (data0['player_id']==3)]['x'].mean()
df0_e1_so4_pi4 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==4) & (data0['player_id']==4)]['x'].mean()
df0_e1_so4_pi5 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==4) & (data0['player_id']==5)]['x'].mean()
df0_e1_so4_pi6 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==4) & (data0['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：0
df0_e2_so0_pi1 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==0) & (data0['player_id']==1)]['x'].mean()
df0_e2_so0_pi2 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==0) & (data0['player_id']==2)]['x'].mean()
df0_e2_so0_pi3 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==0) & (data0['player_id']==3)]['x'].mean()
df0_e2_so0_pi4 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==0) & (data0['player_id']==4)]['x'].mean()
df0_e2_so0_pi5 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==0) & (data0['player_id']==5)]['x'].mean()
df0_e2_so0_pi6 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==0) & (data0['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：1
df0_e2_so1_pi1 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==1) & (data0['player_id']==1)]['x'].mean()
df0_e2_so1_pi2 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==1) & (data0['player_id']==2)]['x'].mean()
df0_e2_so1_pi3 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==1) & (data0['player_id']==3)]['x'].mean()
df0_e2_so1_pi4 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==1) & (data0['player_id']==4)]['x'].mean()
df0_e2_so1_pi5 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==1) & (data0['player_id']==5)]['x'].mean()
df0_e2_so1_pi6 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==1) & (data0['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：2
df0_e2_so2_pi1 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==2) & (data0['player_id']==1)]['x'].mean()
df0_e2_so2_pi2 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==2) & (data0['player_id']==2)]['x'].mean()
df0_e2_so2_pi3 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==2) & (data0['player_id']==3)]['x'].mean()
df0_e2_so2_pi4 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==2) & (data0['player_id']==4)]['x'].mean()
df0_e2_so2_pi5 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==2) & (data0['player_id']==5)]['x'].mean()
df0_e2_so2_pi6 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==2) & (data0['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：3
df0_e2_so3_pi1 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==3) & (data0['player_id']==1)]['x'].mean()
df0_e2_so3_pi2 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==3) & (data0['player_id']==2)]['x'].mean()
df0_e2_so3_pi3 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==3) & (data0['player_id']==3)]['x'].mean()
df0_e2_so3_pi4 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==3) & (data0['player_id']==4)]['x'].mean()
df0_e2_so3_pi5 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==3) & (data0['player_id']==5)]['x'].mean()
df0_e2_so3_pi6 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==3) & (data0['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：4
df0_e2_so4_pi1 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==4) & (data0['player_id']==1)]['x'].mean()
df0_e2_so4_pi2 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==4) & (data0['player_id']==2)]['x'].mean()
df0_e2_so4_pi3 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==4) & (data0['player_id']==3)]['x'].mean()
df0_e2_so4_pi4 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==4) & (data0['player_id']==4)]['x'].mean()
df0_e2_so4_pi5 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==4) & (data0['player_id']==5)]['x'].mean()
df0_e2_so4_pi6 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==4) & (data0['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：0
df0_e3_so0_pi1 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==0) & (data0['player_id']==1)]['x'].mean()
df0_e3_so0_pi2 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==0) & (data0['player_id']==2)]['x'].mean()
df0_e3_so0_pi3 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==0) & (data0['player_id']==3)]['x'].mean()
df0_e3_so0_pi4 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==0) & (data0['player_id']==4)]['x'].mean()
df0_e3_so0_pi5 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==0) & (data0['player_id']==5)]['x'].mean()
df0_e3_so0_pi6 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==0) & (data0['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：1
df0_e3_so1_pi1 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==1) & (data0['player_id']==1)]['x'].mean()
df0_e3_so1_pi2 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==1) & (data0['player_id']==2)]['x'].mean()
df0_e3_so1_pi3 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==1) & (data0['player_id']==3)]['x'].mean()
df0_e3_so1_pi4 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==1) & (data0['player_id']==4)]['x'].mean()
df0_e3_so1_pi5 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==1) & (data0['player_id']==5)]['x'].mean()
df0_e3_so1_pi6 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==1) & (data0['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：2
df0_e3_so2_pi1 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==2) & (data0['player_id']==1)]['x'].mean()
df0_e3_so2_pi2 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==2) & (data0['player_id']==2)]['x'].mean()
df0_e3_so2_pi3 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==2) & (data0['player_id']==3)]['x'].mean()
df0_e3_so2_pi4 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==2) & (data0['player_id']==4)]['x'].mean()
df0_e3_so2_pi5 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==2) & (data0['player_id']==5)]['x'].mean()
df0_e3_so2_pi6 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==2) & (data0['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：3
df0_e3_so3_pi1 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==3) & (data0['player_id']==1)]['x'].mean()
df0_e3_so3_pi2 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==3) & (data0['player_id']==2)]['x'].mean()
df0_e3_so3_pi3 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==3) & (data0['player_id']==3)]['x'].mean()
df0_e3_so3_pi4 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==3) & (data0['player_id']==4)]['x'].mean()
df0_e3_so3_pi5 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==3) & (data0['player_id']==5)]['x'].mean()
df0_e3_so3_pi6 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==3) & (data0['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：4
df0_e3_so4_pi1 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==4) & (data0['player_id']==1)]['x'].mean()
df0_e3_so4_pi2 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==4) & (data0['player_id']==2)]['x'].mean()
df0_e3_so4_pi3 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==4) & (data0['player_id']==3)]['x'].mean()
df0_e3_so4_pi4 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==4) & (data0['player_id']==4)]['x'].mean()
df0_e3_so4_pi5 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==4) & (data0['player_id']==5)]['x'].mean()
df0_e3_so4_pi6 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==4) & (data0['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：0
df0_e4_so0_pi1 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==0) & (data0['player_id']==1)]['x'].mean()
df0_e4_so0_pi2 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==0) & (data0['player_id']==2)]['x'].mean()
df0_e4_so0_pi3 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==0) & (data0['player_id']==3)]['x'].mean()
df0_e4_so0_pi4 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==0) & (data0['player_id']==4)]['x'].mean()
df0_e4_so0_pi5 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==0) & (data0['player_id']==5)]['x'].mean()
df0_e4_so0_pi6 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==0) & (data0['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：1
df0_e4_so1_pi1 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==1) & (data0['player_id']==1)]['x'].mean()
df0_e4_so1_pi2 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==1) & (data0['player_id']==2)]['x'].mean()
df0_e4_so1_pi3 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==1) & (data0['player_id']==3)]['x'].mean()
df0_e4_so1_pi4 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==1) & (data0['player_id']==4)]['x'].mean()
df0_e4_so1_pi5 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==1) & (data0['player_id']==5)]['x'].mean()
df0_e4_so1_pi6 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==1) & (data0['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：2
df0_e4_so2_pi1 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==2) & (data0['player_id']==1)]['x'].mean()
df0_e4_so2_pi2 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==2) & (data0['player_id']==2)]['x'].mean()
df0_e4_so2_pi3 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==2) & (data0['player_id']==3)]['x'].mean()
df0_e4_so2_pi4 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==2) & (data0['player_id']==4)]['x'].mean()
df0_e4_so2_pi5 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==2) & (data0['player_id']==5)]['x'].mean()
df0_e4_so2_pi6 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==2) & (data0['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：3
df0_e4_so3_pi1 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==3) & (data0['player_id']==1)]['x'].mean()
df0_e4_so3_pi2 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==3) & (data0['player_id']==2)]['x'].mean()
df0_e4_so3_pi3 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==3) & (data0['player_id']==3)]['x'].mean()
df0_e4_so3_pi4 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==3) & (data0['player_id']==4)]['x'].mean()
df0_e4_so3_pi5 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==3) & (data0['player_id']==5)]['x'].mean()
df0_e4_so3_pi6 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==3) & (data0['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：4
df0_e4_so4_pi1 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==4) & (data0['player_id']==1)]['x'].mean()
df0_e4_so4_pi2 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==4) & (data0['player_id']==2)]['x'].mean()
df0_e4_so4_pi3 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==4) & (data0['player_id']==3)]['x'].mean()
df0_e4_so4_pi4 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==4) & (data0['player_id']==4)]['x'].mean()
df0_e4_so4_pi5 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==4) & (data0['player_id']==5)]['x'].mean()
df0_e4_so4_pi6 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==4) & (data0['player_id']==6)]['x'].mean()



#ローテーション：1 ---------------------------------------------------------------------------------
#経験年数：0　主観/客観的：0
df1_e0_so0_pi1 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==0) & (data1['player_id']==1)]['x'].mean()
df1_e0_so0_pi2 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==0) & (data1['player_id']==2)]['x'].mean()
df1_e0_so0_pi3 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==0) & (data1['player_id']==3)]['x'].mean()
df1_e0_so0_pi4 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==0) & (data1['player_id']==4)]['x'].mean()
df1_e0_so0_pi5 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==0) & (data1['player_id']==5)]['x'].mean()
df1_e0_so0_pi6 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==0) & (data1['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：1
df1_e0_so1_pi1 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==1) & (data1['player_id']==1)]['x'].mean()
df1_e0_so1_pi2 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==1) & (data1['player_id']==2)]['x'].mean()
df1_e0_so1_pi3 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==1) & (data1['player_id']==3)]['x'].mean()
df1_e0_so1_pi4 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==1) & (data1['player_id']==4)]['x'].mean()
df1_e0_so1_pi5 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==1) & (data1['player_id']==5)]['x'].mean()
df1_e0_so1_pi6 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==1) & (data1['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：2
df1_e0_so2_pi1 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==2) & (data1['player_id']==1)]['x'].mean()
df1_e0_so2_pi2 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==2) & (data1['player_id']==2)]['x'].mean()
df1_e0_so2_pi3 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==2) & (data1['player_id']==3)]['x'].mean()
df1_e0_so2_pi4 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==2) & (data1['player_id']==4)]['x'].mean()
df1_e0_so2_pi5 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==2) & (data1['player_id']==5)]['x'].mean()
df1_e0_so2_pi6 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==2) & (data1['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：3
df1_e0_so3_pi1 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==3) & (data1['player_id']==1)]['x'].mean()
df1_e0_so3_pi2 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==3) & (data1['player_id']==2)]['x'].mean()
df1_e0_so3_pi3 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==3) & (data1['player_id']==3)]['x'].mean()
df1_e0_so3_pi4 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==3) & (data1['player_id']==4)]['x'].mean()
df1_e0_so3_pi5 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==3) & (data1['player_id']==5)]['x'].mean()
df1_e0_so3_pi6 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==3) & (data1['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：4
df1_e0_so4_pi1 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==4) & (data1['player_id']==1)]['x'].mean()
df1_e0_so4_pi2 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==4) & (data1['player_id']==2)]['x'].mean()
df1_e0_so4_pi3 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==4) & (data1['player_id']==3)]['x'].mean()
df1_e0_so4_pi4 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==4) & (data1['player_id']==4)]['x'].mean()
df1_e0_so4_pi5 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==4) & (data1['player_id']==5)]['x'].mean()
df1_e0_so4_pi6 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==4) & (data1['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：0
df1_e1_so0_pi1 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==0) & (data1['player_id']==1)]['x'].mean()
df1_e1_so0_pi2 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==0) & (data1['player_id']==2)]['x'].mean()
df1_e1_so0_pi3 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==0) & (data1['player_id']==3)]['x'].mean()
df1_e1_so0_pi4 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==0) & (data1['player_id']==4)]['x'].mean()
df1_e1_so0_pi5 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==0) & (data1['player_id']==5)]['x'].mean()
df1_e1_so0_pi6 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==0) & (data1['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：1
df1_e1_so1_pi1 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==1) & (data1['player_id']==1)]['x'].mean()
df1_e1_so1_pi2 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==1) & (data1['player_id']==2)]['x'].mean()
df1_e1_so1_pi3 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==1) & (data1['player_id']==3)]['x'].mean()
df1_e1_so1_pi4 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==1) & (data1['player_id']==4)]['x'].mean()
df1_e1_so1_pi5 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==1) & (data1['player_id']==5)]['x'].mean()
df1_e1_so1_pi6 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==1) & (data1['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：2
df1_e1_so2_pi1 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==2) & (data1['player_id']==1)]['x'].mean()
df1_e1_so2_pi2 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==2) & (data1['player_id']==2)]['x'].mean()
df1_e1_so2_pi3 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==2) & (data1['player_id']==3)]['x'].mean()
df1_e1_so2_pi4 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==2) & (data1['player_id']==4)]['x'].mean()
df1_e1_so2_pi5 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==2) & (data1['player_id']==5)]['x'].mean()
df1_e1_so2_pi6 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==2) & (data1['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：3
df1_e1_so3_pi1 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==3) & (data1['player_id']==1)]['x'].mean()
df1_e1_so3_pi2 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==3) & (data1['player_id']==2)]['x'].mean()
df1_e1_so3_pi3 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==3) & (data1['player_id']==3)]['x'].mean()
df1_e1_so3_pi4 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==3) & (data1['player_id']==4)]['x'].mean()
df1_e1_so3_pi5 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==3) & (data1['player_id']==5)]['x'].mean()
df1_e1_so3_pi6 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==3) & (data1['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：4
df1_e1_so4_pi1 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==4) & (data1['player_id']==1)]['x'].mean()
df1_e1_so4_pi2 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==4) & (data1['player_id']==2)]['x'].mean()
df1_e1_so4_pi3 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==4) & (data1['player_id']==3)]['x'].mean()
df1_e1_so4_pi4 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==4) & (data1['player_id']==4)]['x'].mean()
df1_e1_so4_pi5 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==4) & (data1['player_id']==5)]['x'].mean()
df1_e1_so4_pi6 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==4) & (data1['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：0
df1_e2_so0_pi1 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==0) & (data1['player_id']==1)]['x'].mean()
df1_e2_so0_pi2 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==0) & (data1['player_id']==2)]['x'].mean()
df1_e2_so0_pi3 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==0) & (data1['player_id']==3)]['x'].mean()
df1_e2_so0_pi4 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==0) & (data1['player_id']==4)]['x'].mean()
df1_e2_so0_pi5 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==0) & (data1['player_id']==5)]['x'].mean()
df1_e2_so0_pi6 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==0) & (data1['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：1
df1_e2_so1_pi1 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==1) & (data1['player_id']==1)]['x'].mean()
df1_e2_so1_pi2 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==1) & (data1['player_id']==2)]['x'].mean()
df1_e2_so1_pi3 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==1) & (data1['player_id']==3)]['x'].mean()
df1_e2_so1_pi4 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==1) & (data1['player_id']==4)]['x'].mean()
df1_e2_so1_pi5 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==1) & (data1['player_id']==5)]['x'].mean()
df1_e2_so1_pi6 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==1) & (data1['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：2
df1_e2_so2_pi1 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==2) & (data1['player_id']==1)]['x'].mean()
df1_e2_so2_pi2 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==2) & (data1['player_id']==2)]['x'].mean()
df1_e2_so2_pi3 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==2) & (data1['player_id']==3)]['x'].mean()
df1_e2_so2_pi4 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==2) & (data1['player_id']==4)]['x'].mean()
df1_e2_so2_pi5 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==2) & (data1['player_id']==5)]['x'].mean()
df1_e2_so2_pi6 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==2) & (data1['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：3
df1_e2_so3_pi1 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==3) & (data1['player_id']==1)]['x'].mean()
df1_e2_so3_pi2 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==3) & (data1['player_id']==2)]['x'].mean()
df1_e2_so3_pi3 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==3) & (data1['player_id']==3)]['x'].mean()
df1_e2_so3_pi4 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==3) & (data1['player_id']==4)]['x'].mean()
df1_e2_so3_pi5 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==3) & (data1['player_id']==5)]['x'].mean()
df1_e2_so3_pi6 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==3) & (data1['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：4
df1_e2_so4_pi1 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==4) & (data1['player_id']==1)]['x'].mean()
df1_e2_so4_pi2 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==4) & (data1['player_id']==2)]['x'].mean()
df1_e2_so4_pi3 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==4) & (data1['player_id']==3)]['x'].mean()
df1_e2_so4_pi4 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==4) & (data1['player_id']==4)]['x'].mean()
df1_e2_so4_pi5 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==4) & (data1['player_id']==5)]['x'].mean()
df1_e2_so4_pi6 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==4) & (data1['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：0
df1_e3_so0_pi1 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==0) & (data1['player_id']==1)]['x'].mean()
df1_e3_so0_pi2 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==0) & (data1['player_id']==2)]['x'].mean()
df1_e3_so0_pi3 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==0) & (data1['player_id']==3)]['x'].mean()
df1_e3_so0_pi4 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==0) & (data1['player_id']==4)]['x'].mean()
df1_e3_so0_pi5 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==0) & (data1['player_id']==5)]['x'].mean()
df1_e3_so0_pi6 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==0) & (data1['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：1
df1_e3_so1_pi1 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==1) & (data1['player_id']==1)]['x'].mean()
df1_e3_so1_pi2 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==1) & (data1['player_id']==2)]['x'].mean()
df1_e3_so1_pi3 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==1) & (data1['player_id']==3)]['x'].mean()
df1_e3_so1_pi4 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==1) & (data1['player_id']==4)]['x'].mean()
df1_e3_so1_pi5 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==1) & (data1['player_id']==5)]['x'].mean()
df1_e3_so1_pi6 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==1) & (data1['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：2
df1_e3_so2_pi1 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==2) & (data1['player_id']==1)]['x'].mean()
df1_e3_so2_pi2 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==2) & (data1['player_id']==2)]['x'].mean()
df1_e3_so2_pi3 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==2) & (data1['player_id']==3)]['x'].mean()
df1_e3_so2_pi4 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==2) & (data1['player_id']==4)]['x'].mean()
df1_e3_so2_pi5 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==2) & (data1['player_id']==5)]['x'].mean()
df1_e3_so2_pi6 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==2) & (data1['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：3
df1_e3_so3_pi1 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==3) & (data1['player_id']==1)]['x'].mean()
df1_e3_so3_pi2 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==3) & (data1['player_id']==2)]['x'].mean()
df1_e3_so3_pi3 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==3) & (data1['player_id']==3)]['x'].mean()
df1_e3_so3_pi4 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==3) & (data1['player_id']==4)]['x'].mean()
df1_e3_so3_pi5 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==3) & (data1['player_id']==5)]['x'].mean()
df1_e3_so3_pi6 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==3) & (data1['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：4
df1_e3_so4_pi1 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==4) & (data1['player_id']==1)]['x'].mean()
df1_e3_so4_pi2 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==4) & (data1['player_id']==2)]['x'].mean()
df1_e3_so4_pi3 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==4) & (data1['player_id']==3)]['x'].mean()
df1_e3_so4_pi4 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==4) & (data1['player_id']==4)]['x'].mean()
df1_e3_so4_pi5 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==4) & (data1['player_id']==5)]['x'].mean()
df1_e3_so4_pi6 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==4) & (data1['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：0
df1_e4_so0_pi1 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==0) & (data1['player_id']==1)]['x'].mean()
df1_e4_so0_pi2 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==0) & (data1['player_id']==2)]['x'].mean()
df1_e4_so0_pi3 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==0) & (data1['player_id']==3)]['x'].mean()
df1_e4_so0_pi4 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==0) & (data1['player_id']==4)]['x'].mean()
df1_e4_so0_pi5 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==0) & (data1['player_id']==5)]['x'].mean()
df1_e4_so0_pi6 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==0) & (data1['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：1
df1_e4_so1_pi1 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==1) & (data1['player_id']==1)]['x'].mean()
df1_e4_so1_pi2 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==1) & (data1['player_id']==2)]['x'].mean()
df1_e4_so1_pi3 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==1) & (data1['player_id']==3)]['x'].mean()
df1_e4_so1_pi4 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==1) & (data1['player_id']==4)]['x'].mean()
df1_e4_so1_pi5 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==1) & (data1['player_id']==5)]['x'].mean()
df1_e4_so1_pi6 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==1) & (data1['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：2
df1_e4_so2_pi1 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==2) & (data1['player_id']==1)]['x'].mean()
df1_e4_so2_pi2 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==2) & (data1['player_id']==2)]['x'].mean()
df1_e4_so2_pi3 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==2) & (data1['player_id']==3)]['x'].mean()
df1_e4_so2_pi4 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==2) & (data1['player_id']==4)]['x'].mean()
df1_e4_so2_pi5 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==2) & (data1['player_id']==5)]['x'].mean()
df1_e4_so2_pi6 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==2) & (data1['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：3
df1_e4_so3_pi1 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==3) & (data1['player_id']==1)]['x'].mean()
df1_e4_so3_pi2 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==3) & (data1['player_id']==2)]['x'].mean()
df1_e4_so3_pi3 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==3) & (data1['player_id']==3)]['x'].mean()
df1_e4_so3_pi4 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==3) & (data1['player_id']==4)]['x'].mean()
df1_e4_so3_pi5 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==3) & (data1['player_id']==5)]['x'].mean()
df1_e4_so3_pi6 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==3) & (data1['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：4
df1_e4_so4_pi1 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==4) & (data1['player_id']==1)]['x'].mean()
df1_e4_so4_pi2 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==4) & (data1['player_id']==2)]['x'].mean()
df1_e4_so4_pi3 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==4) & (data1['player_id']==3)]['x'].mean()
df1_e4_so4_pi4 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==4) & (data1['player_id']==4)]['x'].mean()
df1_e4_so4_pi5 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==4) & (data1['player_id']==5)]['x'].mean()
df1_e4_so4_pi6 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==4) & (data1['player_id']==6)]['x'].mean()



#ローテーション：2 ---------------------------------------------------------------------------------
#経験年数：0　主観/客観的：0
df2_e0_so0_pi1 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==0) & (data2['player_id']==1)]['x'].mean()
df2_e0_so0_pi2 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==0) & (data2['player_id']==2)]['x'].mean()
df2_e0_so0_pi3 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==0) & (data2['player_id']==3)]['x'].mean()
df2_e0_so0_pi4 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==0) & (data2['player_id']==4)]['x'].mean()
df2_e0_so0_pi5 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==0) & (data2['player_id']==5)]['x'].mean()
df2_e0_so0_pi6 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==0) & (data2['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：1
df2_e0_so1_pi1 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==1) & (data2['player_id']==1)]['x'].mean()
df2_e0_so1_pi2 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==1) & (data2['player_id']==2)]['x'].mean()
df2_e0_so1_pi3 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==1) & (data2['player_id']==3)]['x'].mean()
df2_e0_so1_pi4 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==1) & (data2['player_id']==4)]['x'].mean()
df2_e0_so1_pi5 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==1) & (data2['player_id']==5)]['x'].mean()
df2_e0_so1_pi6 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==1) & (data2['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：2
df2_e0_so2_pi1 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==2) & (data2['player_id']==1)]['x'].mean()
df2_e0_so2_pi2 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==2) & (data2['player_id']==2)]['x'].mean()
df2_e0_so2_pi3 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==2) & (data2['player_id']==3)]['x'].mean()
df2_e0_so2_pi4 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==2) & (data2['player_id']==4)]['x'].mean()
df2_e0_so2_pi5 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==2) & (data2['player_id']==5)]['x'].mean()
df2_e0_so2_pi6 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==2) & (data2['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：3
df2_e0_so3_pi1 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==3) & (data2['player_id']==1)]['x'].mean()
df2_e0_so3_pi2 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==3) & (data2['player_id']==2)]['x'].mean()
df2_e0_so3_pi3 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==3) & (data2['player_id']==3)]['x'].mean()
df2_e0_so3_pi4 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==3) & (data2['player_id']==4)]['x'].mean()
df2_e0_so3_pi5 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==3) & (data2['player_id']==5)]['x'].mean()
df2_e0_so3_pi6 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==3) & (data2['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：4
df2_e0_so4_pi1 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==4) & (data2['player_id']==1)]['x'].mean()
df2_e0_so4_pi2 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==4) & (data2['player_id']==2)]['x'].mean()
df2_e0_so4_pi3 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==4) & (data2['player_id']==3)]['x'].mean()
df2_e0_so4_pi4 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==4) & (data2['player_id']==4)]['x'].mean()
df2_e0_so4_pi5 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==4) & (data2['player_id']==5)]['x'].mean()
df2_e0_so4_pi6 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==4) & (data2['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：0
df2_e1_so0_pi1 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==0) & (data2['player_id']==1)]['x'].mean()
df2_e1_so0_pi2 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==0) & (data2['player_id']==2)]['x'].mean()
df2_e1_so0_pi3 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==0) & (data2['player_id']==3)]['x'].mean()
df2_e1_so0_pi4 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==0) & (data2['player_id']==4)]['x'].mean()
df2_e1_so0_pi5 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==0) & (data2['player_id']==5)]['x'].mean()
df2_e1_so0_pi6 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==0) & (data2['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：1
df2_e1_so1_pi1 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==1) & (data2['player_id']==1)]['x'].mean()
df2_e1_so1_pi2 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==1) & (data2['player_id']==2)]['x'].mean()
df2_e1_so1_pi3 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==1) & (data2['player_id']==3)]['x'].mean()
df2_e1_so1_pi4 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==1) & (data2['player_id']==4)]['x'].mean()
df2_e1_so1_pi5 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==1) & (data2['player_id']==5)]['x'].mean()
df2_e1_so1_pi6 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==1) & (data2['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：2
df2_e1_so2_pi1 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==2) & (data2['player_id']==1)]['x'].mean()
df2_e1_so2_pi2 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==2) & (data2['player_id']==2)]['x'].mean()
df2_e1_so2_pi3 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==2) & (data2['player_id']==3)]['x'].mean()
df2_e1_so2_pi4 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==2) & (data2['player_id']==4)]['x'].mean()
df2_e1_so2_pi5 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==2) & (data2['player_id']==5)]['x'].mean()
df2_e1_so2_pi6 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==2) & (data2['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：3
df2_e1_so3_pi1 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==3) & (data2['player_id']==1)]['x'].mean()
df2_e1_so3_pi2 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==3) & (data2['player_id']==2)]['x'].mean()
df2_e1_so3_pi3 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==3) & (data2['player_id']==3)]['x'].mean()
df2_e1_so3_pi4 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==3) & (data2['player_id']==4)]['x'].mean()
df2_e1_so3_pi5 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==3) & (data2['player_id']==5)]['x'].mean()
df2_e1_so3_pi6 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==3) & (data2['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：4
df2_e1_so4_pi1 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==4) & (data2['player_id']==1)]['x'].mean()
df2_e1_so4_pi2 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==4) & (data2['player_id']==2)]['x'].mean()
df2_e1_so4_pi3 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==4) & (data2['player_id']==3)]['x'].mean()
df2_e1_so4_pi4 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==4) & (data2['player_id']==4)]['x'].mean()
df2_e1_so4_pi5 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==4) & (data2['player_id']==5)]['x'].mean()
df2_e1_so4_pi6 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==4) & (data2['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：0
df2_e2_so0_pi1 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==0) & (data2['player_id']==1)]['x'].mean()
df2_e2_so0_pi2 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==0) & (data2['player_id']==2)]['x'].mean()
df2_e2_so0_pi3 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==0) & (data2['player_id']==3)]['x'].mean()
df2_e2_so0_pi4 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==0) & (data2['player_id']==4)]['x'].mean()
df2_e2_so0_pi5 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==0) & (data2['player_id']==5)]['x'].mean()
df2_e2_so0_pi6 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==0) & (data2['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：1
df2_e2_so1_pi1 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==1) & (data2['player_id']==1)]['x'].mean()
df2_e2_so1_pi2 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==1) & (data2['player_id']==2)]['x'].mean()
df2_e2_so1_pi3 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==1) & (data2['player_id']==3)]['x'].mean()
df2_e2_so1_pi4 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==1) & (data2['player_id']==4)]['x'].mean()
df2_e2_so1_pi5 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==1) & (data2['player_id']==5)]['x'].mean()
df2_e2_so1_pi6 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==1) & (data2['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：2
df2_e2_so2_pi1 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==2) & (data2['player_id']==1)]['x'].mean()
df2_e2_so2_pi2 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==2) & (data2['player_id']==2)]['x'].mean()
df2_e2_so2_pi3 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==2) & (data2['player_id']==3)]['x'].mean()
df2_e2_so2_pi4 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==2) & (data2['player_id']==4)]['x'].mean()
df2_e2_so2_pi5 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==2) & (data2['player_id']==5)]['x'].mean()
df2_e2_so2_pi6 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==2) & (data2['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：3
df2_e2_so3_pi1 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==3) & (data2['player_id']==1)]['x'].mean()
df2_e2_so3_pi2 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==3) & (data2['player_id']==2)]['x'].mean()
df2_e2_so3_pi3 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==3) & (data2['player_id']==3)]['x'].mean()
df2_e2_so3_pi4 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==3) & (data2['player_id']==4)]['x'].mean()
df2_e2_so3_pi5 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==3) & (data2['player_id']==5)]['x'].mean()
df2_e2_so3_pi6 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==3) & (data2['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：4
df2_e2_so4_pi1 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==4) & (data2['player_id']==1)]['x'].mean()
df2_e2_so4_pi2 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==4) & (data2['player_id']==2)]['x'].mean()
df2_e2_so4_pi3 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==4) & (data2['player_id']==3)]['x'].mean()
df2_e2_so4_pi4 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==4) & (data2['player_id']==4)]['x'].mean()
df2_e2_so4_pi5 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==4) & (data2['player_id']==5)]['x'].mean()
df2_e2_so4_pi6 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==4) & (data2['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：0
df2_e3_so0_pi1 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==0) & (data2['player_id']==1)]['x'].mean()
df2_e3_so0_pi2 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==0) & (data2['player_id']==2)]['x'].mean()
df2_e3_so0_pi3 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==0) & (data2['player_id']==3)]['x'].mean()
df2_e3_so0_pi4 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==0) & (data2['player_id']==4)]['x'].mean()
df2_e3_so0_pi5 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==0) & (data2['player_id']==5)]['x'].mean()
df2_e3_so0_pi6 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==0) & (data2['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：1
df2_e3_so1_pi1 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==1) & (data2['player_id']==1)]['x'].mean()
df2_e3_so1_pi2 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==1) & (data2['player_id']==2)]['x'].mean()
df2_e3_so1_pi3 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==1) & (data2['player_id']==3)]['x'].mean()
df2_e3_so1_pi4 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==1) & (data2['player_id']==4)]['x'].mean()
df2_e3_so1_pi5 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==1) & (data2['player_id']==5)]['x'].mean()
df2_e3_so1_pi6 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==1) & (data2['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：2
df2_e3_so2_pi1 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==2) & (data2['player_id']==1)]['x'].mean()
df2_e3_so2_pi2 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==2) & (data2['player_id']==2)]['x'].mean()
df2_e3_so2_pi3 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==2) & (data2['player_id']==3)]['x'].mean()
df2_e3_so2_pi4 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==2) & (data2['player_id']==4)]['x'].mean()
df2_e3_so2_pi5 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==2) & (data2['player_id']==5)]['x'].mean()
df2_e3_so2_pi6 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==2) & (data2['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：3
df2_e3_so3_pi1 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==3) & (data2['player_id']==1)]['x'].mean()
df2_e3_so3_pi2 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==3) & (data2['player_id']==2)]['x'].mean()
df2_e3_so3_pi3 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==3) & (data2['player_id']==3)]['x'].mean()
df2_e3_so3_pi4 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==3) & (data2['player_id']==4)]['x'].mean()
df2_e3_so3_pi5 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==3) & (data2['player_id']==5)]['x'].mean()
df2_e3_so3_pi6 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==3) & (data2['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：4
df2_e3_so4_pi1 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==4) & (data2['player_id']==1)]['x'].mean()
df2_e3_so4_pi2 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==4) & (data2['player_id']==2)]['x'].mean()
df2_e3_so4_pi3 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==4) & (data2['player_id']==3)]['x'].mean()
df2_e3_so4_pi4 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==4) & (data2['player_id']==4)]['x'].mean()
df2_e3_so4_pi5 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==4) & (data2['player_id']==5)]['x'].mean()
df2_e3_so4_pi6 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==4) & (data2['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：0
df2_e4_so0_pi1 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==0) & (data2['player_id']==1)]['x'].mean()
df2_e4_so0_pi2 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==0) & (data2['player_id']==2)]['x'].mean()
df2_e4_so0_pi3 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==0) & (data2['player_id']==3)]['x'].mean()
df2_e4_so0_pi4 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==0) & (data2['player_id']==4)]['x'].mean()
df2_e4_so0_pi5 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==0) & (data2['player_id']==5)]['x'].mean()
df2_e4_so0_pi6 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==0) & (data2['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：1
df2_e4_so1_pi1 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==1) & (data2['player_id']==1)]['x'].mean()
df2_e4_so1_pi2 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==1) & (data2['player_id']==2)]['x'].mean()
df2_e4_so1_pi3 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==1) & (data2['player_id']==3)]['x'].mean()
df2_e4_so1_pi4 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==1) & (data2['player_id']==4)]['x'].mean()
df2_e4_so1_pi5 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==1) & (data2['player_id']==5)]['x'].mean()
df2_e4_so1_pi6 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==1) & (data2['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：2
df2_e4_so2_pi1 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==2) & (data2['player_id']==1)]['x'].mean()
df2_e4_so2_pi2 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==2) & (data2['player_id']==2)]['x'].mean()
df2_e4_so2_pi3 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==2) & (data2['player_id']==3)]['x'].mean()
df2_e4_so2_pi4 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==2) & (data2['player_id']==4)]['x'].mean()
df2_e4_so2_pi5 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==2) & (data2['player_id']==5)]['x'].mean()
df2_e4_so2_pi6 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==2) & (data2['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：3
df2_e4_so3_pi1 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==3) & (data2['player_id']==1)]['x'].mean()
df2_e4_so3_pi2 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==3) & (data2['player_id']==2)]['x'].mean()
df2_e4_so3_pi3 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==3) & (data2['player_id']==3)]['x'].mean()
df2_e4_so3_pi4 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==3) & (data2['player_id']==4)]['x'].mean()
df2_e4_so3_pi5 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==3) & (data2['player_id']==5)]['x'].mean()
df2_e4_so3_pi6 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==3) & (data2['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：4
df2_e4_so4_pi1 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==4) & (data2['player_id']==1)]['x'].mean()
df2_e4_so4_pi2 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==4) & (data2['player_id']==2)]['x'].mean()
df2_e4_so4_pi3 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==4) & (data2['player_id']==3)]['x'].mean()
df2_e4_so4_pi4 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==4) & (data2['player_id']==4)]['x'].mean()
df2_e4_so4_pi5 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==4) & (data2['player_id']==5)]['x'].mean()
df2_e4_so4_pi6 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==4) & (data2['player_id']==6)]['x'].mean()



#ローテーション：3 ---------------------------------------------------------------------------------
#経験年数：0　主観/客観的：0
df3_e0_so0_pi1 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==0) & (data3['player_id']==1)]['x'].mean()
df3_e0_so0_pi2 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==0) & (data3['player_id']==2)]['x'].mean()
df3_e0_so0_pi3 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==0) & (data3['player_id']==3)]['x'].mean()
df3_e0_so0_pi4 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==0) & (data3['player_id']==4)]['x'].mean()
df3_e0_so0_pi5 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==0) & (data3['player_id']==5)]['x'].mean()
df3_e0_so0_pi6 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==0) & (data3['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：1
df3_e0_so1_pi1 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==1) & (data3['player_id']==1)]['x'].mean()
df3_e0_so1_pi2 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==1) & (data3['player_id']==2)]['x'].mean()
df3_e0_so1_pi3 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==1) & (data3['player_id']==3)]['x'].mean()
df3_e0_so1_pi4 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==1) & (data3['player_id']==4)]['x'].mean()
df3_e0_so1_pi5 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==1) & (data3['player_id']==5)]['x'].mean()
df3_e0_so1_pi6 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==1) & (data3['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：2
df3_e0_so2_pi1 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==2) & (data3['player_id']==1)]['x'].mean()
df3_e0_so2_pi2 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==2) & (data3['player_id']==2)]['x'].mean()
df3_e0_so2_pi3 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==2) & (data3['player_id']==3)]['x'].mean()
df3_e0_so2_pi4 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==2) & (data3['player_id']==4)]['x'].mean()
df3_e0_so2_pi5 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==2) & (data3['player_id']==5)]['x'].mean()
df3_e0_so2_pi6 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==2) & (data3['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：3
df3_e0_so3_pi1 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==3) & (data3['player_id']==1)]['x'].mean()
df3_e0_so3_pi2 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==3) & (data3['player_id']==2)]['x'].mean()
df3_e0_so3_pi3 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==3) & (data3['player_id']==3)]['x'].mean()
df3_e0_so3_pi4 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==3) & (data3['player_id']==4)]['x'].mean()
df3_e0_so3_pi5 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==3) & (data3['player_id']==5)]['x'].mean()
df3_e0_so3_pi6 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==3) & (data3['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：4
df3_e0_so4_pi1 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==4) & (data3['player_id']==1)]['x'].mean()
df3_e0_so4_pi2 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==4) & (data3['player_id']==2)]['x'].mean()
df3_e0_so4_pi3 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==4) & (data3['player_id']==3)]['x'].mean()
df3_e0_so4_pi4 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==4) & (data3['player_id']==4)]['x'].mean()
df3_e0_so4_pi5 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==4) & (data3['player_id']==5)]['x'].mean()
df3_e0_so4_pi6 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==4) & (data3['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：0
df3_e1_so0_pi1 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==0) & (data3['player_id']==1)]['x'].mean()
df3_e1_so0_pi2 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==0) & (data3['player_id']==2)]['x'].mean()
df3_e1_so0_pi3 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==0) & (data3['player_id']==3)]['x'].mean()
df3_e1_so0_pi4 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==0) & (data3['player_id']==4)]['x'].mean()
df3_e1_so0_pi5 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==0) & (data3['player_id']==5)]['x'].mean()
df3_e1_so0_pi6 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==0) & (data3['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：1
df3_e1_so1_pi1 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==1) & (data3['player_id']==1)]['x'].mean()
df3_e1_so1_pi2 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==1) & (data3['player_id']==2)]['x'].mean()
df3_e1_so1_pi3 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==1) & (data3['player_id']==3)]['x'].mean()
df3_e1_so1_pi4 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==1) & (data3['player_id']==4)]['x'].mean()
df3_e1_so1_pi5 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==1) & (data3['player_id']==5)]['x'].mean()
df3_e1_so1_pi6 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==1) & (data3['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：2
df3_e1_so2_pi1 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==2) & (data3['player_id']==1)]['x'].mean()
df3_e1_so2_pi2 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==2) & (data3['player_id']==2)]['x'].mean()
df3_e1_so2_pi3 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==2) & (data3['player_id']==3)]['x'].mean()
df3_e1_so2_pi4 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==2) & (data3['player_id']==4)]['x'].mean()
df3_e1_so2_pi5 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==2) & (data3['player_id']==5)]['x'].mean()
df3_e1_so2_pi6 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==2) & (data3['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：3
df3_e1_so3_pi1 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==3) & (data3['player_id']==1)]['x'].mean()
df3_e1_so3_pi2 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==3) & (data3['player_id']==2)]['x'].mean()
df3_e1_so3_pi3 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==3) & (data3['player_id']==3)]['x'].mean()
df3_e1_so3_pi4 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==3) & (data3['player_id']==4)]['x'].mean()
df3_e1_so3_pi5 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==3) & (data3['player_id']==5)]['x'].mean()
df3_e1_so3_pi6 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==3) & (data3['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：4
df3_e1_so4_pi1 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==4) & (data3['player_id']==1)]['x'].mean()
df3_e1_so4_pi2 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==4) & (data3['player_id']==2)]['x'].mean()
df3_e1_so4_pi3 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==4) & (data3['player_id']==3)]['x'].mean()
df3_e1_so4_pi4 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==4) & (data3['player_id']==4)]['x'].mean()
df3_e1_so4_pi5 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==4) & (data3['player_id']==5)]['x'].mean()
df3_e1_so4_pi6 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==4) & (data3['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：0
df3_e2_so0_pi1 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==0) & (data3['player_id']==1)]['x'].mean()
df3_e2_so0_pi2 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==0) & (data3['player_id']==2)]['x'].mean()
df3_e2_so0_pi3 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==0) & (data3['player_id']==3)]['x'].mean()
df3_e2_so0_pi4 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==0) & (data3['player_id']==4)]['x'].mean()
df3_e2_so0_pi5 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==0) & (data3['player_id']==5)]['x'].mean()
df3_e2_so0_pi6 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==0) & (data3['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：1
df3_e2_so1_pi1 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==1) & (data3['player_id']==1)]['x'].mean()
df3_e2_so1_pi2 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==1) & (data3['player_id']==2)]['x'].mean()
df3_e2_so1_pi3 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==1) & (data3['player_id']==3)]['x'].mean()
df3_e2_so1_pi4 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==1) & (data3['player_id']==4)]['x'].mean()
df3_e2_so1_pi5 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==1) & (data3['player_id']==5)]['x'].mean()
df3_e2_so1_pi6 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==1) & (data3['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：2
df3_e2_so2_pi1 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==2) & (data3['player_id']==1)]['x'].mean()
df3_e2_so2_pi2 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==2) & (data3['player_id']==2)]['x'].mean()
df3_e2_so2_pi3 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==2) & (data3['player_id']==3)]['x'].mean()
df3_e2_so2_pi4 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==2) & (data3['player_id']==4)]['x'].mean()
df3_e2_so2_pi5 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==2) & (data3['player_id']==5)]['x'].mean()
df3_e2_so2_pi6 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==2) & (data3['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：3
df3_e2_so3_pi1 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==3) & (data3['player_id']==1)]['x'].mean()
df3_e2_so3_pi2 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==3) & (data3['player_id']==2)]['x'].mean()
df3_e2_so3_pi3 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==3) & (data3['player_id']==3)]['x'].mean()
df3_e2_so3_pi4 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==3) & (data3['player_id']==4)]['x'].mean()
df3_e2_so3_pi5 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==3) & (data3['player_id']==5)]['x'].mean()
df3_e2_so3_pi6 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==3) & (data3['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：4
df3_e2_so4_pi1 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==4) & (data3['player_id']==1)]['x'].mean()
df3_e2_so4_pi2 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==4) & (data3['player_id']==2)]['x'].mean()
df3_e2_so4_pi3 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==4) & (data3['player_id']==3)]['x'].mean()
df3_e2_so4_pi4 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==4) & (data3['player_id']==4)]['x'].mean()
df3_e2_so4_pi5 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==4) & (data3['player_id']==5)]['x'].mean()
df3_e2_so4_pi6 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==4) & (data3['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：0
df3_e3_so0_pi1 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==0) & (data3['player_id']==1)]['x'].mean()
df3_e3_so0_pi2 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==0) & (data3['player_id']==2)]['x'].mean()
df3_e3_so0_pi3 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==0) & (data3['player_id']==3)]['x'].mean()
df3_e3_so0_pi4 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==0) & (data3['player_id']==4)]['x'].mean()
df3_e3_so0_pi5 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==0) & (data3['player_id']==5)]['x'].mean()
df3_e3_so0_pi6 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==0) & (data3['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：1
df3_e3_so1_pi1 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==1) & (data3['player_id']==1)]['x'].mean()
df3_e3_so1_pi2 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==1) & (data3['player_id']==2)]['x'].mean()
df3_e3_so1_pi3 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==1) & (data3['player_id']==3)]['x'].mean()
df3_e3_so1_pi4 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==1) & (data3['player_id']==4)]['x'].mean()
df3_e3_so1_pi5 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==1) & (data3['player_id']==5)]['x'].mean()
df3_e3_so1_pi6 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==1) & (data3['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：2
df3_e3_so2_pi1 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==2) & (data3['player_id']==1)]['x'].mean()
df3_e3_so2_pi2 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==2) & (data3['player_id']==2)]['x'].mean()
df3_e3_so2_pi3 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==2) & (data3['player_id']==3)]['x'].mean()
df3_e3_so2_pi4 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==2) & (data3['player_id']==4)]['x'].mean()
df3_e3_so2_pi5 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==2) & (data3['player_id']==5)]['x'].mean()
df3_e3_so2_pi6 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==2) & (data3['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：3
df3_e3_so3_pi1 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==3) & (data3['player_id']==1)]['x'].mean()
df3_e3_so3_pi2 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==3) & (data3['player_id']==2)]['x'].mean()
df3_e3_so3_pi3 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==3) & (data3['player_id']==3)]['x'].mean()
df3_e3_so3_pi4 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==3) & (data3['player_id']==4)]['x'].mean()
df3_e3_so3_pi5 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==3) & (data3['player_id']==5)]['x'].mean()
df3_e3_so3_pi6 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==3) & (data3['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：4
df3_e3_so4_pi1 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==4) & (data3['player_id']==1)]['x'].mean()
df3_e3_so4_pi2 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==4) & (data3['player_id']==2)]['x'].mean()
df3_e3_so4_pi3 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==4) & (data3['player_id']==3)]['x'].mean()
df3_e3_so4_pi4 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==4) & (data3['player_id']==4)]['x'].mean()
df3_e3_so4_pi5 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==4) & (data3['player_id']==5)]['x'].mean()
df3_e3_so4_pi6 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==4) & (data3['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：0
df3_e4_so0_pi1 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==0) & (data3['player_id']==1)]['x'].mean()
df3_e4_so0_pi2 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==0) & (data3['player_id']==2)]['x'].mean()
df3_e4_so0_pi3 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==0) & (data3['player_id']==3)]['x'].mean()
df3_e4_so0_pi4 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==0) & (data3['player_id']==4)]['x'].mean()
df3_e4_so0_pi5 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==0) & (data3['player_id']==5)]['x'].mean()
df3_e4_so0_pi6 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==0) & (data3['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：1
df3_e4_so1_pi1 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==1) & (data3['player_id']==1)]['x'].mean()
df3_e4_so1_pi2 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==1) & (data3['player_id']==2)]['x'].mean()
df3_e4_so1_pi3 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==1) & (data3['player_id']==3)]['x'].mean()
df3_e4_so1_pi4 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==1) & (data3['player_id']==4)]['x'].mean()
df3_e4_so1_pi5 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==1) & (data3['player_id']==5)]['x'].mean()
df3_e4_so1_pi6 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==1) & (data3['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：2
df3_e4_so2_pi1 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==2) & (data3['player_id']==1)]['x'].mean()
df3_e4_so2_pi2 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==2) & (data3['player_id']==2)]['x'].mean()
df3_e4_so2_pi3 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==2) & (data3['player_id']==3)]['x'].mean()
df3_e4_so2_pi4 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==2) & (data3['player_id']==4)]['x'].mean()
df3_e4_so2_pi5 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==2) & (data3['player_id']==5)]['x'].mean()
df3_e4_so2_pi6 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==2) & (data3['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：3
df3_e4_so3_pi1 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==3) & (data3['player_id']==1)]['x'].mean()
df3_e4_so3_pi2 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==3) & (data3['player_id']==2)]['x'].mean()
df3_e4_so3_pi3 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==3) & (data3['player_id']==3)]['x'].mean()
df3_e4_so3_pi4 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==3) & (data3['player_id']==4)]['x'].mean()
df3_e4_so3_pi5 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==3) & (data3['player_id']==5)]['x'].mean()
df3_e4_so3_pi6 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==3) & (data3['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：4
df3_e4_so4_pi1 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==4) & (data3['player_id']==1)]['x'].mean()
df3_e4_so4_pi2 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==4) & (data3['player_id']==2)]['x'].mean()
df3_e4_so4_pi3 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==4) & (data3['player_id']==3)]['x'].mean()
df3_e4_so4_pi4 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==4) & (data3['player_id']==4)]['x'].mean()
df3_e4_so4_pi5 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==4) & (data3['player_id']==5)]['x'].mean()
df3_e4_so4_pi6 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==4) & (data3['player_id']==6)]['x'].mean()



#ローテーション：4 ---------------------------------------------------------------------------------
#経験年数：0　主観/客観的：0
df4_e0_so0_pi1 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==0) & (data4['player_id']==1)]['x'].mean()
df4_e0_so0_pi2 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==0) & (data4['player_id']==2)]['x'].mean()
df4_e0_so0_pi3 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==0) & (data4['player_id']==3)]['x'].mean()
df4_e0_so0_pi4 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==0) & (data4['player_id']==4)]['x'].mean()
df4_e0_so0_pi5 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==0) & (data4['player_id']==5)]['x'].mean()
df4_e0_so0_pi6 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==0) & (data4['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：1
df4_e0_so1_pi1 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==1) & (data4['player_id']==1)]['x'].mean()
df4_e0_so1_pi2 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==1) & (data4['player_id']==2)]['x'].mean()
df4_e0_so1_pi3 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==1) & (data4['player_id']==3)]['x'].mean()
df4_e0_so1_pi4 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==1) & (data4['player_id']==4)]['x'].mean()
df4_e0_so1_pi5 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==1) & (data4['player_id']==5)]['x'].mean()
df4_e0_so1_pi6 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==1) & (data4['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：2
df4_e0_so2_pi1 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==2) & (data4['player_id']==1)]['x'].mean()
df4_e0_so2_pi2 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==2) & (data4['player_id']==2)]['x'].mean()
df4_e0_so2_pi3 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==2) & (data4['player_id']==3)]['x'].mean()
df4_e0_so2_pi4 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==2) & (data4['player_id']==4)]['x'].mean()
df4_e0_so2_pi5 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==2) & (data4['player_id']==5)]['x'].mean()
df4_e0_so2_pi6 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==2) & (data4['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：3
df4_e0_so3_pi1 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==3) & (data4['player_id']==1)]['x'].mean()
df4_e0_so3_pi2 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==3) & (data4['player_id']==2)]['x'].mean()
df4_e0_so3_pi3 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==3) & (data4['player_id']==3)]['x'].mean()
df4_e0_so3_pi4 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==3) & (data4['player_id']==4)]['x'].mean()
df4_e0_so3_pi5 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==3) & (data4['player_id']==5)]['x'].mean()
df4_e0_so3_pi6 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==3) & (data4['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：4
df4_e0_so4_pi1 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==4) & (data4['player_id']==1)]['x'].mean()
df4_e0_so4_pi2 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==4) & (data4['player_id']==2)]['x'].mean()
df4_e0_so4_pi3 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==4) & (data4['player_id']==3)]['x'].mean()
df4_e0_so4_pi4 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==4) & (data4['player_id']==4)]['x'].mean()
df4_e0_so4_pi5 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==4) & (data4['player_id']==5)]['x'].mean()
df4_e0_so4_pi6 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==4) & (data4['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：0
df4_e1_so0_pi1 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==0) & (data4['player_id']==1)]['x'].mean()
df4_e1_so0_pi2 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==0) & (data4['player_id']==2)]['x'].mean()
df4_e1_so0_pi3 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==0) & (data4['player_id']==3)]['x'].mean()
df4_e1_so0_pi4 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==0) & (data4['player_id']==4)]['x'].mean()
df4_e1_so0_pi5 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==0) & (data4['player_id']==5)]['x'].mean()
df4_e1_so0_pi6 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==0) & (data4['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：1
df4_e1_so1_pi1 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==1) & (data4['player_id']==1)]['x'].mean()
df4_e1_so1_pi2 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==1) & (data4['player_id']==2)]['x'].mean()
df4_e1_so1_pi3 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==1) & (data4['player_id']==3)]['x'].mean()
df4_e1_so1_pi4 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==1) & (data4['player_id']==4)]['x'].mean()
df4_e1_so1_pi5 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==1) & (data4['player_id']==5)]['x'].mean()
df4_e1_so1_pi6 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==1) & (data4['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：2
df4_e1_so2_pi1 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==2) & (data4['player_id']==1)]['x'].mean()
df4_e1_so2_pi2 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==2) & (data4['player_id']==2)]['x'].mean()
df4_e1_so2_pi3 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==2) & (data4['player_id']==3)]['x'].mean()
df4_e1_so2_pi4 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==2) & (data4['player_id']==4)]['x'].mean()
df4_e1_so2_pi5 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==2) & (data4['player_id']==5)]['x'].mean()
df4_e1_so2_pi6 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==2) & (data4['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：3
df4_e1_so3_pi1 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==3) & (data4['player_id']==1)]['x'].mean()
df4_e1_so3_pi2 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==3) & (data4['player_id']==2)]['x'].mean()
df4_e1_so3_pi3 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==3) & (data4['player_id']==3)]['x'].mean()
df4_e1_so3_pi4 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==3) & (data4['player_id']==4)]['x'].mean()
df4_e1_so3_pi5 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==3) & (data4['player_id']==5)]['x'].mean()
df4_e1_so3_pi6 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==3) & (data4['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：4
df4_e1_so4_pi1 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==4) & (data4['player_id']==1)]['x'].mean()
df4_e1_so4_pi2 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==4) & (data4['player_id']==2)]['x'].mean()
df4_e1_so4_pi3 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==4) & (data4['player_id']==3)]['x'].mean()
df4_e1_so4_pi4 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==4) & (data4['player_id']==4)]['x'].mean()
df4_e1_so4_pi5 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==4) & (data4['player_id']==5)]['x'].mean()
df4_e1_so4_pi6 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==4) & (data4['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：0
df4_e2_so0_pi1 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==0) & (data4['player_id']==1)]['x'].mean()
df4_e2_so0_pi2 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==0) & (data4['player_id']==2)]['x'].mean()
df4_e2_so0_pi3 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==0) & (data4['player_id']==3)]['x'].mean()
df4_e2_so0_pi4 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==0) & (data4['player_id']==4)]['x'].mean()
df4_e2_so0_pi5 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==0) & (data4['player_id']==5)]['x'].mean()
df4_e2_so0_pi6 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==0) & (data4['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：1
df4_e2_so1_pi1 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==1) & (data4['player_id']==1)]['x'].mean()
df4_e2_so1_pi2 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==1) & (data4['player_id']==2)]['x'].mean()
df4_e2_so1_pi3 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==1) & (data4['player_id']==3)]['x'].mean()
df4_e2_so1_pi4 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==1) & (data4['player_id']==4)]['x'].mean()
df4_e2_so1_pi5 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==1) & (data4['player_id']==5)]['x'].mean()
df4_e2_so1_pi6 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==1) & (data4['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：2
df4_e2_so2_pi1 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==2) & (data4['player_id']==1)]['x'].mean()
df4_e2_so2_pi2 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==2) & (data4['player_id']==2)]['x'].mean()
df4_e2_so2_pi3 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==2) & (data4['player_id']==3)]['x'].mean()
df4_e2_so2_pi4 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==2) & (data4['player_id']==4)]['x'].mean()
df4_e2_so2_pi5 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==2) & (data4['player_id']==5)]['x'].mean()
df4_e2_so2_pi6 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==2) & (data4['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：3
df4_e2_so3_pi1 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==3) & (data4['player_id']==1)]['x'].mean()
df4_e2_so3_pi2 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==3) & (data4['player_id']==2)]['x'].mean()
df4_e2_so3_pi3 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==3) & (data4['player_id']==3)]['x'].mean()
df4_e2_so3_pi4 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==3) & (data4['player_id']==4)]['x'].mean()
df4_e2_so3_pi5 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==3) & (data4['player_id']==5)]['x'].mean()
df4_e2_so3_pi6 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==3) & (data4['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：4
df4_e2_so4_pi1 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==4) & (data4['player_id']==1)]['x'].mean()
df4_e2_so4_pi2 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==4) & (data4['player_id']==2)]['x'].mean()
df4_e2_so4_pi3 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==4) & (data4['player_id']==3)]['x'].mean()
df4_e2_so4_pi4 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==4) & (data4['player_id']==4)]['x'].mean()
df4_e2_so4_pi5 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==4) & (data4['player_id']==5)]['x'].mean()
df4_e2_so4_pi6 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==4) & (data4['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：0
df4_e3_so0_pi1 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==0) & (data4['player_id']==1)]['x'].mean()
df4_e3_so0_pi2 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==0) & (data4['player_id']==2)]['x'].mean()
df4_e3_so0_pi3 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==0) & (data4['player_id']==3)]['x'].mean()
df4_e3_so0_pi4 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==0) & (data4['player_id']==4)]['x'].mean()
df4_e3_so0_pi5 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==0) & (data4['player_id']==5)]['x'].mean()
df4_e3_so0_pi6 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==0) & (data4['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：1
df4_e3_so1_pi1 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==1) & (data4['player_id']==1)]['x'].mean()
df4_e3_so1_pi2 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==1) & (data4['player_id']==2)]['x'].mean()
df4_e3_so1_pi3 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==1) & (data4['player_id']==3)]['x'].mean()
df4_e3_so1_pi4 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==1) & (data4['player_id']==4)]['x'].mean()
df4_e3_so1_pi5 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==1) & (data4['player_id']==5)]['x'].mean()
df4_e3_so1_pi6 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==1) & (data4['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：2
df4_e3_so2_pi1 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==2) & (data4['player_id']==1)]['x'].mean()
df4_e3_so2_pi2 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==2) & (data4['player_id']==2)]['x'].mean()
df4_e3_so2_pi3 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==2) & (data4['player_id']==3)]['x'].mean()
df4_e3_so2_pi4 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==2) & (data4['player_id']==4)]['x'].mean()
df4_e3_so2_pi5 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==2) & (data4['player_id']==5)]['x'].mean()
df4_e3_so2_pi6 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==2) & (data4['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：3
df4_e3_so3_pi1 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==3) & (data4['player_id']==1)]['x'].mean()
df4_e3_so3_pi2 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==3) & (data4['player_id']==2)]['x'].mean()
df4_e3_so3_pi3 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==3) & (data4['player_id']==3)]['x'].mean()
df4_e3_so3_pi4 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==3) & (data4['player_id']==4)]['x'].mean()
df4_e3_so3_pi5 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==3) & (data4['player_id']==5)]['x'].mean()
df4_e3_so3_pi6 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==3) & (data4['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：4
df4_e3_so4_pi1 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==4) & (data4['player_id']==1)]['x'].mean()
df4_e3_so4_pi2 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==4) & (data4['player_id']==2)]['x'].mean()
df4_e3_so4_pi3 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==4) & (data4['player_id']==3)]['x'].mean()
df4_e3_so4_pi4 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==4) & (data4['player_id']==4)]['x'].mean()
df4_e3_so4_pi5 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==4) & (data4['player_id']==5)]['x'].mean()
df4_e3_so4_pi6 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==4) & (data4['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：0
df4_e4_so0_pi1 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==0) & (data4['player_id']==1)]['x'].mean()
df4_e4_so0_pi2 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==0) & (data4['player_id']==2)]['x'].mean()
df4_e4_so0_pi3 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==0) & (data4['player_id']==3)]['x'].mean()
df4_e4_so0_pi4 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==0) & (data4['player_id']==4)]['x'].mean()
df4_e4_so0_pi5 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==0) & (data4['player_id']==5)]['x'].mean()
df4_e4_so0_pi6 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==0) & (data4['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：1
df4_e4_so1_pi1 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==1) & (data4['player_id']==1)]['x'].mean()
df4_e4_so1_pi2 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==1) & (data4['player_id']==2)]['x'].mean()
df4_e4_so1_pi3 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==1) & (data4['player_id']==3)]['x'].mean()
df4_e4_so1_pi4 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==1) & (data4['player_id']==4)]['x'].mean()
df4_e4_so1_pi5 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==1) & (data4['player_id']==5)]['x'].mean()
df4_e4_so1_pi6 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==1) & (data4['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：2
df4_e4_so2_pi1 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==2) & (data4['player_id']==1)]['x'].mean()
df4_e4_so2_pi2 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==2) & (data4['player_id']==2)]['x'].mean()
df4_e4_so2_pi3 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==2) & (data4['player_id']==3)]['x'].mean()
df4_e4_so2_pi4 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==2) & (data4['player_id']==4)]['x'].mean()
df4_e4_so2_pi5 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==2) & (data4['player_id']==5)]['x'].mean()
df4_e4_so2_pi6 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==2) & (data4['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：3
df4_e4_so3_pi1 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==3) & (data4['player_id']==1)]['x'].mean()
df4_e4_so3_pi2 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==3) & (data4['player_id']==2)]['x'].mean()
df4_e4_so3_pi3 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==3) & (data4['player_id']==3)]['x'].mean()
df4_e4_so3_pi4 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==3) & (data4['player_id']==4)]['x'].mean()
df4_e4_so3_pi5 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==3) & (data4['player_id']==5)]['x'].mean()
df4_e4_so3_pi6 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==3) & (data4['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：4
df4_e4_so4_pi1 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==4) & (data4['player_id']==1)]['x'].mean()
df4_e4_so4_pi2 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==4) & (data4['player_id']==2)]['x'].mean()
df4_e4_so4_pi3 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==4) & (data4['player_id']==3)]['x'].mean()
df4_e4_so4_pi4 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==4) & (data4['player_id']==4)]['x'].mean()
df4_e4_so4_pi5 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==4) & (data4['player_id']==5)]['x'].mean()
df4_e4_so4_pi6 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==4) & (data4['player_id']==6)]['x'].mean()



#ローテーション：5 ---------------------------------------------------------------------------------
#経験年数：0　主観/客観的：0
df5_e0_so0_pi1 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==0) & (data5['player_id']==1)]['x'].mean()
df5_e0_so0_pi2 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==0) & (data5['player_id']==2)]['x'].mean()
df5_e0_so0_pi3 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==0) & (data5['player_id']==3)]['x'].mean()
df5_e0_so0_pi4 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==0) & (data5['player_id']==4)]['x'].mean()
df5_e0_so0_pi5 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==0) & (data5['player_id']==5)]['x'].mean()
df5_e0_so0_pi6 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==0) & (data5['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：1
df5_e0_so1_pi1 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==1) & (data5['player_id']==1)]['x'].mean()
df5_e0_so1_pi2 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==1) & (data5['player_id']==2)]['x'].mean()
df5_e0_so1_pi3 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==1) & (data5['player_id']==3)]['x'].mean()
df5_e0_so1_pi4 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==1) & (data5['player_id']==4)]['x'].mean()
df5_e0_so1_pi5 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==1) & (data5['player_id']==5)]['x'].mean()
df5_e0_so1_pi6 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==1) & (data5['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：2
df5_e0_so2_pi1 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==2) & (data5['player_id']==1)]['x'].mean()
df5_e0_so2_pi2 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==2) & (data5['player_id']==2)]['x'].mean()
df5_e0_so2_pi3 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==2) & (data5['player_id']==3)]['x'].mean()
df5_e0_so2_pi4 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==2) & (data5['player_id']==4)]['x'].mean()
df5_e0_so2_pi5 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==2) & (data5['player_id']==5)]['x'].mean()
df5_e0_so2_pi6 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==2) & (data5['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：3
df5_e0_so3_pi1 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==3) & (data5['player_id']==1)]['x'].mean()
df5_e0_so3_pi2 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==3) & (data5['player_id']==2)]['x'].mean()
df5_e0_so3_pi3 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==3) & (data5['player_id']==3)]['x'].mean()
df5_e0_so3_pi4 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==3) & (data5['player_id']==4)]['x'].mean()
df5_e0_so3_pi5 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==3) & (data5['player_id']==5)]['x'].mean()
df5_e0_so3_pi6 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==3) & (data5['player_id']==6)]['x'].mean()

#経験年数：0　主観/客観的：4
df5_e0_so4_pi1 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==4) & (data5['player_id']==1)]['x'].mean()
df5_e0_so4_pi2 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==4) & (data5['player_id']==2)]['x'].mean()
df5_e0_so4_pi3 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==4) & (data5['player_id']==3)]['x'].mean()
df5_e0_so4_pi4 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==4) & (data5['player_id']==4)]['x'].mean()
df5_e0_so4_pi5 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==4) & (data5['player_id']==5)]['x'].mean()
df5_e0_so4_pi6 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==4) & (data5['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：0
df5_e1_so0_pi1 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==0) & (data5['player_id']==1)]['x'].mean()
df5_e1_so0_pi2 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==0) & (data5['player_id']==2)]['x'].mean()
df5_e1_so0_pi3 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==0) & (data5['player_id']==3)]['x'].mean()
df5_e1_so0_pi4 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==0) & (data5['player_id']==4)]['x'].mean()
df5_e1_so0_pi5 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==0) & (data5['player_id']==5)]['x'].mean()
df5_e1_so0_pi6 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==0) & (data5['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：1
df5_e1_so1_pi1 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==1) & (data5['player_id']==1)]['x'].mean()
df5_e1_so1_pi2 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==1) & (data5['player_id']==2)]['x'].mean()
df5_e1_so1_pi3 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==1) & (data5['player_id']==3)]['x'].mean()
df5_e1_so1_pi4 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==1) & (data5['player_id']==4)]['x'].mean()
df5_e1_so1_pi5 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==1) & (data5['player_id']==5)]['x'].mean()
df5_e1_so1_pi6 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==1) & (data5['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：2
df5_e1_so2_pi1 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==2) & (data5['player_id']==1)]['x'].mean()
df5_e1_so2_pi2 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==2) & (data5['player_id']==2)]['x'].mean()
df5_e1_so2_pi3 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==2) & (data5['player_id']==3)]['x'].mean()
df5_e1_so2_pi4 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==2) & (data5['player_id']==4)]['x'].mean()
df5_e1_so2_pi5 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==2) & (data5['player_id']==5)]['x'].mean()
df5_e1_so2_pi6 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==2) & (data5['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：3
df5_e1_so3_pi1 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==3) & (data5['player_id']==1)]['x'].mean()
df5_e1_so3_pi2 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==3) & (data5['player_id']==2)]['x'].mean()
df5_e1_so3_pi3 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==3) & (data5['player_id']==3)]['x'].mean()
df5_e1_so3_pi4 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==3) & (data5['player_id']==4)]['x'].mean()
df5_e1_so3_pi5 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==3) & (data5['player_id']==5)]['x'].mean()
df5_e1_so3_pi6 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==3) & (data5['player_id']==6)]['x'].mean()

#経験年数：1　主観/客観的：4
df5_e1_so4_pi1 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==4) & (data5['player_id']==1)]['x'].mean()
df5_e1_so4_pi2 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==4) & (data5['player_id']==2)]['x'].mean()
df5_e1_so4_pi3 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==4) & (data5['player_id']==3)]['x'].mean()
df5_e1_so4_pi4 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==4) & (data5['player_id']==4)]['x'].mean()
df5_e1_so4_pi5 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==4) & (data5['player_id']==5)]['x'].mean()
df5_e1_so4_pi6 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==4) & (data5['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：0
df5_e2_so0_pi1 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==0) & (data5['player_id']==1)]['x'].mean()
df5_e2_so0_pi2 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==0) & (data5['player_id']==2)]['x'].mean()
df5_e2_so0_pi3 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==0) & (data5['player_id']==3)]['x'].mean()
df5_e2_so0_pi4 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==0) & (data5['player_id']==4)]['x'].mean()
df5_e2_so0_pi5 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==0) & (data5['player_id']==5)]['x'].mean()
df5_e2_so0_pi6 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==0) & (data5['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：1
df5_e2_so1_pi1 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==1) & (data5['player_id']==1)]['x'].mean()
df5_e2_so1_pi2 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==1) & (data5['player_id']==2)]['x'].mean()
df5_e2_so1_pi3 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==1) & (data5['player_id']==3)]['x'].mean()
df5_e2_so1_pi4 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==1) & (data5['player_id']==4)]['x'].mean()
df5_e2_so1_pi5 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==1) & (data5['player_id']==5)]['x'].mean()
df5_e2_so1_pi6 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==1) & (data5['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：2
df5_e2_so2_pi1 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==2) & (data5['player_id']==1)]['x'].mean()
df5_e2_so2_pi2 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==2) & (data5['player_id']==2)]['x'].mean()
df5_e2_so2_pi3 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==2) & (data5['player_id']==3)]['x'].mean()
df5_e2_so2_pi4 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==2) & (data5['player_id']==4)]['x'].mean()
df5_e2_so2_pi5 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==2) & (data5['player_id']==5)]['x'].mean()
df5_e2_so2_pi6 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==2) & (data5['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：3
df5_e2_so3_pi1 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==3) & (data5['player_id']==1)]['x'].mean()
df5_e2_so3_pi2 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==3) & (data5['player_id']==2)]['x'].mean()
df5_e2_so3_pi3 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==3) & (data5['player_id']==3)]['x'].mean()
df5_e2_so3_pi4 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==3) & (data5['player_id']==4)]['x'].mean()
df5_e2_so3_pi5 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==3) & (data5['player_id']==5)]['x'].mean()
df5_e2_so3_pi6 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==3) & (data5['player_id']==6)]['x'].mean()

#経験年数：2　主観/客観的：4
df5_e2_so4_pi1 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==4) & (data5['player_id']==1)]['x'].mean()
df5_e2_so4_pi2 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==4) & (data5['player_id']==2)]['x'].mean()
df5_e2_so4_pi3 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==4) & (data5['player_id']==3)]['x'].mean()
df5_e2_so4_pi4 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==4) & (data5['player_id']==4)]['x'].mean()
df5_e2_so4_pi5 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==4) & (data5['player_id']==5)]['x'].mean()
df5_e2_so4_pi6 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==4) & (data5['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：0
df5_e3_so0_pi1 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==0) & (data5['player_id']==1)]['x'].mean()
df5_e3_so0_pi2 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==0) & (data5['player_id']==2)]['x'].mean()
df5_e3_so0_pi3 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==0) & (data5['player_id']==3)]['x'].mean()
df5_e3_so0_pi4 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==0) & (data5['player_id']==4)]['x'].mean()
df5_e3_so0_pi5 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==0) & (data5['player_id']==5)]['x'].mean()
df5_e3_so0_pi6 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==0) & (data5['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：1
df5_e3_so1_pi1 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==1) & (data5['player_id']==1)]['x'].mean()
df5_e3_so1_pi2 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==1) & (data5['player_id']==2)]['x'].mean()
df5_e3_so1_pi3 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==1) & (data5['player_id']==3)]['x'].mean()
df5_e3_so1_pi4 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==1) & (data5['player_id']==4)]['x'].mean()
df5_e3_so1_pi5 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==1) & (data5['player_id']==5)]['x'].mean()
df5_e3_so1_pi6 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==1) & (data5['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：2
df5_e3_so2_pi1 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==2) & (data5['player_id']==1)]['x'].mean()
df5_e3_so2_pi2 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==2) & (data5['player_id']==2)]['x'].mean()
df5_e3_so2_pi3 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==2) & (data5['player_id']==3)]['x'].mean()
df5_e3_so2_pi4 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==2) & (data5['player_id']==4)]['x'].mean()
df5_e3_so2_pi5 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==2) & (data5['player_id']==5)]['x'].mean()
df5_e3_so2_pi6 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==2) & (data5['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：3
df5_e3_so3_pi1 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==3) & (data5['player_id']==1)]['x'].mean()
df5_e3_so3_pi2 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==3) & (data5['player_id']==2)]['x'].mean()
df5_e3_so3_pi3 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==3) & (data5['player_id']==3)]['x'].mean()
df5_e3_so3_pi4 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==3) & (data5['player_id']==4)]['x'].mean()
df5_e3_so3_pi5 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==3) & (data5['player_id']==5)]['x'].mean()
df5_e3_so3_pi6 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==3) & (data5['player_id']==6)]['x'].mean()

#経験年数：3　主観/客観的：4
df5_e3_so4_pi1 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==4) & (data5['player_id']==1)]['x'].mean()
df5_e3_so4_pi2 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==4) & (data5['player_id']==2)]['x'].mean()
df5_e3_so4_pi3 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==4) & (data5['player_id']==3)]['x'].mean()
df5_e3_so4_pi4 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==4) & (data5['player_id']==4)]['x'].mean()
df5_e3_so4_pi5 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==4) & (data5['player_id']==5)]['x'].mean()
df5_e3_so4_pi6 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==4) & (data5['player_id']==6)]['x'].mean()

#経験年数：4　主観/客観的：0
df5_e4_so0_pi1 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==0) & (data5['player_id']==1)]['x'].mean()
df5_e4_so0_pi2 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==0) & (data5['player_id']==2)]['x'].mean()
df5_e4_so0_pi3 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==0) & (data5['player_id']==3)]['x'].mean()
df5_e4_so0_pi4 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==0) & (data5['player_id']==4)]['x'].mean()
df5_e4_so0_pi5 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==0) & (data5['player_id']==5)]['x'].mean()
df5_e4_so0_pi6 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==0) & (data5['player_id']==6)]['x'].mean()

#経験年数：4　主観/客観的：1
df5_e4_so1_pi1 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==1) & (data5['player_id']==1)]['x'].mean()
df5_e4_so1_pi2 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==1) & (data5['player_id']==2)]['x'].mean()
df5_e4_so1_pi3 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==1) & (data5['player_id']==3)]['x'].mean()
df5_e4_so1_pi4 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==1) & (data5['player_id']==4)]['x'].mean()
df5_e4_so1_pi5 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==1) & (data5['player_id']==5)]['x'].mean()
df5_e4_so1_pi6 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==1) & (data5['player_id']==6)]['x'].mean()

#経験年数：4　主観/客観的：2
df5_e4_so2_pi1 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==2) & (data5['player_id']==1)]['x'].mean()
df5_e4_so2_pi2 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==2) & (data5['player_id']==2)]['x'].mean()
df5_e4_so2_pi3 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==2) & (data5['player_id']==3)]['x'].mean()
df5_e4_so2_pi4 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==2) & (data5['player_id']==4)]['x'].mean()
df5_e4_so2_pi5 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==2) & (data5['player_id']==5)]['x'].mean()
df5_e4_so2_pi6 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==2) & (data5['player_id']==6)]['x'].mean()

#経験年数：4　主観/客観的：3
df5_e4_so3_pi1 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==3) & (data5['player_id']==1)]['x'].mean()
df5_e4_so3_pi2 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==3) & (data5['player_id']==2)]['x'].mean()
df5_e4_so3_pi3 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==3) & (data5['player_id']==3)]['x'].mean()
df5_e4_so3_pi4 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==3) & (data5['player_id']==4)]['x'].mean()
df5_e4_so3_pi5 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==3) & (data5['player_id']==5)]['x'].mean()
df5_e4_so3_pi6 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==3) & (data5['player_id']==6)]['x'].mean()

#経験年数：4　主観/客観的：4
df5_e4_so4_pi1 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==4) & (data5['player_id']==1)]['x'].mean()
df5_e4_so4_pi2 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==4) & (data5['player_id']==2)]['x'].mean()
df5_e4_so4_pi3 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==4) & (data5['player_id']==3)]['x'].mean()
df5_e4_so4_pi4 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==4) & (data5['player_id']==4)]['x'].mean()
df5_e4_so4_pi5 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==4) & (data5['player_id']==5)]['x'].mean()
df5_e4_so4_pi6 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==4) & (data5['player_id']==6)]['x'].mean()


#y軸集合知
#ローテーション：0 ---------------------------------------------------------------------------------
#経験年数：0　主観/客観的：0
df0_e0_so0_pi1 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==0) & (data0['player_id']==1)]['y'].mean()
df0_e0_so0_pi2 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==0) & (data0['player_id']==2)]['y'].mean()
df0_e0_so0_pi3 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==0) & (data0['player_id']==3)]['y'].mean()
df0_e0_so0_pi4 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==0) & (data0['player_id']==4)]['y'].mean()
df0_e0_so0_pi5 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==0) & (data0['player_id']==5)]['y'].mean()
df0_e0_so0_pi6 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==0) & (data0['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：1
df0_e0_so1_pi1 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==1) & (data0['player_id']==1)]['y'].mean()
df0_e0_so1_pi2 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==1) & (data0['player_id']==2)]['y'].mean()
df0_e0_so1_pi3 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==1) & (data0['player_id']==3)]['y'].mean()
df0_e0_so1_pi4 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==1) & (data0['player_id']==4)]['y'].mean()
df0_e0_so1_pi5 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==1) & (data0['player_id']==5)]['y'].mean()
df0_e0_so1_pi6 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==1) & (data0['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：2
df0_e0_so2_pi1 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==2) & (data0['player_id']==1)]['y'].mean()
df0_e0_so2_pi2 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==2) & (data0['player_id']==2)]['y'].mean()
df0_e0_so2_pi3 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==2) & (data0['player_id']==3)]['y'].mean()
df0_e0_so2_pi4 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==2) & (data0['player_id']==4)]['y'].mean()
df0_e0_so2_pi5 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==2) & (data0['player_id']==5)]['y'].mean()
df0_e0_so2_pi6 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==2) & (data0['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：3
df0_e0_so3_pi1 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==3) & (data0['player_id']==1)]['y'].mean()
df0_e0_so3_pi2 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==3) & (data0['player_id']==2)]['y'].mean()
df0_e0_so3_pi3 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==3) & (data0['player_id']==3)]['y'].mean()
df0_e0_so3_pi4 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==3) & (data0['player_id']==4)]['y'].mean()
df0_e0_so3_pi5 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==3) & (data0['player_id']==5)]['y'].mean()
df0_e0_so3_pi6 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==3) & (data0['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：4
df0_e0_so4_pi1 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==4) & (data0['player_id']==1)]['y'].mean()
df0_e0_so4_pi2 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==4) & (data0['player_id']==2)]['y'].mean()
df0_e0_so4_pi3 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==4) & (data0['player_id']==3)]['y'].mean()
df0_e0_so4_pi4 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==4) & (data0['player_id']==4)]['y'].mean()
df0_e0_so4_pi5 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==4) & (data0['player_id']==5)]['y'].mean()
df0_e0_so4_pi6 = data0[(data0['ex_years']==0) & (data0['Sub_Ob']==4) & (data0['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：0
df0_e1_so0_pi1 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==0) & (data0['player_id']==1)]['y'].mean()
df0_e1_so0_pi2 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==0) & (data0['player_id']==2)]['y'].mean()
df0_e1_so0_pi3 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==0) & (data0['player_id']==3)]['y'].mean()
df0_e1_so0_pi4 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==0) & (data0['player_id']==4)]['y'].mean()
df0_e1_so0_pi5 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==0) & (data0['player_id']==5)]['y'].mean()
df0_e1_so0_pi6 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==0) & (data0['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：1
df0_e1_so1_pi1 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==1) & (data0['player_id']==1)]['y'].mean()
df0_e1_so1_pi2 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==1) & (data0['player_id']==2)]['y'].mean()
df0_e1_so1_pi3 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==1) & (data0['player_id']==3)]['y'].mean()
df0_e1_so1_pi4 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==1) & (data0['player_id']==4)]['y'].mean()
df0_e1_so1_pi5 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==1) & (data0['player_id']==5)]['y'].mean()
df0_e1_so1_pi6 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==1) & (data0['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：2
df0_e1_so2_pi1 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==2) & (data0['player_id']==1)]['y'].mean()
df0_e1_so2_pi2 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==2) & (data0['player_id']==2)]['y'].mean()
df0_e1_so2_pi3 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==2) & (data0['player_id']==3)]['y'].mean()
df0_e1_so2_pi4 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==2) & (data0['player_id']==4)]['y'].mean()
df0_e1_so2_pi5 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==2) & (data0['player_id']==5)]['y'].mean()
df0_e1_so2_pi6 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==2) & (data0['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：3
df0_e1_so3_pi1 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==3) & (data0['player_id']==1)]['y'].mean()
df0_e1_so3_pi2 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==3) & (data0['player_id']==2)]['y'].mean()
df0_e1_so3_pi3 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==3) & (data0['player_id']==3)]['y'].mean()
df0_e1_so3_pi4 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==3) & (data0['player_id']==4)]['y'].mean()
df0_e1_so3_pi5 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==3) & (data0['player_id']==5)]['y'].mean()
df0_e1_so3_pi6 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==3) & (data0['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：4
df0_e1_so4_pi1 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==4) & (data0['player_id']==1)]['y'].mean()
df0_e1_so4_pi2 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==4) & (data0['player_id']==2)]['y'].mean()
df0_e1_so4_pi3 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==4) & (data0['player_id']==3)]['y'].mean()
df0_e1_so4_pi4 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==4) & (data0['player_id']==4)]['y'].mean()
df0_e1_so4_pi5 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==4) & (data0['player_id']==5)]['y'].mean()
df0_e1_so4_pi6 = data0[(data0['ex_years']==1) & (data0['Sub_Ob']==4) & (data0['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：0
df0_e2_so0_pi1 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==0) & (data0['player_id']==1)]['y'].mean()
df0_e2_so0_pi2 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==0) & (data0['player_id']==2)]['y'].mean()
df0_e2_so0_pi3 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==0) & (data0['player_id']==3)]['y'].mean()
df0_e2_so0_pi4 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==0) & (data0['player_id']==4)]['y'].mean()
df0_e2_so0_pi5 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==0) & (data0['player_id']==5)]['y'].mean()
df0_e2_so0_pi6 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==0) & (data0['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：1
df0_e2_so1_pi1 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==1) & (data0['player_id']==1)]['y'].mean()
df0_e2_so1_pi2 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==1) & (data0['player_id']==2)]['y'].mean()
df0_e2_so1_pi3 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==1) & (data0['player_id']==3)]['y'].mean()
df0_e2_so1_pi4 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==1) & (data0['player_id']==4)]['y'].mean()
df0_e2_so1_pi5 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==1) & (data0['player_id']==5)]['y'].mean()
df0_e2_so1_pi6 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==1) & (data0['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：2
df0_e2_so2_pi1 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==2) & (data0['player_id']==1)]['y'].mean()
df0_e2_so2_pi2 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==2) & (data0['player_id']==2)]['y'].mean()
df0_e2_so2_pi3 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==2) & (data0['player_id']==3)]['y'].mean()
df0_e2_so2_pi4 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==2) & (data0['player_id']==4)]['y'].mean()
df0_e2_so2_pi5 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==2) & (data0['player_id']==5)]['y'].mean()
df0_e2_so2_pi6 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==2) & (data0['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：3
df0_e2_so3_pi1 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==3) & (data0['player_id']==1)]['y'].mean()
df0_e2_so3_pi2 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==3) & (data0['player_id']==2)]['y'].mean()
df0_e2_so3_pi3 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==3) & (data0['player_id']==3)]['y'].mean()
df0_e2_so3_pi4 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==3) & (data0['player_id']==4)]['y'].mean()
df0_e2_so3_pi5 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==3) & (data0['player_id']==5)]['y'].mean()
df0_e2_so3_pi6 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==3) & (data0['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：4
df0_e2_so4_pi1 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==4) & (data0['player_id']==1)]['y'].mean()
df0_e2_so4_pi2 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==4) & (data0['player_id']==2)]['y'].mean()
df0_e2_so4_pi3 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==4) & (data0['player_id']==3)]['y'].mean()
df0_e2_so4_pi4 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==4) & (data0['player_id']==4)]['y'].mean()
df0_e2_so4_pi5 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==4) & (data0['player_id']==5)]['y'].mean()
df0_e2_so4_pi6 = data0[(data0['ex_years']==2) & (data0['Sub_Ob']==4) & (data0['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：0
df0_e3_so0_pi1 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==0) & (data0['player_id']==1)]['y'].mean()
df0_e3_so0_pi2 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==0) & (data0['player_id']==2)]['y'].mean()
df0_e3_so0_pi3 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==0) & (data0['player_id']==3)]['y'].mean()
df0_e3_so0_pi4 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==0) & (data0['player_id']==4)]['y'].mean()
df0_e3_so0_pi5 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==0) & (data0['player_id']==5)]['y'].mean()
df0_e3_so0_pi6 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==0) & (data0['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：1
df0_e3_so1_pi1 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==1) & (data0['player_id']==1)]['y'].mean()
df0_e3_so1_pi2 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==1) & (data0['player_id']==2)]['y'].mean()
df0_e3_so1_pi3 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==1) & (data0['player_id']==3)]['y'].mean()
df0_e3_so1_pi4 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==1) & (data0['player_id']==4)]['y'].mean()
df0_e3_so1_pi5 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==1) & (data0['player_id']==5)]['y'].mean()
df0_e3_so1_pi6 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==1) & (data0['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：2
df0_e3_so2_pi1 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==2) & (data0['player_id']==1)]['y'].mean()
df0_e3_so2_pi2 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==2) & (data0['player_id']==2)]['y'].mean()
df0_e3_so2_pi3 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==2) & (data0['player_id']==3)]['y'].mean()
df0_e3_so2_pi4 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==2) & (data0['player_id']==4)]['y'].mean()
df0_e3_so2_pi5 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==2) & (data0['player_id']==5)]['y'].mean()
df0_e3_so2_pi6 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==2) & (data0['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：3
df0_e3_so3_pi1 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==3) & (data0['player_id']==1)]['y'].mean()
df0_e3_so3_pi2 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==3) & (data0['player_id']==2)]['y'].mean()
df0_e3_so3_pi3 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==3) & (data0['player_id']==3)]['y'].mean()
df0_e3_so3_pi4 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==3) & (data0['player_id']==4)]['y'].mean()
df0_e3_so3_pi5 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==3) & (data0['player_id']==5)]['y'].mean()
df0_e3_so3_pi6 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==3) & (data0['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：4
df0_e3_so4_pi1 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==4) & (data0['player_id']==1)]['y'].mean()
df0_e3_so4_pi2 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==4) & (data0['player_id']==2)]['y'].mean()
df0_e3_so4_pi3 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==4) & (data0['player_id']==3)]['y'].mean()
df0_e3_so4_pi4 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==4) & (data0['player_id']==4)]['y'].mean()
df0_e3_so4_pi5 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==4) & (data0['player_id']==5)]['y'].mean()
df0_e3_so4_pi6 = data0[(data0['ex_years']==3) & (data0['Sub_Ob']==4) & (data0['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：0
df0_e4_so0_pi1 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==0) & (data0['player_id']==1)]['y'].mean()
df0_e4_so0_pi2 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==0) & (data0['player_id']==2)]['y'].mean()
df0_e4_so0_pi3 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==0) & (data0['player_id']==3)]['y'].mean()
df0_e4_so0_pi4 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==0) & (data0['player_id']==4)]['y'].mean()
df0_e4_so0_pi5 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==0) & (data0['player_id']==5)]['y'].mean()
df0_e4_so0_pi6 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==0) & (data0['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：1
df0_e4_so1_pi1 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==1) & (data0['player_id']==1)]['y'].mean()
df0_e4_so1_pi2 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==1) & (data0['player_id']==2)]['y'].mean()
df0_e4_so1_pi3 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==1) & (data0['player_id']==3)]['y'].mean()
df0_e4_so1_pi4 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==1) & (data0['player_id']==4)]['y'].mean()
df0_e4_so1_pi5 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==1) & (data0['player_id']==5)]['y'].mean()
df0_e4_so1_pi6 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==1) & (data0['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：2
df0_e4_so2_pi1 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==2) & (data0['player_id']==1)]['y'].mean()
df0_e4_so2_pi2 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==2) & (data0['player_id']==2)]['y'].mean()
df0_e4_so2_pi3 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==2) & (data0['player_id']==3)]['y'].mean()
df0_e4_so2_pi4 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==2) & (data0['player_id']==4)]['y'].mean()
df0_e4_so2_pi5 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==2) & (data0['player_id']==5)]['y'].mean()
df0_e4_so2_pi6 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==2) & (data0['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：3
df0_e4_so3_pi1 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==3) & (data0['player_id']==1)]['y'].mean()
df0_e4_so3_pi2 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==3) & (data0['player_id']==2)]['y'].mean()
df0_e4_so3_pi3 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==3) & (data0['player_id']==3)]['y'].mean()
df0_e4_so3_pi4 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==3) & (data0['player_id']==4)]['y'].mean()
df0_e4_so3_pi5 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==3) & (data0['player_id']==5)]['y'].mean()
df0_e4_so3_pi6 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==3) & (data0['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：4
df0_e4_so4_pi1 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==4) & (data0['player_id']==1)]['y'].mean()
df0_e4_so4_pi2 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==4) & (data0['player_id']==2)]['y'].mean()
df0_e4_so4_pi3 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==4) & (data0['player_id']==3)]['y'].mean()
df0_e4_so4_pi4 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==4) & (data0['player_id']==4)]['y'].mean()
df0_e4_so4_pi5 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==4) & (data0['player_id']==5)]['y'].mean()
df0_e4_so4_pi6 = data0[(data0['ex_years']==4) & (data0['Sub_Ob']==4) & (data0['player_id']==6)]['y'].mean()



#ローテーション：1 ---------------------------------------------------------------------------------
#経験年数：0　主観/客観的：0
df1_e0_so0_pi1 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==0) & (data1['player_id']==1)]['y'].mean()
df1_e0_so0_pi2 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==0) & (data1['player_id']==2)]['y'].mean()
df1_e0_so0_pi3 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==0) & (data1['player_id']==3)]['y'].mean()
df1_e0_so0_pi4 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==0) & (data1['player_id']==4)]['y'].mean()
df1_e0_so0_pi5 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==0) & (data1['player_id']==5)]['y'].mean()
df1_e0_so0_pi6 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==0) & (data1['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：1
df1_e0_so1_pi1 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==1) & (data1['player_id']==1)]['y'].mean()
df1_e0_so1_pi2 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==1) & (data1['player_id']==2)]['y'].mean()
df1_e0_so1_pi3 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==1) & (data1['player_id']==3)]['y'].mean()
df1_e0_so1_pi4 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==1) & (data1['player_id']==4)]['y'].mean()
df1_e0_so1_pi5 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==1) & (data1['player_id']==5)]['y'].mean()
df1_e0_so1_pi6 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==1) & (data1['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：2
df1_e0_so2_pi1 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==2) & (data1['player_id']==1)]['y'].mean()
df1_e0_so2_pi2 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==2) & (data1['player_id']==2)]['y'].mean()
df1_e0_so2_pi3 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==2) & (data1['player_id']==3)]['y'].mean()
df1_e0_so2_pi4 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==2) & (data1['player_id']==4)]['y'].mean()
df1_e0_so2_pi5 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==2) & (data1['player_id']==5)]['y'].mean()
df1_e0_so2_pi6 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==2) & (data1['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：3
df1_e0_so3_pi1 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==3) & (data1['player_id']==1)]['y'].mean()
df1_e0_so3_pi2 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==3) & (data1['player_id']==2)]['y'].mean()
df1_e0_so3_pi3 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==3) & (data1['player_id']==3)]['y'].mean()
df1_e0_so3_pi4 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==3) & (data1['player_id']==4)]['y'].mean()
df1_e0_so3_pi5 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==3) & (data1['player_id']==5)]['y'].mean()
df1_e0_so3_pi6 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==3) & (data1['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：4
df1_e0_so4_pi1 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==4) & (data1['player_id']==1)]['y'].mean()
df1_e0_so4_pi2 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==4) & (data1['player_id']==2)]['y'].mean()
df1_e0_so4_pi3 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==4) & (data1['player_id']==3)]['y'].mean()
df1_e0_so4_pi4 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==4) & (data1['player_id']==4)]['y'].mean()
df1_e0_so4_pi5 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==4) & (data1['player_id']==5)]['y'].mean()
df1_e0_so4_pi6 = data1[(data1['ex_years']==0) & (data1['Sub_Ob']==4) & (data1['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：0
df1_e1_so0_pi1 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==0) & (data1['player_id']==1)]['y'].mean()
df1_e1_so0_pi2 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==0) & (data1['player_id']==2)]['y'].mean()
df1_e1_so0_pi3 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==0) & (data1['player_id']==3)]['y'].mean()
df1_e1_so0_pi4 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==0) & (data1['player_id']==4)]['y'].mean()
df1_e1_so0_pi5 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==0) & (data1['player_id']==5)]['y'].mean()
df1_e1_so0_pi6 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==0) & (data1['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：1
df1_e1_so1_pi1 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==1) & (data1['player_id']==1)]['y'].mean()
df1_e1_so1_pi2 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==1) & (data1['player_id']==2)]['y'].mean()
df1_e1_so1_pi3 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==1) & (data1['player_id']==3)]['y'].mean()
df1_e1_so1_pi4 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==1) & (data1['player_id']==4)]['y'].mean()
df1_e1_so1_pi5 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==1) & (data1['player_id']==5)]['y'].mean()
df1_e1_so1_pi6 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==1) & (data1['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：2
df1_e1_so2_pi1 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==2) & (data1['player_id']==1)]['y'].mean()
df1_e1_so2_pi2 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==2) & (data1['player_id']==2)]['y'].mean()
df1_e1_so2_pi3 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==2) & (data1['player_id']==3)]['y'].mean()
df1_e1_so2_pi4 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==2) & (data1['player_id']==4)]['y'].mean()
df1_e1_so2_pi5 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==2) & (data1['player_id']==5)]['y'].mean()
df1_e1_so2_pi6 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==2) & (data1['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：3
df1_e1_so3_pi1 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==3) & (data1['player_id']==1)]['y'].mean()
df1_e1_so3_pi2 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==3) & (data1['player_id']==2)]['y'].mean()
df1_e1_so3_pi3 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==3) & (data1['player_id']==3)]['y'].mean()
df1_e1_so3_pi4 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==3) & (data1['player_id']==4)]['y'].mean()
df1_e1_so3_pi5 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==3) & (data1['player_id']==5)]['y'].mean()
df1_e1_so3_pi6 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==3) & (data1['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：4
df1_e1_so4_pi1 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==4) & (data1['player_id']==1)]['y'].mean()
df1_e1_so4_pi2 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==4) & (data1['player_id']==2)]['y'].mean()
df1_e1_so4_pi3 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==4) & (data1['player_id']==3)]['y'].mean()
df1_e1_so4_pi4 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==4) & (data1['player_id']==4)]['y'].mean()
df1_e1_so4_pi5 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==4) & (data1['player_id']==5)]['y'].mean()
df1_e1_so4_pi6 = data1[(data1['ex_years']==1) & (data1['Sub_Ob']==4) & (data1['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：0
df1_e2_so0_pi1 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==0) & (data1['player_id']==1)]['y'].mean()
df1_e2_so0_pi2 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==0) & (data1['player_id']==2)]['y'].mean()
df1_e2_so0_pi3 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==0) & (data1['player_id']==3)]['y'].mean()
df1_e2_so0_pi4 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==0) & (data1['player_id']==4)]['y'].mean()
df1_e2_so0_pi5 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==0) & (data1['player_id']==5)]['y'].mean()
df1_e2_so0_pi6 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==0) & (data1['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：1
df1_e2_so1_pi1 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==1) & (data1['player_id']==1)]['y'].mean()
df1_e2_so1_pi2 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==1) & (data1['player_id']==2)]['y'].mean()
df1_e2_so1_pi3 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==1) & (data1['player_id']==3)]['y'].mean()
df1_e2_so1_pi4 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==1) & (data1['player_id']==4)]['y'].mean()
df1_e2_so1_pi5 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==1) & (data1['player_id']==5)]['y'].mean()
df1_e2_so1_pi6 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==1) & (data1['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：2
df1_e2_so2_pi1 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==2) & (data1['player_id']==1)]['y'].mean()
df1_e2_so2_pi2 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==2) & (data1['player_id']==2)]['y'].mean()
df1_e2_so2_pi3 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==2) & (data1['player_id']==3)]['y'].mean()
df1_e2_so2_pi4 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==2) & (data1['player_id']==4)]['y'].mean()
df1_e2_so2_pi5 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==2) & (data1['player_id']==5)]['y'].mean()
df1_e2_so2_pi6 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==2) & (data1['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：3
df1_e2_so3_pi1 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==3) & (data1['player_id']==1)]['y'].mean()
df1_e2_so3_pi2 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==3) & (data1['player_id']==2)]['y'].mean()
df1_e2_so3_pi3 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==3) & (data1['player_id']==3)]['y'].mean()
df1_e2_so3_pi4 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==3) & (data1['player_id']==4)]['y'].mean()
df1_e2_so3_pi5 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==3) & (data1['player_id']==5)]['y'].mean()
df1_e2_so3_pi6 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==3) & (data1['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：4
df1_e2_so4_pi1 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==4) & (data1['player_id']==1)]['y'].mean()
df1_e2_so4_pi2 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==4) & (data1['player_id']==2)]['y'].mean()
df1_e2_so4_pi3 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==4) & (data1['player_id']==3)]['y'].mean()
df1_e2_so4_pi4 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==4) & (data1['player_id']==4)]['y'].mean()
df1_e2_so4_pi5 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==4) & (data1['player_id']==5)]['y'].mean()
df1_e2_so4_pi6 = data1[(data1['ex_years']==2) & (data1['Sub_Ob']==4) & (data1['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：0
df1_e3_so0_pi1 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==0) & (data1['player_id']==1)]['y'].mean()
df1_e3_so0_pi2 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==0) & (data1['player_id']==2)]['y'].mean()
df1_e3_so0_pi3 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==0) & (data1['player_id']==3)]['y'].mean()
df1_e3_so0_pi4 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==0) & (data1['player_id']==4)]['y'].mean()
df1_e3_so0_pi5 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==0) & (data1['player_id']==5)]['y'].mean()
df1_e3_so0_pi6 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==0) & (data1['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：1
df1_e3_so1_pi1 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==1) & (data1['player_id']==1)]['y'].mean()
df1_e3_so1_pi2 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==1) & (data1['player_id']==2)]['y'].mean()
df1_e3_so1_pi3 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==1) & (data1['player_id']==3)]['y'].mean()
df1_e3_so1_pi4 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==1) & (data1['player_id']==4)]['y'].mean()
df1_e3_so1_pi5 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==1) & (data1['player_id']==5)]['y'].mean()
df1_e3_so1_pi6 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==1) & (data1['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：2
df1_e3_so2_pi1 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==2) & (data1['player_id']==1)]['y'].mean()
df1_e3_so2_pi2 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==2) & (data1['player_id']==2)]['y'].mean()
df1_e3_so2_pi3 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==2) & (data1['player_id']==3)]['y'].mean()
df1_e3_so2_pi4 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==2) & (data1['player_id']==4)]['y'].mean()
df1_e3_so2_pi5 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==2) & (data1['player_id']==5)]['y'].mean()
df1_e3_so2_pi6 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==2) & (data1['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：3
df1_e3_so3_pi1 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==3) & (data1['player_id']==1)]['y'].mean()
df1_e3_so3_pi2 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==3) & (data1['player_id']==2)]['y'].mean()
df1_e3_so3_pi3 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==3) & (data1['player_id']==3)]['y'].mean()
df1_e3_so3_pi4 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==3) & (data1['player_id']==4)]['y'].mean()
df1_e3_so3_pi5 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==3) & (data1['player_id']==5)]['y'].mean()
df1_e3_so3_pi6 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==3) & (data1['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：4
df1_e3_so4_pi1 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==4) & (data1['player_id']==1)]['y'].mean()
df1_e3_so4_pi2 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==4) & (data1['player_id']==2)]['y'].mean()
df1_e3_so4_pi3 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==4) & (data1['player_id']==3)]['y'].mean()
df1_e3_so4_pi4 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==4) & (data1['player_id']==4)]['y'].mean()
df1_e3_so4_pi5 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==4) & (data1['player_id']==5)]['y'].mean()
df1_e3_so4_pi6 = data1[(data1['ex_years']==3) & (data1['Sub_Ob']==4) & (data1['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：0
df1_e4_so0_pi1 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==0) & (data1['player_id']==1)]['y'].mean()
df1_e4_so0_pi2 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==0) & (data1['player_id']==2)]['y'].mean()
df1_e4_so0_pi3 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==0) & (data1['player_id']==3)]['y'].mean()
df1_e4_so0_pi4 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==0) & (data1['player_id']==4)]['y'].mean()
df1_e4_so0_pi5 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==0) & (data1['player_id']==5)]['y'].mean()
df1_e4_so0_pi6 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==0) & (data1['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：1
df1_e4_so1_pi1 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==1) & (data1['player_id']==1)]['y'].mean()
df1_e4_so1_pi2 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==1) & (data1['player_id']==2)]['y'].mean()
df1_e4_so1_pi3 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==1) & (data1['player_id']==3)]['y'].mean()
df1_e4_so1_pi4 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==1) & (data1['player_id']==4)]['y'].mean()
df1_e4_so1_pi5 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==1) & (data1['player_id']==5)]['y'].mean()
df1_e4_so1_pi6 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==1) & (data1['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：2
df1_e4_so2_pi1 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==2) & (data1['player_id']==1)]['y'].mean()
df1_e4_so2_pi2 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==2) & (data1['player_id']==2)]['y'].mean()
df1_e4_so2_pi3 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==2) & (data1['player_id']==3)]['y'].mean()
df1_e4_so2_pi4 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==2) & (data1['player_id']==4)]['y'].mean()
df1_e4_so2_pi5 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==2) & (data1['player_id']==5)]['y'].mean()
df1_e4_so2_pi6 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==2) & (data1['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：3
df1_e4_so3_pi1 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==3) & (data1['player_id']==1)]['y'].mean()
df1_e4_so3_pi2 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==3) & (data1['player_id']==2)]['y'].mean()
df1_e4_so3_pi3 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==3) & (data1['player_id']==3)]['y'].mean()
df1_e4_so3_pi4 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==3) & (data1['player_id']==4)]['y'].mean()
df1_e4_so3_pi5 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==3) & (data1['player_id']==5)]['y'].mean()
df1_e4_so3_pi6 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==3) & (data1['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：4
df1_e4_so4_pi1 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==4) & (data1['player_id']==1)]['y'].mean()
df1_e4_so4_pi2 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==4) & (data1['player_id']==2)]['y'].mean()
df1_e4_so4_pi3 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==4) & (data1['player_id']==3)]['y'].mean()
df1_e4_so4_pi4 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==4) & (data1['player_id']==4)]['y'].mean()
df1_e4_so4_pi5 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==4) & (data1['player_id']==5)]['y'].mean()
df1_e4_so4_pi6 = data1[(data1['ex_years']==4) & (data1['Sub_Ob']==4) & (data1['player_id']==6)]['y'].mean()



#ローテーション：2 ---------------------------------------------------------------------------------
#経験年数：0　主観/客観的：0
df2_e0_so0_pi1 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==0) & (data2['player_id']==1)]['y'].mean()
df2_e0_so0_pi2 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==0) & (data2['player_id']==2)]['y'].mean()
df2_e0_so0_pi3 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==0) & (data2['player_id']==3)]['y'].mean()
df2_e0_so0_pi4 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==0) & (data2['player_id']==4)]['y'].mean()
df2_e0_so0_pi5 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==0) & (data2['player_id']==5)]['y'].mean()
df2_e0_so0_pi6 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==0) & (data2['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：1
df2_e0_so1_pi1 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==1) & (data2['player_id']==1)]['y'].mean()
df2_e0_so1_pi2 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==1) & (data2['player_id']==2)]['y'].mean()
df2_e0_so1_pi3 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==1) & (data2['player_id']==3)]['y'].mean()
df2_e0_so1_pi4 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==1) & (data2['player_id']==4)]['y'].mean()
df2_e0_so1_pi5 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==1) & (data2['player_id']==5)]['y'].mean()
df2_e0_so1_pi6 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==1) & (data2['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：2
df2_e0_so2_pi1 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==2) & (data2['player_id']==1)]['y'].mean()
df2_e0_so2_pi2 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==2) & (data2['player_id']==2)]['y'].mean()
df2_e0_so2_pi3 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==2) & (data2['player_id']==3)]['y'].mean()
df2_e0_so2_pi4 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==2) & (data2['player_id']==4)]['y'].mean()
df2_e0_so2_pi5 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==2) & (data2['player_id']==5)]['y'].mean()
df2_e0_so2_pi6 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==2) & (data2['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：3
df2_e0_so3_pi1 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==3) & (data2['player_id']==1)]['y'].mean()
df2_e0_so3_pi2 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==3) & (data2['player_id']==2)]['y'].mean()
df2_e0_so3_pi3 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==3) & (data2['player_id']==3)]['y'].mean()
df2_e0_so3_pi4 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==3) & (data2['player_id']==4)]['y'].mean()
df2_e0_so3_pi5 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==3) & (data2['player_id']==5)]['y'].mean()
df2_e0_so3_pi6 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==3) & (data2['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：4
df2_e0_so4_pi1 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==4) & (data2['player_id']==1)]['y'].mean()
df2_e0_so4_pi2 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==4) & (data2['player_id']==2)]['y'].mean()
df2_e0_so4_pi3 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==4) & (data2['player_id']==3)]['y'].mean()
df2_e0_so4_pi4 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==4) & (data2['player_id']==4)]['y'].mean()
df2_e0_so4_pi5 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==4) & (data2['player_id']==5)]['y'].mean()
df2_e0_so4_pi6 = data2[(data2['ex_years']==0) & (data2['Sub_Ob']==4) & (data2['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：0
df2_e1_so0_pi1 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==0) & (data2['player_id']==1)]['y'].mean()
df2_e1_so0_pi2 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==0) & (data2['player_id']==2)]['y'].mean()
df2_e1_so0_pi3 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==0) & (data2['player_id']==3)]['y'].mean()
df2_e1_so0_pi4 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==0) & (data2['player_id']==4)]['y'].mean()
df2_e1_so0_pi5 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==0) & (data2['player_id']==5)]['y'].mean()
df2_e1_so0_pi6 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==0) & (data2['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：1
df2_e1_so1_pi1 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==1) & (data2['player_id']==1)]['y'].mean()
df2_e1_so1_pi2 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==1) & (data2['player_id']==2)]['y'].mean()
df2_e1_so1_pi3 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==1) & (data2['player_id']==3)]['y'].mean()
df2_e1_so1_pi4 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==1) & (data2['player_id']==4)]['y'].mean()
df2_e1_so1_pi5 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==1) & (data2['player_id']==5)]['y'].mean()
df2_e1_so1_pi6 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==1) & (data2['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：2
df2_e1_so2_pi1 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==2) & (data2['player_id']==1)]['y'].mean()
df2_e1_so2_pi2 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==2) & (data2['player_id']==2)]['y'].mean()
df2_e1_so2_pi3 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==2) & (data2['player_id']==3)]['y'].mean()
df2_e1_so2_pi4 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==2) & (data2['player_id']==4)]['y'].mean()
df2_e1_so2_pi5 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==2) & (data2['player_id']==5)]['y'].mean()
df2_e1_so2_pi6 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==2) & (data2['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：3
df2_e1_so3_pi1 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==3) & (data2['player_id']==1)]['y'].mean()
df2_e1_so3_pi2 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==3) & (data2['player_id']==2)]['y'].mean()
df2_e1_so3_pi3 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==3) & (data2['player_id']==3)]['y'].mean()
df2_e1_so3_pi4 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==3) & (data2['player_id']==4)]['y'].mean()
df2_e1_so3_pi5 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==3) & (data2['player_id']==5)]['y'].mean()
df2_e1_so3_pi6 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==3) & (data2['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：4
df2_e1_so4_pi1 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==4) & (data2['player_id']==1)]['y'].mean()
df2_e1_so4_pi2 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==4) & (data2['player_id']==2)]['y'].mean()
df2_e1_so4_pi3 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==4) & (data2['player_id']==3)]['y'].mean()
df2_e1_so4_pi4 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==4) & (data2['player_id']==4)]['y'].mean()
df2_e1_so4_pi5 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==4) & (data2['player_id']==5)]['y'].mean()
df2_e1_so4_pi6 = data2[(data2['ex_years']==1) & (data2['Sub_Ob']==4) & (data2['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：0
df2_e2_so0_pi1 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==0) & (data2['player_id']==1)]['y'].mean()
df2_e2_so0_pi2 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==0) & (data2['player_id']==2)]['y'].mean()
df2_e2_so0_pi3 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==0) & (data2['player_id']==3)]['y'].mean()
df2_e2_so0_pi4 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==0) & (data2['player_id']==4)]['y'].mean()
df2_e2_so0_pi5 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==0) & (data2['player_id']==5)]['y'].mean()
df2_e2_so0_pi6 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==0) & (data2['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：1
df2_e2_so1_pi1 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==1) & (data2['player_id']==1)]['y'].mean()
df2_e2_so1_pi2 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==1) & (data2['player_id']==2)]['y'].mean()
df2_e2_so1_pi3 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==1) & (data2['player_id']==3)]['y'].mean()
df2_e2_so1_pi4 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==1) & (data2['player_id']==4)]['y'].mean()
df2_e2_so1_pi5 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==1) & (data2['player_id']==5)]['y'].mean()
df2_e2_so1_pi6 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==1) & (data2['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：2
df2_e2_so2_pi1 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==2) & (data2['player_id']==1)]['y'].mean()
df2_e2_so2_pi2 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==2) & (data2['player_id']==2)]['y'].mean()
df2_e2_so2_pi3 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==2) & (data2['player_id']==3)]['y'].mean()
df2_e2_so2_pi4 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==2) & (data2['player_id']==4)]['y'].mean()
df2_e2_so2_pi5 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==2) & (data2['player_id']==5)]['y'].mean()
df2_e2_so2_pi6 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==2) & (data2['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：3
df2_e2_so3_pi1 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==3) & (data2['player_id']==1)]['y'].mean()
df2_e2_so3_pi2 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==3) & (data2['player_id']==2)]['y'].mean()
df2_e2_so3_pi3 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==3) & (data2['player_id']==3)]['y'].mean()
df2_e2_so3_pi4 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==3) & (data2['player_id']==4)]['y'].mean()
df2_e2_so3_pi5 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==3) & (data2['player_id']==5)]['y'].mean()
df2_e2_so3_pi6 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==3) & (data2['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：4
df2_e2_so4_pi1 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==4) & (data2['player_id']==1)]['y'].mean()
df2_e2_so4_pi2 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==4) & (data2['player_id']==2)]['y'].mean()
df2_e2_so4_pi3 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==4) & (data2['player_id']==3)]['y'].mean()
df2_e2_so4_pi4 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==4) & (data2['player_id']==4)]['y'].mean()
df2_e2_so4_pi5 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==4) & (data2['player_id']==5)]['y'].mean()
df2_e2_so4_pi6 = data2[(data2['ex_years']==2) & (data2['Sub_Ob']==4) & (data2['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：0
df2_e3_so0_pi1 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==0) & (data2['player_id']==1)]['y'].mean()
df2_e3_so0_pi2 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==0) & (data2['player_id']==2)]['y'].mean()
df2_e3_so0_pi3 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==0) & (data2['player_id']==3)]['y'].mean()
df2_e3_so0_pi4 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==0) & (data2['player_id']==4)]['y'].mean()
df2_e3_so0_pi5 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==0) & (data2['player_id']==5)]['y'].mean()
df2_e3_so0_pi6 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==0) & (data2['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：1
df2_e3_so1_pi1 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==1) & (data2['player_id']==1)]['y'].mean()
df2_e3_so1_pi2 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==1) & (data2['player_id']==2)]['y'].mean()
df2_e3_so1_pi3 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==1) & (data2['player_id']==3)]['y'].mean()
df2_e3_so1_pi4 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==1) & (data2['player_id']==4)]['y'].mean()
df2_e3_so1_pi5 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==1) & (data2['player_id']==5)]['y'].mean()
df2_e3_so1_pi6 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==1) & (data2['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：2
df2_e3_so2_pi1 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==2) & (data2['player_id']==1)]['y'].mean()
df2_e3_so2_pi2 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==2) & (data2['player_id']==2)]['y'].mean()
df2_e3_so2_pi3 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==2) & (data2['player_id']==3)]['y'].mean()
df2_e3_so2_pi4 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==2) & (data2['player_id']==4)]['y'].mean()
df2_e3_so2_pi5 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==2) & (data2['player_id']==5)]['y'].mean()
df2_e3_so2_pi6 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==2) & (data2['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：3
df2_e3_so3_pi1 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==3) & (data2['player_id']==1)]['y'].mean()
df2_e3_so3_pi2 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==3) & (data2['player_id']==2)]['y'].mean()
df2_e3_so3_pi3 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==3) & (data2['player_id']==3)]['y'].mean()
df2_e3_so3_pi4 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==3) & (data2['player_id']==4)]['y'].mean()
df2_e3_so3_pi5 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==3) & (data2['player_id']==5)]['y'].mean()
df2_e3_so3_pi6 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==3) & (data2['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：4
df2_e3_so4_pi1 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==4) & (data2['player_id']==1)]['y'].mean()
df2_e3_so4_pi2 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==4) & (data2['player_id']==2)]['y'].mean()
df2_e3_so4_pi3 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==4) & (data2['player_id']==3)]['y'].mean()
df2_e3_so4_pi4 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==4) & (data2['player_id']==4)]['y'].mean()
df2_e3_so4_pi5 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==4) & (data2['player_id']==5)]['y'].mean()
df2_e3_so4_pi6 = data2[(data2['ex_years']==3) & (data2['Sub_Ob']==4) & (data2['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：0
df2_e4_so0_pi1 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==0) & (data2['player_id']==1)]['y'].mean()
df2_e4_so0_pi2 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==0) & (data2['player_id']==2)]['y'].mean()
df2_e4_so0_pi3 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==0) & (data2['player_id']==3)]['y'].mean()
df2_e4_so0_pi4 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==0) & (data2['player_id']==4)]['y'].mean()
df2_e4_so0_pi5 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==0) & (data2['player_id']==5)]['y'].mean()
df2_e4_so0_pi6 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==0) & (data2['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：1
df2_e4_so1_pi1 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==1) & (data2['player_id']==1)]['y'].mean()
df2_e4_so1_pi2 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==1) & (data2['player_id']==2)]['y'].mean()
df2_e4_so1_pi3 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==1) & (data2['player_id']==3)]['y'].mean()
df2_e4_so1_pi4 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==1) & (data2['player_id']==4)]['y'].mean()
df2_e4_so1_pi5 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==1) & (data2['player_id']==5)]['y'].mean()
df2_e4_so1_pi6 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==1) & (data2['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：2
df2_e4_so2_pi1 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==2) & (data2['player_id']==1)]['y'].mean()
df2_e4_so2_pi2 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==2) & (data2['player_id']==2)]['y'].mean()
df2_e4_so2_pi3 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==2) & (data2['player_id']==3)]['y'].mean()
df2_e4_so2_pi4 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==2) & (data2['player_id']==4)]['y'].mean()
df2_e4_so2_pi5 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==2) & (data2['player_id']==5)]['y'].mean()
df2_e4_so2_pi6 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==2) & (data2['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：3
df2_e4_so3_pi1 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==3) & (data2['player_id']==1)]['y'].mean()
df2_e4_so3_pi2 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==3) & (data2['player_id']==2)]['y'].mean()
df2_e4_so3_pi3 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==3) & (data2['player_id']==3)]['y'].mean()
df2_e4_so3_pi4 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==3) & (data2['player_id']==4)]['y'].mean()
df2_e4_so3_pi5 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==3) & (data2['player_id']==5)]['y'].mean()
df2_e4_so3_pi6 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==3) & (data2['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：4
df2_e4_so4_pi1 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==4) & (data2['player_id']==1)]['y'].mean()
df2_e4_so4_pi2 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==4) & (data2['player_id']==2)]['y'].mean()
df2_e4_so4_pi3 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==4) & (data2['player_id']==3)]['y'].mean()
df2_e4_so4_pi4 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==4) & (data2['player_id']==4)]['y'].mean()
df2_e4_so4_pi5 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==4) & (data2['player_id']==5)]['y'].mean()
df2_e4_so4_pi6 = data2[(data2['ex_years']==4) & (data2['Sub_Ob']==4) & (data2['player_id']==6)]['y'].mean()



#ローテーション：3 ---------------------------------------------------------------------------------
#経験年数：0　主観/客観的：0
df3_e0_so0_pi1 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==0) & (data3['player_id']==1)]['y'].mean()
df3_e0_so0_pi2 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==0) & (data3['player_id']==2)]['y'].mean()
df3_e0_so0_pi3 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==0) & (data3['player_id']==3)]['y'].mean()
df3_e0_so0_pi4 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==0) & (data3['player_id']==4)]['y'].mean()
df3_e0_so0_pi5 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==0) & (data3['player_id']==5)]['y'].mean()
df3_e0_so0_pi6 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==0) & (data3['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：1
df3_e0_so1_pi1 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==1) & (data3['player_id']==1)]['y'].mean()
df3_e0_so1_pi2 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==1) & (data3['player_id']==2)]['y'].mean()
df3_e0_so1_pi3 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==1) & (data3['player_id']==3)]['y'].mean()
df3_e0_so1_pi4 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==1) & (data3['player_id']==4)]['y'].mean()
df3_e0_so1_pi5 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==1) & (data3['player_id']==5)]['y'].mean()
df3_e0_so1_pi6 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==1) & (data3['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：2
df3_e0_so2_pi1 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==2) & (data3['player_id']==1)]['y'].mean()
df3_e0_so2_pi2 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==2) & (data3['player_id']==2)]['y'].mean()
df3_e0_so2_pi3 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==2) & (data3['player_id']==3)]['y'].mean()
df3_e0_so2_pi4 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==2) & (data3['player_id']==4)]['y'].mean()
df3_e0_so2_pi5 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==2) & (data3['player_id']==5)]['y'].mean()
df3_e0_so2_pi6 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==2) & (data3['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：3
df3_e0_so3_pi1 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==3) & (data3['player_id']==1)]['y'].mean()
df3_e0_so3_pi2 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==3) & (data3['player_id']==2)]['y'].mean()
df3_e0_so3_pi3 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==3) & (data3['player_id']==3)]['y'].mean()
df3_e0_so3_pi4 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==3) & (data3['player_id']==4)]['y'].mean()
df3_e0_so3_pi5 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==3) & (data3['player_id']==5)]['y'].mean()
df3_e0_so3_pi6 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==3) & (data3['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：4
df3_e0_so4_pi1 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==4) & (data3['player_id']==1)]['y'].mean()
df3_e0_so4_pi2 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==4) & (data3['player_id']==2)]['y'].mean()
df3_e0_so4_pi3 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==4) & (data3['player_id']==3)]['y'].mean()
df3_e0_so4_pi4 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==4) & (data3['player_id']==4)]['y'].mean()
df3_e0_so4_pi5 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==4) & (data3['player_id']==5)]['y'].mean()
df3_e0_so4_pi6 = data3[(data3['ex_years']==0) & (data3['Sub_Ob']==4) & (data3['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：0
df3_e1_so0_pi1 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==0) & (data3['player_id']==1)]['y'].mean()
df3_e1_so0_pi2 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==0) & (data3['player_id']==2)]['y'].mean()
df3_e1_so0_pi3 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==0) & (data3['player_id']==3)]['y'].mean()
df3_e1_so0_pi4 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==0) & (data3['player_id']==4)]['y'].mean()
df3_e1_so0_pi5 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==0) & (data3['player_id']==5)]['y'].mean()
df3_e1_so0_pi6 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==0) & (data3['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：1
df3_e1_so1_pi1 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==1) & (data3['player_id']==1)]['y'].mean()
df3_e1_so1_pi2 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==1) & (data3['player_id']==2)]['y'].mean()
df3_e1_so1_pi3 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==1) & (data3['player_id']==3)]['y'].mean()
df3_e1_so1_pi4 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==1) & (data3['player_id']==4)]['y'].mean()
df3_e1_so1_pi5 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==1) & (data3['player_id']==5)]['y'].mean()
df3_e1_so1_pi6 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==1) & (data3['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：2
df3_e1_so2_pi1 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==2) & (data3['player_id']==1)]['y'].mean()
df3_e1_so2_pi2 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==2) & (data3['player_id']==2)]['y'].mean()
df3_e1_so2_pi3 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==2) & (data3['player_id']==3)]['y'].mean()
df3_e1_so2_pi4 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==2) & (data3['player_id']==4)]['y'].mean()
df3_e1_so2_pi5 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==2) & (data3['player_id']==5)]['y'].mean()
df3_e1_so2_pi6 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==2) & (data3['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：3
df3_e1_so3_pi1 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==3) & (data3['player_id']==1)]['y'].mean()
df3_e1_so3_pi2 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==3) & (data3['player_id']==2)]['y'].mean()
df3_e1_so3_pi3 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==3) & (data3['player_id']==3)]['y'].mean()
df3_e1_so3_pi4 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==3) & (data3['player_id']==4)]['y'].mean()
df3_e1_so3_pi5 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==3) & (data3['player_id']==5)]['y'].mean()
df3_e1_so3_pi6 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==3) & (data3['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：4
df3_e1_so4_pi1 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==4) & (data3['player_id']==1)]['y'].mean()
df3_e1_so4_pi2 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==4) & (data3['player_id']==2)]['y'].mean()
df3_e1_so4_pi3 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==4) & (data3['player_id']==3)]['y'].mean()
df3_e1_so4_pi4 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==4) & (data3['player_id']==4)]['y'].mean()
df3_e1_so4_pi5 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==4) & (data3['player_id']==5)]['y'].mean()
df3_e1_so4_pi6 = data3[(data3['ex_years']==1) & (data3['Sub_Ob']==4) & (data3['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：0
df3_e2_so0_pi1 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==0) & (data3['player_id']==1)]['y'].mean()
df3_e2_so0_pi2 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==0) & (data3['player_id']==2)]['y'].mean()
df3_e2_so0_pi3 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==0) & (data3['player_id']==3)]['y'].mean()
df3_e2_so0_pi4 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==0) & (data3['player_id']==4)]['y'].mean()
df3_e2_so0_pi5 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==0) & (data3['player_id']==5)]['y'].mean()
df3_e2_so0_pi6 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==0) & (data3['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：1
df3_e2_so1_pi1 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==1) & (data3['player_id']==1)]['y'].mean()
df3_e2_so1_pi2 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==1) & (data3['player_id']==2)]['y'].mean()
df3_e2_so1_pi3 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==1) & (data3['player_id']==3)]['y'].mean()
df3_e2_so1_pi4 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==1) & (data3['player_id']==4)]['y'].mean()
df3_e2_so1_pi5 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==1) & (data3['player_id']==5)]['y'].mean()
df3_e2_so1_pi6 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==1) & (data3['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：2
df3_e2_so2_pi1 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==2) & (data3['player_id']==1)]['y'].mean()
df3_e2_so2_pi2 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==2) & (data3['player_id']==2)]['y'].mean()
df3_e2_so2_pi3 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==2) & (data3['player_id']==3)]['y'].mean()
df3_e2_so2_pi4 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==2) & (data3['player_id']==4)]['y'].mean()
df3_e2_so2_pi5 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==2) & (data3['player_id']==5)]['y'].mean()
df3_e2_so2_pi6 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==2) & (data3['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：3
df3_e2_so3_pi1 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==3) & (data3['player_id']==1)]['y'].mean()
df3_e2_so3_pi2 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==3) & (data3['player_id']==2)]['y'].mean()
df3_e2_so3_pi3 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==3) & (data3['player_id']==3)]['y'].mean()
df3_e2_so3_pi4 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==3) & (data3['player_id']==4)]['y'].mean()
df3_e2_so3_pi5 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==3) & (data3['player_id']==5)]['y'].mean()
df3_e2_so3_pi6 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==3) & (data3['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：4
df3_e2_so4_pi1 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==4) & (data3['player_id']==1)]['y'].mean()
df3_e2_so4_pi2 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==4) & (data3['player_id']==2)]['y'].mean()
df3_e2_so4_pi3 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==4) & (data3['player_id']==3)]['y'].mean()
df3_e2_so4_pi4 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==4) & (data3['player_id']==4)]['y'].mean()
df3_e2_so4_pi5 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==4) & (data3['player_id']==5)]['y'].mean()
df3_e2_so4_pi6 = data3[(data3['ex_years']==2) & (data3['Sub_Ob']==4) & (data3['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：0
df3_e3_so0_pi1 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==0) & (data3['player_id']==1)]['y'].mean()
df3_e3_so0_pi2 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==0) & (data3['player_id']==2)]['y'].mean()
df3_e3_so0_pi3 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==0) & (data3['player_id']==3)]['y'].mean()
df3_e3_so0_pi4 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==0) & (data3['player_id']==4)]['y'].mean()
df3_e3_so0_pi5 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==0) & (data3['player_id']==5)]['y'].mean()
df3_e3_so0_pi6 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==0) & (data3['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：1
df3_e3_so1_pi1 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==1) & (data3['player_id']==1)]['y'].mean()
df3_e3_so1_pi2 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==1) & (data3['player_id']==2)]['y'].mean()
df3_e3_so1_pi3 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==1) & (data3['player_id']==3)]['y'].mean()
df3_e3_so1_pi4 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==1) & (data3['player_id']==4)]['y'].mean()
df3_e3_so1_pi5 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==1) & (data3['player_id']==5)]['y'].mean()
df3_e3_so1_pi6 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==1) & (data3['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：2
df3_e3_so2_pi1 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==2) & (data3['player_id']==1)]['y'].mean()
df3_e3_so2_pi2 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==2) & (data3['player_id']==2)]['y'].mean()
df3_e3_so2_pi3 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==2) & (data3['player_id']==3)]['y'].mean()
df3_e3_so2_pi4 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==2) & (data3['player_id']==4)]['y'].mean()
df3_e3_so2_pi5 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==2) & (data3['player_id']==5)]['y'].mean()
df3_e3_so2_pi6 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==2) & (data3['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：3
df3_e3_so3_pi1 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==3) & (data3['player_id']==1)]['y'].mean()
df3_e3_so3_pi2 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==3) & (data3['player_id']==2)]['y'].mean()
df3_e3_so3_pi3 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==3) & (data3['player_id']==3)]['y'].mean()
df3_e3_so3_pi4 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==3) & (data3['player_id']==4)]['y'].mean()
df3_e3_so3_pi5 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==3) & (data3['player_id']==5)]['y'].mean()
df3_e3_so3_pi6 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==3) & (data3['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：4
df3_e3_so4_pi1 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==4) & (data3['player_id']==1)]['y'].mean()
df3_e3_so4_pi2 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==4) & (data3['player_id']==2)]['y'].mean()
df3_e3_so4_pi3 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==4) & (data3['player_id']==3)]['y'].mean()
df3_e3_so4_pi4 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==4) & (data3['player_id']==4)]['y'].mean()
df3_e3_so4_pi5 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==4) & (data3['player_id']==5)]['y'].mean()
df3_e3_so4_pi6 = data3[(data3['ex_years']==3) & (data3['Sub_Ob']==4) & (data3['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：0
df3_e4_so0_pi1 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==0) & (data3['player_id']==1)]['y'].mean()
df3_e4_so0_pi2 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==0) & (data3['player_id']==2)]['y'].mean()
df3_e4_so0_pi3 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==0) & (data3['player_id']==3)]['y'].mean()
df3_e4_so0_pi4 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==0) & (data3['player_id']==4)]['y'].mean()
df3_e4_so0_pi5 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==0) & (data3['player_id']==5)]['y'].mean()
df3_e4_so0_pi6 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==0) & (data3['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：1
df3_e4_so1_pi1 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==1) & (data3['player_id']==1)]['y'].mean()
df3_e4_so1_pi2 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==1) & (data3['player_id']==2)]['y'].mean()
df3_e4_so1_pi3 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==1) & (data3['player_id']==3)]['y'].mean()
df3_e4_so1_pi4 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==1) & (data3['player_id']==4)]['y'].mean()
df3_e4_so1_pi5 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==1) & (data3['player_id']==5)]['y'].mean()
df3_e4_so1_pi6 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==1) & (data3['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：2
df3_e4_so2_pi1 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==2) & (data3['player_id']==1)]['y'].mean()
df3_e4_so2_pi2 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==2) & (data3['player_id']==2)]['y'].mean()
df3_e4_so2_pi3 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==2) & (data3['player_id']==3)]['y'].mean()
df3_e4_so2_pi4 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==2) & (data3['player_id']==4)]['y'].mean()
df3_e4_so2_pi5 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==2) & (data3['player_id']==5)]['y'].mean()
df3_e4_so2_pi6 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==2) & (data3['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：3
df3_e4_so3_pi1 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==3) & (data3['player_id']==1)]['y'].mean()
df3_e4_so3_pi2 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==3) & (data3['player_id']==2)]['y'].mean()
df3_e4_so3_pi3 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==3) & (data3['player_id']==3)]['y'].mean()
df3_e4_so3_pi4 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==3) & (data3['player_id']==4)]['y'].mean()
df3_e4_so3_pi5 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==3) & (data3['player_id']==5)]['y'].mean()
df3_e4_so3_pi6 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==3) & (data3['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：4
df3_e4_so4_pi1 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==4) & (data3['player_id']==1)]['y'].mean()
df3_e4_so4_pi2 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==4) & (data3['player_id']==2)]['y'].mean()
df3_e4_so4_pi3 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==4) & (data3['player_id']==3)]['y'].mean()
df3_e4_so4_pi4 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==4) & (data3['player_id']==4)]['y'].mean()
df3_e4_so4_pi5 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==4) & (data3['player_id']==5)]['y'].mean()
df3_e4_so4_pi6 = data3[(data3['ex_years']==4) & (data3['Sub_Ob']==4) & (data3['player_id']==6)]['y'].mean()



#ローテーション：4 ---------------------------------------------------------------------------------
#経験年数：0　主観/客観的：0
df4_e0_so0_pi1 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==0) & (data4['player_id']==1)]['y'].mean()
df4_e0_so0_pi2 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==0) & (data4['player_id']==2)]['y'].mean()
df4_e0_so0_pi3 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==0) & (data4['player_id']==3)]['y'].mean()
df4_e0_so0_pi4 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==0) & (data4['player_id']==4)]['y'].mean()
df4_e0_so0_pi5 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==0) & (data4['player_id']==5)]['y'].mean()
df4_e0_so0_pi6 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==0) & (data4['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：1
df4_e0_so1_pi1 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==1) & (data4['player_id']==1)]['y'].mean()
df4_e0_so1_pi2 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==1) & (data4['player_id']==2)]['y'].mean()
df4_e0_so1_pi3 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==1) & (data4['player_id']==3)]['y'].mean()
df4_e0_so1_pi4 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==1) & (data4['player_id']==4)]['y'].mean()
df4_e0_so1_pi5 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==1) & (data4['player_id']==5)]['y'].mean()
df4_e0_so1_pi6 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==1) & (data4['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：2
df4_e0_so2_pi1 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==2) & (data4['player_id']==1)]['y'].mean()
df4_e0_so2_pi2 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==2) & (data4['player_id']==2)]['y'].mean()
df4_e0_so2_pi3 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==2) & (data4['player_id']==3)]['y'].mean()
df4_e0_so2_pi4 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==2) & (data4['player_id']==4)]['y'].mean()
df4_e0_so2_pi5 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==2) & (data4['player_id']==5)]['y'].mean()
df4_e0_so2_pi6 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==2) & (data4['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：3
df4_e0_so3_pi1 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==3) & (data4['player_id']==1)]['y'].mean()
df4_e0_so3_pi2 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==3) & (data4['player_id']==2)]['y'].mean()
df4_e0_so3_pi3 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==3) & (data4['player_id']==3)]['y'].mean()
df4_e0_so3_pi4 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==3) & (data4['player_id']==4)]['y'].mean()
df4_e0_so3_pi5 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==3) & (data4['player_id']==5)]['y'].mean()
df4_e0_so3_pi6 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==3) & (data4['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：4
df4_e0_so4_pi1 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==4) & (data4['player_id']==1)]['y'].mean()
df4_e0_so4_pi2 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==4) & (data4['player_id']==2)]['y'].mean()
df4_e0_so4_pi3 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==4) & (data4['player_id']==3)]['y'].mean()
df4_e0_so4_pi4 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==4) & (data4['player_id']==4)]['y'].mean()
df4_e0_so4_pi5 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==4) & (data4['player_id']==5)]['y'].mean()
df4_e0_so4_pi6 = data4[(data4['ex_years']==0) & (data4['Sub_Ob']==4) & (data4['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：0
df4_e1_so0_pi1 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==0) & (data4['player_id']==1)]['y'].mean()
df4_e1_so0_pi2 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==0) & (data4['player_id']==2)]['y'].mean()
df4_e1_so0_pi3 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==0) & (data4['player_id']==3)]['y'].mean()
df4_e1_so0_pi4 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==0) & (data4['player_id']==4)]['y'].mean()
df4_e1_so0_pi5 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==0) & (data4['player_id']==5)]['y'].mean()
df4_e1_so0_pi6 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==0) & (data4['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：1
df4_e1_so1_pi1 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==1) & (data4['player_id']==1)]['y'].mean()
df4_e1_so1_pi2 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==1) & (data4['player_id']==2)]['y'].mean()
df4_e1_so1_pi3 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==1) & (data4['player_id']==3)]['y'].mean()
df4_e1_so1_pi4 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==1) & (data4['player_id']==4)]['y'].mean()
df4_e1_so1_pi5 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==1) & (data4['player_id']==5)]['y'].mean()
df4_e1_so1_pi6 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==1) & (data4['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：2
df4_e1_so2_pi1 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==2) & (data4['player_id']==1)]['y'].mean()
df4_e1_so2_pi2 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==2) & (data4['player_id']==2)]['y'].mean()
df4_e1_so2_pi3 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==2) & (data4['player_id']==3)]['y'].mean()
df4_e1_so2_pi4 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==2) & (data4['player_id']==4)]['y'].mean()
df4_e1_so2_pi5 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==2) & (data4['player_id']==5)]['y'].mean()
df4_e1_so2_pi6 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==2) & (data4['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：3
df4_e1_so3_pi1 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==3) & (data4['player_id']==1)]['y'].mean()
df4_e1_so3_pi2 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==3) & (data4['player_id']==2)]['y'].mean()
df4_e1_so3_pi3 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==3) & (data4['player_id']==3)]['y'].mean()
df4_e1_so3_pi4 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==3) & (data4['player_id']==4)]['y'].mean()
df4_e1_so3_pi5 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==3) & (data4['player_id']==5)]['y'].mean()
df4_e1_so3_pi6 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==3) & (data4['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：4
df4_e1_so4_pi1 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==4) & (data4['player_id']==1)]['y'].mean()
df4_e1_so4_pi2 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==4) & (data4['player_id']==2)]['y'].mean()
df4_e1_so4_pi3 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==4) & (data4['player_id']==3)]['y'].mean()
df4_e1_so4_pi4 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==4) & (data4['player_id']==4)]['y'].mean()
df4_e1_so4_pi5 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==4) & (data4['player_id']==5)]['y'].mean()
df4_e1_so4_pi6 = data4[(data4['ex_years']==1) & (data4['Sub_Ob']==4) & (data4['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：0
df4_e2_so0_pi1 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==0) & (data4['player_id']==1)]['y'].mean()
df4_e2_so0_pi2 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==0) & (data4['player_id']==2)]['y'].mean()
df4_e2_so0_pi3 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==0) & (data4['player_id']==3)]['y'].mean()
df4_e2_so0_pi4 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==0) & (data4['player_id']==4)]['y'].mean()
df4_e2_so0_pi5 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==0) & (data4['player_id']==5)]['y'].mean()
df4_e2_so0_pi6 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==0) & (data4['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：1
df4_e2_so1_pi1 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==1) & (data4['player_id']==1)]['y'].mean()
df4_e2_so1_pi2 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==1) & (data4['player_id']==2)]['y'].mean()
df4_e2_so1_pi3 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==1) & (data4['player_id']==3)]['y'].mean()
df4_e2_so1_pi4 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==1) & (data4['player_id']==4)]['y'].mean()
df4_e2_so1_pi5 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==1) & (data4['player_id']==5)]['y'].mean()
df4_e2_so1_pi6 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==1) & (data4['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：2
df4_e2_so2_pi1 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==2) & (data4['player_id']==1)]['y'].mean()
df4_e2_so2_pi2 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==2) & (data4['player_id']==2)]['y'].mean()
df4_e2_so2_pi3 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==2) & (data4['player_id']==3)]['y'].mean()
df4_e2_so2_pi4 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==2) & (data4['player_id']==4)]['y'].mean()
df4_e2_so2_pi5 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==2) & (data4['player_id']==5)]['y'].mean()
df4_e2_so2_pi6 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==2) & (data4['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：3
df4_e2_so3_pi1 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==3) & (data4['player_id']==1)]['y'].mean()
df4_e2_so3_pi2 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==3) & (data4['player_id']==2)]['y'].mean()
df4_e2_so3_pi3 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==3) & (data4['player_id']==3)]['y'].mean()
df4_e2_so3_pi4 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==3) & (data4['player_id']==4)]['y'].mean()
df4_e2_so3_pi5 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==3) & (data4['player_id']==5)]['y'].mean()
df4_e2_so3_pi6 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==3) & (data4['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：4
df4_e2_so4_pi1 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==4) & (data4['player_id']==1)]['y'].mean()
df4_e2_so4_pi2 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==4) & (data4['player_id']==2)]['y'].mean()
df4_e2_so4_pi3 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==4) & (data4['player_id']==3)]['y'].mean()
df4_e2_so4_pi4 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==4) & (data4['player_id']==4)]['y'].mean()
df4_e2_so4_pi5 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==4) & (data4['player_id']==5)]['y'].mean()
df4_e2_so4_pi6 = data4[(data4['ex_years']==2) & (data4['Sub_Ob']==4) & (data4['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：0
df4_e3_so0_pi1 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==0) & (data4['player_id']==1)]['y'].mean()
df4_e3_so0_pi2 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==0) & (data4['player_id']==2)]['y'].mean()
df4_e3_so0_pi3 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==0) & (data4['player_id']==3)]['y'].mean()
df4_e3_so0_pi4 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==0) & (data4['player_id']==4)]['y'].mean()
df4_e3_so0_pi5 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==0) & (data4['player_id']==5)]['y'].mean()
df4_e3_so0_pi6 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==0) & (data4['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：1
df4_e3_so1_pi1 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==1) & (data4['player_id']==1)]['y'].mean()
df4_e3_so1_pi2 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==1) & (data4['player_id']==2)]['y'].mean()
df4_e3_so1_pi3 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==1) & (data4['player_id']==3)]['y'].mean()
df4_e3_so1_pi4 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==1) & (data4['player_id']==4)]['y'].mean()
df4_e3_so1_pi5 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==1) & (data4['player_id']==5)]['y'].mean()
df4_e3_so1_pi6 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==1) & (data4['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：2
df4_e3_so2_pi1 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==2) & (data4['player_id']==1)]['y'].mean()
df4_e3_so2_pi2 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==2) & (data4['player_id']==2)]['y'].mean()
df4_e3_so2_pi3 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==2) & (data4['player_id']==3)]['y'].mean()
df4_e3_so2_pi4 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==2) & (data4['player_id']==4)]['y'].mean()
df4_e3_so2_pi5 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==2) & (data4['player_id']==5)]['y'].mean()
df4_e3_so2_pi6 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==2) & (data4['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：3
df4_e3_so3_pi1 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==3) & (data4['player_id']==1)]['y'].mean()
df4_e3_so3_pi2 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==3) & (data4['player_id']==2)]['y'].mean()
df4_e3_so3_pi3 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==3) & (data4['player_id']==3)]['y'].mean()
df4_e3_so3_pi4 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==3) & (data4['player_id']==4)]['y'].mean()
df4_e3_so3_pi5 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==3) & (data4['player_id']==5)]['y'].mean()
df4_e3_so3_pi6 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==3) & (data4['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：4
df4_e3_so4_pi1 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==4) & (data4['player_id']==1)]['y'].mean()
df4_e3_so4_pi2 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==4) & (data4['player_id']==2)]['y'].mean()
df4_e3_so4_pi3 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==4) & (data4['player_id']==3)]['y'].mean()
df4_e3_so4_pi4 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==4) & (data4['player_id']==4)]['y'].mean()
df4_e3_so4_pi5 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==4) & (data4['player_id']==5)]['y'].mean()
df4_e3_so4_pi6 = data4[(data4['ex_years']==3) & (data4['Sub_Ob']==4) & (data4['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：0
df4_e4_so0_pi1 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==0) & (data4['player_id']==1)]['y'].mean()
df4_e4_so0_pi2 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==0) & (data4['player_id']==2)]['y'].mean()
df4_e4_so0_pi3 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==0) & (data4['player_id']==3)]['y'].mean()
df4_e4_so0_pi4 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==0) & (data4['player_id']==4)]['y'].mean()
df4_e4_so0_pi5 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==0) & (data4['player_id']==5)]['y'].mean()
df4_e4_so0_pi6 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==0) & (data4['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：1
df4_e4_so1_pi1 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==1) & (data4['player_id']==1)]['y'].mean()
df4_e4_so1_pi2 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==1) & (data4['player_id']==2)]['y'].mean()
df4_e4_so1_pi3 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==1) & (data4['player_id']==3)]['y'].mean()
df4_e4_so1_pi4 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==1) & (data4['player_id']==4)]['y'].mean()
df4_e4_so1_pi5 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==1) & (data4['player_id']==5)]['y'].mean()
df4_e4_so1_pi6 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==1) & (data4['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：2
df4_e4_so2_pi1 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==2) & (data4['player_id']==1)]['y'].mean()
df4_e4_so2_pi2 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==2) & (data4['player_id']==2)]['y'].mean()
df4_e4_so2_pi3 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==2) & (data4['player_id']==3)]['y'].mean()
df4_e4_so2_pi4 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==2) & (data4['player_id']==4)]['y'].mean()
df4_e4_so2_pi5 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==2) & (data4['player_id']==5)]['y'].mean()
df4_e4_so2_pi6 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==2) & (data4['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：3
df4_e4_so3_pi1 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==3) & (data4['player_id']==1)]['y'].mean()
df4_e4_so3_pi2 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==3) & (data4['player_id']==2)]['y'].mean()
df4_e4_so3_pi3 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==3) & (data4['player_id']==3)]['y'].mean()
df4_e4_so3_pi4 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==3) & (data4['player_id']==4)]['y'].mean()
df4_e4_so3_pi5 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==3) & (data4['player_id']==5)]['y'].mean()
df4_e4_so3_pi6 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==3) & (data4['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：4
df4_e4_so4_pi1 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==4) & (data4['player_id']==1)]['y'].mean()
df4_e4_so4_pi2 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==4) & (data4['player_id']==2)]['y'].mean()
df4_e4_so4_pi3 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==4) & (data4['player_id']==3)]['y'].mean()
df4_e4_so4_pi4 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==4) & (data4['player_id']==4)]['y'].mean()
df4_e4_so4_pi5 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==4) & (data4['player_id']==5)]['y'].mean()
df4_e4_so4_pi6 = data4[(data4['ex_years']==4) & (data4['Sub_Ob']==4) & (data4['player_id']==6)]['y'].mean()



#ローテーション：5 ---------------------------------------------------------------------------------
#経験年数：0　主観/客観的：0
df5_e0_so0_pi1 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==0) & (data5['player_id']==1)]['y'].mean()
df5_e0_so0_pi2 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==0) & (data5['player_id']==2)]['y'].mean()
df5_e0_so0_pi3 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==0) & (data5['player_id']==3)]['y'].mean()
df5_e0_so0_pi4 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==0) & (data5['player_id']==4)]['y'].mean()
df5_e0_so0_pi5 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==0) & (data5['player_id']==5)]['y'].mean()
df5_e0_so0_pi6 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==0) & (data5['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：1
df5_e0_so1_pi1 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==1) & (data5['player_id']==1)]['y'].mean()
df5_e0_so1_pi2 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==1) & (data5['player_id']==2)]['y'].mean()
df5_e0_so1_pi3 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==1) & (data5['player_id']==3)]['y'].mean()
df5_e0_so1_pi4 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==1) & (data5['player_id']==4)]['y'].mean()
df5_e0_so1_pi5 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==1) & (data5['player_id']==5)]['y'].mean()
df5_e0_so1_pi6 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==1) & (data5['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：2
df5_e0_so2_pi1 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==2) & (data5['player_id']==1)]['y'].mean()
df5_e0_so2_pi2 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==2) & (data5['player_id']==2)]['y'].mean()
df5_e0_so2_pi3 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==2) & (data5['player_id']==3)]['y'].mean()
df5_e0_so2_pi4 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==2) & (data5['player_id']==4)]['y'].mean()
df5_e0_so2_pi5 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==2) & (data5['player_id']==5)]['y'].mean()
df5_e0_so2_pi6 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==2) & (data5['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：3
df5_e0_so3_pi1 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==3) & (data5['player_id']==1)]['y'].mean()
df5_e0_so3_pi2 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==3) & (data5['player_id']==2)]['y'].mean()
df5_e0_so3_pi3 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==3) & (data5['player_id']==3)]['y'].mean()
df5_e0_so3_pi4 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==3) & (data5['player_id']==4)]['y'].mean()
df5_e0_so3_pi5 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==3) & (data5['player_id']==5)]['y'].mean()
df5_e0_so3_pi6 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==3) & (data5['player_id']==6)]['y'].mean()

#経験年数：0　主観/客観的：4
df5_e0_so4_pi1 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==4) & (data5['player_id']==1)]['y'].mean()
df5_e0_so4_pi2 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==4) & (data5['player_id']==2)]['y'].mean()
df5_e0_so4_pi3 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==4) & (data5['player_id']==3)]['y'].mean()
df5_e0_so4_pi4 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==4) & (data5['player_id']==4)]['y'].mean()
df5_e0_so4_pi5 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==4) & (data5['player_id']==5)]['y'].mean()
df5_e0_so4_pi6 = data5[(data5['ex_years']==0) & (data5['Sub_Ob']==4) & (data5['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：0
df5_e1_so0_pi1 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==0) & (data5['player_id']==1)]['y'].mean()
df5_e1_so0_pi2 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==0) & (data5['player_id']==2)]['y'].mean()
df5_e1_so0_pi3 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==0) & (data5['player_id']==3)]['y'].mean()
df5_e1_so0_pi4 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==0) & (data5['player_id']==4)]['y'].mean()
df5_e1_so0_pi5 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==0) & (data5['player_id']==5)]['y'].mean()
df5_e1_so0_pi6 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==0) & (data5['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：1
df5_e1_so1_pi1 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==1) & (data5['player_id']==1)]['y'].mean()
df5_e1_so1_pi2 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==1) & (data5['player_id']==2)]['y'].mean()
df5_e1_so1_pi3 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==1) & (data5['player_id']==3)]['y'].mean()
df5_e1_so1_pi4 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==1) & (data5['player_id']==4)]['y'].mean()
df5_e1_so1_pi5 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==1) & (data5['player_id']==5)]['y'].mean()
df5_e1_so1_pi6 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==1) & (data5['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：2
df5_e1_so2_pi1 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==2) & (data5['player_id']==1)]['y'].mean()
df5_e1_so2_pi2 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==2) & (data5['player_id']==2)]['y'].mean()
df5_e1_so2_pi3 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==2) & (data5['player_id']==3)]['y'].mean()
df5_e1_so2_pi4 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==2) & (data5['player_id']==4)]['y'].mean()
df5_e1_so2_pi5 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==2) & (data5['player_id']==5)]['y'].mean()
df5_e1_so2_pi6 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==2) & (data5['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：3
df5_e1_so3_pi1 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==3) & (data5['player_id']==1)]['y'].mean()
df5_e1_so3_pi2 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==3) & (data5['player_id']==2)]['y'].mean()
df5_e1_so3_pi3 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==3) & (data5['player_id']==3)]['y'].mean()
df5_e1_so3_pi4 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==3) & (data5['player_id']==4)]['y'].mean()
df5_e1_so3_pi5 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==3) & (data5['player_id']==5)]['y'].mean()
df5_e1_so3_pi6 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==3) & (data5['player_id']==6)]['y'].mean()

#経験年数：1　主観/客観的：4
df5_e1_so4_pi1 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==4) & (data5['player_id']==1)]['y'].mean()
df5_e1_so4_pi2 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==4) & (data5['player_id']==2)]['y'].mean()
df5_e1_so4_pi3 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==4) & (data5['player_id']==3)]['y'].mean()
df5_e1_so4_pi4 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==4) & (data5['player_id']==4)]['y'].mean()
df5_e1_so4_pi5 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==4) & (data5['player_id']==5)]['y'].mean()
df5_e1_so4_pi6 = data5[(data5['ex_years']==1) & (data5['Sub_Ob']==4) & (data5['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：0
df5_e2_so0_pi1 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==0) & (data5['player_id']==1)]['y'].mean()
df5_e2_so0_pi2 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==0) & (data5['player_id']==2)]['y'].mean()
df5_e2_so0_pi3 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==0) & (data5['player_id']==3)]['y'].mean()
df5_e2_so0_pi4 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==0) & (data5['player_id']==4)]['y'].mean()
df5_e2_so0_pi5 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==0) & (data5['player_id']==5)]['y'].mean()
df5_e2_so0_pi6 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==0) & (data5['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：1
df5_e2_so1_pi1 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==1) & (data5['player_id']==1)]['y'].mean()
df5_e2_so1_pi2 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==1) & (data5['player_id']==2)]['y'].mean()
df5_e2_so1_pi3 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==1) & (data5['player_id']==3)]['y'].mean()
df5_e2_so1_pi4 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==1) & (data5['player_id']==4)]['y'].mean()
df5_e2_so1_pi5 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==1) & (data5['player_id']==5)]['y'].mean()
df5_e2_so1_pi6 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==1) & (data5['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：2
df5_e2_so2_pi1 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==2) & (data5['player_id']==1)]['y'].mean()
df5_e2_so2_pi2 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==2) & (data5['player_id']==2)]['y'].mean()
df5_e2_so2_pi3 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==2) & (data5['player_id']==3)]['y'].mean()
df5_e2_so2_pi4 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==2) & (data5['player_id']==4)]['y'].mean()
df5_e2_so2_pi5 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==2) & (data5['player_id']==5)]['y'].mean()
df5_e2_so2_pi6 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==2) & (data5['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：3
df5_e2_so3_pi1 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==3) & (data5['player_id']==1)]['y'].mean()
df5_e2_so3_pi2 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==3) & (data5['player_id']==2)]['y'].mean()
df5_e2_so3_pi3 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==3) & (data5['player_id']==3)]['y'].mean()
df5_e2_so3_pi4 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==3) & (data5['player_id']==4)]['y'].mean()
df5_e2_so3_pi5 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==3) & (data5['player_id']==5)]['y'].mean()
df5_e2_so3_pi6 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==3) & (data5['player_id']==6)]['y'].mean()

#経験年数：2　主観/客観的：4
df5_e2_so4_pi1 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==4) & (data5['player_id']==1)]['y'].mean()
df5_e2_so4_pi2 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==4) & (data5['player_id']==2)]['y'].mean()
df5_e2_so4_pi3 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==4) & (data5['player_id']==3)]['y'].mean()
df5_e2_so4_pi4 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==4) & (data5['player_id']==4)]['y'].mean()
df5_e2_so4_pi5 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==4) & (data5['player_id']==5)]['y'].mean()
df5_e2_so4_pi6 = data5[(data5['ex_years']==2) & (data5['Sub_Ob']==4) & (data5['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：0
df5_e3_so0_pi1 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==0) & (data5['player_id']==1)]['y'].mean()
df5_e3_so0_pi2 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==0) & (data5['player_id']==2)]['y'].mean()
df5_e3_so0_pi3 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==0) & (data5['player_id']==3)]['y'].mean()
df5_e3_so0_pi4 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==0) & (data5['player_id']==4)]['y'].mean()
df5_e3_so0_pi5 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==0) & (data5['player_id']==5)]['y'].mean()
df5_e3_so0_pi6 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==0) & (data5['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：1
df5_e3_so1_pi1 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==1) & (data5['player_id']==1)]['y'].mean()
df5_e3_so1_pi2 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==1) & (data5['player_id']==2)]['y'].mean()
df5_e3_so1_pi3 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==1) & (data5['player_id']==3)]['y'].mean()
df5_e3_so1_pi4 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==1) & (data5['player_id']==4)]['y'].mean()
df5_e3_so1_pi5 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==1) & (data5['player_id']==5)]['y'].mean()
df5_e3_so1_pi6 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==1) & (data5['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：2
df5_e3_so2_pi1 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==2) & (data5['player_id']==1)]['y'].mean()
df5_e3_so2_pi2 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==2) & (data5['player_id']==2)]['y'].mean()
df5_e3_so2_pi3 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==2) & (data5['player_id']==3)]['y'].mean()
df5_e3_so2_pi4 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==2) & (data5['player_id']==4)]['y'].mean()
df5_e3_so2_pi5 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==2) & (data5['player_id']==5)]['y'].mean()
df5_e3_so2_pi6 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==2) & (data5['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：3
df5_e3_so3_pi1 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==3) & (data5['player_id']==1)]['y'].mean()
df5_e3_so3_pi2 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==3) & (data5['player_id']==2)]['y'].mean()
df5_e3_so3_pi3 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==3) & (data5['player_id']==3)]['y'].mean()
df5_e3_so3_pi4 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==3) & (data5['player_id']==4)]['y'].mean()
df5_e3_so3_pi5 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==3) & (data5['player_id']==5)]['y'].mean()
df5_e3_so3_pi6 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==3) & (data5['player_id']==6)]['y'].mean()

#経験年数：3　主観/客観的：4
df5_e3_so4_pi1 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==4) & (data5['player_id']==1)]['y'].mean()
df5_e3_so4_pi2 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==4) & (data5['player_id']==2)]['y'].mean()
df5_e3_so4_pi3 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==4) & (data5['player_id']==3)]['y'].mean()
df5_e3_so4_pi4 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==4) & (data5['player_id']==4)]['y'].mean()
df5_e3_so4_pi5 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==4) & (data5['player_id']==5)]['y'].mean()
df5_e3_so4_pi6 = data5[(data5['ex_years']==3) & (data5['Sub_Ob']==4) & (data5['player_id']==6)]['y'].mean()

#経験年数：4　主観/客観的：0
df5_e4_so0_pi1 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==0) & (data5['player_id']==1)]['y'].mean()
df5_e4_so0_pi2 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==0) & (data5['player_id']==2)]['y'].mean()
df5_e4_so0_pi3 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==0) & (data5['player_id']==3)]['y'].mean()
df5_e4_so0_pi4 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==0) & (data5['player_id']==4)]['y'].mean()
df5_e4_so0_pi5 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==0) & (data5['player_id']==5)]['y'].mean()
df5_e4_so0_pi6 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==0) & (data5['player_id']==6)]['y'].mean()

#経験年数：4　主観/客観的：1
df5_e4_so1_pi1 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==1) & (data5['player_id']==1)]['y'].mean()
df5_e4_so1_pi2 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==1) & (data5['player_id']==2)]['y'].mean()
df5_e4_so1_pi3 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==1) & (data5['player_id']==3)]['y'].mean()
df5_e4_so1_pi4 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==1) & (data5['player_id']==4)]['y'].mean()
df5_e4_so1_pi5 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==1) & (data5['player_id']==5)]['y'].mean()
df5_e4_so1_pi6 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==1) & (data5['player_id']==6)]['y'].mean()

#経験年数：4　主観/客観的：2
df5_e4_so2_pi1 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==2) & (data5['player_id']==1)]['y'].mean()
df5_e4_so2_pi2 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==2) & (data5['player_id']==2)]['y'].mean()
df5_e4_so2_pi3 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==2) & (data5['player_id']==3)]['y'].mean()
df5_e4_so2_pi4 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==2) & (data5['player_id']==4)]['y'].mean()
df5_e4_so2_pi5 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==2) & (data5['player_id']==5)]['y'].mean()
df5_e4_so2_pi6 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==2) & (data5['player_id']==6)]['y'].mean()

#経験年数：4　主観/客観的：3
df5_e4_so3_pi1 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==3) & (data5['player_id']==1)]['y'].mean()
df5_e4_so3_pi2 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==3) & (data5['player_id']==2)]['y'].mean()
df5_e4_so3_pi3 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==3) & (data5['player_id']==3)]['y'].mean()
df5_e4_so3_pi4 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==3) & (data5['player_id']==4)]['y'].mean()
df5_e4_so3_pi5 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==3) & (data5['player_id']==5)]['y'].mean()
df5_e4_so3_pi6 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==3) & (data5['player_id']==6)]['y'].mean()

#経験年数：4　主観/客観的：4
df5_e4_so4_pi1 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==4) & (data5['player_id']==1)]['y'].mean()
df5_e4_so4_pi2 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==4) & (data5['player_id']==2)]['y'].mean()
df5_e4_so4_pi3 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==4) & (data5['player_id']==3)]['y'].mean()
df5_e4_so4_pi4 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==4) & (data5['player_id']==4)]['y'].mean()
df5_e4_so4_pi5 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==4) & (data5['player_id']==5)]['y'].mean()
df5_e4_so4_pi6 = data5[(data5['ex_years']==4) & (data5['Sub_Ob']==4) & (data5['player_id']==6)]['y'].mean()
