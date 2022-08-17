#担当　上村
#ローテーション別、経験年数、主観/客観的で全てが同じものにひとまずカテゴライズをする。
#その中から世代分けをして計算してdbにお気に入り度と共に予め入れておく。

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
#ダミーデータでの経験年数が1~6表記なのでりくと揃えるときにここを書き換える必要がある
conn = MySQLdb.connect(
    dbc.host,
    dbc.user,
    dbc.passwd,
    dbc.db)
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

#registerテーブルに入っているデータの個数を取得する
cur.execute("SELECT * FROM `register` WHERE `player_id` = 1 AND `rotation` = 0;")
length = cur.fetchall()
conn.commit() #結果を保存・確定する
length = len(length) #データの個数を取得
print("length = ", length)
length_db = length//5 #5人につき1世代なので、何世代分のデータがあるのかを計算する
print("length_db=", length_db)
#collectiveテーブルに既に入っているデータの個数を取得する
cur.execute("SELECT * FROM `collective` WHERE `player_id` = 1 AND `rotation` = 0;")
length_old = cur.fetchall()
conn.commit() #結果を保存・確定する
length_old = len(length_old) #データの個数を取得
print("length_old=", length_old)

#リストをデータフレーム化する
columns = pd.Index(['ex_years', 'Sub_Ob', 'rotation', 'player_id', 'x', 'y'])
data0 = pd.DataFrame(data_0,columns=columns)
data1 = pd.DataFrame(data_1,columns=columns)
data2 = pd.DataFrame(data_2,columns=columns)
data3 = pd.DataFrame(data_3,columns=columns)
data4 = pd.DataFrame(data_4,columns=columns)
data5 = pd.DataFrame(data_5,columns=columns)
time.sleep(0.2)

#集合知の計算----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
def new():
    #rotation 0
    gene = 0 #世代の数
    clip = 5  #5人ずつに区切るとき使う変数
    counter = 0 #while文から抜ける用の条件変数
    datalist = [] #今回の世代のデータを一時的に格納する
    x_tmp = [] #今回の世代のx座標を一時的に格納する
    y_tmp = [] #今回の世代のy座標を一時的に格納する
    sb_count = [] #0~clipまでの範囲で同じSub_Obを選択した人数をカウント
    weight = [] #datalistの加重平均を求めるのに使うデータの重み

    for h in range(ex_years): #キー：experience_years
        for i in range(player): #キー：player_id
            while(counter == 0):
                if((len(data0[(data0['ex_years']==h) & (data0['player_id']==i)]['x'])-clip)<5): #現在取得したデータを5つずつ区切って残りデータが5より少なくなった場合
                    counter = 1
                else: #現在取得したデータを5つずつ区切ってその中で平均を出す
                    print("clip =", clip)
                    print("h=",h, "i=",i)
                    datalist = ((data0[(data0['ex_years']==h) & (data0['player_id']==i)]['Sub_Ob'][0:clip]).values.tolist()) #0~clip(初期値は5でその後5ずつ増加)までのex_years = h, player_id = iのときのSub_Ob
                    print("----------------------------------------------------")
                    for j in range(clip): #同じSub_Obが選択されている人数をカウント
                        sb_count.append(datalist.count(datalist[j]))
                    for k in range(clip): #同じSub_Obを選択した人 ÷ 範囲内全体の人数で重みを算出
                        weight.append(round(sb_count[k]/clip,4))
                    x_tmp = ((data0[(data0['ex_years']==h) & (data0['player_id']==i)]['x'][0:clip]).values.tolist())
                    y_tmp = ((data0[(data0['ex_years']==h) & (data0['player_id']==i)]['y'][0:clip]).values.tolist())
                    x = round((np.average(np.array(x_tmp), weights=np.array(weight))),4)
                    y = round((np.average(np.array(y_tmp), weights=np.array(weight))),4)
                    clip += 5
                    print("datalist = ",datalist)
                    print("weight = ",weight)
                    print("x_tmp = ",x_tmp)
                    print("y_tmp = ", y_tmp)
                    print("x_mean = ", x)
                    print("y_mean = ", y)
                    cur.execute('INSERT INTO `collective`(`rotation`, `generation`, `experience_years`,`player_id`, `x_coordinate`, `y_coordinate`) VALUES (0,%s,%s,%s,%s,%s);',(gene,h,i,x,y))
                    conn.commit() #結果を保存・確定する
                    print("rotation=0", "experience_years=",h ,"player_id=",i, "x_coordinate=",x, "y_coordinate=",y, "generation=",gene)
                    datalist = [] #データリストの初期化
                    sb_count = [] #同じSub_Obを選択した人数の初期化
                    weight = [] #重みの初期化
                    gene += 1
                    time.sleep(0.5)
            counter = 0
            gene = 0
            clip = 5
        time.sleep(0.5)

