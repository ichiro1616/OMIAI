# import matplotlib.pyplot as plt
# import pandas as pd
# def passing(sun_time):
#     q = 0.75 * sun_time + 11.75
#     return q
# def allowed(sun_time):
#     p = 2.43 * sun_time
#     return p
# def temp_to_scr(temp, good_temp):
#     best_temp = 35
#     good_scr = 60
#     best_scr = 70
#     if(temp < good_temp):
#         keisu = good_scr / good_temp
#         return temp * keisu
#     elif(good_temp <= temp and temp <= best_temp):
#         keisu = (best_scr - good_scr) / (best_temp - good_temp)
#         seppen = best_scr - best_temp * keisu
#         # print(keisu, seppen)
#         return keisu*temp + seppen
#     else:
#         return (1 / ((temp - best_temp)**2 - 1)) * 70
# clms = ["dates", "sun_time", "temperature",
#         "sun_score", "temp_score", "grow_per"]
# idx = [i for i in range(0, 184)]
# dates = [i for i in range(1, 185)]
# may_sun_time = [3.8, 8.3, 11.7, 10.7, 0.0, 13.0, 0.1, 6.8, 11.2, 12.1, 4.1, 0.0, 0.4, 12.2,
#                 0.0, 0.0, 0.0, 1.5, 0.0, 0.0, 0.0, 0.3, 13.1, 2.4, 7.1, 5.0, 0.0, 1.8, 7.5, 12.1, 12.5]
# june_sun_time = [11.5, 2.3, 5.0, 0.0, 4.9, 3.6, 7.6, 12.2, 13.0, 13.5, 7.5, 3.7, 0.9,
#                  8.2, 8.2, 0.0, 9.0, 1.2, 0.0, 8.0, 9.8, 1.9, 5.4, 7.6, 1.8, 0.2, 0.1, 3.3, 6.2, 1.9]
# july_sun_time = [0.0, 0.2, 7.1, 0.1, 3.4, 1.2, 0.0, 0.0, 2.6, 8.0, 10.0, 4.9, 11.5, 3.3, 7.7,
#                  3.0, 6.5, 2.8, 13.1, 12.5, 13.4, 11.6, 12.4, 13.3, 13.2, 11.3, 8.5, 11.1, 9.4, 8.2, 7.3]
# augs_sun_time = [6.4, 10.7, 0.6, 10.3, 9.1, 3.3, 5.7, 11.5, 2.2, 11.3, 5.2, 0.0, 0.0, 0.0,
#                  0.0, 0.0, 0.2, 1.0, 0.0, 0.0, 0.1, 5.9, 3.6, 5.0, 10.2, 6.4, 12.3, 12.4, 12.1, 11.9, 12.0]
# sept_sun_time = [4.3, 0.0, 0.0, 0.4, 1.5, 6.3, 0.0, 0.0, 7.2, 10.8, 4.0, 0.0, 4.2, 0.0,
#                  4.3, 3.0, 0.0, 2.3, 7.9, 5.4, 1.1, 0.0, 10.2, 9.7, 0.8, 0.0, 9.7, 10.3, 3.5, 0.0]
# octo_sun_time = [0.2, 11.1, 11.0, 9.3, 10.7, 11.0, 1.7, 3.8, 5.8, 0.2, 2.6, 6.4, 0.0, 9.8,
#                  10.1, 6.4, 3.4, 0.0, 1.0, 5.8, 2.5, 2.8, 10.4, 7.3, 0.0, 10.2, 2.2, 10.2, 10.0, 9.0, 0.2]
# sun_time = may_sun_time + june_sun_time + july_sun_time + \
#     augs_sun_time + sept_sun_time + augs_sun_time
# May_temperature = [14.8, 14.0, 14.1, 15.6, 18.0, 18.7, 15.4, 17.4, 19.3, 17.8, 17.0, 16.7, 16.7, 21.0,
#                    20.1, 18.7, 20.0, 20.9, 19.9, 19.8, 21.9, 18.6, 20.0, 18.5, 20.3, 18.9, 15.7, 19.4, 20.7, 20.2, 19.0]
# June_temperature = [20.0, 20.5, 20.8, 21.0, 20.2, 19.7, 22.8, 23.3, 23.0, 22.8, 22.9, 23.0, 22.7,
#                     21.6, 23.0, 20.7, 22.1, 21.5, 20.6, 22.5, 22.2, 21.4, 22.5, 21.9, 22.3, 22.3, 21.4, 22.5, 23.3, 23.3]
# July_temperature = [21.6, 24.5, 25.9, 25.2, 26.0, 25.6, 24.4, 24.1, 25.1, 26.1, 26.5, 24.4, 25.6, 25.3,
#                     24.9, 25.0, 25.8, 25.4, 27.0, 26.5, 26.3, 26.6, 26.8, 26.8, 26.8, 27.3, 28.6, 28.2, 27.6, 27.7, 28.1]
# August_temperature = [26.8, 27.6, 26.6, 27.6, 27.4, 26.8, 27.5, 32.5, 28.1, 27.9, 26.6, 24.4, 25.1, 26.3,
#                       24.7, 22.7, 25.3, 25.0, 22.2, 22.7, 24.4, 27.1, 26.3, 26.7, 27.5, 27.8, 27.9, 27.7, 28.0, 27.7, 27.5]
# Sep_temperature = [26.4, 24.4, 22.3, 23.7, 24.0, 24.1, 22.5, 22.8, 23.8, 23.5, 23.4, 22.8, 23.1, 20.7,
#                    21.6, 23.5, 23.8, 25.1, 24.6, 24.2, 22.5, 22.9, 22.8, 22.8, 21.4, 19.8, 21.1, 22.3, 23.5, 22.4]
# Ouc_temperature = [23.1, 23.5, 22.5, 23.8, 22.1, 24.1, 23.0, 22.2, 23.4, 22.4, 22.0, 23.5, 22.2, 21.1,
#                    20.2, 20.8, 17.4, 14.3, 14.7, 14.4, 13.7, 13.8, 15.6, 14.3, 14.8, 16.6, 15.5, 17.5, 14.9, 13.8, 15.1]
# temperature = May_temperature + June_temperature + July_temperature + \
#     August_temperature + Sep_temperature + Ouc_temperature
# df = pd.DataFrame(columns=clms, index=idx)
# df["dates"] = dates
# df["sun_time"] = sun_time
# df["temperature"] = temperature
# for tmp in idx:
#     if df["sun_time"].loc[tmp] >= 11:
#         sun_time_score = 20
#     elif df["sun_time"].loc[tmp] >= 7 and df["sun_time"].loc[tmp] < 11:
#         sun_time_score = passing(df["sun_time"].loc[tmp])
#     else:
#         sun_time_score = allowed(df["sun_time"].loc[tmp])
#     df["sun_score"].loc[tmp] = sun_time_score
#     tmp += 1
# for i in idx:
#     if i <= 30:
#         good_temp = 20
#     elif i > 30 and i <= 60:
#         good_temp = 27
#     elif i > 60 and i <= 91:
#         good_temp = 31
#     elif i > 91 and i <= 122:
#         good_temp = 27
#     elif i > 122 and i <= 152:
#         good_temp = 24
#     elif i > 152 and i <= 183:
#         good_temp = 22
#     df["temp_score"].loc[i] = temp_to_scr(df["temperature"].loc[i], good_temp)
#     # print(df["dates"].loc[i], df["temperature"].loc[i], df["temp_score"].loc[i])
# print(df)
# for i in idx:
    df["grow_per"].loc[i] = 1 / 1 - 2.72**(-(df["sun_score"].loc[i]+df["temp_score"].loc[i])
                                           * i - (-(df["sun_score"].loc[i]+df["temp_score"].loc[i])))
