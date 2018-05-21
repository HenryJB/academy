-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2018 at 11:45 AM
-- Server version: 10.1.22-MariaDB
-- PHP Version: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `delyork`
--

-- --------------------------------------------------------

--
-- Table structure for table `abouts`
--

CREATE TABLE `abouts` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `body` text NOT NULL,
  `photo` varchar(255) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `abouts`
--

INSERT INTO `abouts` (`id`, `title`, `body`, `photo`, `date`) VALUES
(4, '<div class=\"blackColor\">Who We								<span class=\"redColor\" style=\"background-color:transparent !important; display:inline!important; padding:0px !important\">Are</span>							</div>', '<p class=\"innersmall\">Del-York is a full service marketing communications firm, capable of delivering integrated communication projects suited to meet client&rsquo;s needs. We believe the working relationship and communication between a brand and its consumers should consistently be engaging, consumers only react to conversations that get their interests. Our creative excellence and strategy, combined with our experience working with several top brands over the years, have the power to change the course of companies and brands alike. At the very core, that&rsquo;s who we are, but the people on the other side of these pages are more than that, we are thorough professionals made for one purpose only, to conquer the norm, and facilitate truly epoch making executions for brands and businesses</p>', 'b2.jpg', '2018-04-23');

-- --------------------------------------------------------

--
-- Table structure for table `africa_states_tbl`
--

