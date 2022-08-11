
from itertools import count
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LogisticRegressionCV
from sklearn.preprocessing import PolynomialFeatures
import locale

encoding = locale.getpreferredencoding()
# csvname = ['../Python/anzai_hinata/trans_anzai_hinata_220614_01.csv', '../Python/anzai_hinata/trans_anzai_hinata_220617_03.csv', '../Python/anzai_hinata/trans_anzai_hinata_220620_02.csv', '../Python/anzai_hinata/trans_anzai_hinata_220627_01(2).csv', '../Python/anzai_hinata/trans_anzai_hinata_220627_01.csv', '../Python/anzai_hinata/trans_anzai_hinata_220627_02(2).csv', '../Python/anzai_hinata/trans_anzai_hinata_220627_02.csv', '../Python/anzai_hinata/trans_anzai_hinata_220628_03(2).csv', '../Python/anzai_hinata/trans_anzai_hinata_220628_03.csv'] #安西-西根
# csvname = ['../Python/anzai_keisuke/trans_anzai_keisuke_220614_01.csv', '../Python/anzai_keisuke/trans_anzai_keisuke_220617_03.csv', '../Python/anzai_keisuke/trans_anzai_keisuke_220620_02.csv', '../Python/anzai_keisuke/trans_anzai_keisuke_220627_01(2).csv', '../Python/anzai_keisuke/trans_anzai_keisuke_220627_01.csv', '../Python/anzai_keisuke/trans_anzai_keisuke_220627_02.csv', '../Python/anzai_keisuke/trans_anzai_keisuke_220628_02.csv', '../Python/anzai_keisuke/trans_anzai_keisuke_220628_03(2).csv', '../Python/anzai_keisuke/trans_anzai_keisuke_220628_03.csv']#安西-けいすけ
# csvname = ['../Python/anzai_kento/trans_anzai_kento_220614_01.csv', '../Python/anzai_kento/trans_anzai_kento_220617_03.csv', '../Python/anzai_kento/trans_anzai_kento_220620_02.csv', '../Python/anzai_kento/trans_anzai_kento_220627_02.csv', '../Python/anzai_kento/trans_anzai_kento_220628_01(2).csv', '../Python/anzai_kento/trans_anzai_kento_220628_01.csv', '../Python/anzai_kento/trans_anzai_kento_220628_02.csv', '../Python/anzai_kento/trans_anzai_kento_220628_03(2).csv', '../Python/anzai_kento/trans_anzai_kento_220628_03.csv']#安西-けんと
# csvname = ['../Python/anzai_riku/trans_anzai_riku_220614_01.csv ', '../Python/anzai_riku/trans_anzai_riku_220617_03.csv', '../Python/anzai_riku/trans_anzai_riku_220620_02.csv', '../Python/anzai_riku/trans_anzai_riku_220627_01(2).csv', '../Python/anzai_riku/trans_anzai_riku_220627_01.csv', '../Python/anzai_riku/trans_anzai_riku_220627_02(2).csv', '../Python/anzai_riku/trans_anzai_riku_220627_02.csv', '../Python/anzai_riku/trans_anzai_riku_220628_03(2).csv', '../Python/anzai_riku/trans_anzai_riku_220628_03.csv']#安西-りく
# csvname = ['../Python/hinata_keisuke/trans_hinata_keisuke_220614_01.csv ', '../Python/hinata_keisuke/trans_hinata_keisuke_220617_03.csv', '../Python/hinata_keisuke/trans_hinata_keisuke_220620_02.csv', '../Python/hinata_keisuke/trans_hinata_keisuke_220628_01.csv', '../Python/hinata_keisuke/trans_hinata_keisuke_220707_01.csv', '../Python/hinata_keisuke/trans_hinata_keisuke_220707_02(2).csv', '../Python/hinata_keisuke/trans_hinata_keisuke_220707_02.csv', '../Python/hinata_keisuke/trans_hinata_keisuke_220707_03(2).csv', '../Python/hinata_keisuke/trans_hinata_keisuke_220707_03.csv']#ひなた-けいすけ
# csvname = ['../Python/hinata_kento/trans_hinata_kento_220614_01.csv ', '../Python/hinata_kento/trans_hinata_kento_220617_03.csv', '../Python/hinata_kento/trans_hinata_kento_220628_01.csv', '../Python/hinata_kento/trans_hinata_kento_220705_01.csv', '../Python/hinata_kento/trans_hinata_kento_220705_02(2).csv', '../Python/hinata_kento/trans_hinata_kento_220705_02.csv', '../Python/hinata_kento/trans_hinata_kento_220705_03(2).csv', '../Python/hinata_kento/trans_hinata_kento_220705_03.csv', '../Python/hinata_kento/trans_hinata_kento_220729_02.csv']#ひなた-けんと
# csvname = ['../Python/hinata_riku/trans_hinata_riku_220614_01.csv ', '../Python/hinata_riku/trans_hinata_riku_220617_03.csv', '../Python/hinata_riku/trans_hinata_riku_220620_02.csv', '../Python/hinata_riku/trans_hinata_riku_220627_01.csv', '../Python/hinata_riku/trans_hinata_riku_220705_01.csv', '../Python/hinata_riku/trans_hinata_riku_220705_02(2).csv', '../Python/hinata_riku/trans_hinata_riku_220705_02.csv', '../Python/hinata_riku/trans_hinata_riku_220705_03(2).csv', '../Python/hinata_riku/trans_hinata_riku_220705_03.csv']#ひなた-りく
# csvname = ['../Python/keisuke_kento/trans_keisuke_kento_220614_01.csv ', '../Python/keisuke_kento/trans_keisuke_kento_220617_03.csv', '../Python/keisuke_kento/trans_keisuke_kento_220620_02.csv', '../Python/keisuke_kento/trans_keisuke_kento_220627_01.csv', '../Python/keisuke_kento/trans_keisuke_kento_220707_01.csv', '../Python/keisuke_kento/trans_keisuke_kento_220707_02(2).csv', '../Python/keisuke_kento/trans_keisuke_kento_220707_02.csv', '../Python/keisuke_kento/trans_keisuke_kento_220707_03(2).csv', '../Python/keisuke_kento/trans_keisuke_kento_220707_03.csv']#けいすけ-けんと
csvname = ['../Python/keisuke_riku/trans_keisuke_riku_220614_01.csv ', '../Python/keisuke_riku/trans_keisuke_riku_220617_03.csv', '../Python/keisuke_riku/trans_keisuke_riku_220620_02.csv', '../Python/keisuke_riku/trans_keisuke_riku_220627_01.csv', '../Python/keisuke_riku/trans_keisuke_riku_220707_01.csv', '../Python/keisuke_riku/trans_keisuke_riku_220707_02(2).csv', '../Python/keisuke_riku/trans_keisuke_riku_220707_02.csv', '../Python/keisuke_riku/trans_keisuke_riku_220707_03(2).csv', '../Python/keisuke_riku/trans_keisuke_riku_220707_03.csv']#けいすけ-りく
# csvname = ['../Python/riku_kento/trans_riku_kento_220614_01.csv ', '../Python/riku_kento/trans_riku_kento_220617_03.csv',  '../Python/riku_kento/trans_riku_kento_220620_02.csv', '../Python/riku_kento/trans_riku_kento_220628_01.csv', '../Python/riku_kento/trans_riku_kento_220705_01.csv', '../Python/riku_kento/trans_riku_kento_220705_02(2).csv', '../Python/riku_kento/trans_riku_kento_220705_02.csv', '../Python/riku_kento/trans_riku_kento_220705_03(2).csv', '../Python/riku_kento/trans_riku_kento_220705_03.csv']#けんと-りく






