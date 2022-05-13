# import matplotlib.pyplot as plt
# # import matplotlib.patches as patches
# # import numpy as np
# import pandas as pd

# figure, axes = plt.subplots()
# draw_circle = plt.Circle((3, 5), 0.5)

# axes.set_aspect(1)
# axes.add_artist(draw_circle)

# draw_circle = plt.Circle((7.5, 5), 0.5)

# axes.set_aspect(1)
# axes.add_artist(draw_circle)

# receiver1_ball_x_data = [4.2, 3.8, 8, 1.1, 5, 4, 4.8, 6.1, 5.5, 3, 3.3, 5.4, 5.4, 0.0, 0.2, 0.2, 1.2, 5, 0.5, 0.3, 1, 3.9, 1.4, 4.9, 1.3, 3.6, 3.9, 4.5, 0.4, 5, 4.6,1.6,4.8,1.5,5.3,4.7,4.4,0.7,1,2.7,3.9,4.1,4.6,1.2,0.7,3.2,5.5,3,2,4.3,1.4,5.1,0.9,4.2,2.6,5.3,0.7,3.6,4.4,3.5,2,1.4,3.7,3.1,1.4,2.4,4.8,0.7,0.5,2.5,3.9,2.6,0.3,1.5,0.2,3.1,4.3,3.4,1.9,4.2,3,1.6,3.5,1.8,0.4,4.6,4,5.2,2.3,1.7,0.7,3.7,4.5,0.8,5.1,2.2,4.9,5.2,5.4,4.1,3,3.8,2.1,5.2,1,3]
# receiver1_ball_y_data = [2.3,5.9,3.6,5.1,7.1,1.5,0.3,6.7,8.7,1.3,1,4.8,3.7,4.4,6.7,7.7,0.5,8.6,4.9,1,3.5,8.8,6.7,9.3,10,3.4,2.7,5.5,1.9,1.7,9.5,2.7,9.7,0.5,8.6,8.1,7.6,0.9,8.5,6.9,3,0.7,2.5,1,2.5,1.7,2.3,7.6,3.5,1.1,7.7,0.2,1.4,2.5,4.1,6.1,4.5,7.4,0.4,4.2,2,0.9,3.5,4.5,7.8,8.8,7.4,7.9,0.7,7.8,6.9,1.1,3.5,0.9,8.7,6.4,8.7,9,10.4,8.9,6.9,3.5,9.2,7.4,6.6,5.8,0.3,0.4,8,5.6,7.1,2.9,9.6,9.2,3.4,7.7,5.6,7.1,6.3,2.3, 5.1,2.3,2.5,6.4,7.1,10]
# receiver2_ball_x_data = [6.2, 5.8, 8, 7.1, 5, 7, 8.8, 6.1, 5.5, 10, 7.6,7.9,5.9,10.1,9.6,8.6,9,10.1,6.8,6.1,7.3,7.1,8.2,9,6,6.7,5.6,6.1,9.2,9.3, 10,8.5,6,6.3,6.9,9,7.9,5.8,7.5,9.7,10.2,7.9,8.4,5.7,6.9,9.8,9,10,7.5,9,6.1,8.9,6.7,10.1,6.7,7.6,7.6,10.4,5.5,9.9,6.4,8.2,6.6,9.5,9.8,9.3,8.4,8.9,9,8,5.7,9,9.4,8.8,6.2,9,6.7,9.9,8.3,7.8,8.2,10,5.8,8.3,6.9,5.7,7.1,7.6,8.6,6,8.5,5.6,9.4,5.9,6.9,8,9.5,7.2,9.5,6,5.8,7.7,7,8.7,8,9]
# receiver2_ball_y_data =  [4.2,8.9,3,3.5,2.4,9.2,1.2,2.8,5.8,6.8,7.8,7.4,6.1,7.1,5.8,1.4,7.1,5.4,10.1,1.8,4,5,8.6,7.2,9.4,6.9,5.1,8,3.1,5.8,1.5,8.4,0.8,1.7,2.5,2.1,9.3,7.8,0.9,8.9,3.6,2.3,6.4,1.2,8.8,10.4,9.8,4.9,0.4,0.1,1.2,3.6,0.8,10.5,10.4,1.4,5.1,3,7.4,5.3,10.4,4.9,7.6,4.9,6.4,10.5,5.7,0.2,6.7,3.9,0.5,2.1,4.4,6.6,2.2,1.1,4.7,1,8.8,2.3,0.6,5.3,8.3,6.3,0.1,6,10.2,7,4.5,1.5,5,2,8.9,5.5,2.6,7.1,0,3,0.4,9.3,3.8,7,2.2,4.9,2,9.9]
# # receiver1_x_data = 3
# # receiver1_y_data = 5
# # receiver2_x_data = 7.5
# # receiver2_y_data = 5