# x = df["dates"]
# y = df["grow_per"]
# plt.plot(x, y, color="k")  # 点列(x,y)を黒線で繋いだプロット
# plt.show()  # プロットを表示




import numpy as np
from sklearn import datasets
from matplotlib.colors import ListedColormap
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
import math


# #
# # 決定境界プロット関数
# #
# def plot_decision_regions(x, y, model, resolution=0.01):

#     ## 今回は被説明変数が3クラスのため散布図のマーカータイプと3種類の色を用意
#     ## クラスの種類数に応じて拡張していくのが良いでしょう
#     markers = ('s', 'x', 'o')
#     cmap = ListedColormap(('red', 'blue', 'green'))

#     ## 2変数の入力データの最小値から最大値まで引数resolutionの幅でメッシュを描く
#     x1_min, x1_max = x[:, 0].min()-1, x[:, 0].max()+1
#     x2_min, x2_max = x[:, 1].min()-1, x[:, 1].max()+1
#     x1_mesh, x2_mesh = np.meshgrid(np.arange(x1_min, x1_max, resolution),
#                                    np.arange(x2_min, x2_max, resolution))

#     ## メッシュデータ全部を学習モデルで分類
#     z = model.predict(np.array([x1_mesh.ravel(), x2_mesh.ravel()]).T)
#     z = z.reshape(x1_mesh.shape)

