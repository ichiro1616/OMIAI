-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- ホスト: 127.0.0.1
-- 生成日時: 2022-07-07 05:08:05
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
(1, 1, 153, '/Movie/sample1.mp4', 1, 3, 5, 5, 6, 6),
(2, 1, 437, '/Movie/sample1.mp4', 1, 3, 5, 5, 6, 6),
(3, 2, 200, '/Movie/sample2.mp4', 2, 4, 6, 6, 7, 7),
(4, 2, 1312, '/Movie/sample2.mp4', 2, 4, 6, 6, 7, 7),
(5, 3, 170, '/Movie/sample3.mp4', 3, 5, 2, 2, 4, 4),
(6, 3, 310, '/Movie/sample3.mp4', 3, 5, 2, 2, 4, 4),
(7, 4, 300, '/Movie/sample4.mp4', 4, 5, 4, 4, 6, 6),
(8, 4, 450, '/Movie/sample4.mp4', 4, 5, 4, 4, 6, 6),
(9, 5, 150, '/Movie/sample5.mp4', 6, 1, 5, 5, 4, 4),
(10, 5, 250, '/Movie/sample5.mp4', 6, 1, 5, 5, 4, 4),
(11, 6, 180, '/Movie/sample6.mp4', 3, 1, 3, 5, 3, 4),
(12, 6, 310, '/Movie/sample6.mp4', 3, 1, 3, 5, 3, 4),
(13, 7, 120, '/Movie/sample7.mp4', 4, 3, 10, 2, 5, 7),
(14, 7, 240, '/Movie/sample7.mp4', 4, 3, 10, 2, 5, 7);

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
  MODIFY `movie_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