# # ball_speed_data = [100, 88, 91, 79, 102, 98, 82, 92, 99, 110, 80,94,91,105,82,100,99,85,95,82,108,92,107,103,85,102,98,81,88,91]
# clms = ["coat_distance", "x_data", "y_data", "omiai_plot"]
# # idx = ['{:.1f}'.format(i * 0.1) for i in range(0, 106)]
# idxs = [i for i in range(0, 106)]

# df = pd.DataFrame(columns=clms, index=idxs)
# df["coat_distance"] = ['{:.1f}'.format(i * 0.1) for i in range(1, 107)]

# # df["sun_time"] = sun_time

# # df["receiver1_ball_x_data"] = receiver1_ball_x_data
# # df["receiver1_ball_y_data"] = receiver1_ball_y_data
# # df["omiai_plot"] = temperature


# # print(receiver1_ball_x_data)
# # for i in id:
# #     print(receiver1_ball_x_data.index(i))
   

# # p = np.linspace(0, 10.5, 30)   # linspace(min, max, N) で範囲 min から max を N 分割します
# # q = p**5+p**4-10*p**3+2*p-8
# # q = receiver1_ball_x_data[0]**4+4*receiver1_ball_x_data[0]**3*receiver1_ball_y_data[0]+6*receiver1_ball_x_data[0]**2*receiver1_ball_y_data[0]**2+4*receiver1_ball_x_data[0]*receiver1_ball_y_data[0]**3+receiver1_ball_y_data[0]**4



# # plt.title("sample")
# for i in idxs:
#     print(i)
#     df["x_data"].loc[i] = abs(receiver1_ball_x_data[i] - receiver2_ball_x_data[i])
#     df["y_data"].loc[i] = abs(receiver1_ball_y_data[i] - receiver2_ball_y_data[i])
#     df["omiai_plot"].loc[i] = 1 / 1 - 2.72**(-(df["x_data"].loc[i]+df["y_data"].loc[i]))
# # print(df)

# plt.scatter(receiver1_ball_x_data, receiver1_ball_y_data, label="receiver1")
# plt.scatter(receiver2_ball_x_data, receiver2_ball_y_data, label="receiver2")
# plt.xlabel("X-LABEL")
# plt.xlabel("Y-LABEL")
# x = df["coat_distance"]
# y = df["omiai_plot"]

# plt.plot(x, y, color="k")
# # plt.legend()
# plt.show()






from sklearn.datasets import load_iris
iris = load_iris()
# print(iris)
import pandas as pd
import seaborn as sns
# JupyterLab で実行する際は、この行を書くことで描画できるようになります。
# %matplotlib inline
import numpy as np
import matplotlib.pyplot as plt
from sklearn.neighbors import KNeighborsClassifier   #k-近傍法　(k-NN)
from sklearn.linear_model import LogisticRegression      #ロジスティック回帰
from sklearn.svm import LinearSVC       #線形サポートベクタマシン
from sklearn.svm import SVC             #カーネル法を用いたサポートベクタマシン
from sklearn.tree import DecisionTreeRegressor         #決定木
from sklearn.ensemble import RandomForestClassifier       #ランダムフォレスト、勾配ブースティング回帰木
from sklearn.ensemble import GradientBoostingClassifier    #ランダムフォレスト、勾配ブースティング回帰木
from sklearn.neural_network import MLPClassifier   #ニューラルネットワーク
from sklearn.cluster import KMeans        #教師なし学習