for i,filename in enumerate(csvname):
    if(i != 0):
        a = pd.read_csv(filename, encoding="utf_8")
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
        # print(df_train["judge"])


    else:
        a = pd.read_csv(filename, encoding="utf_8")
        df_train = a
        if(df_train["judge"][0] == 1):
            df_train["player1_x"] = 9 - df_train["player1_x"]
            df_train["player2_x"] = 9 - df_train["player2_x"]
            df_train["court_x"] = 9 - df_train["court_x"]
            for i in range(len(df_train)):
                # # print(df_train["target"][i])
                if(df_train.loc[i, "target"]  == 0):
                    df_train.loc[i, "target"] = 1
                elif (df_train.loc[i, "target"]  == 1):
                    df_train.loc[i, "target"] = 0
pd.set_option('display.max_rows', None)
# print("sssss", df_train)


# df_train= pd.read_csv("../Python/dummy_data/omiai_data.csv", encoding="utf_8")
df_train_add_omiai = pd.read_csv("../Python/dummy_data/omiai_data.csv", encoding="utf_8")  #データ数595
df_train_add_player = pd.read_csv("../Python/dummy_data/player_data.csv", encoding="utf_8")  #データ数1136
df_train_add_triangle = pd.read_csv("../Python/dummy_data/triangle.csv", encoding="utf_8")   #データ数1100