CREATE TABLE `africa_states_tbl` (
  `state_id` int(11) NOT NULL,
  `state_name` varchar(40) CHARACTER SET latin1 NOT NULL,
  `country` varchar(40) CHARACTER SET latin1 NOT NULL,
  `zip_code` varchar(4) CHARACTER SET latin1 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `africa_states_tbl`
--

INSERT INTO `africa_states_tbl` (`state_id`, `state_name`, `country`, `zip_code`) VALUES
(3, 'Alger', 'Algeria', ''),
(4, 'Annaba', 'Algeria', ''),
(5, 'Batna ', 'Algeria', ''),
(6, 'Bechar ', 'Algeria', ''),
(7, 'Bejaia ', 'Algeria', ''),
(8, 'Biskra ', 'Algeria', ''),
(9, 'Blida ', 'Algeria', ''),
(10, 'Chlef ', 'Algeria', ''),
(11, 'Constantine', 'Algeria', ''),
(12, 'Ghardaïa ', 'Algeria', ''),
(13, 'Mostaganem ', 'Algeria', ''),
(14, 'Oran', 'Algeria', ''),
(15, 'Setif', 'Algeria', ''),
(16, 'Sidi Bel Abbès', 'Algeria', ''),
(17, 'Skikda ', 'Algeria', ''),
(18, 'Tébessa ', 'Algeria', ''),
(19, 'Tiaret ', 'Algeria', ''),
(20, 'Tlemcen ', 'Algeria', ''),
(21, 'Benguela ', 'Angola', ''),
(22, 'Huambo ', 'Angola', ''),
(23, 'Luanda ', 'Angola', ''),
(24, 'Namibe', 'Angola', ''),
(25, 'Atacora ', 'Benin', ''),
(26, 'Atlantique ', 'Benin', ''),
(27, 'Borgou ', 'Benin', ''),
(28, 'Oueme', 'Benin', ''),
(29, 'Francistown', 'Botswana', ''),
(30, 'Gaborone', 'Botswana', ''),
(31, 'Boulkiemdé ', 'Burkina faso', ''),
(32, 'Houet ', 'Burkina faso', ''),
(33, 'Kadiogo ', 'Burkina faso', ''),
(34, 'Bujumbura  ', 'Burundi', ''),
(35, 'Centre ', 'Cameroon', ''),
(36, 'Extreme-Nord ', 'Cameroon', ''),
(37, 'Littoral ', 'Cameroon', ''),
(38, 'Nord ', 'Cameroon', ''),
(39, 'Nord-Ouest', 'Cameroon', ''),
(40, 'Ouest ', 'Cameroon', ''),
(41, 'Sud-Ouest ', 'Cameroon', ''),
(42, 'Adamaoua', 'Cameroon', ''),
(43, 'Est', 'Cameroon', ''),
(44, 'Sud', 'Cameroon', ''),
(45, 'Atacora', 'Benin', ''),
(46, 'Atlantique ', 'Benin', ''),
(47, 'Borgou', 'Benin', ''),
(48, 'Queme', 'Benin', ''),
(49, 'Tarrafal', 'Cape Verde', ''),
(50, 'Brava', 'Cape Verde', ''),
(51, 'Malo', 'Cape Verde', ''),
(52, 'Mosteiros', 'Cape Verde', ''),
(53, 'Paul', 'Cape Verde', ''),
(54, 'Prala', 'Cape Verde', ''),
(55, 'Ribeira Grande', 'Cape Verde', ''),
(56, 'Sal', 'Cape Verde', ''),
(57, 'Santa Catarina', 'Cape Verde', ''),
(58, 'Santa Cruz', 'Cape Verde', ''),
(59, 'Boa Vista', 'Cape Verde', ''),
(60, 'Sao Miguel', 'Cape Verde', ''),
(61, 'Sao Nicolau', 'Cape Verde', ''),
(62, 'Sao Vicente', 'Cape Verde', ''),
(63, 'Sao Domingos', 'Cape Verde', ''),
(64, 'Bangul', 'Central African Republic', ''),
(65, 'Mambere-kadel', 'Central African Republic', ''),
(66, 'Quaka', 'Central African Republic', ''),
(67, 'Ombella-Mkpoko', 'Central African Republic', ''),
(68, 'Lobaye', 'Central African Republic', ''),
(69, 'Ouham-pende', 'Central African Republic', ''),
(70, 'Nana-Mambere', 'Central African Republic', ''),
(71, 'Mbomou', 'Central African Republic', ''),
(72, 'Ouham', 'Central African Republic', ''),
(73, 'Sangha-Mbaere', 'Central African Republic', ''),
(74, 'Kemo', 'Central African Republic', ''),
(75, 'Haute-Kotto', 'Central African Republic', ''),
(76, 'Nana-Grebizi', 'Central African Republic', ''),
(77, 'Basse-Kotto', 'Central African Republic', ''),
(78, 'Haut-Mbomou', 'Central African Republic', ''),
(79, 'Bamingul-Bangoran', 'Central African Republic', ''),
(80, 'Cuvette-Quest', 'Central African Republic', ''),
(81, 'Moyen-Chari  ', 'Chad', ''),
(82, 'Logone Occidental  ', 'Chad', ''),
(83, 'Chari-Baguirmi  ', 'Chad', ''),
(84, 'Mayo-Kebbi', 'Chad', ''),
(85, 'Quaddai  ', 'Chad', ''),
(86, 'Tandjile  ', 'Chad', ''),
(87, 'Guera  ', 'Chad', ''),
(88, 'Batha  ', 'Chad', ''),
(89, 'Logone Oriental  ', 'Chad', ''),
(90, 'Kanem  ', 'Chad', ''),
(91, 'Salamat  ', 'Chad', ''),
(92, 'Borkou-Ennedi-Tibesti', 'Chad', ''),
(93, 'Biltine  ', 'Chad', ''),
(94, 'Lac  ', 'Chad', ''),
(95, 'Brazzaville  ', 'Congo', ''),
(96, 'Niari', 'Congo', ''),
(97, 'Bouenza  ', 'Congo', ''),
(98, 'Plateaux', 'Congo', ''),
(99, 'Kouilou  ', 'Congo', ''),
(100, 'Likouala', 'Congo', ''),
(101, 'Sangha', 'Congo', ''),
(102, 'Lekoumou', 'Congo', ''),
(103, 'Cuvette  ', 'Congo', ''),
(104, 'Pool', 'Congo', ''),
(105, 'Salamat  ', 'Chad', ''),
(106, 'Cuvette-Quest', 'Chad', ''),
(107, 'Brazzaville  ', 'Cote DIvoire', ''),
(108, 'Lagunes', 'Cote DIvoire', ''),
(109, 'Valle du Bandama', 'Cote DIvoire', ''),
(110, 'Bas-Sassandra', 'Cote DIvoire', ''),
(111, 'Haut-Sassandra', 'Cote DIvoire', ''),
(112, 'Savenes', 'Cote DIvoire', ''),
(113, 'Fromager', ' Cote DIvoire', ''),
(114, 'Sud-Bandama', 'Cote DIvoire', ''),
(115, 'Moyen-Comoe', 'Cote DIvoire', ''),
(116, 'Marahoue', 'Cote DIvoire', ''),
(117, 'Dix-Hult Montagnes', 'Cote DIvoire', ''),
(118, 'Agneby', 'Cote DIvoire', ''),
(119, 'Nzi-Comoe', 'Cote DIvoire', ''),
(120, 'Worodougou', 'Cote DIvoire', ''),
(121, 'Zanzan', 'Cote DIvoire', ''),
(122, 'Denguele', 'Cote DIvoire', ''),
(123, 'Moyen-Cavally', 'Cote DIvoire', ''),
(124, 'Lacs', 'Cote DIvoire', ''),
(125, 'Sud-Comoe', 'Cote DIvoire', ''),
(126, 'Bafing', 'Cote DIvoire', ''),
(127, 'Abia', 'Nigeria', '+234'),
(128, 'Adamawa', 'Nigeria', '+234'),
(129, 'Akwa Ibom', 'Nigeria', '+234'),
(130, 'Anambra', 'Nigeria', '+234'),
(131, 'Bauchi', 'Nigeria', '+234'),
(132, 'Benue', 'Nigeria', '+234'),
(133, 'Bornu', 'Nigeria', '+234'),
(134, 'Cross River', 'Nigeria', '+234'),
(135, ' Delta ', 'Nigeria', '+234'),
(136, 'Ebonyi', 'Nigeria', '+234'),
(137, 'Edo', 'Nigeria', '+234'),
(139, 'Enugu ', 'Nigeria', '+234'),
(140, 'Gombe', 'Nigeria', '+234'),
(141, 'Imo', 'Nigeria', '+234'),
(142, 'Jigawa', 'Nigeria', '+234'),
(143, 'Kaduna', 'Nigeria', '+234'),
(144, 'Kano', 'Nigeria', '+234'),
(145, 'Katsina', 'Nigeria', '+234'),
(146, 'Kebbi', 'Nigeria', '+234'),
(147, 'Kogi', 'Nigeria', '+234'),
(148, 'Lagos', 'Nigeria', '+234'),
(149, 'Niger', 'Nigeria', '+234'),
(150, 'Nasarawa', 'Nigeria', '+234'),
(151, 'Ondo', 'Nigeria', '+234'),
(152, 'Ogun', 'Nigeria', '+234'),
(153, 'Osun', 'Nigeria', '+234'),
(154, 'Oyo', 'Nigeria', '+234'),
(155, 'Plateau', 'Nigeria', '+234'),
(156, 'River', 'Nigeria', '+234'),
(157, 'Sokoto', 'Nigeria', '+234'),
(158, 'Taraba', 'Nigeria', '+234'),
(159, 'Zamfara', 'Nigeria', '+234'),
(160, 'FCT', 'Nigeria', '+234');

-- --------------------------------------------------------

--
-- Table structure for table `alumni`
--

CREATE TABLE `alumni` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `contact_address` varchar(200) DEFAULT NULL,
  `occupation` varchar(200) DEFAULT NULL,
  `year` varchar(200) DEFAULT NULL,
  `country` varchar(200) DEFAULT NULL,
  `state_id` varchar(200) DEFAULT NULL,
  `dob` varchar(200) DEFAULT NULL,
  `photo` varchar(250) DEFAULT NULL,
  `facebook` varchar(200) DEFAULT NULL,
  `instagram` varchar(200) DEFAULT NULL,
  `twitter` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `post` text NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `author` varchar(200) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `post`, `photo`, `author`, `date`) VALUES
