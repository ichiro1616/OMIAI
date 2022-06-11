
import pandas as pd
import seaborn as sns
# import csv
# JupyterLab で実行する際は、この行を書くことで描画できるようになります。
# %matplotlib inline
import numpy as np
import matplotlib.pyplot as plt
from sklearn.pipeline import Pipeline
from sklearn.neighbors import KNeighborsClassifier   #k-近傍法　(k-NN)
from sklearn.linear_model import LogisticRegression      #ロジスティック回帰
from sklearn.svm import LinearSVC       #線形サポートベクタマシン
from sklearn.svm import SVC             #カーネル法を用いたサポートベクタマシン
from sklearn.tree import DecisionTreeRegressor         #決定木
from sklearn.ensemble import RandomForestClassifier       #ランダムフォレスト、勾配ブースティング回帰木
from sklearn.ensemble import GradientBoostingClassifier    #ランダムフォレスト、勾配ブースティング回帰木
from sklearn.neural_network import MLPClassifier   #ニューラルネットワーク
from sklearn.cluster import KMeans        #教師なし学習

from sklearn.feature_selection import VarianceThreshold #特徴量選択
# from sklearn.feature_selection import SelectKBest, f_classif, mutual_info_classif, chi2 #特徴量変換
from sklearn.linear_model import LogisticRegressionCV
from sklearn.metrics import confusion_matrix
from sklearn.decomposition import PCA  #主成分分析で使った
from sklearn.model_selection import train_test_split 
from sklearn.preprocessing import StandardScaler
import mglearn
from sklearn.preprocessing import PolynomialFeatures



# clms = ["my_your_sabun_x", "my_your_sabun_y", "my_ball_sabun_x", "my_ball_sabun_y", "your_ball_sabun_x", "your_ball_sabun_y"]

# df = pd.DataFrame(data, columns=clms)
# df = pd.DataFrame(iris.data, columns=clms)
df = pd.read_csv("dummy_data.csv", encoding="utf_8")
print("csv!", df)

df1 = pd.read_csv("y_pred_data.csv", encoding="utf_8")

df2 = pd.read_csv("grid_data.csv", encoding="utf_8")
# df2 = df[['ball_x', 'ball_y']]
# print(df2, "df2!!!!")



# df['target'] = iris.target
df.loc[df['target'] == 0, 'target'] = "blue"
df.loc[df['target'] == 1, 'target'] = "red"
df.loc[df['target'] == 2, 'target'] = "green"

X = df[['my_your_sabun_x', 'my_your_sabun_y', 'my_ball_sabun_x', 'my_ball_sabun_y', 'your_ball_sabun_x', 'your_ball_sabun_y']]

# X = df[['my_your_sabun_x', 'my_your_sabun_y', 'my_ball_sabun_x', 'my_ball_sabun_y', 'your_ball_sabun_x', 'your_ball_sabun_y', 'my_your_heikin_x', 'my_your_heikin_y', 'my_ball_heikin_x', 'my_ball_heikin_y', 'your_ball_heikin_x', 'your_ball_heikin_y']]
# X = df[['my_your_sabun_x', 'my_your_sabun_y']]

y = df['target']
# print("X", X) 
print("y", y)



poly3d = PolynomialFeatures(degree=4, interaction_only=True, include_bias=True, order='C')
X_poly =  poly3d.fit_transform(X)
df1_poly =  poly3d.fit_transform(df1)


def minmax_norm(df_input):       #正規化
    return (df_input / 9)
    # return (df_input - df_input.min()) / ( df_input.max() - df_input.min())

X_poly = minmax_norm(X_poly)
df1_poly = minmax_norm(df1_poly)





# XXX = [[1, 2, 3, 4, 5, 6]]
# XXX_poly =  poly3d.fit_transform(XXX)
# print("transform", X_poly)

# print("transform", X_poly)

# print("new!!",X)

# print(X['my_your_sabun_x'])

# #：特徴量の分散を調べた
# sel = VarianceThreshold()
# sel.fit_transform(X)

# X_new = pd.DataFrame(sel.fit_transform(X), columns=X.columns.values[sel.get_support()])
# print('Before Feature Selection:', X.shape)
# print('After Feature Selection:', X_new.shape)

# result = pd.DataFrame(sel.get_support(), index=X.columns.values, columns=['False: dropped'])
# result['variance'] = sel.variances_
# print(result)

# # ：特徴量選択2
# X_new = pd.get_dummies(X[['my_your_sabun_x', 'my_your_sabun_y', 'my_ball_sabun_x', 'my_ball_sabun_y', 'your_ball_sabun_x', 'your_ball_sabun_y', 'ball_speed']])

