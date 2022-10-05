

#観客データからお見合い範囲を計算するための式を導出する
import db_config as dbc
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import PolynomialFeatures
import locale
import MySQLdb


encoding = locale.getpreferredencoding()

anzai_hinata = ['../Python/1/anzai_hinata/trans_anzai_hinata_220614_01.csv', '../Python/1/anzai_hinata/trans_anzai_hinata_220617_03.csv', '../Python/1/anzai_hinata/trans_anzai_hinata_220620_02.csv', '../Python/1/anzai_hinata/trans_anzai_hinata_220627_01(2).csv', '../Python/1/anzai_hinata/trans_anzai_hinata_220627_01.csv', '../Python/1/anzai_hinata/trans_anzai_hinata_220627_02(2).csv', '../Python/1/anzai_hinata/trans_anzai_hinata_220627_02.csv', '../Python/1/anzai_hinata/trans_anzai_hinata_220628_03(2).csv', '../Python/1/anzai_hinata/trans_anzai_hinata_220628_03.csv'] #安西-西根
anzai_keisuke = ['../Python/1/anzai_keisuke/trans_anzai_keisuke_220614_01.csv', '../Python/1/anzai_keisuke/trans_anzai_keisuke_220617_03.csv', '../Python/1/anzai_keisuke/trans_anzai_keisuke_220620_02.csv', '../Python/1/anzai_keisuke/trans_anzai_keisuke_220627_01(2).csv', '../Python/1/anzai_keisuke/trans_anzai_keisuke_220627_01.csv', '../Python/1/anzai_keisuke/trans_anzai_keisuke_220627_02.csv', '../Python/1/anzai_keisuke/trans_anzai_keisuke_220628_02.csv', '../Python/1/anzai_keisuke/trans_anzai_keisuke_220628_03(2).csv', '../Python/1/anzai_keisuke/trans_anzai_keisuke_220628_03.csv']#安西-けいすけ
anzai_kento = ['../Python/1/anzai_kento/trans_anzai_kento_220614_01.csv', '../Python/1/anzai_kento/trans_anzai_kento_220617_03.csv', '../Python/1/anzai_kento/trans_anzai_kento_220620_02.csv', '../Python/1/anzai_kento/trans_anzai_kento_220627_02.csv', '../Python/1/anzai_kento/trans_anzai_kento_220628_01(2).csv', '../Python/1/anzai_kento/trans_anzai_kento_220628_01.csv', '../Python/1/anzai_kento/trans_anzai_kento_220628_02.csv', '../Python/1/anzai_kento/trans_anzai_kento_220628_03(2).csv', '../Python/1/anzai_kento/trans_anzai_kento_220628_03.csv']#安西-けんと
anzai_riku = ['../Python/1/anzai_riku/trans_anzai_riku_220614_01.csv ', '../Python/1/anzai_riku/trans_anzai_riku_220617_03.csv', '../Python/1/anzai_riku/trans_anzai_riku_220620_02.csv', '../Python/1/anzai_riku/trans_anzai_riku_220627_01(2).csv', '../Python/1/anzai_riku/trans_anzai_riku_220627_01.csv', '../Python/1/anzai_riku/trans_anzai_riku_220627_02(2).csv', '../Python/1/anzai_riku/trans_anzai_riku_220627_02.csv', '../Python/1/anzai_riku/trans_anzai_riku_220628_03(2).csv', '../Python/1/anzai_riku/trans_anzai_riku_220628_03.csv']#安西-りく
hinata_keisuke = ['../Python/1/hinata_keisuke/trans_hinata_keisuke_220614_01.csv ', '../Python/1/hinata_keisuke/trans_hinata_keisuke_220617_03.csv', '../Python/1/hinata_keisuke/trans_hinata_keisuke_220620_02.csv', '../Python/1/hinata_keisuke/trans_hinata_keisuke_220628_01.csv', '../Python/1/hinata_keisuke/trans_hinata_keisuke_220707_01.csv', '../Python/1/hinata_keisuke/trans_hinata_keisuke_220707_02(2).csv', '../Python/1/hinata_keisuke/trans_hinata_keisuke_220707_02.csv', '../Python/1/hinata_keisuke/trans_hinata_keisuke_220707_03(2).csv', '../Python/1/hinata_keisuke/trans_hinata_keisuke_220707_03.csv']#ひなた-けいすけ
hinata_kento = ['../Python/1/hinata_kento/trans_hinata_kento_220614_01.csv ', '../Python/1/hinata_kento/trans_hinata_kento_220617_03.csv', '../Python/1/hinata_kento/trans_hinata_kento_220628_01.csv', '../Python/1/hinata_kento/trans_hinata_kento_220705_01.csv', '../Python/1/hinata_kento/trans_hinata_kento_220705_02(2).csv', '../Python/1/hinata_kento/trans_hinata_kento_220705_02.csv', '../Python/1/hinata_kento/trans_hinata_kento_220705_03(2).csv', '../Python/1/hinata_kento/trans_hinata_kento_220705_03.csv', '../Python/1/hinata_kento/trans_hinata_kento_220729_02.csv']#ひなた-けいすけ
hinata_riku = ['../Python/1/hinata_riku/trans_hinata_riku_220614_01.csv ', '../Python/1/hinata_riku/trans_hinata_riku_220617_03.csv', '../Python/1/hinata_riku/trans_hinata_riku_220620_02.csv', '../Python/1/hinata_riku/trans_hinata_riku_220627_01.csv', '../Python/1/hinata_riku/trans_hinata_riku_220705_01.csv', '../Python/1/hinata_riku/trans_hinata_riku_220705_02(2).csv', '../Python/1/hinata_riku/trans_hinata_riku_220705_02.csv', '../Python/1/hinata_riku/trans_hinata_riku_220705_03(2).csv', '../Python/1/hinata_riku/trans_hinata_riku_220705_03.csv']#ひなた-りく
keisuke_kento = ['../Python/1/keisuke_kento/trans_keisuke_kento_220614_01.csv ', '../Python/1/keisuke_kento/trans_keisuke_kento_220617_03.csv', '../Python/1/keisuke_kento/trans_keisuke_kento_220620_02.csv', '../Python/1/keisuke_kento/trans_keisuke_kento_220627_01.csv', '../Python/1/keisuke_kento/trans_keisuke_kento_220707_01.csv', '../Python/1/keisuke_kento/trans_keisuke_kento_220707_02(2).csv', '../Python/1/keisuke_kento/trans_keisuke_kento_220707_02.csv', '../Python/1/keisuke_kento/trans_keisuke_kento_220707_03(2).csv', '../Python/1/keisuke_kento/trans_keisuke_kento_220707_03.csv']#けいすけ-けんと
keisuke_riku = ['../Python/1/keisuke_riku/trans_keisuke_riku_220614_01.csv ', '../Python/1/keisuke_riku/trans_keisuke_riku_220617_03.csv', '../Python/1/keisuke_riku/trans_keisuke_riku_220620_02.csv', '../Python/1/keisuke_riku/trans_keisuke_riku_220627_01.csv', '../Python/1/keisuke_riku/trans_keisuke_riku_220707_01.csv', '../Python/1/keisuke_riku/trans_keisuke_riku_220707_02(2).csv', '../Python/1/keisuke_riku/trans_keisuke_riku_220707_02.csv', '../Python/1/keisuke_riku/trans_keisuke_riku_220707_03(2).csv', '../Python/1/keisuke_riku/trans_keisuke_riku_220707_03.csv']#けいすけ-りく
riku_kento = ['../Python/1/riku_kento/trans_riku_kento_220614_01.csv ', '../Python/1/riku_kento/trans_riku_kento_220617_03.csv', '../Python/1/riku_kento/trans_riku_kento_220620_02.csv', '../Python/1/riku_kento/trans_riku_kento_220628_01.csv', '../Python/1/riku_kento/trans_riku_kento_220705_01.csv', '../Python/1/riku_kento/trans_riku_kento_220705_02(2).csv', '../Python/1/riku_kento/trans_riku_kento_220705_02.csv', '../Python/1/riku_kento/trans_riku_kento_220705_03(2).csv', '../Python/1/riku_kento/trans_riku_kento_220705_03.csv']#けんと-りく

