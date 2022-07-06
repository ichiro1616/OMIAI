import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LogisticRegressionCV
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import PolynomialFeatures
import locale
import MySQLdb


# df = pd.read_csv("dummy_data.csv", encoding="utf_8")
# df1 = pd.read_csv("y_pred_data.csv", encoding="utf_8")
# df2 = pd.read_csv("grid_data.csv", encoding="utf_8")
# df2 = df[['ball_x', 'ball_y']]

encoding = locale.getpreferredencoding()
# csvname = ['../Python/anzai_hinata/trans_anzai_hinata_220614_01.csv', '../Python/anzai_keisuke/trans_anzai_keisuke_220614_01.csv', '../Python/anzai_riku/trans_anzai_riku_220614_01.csv'] #ここに全部のcsvファイルを書く
riku_kento = ['../Python/anzai_hinata/trans_anzai_hinata_220614_01.csv', '../Python/anzai_keisuke/trans_anzai_keisuke_220614_01.csv', '../Python/anzai_riku/trans_anzai_riku_220614_01.csv'] 
riku_keisuke = ['../Python/riku_kento/trans_riku_kento_220614_01.csv', '../Python/anzai_kento/trans_anzai_kento_220614_01.csv', '../Python/hinata_keisuke/trans_hinata_keisuke_220614_01.csv']
kento_keisuke = []
hinata_riku = []
hinata_kento = []
hinata_keisuke = []
anzai_riku = []
anzai_kento = []
anzai_keisuke = []
anzai_hinata = []
pattern = [riku_kento, riku_keisuke, kento_keisuke, hinata_riku, hinata_kento, hinata_keisuke, anzai_riku, anzai_kento, anzai_keisuke, anzai_hinata]


#配列に選手2人の組み合わせ10通りを記入し、それごとにcsvnameからdfで集めて、for文で機械学習させる



conn = MySQLdb.connect(
 unix_socket = '/Applications/MAMP/tmp/mysql/mysql.sock',
 user='root',
 passwd='',
 host='localhost',
 db='omiai_db')
# カーソルを取得する
cur = conn.cursor()


sql = "SELECT * FROM `answer`"
cur.execute(sql)