(1, 'FRESH SUMMER CAMPAIGN', '<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue</p>', 'b1.jpg', 'Del-York', '2018-04-24'),
(2, 'FRESH SUMMER CAMPAIGN', '<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue</p>', 'b2.jpg', 'Del-York', '2018-04-24'),
(3, 'FRESH SUMMER CAMPAIGN', '<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue</p>', 'b3.jpg', 'Del-York', '2018-04-24'),
(4, 'FRESH SUMMER CAMPAIGN', '<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue</p>', 'content.jpg', 'Del-York', '2018-04-24');

-- --------------------------------------------------------

--
-- Table structure for table `ceo`
--

CREATE TABLE `ceo` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ceo`
--

INSERT INTO `ceo` (`id`, `content`) VALUES
(1, '<p>A Progressive Media, Business &amp; Leadership Executive, Social Entreprenuer &amp; Leading Advocate for Africa&rsquo;s Creative Economy</p>'),
(2, '<p>How we perceive ourselves influences what is possible. It is an oft quoted piece of advice that if &ldquo;you can dream it, you can become it.&rdquo; At Del-York, we know this is true. We add one extra piece: If you see it, you can become it. Let us create a new public dream for Africa, helping millions of Africans to see their ingenuity, creativity, and beauty. Let us dream a dream so big and so bold it cannot help but succeed. We are Africa United, and our time has come.</p>\r\n<p>&nbsp;<a href=\"http://delyorkinternational.com\">LINUS IDAHOSA</a>Founder/CEO</p>');

-- --------------------------------------------------------

--
-- Table structure for table `ceo_photos`
--

CREATE TABLE `ceo_photos` (
  `id` int(11) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ceo_photos`