# selector = SelectKBest(chi2, k=7)
# X_new2 = pd.DataFrame(selector.fit_transform(X_new, y), columns=X_new.columns.values[selector.get_support()])
# result = pd.DataFrame(selector.get_support(), index=X_new.columns.values, columns=['False: dropped'])
# result['score'] = selector.scores_
# result['pvalue'] = selector.pvalues_

# print(result)

# 訓練用と検証用に分割
# X_train, X_test, y_train, y_test = train_test_split(X_poly, y, random_state=0, test_size=0.1)
X_train = X_poly
y_train = y



# ロジスティック回帰で学習
lr = LogisticRegressionCV(cv=6, random_state=0, penalty='l1',solver='saga') #penalty='l1'使えない係数を0にする
y_train=y_train.values.reshape(-1)
lr.fit(X_train, y_train)
# print("lr_coef",lr.coef_) #式の係数表示
# print ("lr_intercept",lr.intercept_)


# 検証
print('Train score: {:.3f}'.format(lr.score(X_train, y_train)))

# y_pred = lr.predict_prob(df1_poly)
# print(y_pred)
# print('Test score: {:.3f}'.format(lr.score(X_test, y_test)))
# print('Confustion matrix:\n{}'.format(confusion_matrix(y_true=y_test, y_pred=lr.predict(X_test))))

# # 元の特徴量と同じ数で主成分分析
pca = PCA(n_components=6)
pca.fit(X_poly)
plt.bar([n for n in range(1, len(pca.explained_variance_ratio_)+1)], pca.explained_variance_ratio_)

np.set_printoptions(precision=5, suppress=True) # numpyの小数点以下表示桁数と、指数表記設定
print('explained variance ratio: {}'.format(pca.explained_variance_ratio_))

# データの最初の2つの主成分だけを維持
pca = PCA(n_components=2)
pca.fit(X_poly)

# 最初の２つの主成分に対して、データポイントを変換
X_pca = pca.transform(X_poly)
print('Original shape: {}'.format(str(X.shape)))
print('Reduced shape: {}'.format(str(X_pca.shape)))

plt.figure(figsize=(10,10))
mglearn.discrete_scatter(X_pca[:,0], X_pca[:, 1], y)
plt.legend(["blue", "red", "green"], loc='best')
# print(X_pca)


plt.gca().set_aspect('equal')
plt.xlabel('First principal component')
plt.ylabel('Second principal component')


# パイプラインの作成
pca_pipeline = Pipeline([
    ('scale', StandardScaler()),
    ('decomposition', PCA(n_components=2)),
    ('model', LogisticRegressionCV(cv=6, random_state=0, penalty='l1',solver='saga'))
])

# 標準化・次元圧縮・学習
pca_pipeline.fit(X_train, y_train)


# print(y_test)

# 検証
print('Train score: {:.3f}'.format(pca_pipeline.score(X_train, y_train)))
# print('Test score: {:.3f}'.format(pca_pipeline.score(X_test, y_test)))
# print('Confustion matrix:\n{}'.format(confusion_matrix(y_true=y_test, y_pred=pca_pipeline.predict(X_test))))
# print("aaaaa", X_test)

print("ssssssd", df1_poly)


y_pred = pca_pipeline.predict(df1_poly)
# y_pred = pca_pipeline.predict_proba(df1_poly)
print("sss", y_pred)
df2['target'] = y_pred
# pd.set_option('display.max_rows', None)
# pd.set_option('display.max_columns', None)
print(df2)

df2.plot.scatter(x='x', y='y', color=df2['target'])
plt.show()



#144行目のX_testにwebからとってきたデータ(csvファイルのカラムと同じ特徴量の形のデータにする,グリッド上(xが0のときyは0.2刻みで0～10、次xが0.2の時・・・のようにする)にして何百個くらいの多量の数を)を入れる
#↑上を行うと、144行目のy_predにx:0, y:0の時blue、x:0, y:0.2の時blue、・・・のようにでるらしい、


# plt.figure(figsize=(10,10))

# mglearn.discrete_scatter(X_train['my_your_sabun_x'], X_train['my_your_sabun_y'], y_train)
# plt.legend(["blue", "red", "green"], loc='best')



# plt.figure(figsize=(10,10))

# mglearn.discrete_scatter(X_test['my_your_sabun_x'], X_test['my_your_sabun_y'], y_test)
# plt.legend(["receiver1", "receiver2", "omiai"], loc='best')



