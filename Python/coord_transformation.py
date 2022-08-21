# -*- using:utf-8 -*-
import numpy as np
import pandas as pd

def main():
    csvname = ['anzai_hinata/anzai_hinata_220614_01.csv', 'anzai_hinata/anzai_hinata_220617_03.csv', 'anzai_hinata/anzai_hinata_220620_02.csv', 'anzai_hinata/anzai_hinata_220627_01(2).csv', 'anzai_hinata/anzai_hinata_220627_01.csv', 'anzai_hinata/anzai_hinata_220627_02(2).csv', 'anzai_hinata/anzai_hinata_220627_02.csv', 'anzai_hinata/anzai_hinata_220628_03(2).csv', 'anzai_hinata/anzai_hinata_220628_03.csv'] #安西-西根
    # csvname = ['anzai_keisuke/anzai_keisuke_220614_01.csv', 'anzai_keisuke/anzai_keisuke_220617_03.csv', 'anzai_keisuke/anzai_keisuke_220620_02.csv', 'anzai_keisuke/anzai_keisuke_220627_01(2).csv', 'anzai_keisuke/anzai_keisuke_220627_01.csv', 'anzai_keisuke/anzai_keisuke_220627_02.csv', 'anzai_keisuke/anzai_keisuke_220628_02.csv', 'anzai_keisuke/anzai_keisuke_220628_03(2).csv', 'anzai_keisuke/anzai_keisuke_220628_03.csv'] #安西-けいすけ
    # csvname = ['anzai_kento/anzai_kento_220614_01.csv', 'anzai_kento/anzai_kento_220617_03.csv', 'anzai_kento/anzai_kento_220620_02.csv', 'anzai_kento/anzai_kento_220627_02.csv', 'anzai_kento/anzai_kento_220628_01(2).csv', 'anzai_kento/anzai_kento_220628_01.csv', 'anzai_kento/anzai_kento_220628_02.csv', 'anzai_kento/anzai_kento_220628_03(2).csv', 'anzai_kento/anzai_kento_220628_03.csv'] #安西-けんと
    # csvname = ['anzai_riku/anzai_riku_220614_01.csv', 'anzai_riku/anzai_riku_220617_03.csv', 'anzai_riku/anzai_riku_220620_02.csv', 'anzai_riku/anzai_riku_220627_01(2).csv', 'anzai_riku/anzai_riku_220627_01.csv', 'anzai_riku/anzai_riku_220627_02(2).csv', 'anzai_riku/anzai_riku_220627_02.csv', 'anzai_riku/anzai_riku_220628_03(2).csv', 'anzai_riku/anzai_riku_220628_03.csv'] #安西-りく
    # csvname = ['hinata_keisuke/hinata_keisuke_220614_01.csv', 'hinata_keisuke/hinata_keisuke_220617_03.csv', 'hinata_keisuke/hinata_keisuke_220620_02.csv', 'hinata_keisuke/hinata_keisuke_220628_01.csv', 'hinata_keisuke/hinata_keisuke_220707_01.csv', 'hinata_keisuke/hinata_keisuke_220707_02(2).csv', 'hinata_keisuke/hinata_keisuke_220707_02.csv', 'hinata_keisuke/hinata_keisuke_220707_03(2).csv', 'hinata_keisuke/hinata_keisuke_220707_03.csv'] #西根-けいすけ
    # csvname = ['hinata_kento/hinata_kento_220614_01.csv', 'hinata_kento/hinata_kento_220617_03.csv', 'hinata_kento/hinata_kento_220628_01.csv', 'hinata_kento/hinata_kento_220705_01.csv', 'hinata_kento/hinata_kento_220705_02(2).csv', 'hinata_kento/hinata_kento_220705_02.csv', 'hinata_kento/hinata_kento_220705_03(2).csv', 'hinata_kento/hinata_kento_220705_03.csv',  'hinata_kento/hinata_kento_220729_02.csv'] #西根-けんと 
    # csvname = ['hinata_riku/hinata_riku_220614_01.csv', 'hinata_riku/hinata_riku_220617_03.csv', 'hinata_riku/hinata_riku_220620_02.csv', 'hinata_riku/hinata_riku_220627_01.csv', 'hinata_riku/hinata_riku_220705_01.csv', 'hinata_riku/hinata_riku_220705_02(2).csv', 'hinata_riku/hinata_riku_220705_02.csv', 'hinata_riku/hinata_riku_220705_03(2).csv' , 'hinata_riku/hinata_riku_220705_03.csv'] #西根-りく
    # csvname = ['keisuke_kento/keisuke_kento_220614_01.csv', 'keisuke_kento/keisuke_kento_220617_03.csv', 'keisuke_kento/keisuke_kento_220620_02.csv',  'keisuke_kento/keisuke_kento_220627_01.csv', 'keisuke_kento/keisuke_kento_220707_01.csv', 'keisuke_kento/keisuke_kento_220707_02(2).csv', 'keisuke_kento/keisuke_kento_220707_02.csv', 'keisuke_kento/keisuke_kento_220707_03(2).csv', 'keisuke_kento/keisuke_kento_220707_03.csv'] #けんと-けいすけ 
    # csvname = ['keisuke_riku/keisuke_riku_220614_01.csv', 'keisuke_riku/keisuke_riku_220617_03.csv', 'keisuke_riku/keisuke_riku_220620_02.csv', 'keisuke_riku/keisuke_riku_220627_01.csv', 'keisuke_riku/keisuke_riku_220707_01.csv', 'keisuke_riku/keisuke_riku_220707_02(2).csv', 'keisuke_riku/keisuke_riku_220707_02.csv', 'keisuke_riku/keisuke_riku_220707_03(2).csv' , 'keisuke_riku/keisuke_riku_220707_03.csv'] #けいすけ-りく
    # csvname = ['riku_kento/riku_kento_220614_01.csv', 'riku_kento/riku_kento_220617_03.csv', 'riku_kento/riku_kento_220620_02.csv', 'riku_kento/riku_kento_220628_01.csv', 'riku_kento/riku_kento_220705_01.csv', 'riku_kento/riku_kento_220705_02(2).csv', 'riku_kento/riku_kento_220705_02.csv', 'riku_kento/riku_kento_220705_03(2).csv', 'riku_kento/riku_kento_220705_03.csv'] #りく-けんと

   

    for i,filename in enumerate(csvname):
        # c = pd.read_csv(filename,encoding='shift_jis') #,encoding='utf_8_sig'
        c = pd.read_csv(filename) #,encoding='utf_8_sig'
        c.dropna(inplace=True)
        path = filename.split('/')[0]
        filename = filename.split('/')[1]
        print(path, filename)
        transformation(c, filename, path)



