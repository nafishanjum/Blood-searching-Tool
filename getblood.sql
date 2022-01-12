-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: node_complete
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blood_bag`
--

DROP TABLE IF EXISTS `blood_bag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blood_bag` (
  `blood_id` varchar(10) NOT NULL,
  `blood_bank_id` varchar(20) NOT NULL,
  `blood_group` varchar(5) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`blood_id`,`blood_bank_id`),
  KEY `blood_bank_id` (`blood_bank_id`),
  CONSTRAINT `blood_bag_ibfk_1` FOREIGN KEY (`blood_bank_id`) REFERENCES `blood_bank` (`blood_bank_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blood_bag`
--

LOCK TABLES `blood_bag` WRITE;
/*!40000 ALTER TABLE `blood_bag` DISABLE KEYS */;
INSERT INTO `blood_bag` VALUES ('458','1244','O+',890),('545','1234','A+',890),('558','1234','A+',890),('asd','1244','O+',890),('asw','1244','A+',890),('f45','1234','O+',890);
/*!40000 ALTER TABLE `blood_bag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blood_bank`
--

DROP TABLE IF EXISTS `blood_bank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blood_bank` (
  `blood_bank_id` varchar(20) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `location` varchar(20) DEFAULT NULL,
  `latitude` varchar(10) DEFAULT NULL,
  `longitude` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`blood_bank_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blood_bank`
--

LOCK TABLES `blood_bank` WRITE;
/*!40000 ALTER TABLE `blood_bank` DISABLE KEYS */;
INSERT INTO `blood_bank` VALUES ('1125','Badhan Blood Transfusion Center','bad@gmail.com','DU','23.728641','90.396682'),('1234','Quantum Lab','quantum@gmail.com','shantinagar ,dhaka','23.739027','90.415592'),('1244','RED DROP','red@gmail.com','kawran bazar','23.725275','90.373614'),('2586','Blood Bank - Bangladesh Red Crescent','e@gmail.com','lakeroad','23.763640','90.369744');
/*!40000 ALTER TABLE `blood_bank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donor`
--

DROP TABLE IF EXISTS `donor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donor` (
  `donor_id` varchar(20) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `notification_token` varchar(200) DEFAULT NULL,
  `blood_group` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`donor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donor`
--

LOCK TABLES `donor` WRITE;
/*!40000 ALTER TABLE `donor` DISABLE KEYS */;
INSERT INTO `donor` VALUES ('5rPJBF1uN','final','final@gmail.com',1728996194,'asdf','czRNTS3kHy22YKRFoNZUrZ:APA91bGfPmiRzblFNaWMuQKHCqHAPO26ifqUrMM758Qhwmi_Joas-W9ZV5SEeTIG35dOLgKdOjkXzPdoM1bRpqdhAJyNLZSEUjyoUGklRhsF6ymtHK6fPBgMHAvJoSaBzZ5wKpxIPo4B','o+'),('8ynera5ex','shahriar','shahriar@gmail.com',1728996194,'asd','d8IQ6aH0zFqnc5ToyYGvHM:APA91bGSX3FgFCPdEVl2MGDX5-7sl_X0DXJaK1MniALv61WI5NnIZ0p60tYNMumTTmvN09rWO0YSf9eV2mQfRvXM_wXr8uqcf2qLfiDimcvx2BJBVCiYZauYTYjjxmMcVuPK3vTCIdRx','o+'),('aP9vMLtrw','shahriar','shudi@gmail.com',1728996194,'casdfasdfasdf','','O+'),('ApTKjdJe3',NULL,'rifajoha@gmail.com',NULL,'garmi garmi',NULL,NULL),('KQnn3YRJu','final','shudip.shahriar@gmail.com',1728996194,'sadf','czRNTS3kHy22YKRFoNZUrZ:APA91bGfPmiRzblFNaWMuQKHCqHAPO26ifqUrMM758Qhwmi_Joas-W9ZV5SEeTIG35dOLgKdOjkXzPdoM1bRpqdhAJyNLZSEUjyoUGklRhsF6ymtHK6fPBgMHAvJoSaBzZ5wKpxIPo4B','o+'),('P-Xqq4_bh',NULL,'farihajoha@gmail.com',NULL,'678shufa0,',NULL,NULL),('shevhPVF3',NULL,'fi',NULL,'asd',NULL,NULL);
/*!40000 ALTER TABLE `donor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `id` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) DEFAULT NULL,
  `role` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`,`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES ('-xBpfLEYw','shudir@gmail.com','asdasdasd11','user'),('5rPJBF1uN','final@gmail.com','asdf','donor'),('aP9vMLtrw','shudi@gmail.com','casdfasdfasdf','donor'),('AStDa55F7','test@jhala.com','asd','user'),('dEsyDFGK6','fi','asd','donor'),('H8EQLJkYn','shudip.sar@gmail.com','asdasdasd1','user'),('i37FdAjoN','shudip.shahriar@gmail.com','asdasdads0','user'),('rpj34J2wC','shudir@gmail.com','asdasdasd11','user'),('shevhPVF3','fi','asd','donor'),('UlNk0Pcz_','shudip.@gmail.com','asdasdasd1','user'),('vuH1qIINw','shudirss@gmail.com','asdasdasd11','user'),('vyg5gYvZR','shudip.@gmail.com','asdasdasd1','user'),('xmeiJPqEF','shudip.shahriar@gmail.com','asdasdasd2','user'),('xzu_ZmsI6','shudip.shahriar@gmail.com','asdasdasd1','user'),('ZEhgOI7h8','shudirss@gmail.com','asdasdasd11','user');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `post_id` varchar(20) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `user_name` varchar(20) DEFAULT NULL,
  `Blood_tag` varchar(5) DEFAULT NULL,
  `Header` varchar(100) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`post_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES ('1B76rGFQn','a','a','a','a','a'),('as','df','df','df','df','df'),('asd','as','shahriar','o+','Need blood at square hospital','i have a emergency need blood at square hospital '),('df','df','f','f','f','f'),('fds','saf','asf','dsf','sdf','sdf'),('jkjk','sdfsa','fariha ','B+','asdfasdfsadfsdaf','sadfasdfsadfsadfasdfasdfasdfsadf'),('sf','sf','sfs','sdf','sdfs','sdf'),('ssdf','sssa','ddfasdfas','B-','sadfasdfsda','sadfsadfsadfasdfefedcef dsfaeasd ddafeds fdfesdfasf');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userinfo`
--

DROP TABLE IF EXISTS `userinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userinfo` (
  `id` varchar(20) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `phone` int(12) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinfo`
--

LOCK TABLES `userinfo` WRITE;
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES ('-xBpfLEYw','a','shudir@gmail.com','asdasdasd11',1728996194),('H8EQLJkYn','S.M Shahriar Islam','shudip.sar@gmail.com','asdasdasd1',1728996194),('i37FdAjoN','S.M Shahriar Islam','shudip.shahriar@gmail.com','asdasdads0',1728996194),('rpj34J2wC','a','shudir@gmail.com','asdasdasd11',1728996194),('to59YVxtt','S.M Shahriar Islam','shudip.shahriar@gmail.com','asdfasdfasdf0',1728996194),('vuH1qIINw','a','shudirss@gmail.com','asdasdasd11',1728996194),('xmeiJPqEF','S.M Shahriar Islam','shudip.shahriar@gmail.com','asdasdasd2',1728996194),('ZEhgOI7h8','a','shudirss@gmail.com','asdasdasd11',1728996194);
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'node_complete'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-05 20:05:59