data = np.array([[2.5, 8.5, 93, 3],
[5.5, 7.5, 108, 3],
[1.9, 9.9, 96.8, 3],
[0.7, 2.7, 106.1, 3],
[2.9, 7.1, 109.7, 3],
[2.9, 1.3, 103.9, 3],
[0.8, 7, 109.8, 3],
[0.1, 1.1, 100.9, 3],
[1.4, 0.5, 105.8, 3],
[1.4, 2.8, 94, 3],
[3.2, 3, 90.4, 3],
[1.5, 1.3, 97.5, 3],
[3.2, 2.3, 93.5, 3],
[2, 9.7, 92.7, 3],
[4.8, 2.5, 107, 3],
[4.4, 7.1, 98.8, 3],
[3.2, 5.3, 98.7, 3],
[3.5, 7.2, 91.4, 3],
[3.1, 8.2, 103.7, 3],
[4.3, 0.5, 103.7, 3],
[0.6, 0.6, 91.5, 3],
[1.5, 10.4, 100.7, 3],
[0.3, 3.6, 108, 3],
[4.6, 9.9, 109.1, 3],
[4.4, 9.3, 97.7, 3],
[1.4, 5.1, 92.6, 3],
[5.1, 4.9, 100.9, 3],
[4.2, 10.2, 92.5, 3],
[4.8, 4.1, 93.8, 3],
[1.2, 5.9, 104.9, 3],
[4.7, 6.4, 109.2, 3],
[4.2, 7.4, 105.4, 3],
[2.4, 8.4, 102.2, 3],
[3.6, 3.7, 100.2, 3],
[5.3, 3, 90.8, 3],
[5.2, 9, 105.1, 3],
[0.9, 2.6, 97.9, 3],
[2.3, 3.4, 99.2, 3],
[2.5, 7, 97.1, 3],
[0.2, 1.4, 90, 3],
[2, 9.9, 107.7, 3],
[0.4, 8.4, 97.6, 3],
[3.8, 10.1, 109.8, 3],
[2.3, 10.1, 108.6, 3],
[2.3, 5.3, 103, 3],
[2.8, 10.3, 105.4, 3],
[2.6, 2.8, 107.5, 3],
[2.9, 0.4, 92.3, 3],
[2.1, 5.7, 102.2, 3],
[0.7, 0.6, 102.7, 3],
[8.1, 1, 102.7, 3],
[6.3, 4.2, 94, 3],
[6.6, 7.3, 109.5, 3],
[6.7, 9.3, 95.6, 3],
[5.6, 5.7, 106.7, 3],
[9.4, 7.5, 93, 3],
[6.6, 2.5, 98.6, 3],
[9.9, 8.5, 92.9, 3],
[5.7, 2.1, 100.3, 3],
[6.1, 5.2, 106.7, 3],
[5.9, 5.1, 109.5, 3],
[6.8, 9.6, 109.7, 3],
[6.1, 4, 107.4, 3],
[8.1, 0.6, 108.8, 3],
[8.5, 2.7, 91.4, 3],
[9.3, 5.5, 107.7, 3],
[9.3, 2.5, 93.5, 3],
[9.1, 7.6, 104.7, 3],
[7.4, 8.3, 92, 3],
[6.7, 9.9, 101.7, 3],
[8.8, 9.3, 92.2, 3],
[7.2, 4.9, 109.7, 3],
[6.1, 0.6, 109.3, 3],
[5.8, 10.4, 94.7, 3],
[8.5, 4.5, 102.6, 3],
[8.8, 10.3, 102.2, 3],
[9.7, 8.7, 95.3, 3],
[9.9, 7.7, 99.1, 3],
[9.3, 0.9, 104.5, 3],
[9.6, 0.1, 107.8, 3],
[9.4, 5.1, 106.1, 3],
[6.5, 8.1, 96.1, 3],
[7.6, 9.1, 108.4, 3],
[8.3, 1.3, 108.2, 3],
[5.7, 3.4, 90.5, 3],
[7.4, 6.4, 98.4, 3],
[9, 8.1, 97.7, 3],
[5.7, 6, 107.3, 3],
[5.7, 6.5, 100.9, 3],
[5.8, 9, 92.3, 3],
[6.2, 8.9, 101.3, 3],
[8.3, 8, 95.3, 3],
[6.8, 6.8, 95.3, 3],
[10.4, 5.6, 107.3, 3],
[9.6, 8.1, 101.6, 3],
[6.8, 9.6, 96.4, 3],
[7.9, 5, 103, 3],
[10.3, 8.3, 95.6, 3],
[9.2, 6.2, 102.1, 3],
[10.2, 8.1, 98.2, 3],
[2.5, 8.5, 93, 3],
[5.5, 7.5, 108, 3],
[1.9, 9.9, 96.8, 3],
[0.7, 2.7, 106.1, 3],
[2.9, 7.1, 109.7, 3],
[2.9, 1.3, 103.9, 3],
[0.8, 7, 109.8, 3],
[0.1, 1.1, 100.9, 3],
[1.4, 0.5, 105.8, 3],
[1.4, 2.8, 94, 3],
[3.2, 3, 90.4, 3],
[1.5, 1.3, 97.5, 3],
[3.2, 2.3, 93.5, 3],
[2, 9.7, 92.7, 3],
[4.8, 2.5, 107, 3],
[4.4, 7.1, 98.8, 3],
[3.2, 5.3, 98.7, 3],
[3.5, 7.2, 91.4, 3],
[3.1, 8.2, 103.7, 3],
[4.3, 0.5, 103.7, 3],
[0.6, 0.6, 91.5, 3],
[1.5, 10.4, 100.7, 3],
[0.3, 3.6, 108, 3],
[4.6, 9.9, 109.1, 3],
[4.4, 9.3, 97.7, 3],
[1.4, 5.1, 92.6, 3],
[5.1, 4.9, 100.9, 3],
[4.2, 10.2, 92.5, 3],
[4.8, 4.1, 93.8, 3],
[1.2, 5.9, 104.9, 3],
[4.7, 6.4, 109.2, 3],
[4.2, 7.4, 105.4, 3],
[2.4, 8.4, 102.2, 3],
[3.6, 3.7, 100.2, 3],
[5.3, 3, 90.8, 3],
[5.2, 9, 105.1, 3],
[0.9, 2.6, 97.9, 3],
[2.3, 3.4, 99.2, 3],
[2.5, 7, 97.1, 3],
[0.2, 1.4, 90, 3],
[2, 9.9, 107.7, 3],
[0.4, 8.4, 97.6, 3],
[3.8, 10.1, 109.8, 3],
[2.3, 10.1, 108.6, 3],
[2.3, 5.3, 103, 3],
[2.8, 10.3, 105.4, 3],
[2.6, 2.8, 107.5, 3],
[2.9, 0.4, 92.3, 3],
[2.1, 5.7, 102.2, 3],
[0.7, 0.6, 102.7, 3],

])
clms = ["ball_x_zahyo", "ball_y_zahyo", "ball_speed", "receiver_distance"]
df = pd.DataFrame(data, columns=clms)
# df = pd.DataFrame(iris.data, columns=clms)

