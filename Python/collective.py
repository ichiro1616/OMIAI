#担当　上村
#ローテーション別、経験年数、主観/客観的で全てが同じものにひとまずカテゴライズをする。
#その中から世代分けをして計算してdbにお気に入り度と共に予め入れておく。
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


#経験年数でデータを分類する


# 接続を閉じる
conn.close()