#担当　上村
#ローテーション別、経験年数、主観/客観的で全てが同じものにひとまずカテゴライズをする。
#その中から世代分けをして計算してdbにお気に入り度と共に予め入れておく。

#ライブラリのインポート
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
    host='localhost',
    user='root',
    passwd='Pa22wadoh',
    db='omiai_db')
cur = conn.cursor()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`,`player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 1;")
data0_db = cur.fetchall()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`,`player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 2;")
data1_db = cur.fetchall()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`,`player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 3;")
data2_db = cur.fetchall()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`,`player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 4;")
data3_db = cur.fetchall()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`,`player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 5;")
data4_db = cur.fetchall()
cur.execute("SELECT `experience_years`, `Sub_Ob`, `rotation`,`player_id`, `x_coordinate`, `y_coordinate` FROM `register` WHERE `rotation` = 6;")
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

#入っているデータの個数を取得する
len_0 = len(data0_db)
len_1 = len(data1_db)
len_2 = len(data2_db)
len_3 = len(data3_db)
len_4 = len(data4_db)
len_5 = len(data5_db)

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
#rotation 0
gene = 0
clip = 4
counter = 0
for h in range(ex_years):
    for i in range(Sub_Ob):
        for j in range(player):
            while(counter == 0):
                if((len(data0[(data0['ex_years']==h) & (data0['Sub_Ob']==i) & (data0['player_id']==j)]['x'])-clip)<5): #現在取得したデータを5つずつ区切って残りデータが5より少なくなった場合
                    print("clip=", clip, "len_0=", len_0)
                    x = round(data0[(data0['ex_years']==h) & (data0['Sub_Ob']==i) & (data0['player_id']==j)]['x'].mean(),4)
                    y = round(data0[(data0['ex_years']==h) & (data0['Sub_Ob']==i) & (data0['player_id']==j)]['y'].mean(),4)
                    counter = 1
                else: #現在取得したデータを5つずつ区切って平均を出す
                    print("clip =", clip)
                    x = round(data0[(data0['ex_years']==h) & (data0['Sub_Ob']==i) & (data0['player_id']==j)]['x'][0:clip].mean(),4)
                    y = round(data0[(data0['ex_years']==h) & (data0['Sub_Ob']==i) & (data0['player_id']==j)]['y'][0:clip].mean(),4)
                    clip += 5
                #insertエラー防止の為の処理！データがnanの場合は0を入れておく-----------------------------------------------------------------
                if(np.isnan(x)==True):
                    x = 0
                if(np.isnan(y)==True):
                    y = 0
                #-------------------------------------------------------------------------------------------------------------------------
                print(x, y)
                cur.execute('INSERT INTO `collective`(`rotation`, `generation`, `experience_years`, `Sub_Ob`, `player_id`, `x_coordinate`, `y_coordinate`) VALUES (0,%s,%s,%s,%s,%s,%s);',(gene,h,i,j+1,x,y))
                conn.commit() #結果を保存・確定する
                print("rotation=0", "experience_years=",h , "Sub_Ob=",i, "player_id=",j+1, "x_coordinate=",x, "y_coordinate=",y, "generation=",gene)
                gene += 1
                time.sleep(0.2)
            counter = 0
            gene = 0
            clip = 4

#rotation 1
gene = 0
clip = 4
counter = 0
for h in range(ex_years):
    for i in range(Sub_Ob):
        for j in range(player):
            while(counter == 0):
                if((len(data1[(data1['ex_years']==h) & (data1['Sub_Ob']==i) & (data1['player_id']==j)]['x'])-clip)<5):
                    print("clip=", clip, "len_1=", len_1)
                    x = round(data1[(data1['ex_years']==h) & (data1['Sub_Ob']==i) & (data1['player_id']==j)]['x'].mean(),4)
                    y = round(data1[(data1['ex_years']==h) & (data1['Sub_Ob']==i) & (data1['player_id']==j)]['y'].mean(),4)
                    counter = 1
                else:
                    print("clip =", clip)
                    x = round(data1[(data1['ex_years']==h) & (data1['Sub_Ob']==i) & (data1['player_id']==j)]['x'][0:clip].mean(),4)
                    y = round(data1[(data1['ex_years']==h) & (data1['Sub_Ob']==i) & (data1['player_id']==j)]['y'][0:clip].mean(),4)
                    clip += 5
                if(np.isnan(x)==True):
                    x = 0
                if(np.isnan(y)==True):
                    y = 0
                print(x, y)
                cur.execute('INSERT INTO `collective`(`rotation`, `generation`, `experience_years`, `Sub_Ob`, `player_id`, `x_coordinate`, `y_coordinate`) VALUES (1,%s,%s,%s,%s,%s,%s);',(gene,h,i,j+1,x,y))
                conn.commit() #結果を保存・確定する
                print("rotation=1", "experience_years=",h , "Sub_Ob=",i, "player_id=",j+1, "x_coordinate=",x, "y_coordinate=",y, "generation=",gene)
                gene += 1
                time.sleep(0.2)
            counter = 0
            gene = 0
            clip = 4