--

INSERT INTO `ceo_photos` (`id`, `photo`, `description`) VALUES
(1, '1.jpg', 'Mr. Linus IDAHOSA at Buckingham Palace on the invitation of Her Majesty Queen Elizabeth at the Queens Young Leaders awards in London (2015)'),
(2, '2.jpg', ''),
(3, '3.jpg', 'Former President of Ghana Jerry Rawlings and Linus IDAHOSA in his Home in Accra on the conferment of Jerry Rawlings as Grand Patron of the DEL-YORK UNITED AFRICA CREATIVE INDUSTRY INITIATIVE'),
(4, '4.jpg', 'President Kenneth Kaunda, Founding Father of Zambia hosts Linus Idahosa in His Country Home as DEL-YORK Partners with the Zambian National Broadcasting Corporation (ZNBC) and the Government of Zambia to build capacity for Zambia’s Creative Industry'),
(5, '5.jpg', 'Former President Olusegun Obasanjo and Wife of the Ogun State Governor Mrs. Olufunsho Amosun takes Linus Idahosa on a Tour of Chief Olusegun Obasanjo Presidential Library in Abeokuta'),
(6, '6.jpg', 'Linus IDAHOSA receives HONOURARY DOCTORATE DEGREE from The London Graduate School, ALBION COLLEGE, United Kingdom'),
(7, '7.jpg', ''),
(8, '8.jpg', 'Linus IDAHOSA with US Consul General Joseph Stafford, Amstrong and US Congressman Kent Williams after the event'),
(9, '9.jpg', 'Linus Idahosa (middle) hosts the full faculty of lecturers of the New-York Film Academy in Abuja, Nigeria'),
(10, '10.jpg', 'Linus IDAHOSA addressing a Nigeria summit (The Platform) in Abuja'),
(11, '11.jpg', 'Linus Idahosa in Washington DC with the President and Executive Directors of the Washington Time'),
(12, '12.jpg', 'Linus Idahosa flanked by some graduating students'),
(13, '13.jpg', 'Linus Idahosa and the chairman of Flour Mills Africa');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `logo` varchar(255) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `name`, `description`, `logo`, `date`) VALUES
(1, 'GAC Motor', '<p>GAC motors</p>', 'gacmotor_color.png', '2018-04-25'),
(2, 'GREE', '<p>GREE</p>', 'gree_color.png', '2018-04-25'),
(3, 'LONTOR', '<p>LONTOR</p>', 'lontor_color.png', '2018-04-25'),
(4, 'DSTV', '<p>DSTV</p>', 'dstv_color.png', '2018-04-25');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(40) NOT NULL,
  `phone_number` varchar(14) NOT NULL,
  `message` text NOT NULL,
  `status` enum('New','Replied','','') NOT NULL DEFAULT 'New',
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `course_category` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `course_category`, `name`, `description`) VALUES
(1, 2, 'Directing', ''),
(2, 1, 'Screenwriting', ''),
(3, 1, 'Scoring For Film & Multimedia', '');

-- --------------------------------------------------------

--
-- Table structure for table `courses_categories`
--

CREATE TABLE `courses_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `courses_categories`
--

INSERT INTO `courses_categories` (`id`, `name`) VALUES
(2, 'Arts'),
(1, 'Film-making'),
(3, 'Media'),
(4, 'Technology');

-- --------------------------------------------------------

--
-- Table structure for table `emails`
--

CREATE TABLE `emails` (
  `id` int(11) NOT NULL,
  `sender_email` varchar(100) DEFAULT NULL,
  `receiver_email` varchar(100) DEFAULT NULL,
  `email_template_id` int(11) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emails`