pattern = [anzai_hinata, anzai_keisuke, anzai_kento, anzai_riku, hinata_keisuke, hinata_kento, hinata_riku, keisuke_kento, keisuke_riku, riku_kento]

conn = MySQLdb.connect(
    dbc.host,
    dbc.user,
    dbc.passwd,
    dbc.db)


# カーソルを取得する
cur = conn.cursor()
sql = "SELECT * FROM `answer`"
cur.execute(sql)

# 実行結果を取得する
answer_array = cur.fetchall()
for o,csvname in enumerate(pattern):

    #  #figure()でグラフを表示する領域をつくり，figというオブジェクトにする．デバッグ用
    # fig = plt.figure()
    # ax1 = fig.add_subplot(3, 4, 1)
    # ax2 = fig.add_subplot(3, 4, 2)
    # ax3 = fig.add_subplot(3, 4, 3)
    # ax4 = fig.add_subplot(3, 4, 4)
    # # ax5 = fig.add_subplot(3, 4, 5)
    # ax6 = fig.add_subplot(3, 4, 5)
    # ax7 = fig.add_subplot(3, 4, 6)
    # ax8 = fig.add_subplot(3, 4, 7)
    # ax9 = fig.add_subplot(3, 4, 8)
    # # ax10 = fig.add_subplot(3, 4, 10)
    # ax11 = fig.add_subplot(3, 4, 9)
    # ax12 = fig.add_subplot(3, 4, 10)
    # ax13 = fig.add_subplot(3, 4, 11)
    # ax14 = fig.add_subplot(3, 4, 12)
    # # ax15 = fig.add_subplot(3, 4, 15)
    # axarray = [ax1, ax2, ax3, ax4, ax6, ax7, ax8, ax9, ax11, ax12, ax13, ax14]

    movie_id_array = []
    target_array = []
    counter = 0
    for p,filename in enumerate(csvname):


        value1 = filename.split('_')[2] + '_' + filename.split('_')[3]
        value2 = filename.split('_')[3] + '_' + filename.split('_')[2] 
        value3 = (filename.split('_')[4] + '_' + filename.split('_')[5]).split('.')[0]
        
        if(movie_id_array):
            sql = "SELECT `movie_id` FROM movie WHERE (movie_path LIKE %s OR movie_path LIKE %s) AND movie_path LIKE %s AND movie_id > %s"
            cur.execute(sql, ('%'+ value1 +'%', '%' + value2 + '%', '%' + value3 +'%', max(movie_id_array)))
        else:
            sql = "SELECT `movie_id` FROM movie WHERE (movie_path LIKE %s OR movie_path LIKE %s) AND movie_path LIKE %s"
            cur.execute(sql, ('%'+ value1 +'%', '%' + value2 + '%', '%' + value3 +'%'))
        rows = cur.fetchall()

        movie_id_array = [] #動画のパスから特定の20個のmovie_idをとってくる処理をかく

        for row in rows:
            movie_id_array.append(row[0])


        gain_array = []
        for row in answer_array:
            for i in range(row[3]):   ##経験年数に応じてデータ数を増やしている
                gain_array.append(row)
        for row in answer_array:
            gain_array.append(row)

        for i in movie_id_array:  #targetを決めている。
            judge_array = []
            for row in gain_array: #経験年数に応じて増やしたデータ
                if row[1] == i:
                    judge_array.append(row[4])
            zero_count = judge_array.count(0)
            one_count = judge_array.count(1)
            if zero_count / (len(judge_array)) > 0.6:  
                target_array.append(0)
            elif one_count /  (len(judge_array)) > 0.6:
                target_array.append(1)
            else:
                target_array.append(2)

       

        #csv読み込み
        if(p != 0):
            a = pd.read_csv(filename, encoding="utf_8")
            a['target'] = target_array[counter:counter+20]
            if(a["judge"][0] == 1):
                    a["player1_x"] = 9 - a["player1_x"]
                    a["player2_x"] = 9 - a["player2_x"]
                    a["court_x"] = 9 - a["court_x"]
                    for i in range(len(a)):
                        if(a.loc[i, "target"] == 0):
                            a.loc[i, "target"] = 1
                        elif(a.loc[i, "target"]  == 1):
                            a.loc[i, "target"] = 0
            df_train = pd.merge(df_train, a, how="outer")
            counter += 20


        else:
            a = pd.read_csv(filename, encoding="utf_8")
            df_train = a
            df_train['target'] = target_array[counter:counter+20]
            if(df_train["judge"][0] == 1):
                    df_train["player1_x"] = 9 - df_train["player1_x"]
                    df_train["player2_x"] = 9 - df_train["player2_x"]
                    df_train["court_x"] = 9 - df_train["court_x"]
                    for k in range(len(df_train)):
                        if(df_train.loc[k, "target"]  == 0):
                            df_train.loc[k, "target"] = 1
                        elif (df_train.loc[k, "target"]  == 1):
                            df_train.loc[k, "target"] = 0
            counter += 20
    pd.set_option('display.max_rows', None)

    df_train_add_omiai = pd.read_csv("../Python/dummy_data/omiai_data.csv", encoding="utf_8")  #データ数1063
    df_train_add_player = pd.read_csv("../Python/dummy_data/player_data.csv", encoding="utf_8")  #データ数2639

    for row in range(len(df_train.index)):
        if(row != 0):
                    df_train = df_train.append(df_train.iloc[row])

    for row in range(len(df_train.index)):
        if(row != 0):
            if(df_train.iloc[row]["target"] == 2):
                    df_train =  df_train.append(df_train.iloc[row])

    for row in range(len(df_train_add_omiai.index)):
        if(row != 0):
                    df_train = df_train.append(df_train_add_omiai.iloc[row])
    for row in range(len(df_train_add_player.index)):
        if(row != 0):
                    df_train = df_train.append(df_train_add_player.iloc[row])


    df_train['ball_x'] = df_train['court_x']
    df_train['ball_y'] = df_train['court_z']

    df_train['players_sabun_x'] = df_train['player1_x'] - df_train['player2_x']
    df_train['players_sabun_y'] = df_train['player1_y'] - df_train['player2_y']
    df_train['player1_ball_sabun_x'] = df_train['player1_x'] - df_train['ball_x']
    df_train['player1_ball_sabun_y'] = df_train['player1_y'] - df_train['ball_y']
    df_train['player2_ball_sabun_x'] = df_train['player2_x'] - df_train['ball_x']
    df_train['player2_ball_sabun_y'] = df_train['player2_y'] - df_train['ball_y']
   
   #テストデータ　デバッグ用
    # df_test_pattern = ["../Python/pattern/pattern_1.csv", "../Python/pattern/pattern_2.csv", "../Python/pattern/pattern_3.csv", "../Python/pattern/pattern_4.csv", "../Python/pattern/pattern_6.csv", "../Python/pattern/pattern_7.csv", "../Python/pattern/pattern_8.csv", "../Python/pattern/pattern_9.csv","../Python/pattern/pattern_11.csv", "../Python/pattern/pattern_12.csv", "../Python/pattern/pattern_13.csv", "../Python/pattern/pattern_14.csv"]
    # for k,link in enumerate(df_test_pattern):
    #     df_test = pd.read_csv(link, encoding="utf_8")
       



    train = df_train[['players_sabun_x', 'players_sabun_y', 'player1_ball_sabun_x', 'player1_ball_sabun_y', 'player2_ball_sabun_x', 'player2_ball_sabun_y']]
    mean = train.mean()
    std = train.std(ddof=1)
    train = (train-mean)/std


   #テストデータ　デバッグ用
    #     # df_test = pd.read_csv("../Python/test_data.csv", encoding="utf_8")
    #     df_test['players_sabun_x'] = df_test['player1_x'] - df_test['player2_x']
    #     df_test['players_sabun_y'] = df_test['player1_y'] - df_test['player2_y']
    #     df_test['player1_ball_sabun_x'] = df_test['player1_x'] - df_test['ball_x']
    #     df_test['player1_ball_sabun_y'] = df_test['player1_y'] - df_test['ball_y']
    #     df_test['player2_ball_sabun_x'] = df_test['player2_x'] - df_test['ball_x']
    #     df_test['player2_ball_sabun_y'] = df_test['player2_y'] - df_test['ball_y']
    # df_train.loc[df_train['target'] == 0, 'target'] = "blue"
    # df_train.loc[df_train['target'] == 1, 'target'] = "red"
    # df_train.loc[df_train['target'] == 2, 'target'] = "green"
    # test = df_test[['players_sabun_x', 'players_sabun_y', 'player1_ball_sabun_x', 'player1_ball_sabun_y', 'player2_ball_sabun_x', 'player2_ball_sabun_y']]
    # test = (test-mean)/std


    y = df_train['target']


    poly3d = PolynomialFeatures(degree=3, interaction_only=False, include_bias=True, order='C')
    train =  poly3d.fit_transform(train)
    # test =  poly3d.fit_transform(test)　テストデータ　デバッグ用
    np.set_printoptions(threshold=np.inf)

    
    X_train = train
    y_train = y

    
    # ロジスティック回帰で学習
    lr = LogisticRegression(C = 100, random_state=123, class_weight =None, fit_intercept = True, intercept_scaling = 1, penalty='l2',solver='lbfgs',  max_iter=100, tol = 0.0001, multi_class='auto')

    y_train=y_train.values.reshape(-1)
    lr.fit(X_train, y_train)


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
    x = [1,filename.split('_')[2],filename.split('_')[3],array_blue,array_red,array_green, mean['players_sabun_x'], mean['players_sabun_y'], mean['player1_ball_sabun_x'], mean['player1_ball_sabun_y'], mean['player2_ball_sabun_x'], mean['player2_ball_sabun_y'], std['players_sabun_x'], std['players_sabun_y'], std['player1_ball_sabun_x'], std['player1_ball_sabun_y'], std['player2_ball_sabun_x'], std['player2_ball_sabun_y']]
    
    print(x) #DBに送るデータ


