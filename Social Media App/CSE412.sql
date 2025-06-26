CREATE DATABASE  IF NOT EXISTS `cse412` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cse412`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cse412
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `albums` (
  `album_id` int NOT NULL AUTO_INCREMENT,
  `album_name` varchar(45) NOT NULL,
  `user_id` varchar(45) NOT NULL,
  `date_of_creation` varchar(45) NOT NULL,
  PRIMARY KEY (`album_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES (1,'Bricks','the_rock','1/5/2018'),(2,'Cheese','reynolds_ryan','5/20/2016'),(3,'My Pets','taylor_swift','10/8/2021'),(4,'Art','priyanka_chopra','6/19/2020'),(5,'Funny','sofia_vergara','9/20/2022'),(6,'my album 1','jackie_chan','1/5/2020'),(7,'my album 2','jackie_chan','5/12/2020'),(8,'my album 3','jackie_chan','5/4/2021'),(9,'wack stuff','the_rock','7/11/2022'),(10,'don\'t lok','you_cant_see_me','8/21/2022');
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  `owner` varchar(45) NOT NULL,
  `text` varchar(45) NOT NULL,
  `photo_id` varchar(45) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'Dwayne ','Johnson','2022-03-07','salma_hayek','Amazing shot!','1'),(2,'John','Cena','2022-03-08','sandra_bullock','Beautiful composition!','2'),(3,'Ryan','Reynolds','2022-03-09','priyanka_chopra','Wonderful photo!','3'),(4,'Taylor','Swift','2022-03-10','jackie_chan','Love the details!','4'),(5,'Salma','Hayek','2022-03-11','the_rock','Incredible shot!','5'),(6,'Sandra','Bullock','2022-03-12','bradley_cooper','Great capture!','6'),(7,'Bradley','Cooper','2022-03-13','reynolds_ryan','Stunning scenery','7'),(8,'Jackie','Chan','2022-03-14','taylor_swift','Nice colors!','8'),(9,'Priyanka','Chopra','2022-03-15','sofia_vergara','Impressive work!','9'),(10,'Sofia','Vergara','2022-03-16','you_cant_see_me','Fantastic shot!','10');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `followers`
--

