import keyboard
import time
time_sta = time.time()
# judge_a = 0
# judge_b = 0
import datetime

dt_now = datetime.datetime.now()

print(dt_now)

while True:
    # if(judge_a == 1 and judge_b == 1):
        # break
    # else:
     if keyboard.read_key() == "b":
        print("You pressed b")
        time_end = time.time()
        
        
        tim = time_end- time_sta
        dt_now = datetime.datetime.now()
        print(dt_now)
        print("けんと：", tim)
        # judge_a = 1
        # break
     if keyboard.is_pressed("."):
        print("You pressed .")
        time_end = time.time()
        tim = time_end- time_sta
        dt_now = datetime.datetime.now()

        print(dt_now)
        print("りく：", tim)
        # judge_b = 1
# while True:


#     if keyboard.is_pressed("."):
#         print("You pressed .")
#         time_end = time.time()
#         tim = time_end- time_sta
#         print("かかった時間：", tim)
#         break
        
# keyboard.on_press_key("r", lambda _:print("You pressed r"))
# v = input("続行するには何かキーを押してください > ")

# time_end = time.time()
# print(v)
# tim = time_end- time_sta
# print("かかった時間：", tim)