# デバッグ用

# #     print('Train score: {:.3f}'.format(lr.score(X_train, y_train)))
#     # y_pred = lr.predict(test)
# #     # print("test " , test)
#     y_pred= lr.predict_proba(test)

# #     print("y_pred", y_pred[0])

#     # print("coef " , np.shape(lr.coef_))
#     aaa = test @ (lr.coef_).T
#     np.set_printoptions(threshold=np.inf)
#     # print("sss", aaa)
#     # df_test.plot.scatter(x='ball_x', y='ball_y', color=test['target'])
#     # df_test.plot.scatter(x='ball_x', y='ball_y', color=y_pred)
    
#     axarray[k].scatter(x=df_test["ball_x"], y=df_test["ball_y"], c=y_pred[:,2], cmap='jet')#y_pred)
#     # axarray[k].scatter(x=d        f_test["ball_x"], y=df_test["ball_y"], color=y_pred)#y_pred)

#     axarray[k].scatter(x = df_test['player1_x'][0], y = df_test['player1_y'][0], color = "black")
#     axarray[k].scatter(x = df_test['player2_x'][0], y = df_test['player2_y'][0], color = "black")
#     # axarray[k].legend(loc = 'best') #凡例
# fig.tight_layout()         #レイアウトの設定
# plt.show()

cur.close
conn.close