#rotation 2
gene = 0
clip = 4
counter = 0
for h in range(ex_years):
    for i in range(Sub_Ob):
        for j in range(player):
            while(counter == 0):
                if((len(data2[(data2['ex_years']==h) & (data2['Sub_Ob']==i) & (data2['player_id']==j)]['x'])-clip)<5):
                    print("clip=", clip, "len_2=", len_2)
                    x = round(data2[(data2['ex_years']==h) & (data2['Sub_Ob']==i) & (data2['player_id']==j)]['x'].mean(),4)
                    y = round(data2[(data2['ex_years']==h) & (data2['Sub_Ob']==i) & (data2['player_id']==j)]['y'].mean(),4)
                    counter = 1
                else:
                    print("clip =", clip)
                    x = round(data2[(data2['ex_years']==h) & (data2['Sub_Ob']==i) & (data2['player_id']==j)]['x'][0:clip].mean(),4)
                    y = round(data2[(data2['ex_years']==h) & (data2['Sub_Ob']==i) & (data2['player_id']==j)]['y'][0:clip].mean(),4)
                    clip += 5
                if(np.isnan(x)==True):
                    x = 0
                if(np.isnan(y)==True):
                    y = 0
                print(x, y)
                cur.execute('INSERT INTO `collective`(`rotation`, `generation`, `experience_years`, `Sub_Ob`, `player_id`, `x_coordinate`, `y_coordinate`) VALUES (2,%s,%s,%s,%s,%s,%s);',(gene,h,i,j+1,x,y))
                conn.commit() #結果を保存・確定する
                print("rotation=2", "experience_years=",h , "Sub_Ob=",i, "player_id=",j+1, "x_coordinate=",x, "y_coordinate=",y, "generation=",gene)
                gene += 1
                time.sleep(0.2)
            counter = 0
            gene = 0
            clip = 4

#rotation 3
gene = 0
clip = 4
counter = 0
for h in range(ex_years):
    for i in range(Sub_Ob):
        for j in range(player):
            while(counter == 0):
                if((len(data3[(data3['ex_years']==h) & (data3['Sub_Ob']==i) & (data3['player_id']==j)]['x'])-clip)<5):
                    print("clip=", clip, "len_3=", len_3)
                    x = round(data3[(data3['ex_years']==h) & (data3['Sub_Ob']==i) & (data3['player_id']==j)]['x'].mean(),4)
                    y = round(data3[(data3['ex_years']==h) & (data3['Sub_Ob']==i) & (data3['player_id']==j)]['y'].mean(),4)
                    counter = 1
                else:
                    print("clip =", clip)
                    x = round(data3[(data3['ex_years']==h) & (data3['Sub_Ob']==i) & (data3['player_id']==j)]['x'][0:clip].mean(),4)
                    y = round(data3[(data3['ex_years']==h) & (data3['Sub_Ob']==i) & (data3['player_id']==j)]['y'][0:clip].mean(),4)
                    clip += 5
                if(np.isnan(x)==True):
                    x = 0
                if(np.isnan(y)==True):
                    y = 0
                print(x, y)
                cur.execute('INSERT INTO `collective`(`rotation`, `generation`, `experience_years`, `Sub_Ob`, `player_id`, `x_coordinate`, `y_coordinate`) VALUES (3,%s,%s,%s,%s,%s,%s);',(gene,h,i,j+1,x,y))
                conn.commit() #結果を保存・確定する
                print("rotation=3", "experience_years=",h , "Sub_Ob=",i, "player_id=",j+1, "x_coordinate=",x, "y_coordinate=",y, "generation=",gene)
                gene += 1
                time.sleep(0.2)
            counter = 0
            gene = 0
            clip = 4