df['target'] = iris.target
df.loc[df['target'] == 0, 'target'] = "ichiro"
df.loc[df['target'] == 1, 'target'] = "nichiro"
# df.loc[df['target'] == 2, 'target'] = "virginica"
# print(iris.data)
# X = iris.data[:, [0, 2]][0:100]
# X = np.array([[5.1, 3.5, 1.4, 0.2],
#        [4.9, 3. , 1.4, 0.2],
#        [4.7, 3.2, 1.3, 0.2],
#        [4.6, 3.1, 1.5, 0.2],
#        [5. , 3.6, 1.4, 0.2],
#        [5.4, 3.9, 1.7, 0.4],
#        [4.6, 3.4, 1.4, 0.3],
#        [5. , 3.4, 1.5, 0.2],
#        [4.4, 2.9, 1.4, 0.2],
#        [4.9, 3.1, 1.5, 0.1],
#        [5.4, 3.7, 1.5, 0.2],
#        [4.8, 3.4, 1.6, 0.2],
#        [4.8, 3. , 1.4, 0.1],
#        [4.3, 3. , 1.1, 0.1],
#        [5.8, 4. , 1.2, 0.2],
#        [5.7, 4.4, 1.5, 0.4],
#        [5.4, 3.9, 1.3, 0.4],
#        [5.1, 3.5, 1.4, 0.3],
#        [5.7, 3.8, 1.7, 0.3],
#        [5.1, 3.8, 1.5, 0.3],
#        [5.4, 3.4, 1.7, 0.2],
#        [5.1, 3.7, 1.5, 0.4],
#        [4.6, 3.6, 1. , 0.2],
#        [5.1, 3.3, 1.7, 0.5],
#        [4.8, 3.4, 1.9, 0.2],
#        [5. , 3. , 1.6, 0.2],
#        [5. , 3.4, 1.6, 0.4],
#        [5.2, 3.5, 1.5, 0.2],
#        [5.2, 3.4, 1.4, 0.2],
#        [4.7, 3.2, 1.6, 0.2],
#        [4.8, 3.1, 1.6, 0.2],
#        [5.4, 3.4, 1.5, 0.4],
#        [5.2, 4.1, 1.5, 0.1],
#        [5.5, 4.2, 1.4, 0.2],
#        [4.9, 3.1, 1.5, 0.2],
#        [5. , 3.2, 1.2, 0.2],
#        [5.5, 3.5, 1.3, 0.2],
#        [4.9, 3.6, 1.4, 0.1],
#        [4.4, 3. , 1.3, 0.2],
#        [5.1, 3.4, 1.5, 0.2],
#        [5. , 3.5, 1.3, 0.3],
#        [4.5, 2.3, 1.3, 0.3],
#        [4.4, 3.2, 1.3, 0.2],
#        [5. , 3.5, 1.6, 0.6],
#        [5.1, 3.8, 1.9, 0.4],
#        [4.8, 3. , 1.4, 0.3],
#        [5.1, 3.8, 1.6, 0.2],
#        [4.6, 3.2, 1.4, 0.2],
#        [5.3, 3.7, 1.5, 0.2],
#        [5. , 3.3, 1.4, 0.2],
#        [7. , 3.2, 4.7, 1.4],
#        [6.4, 3.2, 4.5, 1.5],
#        [6.9, 3.1, 4.9, 1.5],
#        [5.5, 2.3, 4. , 1.3],
#        [6.5, 2.8, 4.6, 1.5],
#        [5.7, 2.8, 4.5, 1.3],
#        [6.3, 3.3, 4.7, 1.6],
#        [4.9, 2.4, 3.3, 1. ],
#        [6.6, 2.9, 4.6, 1.3],
#        [5.2, 2.7, 3.9, 1.4],
#        [5. , 2. , 3.5, 1. ],
#        [5.9, 3. , 4.2, 1.5],
#        [6. , 2.2, 4. , 1. ],
#        [6.1, 2.9, 4.7, 1.4],
#        [5.6, 2.9, 3.6, 1.3],
#        [6.7, 3.1, 4.4, 1.4],
#        [5.6, 3. , 4.5, 1.5],
#        [5.8, 2.7, 4.1, 1. ],
#        [6.2, 2.2, 4.5, 1.5],
#        [5.6, 2.5, 3.9, 1.1],
#        [5.9, 3.2, 4.8, 1.8],
#        [6.1, 2.8, 4. , 1.3],
#        [6.3, 2.5, 4.9, 1.5],
#        [6.1, 2.8, 4.7, 1.2],
#        [6.4, 2.9, 4.3, 1.3],
#        [6.6, 3. , 4.4, 1.4],
#        [6.8, 2.8, 4.8, 1.4],
#        [6.7, 3. , 5. , 1.7],
#        [6. , 2.9, 4.5, 1.5],
#        [5.7, 2.6, 3.5, 1. ],
#        [5.5, 2.4, 3.8, 1.1],
#        [5.5, 2.4, 3.7, 1. ],
#        [5.8, 2.7, 3.9, 1.2],
#        [6. , 2.7, 5.1, 1.6],
#        [5.4, 3. , 4.5, 1.5],
#        [6. , 3.4, 4.5, 1.6],
#        [6.7, 3.1, 4.7, 1.5],
#        [6.3, 2.3, 4.4, 1.3],
#        [5.6, 3. , 4.1, 1.3],
#        [5.5, 2.5, 4. , 1.3],
#        [5.5, 2.6, 4.4, 1.2],
#        [6.1, 3. , 4.6, 1.4],
#        [5.8, 2.6, 4. , 1.2],
#        [5. , 2.3, 3.3, 1. ],
#        [5.6, 2.7, 4.2, 1.3],
#        [5.7, 3. , 4.2, 1.2],
#        [5.7, 2.9, 4.2, 1.3],
#        [6.2, 2.9, 4.3, 1.3],
#        [5.1, 2.5, 3. , 1.1],
#        [5.7, 2.8, 4.1, 1.3],
#        [6.3, 3.3, 6. , 2.5],
#        [5.8, 2.7, 5.1, 1.9],
#        [7.1, 3. , 5.9, 2.1],
#        [6.3, 2.9, 5.6, 1.8],
#        [6.5, 3. , 5.8, 2.2],
#        [7.6, 3. , 6.6, 2.1],
#        [4.9, 2.5, 4.5, 1.7],
#        [7.3, 2.9, 6.3, 1.8],
#        [6.7, 2.5, 5.8, 1.8],
#        [7.2, 3.6, 6.1, 2.5],
#        [6.5, 3.2, 5.1, 2. ],
#        [6.4, 2.7, 5.3, 1.9],
#        [6.8, 3. , 5.5, 2.1],
#        [5.7, 2.5, 5. , 2. ],
#        [5.8, 2.8, 5.1, 2.4],
#        [6.4, 3.2, 5.3, 2.3],
#        [6.5, 3. , 5.5, 1.8],
#        [7.7, 3.8, 6.7, 2.2],
#        [7.7, 2.6, 6.9, 2.3],
#        [6. , 2.2, 5. , 1.5],
#        [6.9, 3.2, 5.7, 2.3],
#        [5.6, 2.8, 4.9, 2. ],
#        [7.7, 2.8, 6.7, 2. ],
#        [6.3, 2.7, 4.9, 1.8],
#        [6.7, 3.3, 5.7, 2.1],
#        [7.2, 3.2, 6. , 1.8],
#        [6.2, 2.8, 4.8, 1.8],
#        [6.1, 3. , 4.9, 1.8],
#        [6.4, 2.8, 5.6, 2.1],
#        [7.2, 3. , 5.8, 1.6],
#        [7.4, 2.8, 6.1, 1.9],
#        [7.9, 3.8, 6.4, 2. ],
#        [6.4, 2.8, 5.6, 2.2],
#        [6.3, 2.8, 5.1, 1.5],
#        [6.1, 2.6, 5.6, 1.4],
#        [7.7, 3. , 6.1, 2.3],
#        [6.3, 3.4, 5.6, 2.4],
#        [6.4, 3.1, 5.5, 1.8],
#        [6. , 3. , 4.8, 1.8],
#        [6.9, 3.1, 5.4, 2.1],
#        [6.7, 3.1, 5.6, 2.4],
#        [6.9, 3.1, 5.1, 2.3],
#        [5.8, 2.7, 5.1, 1.9],
#        [6.8, 3.2, 5.9, 2.3],
#        [6.7, 3.3, 5.7, 2.5],
#        [6.7, 3. , 5.2, 2.3],
#        [6.3, 2.5, 5. , 1.9],
#        [6.5, 3. , 5.2, 2. ],
#        [6.2, 3.4, 5.4, 2.3],
#        [5.9, 3. , 5.1, 1.8]])[:, [0, 2]][0:100]
      