#     ## メッシュデータと分離クラスを使って決定境界を描いている
#     plt.contourf(x1_mesh, x2_mesh, z, alpha=0.4, cmap=cmap)
#     plt.xlim(x1_mesh.min(), x1_mesh.max())
#     plt.ylim(x2_mesh.min(), x2_mesh.max())

#     for idx, cl in enumerate(np.unique(y)):
#         plt.scatter(x=x[y == cl, 0],
#                     y=x[y == cl, 1],
#                     alpha=0.6,
#                     c=cmap(idx),
#                     edgecolors='black',
#                     marker=markers[idx],
#                     label=cl)

# #
# # データの取得
# #
# data = datasets.load_iris()
# x_data = data.data
# y_data = data.target

# # 2変数だけを抽出
# x_data = x_data[:, [0,1]]

# # 入力データの各変数が平均0,標準偏差1になるように正規化
# # 各アルゴリズムのプロット結果を比較しやすいように予め全入力データを正規化
# sc = StandardScaler()
# sc.fit(x_data)
# x_data = sc.transform(x_data)


# # データを学習用/テスト用に分割している
# x_train, x_test, y_train, y_test = train_test_split(x_data,
#                                                     y_data,
#                                                     test_size=0.2)

# #
# # 機械学習アルゴリズムの定義
# #
# lr = LogisticRegression(C=10)
# knn = KNeighborsClassifier(n_neighbors=5)
# svm = SVC(kernel='rbf', C=1.0)
# dc = DecisionTreeClassifier(criterion='entropy', max_depth=3)
# rf = RandomForestClassifier(criterion='entropy',
#                             n_estimators=10)

# models = [lr, knn, svm, dc, rf]
# model_names = ['logistic regression',
#                'k nearest neighbor',
#                'svm',
#                'decision tree',
#                'random forest']

# #
# # それぞれのモデルにおいて決定境界をプロット
# #
# plt.figure(figsize=(8,6))
# plot_num = 1
# for model_name, model in zip(model_names, models):

#     plt.subplot(math.ceil(len(models)/2), 2, plot_num)
#     # モデルの学習
#     model.fit(x_train, y_train)
#     # 決定境界をプロット
#     plot_decision_regions(x_data, y_data, model)
#     plt.title(model_name)
#     plot_num += 1

# plt.tight_layout()
# # plt.savefig('./images/decision_region.png')
# plt.show()



# # 簡易修正版(どの場合も決定境界が標示される)
# from sklearn.model_selection import train_test_split

# # 決定境界の表示関数
# def plot_boundary(ax, x, y, algorithm):
#     x_train, x_test, y_train, y_test = train_test_split(x, y,
#             test_size=0.5, random_state=random_seed)
#     # カラーマップ定義
#     from matplotlib.colors import ListedColormap
#     cmap1 = plt.cm.bwr
#     cmap2 = ListedColormap(['#0000FF', '#000000'])

