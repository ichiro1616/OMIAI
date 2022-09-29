-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- ホスト: 127.0.0.1
-- 生成日時: 2022-09-28 08:28:32
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
-- テーブルの構造 `collective`
--

CREATE TABLE `collective` (
  `collective_id` int(11) NOT NULL,
  `generation` int(11) NOT NULL,
  `rotation` int(11) NOT NULL,
  `experience_years` int(11) NOT NULL,
  `Sub_Ob` int(11) NOT NULL,
  `player_id` int(11) NOT NULL,
  `x_coordinate` float NOT NULL,
  `y_coordinate` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- テーブルのデータのダンプ `collective`
--

INSERT INTO `collective` (`collective_id`, `generation`, `rotation`, `experience_years`, `Sub_Ob`, `player_id`, `x_coordinate`, `y_coordinate`, `datetime`) VALUES
(1, 0, 0, 2, 0, 1, 50, 10, '2022-09-21 08:46:11'),
(2, 1, 0, 2, 0, 1, 50, 10, '2022-09-21 08:46:11'),
(3, 0, 0, 2, 0, 2, 432.8, 209.2, '2022-09-21 08:46:12'),
(4, 1, 0, 2, 0, 2, 438.2, 233.5, '2022-09-21 08:46:12'),
(5, 0, 0, 2, 0, 3, 764.6, 397.2, '2022-09-21 08:46:12'),
(6, 1, 0, 2, 0, 3, 740.9, 377.5, '2022-09-21 08:46:12'),
(7, 0, 0, 2, 0, 4, 766, 844, '2022-09-21 08:46:13'),
(8, 1, 0, 2, 0, 4, 737.6, 829.4, '2022-09-21 08:46:13'),
(9, 0, 0, 2, 0, 5, 323.4, 845.2, '2022-09-21 08:46:13'),
(10, 1, 0, 2, 0, 5, 307.5, 817.1, '2022-09-21 08:46:13'),
(11, 0, 0, 2, 0, 6, 263, 538.2, '2022-09-21 08:46:13'),
(12, 1, 0, 2, 0, 6, 222, 486, '2022-09-21 08:46:14'),
(13, 0, 1, 2, 0, 1, 550, 10, '2022-09-21 08:46:15'),
(14, 1, 1, 2, 0, 1, 550, 10, '2022-09-21 08:46:15'),
(15, 0, 1, 2, 0, 2, 749.6, 465.8, '2022-09-21 08:46:15'),
(16, 1, 1, 2, 0, 2, 739.4, 397.5, '2022-09-21 08:46:16'),
(17, 0, 1, 2, 0, 3, 752.8, 857.2, '2022-09-21 08:46:16'),
(18, 1, 1, 2, 0, 3, 735.6, 846.5, '2022-09-21 08:46:16'),
(19, 0, 1, 2, 0, 4, 470.8, 556.6, '2022-09-21 08:46:16'),
(20, 1, 1, 2, 0, 4, 464.4, 536, '2022-09-21 08:46:16'),
(21, 0, 1, 2, 0, 5, 307.6, 885.8, '2022-09-21 08:46:17'),
(22, 1, 1, 2, 0, 5, 283.6, 879.4, '2022-09-21 08:46:17'),
(23, 0, 1, 2, 0, 6, 200.2, 354, '2022-09-21 08:46:17'),
(24, 1, 1, 2, 0, 6, 180.1, 362, '2022-09-21 08:46:17'),
(25, 0, 2, 2, 0, 1, 840, 10, '2022-09-21 08:46:19'),
(26, 1, 2, 2, 0, 1, 840, 10, '2022-09-21 08:46:19'),
(27, 0, 2, 2, 0, 2, 817.8, 513.2, '2022-09-21 08:46:19'),
(28, 1, 2, 2, 0, 2, 777.5, 491.4, '2022-09-21 08:46:19'),
(29, 0, 2, 2, 0, 3, 752.6, 857.4, '2022-09-21 08:46:19'),
(30, 1, 2, 2, 0, 3, 739.9, 851.1, '2022-09-21 08:46:20'),
(31, 0, 2, 2, 0, 4, 288, 941.8, '2022-09-21 08:46:20'),
(32, 1, 2, 2, 0, 4, 302.3, 934.7, '2022-09-21 08:46:20'),
(33, 0, 2, 2, 0, 5, 144, 376.8, '2022-09-21 08:46:20'),
(34, 1, 2, 2, 0, 5, 148.8, 385.5, '2022-09-21 08:46:21'),
(35, 0, 2, 2, 0, 6, 507, 284.8, '2022-09-21 08:46:21'),
(36, 1, 2, 2, 0, 6, 486.7, 292.6, '2022-09-21 08:46:21'),
(37, 0, 3, 2, 0, 1, 878.2, 539, '2022-09-21 08:46:22'),
(38, 1, 3, 2, 0, 1, 871.7, 496.5, '2022-09-21 08:46:22'),
(39, 0, 3, 2, 0, 2, 787, 870.6, '2022-09-21 08:46:23'),
(40, 1, 3, 2, 0, 2, 795.5, 866.7, '2022-09-21 08:46:23'),
(41, 0, 3, 2, 0, 3, 312.6, 930.2, '2022-09-21 08:46:23'),
(42, 1, 3, 2, 0, 3, 295, 895.7, '2022-09-21 08:46:23'),
(43, 0, 3, 2, 0, 4, 267.6, 404.2, '2022-09-21 08:46:24'),
(44, 1, 3, 2, 0, 4, 213.8, 387.1, '2022-09-21 08:46:24'),
(45, 0, 3, 2, 0, 5, 426, 400.6, '2022-09-21 08:46:24'),
(46, 1, 3, 2, 0, 5, 458.9, 330.5, '2022-09-21 08:46:24'),
(47, 0, 3, 2, 0, 6, 727.2, 408, '2022-09-21 08:46:24'),
(48, 1, 3, 2, 0, 6, 720.7, 365.5, '2022-09-21 08:46:25'),
(49, 0, 4, 2, 0, 1, 341.2, 366.8, '2022-09-21 08:46:26'),
(50, 1, 4, 2, 0, 1, 340.1, 397.3, '2022-09-21 08:46:26'),
(51, 0, 4, 2, 0, 2, 307, 928, '2022-09-21 08:46:26'),
(52, 1, 4, 2, 0, 2, 305.6, 920.8, '2022-09-21 08:46:26'),
(53, 0, 4, 2, 0, 3, 181.8, 457, '2022-09-21 08:46:27'),
(54, 1, 4, 2, 0, 3, 165.8, 471.5, '2022-09-21 08:46:27'),
(55, 0, 4, 2, 0, 4, 492.2, 235.8, '2022-09-21 08:46:27'),
(56, 1, 4, 2, 0, 4, 491.1, 266.3, '2022-09-21 08:46:27'),
(57, 0, 4, 2, 0, 5, 708.2, 507.2, '2022-09-21 08:46:28'),
(58, 1, 4, 2, 0, 5, 708.7, 493, '2022-09-21 08:46:28'),
(59, 0, 4, 2, 0, 6, 751.2, 860, '2022-09-21 08:46:28'),
(60, 1, 4, 2, 0, 6, 752.5, 852.2, '2022-09-21 08:46:28'),
(61, 0, 5, 2, 0, 1, 24.8, 542.4, '2022-09-21 08:46:29'),
(62, 1, 5, 2, 0, 1, 22.9, 547.1, '2022-09-21 08:46:30'),
(63, 0, 5, 2, 0, 2, 175.8, 411.4, '2022-09-21 08:46:30'),
(64, 1, 5, 2, 0, 2, 173.9, 416.1, '2022-09-21 08:46:30'),
(65, 0, 5, 2, 0, 3, 484.6, 338.6, '2022-09-21 08:46:30'),
(66, 1, 5, 2, 0, 3, 471.4, 367.5, '2022-09-21 08:46:31'),
(67, 0, 5, 2, 0, 4, 775.2, 517.4, '2022-09-21 08:46:31'),
(68, 1, 5, 2, 0, 4, 745.4, 496.2, '2022-09-21 08:46:31'),
(69, 0, 5, 2, 0, 5, 768.6, 818, '2022-09-21 08:46:31'),
(70, 1, 5, 2, 0, 5, 759.4, 813.3, '2022-09-21 08:46:31'),
(71, 0, 5, 2, 0, 6, 325.8, 941.8, '2022-09-21 08:46:32'),
(72, 1, 5, 2, 0, 6, 329, 941.4, '2022-09-21 08:46:32'),
(73, 2, 0, 2, 0, 1, 50, 10, '2022-09-22 07:28:08'),
(74, 2, 0, 2, 0, 2, 438.2, 233.5, '2022-09-22 07:28:09'),
(75, 2, 0, 2, 0, 3, 740.9, 377.5, '2022-09-22 07:28:09'),
(76, 2, 0, 2, 0, 4, 737.6, 829.4, '2022-09-22 07:28:09'),
(77, 2, 0, 2, 0, 5, 307.5, 817.1, '2022-09-22 07:28:09'),
(78, 2, 0, 2, 0, 6, 222, 486, '2022-09-22 07:28:10'),
(79, 2, 1, 2, 0, 1, 550, 10, '2022-09-22 07:28:11'),
(80, 2, 1, 2, 0, 2, 739.4, 397.5, '2022-09-22 07:28:11'),
(81, 2, 1, 2, 0, 3, 735.6, 846.5, '2022-09-22 07:28:11'),
(82, 2, 1, 2, 0, 4, 464.4, 536, '2022-09-22 07:28:11'),
(83, 2, 1, 2, 0, 5, 283.6, 879.4, '2022-09-22 07:28:12'),
(84, 2, 1, 2, 0, 6, 180.1, 362, '2022-09-22 07:28:12'),
(85, 2, 2, 2, 0, 1, 840, 10, '2022-09-22 07:28:13'),
(86, 2, 2, 2, 0, 2, 777.5, 491.4, '2022-09-22 07:28:13'),
(87, 2, 2, 2, 0, 3, 739.9, 851.1, '2022-09-22 07:28:14'),
(88, 2, 2, 2, 0, 4, 302.3, 934.7, '2022-09-22 07:28:14'),
(89, 2, 2, 2, 0, 5, 148.8, 385.5, '2022-09-22 07:28:14'),
(90, 2, 2, 2, 0, 6, 486.7, 292.6, '2022-09-22 07:28:14'),
(91, 2, 3, 2, 0, 1, 871.7, 496.5, '2022-09-22 07:28:16'),
(92, 2, 3, 2, 0, 2, 795.5, 866.7, '2022-09-22 07:28:16'),
(93, 2, 3, 2, 0, 3, 295, 895.7, '2022-09-22 07:28:16'),
(94, 2, 3, 2, 0, 4, 213.8, 387.1, '2022-09-22 07:28:16'),
(95, 2, 3, 2, 0, 5, 458.9, 330.5, '2022-09-22 07:28:16'),
(96, 2, 3, 2, 0, 6, 720.7, 365.5, '2022-09-22 07:28:17'),
(97, 2, 4, 2, 0, 1, 340.1, 397.3, '2022-09-22 07:28:18'),
(98, 2, 4, 2, 0, 2, 305.6, 920.8, '2022-09-22 07:28:18'),
(99, 2, 4, 2, 0, 3, 165.8, 471.5, '2022-09-22 07:28:18'),
(100, 2, 4, 2, 0, 4, 491.1, 266.3, '2022-09-22 07:28:19'),
(101, 2, 4, 2, 0, 5, 708.7, 493, '2022-09-22 07:28:19'),
(102, 2, 4, 2, 0, 6, 752.5, 852.2, '2022-09-22 07:28:19'),
(103, 2, 5, 2, 0, 1, 22.9, 547.1, '2022-09-22 07:28:20'),
(104, 2, 5, 2, 0, 2, 173.9, 416.1, '2022-09-22 07:28:20'),
(105, 2, 5, 2, 0, 3, 471.4, 367.5, '2022-09-22 07:28:21'),
(106, 2, 5, 2, 0, 4, 745.4, 496.2, '2022-09-22 07:28:21'),
(107, 2, 5, 2, 0, 5, 759.4, 813.3, '2022-09-22 07:28:21'),
(108, 2, 5, 2, 0, 6, 329, 941.4, '2022-09-22 07:28:21'),
(109, 3, 0, 2, 0, 1, 50, 10, '2022-09-22 07:34:42'),
(110, 3, 0, 2, 0, 2, 442.933, 311.8, '2022-09-22 07:34:42'),
(111, 3, 0, 2, 0, 3, 747.267, 375, '2022-09-22 07:34:42'),
(112, 3, 0, 2, 0, 4, 712.133, 777.6, '2022-09-22 07:34:43'),
(113, 3, 0, 2, 0, 5, 292.2, 783, '2022-09-22 07:34:43'),
(114, 3, 0, 2, 0, 6, 201.333, 447.333, '2022-09-22 07:34:43'),
(115, 3, 1, 2, 0, 1, 550, 10, '2022-09-22 07:34:44'),
(116, 3, 1, 2, 0, 2, 736.8, 387, '2022-09-22 07:34:44'),
(117, 3, 1, 2, 0, 3, 732.533, 806.867, '2022-09-22 07:34:45'),
(118, 3, 1, 2, 0, 4, 468.533, 523.333, '2022-09-22 07:34:45'),
(119, 3, 1, 2, 0, 5, 293.733, 827.067, '2022-09-22 07:34:45'),
(120, 3, 1, 2, 0, 6, 173.4, 364.667, '2022-09-22 07:34:45'),
(121, 3, 2, 2, 0, 1, 840, 10, '2022-09-22 07:34:47'),
(122, 3, 2, 2, 0, 2, 780.067, 465.2, '2022-09-22 07:34:47'),
(123, 3, 2, 2, 0, 3, 690.067, 774.467, '2022-09-22 07:34:47'),
(124, 3, 2, 2, 0, 4, 317.4, 875.8, '2022-09-22 07:34:47'),
(125, 3, 2, 2, 0, 5, 149.333, 349.267, '2022-09-22 07:34:48'),
(126, 3, 2, 2, 0, 6, 473.533, 318.4, '2022-09-22 07:34:48'),
(127, 3, 3, 2, 0, 1, 880.533, 494.667, '2022-09-22 07:34:49'),
(128, 3, 3, 2, 0, 2, 739.533, 789.4, '2022-09-22 07:34:49'),
(129, 3, 3, 2, 0, 3, 308, 859.667, '2022-09-22 07:34:50'),
(130, 3, 3, 2, 0, 4, 224, 407.533, '2022-09-22 07:34:50'),
(131, 3, 3, 2, 0, 5, 448.733, 310.867, '2022-09-22 07:34:50'),
(132, 3, 3, 2, 0, 6, 729.533, 363.667, '2022-09-22 07:34:50'),
(133, 3, 4, 2, 0, 1, 322.267, 400.8, '2022-09-22 07:34:52'),
(134, 3, 4, 2, 0, 2, 308.8, 865.467, '2022-09-22 07:34:52'),
(135, 3, 4, 2, 0, 3, 172.533, 467, '2022-09-22 07:34:52'),
(136, 3, 4, 2, 0, 4, 473.267, 269.8, '2022-09-22 07:34:52'),
(137, 3, 4, 2, 0, 5, 717, 477.467, '2022-09-22 07:34:52'),
(138, 3, 4, 2, 0, 6, 741, 818.4, '2022-09-22 07:34:53'),
(139, 3, 5, 2, 0, 1, 18.2667, 531.733, '2022-09-22 07:34:54'),
(140, 3, 5, 2, 0, 2, 169.267, 400.733, '2022-09-22 07:34:54'),
(141, 3, 5, 2, 0, 3, 501.6, 345.8, '2022-09-22 07:34:54'),
(142, 3, 5, 2, 0, 4, 745.6, 487.333, '2022-09-22 07:34:55'),
(143, 3, 5, 2, 0, 5, 729.733, 769, '2022-09-22 07:34:55'),
(144, 3, 5, 2, 0, 6, 327.2, 873.333, '2022-09-22 07:34:55'),
(145, 4, 0, 2, 0, 1, 50, 10, '2022-09-22 07:36:59'),
(146, 4, 0, 2, 0, 2, 447.2, 326.35, '2022-09-22 07:36:59'),
(147, 4, 0, 2, 0, 3, 750.45, 373.75, '2022-09-22 07:36:59'),
(148, 4, 0, 2, 0, 4, 689.1, 733.2, '2022-09-22 07:36:59'),
(149, 4, 0, 2, 0, 5, 296.65, 737.25, '2022-09-22 07:37:00'),
(150, 4, 0, 2, 0, 6, 191, 428, '2022-09-22 07:37:00'),
(151, 4, 1, 2, 0, 1, 550, 10, '2022-09-22 07:37:01'),
(152, 4, 1, 2, 0, 2, 742.6, 382.75, '2022-09-22 07:37:01'),
(153, 4, 1, 2, 0, 3, 704.4, 755.15, '2022-09-22 07:37:02'),
(154, 4, 1, 2, 0, 4, 466.4, 485, '2022-09-22 07:37:02'),
(155, 4, 1, 2, 0, 5, 297.8, 770.3, '2022-09-22 07:37:02'),
(156, 4, 1, 2, 0, 6, 170.05, 366, '2022-09-22 07:37:02'),
(157, 4, 2, 2, 0, 1, 840, 10, '2022-09-22 07:37:03'),
(158, 4, 2, 2, 0, 2, 775.05, 441.4, '2022-09-22 07:37:04'),
(159, 4, 2, 2, 0, 3, 672.55, 730.85, '2022-09-22 07:37:04'),
(160, 4, 2, 2, 0, 4, 315.55, 806.85, '2022-09-22 07:37:04'),
(161, 4, 2, 2, 0, 5, 152, 354.45, '2022-09-22 07:37:04'),
(162, 4, 2, 2, 0, 6, 470.15, 331.3, '2022-09-22 07:37:05'),
(163, 4, 3, 2, 0, 1, 888.15, 496.25, '2022-09-22 07:37:06'),
(164, 4, 3, 2, 0, 2, 709.65, 742.05, '2022-09-22 07:37:06'),
(165, 4, 3, 2, 0, 3, 308.5, 794.75, '2022-09-22 07:37:06'),
(166, 4, 3, 2, 0, 4, 208, 398.15, '2022-09-22 07:37:06'),
(167, 4, 3, 2, 0, 5, 451.55, 325.65, '2022-09-22 07:37:07'),
(168, 4, 3, 2, 0, 6, 737.15, 365.25, '2022-09-22 07:37:07'),
(169, 4, 4, 2, 0, 1, 318.95, 425.85, '2022-09-22 07:37:08'),
(170, 4, 4, 2, 0, 2, 309.1, 799.1, '2022-09-22 07:37:08'),
(171, 4, 4, 2, 0, 3, 169.4, 442.75, '2022-09-22 07:37:09'),
(172, 4, 4, 2, 0, 4, 469.95, 294.85, '2022-09-22 07:37:09'),
(173, 4, 4, 2, 0, 5, 727.75, 450.6, '2022-09-22 07:37:09'),
(174, 4, 4, 2, 0, 6, 710.75, 763.8, '2022-09-22 07:37:09'),
(175, 4, 5, 2, 0, 1, 15.95, 524.05, '2022-09-22 07:37:11'),
(176, 4, 5, 2, 0, 2, 166.95, 393.05, '2022-09-22 07:37:11'),
(177, 4, 5, 2, 0, 3, 491.2, 351.85, '2022-09-22 07:37:11'),
(178, 4, 5, 2, 0, 4, 749.2, 458, '2022-09-22 07:37:11'),
(179, 4, 5, 2, 0, 5, 702.3, 726.75, '2022-09-22 07:37:12'),
(180, 4, 5, 2, 0, 6, 322.9, 805, '2022-09-22 07:37:12'),
(181, 5, 0, 2, 0, 1, 50, 10, '2022-09-22 07:38:23'),
(182, 5, 0, 2, 0, 2, 449.76, 335.08, '2022-09-22 07:38:24'),
(183, 5, 0, 2, 0, 3, 752.36, 373, '2022-09-22 07:38:24'),
(184, 5, 0, 2, 0, 4, 675.28, 706.56, '2022-09-22 07:38:24'),
(185, 5, 0, 2, 0, 5, 299.32, 709.8, '2022-09-22 07:38:24'),
(186, 5, 0, 2, 0, 6, 184.8, 416.4, '2022-09-22 07:38:24'),
(187, 5, 1, 2, 0, 1, 550, 10, '2022-09-22 07:38:26'),
(188, 5, 1, 2, 0, 2, 746.08, 380.2, '2022-09-22 07:38:26'),
(189, 5, 1, 2, 0, 3, 687.52, 724.12, '2022-09-22 07:38:26'),
(190, 5, 1, 2, 0, 4, 465.12, 462, '2022-09-22 07:38:26'),
(191, 5, 1, 2, 0, 5, 300.24, 736.24, '2022-09-22 07:38:27'),
(192, 5, 1, 2, 0, 6, 168.04, 366.8, '2022-09-22 07:38:27'),
(193, 5, 2, 2, 0, 1, 840, 10, '2022-09-22 07:38:28'),
(194, 5, 2, 2, 0, 2, 772.04, 427.12, '2022-09-22 07:38:28'),
(195, 5, 2, 2, 0, 3, 662.04, 704.68, '2022-09-22 07:38:29'),
(196, 5, 2, 2, 0, 4, 314.44, 765.48, '2022-09-22 07:38:29'),
(197, 5, 2, 2, 0, 5, 153.6, 357.56, '2022-09-22 07:38:29'),
(198, 5, 2, 2, 0, 6, 468.12, 339.04, '2022-09-22 07:38:29'),
(199, 5, 3, 2, 0, 1, 892.72, 497.2, '2022-09-22 07:38:30'),
(200, 5, 3, 2, 0, 2, 691.72, 713.64, '2022-09-22 07:38:31'),
(201, 5, 3, 2, 0, 3, 308.8, 755.8, '2022-09-22 07:38:31'),
(202, 5, 3, 2, 0, 4, 198.4, 392.52, '2022-09-22 07:38:31'),
(203, 5, 3, 2, 0, 5, 453.24, 334.52, '2022-09-22 07:38:31'),
(204, 5, 3, 2, 0, 6, 741.72, 366.2, '2022-09-22 07:38:32'),
(205, 5, 4, 2, 0, 1, 316.96, 440.88, '2022-09-22 07:38:33'),
(206, 5, 4, 2, 0, 2, 309.28, 759.28, '2022-09-22 07:38:33'),
(207, 5, 4, 2, 0, 3, 167.52, 428.2, '2022-09-22 07:38:33'),
(208, 5, 4, 2, 0, 4, 467.96, 309.88, '2022-09-22 07:38:34'),
(209, 5, 4, 2, 0, 5, 734.2, 434.48, '2022-09-22 07:38:34'),
(210, 5, 4, 2, 0, 6, 692.6, 731.04, '2022-09-22 07:38:34'),
(211, 5, 5, 2, 0, 1, 14.56, 519.44, '2022-09-22 07:38:35'),
(212, 5, 5, 2, 0, 2, 165.56, 388.44, '2022-09-22 07:38:35'),
(213, 5, 5, 2, 0, 3, 484.96, 355.48, '2022-09-22 07:38:36'),
(214, 5, 5, 2, 0, 4, 751.36, 440.4, '2022-09-22 07:38:36'),
(215, 5, 5, 2, 0, 5, 685.84, 701.4, '2022-09-22 07:38:36'),
(216, 5, 5, 2, 0, 6, 320.32, 764, '2022-09-22 07:38:36'),
(217, 6, 0, 2, 0, 1, 50, 10, '2022-09-26 10:10:56'),
(218, 6, 0, 2, 0, 2, 451.467, 340.9, '2022-09-26 10:10:56'),
(219, 6, 0, 2, 0, 3, 753.633, 372.5, '2022-09-26 10:10:56'),
(220, 6, 0, 2, 0, 4, 666.067, 688.8, '2022-09-26 10:10:57'),
(221, 6, 0, 2, 0, 5, 301.1, 691.5, '2022-09-26 10:10:57'),
(222, 6, 0, 2, 0, 6, 180.667, 408.667, '2022-09-26 10:10:57'),
(223, 6, 0, 2, 0, 5, 301.1, 691.5, '2022-09-26 10:10:57'),
(224, 6, 1, 2, 0, 1, 550, 10, '2022-09-26 10:10:58'),
(225, 6, 1, 2, 0, 1, 550, 10, '2022-09-26 10:10:58'),
(226, 6, 1, 2, 0, 2, 748.4, 378.5, '2022-09-26 10:10:59'),
(227, 6, 1, 2, 0, 3, 676.267, 703.433, '2022-09-26 10:10:59'),
(228, 6, 1, 2, 0, 4, 464.267, 446.667, '2022-09-26 10:10:59'),
(229, 6, 1, 2, 0, 5, 301.867, 713.533, '2022-09-26 10:10:59'),
(230, 6, 1, 2, 0, 6, 166.7, 367.333, '2022-09-26 10:10:59'),
(231, 6, 2, 2, 0, 1, 840, 10, '2022-09-26 10:11:00'),
(232, 6, 2, 2, 0, 1, 840, 10, '2022-09-26 10:11:00'),
(233, 6, 2, 2, 0, 2, 770.033, 417.6, '2022-09-26 10:11:00'),
(234, 6, 2, 2, 0, 3, 655.033, 687.233, '2022-09-26 10:11:01'),
(235, 6, 2, 2, 0, 4, 313.7, 737.9, '2022-09-26 10:11:01'),
(236, 6, 2, 2, 0, 5, 154.667, 359.633, '2022-09-26 10:11:01'),
(237, 6, 2, 2, 0, 6, 466.767, 344.2, '2022-09-26 10:11:01'),
(238, 6, 3, 2, 0, 1, 895.767, 497.833, '2022-09-26 10:11:02'),
(239, 6, 3, 2, 0, 1, 895.767, 497.833, '2022-09-26 10:11:02'),
(240, 6, 3, 2, 0, 2, 679.767, 694.7, '2022-09-26 10:11:02'),
(241, 6, 3, 2, 0, 3, 309, 729.833, '2022-09-26 10:11:02'),
(242, 6, 3, 2, 0, 4, 192, 388.767, '2022-09-26 10:11:03'),
(243, 6, 3, 2, 0, 5, 454.367, 340.433, '2022-09-26 10:11:03'),
(244, 6, 3, 2, 0, 6, 744.767, 366.833, '2022-09-26 10:11:03'),
(245, 6, 4, 2, 0, 1, 315.633, 450.9, '2022-09-26 10:11:04'),
(246, 6, 4, 2, 0, 1, 315.633, 450.9, '2022-09-26 10:11:04'),
(247, 6, 4, 2, 0, 2, 309.4, 732.733, '2022-09-26 10:11:04'),
(248, 6, 4, 2, 0, 3, 166.267, 418.5, '2022-09-26 10:11:04'),
(249, 6, 4, 2, 0, 4, 466.633, 319.9, '2022-09-26 10:11:04'),
(250, 6, 4, 2, 0, 5, 738.5, 423.733, '2022-09-26 10:11:05'),
(251, 6, 4, 2, 0, 6, 680.5, 709.2, '2022-09-26 10:11:05'),
(252, 6, 5, 2, 0, 1, 13.6333, 516.367, '2022-09-26 10:11:06'),
(253, 6, 5, 2, 0, 1, 13.6333, 516.367, '2022-09-26 10:11:06'),
(254, 6, 5, 2, 0, 2, 164.633, 385.367, '2022-09-26 10:11:06'),
(255, 6, 5, 2, 0, 3, 480.8, 357.9, '2022-09-26 10:11:06'),
(256, 6, 5, 2, 0, 4, 752.8, 428.667, '2022-09-26 10:11:06'),
(257, 6, 5, 2, 0, 5, 674.867, 684.5, '2022-09-26 10:11:06'),
(258, 6, 5, 2, 0, 6, 318.6, 736.667, '2022-09-26 10:11:07'),
(259, 7, 0, 2, 0, 1, 50, 10, '2022-09-27 07:17:32'),
(260, 7, 0, 2, 0, 2, 453.886, 328.086, '2022-09-27 07:17:32'),
(261, 7, 0, 2, 0, 3, 752.943, 371.857, '2022-09-27 07:17:33'),
(262, 7, 0, 2, 0, 4, 667.486, 687.429, '2022-09-27 07:17:33'),
(263, 7, 0, 2, 0, 5, 301.8, 694.771, '2022-09-27 07:17:33'),
(264, 7, 0, 2, 0, 6, 179.143, 405.286, '2022-09-27 07:17:33'),
(265, 7, 1, 2, 0, 1, 550, 10, '2022-09-27 07:17:35'),
(266, 7, 1, 2, 0, 2, 750.057, 377.286, '2022-09-27 07:17:35'),
(267, 7, 1, 2, 0, 3, 668.229, 688.657, '2022-09-27 07:17:35'),
(268, 7, 1, 2, 0, 4, 463.657, 435.714, '2022-09-27 07:17:35'),
(269, 7, 1, 2, 0, 5, 303.029, 697.314, '2022-09-27 07:17:36'),
(270, 7, 1, 2, 0, 6, 165.743, 367.714, '2022-09-27 07:17:36'),
(271, 7, 2, 2, 0, 1, 840, 10, '2022-09-27 07:17:37'),
(272, 7, 2, 2, 0, 2, 768.6, 410.8, '2022-09-27 07:17:37'),
(273, 7, 2, 2, 0, 3, 650.029, 674.771, '2022-09-27 07:17:37'),
(274, 7, 2, 2, 0, 4, 313.171, 718.2, '2022-09-27 07:17:38'),
(275, 7, 2, 2, 0, 5, 155.429, 361.114, '2022-09-27 07:17:38'),
(276, 7, 2, 2, 0, 6, 465.8, 347.886, '2022-09-27 07:17:38'),
(277, 7, 3, 2, 0, 1, 897.943, 498.286, '2022-09-27 07:17:39'),
(278, 7, 3, 2, 0, 2, 671.229, 681.171, '2022-09-27 07:17:40'),
(279, 7, 3, 2, 0, 3, 309.143, 711.286, '2022-09-27 07:17:40'),
(280, 7, 3, 2, 0, 4, 187.429, 386.086, '2022-09-27 07:17:40'),
(281, 7, 3, 2, 0, 5, 455.171, 344.657, '2022-09-27 07:17:40'),
(282, 7, 3, 2, 0, 6, 746.943, 367.286, '2022-09-27 07:17:41'),
(283, 7, 4, 2, 0, 1, 314.686, 458.057, '2022-09-27 07:17:42'),
(284, 7, 4, 2, 0, 2, 309.486, 713.771, '2022-09-27 07:17:42'),
(285, 7, 4, 2, 0, 3, 165.371, 411.571, '2022-09-27 07:17:42'),
(286, 7, 4, 2, 0, 4, 465.686, 327.057, '2022-09-27 07:17:42'),
(287, 7, 4, 2, 0, 5, 741.571, 416.057, '2022-09-27 07:17:43'),
(288, 7, 4, 2, 0, 6, 671.857, 693.6, '2022-09-27 07:17:43'),
(289, 7, 5, 2, 0, 1, 12.9714, 514.171, '2022-09-27 07:17:44'),
(290, 7, 5, 2, 0, 2, 163.971, 383.171, '2022-09-27 07:17:44'),
(291, 7, 5, 2, 0, 3, 477.829, 359.629, '2022-09-27 07:17:45'),
(292, 7, 5, 2, 0, 4, 753.829, 420.286, '2022-09-27 07:17:45'),
(293, 7, 5, 2, 0, 5, 667.029, 672.429, '2022-09-27 07:17:45'),
(294, 7, 5, 2, 0, 6, 317.371, 717.143, '2022-09-27 07:17:45');

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `collective`
--
ALTER TABLE `collective`
  ADD PRIMARY KEY (`collective_id`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `collective`
--
ALTER TABLE `collective`
  MODIFY `collective_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=295;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;