for row in range(len(df_train.index)):
    if(row != 0):
            for n in range(200):
                df_train = df_train.append(df_train.iloc[row])



# for row in range(len(df_train.index)):
#     if(row != 0):
#         if(df_train.iloc[row]["target"] == 2):
#             # print(df_train.iloc[row])
#             # for n in range(2):
#                 df_train =  df_train.append(df_train.iloc[row])
# print(df_train)
# print(df_train["target"])

for row in range(len(df_train_add_omiai.index)):
    if(row != 0):
            for n in range(2):
                df_train = df_train.append(df_train_add_omiai.iloc[row])
# print(df_train)
for row in range(len(df_train_add_player.index)):
    if(row != 0):
                df_train = df_train.append(df_train_add_player.iloc[row])
# print(df_train)
for row in range(len(df_train_add_triangle.index)):
    if(row != 0):
                df_train = df_train.append(df_train_add_triangle.iloc[row])
# print(df_train)

# zero = []
# one = []
# two = []
# for row in range(len(df_train.index)):
#     print("!!!!!!!!!!!",df_train["target"][row])
#     if(df_train["target"][row] == 0.0):
#         zero.append(1)
#     elif(df_train["target"][row] == 1.0):
#         one.append(1)
#     elif(df_train["target"][row] == 2.0):
#         two.append(1)
# print("zero:", len(zero), "one:", len(one), "two",len(two))



# df_train = pd.read_csv(csv_file, encoding="utf_8")
df_train['ball_x'] = df_train['court_x']
df_train['ball_y'] = df_train['court_z']
df_train['players_sabun_x'] = df_train['player1_x'] - df_train['player2_x']
df_train['players_sabun_y'] = df_train['player1_y'] - df_train['player2_y']
df_train['player1_ball_sabun_x'] = df_train['player1_x'] - df_train['ball_x']
df_train['player1_ball_sabun_y'] = df_train['player1_y'] - df_train['ball_y']
df_train['player2_ball_sabun_x'] = df_train['player2_x'] - df_train['ball_x']
df_train['player2_ball_sabun_y'] = df_train['player2_y'] - df_train['ball_y']
df_train['players_degree'] = np.arctan2(df_train['player2_y'] - df_train['player1_y'], df_train['player2_x'] - df_train['player1_x'])
df_train['player1_ball_degree'] = np.arctan2(df_train['player1_y'] - df_train['ball_y'], df_train['player1_x'] - df_train['ball_x'])
df_train['player2_ball_degree'] = np.arctan2(df_train['player2_y'] - df_train['ball_y'], df_train['player2_x'] - df_train['ball_x'])


df_test = pd.read_csv("../Python/pattern/pattern_2.csv", encoding="utf_8")
# df_test = pd.read_csv("../Python/dummy_data/test_data.csv", encoding="utf_8")
df_test['players_sabun_x'] = df_test['player1_x'] - df_test['player2_x']
df_test['players_sabun_y'] = df_test['player1_y'] - df_test['player2_y']
df_test['player1_ball_sabun_x'] = df_test['player1_x'] - df_test['ball_x']
df_test['player1_ball_sabun_y'] = df_test['player1_y'] - df_test['ball_y']
df_test['player2_ball_sabun_x'] = df_test['player2_x'] - df_test['ball_x']
df_test['player2_ball_sabun_y'] = df_test['player2_y'] - df_test['ball_y']


df_test['players_degree'] = np.arctan2(df_test['player2_y'] - df_test['player1_y'], df_test['player2_x'] - df_test['player1_x'])
df_test['player1_ball_degree'] = np.arctan2(df_test['player1_y'] - df_test['ball_y'], df_test['player1_x'] - df_test['ball_x'])
df_test['player2_ball_degree'] = np.arctan2(df_test['player2_y'] - df_test['ball_y'], df_test['player2_x'] - df_test['ball_x'])

# df_test = df_test.abs()

df_train.loc[df_train['target'] == 0, 'target'] = "blue"
df_train.loc[df_train['target'] == 1, 'target'] = "red"
df_train.loc[df_train['target'] == 2, 'target'] = "green"


