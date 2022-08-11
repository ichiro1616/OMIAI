-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- ホスト: 127.0.0.1
-- 生成日時: 2022-08-11 02:30:53
-- サーバのバージョン： 10.4.24-MariaDB
-- PHP のバージョン: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- データベース: `omiai_db`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `movie`
--

CREATE TABLE `movie` (
  `movie_id` int(11) NOT NULL,
  `movie_categorize` int(11) NOT NULL,
  `stop_time` int(11) NOT NULL,
  `movie_path` text COLLATE utf8_bin NOT NULL,
  `left_player_id` int(11) NOT NULL,
  `right_player_id` int(11) NOT NULL,
  `left_player_x` float NOT NULL,
  `left_player_y` float NOT NULL,
  `right_player_x` float NOT NULL,
  `right_player_y` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- テーブルのデータのダンプ `movie`
--

INSERT INTO `movie` (`movie_id`, `movie_categorize`, `stop_time`, `movie_path`, `left_player_id`, `right_player_id`, `left_player_x`, `left_player_y`, `right_player_x`, `right_player_y`) VALUES
(1, 1, 231, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(2, 1, 580, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(3, 1, 925, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(4, 1, 1304, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(5, 1, 1667, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(6, 1, 2040, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(7, 1, 2367, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(8, 1, 2741, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(9, 1, 3129, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(10, 1, 3603, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(11, 1, 3986, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(12, 1, 4402, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(13, 1, 4789, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(14, 1, 5151, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(15, 1, 5586, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(16, 1, 5968, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(17, 1, 6362, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(18, 1, 6751, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(19, 1, 7113, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(20, 1, 7491, '..\\movie\\riku_kento\\usiro\\after\\220614_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(21, 2, 167, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(22, 2, 553, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(23, 2, 942, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(24, 2, 1331, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(25, 2, 1715, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(26, 2, 2084, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(27, 2, 2491, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(28, 2, 2872, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(29, 2, 3265, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(30, 2, 3633, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(31, 2, 4006, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(32, 2, 4381, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(33, 2, 4775, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(34, 2, 5138, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(35, 2, 5497, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(36, 2, 5876, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(37, 2, 6261, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(38, 2, 6625, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(39, 2, 6992, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(40, 2, 7358, '..\\movie\\riku_kento\\usiro\\after\\220617_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(41, 3, 171, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(42, 3, 545, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(43, 3, 874, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(44, 3, 1203, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(45, 3, 1539, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(46, 3, 1888, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(47, 3, 2208, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(48, 3, 2616, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(49, 3, 2910, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(50, 3, 3223, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(51, 3, 3547, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(52, 3, 3841, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(53, 3, 4144, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(54, 3, 4465, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(55, 3, 4804, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(56, 3, 5115, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(57, 3, 5427, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(58, 3, 5792, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(59, 3, 6147, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(60, 3, 6502, '..\\movie\\riku_kento\\usiro\\after\\220620_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(61, 4, 181, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(62, 4, 463, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(63, 4, 762, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(64, 4, 1072, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(65, 4, 1390, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(66, 4, 1715, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(67, 4, 2057, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(68, 4, 2384, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(69, 4, 2726, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(70, 4, 3036, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(71, 4, 3352, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(72, 4, 3631, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(73, 4, 3940, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(74, 4, 4233, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(75, 4, 4536, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(76, 4, 4854, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(77, 4, 5168, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(78, 4, 5454, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(79, 4, 5757, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(80, 4, 6043, '..\\movie\\riku_kento\\usiro\\after\\220628_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(81, 5, 175, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(82, 5, 451, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(83, 5, 726, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(84, 5, 986, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(85, 5, 1272, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(86, 5, 1605, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(87, 5, 1930, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(88, 5, 2263, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(89, 5, 2566, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(90, 5, 2849, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(91, 5, 3161, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(92, 5, 3481, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(93, 5, 3793, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(94, 5, 4093, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(95, 5, 4396, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(96, 5, 4736, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(97, 5, 5052, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(98, 5, 5346, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(99, 5, 5703, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(100, 5, 6015, '..\\movie\\riku_kento\\usiro\\after\\220705_01.mp4', 5, 4, 3.3, 4.9, 5.7, 4.9),
(101, 6, 204, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(102, 6, 472, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(103, 6, 842, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(104, 6, 1183, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(105, 6, 1524, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(106, 6, 1882, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(107, 6, 2211, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(108, 6, 2564, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(109, 6, 2904, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(110, 6, 3236, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(111, 6, 3628, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(112, 6, 3971, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(113, 6, 4332, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(114, 6, 4685, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(115, 6, 5051, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(116, 6, 5387, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(117, 6, 5741, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(118, 6, 6093, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(119, 6, 6438, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(120, 6, 6805, '..\\movie\\riku_kento\\usiro\\after\\220705_02(2).mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(121, 7, 229, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(122, 7, 549, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(123, 7, 835, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(124, 7, 1182, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(125, 7, 1482, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(126, 7, 1792, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(127, 7, 2082, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(128, 7, 2431, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(129, 7, 2745, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(130, 7, 3039, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(131, 7, 3350, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(132, 7, 3661, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(133, 7, 4033, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(134, 7, 4368, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(135, 7, 4695, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(136, 7, 5030, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(137, 7, 5348, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(138, 7, 5660, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(139, 7, 6006, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(140, 7, 6332, '..\\movie\\riku_kento\\usiro\\after\\220705_02.mp4', 4, 5, 5.37, 3.66, 3.7, 4.9),
(141, 8, 203, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(142, 8, 564, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(143, 8, 904, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(144, 8, 1227, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(145, 8, 1560, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(146, 8, 1896, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(147, 8, 2221, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(148, 8, 2560, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(149, 8, 2893, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(150, 8, 3263, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(151, 8, 3613, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(152, 8, 3957, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(153, 8, 4280, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(154, 8, 4601, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(155, 8, 4923, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(156, 8, 5269, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(157, 8, 5640, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(158, 8, 5971, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(159, 8, 6320, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(160, 8, 6683, '..\\movie\\riku_kento\\usiro\\after\\220705_03(2).mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(161, 9, 205, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(162, 9, 549, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(163, 9, 899, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(164, 9, 1214, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(165, 9, 1522, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(166, 9, 1854, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(167, 9, 2364, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(168, 9, 2710, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(169, 9, 3031, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(170, 9, 3371, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(171, 9, 3702, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(172, 9, 4028, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(173, 9, 4376, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(174, 9, 4695, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(175, 9, 5021, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(176, 9, 5339, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(177, 9, 5657, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(178, 9, 5974, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(179, 9, 6329, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66),
(180, 9, 6686, '..\\movie\\riku_kento\\usiro\\after\\220705_03.mp4', 4, 5, 5.3, 4.9, 4.2, 3.66);

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`movie_id`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `movie`
--
ALTER TABLE `movie`
  MODIFY `movie_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=181;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
