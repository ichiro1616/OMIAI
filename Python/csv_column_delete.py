
import locale
import pandas as pd

encoding = locale.getpreferredencoding()
 
df = pd.read_csv('omiai.csv', encoding = 'utf-8', header = 0)
print(df)
df = df.rename(columns={"objects/1/relative_coordinates/center_x":"center_x", 
                        "objects/1/relative_coordinates/center_y":"center_y"})
#df.to_csv('subjectivity.csv', index = False, columns=['x','y','z'],encoding=encoding) #主観的データ用csv
df.to_csv('yolo_data.csv', index = False, columns=['center_x','center_y'],encoding=encoding) #客観的データ用csv
