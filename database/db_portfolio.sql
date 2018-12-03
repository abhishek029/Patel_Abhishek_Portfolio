-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 03, 2018 at 05:35 AM
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
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_about`
--

DROP TABLE IF EXISTS `tbl_about`;
CREATE TABLE IF NOT EXISTS `tbl_about` (
  `about_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(175) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(125) NOT NULL,
  PRIMARY KEY (`about_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_about`
--

INSERT INTO `tbl_about` (`about_id`, `name`, `description`, `image`) VALUES
(1, 'Abhishek Patel', 'Hello everyone, I am interested in Front-End and Back-End languages such as JavaScript, PHP, Java, SQL Database, etc. I love to code and I can design and create videos too if required.', 'profile.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contact`
--

DROP TABLE IF EXISTS `tbl_contact`;
CREATE TABLE IF NOT EXISTS `tbl_contact` (
  `contact_id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_name` varchar(175) NOT NULL,
  `contact_email` varchar(175) NOT NULL,
  `contact_message` text NOT NULL,
  PRIMARY KEY (`contact_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_work`
--

DROP TABLE IF EXISTS `tbl_work`;
CREATE TABLE IF NOT EXISTS `tbl_work` (
  `work_id` int(11) NOT NULL AUTO_INCREMENT,
  `work_title` varchar(250) NOT NULL,
  `work_description` text NOT NULL,
  `work_thumbnail` varchar(125) NOT NULL,
  `work_repolink` varchar(225) NOT NULL,
  `work_productlink` varchar(225) NOT NULL,
  PRIMARY KEY (`work_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_work`
--

INSERT INTO `tbl_work` (`work_id`, `work_title`, `work_description`, `work_thumbnail`, `work_repolink`, `work_productlink`) VALUES
(1, 'Infographic', 'The information shown on this page was of Infulance Marketing. Animation are related to each other and the charts are used where necessary.', 'infographic_thumb.jpg', 'https://github.com/abhishek029/Patel_Abhishek_Infographic.git', 'products/Patel_Abhishek_Infographic/index.html'),
(2, 'Bug Game', 'This project was created to develop a simple game. I have added a countdown to end the game and display the result on alert.', 'bug_thumb.jpg', 'https://github.com/abhishek029/bugs-game.git', 'products/bugs-game/index.html'),
(3, 'Pure volume', 'This was our first team project. I was developer in this and I have used foundation in this page and created our advertisement and a commercial video for them.', 'purevolume_thumb.jpg', 'https://github.com/destanol/bootcamp.git', 'products/bootcamp/index.html'),
(4, 'Infuser Bottle', 'This project was on Infuser Bottle brand. We were supposed to create all brand documents. We came up with this product after doing color study and other basic requirements of product. We focused a lot on typography and selected that font. We added rubber cover too for extra protection and adding grip to hands.', 'infuserbottle_thumb', 'https://github.com/abhishek029/infuserBottle.git', 'products/infuserbottle/index.html'),
(5, 'Soccer Video', 'In this project we created a sports environment where big banners were shown and giant screens was divided in parts and playing a video on it.', 'soccer_thumb.jpg', 'https://github.com/abhishek029/soccerVideo.git', 'products/soccer/index.html'),
(6, 'Car Build', 'We have selected the car and done its cinema 4D work till now. We are supposed to build a interactive app which shows all the parts of car when user hover over to some part.', 'car_thumb.jpg', 'https://github.com/abhishek029/Patel_Abhishek_Han_Ly_AutoApp.git', 'products/Patel_Abhishek_Han_Ly_AutoApp/index.html');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