# h = .02
# # step size in the mesh
# # x_min, x_max = X[:, 0].min() - .5, X[:, 0].max() + .5
# # y_min, y_max = X[:, 1].min() - .5, X[:, 1].max() + .5
# x_min, x_max = X['my_your_sabun_x'].min() - .5, X['my_your_sabun_x'].max() + .5
# y_min, y_max = X['my_your_sabun_y'].min() - .5, X['my_your_sabun_y'].max() + .5
# # x_min = 0
# # x_max = 10
# # y_min = 0
# # y_max = 10
# xx, yy = np.meshgrid(np.arange(x_min, x_max, h), np.arange(y_min, y_max, h))
# print("xx",xx)
# print("yy",yy)
# def decision_boundary(clf, X, y, ax, title):
#     clf.fit(X, y)

#     # Plot the decision boundary. For that, we will assign a color to each
#     # point in the mesh [x_min, x_max]x[y_min, y_max].    
#     Z = clf.predict(np.c_[xx.ravel(), yy.ravel()])

#     # Put the result into a color plot
#     Z = Z.reshape(xx.shape)
#     ax.pcolormesh(xx, yy, Z, cmap=plt.cm.Paired)

#     # Plot also the training points
#     ax.scatter(X['my_your_sabun_x'], X['my_your_sabun_y'], c='b', edgecolors='k', cmap=plt.cm.Paired)

#     # label
#     ax.set_title(title)
#     ax.set_xlabel('x')
#     ax.set_ylabel('y')


# sns.pairplot(df, hue="target")

# # #↓k-近傍法
# # fig, axes = plt.subplots(1, 4, figsize=(12, 3))
# # for ax, n_neighbors in zip(axes, [1, 3, 6, 10]):
# #     title = "%s neighbor(s)"% (n_neighbors)
# #     clf = KNeighborsClassifier(n_neighbors=n_neighbors)
# #     decision_boundary(clf, X, y, ax, title)

# # # #↓ロジスティック回帰
# # # fig, axes = plt.subplots(1, 3, figsize=(10, 3))

# # # for ax, C in zip(axes, [0.01, 1, 100]):
# # #     title = "C=%s"% (C)
# # #     clf = LogisticRegression(C=C)
# # #     decision_boundary(clf, X, y, ax, title)

# # # #線形サポートベクタマシン
# # # fig, axes = plt.subplots(1, 3, figsize=(10, 3))

# # # for ax, C in zip(axes, [0.01, 1, 100]):
# # #     title = "C=%s"% (C)
# # #     clf = LinearSVC(C=C)
# # #     decision_boundary(clf, X, y, ax, title)

# # # #カーネル法を用いたサポートベクタマシン
# # # fig, axes = plt.subplots(3, 3, figsize=(10, 10))

# # # for ax_row, C in zip(axes, [0.01, 1, 100]):
# # #     for ax, gamma in zip(ax_row, [0.1, 1, 10]):
# # #         title = "C=%s, gamma=%s"% (C, gamma)
# # #         clf = SVC(C=C, gamma=gamma)
# # #         decision_boundary(clf, X, y, ax, title)

# # # #決定木
# # # fig, axes = plt.subplots(1, 3, figsize=(10, 3))

# # # for ax, max_depth in zip(axes, [1, 3, 8]):
# # #     title = "max_depth=%s"% (max_depth)
# # #     clf = DecisionTreeRegressor(max_depth=max_depth)
# # #     decision_boundary(clf, X, y, ax, title)

# # # #ランダムフォレスト、勾配ブースティング回帰木
# # # fig, axes = plt.subplots(1, 2, figsize=(7, 3))
# # # clfs = [RandomForestClassifier(), GradientBoostingClassifier()]
# # # titles = ["RandomForestClassifier", "GradientBoostingClassifier"]

# # # for ax, clf, title in zip(axes, clfs, titles):
# # #     decision_boundary(clf, X, y, ax, title)

# # # #ニューラルネットワーク
# # # fig, axes = plt.subplots(1, 4, figsize=(12, 3))

# # # for ax, n in zip(axes, [15, 15, 15, 15]):
# # #     title = ""
# # #     clf = MLPClassifier(hidden_layer_sizes=[n, n])
# # #     decision_boundary(clf, X, y, ax, title)

# # # #教師なし学習
# # # fig, axes = plt.subplots(1, 4, figsize=(12, 3))

# # # for ax, n_clusters in zip(axes, [2, 3, 4, 5]):
# # #     title = "n_clusters=%s"% (n_clusters)
# # #     clf = KMeans(n_clusters=n_clusters)
# # #     decision_boundary(clf, X, y, ax, title)

# plt.show()