X = np.array([[2.5, 8.5, 93, 3],
[5.5, 7.5, 108, 3],
[1.9, 9.9, 96.8, 3],
[0.7, 2.7, 106.1, 3],
[2.9, 7.1, 109.7, 3],
[2.9, 1.3, 103.9, 3],
[0.8, 7, 109.8, 3],
[0.1, 1.1, 100.9, 3],
[1.4, 0.5, 105.8, 3],
[1.4, 2.8, 94, 3],
[3.2, 3, 90.4, 3],
[1.5, 1.3, 97.5, 3],
[3.2, 2.3, 93.5, 3],
[2, 9.7, 92.7, 3],
[4.8, 2.5, 107, 3],
[4.4, 7.1, 98.8, 3],
[3.2, 5.3, 98.7, 3],
[3.5, 7.2, 91.4, 3],
[3.1, 8.2, 103.7, 3],
[4.3, 0.5, 103.7, 3],
[0.6, 0.6, 91.5, 3],
[1.5, 10.4, 100.7, 3],
[0.3, 3.6, 108, 3],
[4.6, 9.9, 109.1, 3],
[4.4, 9.3, 97.7, 3],
[1.4, 5.1, 92.6, 3],
[5.1, 4.9, 100.9, 3],
[4.2, 10.2, 92.5, 3],
[4.8, 4.1, 93.8, 3],
[1.2, 5.9, 104.9, 3],
[4.7, 6.4, 109.2, 3],
[4.2, 7.4, 105.4, 3],
[2.4, 8.4, 102.2, 3],
[3.6, 3.7, 100.2, 3],
[5.3, 3, 90.8, 3],
[5.2, 9, 105.1, 3],
[0.9, 2.6, 97.9, 3],
[2.3, 3.4, 99.2, 3],
[2.5, 7, 97.1, 3],
[0.2, 1.4, 90, 3],
[2, 9.9, 107.7, 3],
[0.4, 8.4, 97.6, 3],
[3.8, 10.1, 109.8, 3],
[2.3, 10.1, 108.6, 3],
[2.3, 5.3, 103, 3],
[2.8, 10.3, 105.4, 3],
[2.6, 2.8, 107.5, 3],
[2.9, 0.4, 92.3, 3],
[2.1, 5.7, 102.2, 3],
[0.7, 0.6, 102.7, 3],
[8.1, 1, 102.7, 3],
[6.3, 4.2, 94, 3],
[6.6, 7.3, 109.5, 3],
[6.7, 9.3, 95.6, 3],
[5.6, 5.7, 106.7, 3],
[9.4, 7.5, 93, 3],
[6.6, 2.5, 98.6, 3],
[9.9, 8.5, 92.9, 3],
[5.7, 2.1, 100.3, 3],
[6.1, 5.2, 106.7, 3],
[5.9, 5.1, 109.5, 3],
[6.8, 9.6, 109.7, 3],
[6.1, 4, 107.4, 3],
[8.1, 0.6, 108.8, 3],
[8.5, 2.7, 91.4, 3],
[9.3, 5.5, 107.7, 3],
[9.3, 2.5, 93.5, 3],
[9.1, 7.6, 104.7, 3],
[7.4, 8.3, 92, 3],
[6.7, 9.9, 101.7, 3],
[8.8, 9.3, 92.2, 3],
[7.2, 4.9, 109.7, 3],
[6.1, 0.6, 109.3, 3],
[5.8, 10.4, 94.7, 3],
[8.5, 4.5, 102.6, 3],
[8.8, 10.3, 102.2, 3],
[9.7, 8.7, 95.3, 3],
[9.9, 7.7, 99.1, 3],
[9.3, 0.9, 104.5, 3],
[9.6, 0.1, 107.8, 3],
[9.4, 5.1, 106.1, 3],
[6.5, 8.1, 96.1, 3],
[7.6, 9.1, 108.4, 3],
[8.3, 1.3, 108.2, 3],
[5.7, 3.4, 90.5, 3],
[7.4, 6.4, 98.4, 3],
[9, 8.1, 97.7, 3],
[5.7, 6, 107.3, 3],
[5.7, 6.5, 100.9, 3],
[5.8, 9, 92.3, 3],
[6.2, 8.9, 101.3, 3],
[8.3, 8, 95.3, 3],
[6.8, 6.8, 95.3, 3],
[10.4, 5.6, 107.3, 3],
[9.6, 8.1, 101.6, 3],
[6.8, 9.6, 96.4, 3],
[7.9, 5, 103, 3],
[10.3, 8.3, 95.6, 3],
[9.2, 6.2, 102.1, 3],
[10.2, 8.1, 98.2, 3],
])[:, [0, 1]][0:100]

