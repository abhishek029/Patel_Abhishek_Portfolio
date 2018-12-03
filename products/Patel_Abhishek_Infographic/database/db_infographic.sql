-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 02, 2018 at 01:08 PM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_infographic`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_promotext`
--

DROP TABLE IF EXISTS `tbl_promotext`;
CREATE TABLE IF NOT EXISTS `tbl_promotext` (
  `promo_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `promo_title` varchar(225) NOT NULL,
  `promo_label` text NOT NULL,
  `promo_text` text NOT NULL,
  PRIMARY KEY (`promo_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_promotext`
--

INSERT INTO `tbl_promotext` (`promo_id`, `promo_title`, `promo_label`, `promo_text`) VALUES
(1, 'Promo Text', 'Amplify Your Reach \r\nWith Influencer Marketing', 'Find the right social media influencers for your business using a smart influencer marketing platform. Extend your reach to acquire new customers and audiences.'),
(2, 'Footer Text', '', 'Added footer info here');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