#rotation 4
gene = 0
clip = 4
counter = 0
for h in range(ex_years):
    for i in range(Sub_Ob):
        for j in range(player):
            while(counter == 0):
                if((len(data4[(data4['ex_years']==h) & (data4['Sub_Ob']==i) & (data4['player_id']==j)]['x'])-clip)<5):
                    print("clip=", clip, "len_4=", len_4)
                    x = round(data4[(data4['ex_years']==h) & (data4['Sub_Ob']==i) & (data4['player_id']==j)]['x'].mean(),4)
                    y = round(data4[(data4['ex_years']==h) & (data4['Sub_Ob']==i) & (data4['player_id']==j)]['y'].mean(),4)
                    counter = 1
                else:
                    print("clip =", clip)
                    x = round(data4[(data4['ex_years']==h) & (data4['Sub_Ob']==i) & (data4['player_id']==j)]['x'][0:clip].mean(),4)
                    y = round(data4[(data4['ex_years']==h) & (data4['Sub_Ob']==i) & (data4['player_id']==j)]['y'][0:clip].mean(),4)
                    clip += 5
                if(np.isnan(x)==True):
                    x = 0
                if(np.isnan(y)==True):
                    y = 0
                print(x, y)
                cur.execute('INSERT INTO `collective`(`rotation`, `generation`, `experience_years`, `Sub_Ob`, `player_id`, `x_coordinate`, `y_coordinate`) VALUES (4,%s,%s,%s,%s,%s,%s);',(gene,h,i,j+1,x,y))
                conn.commit() #結果を保存・確定する
                print("rotation=4", "experience_years=",h , "Sub_Ob=",i, "player_id=",j+1, "x_coordinate=",x, "y_coordinate=",y, "generation=",gene)
                gene += 1
                time.sleep(0.2)
            counter = 0
            gene = 0
            clip = 4

#rotation 5
gene = 0
clip = 4
counter = 0
for h in range(ex_years):
    for i in range(Sub_Ob):
        for j in range(player):
            while(counter == 0):
                if((len(data5[(data5['ex_years']==h) & (data5['Sub_Ob']==i) & (data5['player_id']==j)]['x'])-clip)<5):
                    print("clip=", clip, "len_5=", len_5)
                    x = round(data5[(data5['ex_years']==h) & (data5['Sub_Ob']==i) & (data5['player_id']==j)]['x'].mean(),4)
                    y = round(data5[(data5['ex_years']==h) & (data5['Sub_Ob']==i) & (data5['player_id']==j)]['y'].mean(),4)
                    counter = 1
                else:
                    print("clip =", clip)
                    x = round(data5[(data5['ex_years']==h) & (data5['Sub_Ob']==i) & (data5['player_id']==j)]['x'][0:clip].mean(),4)
                    y = round(data5[(data5['ex_years']==h) & (data5['Sub_Ob']==i) & (data5['player_id']==j)]['y'][0:clip].mean(),4)
                    clip += 5
                if(np.isnan(x)==True):
                    x = 0
                if(np.isnan(y)==True):
                    y = 0
                print(x, y)
                cur.execute('INSERT INTO `collective`(`rotation`, `generation`, `experience_years`, `Sub_Ob`, `player_id`, `x_coordinate`, `y_coordinate`) VALUES (5,%s,%s,%s,%s,%s,%s);',(gene,h,i,j+1,x,y))
                conn.commit() #結果を保存・確定する
                print("rotation=5", "experience_years=",h , "Sub_Ob=",i, "player_id=",j+1, "x_coordinate=",x, "y_coordinate=",y, "generation=",gene)
                gene += 1
                time.sleep(0.2)
            counter = 0
            gene = 0
            clip = 4


conn.close() #dbとの接続を閉じる