--

INSERT INTO `emails` (`id`, `sender_email`, `receiver_email`, `email_template_id`, `date`) VALUES
(1, 'from me', 'admin@naijacatchnews.com', 1, '08/05/2018'),
(2, 'Aderojuolaayomide57@gmail.com', 'admin@naijacatchnews.com', 1, '08/05/2018'),
(3, 'Aderojuolaayomide57@gmail.com', 'admin@naijacatchnews.com', 1, '08/05/2018'),
(4, 'Aderojuolaayomide57@gmail.com', 'admin@naijacatchnews.com', 1, '08/05/2018');

-- --------------------------------------------------------

--
-- Table structure for table `email_template`
--

CREATE TABLE `email_template` (
  `id` int(11) NOT NULL,
  `type` varchar(200) DEFAULT NULL,
  `subject` varchar(200) DEFAULT NULL,
  `body` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `email_template`
--

INSERT INTO `email_template` (`id`, `type`, `subject`, `body`) VALUES
(1, 'payment statusp', 'payment status', '<p>dear customer kindly pay your admission fee</p>\r\n<p>thank you</p>');

-- --------------------------------------------------------

--
-- Table structure for table `migration`
--

CREATE TABLE `migration` (
  `version` varchar(180) NOT NULL,
  `apply_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `migration`
--

INSERT INTO `migration` (`version`, `apply_time`) VALUES
('m000000_000000_base', 1523418271),
('m130524_201442_init', 1523418276);

-- --------------------------------------------------------

--
-- Table structure for table `portfolios`
--

CREATE TABLE `portfolios` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `subtitle` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `client_id` int(11) NOT NULL,
  `year` year(4) DEFAULT NULL,
  `websiteurl` varchar(255) DEFAULT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `portfolios`
--

INSERT INTO `portfolios` (`id`, `title`, `subtitle`, `description`, `client_id`, `year`, `websiteurl`, `date`) VALUES
(1, 'Gree Branding', 'Product Rebranding', '<p>Gree Air condiontioners</p>', 2, 2017, 'www.gree.com.ng', '2018-04-25'),
(2, 'GAC Motor', 'Product branding', '<p>Product branding</p>', 1, 2017, 'www.gacmotor.com.ng', '2018-04-25'),
(3, 'Lontor', 'Lontor products Branding', '<p>Lontor products Branding</p>', 3, 2017, 'www.lontorpay.com.ng', '2018-04-25'),
(4, 'DSTV', 'DCA Campaign', '<p>DCA Campaign</p>', 4, 2014, 'www.dstv.com', '2018-04-25');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio_images`
--

CREATE TABLE `portfolio_images` (
  `id` int(11) NOT NULL,
  `portfolio_id` int(11) NOT NULL,
  `photos` varchar(255) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `portfolio_images`
--

INSERT INTO `portfolio_images` (`id`, `portfolio_id`, `photos`, `date`) VALUES
(1, 1, 'gac_v1.jpg', '2018-04-25'),
(2, 1, 'gac_v3.jpg', '2018-04-25'),
(3, 1, 'gac_v4.jpg', '2018-04-25'),
(4, 1, 'gac_v5.jpg', '2018-04-25');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `photo` varchar(150) DEFAULT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `content`, `photo`, `date`) VALUES
(1, 'DIGITAL', '<p>Our teams of digital designers are well known for attention to detail and out-of-the-box thinking. Their creativity is matched<br />with long-term experience in using an array of digital design softwares that enables them interpret your brief<br />and bring them to life through stunning visual solutions.<br />&lt;ul&gt;<br />&lt;li&gt; 4a. Marketing: We create and monitor social media accounts professionally, infusing content creation with timely<br />posts, and participating in pop culture, developing social media campaigns that engage users and drives sales.<br />&lt;/li&gt;<br />&lt;li&gt;4b. Web app development: We design websites and apps that are consistent with your brand identity and deliver<br />an unforgettable consumer experience.&lt;/li&gt;<br />&lt;/ul&gt;</p>', NULL, '2018-04-23'),
(3, 'MEDIA/MARKETING', '<p>From concept development to design and execution, Del &ndash; York Media creates stunning marketing media, to guarantee that you<br />make the best first impression. Our team comprises of a group of talented, innovative and analytical minds; schooled<br />in the art of interpreting creative briefs for national and international TV formats, documentaries and print.<br />&lt;ul&gt;<br />&lt;li&gt;<br />1a. New product development: NPD requires an understanding of customer needs and wants, the competitive environment, and<br />the nature of the market. At Del &ndash; York Media, we monitor cost, time and quality; which are the main variables<br />that drive customer needs. Aiming at these three variables, we develop continuous practices and strategies to<br />better satisfy customer requirements and to increase your own market share by a regular development of new products.<br />&lt;/li&gt;<br />&lt;li&gt;<br />1b. Content Creation: Del &ndash; York Media creates content for print, audio, video and any other media for distribution, marketing<br />and/or publication. Typical forms of content creation for digital include maintaining and updating websites,<br />blogging, videography, and online commentary, the maintenance of social media accounts, and editing and distribution<br />of digital media.<br />&lt;/li&gt;<br />&lt;li&gt;<br />1c. Media buying and planning: We purchase and make placement of media content on both international and local platforms<br />including video, audio, and print media. We have built strong relationships with major broadcast houses across<br />Europe, Middle East, Asia, Africa and the United States; we have helped maximize the visibility of our clients<br />on platforms like CNN, BBC, CCTV, Bloomberg, CNBC and Aljazeera.<br />&lt;/li&gt;<br />&lt;/ul&gt;</p>', NULL, '2018-04-23'),
(4, 'PUBLIC RELATIONS', '<p>Del &ndash; York Media develops a strategic communication process that builds mutually beneficial relationships between organizations<br />and their publics.<br />&lt;ul&gt;<br />&lt;li&gt;2a. Corporate Social Responsibility: Del &ndash; York media works with your organization to develop CSR campaigns that<br />further some social good. From conceptualization to execution, we guarantee great campaigns to give your organization<br />relevant social recognition. &lt;/li&gt;<br />&lt;li&gt;<br />2b. Activations / Experiential Campaigns: Del &ndash; York media works with your organization to design product activations, launches<br />and experiential campaigns to boost awareness to your brand. We provide excellent support from conceptualization<br />to execution.</p>\r\n<p>&lt;/li&gt;<br />&lt;li&gt;<br />2c. Special Projects: Del &ndash; York media works with your organization to ensure seamless media support for special projects<br />like annual sports events, fashion and more. We ensure world class production of your special projects.<br />&lt;/li&gt;<br />&lt;li&gt;<br />2d. Events Management: Del &ndash; York media provides events management services, for corporate events. From venue sourcing, to<br />decoration, catering and of course, media deployment.<br />&lt;/li&gt;<br />&lt;/ul&gt;</p>', NULL, '2018-04-23'),
(5, 'STUDIOS', '<p>We have a world class pre-production and post-production studio facility in Lagos, Nigeria committed to the creation of award<br />winning film projects.<br />&lt;ul&gt;<br />&lt;li&gt;<br />3a. Film Production: Television commercials, documentaries and much more. We have a highly skilled team of producers, animators,<br />scriptwriters and graphic artists, who can together produce some of the smartest campaigns for corporates in<br />both private and public sectors.<br />&lt;/li&gt;<br />&lt;li&gt;3b. Animation: With state of the art technology, we create animation for commercials, informative and educative<br />stories&lt;/li&gt;<br />&lt;/ul&gt;</p>', NULL, '2018-04-23');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `gender` enum('M','F','','') NOT NULL,
  `email_address` varchar(100) NOT NULL,
  `contact_address` text NOT NULL,
  `occupation` varchar(255) NOT NULL,
  `year` year(4) NOT NULL,
  `payment_status` enum('paid','not paid','','') NOT NULL DEFAULT 'not paid',
  `approval_status` enum('approved','not approved','pending','') NOT NULL DEFAULT 'not approved',
  `country` varchar(150) NOT NULL,
  `state_id` int(11) NOT NULL,
  `date_of_birth` date NOT NULL,
  `first_choice` int(11) NOT NULL,
  `second_choice` int(11) DEFAULT NULL,
  `reason` text NOT NULL,
  `propose_project` text NOT NULL,
  `information_source` enum('Advertisements','Blog','Bronchure','Google','Facebook','Instagram','DCA Alumni','Word of Mouth','TV Commercials','Linkedin','Twitter','Youtube','Others') NOT NULL,
  `sponsor_aid` tinyint(1) DEFAULT NULL,
  `sponsorship_status` tinyint(1) NOT NULL,
  `terms_condition` tinyint(1) NOT NULL,
  `date_registered` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `first_name`, `last_name`, `gender`, `email_address`, `contact_address`, `occupation`, `year`, `payment_status`, `approval_status`, `country`, `state_id`, `date_of_birth`, `first_choice`, `second_choice`, `reason`, `propose_project`, `information_source`, `sponsor_aid`, `sponsorship_status`, `terms_condition`, `date_registered`) VALUES
(1, 'Spencer', 'Emmanuel', 'M', 'spencer@mail.com', 'Abuja', '', 2018, 'not paid', 'not approved', 'Nigeria', 127, '1971-05-10', 1, NULL, 'I want to be more professional in directing', '', 'Google', 0, 0, 1, '2018-05-06'),
(2, 'Henry', 'Bature', 'M', 'henry@forexbid.com', 'Abuja', '', 2018, 'not paid', 'not approved', 'Nigeria', 127, '1971-05-10', 3, 3, 'I want to be more professional in film-making', '', 'Google', 0, 0, 1, '2018-05-06'),
(3, 'Michael', 'Sunday', 'M', 'mic@mail.com', '13, Amiralty way Lekki Phase1 Lagos', 'Student', 2018, 'not paid', 'not approved', ' Cote DIvoire', 35, '2018-05-08', 1, NULL, 'I want to know more', '', 'Bronchure', 1, 0, 1, '2018-05-07');

-- --------------------------------------------------------

--
-- Table structure for table `student_projects`
--

CREATE TABLE `student_projects` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `auth_key` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `password_hash` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password_reset_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` smallint(6) NOT NULL DEFAULT '10',
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `auth_key`, `password_hash`, `password_reset_token`, `email`, `status`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'LBxiT7QpBTNuOOC1Nqi3H4BcsW3ZKLFJ', '$2y$13$t6J.AsA/YEdhLnwVDfbdZ.6.OCJb5UTa.Ih15SgwDbqIzvl3HsbXO', NULL, 'admin@delyork.com', 10, 1523418682, 1523418682);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `abouts`
--
ALTER TABLE `abouts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `africa_states_tbl`
--
ALTER TABLE `africa_states_tbl`
  ADD PRIMARY KEY (`state_id`);

--
-- Indexes for table `alumni`
--
ALTER TABLE `alumni`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ceo`
--
ALTER TABLE `ceo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ceo_photos`
--
ALTER TABLE `ceo_photos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `FK_CoursesCategoryCourse` (`course_category`);

--
-- Indexes for table `courses_categories`
--
ALTER TABLE `courses_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `emails`
--
ALTER TABLE `emails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `email_template`
--
ALTER TABLE `email_template`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migration`
--
ALTER TABLE `migration`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `portfolios`
--
ALTER TABLE `portfolios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_PorfolioClient` (`client_id`);

--
-- Indexes for table `portfolio_images`
--
ALTER TABLE `portfolio_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_PortfolioImage` (`portfolio_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_address` (`email_address`);

--
-- Indexes for table `student_projects`
--
ALTER TABLE `student_projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `password_reset_token` (`password_reset_token`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `abouts`
--
ALTER TABLE `abouts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `africa_states_tbl`
--
ALTER TABLE `africa_states_tbl`
  MODIFY `state_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=161;
--
-- AUTO_INCREMENT for table `alumni`
--
ALTER TABLE `alumni`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `ceo`
--
ALTER TABLE `ceo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `ceo_photos`
--
ALTER TABLE `ceo_photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `courses_categories`
--
ALTER TABLE `courses_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `emails`
--
ALTER TABLE `emails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `email_template`
--
ALTER TABLE `email_template`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `portfolios`
--
ALTER TABLE `portfolios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `portfolio_images`
--
ALTER TABLE `portfolio_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `student_projects`
--
ALTER TABLE `student_projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `FK_CoursesCategoryCourse` FOREIGN KEY (`course_category`) REFERENCES `courses_categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `portfolios`
--
ALTER TABLE `portfolios`
  ADD CONSTRAINT `FK_PorfolioClient` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`);

--
-- Constraints for table `portfolio_images`
--
ALTER TABLE `portfolio_images`
  ADD CONSTRAINT `FK_PortfolioImage` FOREIGN KEY (`portfolio_id`) REFERENCES `portfolios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