# 実行結果を取得する
answer_array = cur.fetchall()
print(type(answer_array))
for i,csvname in enumerate(pattern):
    # print(csvname, i)
    target_array = []
    for j,filename in enumerate(csvname):
        print(filename)
        # print(j)


        value1 = filename.split('_')[2] + '_' + filename.split('_')[3]
        value2 = filename.split('_')[3] + '_' + filename.split('_')[2] 
        value3 = (filename.split('_')[4] + '_' + filename.split('_')[5]).split('.')[0]

        print(value1)
        print(value2)
        print(value3)
        
        movie_id_array = [] #動画のパスから特定の20個のmovie_idをとってくる処理をかく

        sql = "SELECT `movie_id` FROM movie WHERE (movie_path LIKE %s OR movie_path LIKE %s) AND movie_path LIKE %s"
        cur.execute(sql, ('%'+ value1 +'%', '%' + value2 + '%', '%' + value3 +'%'))
        rows = cur.fetchall()
        for row in rows:
            movie_id_array.append(row[0])
            # print("a",row[0])

        print(movie_id_array)



        gain_array = []
        for row in answer_array:
            for i in range(row[2]):   ##経験年数に応じてデータ数を増やしている
                gain_array.append(row)
        # print("gain_arrayyyyyyyyyy",gain_array, len(gain_array), len(answer_array))
        for row in answer_array:
            gain_array.append(row)
        # print("gain_arrayyyyyyyyyy",gain_array, len(gain_array), len(answer_array))


        for i in movie_id_array:  #targetを決めている。経験年数を加味して決めないといけない。
            judge_array = []
            for row in gain_array:
                # print("row",row)
                if row[1] == i:
                    judge_array.append(row[4])
            zero_count = judge_array.count(0)
            one_count = judge_array.count(1)
            print(zero_count, one_count)
            if zero_count / (len(judge_array)) > 0.6:  ##answerテーブルに値がないとエラーが起きてしまうので、あらかじめ、動画閲覧ページでanswerテーブルに全動画の値を入れておく
                target_array.append(0)
            elif one_count /  (len(judge_array)) > 0.6:
                target_array.append(1)
            else:
                target_array.append(2)

        print("target", target_array)
                


        # for j,filename in enumerate(csvname):
        #     print(filename, j)

                    # print("aaaa")
        if(j != 0):
            a = pd.read_csv(filename, encoding="utf_8")
            if(a["judge"][0] == 1):
                b = a["player1_x"]
                a["player1_x"] = a["player2_x"]
                a["player2_x"] = b
                c = a["player1_y"]
                a["player1_y"] = a["player2_y"]
                a["player2_y"] = c
            df_train = pd.merge(df_train, a, how="outer")


        else:
            a = pd.read_csv(filename, encoding="utf_8")
            df_train = a
            if(df_train["judge"][0] == 1):
                b = df_train["player1_x"]
                df_train["player1_x"] = df_train["player2_x"]
                df_train["player2_x"] = b
                c = df_train["player1_y"]
                df_train["player1_y"] = df_train["player2_y"]
                df_train["player2_y"] = c



    # df_train = pd.read_csv(filename, encoding="utf_8")
    # print("aaaa", df_train['target'].shape)
    df_train.pop('target')
    print("aaaa", df_train)

    # df_train = pd.read_csv(csv_file, encoding="utf_8")
    df_train['ball_x'] = df_train['court_x']
    df_train['ball_y'] = df_train['court_z']

    df_train['players_sabun_x'] = df_train['player1_x'] - df_train['player2_x']
    df_train['players_sabun_y'] = df_train['player1_y'] - df_train['player2_y']
    # df_train['my_your_degree'] = np.arctan2(df_train['player2_y'] - df_train['player1_y'], df_train['player2_x'] - df_train['player1_x'])
    df_train['player1_ball_sabun_x'] = df_train['player1_x'] - df_train['ball_x']
    df_train['player1_ball_sabun_y'] = df_train['player1_y'] - df_train['ball_y']
    # df_train['my_ball_degree'] = np.arctan2(df_train['player1_y'] - df_train['ball_y'], df_train['player1_x'] - df_train['ball_x'])
    df_train['player2_ball_sabun_x'] = df_train['player2_x'] - df_train['ball_x']
    df_train['player2_ball_sabun_y'] = df_train['player2_y'] - df_train['ball_y']
    # df_train['your_ball_degree'] = np.arctan2(df_train['player2_y'] - df_train['ball_y'], df_train['player2_x'] - df_train['ball_x'])
    # df_test = pd.read_csv("../Python/pattern_1.csv", encoding="utf_8")
    # df_test = pd.read_csv("../Python/test_data.csv", encoding="utf_8")
    # df_test['players_sabun_x'] = df_test['player1_x'] - df_test['player2_x']
    # df_test['players_sabun_y'] = df_test['player1_y'] - df_test['player2_y']
    # # df_test['my_your_degree'] = np.arctan2(df_test['player2_y'] - df_test['player1_y'], df_test['player2_x'] - df_test['player1_x'])
    # df_test['player1_ball_sabun_x'] = df_test['player1_x'] - df_test['ball_x']
    # df_test['player1_ball_sabun_y'] = df_test['player1_y'] - df_test['ball_y']
    # # df_test['my_ball_degree'] = np.arctan2(df_train['player1_y'] - df_train['ball_y'], df_train['player1_x'] - df_train['ball_x'])
    # df_test['player2_ball_sabun_x'] = df_test['player2_x'] - df_test['ball_x']
    # df_test['player2_ball_sabun_y'] = df_test['player2_y'] - df_test['ball_y']
    # # df_test['your_ball_degree'] = np.arctan2(df_train['player2_y'] - df_train['ball_y'], df_train['player2_x'] - df_train['ball_x'])

    # df_train = df_train.abs()
    # df_test = df_test.abs()
    # # df_train.loc[df_train['target'] == 0, 'target'] = "blue"
    # # df_train.loc[df_train['target'] == 1, 'target'] = "ced"
    # # df_train.loc[df_train['target'] == 2, 'target'] = "green"

    train = df_train[['players_sabun_x', 'players_sabun_y', 'player1_ball_sabun_x', 'player1_ball_sabun_y', 'player2_ball_sabun_x', 'player2_ball_sabun_y']]
    train = train.abs()

    # train = df_train[['my_your_degree','my_ball_degree', 'your_ball_degree']]
    # test = df_test[['my_your_degree','my_ball_degree', 'your_ball_degree']]
    df_train['target'] = target_array
    y = df_train['target']
    # test = df_test[['players_sabun_x', 'players_sabun_y', 'player1_ball_sabun_x', 'player1_ball_sabun_y', 'player2_ball_sabun_x', 'player2_ball_sabun_y']]

    # test.to_csv('a.csv', index = False, columns=['players_sabun_x', 'players_sabun_y', 'player1_ball_sabun_x', 'player1_ball_sabun_y', 'player2_ball_sabun_x', 'player2_ball_sabun_y'],encoding=encoding) #客観的データ用csv

    poly3d = PolynomialFeatures(degree=3, interaction_only=False, include_bias=True, order='C')
    train =  poly3d.fit_transform(train)
    # test =  poly3d.fit_transform(test)
    np.set_printoptions(threshold=np.inf)
    # print(test[:200])

    # def min_maxnorm(df_input):       #正規化
    #     return (df_input - df_input.min()) / ( df_input.max() - df_input.min())
    def min_maxnorm(x, axis=0): #正規化
        min = x.min(axis=axis, keepdims=True)
        max = x.max(axis=axis, keepdims=True)
        # print("min", min)
        # print("max", max)

        result = (x-min)/(max-min)
        result = np.nan_to_num(result)
        return result
    train = min_maxnorm(train)
    # test = min_maxnorm(test)
    X_train = train
    y_train = y

    print("y_train",y_train)
    # np.savetxt('out.csv',test,delimiter=',')
    # train.to_csv('a.csv', index = False, columns=['my_your_degree', 'my_ball_sabun_x', 'my_ball_sabun_y', 'your_ball_sabun_x', 'your_ball_sabun_y'],encoding=encoding) #客観的データ用csv
    # print("test", test)
    # test.to_csv('a.csv', index = False, columns=['players_sabun_x', 'players_sabun_y', 'player1_ball_sabun_x', 'player1_ball_sabun_y', 'player2_ball_sabun_x', 'player2_ball_sabun_y'],encoding=encoding) #客観的データ用csv

    # X_poly = X_poly.reindex(labels=X.columns,axis=1)
    # ロジスティック回帰で学習
    lr = LogisticRegressionCV(cv=3, random_state=0, penalty='l1',solver='saga') #penalty='l1'使えない係数を0にする
    # print(y_train.shape)
    # print(X_train.shape)

    #y_train=y_train.values.reshape(-1)
    lr.fit(X_train, y_train)


    # print ("lr_intercept",lr.intercept_)

    array_blue = []
    array_red = []
    array_green = []


    for b in lr.coef_[0]:
        array_blue.append(b)

    for r in lr.coef_[1]:
        array_red.append(r)

    for g in lr.coef_[2]:
        array_green.append(g)


    array_blue.append(lr.intercept_[0])
    array_red.append(lr.intercept_[1])
    array_green.append(lr.intercept_[2])
    
    x = [1,filename.split('_')[2],filename.split('_')[3],array_blue,array_red,array_green] 
    print(x)


    # # #  検証
    # print('Train score: {:.3f}'.format(lr.score(X_train, y_train)))
    # y_pred = lr.predict(test)
    # # print("test " , test)

    # print("y_pred", y_pred)

    # # print("coef " , np.shape(lr.coef_))
    # aaa = test @ (lr.coef_).T
    # np.set_printoptions(threshold=np.inf)
    # # print("sss", aaa)
    # # df_test.plot.scatter(x='ball_x', y='ball_y', color=test['target'])
    # df_test.plot.scatter(x='ball_x', y='ball_y', color=y_pred)
    # plt.show()



cur.close
conn.close
