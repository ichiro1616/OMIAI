#担当　上村
#ローテーション別、経験年数、主観/客観的で全てが同じものにひとまずカテゴライズをする。
#その中から世代分けをして計算してdbにお気に入り度と共に予め入れておく。

#タプルの位置
experience_years = 2
Sub_Ob = 3
player_id = 4

import MySQLdb
conn = MySQLdb.connect(
    host='localhost',
    user='root',
    passwd='Pa22wadoh',
    db='omiai_db')
cur = conn.cursor()

#ローテーション別にテーブルから情報を抽出する
cur.execute("SELECT * FROM `register` WHERE `rotation` = 1;")
data1 = cur.fetchall()
cur.execute("SELECT * FROM `register` WHERE `rotation` = 2;")
data2 = cur.fetchall()
cur.execute("SELECT * FROM `register` WHERE `rotation` = 3;")
data3 = cur.fetchall()
cur.execute("SELECT * FROM `register` WHERE `rotation` = 4;")
data4 = cur.fetchall()
cur.execute("SELECT * FROM `register` WHERE `rotation` = 5;")
data5 = cur.fetchall()
cur.execute("SELECT * FROM `register` WHERE `rotation` = 6;")
data6 = cur.fetchall()
conn.commit() #結果を保存・確定する


#経験年数別にデータを分類する
#ローテーション：1
data1_ex0 = []
data1_ex1 = []
data1_ex2 = []
data1_ex3 = []
data1_ex4 = []
for counter1 in data1:
    if(data1[counter1][experience_years] == 0):
        data1_ex0 = data1[counter1]
        print(data1_ex0)
    if(data1[counter1][experience_years] == 1):
        data1_ex1 = data1[counter1]
    if(data1[counter1][experience_years] == 2):
        data1_ex2 = data1[counter1]
    if(data1[counter1][experience_years] == 3):
        data1_ex3 = data1[counter1]
    if(data1[counter1][experience_years] == 4):
        data1_ex4 = data1[counter1]

#ローテーション：2
data2_ex0 = []
data2_ex1 = []
data2_ex2 = []
data2_ex3 = []
data2_ex4 = []
for counter2 in data2:
    if(data2[counter2][experience_years] == 0):
        data2_ex0 = data2[counter2]
    if(data2[counter2][experience_years] == 1):
        data2_ex1 = data2[counter2]
    if(data2[counter2][experience_years] == 2):
        data2_ex2 = data2[counter2]
    if(data2[counter2][experience_years] == 3):
        data2_ex3 = data2[counter2]
    if(data2[counter2][experience_years] == 4):
        data2_ex4 = data2[counter2]

#ローテーション：3
data3_ex0 = []
data3_ex1 = []
data3_ex2 = []
data3_ex3 = []
data3_ex4 = []
for counter3 in data3:
    if(data3[counter3][experience_years] == 0):
        data3_ex0 = data3[counter3]
    if(data3[counter3][experience_years] == 1):
        data3_ex1 = data3[counter3]
    if(data3[counter3][experience_years] == 2):
        data3_ex2 = data3[counter3]
    if(data3[counter3][experience_years] == 3):
        data3_ex3 = data3[counter3]
    if(data3[counter3][experience_years] == 4):
        data3_ex4 = data3[counter3]

#ローテーション：4
data4_ex0 = []
data4_ex1 = []
data4_ex2 = []
data4_ex3 = []
data4_ex4 = []
for counter4 in data4:
    if(data4[counter4][experience_years] == 0):
        data4_ex0 = data4[counter4]
    if(data4[counter4][experience_years] == 1):
        data4_ex1 = data4[counter4]
    if(data4[counter4][experience_years] == 2):
        data4_ex2 = data4[counter4]
    if(data4[counter4][experience_years] == 3):
        data4_ex3 = data4[counter4]
    if(data4[counter4][experience_years] == 4):
        data4_ex4 = data4[counter4]

#ローテーション：5
data5_ex0 = []
data5_ex1 = []
data5_ex2 = []
data5_ex3 = []
data5_ex4 = []
for counter5 in data5:
    if(data5[counter5][experience_years] == 0):
        data5_ex0 = data5[counter5]
    if(data5[counter5][experience_years] == 1):
        data5_ex1 = data5[counter5]
    if(data5[counter5][experience_years] == 2):
        data5_ex2 = data5[counter5]
    if(data5[counter5][experience_years] == 3):
        data5_ex3 = data5[counter5]
    if(data5[counter5][experience_years] == 4):
        data5_ex4 = data5[counter5]

#ローテーション：6
data6_ex0 = []
data6_ex1 = []
data6_ex2 = []
data6_ex3 = []
data6_ex4 = []
for counter6 in data6:
    if(data6[counter6][experience_years] == 0):
        data6_ex0 = data6[counter6]
    if(data6[counter6][experience_years] == 1):
        data6_ex1 = data6[counter6]
    if(data6[counter6][experience_years] == 2):
        data6_ex2 = data6[counter6]
    if(data6[counter6][experience_years] == 3):
        data6_ex3 = data6[counter6]
    if(data6[counter6][experience_years] == 4):
        data6_ex4 = data6[counter6]












# 接続を閉じる
conn.close()