y = iris.target[0:100]
# print(iris.data.shape)
print(iris.target_names)
print(iris.feature_names)
# print("y", y)
# print("X:", iris.data)
print("sss", X[:, 0])
print("ddd", X[:, 1])
print("df", df)
df = df.drop(range(100,150))
print("df", df)

h = .02  # step size in the mesh
# x_min, x_max = X[:, 0].min() - .5, X[:, 0].max() + .5
# y_min, y_max = X[:, 1].min() - .5, X[:, 1].max() + .5
x_min = 0
x_max = 10.5
y_min = 0
y_max = 10.5
xx, yy = np.meshgrid(np.arange(x_min, x_max, h), np.arange(y_min, y_max, h))
print("xx",xx)
print("yy",yy)
def decision_boundary(clf, X, y, ax, title):
    clf.fit(X, y)

    # Plot the decision boundary. For that, we will assign a color to each
    # point in the mesh [x_min, x_max]x[y_min, y_max].    
    Z = clf.predict(np.c_[xx.ravel(), yy.ravel()])

    # Put the result into a color plot
    Z = Z.reshape(xx.shape)
    ax.pcolormesh(xx, yy, Z, cmap=plt.cm.Paired)

    # Plot also the training points
    ax.scatter(X[:, 0], X[:, 1], c=y, edgecolors='k', cmap=plt.cm.Paired)

    # label
    ax.set_title(title)
    ax.set_xlabel('x')
    ax.set_ylabel('y')


