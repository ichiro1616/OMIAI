
import locale
import pandas as pd
import MySQLdb




# conn = MySQLdb.connect(
#  unix_socket = '/Applications/MAMP/tmp/mysql/mysql.sock',
#  user='root',
#  passwd='',
#  host='localhost',
#  db='omiai')
# # カーソルを取得する
# cur = conn.cursor()

# # SQL（データベースを操作するコマンド）を実行する
# # userテーブルから、HostとUser列を取り出す
# sql = "SELECT `left_or_right` FROM `answer`"
# cur.execute(sql)

# # 実行結果を取得する
# rows = cur.fetchall()

# # 1行ずつ表示する
# for row in rows:
#  print(row)

# cur.close
# conn.close





encoding = locale.getpreferredencoding()
 
df = pd.read_csv('csv_add.csv', encoding = 'utf-8', header = 0)
df['z'] = df['x'] + df['y']
print(df)
#df.to_csv('subjectivity.csv', index = False, columns=['x','y','z'],encoding=encoding) #主観的データ用csv
df.to_csv('objectivity.csv', index = False, columns=['x','y','z'],encoding=encoding) #客観的データ用csv