def transformation(csv, filename, path):
    # csv['mae_x'] = csv['mae_x'] * 1920
    # csv['mae_y'] = csv['mae_y'] * 1080
    # csv['usiro_x'] = csv['usiro_x'] 
    # csv['usiro_y'] = csv['usiro_y'] 
    # csv['yoko_x'] = csv['yoko_x'] 
    # csv['yoko_y'] = csv['yoko_y'] 


    fx1 = 1731.0472651876423
    fy1 = 1727.3655573277219
    fx2 = 1735.4867255002316
    fy2 = 1723.3777724034492

    Cx1 = 979.04541349819635
    Cy1 = 543.76481058371292
    Cx2 = 953.99653252839494
    Cy2 = 527.98858416498570

    # Cx1 = 1920 - 979.04541349819635
    # Cy1 = 1080 - 543.76481058371292
    # Cx2 = 1920 -953.99653252839494
    # Cy2 = 1080 - 527.98858416498570

    # tz1 = 11.0 #7.35
    tz1 = 6.25 #7.35

    tz2 = 14.7
    csv['raw_x'] = 0.
    csv['raw_y'] = 0.
    csv['raw_z'] = 0.
    csv['offset_x'] = 0.
    csv['offset_z'] = 0.
    csv['court_x'] = 0.
    csv['court_z'] = 0.

    offset_x = 0
    offset_z = 0

    for index, row in csv.iterrows():
        
        if index == 0:
            A = np.array([[-fx1, 0., -Cx1 + row['offset_usiro_x']],
            [Cy2 - row['offset_yoko_y'], fy1 + fy2, -Cy1 + row['offset_usiro_y']],
            [Cx2 - row['offset_yoko_x'], 0., -fx2]])
            b = np.array([(-row['offset_usiro_x'] + Cx1) * tz1, (-row['offset_usiro_y'] + Cy1) * tz1 + (row['offset_yoko_y'] - Cy2) * tz2, (row['offset_yoko_x'] - Cx2) * tz2])    ##横、後ろカメラでもできるように、この辺の計算式をいじくる
            x = np.linalg.solve(A, b)
            x = x * np.array([1, -1, -1]) #ワールド座標の定義をxそのまま、y上向き、z前向きに変換する
            offset_x = x[0]
            offset_z = x[2]
            csv.at[0, 'offset_x'] = offset_x 
            csv.at[0, 'offset_z'] = offset_z
            print(offset_x, offset_z)
       



        # A = np.array([[fx1, 0., Cx1 - row['mae_x']],
        #     [Cy2 - row['yoko_y'], fy1 + fy2, Cy1 - row['mae_y']],
        #     [Cx2 - row['yoko_x'], 0., -fx2]])

        # b = np.array([(row['mae_x'] - Cx1) * tz1, (row['mae_y'] - Cy1) * tz1 + (row['yoko_y'] - Cy2) * tz2, (row['yoko_x'] - Cx2) * tz2])    ##横、後ろカメラでもできるように、この辺の計算式をいじくる

        A = np.array([[-fx1, 0., -Cx1 + row['usiro_x']],
            [Cy2 - row['yoko_y'], fy1 + fy2, -Cy1 + row['usiro_y']],
            [Cx2 - row['yoko_x'], 0., -fx2]])

        b = np.array([(-row['usiro_x'] + Cx1) * tz1, (-row['usiro_y'] + Cy1) * tz1 + (row['yoko_y'] - Cy2) * tz2, (row['yoko_x'] - Cx2) * tz2])    ##横、後ろカメラでもできるように、この辺の計算式をいじくる

        x = np.linalg.solve(A, b)
        #print(A)
        #print(b)
        x = x * np.array([1, -1, -1]) #ワールド座標の定義をxそのまま、y上向き、z前向きに変換する
        print(x)
        
        csv.at[index, 'raw_x'] = x[0]
        csv.at[index, 'raw_y'] = x[1]
        csv.at[index, 'raw_z'] = x[2]

        csv.at[index, 'court_x'] = x[0] - offset_x + 4.5 
        csv.at[index, 'court_z'] = x[2] - offset_z + 4

    # csv['mae_x'] = csv['mae_x'] / 1920
    # csv['mae_y'] = csv['mae_y'] / 1080
    # csv['usiro_x'] = csv['usiro_x']
    # csv['usiro_y'] = csv['usiro_y']
    # csv['yoko_x'] = csv['yoko_x']
    # csv['yoko_y'] = csv['yoko_y'] 
    csv.to_csv(path +'\\trans_' + filename, index=False) #,encoding='utf_8_sig'


if __name__ == '__main__':
    main()