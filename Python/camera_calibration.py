# -*- using:utf-8 -*-

import sys
import os
import os.path
import glob
import cv2
import numpy as np



CAPTUREDDIR = './iphone8-2'
CALIBFLAG = cv2.CALIB_USE_INTRINSIC_GUESS # + cv2.CALIB_FIX_K3


def calibFromImages(dirname, chess_shape, chess_block_size):
    if not os.path.exists(dirname):
        print('Directory \'' + dirname + '\' was not found')
        return None

    filenames = sorted(glob.glob(dirname + '/*'))
    if len(filenames) == 0:
        print('No image was found in \'' + dirname + '\'')
        return None

    print('=== Camera Calibration ===')

    objp = np.zeros((chess_shape[0]*chess_shape[1], 3), np.float32)
    objp[:, :2] = chess_block_size * \
        np.mgrid[0:chess_shape[0], 0:chess_shape[1]].T.reshape(-1, 2)

    print('Finding chess corners in input images ...')
    objp_list = []
    imgp_list = []
    img_shape = None
    for f in filenames:
        root, ext = os.path.splitext(f)
        if ext != '.jpg':
            continue
        
        print('  ' + f + ' : ', end='')
        img = cv2.imread(f, cv2.IMREAD_GRAYSCALE)
        if img_shape is None:pyth
            img_shape = img.shape
        elif img_shape != img.shape:
            print('Mismatch size')
            continue
        ret, imgp = cv2.findChessboardCorners(img, chess_shape, None)
        if ret:
            print('Found')
            objp_list.append(objp)
            imgp_list.append(imgp)
        else:
            print('Not found')

    print(' ', len(objp_list), 'images are used')

    #fx, fyは適当な初期値でもだいたい同じ値に収束する。Cx, Cyは画面中心にしておく
    initmat = np.array([[1700., 0., 960.],
                        [0., 1700., 540.],
                        [0., 0., 1.]])
    ret, cam_int, cam_dist, rvecs, tvecs = cv2.calibrateCamera(
        objp_list, imgp_list, img_shape, initmat, None, None, None, CALIBFLAG
    )
    print('Image size :', img_shape)
    print('RMS :', ret)
    print('Intrinsic parameters :')
    print(cam_int)
    print('Distortion parameters :')
    print(cam_dist)
    print()

    # fovx, fovy, focalLength, principalPoint, aspectRatio = cv2.calibrationMatrixValues(cam_int, img_shape, 4.93, 2.77)
    
    # print(fovx)
    # print(fovy)
    # print(focalLength)
    # print(principalPoint)
    # print(aspectRatio)

    rmtxs = list(map(lambda vec: cv2.Rodrigues(vec)[0], rvecs))

    fs = cv2.FileStorage('calibration.xml', cv2.FILE_STORAGE_WRITE)
    fs.write('img_shape', img_shape)
    fs.write('rms', ret)
    fs.write('intrinsic', cam_int)
    fs.write('distortion', cam_dist)
    fs.write('rotation_vectors', np.array(rvecs))
    fs.write('rotation_matrixes', np.array(rmtxs))
    fs.write('translation_vectors', np.array(tvecs))
    fs.release()

    return (img_shape, ret, cam_int, cam_dist, rvecs, tvecs)


if __name__ == '__main__':

    chess_shape = (9, 6)
    chess_block_size = 24
    #chess_shape = (10, 7)
    #chess_block_size = 21

    calibFromImages(CAPTUREDDIR, chess_shape, chess_block_size)


    #if len(sys.argv) == 4:
    #    chess_shape = (int(sys.argv[1]), int(sys.argv[2]))
    #    chess_block_size = float(sys.argv[3])

    #    calibFromImages(CAPTUREDDIR, chess_shape, chess_block_size)
    #else:
    #    print('Usage :')
    #    print('  Save captured images into \'' + CAPTUREDDIR + '\'')
    #    print(
    #        '  Run \'python3 caliblate_camera_from_images.py <num of chess corners in vert> <num of chess corners in hori> <chess block size(m or mm)>')
