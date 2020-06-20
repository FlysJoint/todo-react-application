-- MySQL dump 10.13  Distrib 5.7.30, for Linux (x86_64)
--
-- Host: tr-course-rds-instance.choi0h4vsi9p.eu-west-2.rds.amazonaws.com    Database: todo
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED='';

--
-- Table structure for table `Task`
--

DROP TABLE IF EXISTS `Task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Task` (
  `taskID` int(3) NOT NULL AUTO_INCREMENT,
  `bottle` int(2) NOT NULL,
  `shelf` varchar(20) NOT NULL,
  `deadline` date DEFAULT NULL,
  `isCompleted` int(1) NOT NULL,
  `pos` int(1) NOT NULL,
  `text` varchar(80) NOT NULL,
  `username` varchar(20) NOT NULL,
  PRIMARY KEY (`taskID`),
  KEY `username` (`username`),
  CONSTRAINT `Task_ibfk_1` FOREIGN KEY (`username`) REFERENCES `User` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Task`
--

LOCK TABLES `Task` WRITE;
/*!40000 ALTER TABLE `Task` DISABLE KEYS */;
INSERT INTO `Task` VALUES (1,1,'morning','0000-00-00',1,1,'Flys to Mars','bob5'),(2,1,'morning',NULL,0,1,'Get marooned','bob5'),(3,1,'morning',NULL,0,0,'Grow spuds from poo','bob5'),(4,2,'morning',NULL,1,1,'Stay home','bob5'),(5,2,'morning',NULL,0,0,'Save lives','bob5'),(6,2,'morning',NULL,0,1,'Protect the NHS','bob5'),(7,2,'afternoon',NULL,1,0,'Walk cats','sarah76'),(8,1,'afternoon',NULL,1,0,'Wash dinner','bob5'),(9,1,'afternoon',NULL,0,0,'Dress dog','bob5'),(10,1,'afternoon',NULL,1,0,'Walk kid','bob5'),(11,1,'evening',NULL,0,1,'Watch Alien','dave15'),(12,1,'evening',NULL,1,0,'Watch Aliens','dave15'),(13,2,'evening',NULL,0,0,'Go to bed','bob5'),(14,3,'evening',NULL,0,0,'Midnight feast','bob5'),(15,4,'evening',NULL,0,0,'Wee','bob5'),(16,4,'evening',NULL,0,1,'Nother wee','bob5');
/*!40000 ALTER TABLE `Task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `username` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('bob5','bob@here.com'),('bob7564','bob2@here.com'),('dave15','dave@there.com'),('sarah76','sarah@here.com'),('susan92','susan@there.com');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-04 22:11:25