#     h = 0.005
#     algorithm.fit(x_train, y_train)
#     score_test = algorithm.score(x_test, y_test)
#     score_train = algorithm.score(x_train, y_train)
#     f1_min = x[:, 0].min() - 0.5
#     f1_max = x[:, 0].max() + 0.5
#     f2_min = x[:, 1].min() - 0.5
#     f2_max = x[:, 1].max() + 0.5
#     f1, f2 = np.meshgrid(np.arange(f1_min, f1_max, h), 
#                          np.arange(f2_min, f2_max, h))
#     if hasattr(algorithm, "decision_function"):
#         Z = algorithm.decision_function(np.c_[f1.ravel(), f2.ravel()])
#         Z = Z.reshape(f1.shape)
#         ax.contour(f1, f2, Z, levels=[0], linewidth=2)
#     else:
#         Z = algorithm.predict_proba(np.c_[f1.ravel(), f2.ravel()])[:, 1]
#         Z = Z.reshape(f1.shape)
#         # この下の行を追加
#         ax.contour(f1, f2, Z, levels=[0.5], linewidth=2)

#     ax.contourf(f1, f2, Z, cmap=cmap1, alpha=0.3)
#     ax.scatter(x_test[:,0], x_test[:,1], c=y_test, cmap=cmap2)
#     ax.scatter(x_train[:,0], x_train[:,1], c=y_train, cmap=cmap2, marker='x')
#     text = f'検証:{score_test:.2f}  訓練: {score_train:.2f}'
#     ax.text(f1.max() - 0.3, f2.min() + 0.3, text, horizontalalignment='right',
#     fontsize=18) 


import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_moons
from sklearn.neighbors import KNeighborsClassifier
 
# X, y = make_moons(n_samples=100, noise=0.25, random_state=3)


receiver1_ball_data = [[4.2 10.0][3.8 0.0][8.0 5.0][1.1 4.0][5.0 8.0][4.0 9.0][4.8 5.0][6.1 8.0][5.5 2.0][3.0 4.0][3.3 0.8][5.4 8.4][0.0 3.5][0.2 8.2][0.2 1.3][1.2 7.8][5.0 3.1][0.5 8.0][0.3 4.7][1.0 7.2][3.9 6.8][1.4 2.1][4.9 3.2][1.3 6.2][3.6 6.0][3.9 7.0][4.5 10.0][0.4 3.7][5.0 9.5][4.0 10.5]]

receiver2_ball_data = [[6.2 4.2][5.8 3.8][8.0 8.0][7.1 1.1][5.0 5.0][7.0 7.0][8.8 5.0][6.1 8.8][5.5 4.0][10.0 4.0][7.6 1.3][7.9 5.4][5.9 6.5][10.1 0.2][9.6 2.3][8.6 1.8][9.0 8.1][10.1 4.0][6.8 5.7][6.1 3.2][7.3 3.8][7.1 5.1][8.2 0.2][9.0 0.2][6.0 6.0][6.7 6.0][5.6 10.1][6.1 7.7][9.2 7.5][9.3 8.5]]

X = receiver1_ball_data 
y = receiver2_ball_data

print(X)
x0_min, x0_max = 0, 10.5
x1_min, x1_max = 0, 10.5
 
knn = KNeighborsClassifier(n_neighbors=3).fit(X, y)
 
fig, ax = plt.subplots()
 
color0, color1 = 'tab:blue', 'tab:orange'
ax.scatter(X[y==0][:, 0], X[y==0][:, 1], marker='o')
ax.scatter(X[y==1][:, 0], X[y==1][:, 1], marker='^')
 
f0 = np.linspace(x0_min, x0_max, 200)
f1 = np.linspace(x1_min, x1_max, 200)
f0, f1 = np.meshgrid(f0, f1)
pred = knn.predict(np.hstack([f0.reshape(-1, 1), f1.reshape(-1, 1)])) \
        .reshape(f0.shape)
ax.contour(f0, f1, pred, levels=[0.5])
ax.contourf(f0, f1, pred, levels=1, colors=[color0, color1], alpha=0.25)
 
ax.set_xlim(x0_min, x0_max)
ax.set_ylim(x1_min, x1_max)
ax.set_xlabel("Feature-0")
ax.set_ylabel("Feature-1")
 
plt.show()