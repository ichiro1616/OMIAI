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
df_train = pd.read_csv("train_data.csv", encoding="utf_8")
df_train['my_your_sabun_x'] = df_train['player1_x'] - df_train['player2_x']
df_train['my_your_sabun_y'] = df_train['player1_y'] - df_train['player2_y']
df_train['my_your_degree'] = np.arctan2(df_train['player2_y'] - df_train['player1_y'], df_train['player2_x'] - df_train['player1_x'])
df_train['my_ball_sabun_x'] = df_train['player1_x'] - df_train['ball_x']
df_train['my_ball_sabun_y'] = df_train['player1_y'] - df_train['ball_y']
df_train['my_ball_degree'] = np.arctan2(df_train['player1_y'] - df_train['ball_y'], df_train['player1_x'] - df_train['ball_x'])
df_train['your_ball_sabun_x'] = df_train['player2_x'] - df_train['ball_x']
df_train['your_ball_sabun_y'] = df_train['player2_y'] - df_train['ball_y']
df_train['your_ball_degree'] = np.arctan2(df_train['player2_y'] - df_train['ball_y'], df_train['player2_x'] - df_train['ball_x'])

df_test = pd.read_csv("pattern_3_reverce.csv", encoding="utf_8")
# df_test = pd.read_csv("test_data.csv", encoding="utf_8")

df_test['my_your_sabun_x'] = df_test['player1_x'] - df_test['player2_x']
df_test['my_your_sabun_y'] = df_test['player1_y'] - df_test['player2_y']
df_test['my_your_degree'] = np.arctan2(df_test['player2_y'] - df_test['player1_y'], df_test['player2_x'] - df_test['player1_x'])
df_test['my_ball_sabun_x'] = df_test['player1_x'] - df_test['ball_x']
df_test['my_ball_sabun_y'] = df_test['player1_y'] - df_test['ball_y']
df_test['my_ball_degree'] = np.arctan2(df_train['player1_y'] - df_train['ball_y'], df_train['player1_x'] - df_train['ball_x'])

df_test['your_ball_sabun_x'] = df_test['player2_x'] - df_test['ball_x']
df_test['your_ball_sabun_y'] = df_test['player2_y'] - df_test['ball_y']
df_test['your_ball_degree'] = np.arctan2(df_train['player2_y'] - df_train['ball_y'], df_train['player2_x'] - df_train['ball_x'])

df_train = df_train.abs()
df_test = df_test.abs()

df_train.loc[df_train['target'] == 0, 'target'] = "blue"
df_train.loc[df_train['target'] == 1, 'target'] = "red"
df_train.loc[df_train['target'] == 2, 'target'] = "green"

train = df_train[['my_your_sabun_x', 'my_your_sabun_y', 'my_ball_sabun_x', 'my_ball_sabun_y', 'your_ball_sabun_x', 'your_ball_sabun_y']]
# train = df_train[['my_your_degree','my_ball_degree', 'your_ball_degree']]

# test = df_test[['my_your_degree','my_ball_degree', 'your_ball_degree']]


y = df_train['target']
test = df_test[['my_your_sabun_x', 'my_your_sabun_y', 'my_ball_sabun_x', 'my_ball_sabun_y', 'your_ball_sabun_x', 'your_ball_sabun_y']]




poly3d = PolynomialFeatures(degree=3, interaction_only=False, include_bias=True, order='C')
train =  poly3d.fit_transform(train)
test =  poly3d.fit_transform(test)
# def min_maxnorm(df_input):       #正規化
#     # return (df_input / 9)
#     return (df_input - df_input.min()) / ( df_input.max() - df_input.min())

def min_maxnorm(x, axis=None): #正規化
    min = x.min(axis=axis, keepdims=True)
    max = x.max(axis=axis, keepdims=True)
    result = (x-min)/(max-min)
    result = np.nan_to_num(result)
    return result


train = min_maxnorm(train)

test = min_maxnorm(test)



X_train = train
y_train = y


# print(train.isnull().sum())
# print(test.isnull().sum())
# train.to_csv('a.csv', index = False, columns=['my_your_degree', 'my_ball_sabun_x', 'my_ball_sabun_y', 'your_ball_sabun_x', 'your_ball_sabun_y'],encoding=encoding) #客観的データ用csv


# X_poly = X_poly.reindex(labels=X.columns,axis=1)
# ロジスティック回帰で学習
lr = LogisticRegressionCV(cv=6, random_state=0, penalty='l1',solver='saga') #penalty='l1'使えない係数を0にする
y_train=y_train.values.reshape(-1)
lr.fit(X_train, y_train)
print("lr_coef",lr.coef_) #式の係数表示
# print ("lr_intercept",lr.intercept_)


# 検証
print('Train score: {:.3f}'.format(lr.score(X_train, y_train)))
y_pred = lr.predict(test)
print("sss", y_pred)

# df_test.plot.scatter(x='ball_x', y='ball_y', color=test['target'])
df_test.plot.scatter(x='ball_x', y='ball_y', color=y_pred)

plt.show()












