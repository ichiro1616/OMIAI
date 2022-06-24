import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LogisticRegressionCV
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import PolynomialFeatures
import locale

# df = pd.read_csv("dummy_data.csv", encoding="utf_8")
# df1 = pd.read_csv("y_pred_data.csv", encoding="utf_8")
# df2 = pd.read_csv("grid_data.csv", encoding="utf_8")
# df2 = df[['ball_x', 'ball_y']]

encoding = locale.getpreferredencoding()
df_train = pd.read_csv("../Python/train_data.csv", encoding="utf_8")
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
df_test = pd.read_csv("../Python/test_data.csv", encoding="utf_8")
df_test['players_sabun_x'] = df_test['player1_x'] - df_test['player2_x']
df_test['players_sabun_y'] = df_test['player1_y'] - df_test['player2_y']
# df_test['my_your_degree'] = np.arctan2(df_test['player2_y'] - df_test['player1_y'], df_test['player2_x'] - df_test['player1_x'])
df_test['player1_ball_sabun_x'] = df_test['player1_x'] - df_test['ball_x']
df_test['player1_ball_sabun_y'] = df_test['player1_y'] - df_test['ball_y']
# df_test['my_ball_degree'] = np.arctan2(df_train['player1_y'] - df_train['ball_y'], df_train['player1_x'] - df_train['ball_x'])
df_test['player2_ball_sabun_x'] = df_test['player2_x'] - df_test['ball_x']
df_test['player2_ball_sabun_y'] = df_test['player2_y'] - df_test['ball_y']
# df_test['your_ball_degree'] = np.arctan2(df_train['player2_y'] - df_train['ball_y'], df_train['player2_x'] - df_train['ball_x'])

df_train = df_train.abs()
df_test = df_test.abs()


# df_train.loc[df_train['target'] == 0, 'target'] = "blue"
# df_train.loc[df_train['target'] == 1, 'target'] = "ced"
# df_train.loc[df_train['target'] == 2, 'target'] = "green"

train = df_train[['players_sabun_x', 'players_sabun_y', 'player1_ball_sabun_x', 'player1_ball_sabun_y', 'player2_ball_sabun_x', 'player2_ball_sabun_y']]
# train = df_train[['my_your_degree','my_ball_degree', 'your_ball_degree']]
# test = df_test[['my_your_degree','my_ball_degree', 'your_ball_degree']]
y = df_train['target']
# print(train)
test = df_test[['players_sabun_x', 'players_sabun_y', 'player1_ball_sabun_x', 'player1_ball_sabun_y', 'player2_ball_sabun_x', 'player2_ball_sabun_y']]

# test.to_csv('a.csv', index = False, columns=['players_sabun_x', 'players_sabun_y', 'player1_ball_sabun_x', 'player1_ball_sabun_y', 'player2_ball_sabun_x', 'player2_ball_sabun_y'],encoding=encoding) #客観的データ用csv

poly3d = PolynomialFeatures(degree=3, interaction_only=False, include_bias=True, order='C')
train =  poly3d.fit_transform(train)
test =  poly3d.fit_transform(test)
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
test = min_maxnorm(test)
X_train = train
y_train = y
# np.savetxt('out.csv',test,delimiter=',')
# train.to_csv('a.csv', index = False, columns=['my_your_degree', 'my_ball_sabun_x', 'my_ball_sabun_y', 'your_ball_sabun_x', 'your_ball_sabun_y'],encoding=encoding) #客観的データ用csv
# print("test", test)
# test.to_csv('a.csv', index = False, columns=['players_sabun_x', 'players_sabun_y', 'player1_ball_sabun_x', 'player1_ball_sabun_y', 'player2_ball_sabun_x', 'player2_ball_sabun_y'],encoding=encoding) #客観的データ用csv

# X_poly = X_poly.reindex(labels=X.columns,axis=1)
# ロジスティック回帰で学習
lr = LogisticRegressionCV(cv=6, random_state=0, penalty='l1',solver='saga') #penalty='l1'使えない係数を0にする
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

data = {
    "blue":array_blue,
    "red": array_red,
    "green": array_green
    }    

# print(data)
print(array_blue)
print(array_red)
print(array_green)

# # #  検証
# print('Train score: {:.3f}'.format(lr.score(X_train, y_train)))
# y_pred = lr.predict(test)
# # print("test " , test)

# print("y_pred", y_pred)

# # print("coef " , np.shape(lr.coef_))
# aaa = test @ (lr.coef_).T
# np.set_printoptions(threshold=np.inf)
# print("sss", aaa)
# # df_test.plot.scatter(x='ball_x', y='ball_y', color=test['target'])
# df_test.plot.scatter(x='ball_x', y='ball_y', color=y_pred)
# plt.show()

