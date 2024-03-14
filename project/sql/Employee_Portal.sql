-- -------------------------------------------------------------
-- TablePlus 5.9.0(538)
--
-- https://tableplus.com/
--
-- Database: Employee_Portal
-- Generation Time: 2024-03-13 16:58:46.0000
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `employee_id` int NOT NULL,
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `document`;
CREATE TABLE `document` (
  `employee_id` int NOT NULL,
  `aadhar_url` text,
  `pan_url` text,
  `offer_letter` text,
  `bank_details` text,
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `employee_id` int NOT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `contact_no` bigint DEFAULT NULL,
  `profile_image` text,
  `badge_image` text,
  `slack_url` text,
  `manager_id` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `date_of_joining` date DEFAULT NULL,
  `address` text,
  `pod` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `employee_interests`;
CREATE TABLE `employee_interests` (
  `id` varchar(255) DEFAULT NULL,
  `employee_id` int DEFAULT NULL,
  `interest_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `employee_projects`;
CREATE TABLE `employee_projects` (
  `id` varchar(255) DEFAULT NULL,
  `employee_id` int DEFAULT NULL,
  `project_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `interest_tags`;
CREATE TABLE `interest_tags` (
  `interest_id` varchar(255) NOT NULL,
  `interest_name` varchar(255) DEFAULT NULL,
  `interest_grp_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`interest_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `login_credentials`;
CREATE TABLE `login_credentials` (
  `employee_id` int NOT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `project_tags`;
CREATE TABLE `project_tags` (
  `project_id` varchar(255) NOT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `project_grp_url` varchar(255) DEFAULT NULL,
  `project_manager` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags` (
  `id` int NOT NULL,
  `tag_name` varchar(255) DEFAULT NULL,
  `tag_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `admin` (`employee_id`) VALUES
(1),
(2),
(3);

INSERT INTO `document` (`employee_id`, `aadhar_url`, `pan_url`, `offer_letter`, `bank_details`) VALUES
(1, 'aadhar1', 'pan1', 'offerletter1', 'bank1'),
(2, 'aadhar_url_2', 'pan_url_2', 'offer_letter_url_2', 'bank_details_2'),
(3, 'aadhar_url_3', 'pan_url_3', 'offer_letter_url_3', 'bank_details_3'),
(4, 'aadhar_url_4', 'pan_url_4', 'offer_letter_url_4', 'bank_details_4'),
(5, 'aadhar_url_5', 'pan_url_5', 'offer_letter_url_5', 'bank_details_5'),
(6, 'aadhar_url_6', 'pan_url_6', 'offer_letter_url_6', 'bank_details_6'),
(7, 'aadhar_url_7', 'pan_url_7', 'offer_letter_url_7', 'bank_details_7'),
(8, 'aadhar_url_8', 'pan_url_8', 'offer_letter_url_8', 'bank_details_8'),
(9, 'aadhar_url_9', 'pan_url_9', 'offer_letter_url_9', 'bank_details_9'),
(10, 'aadhar_url_10', 'pan_url_10', 'offer_letter_url_10', 'bank_details_10'),
(11, 'aadhar_url_11', 'pan_url_11', 'offer_letter_url_11', 'bank_details_11'),
(12, 'aadhar_url_12', 'pan_url_12', 'offer_letter_url_12', 'bank_details_12'),
(13, 'aadhar_url_13', 'pan_url_13', 'offer_letter_url_13', 'bank_details_13'),
(14, 'aadhar_url_14', 'pan_url_14', 'offer_letter_url_14', 'bank_details_14'),
(15, 'aadhar_url_15', 'pan_url_15', 'offer_letter_url_15', 'bank_details_15');

INSERT INTO `employee` (`employee_id`, `email_id`, `name`, `level`, `designation`, `contact_no`, `profile_image`, `badge_image`, `slack_url`, `manager_id`, `department`, `date_of_birth`, `date_of_joining`, `address`, `pod`) VALUES
(1, 'john@example.com', 'John Doe', 'Senior', 'Software Engineer', 123456789, 'profile_image_1', 'badge_image_url_1', 'slack_url_1', NULL, 'IT', '1990-05-15', '2010-07-20', '123 Main St, City, Country', 'growth'),
(2, 'jane@example.com', 'Jane Smith', 'Junior', 'Software Engineer', 987654321, 'profile_image_url_2', 'badge_image_url_2', 'slack_url_2', '1', 'IT', '1995-10-25', '2015-03-12', '456 Oak St, City, Country', 'ops'),
(3, 'alice@example.com', 'Alice Johnson', 'Senior', 'Project Manager', 555555555, 'profile_image_url_3', 'badge_image_url_3', 'slack_url_3', NULL, 'Management', '1988-12-10', '2008-02-28', '789 Elm St, City, Country', 'pi'),
(4, 'bob@example.com', 'Bob Anderson', 'Junior', 'UI/UX Designer', 444444444, 'profile_image_url_4', 'badge_image_url_4', 'slack_url_4', '1', 'Design', '1992-07-18', '2014-09-05', '101 Pine St, City, Country', 'platform'),
(5, 'alex@example.com', 'Alex Brown', 'Senior', 'Software Engineer', 777777777, 'profile_image_url_5', 'badge_image_url_5', 'slack_url_5', NULL, 'IT', '1985-03-30', '2005-12-15', '222 Cedar St, City, Country', 'data'),
(6, 'emma@example.com', 'Emma Watson', 'Junior', 'Software Engineer', 123456780, 'profile_image_url_6', 'badge_image_url_6', 'slack_url_6', '2', 'IT', '1993-09-05', '2016-06-10', '333 Maple St, City, Country', 'marketing'),
(7, 'michael@example.com', 'Michael Johnson', 'Senior', 'Software Engineer', 987643210, 'profile_image_url_7', 'badge_image_url_7', 'slack_url_7', '2', 'IT', '1987-06-20', '2007-08-30', '444 Walnut St, City, Country', 'collections'),
(8, 'sophia@example.com', 'Sophia Brown', 'Junior', 'UI/UX Designer', 555555555, 'profile_image_url_8', 'badge_image_url_8', 'slack_url_8', '3', 'Design', '1994-04-12', '2018-01-25', '555 Birch St, City, Country', 'loc'),
(9, 'ethan@example.com', 'Ethan Anderson', 'Senior', 'Project Manager', 444444444, 'profile_image_url_9', 'badge_image_url_9', 'slack_url_9', '4', 'Management', '1983-11-28', '2003-09-20', '666 Pineapple St, City, Country', 'growth'),
(10, 'olivia@example.com', 'Olivia Martinez', 'Junior', 'Software Engineer', 777777777, 'profile_image_url_10', 'badge_image_url_10', 'slack_url_10', '5', 'IT', '1996-02-08', '2019-11-05', '777 Orange St, City, Country', 'ops'),
(11, 'noah@example.com', 'Noah Garcia', 'Senior', 'Software Engineer', 888888888, 'profile_image_url_11', 'badge_image_url_11', 'slack_url_11', '1', 'IT', '1989-08-15', '2009-04-17', '888 Grape St, City, Country', 'pi'),
(12, 'isabella@example.com', 'Isabella Lopez', 'Junior', 'Project Manager', 999999999, 'profile_image_url_12', 'badge_image_url_12', 'slack_url_12', '2', 'Management', '1991-01-30', '2012-12-10', '999 Lemon St, City, Country', 'platform');

INSERT INTO `employee_interests` (`id`, `employee_id`, `interest_id`) VALUES
('1_1', 1, 'interest_1'),
('1_2', 1, 'interest_2'),
('2_1', 2, 'interest_1'),
('2_3', 2, 'interest_3'),
('3_4', 3, 'interest_4'),
('4_5', 4, 'interest_5'),
('5_1', 5, 'interest_1'),
('6_6', 6, 'interest_6'),
('6_7', 6, 'interest_7'),
('7_7', 7, 'interest_7'),
('7_8', 7, 'interest_8'),
('8_8', 8, 'interest_8'),
('8_9', 8, 'interest_9'),
('9_9', 9, 'interest_9'),
('9_10', 9, 'interest_10'),
('10_10', 10, 'interest_10'),
('10_11', 10, 'interest_11');

INSERT INTO `employee_projects` (`id`, `employee_id`, `project_id`) VALUES
('1_1', 1, 'project_1'),
('1_2', 1, 'project_2'),
('2_1', 2, 'project_1'),
('2_2', 2, 'project_3'),
('3_3', 3, 'project_2'),
('4_4', 4, 'project_4'),
('5_5', 5, 'project_5');

INSERT INTO `interest_tags` (`interest_id`, `interest_name`, `interest_grp_url`) VALUES
('interest_1', 'Java', 'interest_grp_url_1'),
('interest_10', 'SQL', 'interest_grp_url_10'),
('interest_11', 'MongoDB', 'interest_grp_url_11'),
('interest_12', 'Data Analysis', 'interest_grp_url_12'),
('interest_13', 'Data Visualization', 'interest_grp_url_13'),
('interest_14', 'Project Management', 'interest_grp_url_14'),
('interest_15', 'Agile Methodology', 'interest_grp_url_15'),
('interest_2', 'Python', 'interest_grp_url_2'),
('interest_3', 'Machine Learning', 'interest_grp_url_3'),
('interest_4', 'Data Science', 'interest_grp_url_4'),
('interest_5', 'Web Development', 'interest_grp_url_5'),
('interest_6', 'JavaScript', 'interest_grp_url_6'),
('interest_7', 'React', 'interest_grp_url_7'),
('interest_8', 'Node.js', 'interest_grp_url_8'),
('interest_9', 'HTML/CSS', 'interest_grp_url_9');

INSERT INTO `login_credentials` (`employee_id`, `email_id`, `password`) VALUES
(1, 'john@example.com', 'password1'),
(2, 'jane@example.com', 'password2'),
(3, 'alice@example.com', 'password3'),
(4, 'bob@example.com', 'password4'),
(5, 'alex@example.com', 'password5'),
(6, 'emma@example.com', 'password6'),
(7, 'michael@example.com', 'password7'),
(8, 'sophia@example.com', 'password8'),
(9, 'ethan@example.com', 'password9'),
(10, 'olivia@example.com', 'password10'),
(11, 'noah@example.com', 'password11'),
(12, 'isabella@example.com', 'password12'),
(13, 'james@example.com', 'password13'),
(14, 'emma@example.com', 'password14'),
(15, 'william@example.com', 'password15');

INSERT INTO `project_tags` (`project_id`, `project_name`, `project_grp_url`, `project_manager`) VALUES
('project_1', 'Project A', 'project_grp_url_1', 'Alice Johnson'),
('project_2', 'Project B', 'project_grp_url_2', 'Bob Anderson'),
('project_3', 'Project C', 'project_grp_url_3', 'Alice Johnson'),
('project_4', 'Project D', 'project_grp_url_4', 'Bob Anderson'),
('project_5', 'Project E', 'project_grp_url_5', 'Alice Johnson'),
('project_6', 'Project F', 'project_grp_url_6', 'Sophia Brown'),
('project_7', 'Project G', 'project_grp_url_7', 'Ethan Anderson'),
('project_8', 'Project H', 'project_grp_url_8', 'Olivia Martinez');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;