# train = df_train[['players_degree', 'player1_ball_degree', 'player2_ball_degree']]
# train = df_train[['players_sabun_x', 'players_sabun_y', 'player1_ball_sabun_x', 'player1_ball_sabun_y', 'player2_ball_sabun_x', 'player2_ball_sabun_y', 'players_degree', 'player1_ball_degree', 'player2_ball_degree']]
train = df_train[['players_sabun_x', 'players_sabun_y', 'player1_ball_sabun_x', 'player1_ball_sabun_y', 'player2_ball_sabun_x', 'player2_ball_sabun_y']]
# print(train, len(train))

# train = train.abs()

y = df_train['target']
# test = df_test[['players_degree', 'player1_ball_degree', 'player2_ball_degree']]

# test = df_test[['players_sabun_x', 'players_sabun_y', 'player1_ball_sabun_x', 'player1_ball_sabun_y', 'player2_ball_sabun_x', 'player2_ball_sabun_y', 'players_degree', 'player1_ball_degree', 'player2_ball_degree']]
test = df_test[['players_sabun_x', 'players_sabun_y', 'player1_ball_sabun_x', 'player1_ball_sabun_y', 'player2_ball_sabun_x', 'player2_ball_sabun_y']]

# test.to_csv('a.csv', index = False, columns=['players_sabun_x', 'players_sabun_y', 'player1_ball_sabun_x', 'player1_ball_sabun_y', 'player2_ball_sabun_x', 'player2_ball_sabun_y'],encoding=encoding) #客観的データ用csv


# np.savetxt('df_train.csv',train,delimiter=',')

poly3d = PolynomialFeatures(degree=3, interaction_only=False, include_bias=True, order='C')
train =  poly3d.fit_transform(train)
test =  poly3d.fit_transform(test)
# np.set_printoptions(threshold=np.inf)

def min_maxnorm(x, axis=1): #正規化
    min = x.min(axis=axis, keepdims=True)
    max = x.max(axis=axis, keepdims=True)
    result = (x-min)/(max-min)
    result = np.nan_to_num(result)
    return result

# np.savetxt('polynomial.csv',train,delimiter=',')




train = min_maxnorm(train)
test = min_maxnorm(test)
X_train = train
y_train = y
# np.savetxt('normalize.csv',train,delimiter=',')


# print("train",train)
# print("test",test)
# train.to_csv('a.csv', index = False, columns=['players_sabun_x', 'players_sabun_y', 'player1_ball_sabun_x', 'player1_ball_sabun_y', 'player2_ball_sabun_x', 'player2_ball_sabun_y', 'players_degree', 'player1_ball_degree', 'player2_ball_degree'],encoding=encoding) #客観的データ用csv

# ロジスティック回帰で学習
lr = LogisticRegressionCV(cv=6, random_state=0, class_weight ='balanced', penalty='l2',solver='lbfgs') 
# lr = LogisticRegressionCV(cv=6, random_state=0, class_weight ='balanced', penalty='l2',solver='lbfgs',  max_iter=50, tol = 0.001, multi_class="multinomial") 
# lr = LogisticRegressionCV(cv=6, random_state=0, penalty='l1',solver='saga') #penalty='l1'使えない係数を0にする

y_train=y_train.values.reshape(-1)
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


x = {
    "type": 0,
    "left_player":filename.split('_')[1],
    "right_player":filename.split('_')[2],
    "blue":array_blue,
    "red": array_red,
    "green": array_green,
    }    


x = [0,filename.split('_')[2],filename.split('_')[3],array_blue,array_red,array_green]
print(x)
# # x = 0
# # print("主観的データ：", 0)
# print(len(array_blue))
# print(len(array_red))
# print(len(array_green))

# #  検証
# print('Train score: {:.3f}'.format(lr.score(X_train, y_train)))
# y_pred = lr.predict(test)
# # print("test " , test)

# # print("y_pred", y_pred)

# # print("coef " , np.shape(lr.coef_))
# aaa = test @ (lr.coef_).T
# np.set_printoptions(threshold=np.inf)
# # print("sss", aaa)
# # df_test.plot.scatter(x='ball_x', y='ball_y', color=test['target'])
# df_test.plot.scatter(x='ball_x', y='ball_y', color=y_pred)
# plt.show()