sns.pairplot(df, hue="target")

#↓k-近傍法
fig, axes = plt.subplots(1, 4, figsize=(12, 3))
for ax, n_neighbors in zip(axes, [1, 3, 6, 10]):
    title = "%s neighbor(s)"% (n_neighbors)
    clf = KNeighborsClassifier(n_neighbors=n_neighbors)
    decision_boundary(clf, X, y, ax, title)

#↓ロジスティック回帰
fig, axes = plt.subplots(1, 3, figsize=(10, 3))

for ax, C in zip(axes, [0.01, 1, 100]):
    title = "C=%s"% (C)
    clf = LogisticRegression(C=C)
    decision_boundary(clf, X, y, ax, title)

#線形サポートベクタマシン
fig, axes = plt.subplots(1, 3, figsize=(10, 3))

for ax, C in zip(axes, [0.01, 1, 100]):
    title = "C=%s"% (C)
    clf = LinearSVC(C=C)
    decision_boundary(clf, X, y, ax, title)

#カーネル法を用いたサポートベクタマシン
fig, axes = plt.subplots(3, 3, figsize=(10, 10))

for ax_row, C in zip(axes, [0.01, 1, 100]):
    for ax, gamma in zip(ax_row, [0.1, 1, 10]):
        title = "C=%s, gamma=%s"% (C, gamma)
        clf = SVC(C=C, gamma=gamma)
        decision_boundary(clf, X, y, ax, title)