new()

###-------以下2回目以降の処理----------------------------------------------------------------------------------------------
# def add():
#     counter = 0 #while文から抜ける用の条件変数
#     datalist = [] #今回の世代のデータを一時的に格納する
#     x_tmp = [] #今回の世代のx座標を一時的に格納する
#     y_tmp = [] #今回の世代のy座標を一時的に格納する
#     sb_count = [] #0~clipまでの範囲で同じSub_Obを選択した人数をカウント
#     weight = [] #datalistの加重平均を求めるのに使うデータの重み
#     flug = 0 #世代計算用のフラグ

#     for h in range(ex_years): #キー：experience_years
#         for i in range(player): #キー：player_id
#             while(counter == 0):
#                 if(flug == 0):
#                     cur.execute("SELECT MAX(`generation`) FROM `collective` WHERE `rotation` = 0 AND `experience_years` = %s AND `player_id` = %s;",(h,i+1))
#                     generation = cur.fetchall()
#                     if(np.isnan(generation)==True):
#                         counter = 1
#                     if(np.isnan(generation)==False):
#                         gene = int(generation[0][0])
#                         gene += 1
#                         print("generation = ", gene)
#                         clip = (gene*5)
#                         flug = 1
#                 if((len(data0[(data0['ex_years']==h) & (data0['player_id']==i)]['x'])-clip)<5): #現在取得したデータを5つずつ区切って残りデータが5より少なくなった場合
#                     counter = 1
#                 else: #現在取得したデータを5つずつ区切ってその中で平均を出す
#                     print("clip =", clip)
#                     print("h=",h, "i=",i)
#                     datalist = ((data0[(data0['ex_years']==h) & (data0['player_id']==i)]['Sub_Ob'][0:clip]).values.tolist()) #0~clip(初期値は5でその後5ずつ増加)までのex_years = h, player_id = iのときのSub_Ob
#                     print("----------------------------------------------------")
#                     for j in range(clip): #同じSub_Obが選択されている人数をカウント
#                         sb_count.append(datalist.count(datalist[j]))
#                     for k in range(clip): #同じSub_Obを選択した人 ÷ 範囲内全体の人数で重みを算出
#                         weight.append(round(sb_count[k]/clip,4))
#                     x_tmp = ((data0[(data0['ex_years']==h) & (data0['player_id']==i)]['x'][0:clip]).values.tolist())
#                     y_tmp = ((data0[(data0['ex_years']==h) & (data0['player_id']==i)]['y'][0:clip]).values.tolist())
#                     x = round((np.average(np.array(x_tmp), weights=np.array(weight))),4)
#                     y = round((np.average(np.array(y_tmp), weights=np.array(weight))),4)
#                     clip += 5
#                     print("datalist = ",datalist)
#                     print("weight = ",weight)
#                     print("x_tmp = ",x_tmp)
#                     print("y_tmp = ", y_tmp)
#                     print("x_mean = ", x)
#                     print("y_mean = ", y)
#                     cur.execute('INSERT INTO `collective`(`rotation`, `generation`, `experience_years`,`player_id`, `x_coordinate`, `y_coordinate`) VALUES (0,%s,%s,%s,%s,%s);',(gene,h,i,x,y))
#                     conn.commit() #結果を保存・確定する
#                     print("rotation=0", "experience_years=",h ,"player_id=",i, "x_coordinate=",x, "y_coordinate=",y, "generation=",gene)
#                     datalist = [] #データリストの初期化
#                     sb_count = [] #同じSub_Obを選択した人数の初期化
#                     weight = [] #重みの初期化
#                     gene += 1
#                     time.sleep(0.5)
#             counter = 0
#             flug = 0
#             time.sleep(0.5)


# if(length_old == 0): #length_oldがゼロの場合は、まだ1度も集合知の計算を行っていないので、全ての計算を行う
#     new()
# else: #length_dbよりlength_oldが小さい場合は、前回計算した時からデータ数が増えているので増えた部分についてのみ計算を行う
#     add()

conn.close() #dbとの接続を閉じる