DROP TABLE IF EXISTS `followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followers` (
  `user_id` varchar(45) NOT NULL,
  `follower_id` varchar(45) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followers`
--

LOCK TABLES `followers` WRITE;
/*!40000 ALTER TABLE `followers` DISABLE KEYS */;
INSERT INTO `followers` VALUES ('the_rock','you_cant_see_me','Dwayne','Johnson','2022-03-01',1),('you_cant_see_me','bradley_cooper','John','Cena','2022-03-02',2),('reynolds_ryan','jackie_chan','Ryan','Reynolds','2022-03-03',3),('taylor_swift','reynolds_ryan','Taylor','Swift','2022-03-04',4),('taylor_swift','salma_hayek','Taylor','Swift','2022-03-04',5),('salma_hayek','sofia_vergara','Salma','Hayek','2022-03-05',6),('sandra_bullock','the_rock','Sandra','Bullock','2022-03-06',7),('bradley_cooper','sandra_bullock','Bradley','Cooper','2022-03-07',8),('jackie_chan','reynolds_ryan','Jackie','Chan','2022-03-08',9),('jackie_chan','priyanka_chopra','Jackie','Chan','2022-03-08',10),('jackie_chan','you_cant_see_me','Jackie','Chan','2022-03-08',11),('priyanka_chopra','sofia_vergara','Priyanka','Chopra','2022-03-09',12),('sofia_vergara','priyanka_chopra','Sofia','Vergara','2022-03-10',13),('sofia_vergara','taylor_swift','Sofia','Vergara','2022-03-10',14);
/*!40000 ALTER TABLE `followers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `user_id` varchar(45) NOT NULL,
  `photo_id` int NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES ('bradley_cooper',6),('jackie_chan',4),('priyanka_chopra',3),('reynolds_ryan',7),('salma_hayek',5),('sandra_bullock',2),('sofia_vergara',9),('taylor_swift',8),('the_rock',1),('you_cant_see_me',10);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photos` (
  `photo_id` int NOT NULL AUTO_INCREMENT,
  `album_id` varchar(45) NOT NULL,
  `caption` varchar(45) NOT NULL,
  `data` varchar(255) NOT NULL,
  PRIMARY KEY (`photo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
INSERT INTO `photos` VALUES (1,'2','cheese 1','https://cdn.britannica.com/60/217660-050-DBCC409A/cheddar-cheese-wedge.jpg'),(2,'2','cheese 2','https://www.zingermanscreamery.com/app/uploads/2018/04/zing-creamery-285.jpg'),(3,'2','cheese 3','https://cdn.shopify.com/s/files/1/2836/2982/products/gouda_hero_grande.jpg?v=1529434181'),(4,'1','brick 1','https://mobileimages.lowes.com/productimages/4d55aa9a-b645-48ec-9a9e-7e6480283eea/02592174.jpg'),(5,'1','brick 2','https://media.istockphoto.com/id/184374333/photo/common-house-brick.jpg?s=612x612&w=0&k=20&c=4P9EPMx6VNtTM6pmKY2N4hHQDACcVfylceJh5xrAcS4='),(6,'3','Henry sleeping on his dog bed <3','https://www.sleepfoundation.org/wp-content/uploads/2021/06/How-Many-Hours-A-Day-Do-Dogs-Sleep.jpg'),(7,'4','My art piece \"Total nothing\"','https://images.saatchiart.com/saatchi/703354/art/3792613/2862497-HSC00001-7.jpg'),(8,'4','Art piece i\'m working on','https://www.thenation.com/wp-content/uploads/2016/04/Picasso_Carafe-and-Candlestick_crop_img.jpg'),(9,'5','This is relatable','https://cdn.discordapp.com/attachments/769411033546489886/1098783797601894482/20230403_155135.png'),(10,'3','Henry when he was a puppy','https://as1.ftcdn.net/v2/jpg/01/30/26/64/1000_F_130266443_dUygfnriNfXoNZnNZNOaRRFg6MEs2FUV.jpg');
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `photo_id` int NOT NULL,
  `text` varchar(45) NOT NULL,
  PRIMARY KEY (`photo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'#sunsetlover'),(2,'#naturephotography'),(3,'#travelgram'),(4,'#food'),(5,'#fashion'),(6,'#fitnessmotivation'),(7,'#artwork'),(8,'#pets'),(9,'#architecture'),(10,'#beachlife');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` varchar(45) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `date_of_birth` varchar(45) NOT NULL,
  `hometown` varchar(45) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('bradley_cooper','Bradley','Cooper','cooper.bradley@gmail.com','1/25/1972','Philadelphia, Pennsylvania','M','#bT8!pK6E'),('jackie_chan','Jackie','Chan','hiyaaaa@gmail.com','4/7/1954','Hong Kong','M','#jA6&kV1X'),('priyanka_chopra','Priyanka','Chopra','priyanka@outlook.com','7/18/1982','Mumbai, India','F','#uM2#sZ9N'),('reynolds_ryan','Ryan ','Reynolds','deadpool@yahoo.com','4/19/1981','Vancouver, Canada','M','#dS3$rJ9A'),('salma_hayek','Salma','Hayek','salma_hayek@gmail.com','9/28/1983','Coatzacoalcos, Mexico','F','#fR1#sT8L'),('sandra_bullock','Sandra','Bullock','sandra@gmail.com','10/6/1979','Arlington, Virgina','F','#hN7^gT4S'),('sofia_vergara','Sofia','Vergara','svergara@gmail.com','8/10/1972','Barranquilla, Colombia','F','#gW5^fP7Q'),('taylor_swift','Taylor','Swift','midnightemails@ts.com','12/5/1966','West Reading, Pennsylvania','F','#pL6!qV2K'),('the_rock','Dwayne','Johnson','therock@gmail.com','2/13/1974','Hayward, California','M','#sV9@pLxY'),('you_cant_see_me','John','Cena','invisible@gmail.com','11/23/1978','West Newbury, Massachusetts','M','#4E@k7RyM');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-20 18:41:35