#決定木
fig, axes = plt.subplots(1, 3, figsize=(10, 3))

for ax, max_depth in zip(axes, [1, 3, 8]):
    title = "max_depth=%s"% (max_depth)
    clf = DecisionTreeRegressor(max_depth=max_depth)
    decision_boundary(clf, X, y, ax, title)

#ランダムフォレスト、勾配ブースティング回帰木
fig, axes = plt.subplots(1, 2, figsize=(7, 3))
clfs = [RandomForestClassifier(), GradientBoostingClassifier()]
titles = ["RandomForestClassifier", "GradientBoostingClassifier"]

for ax, clf, title in zip(axes, clfs, titles):
    decision_boundary(clf, X, y, ax, title)

#ニューラルネットワーク
fig, axes = plt.subplots(1, 4, figsize=(12, 3))

for ax, n in zip(axes, [15, 15, 15, 15]):
    title = ""
    clf = MLPClassifier(hidden_layer_sizes=[n, n])
    decision_boundary(clf, X, y, ax, title)

#教師なし学習
fig, axes = plt.subplots(1, 4, figsize=(12, 3))

for ax, n_clusters in zip(axes, [2, 3, 4, 5]):
    title = "n_clusters=%s"% (n_clusters)
    clf = KMeans(n_clusters=n_clusters)
    decision_boundary(clf, X, y, ax, title)

plt.show()