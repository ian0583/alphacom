-- MySQL dump 10.13  Distrib 5.5.32, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: alphacomm
-- ------------------------------------------------------
-- Server version	5.5.32-0ubuntu0.12.04.1

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

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `addresses_id` int(11) NOT NULL AUTO_INCREMENT,
  `profiles_id` int(11) NOT NULL,
  `address1` varchar(255) COLLATE utf8_bin NOT NULL,
  `address2` varchar(255) COLLATE utf8_bin NOT NULL,
  `city` varchar(100) COLLATE utf8_bin NOT NULL,
  `stateprovince` varchar(100) COLLATE utf8_bin NOT NULL,
  `postcode` int(20) NOT NULL,
  `country` int(11) NOT NULL,
  `longaddress` varchar(255) COLLATE utf8_bin NOT NULL,
  `currentflag` tinyint(4) NOT NULL,
  `status` tinyint(4) NOT NULL,
  PRIMARY KEY (`addresses_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,1,'1','2','3','4',5,185,'1%2C+2%2C+3%2C+4%2C+185+5',1,1),(2,1,'2','3','4','5',6,185,'2%2C+3%2C+4%2C+5%2C+185+6',0,1);
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `batches`
--

DROP TABLE IF EXISTS `batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `batches` (
  `batches_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `year` int(4) NOT NULL,
  `sub` enum('','A','B','C') COLLATE utf8_bin NOT NULL,
  `status` tinyint(4) NOT NULL,
  PRIMARY KEY (`batches_id`)
) ENGINE=MyISAM AUTO_INCREMENT=143 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batches`
--

LOCK TABLES `batches` WRITE;
/*!40000 ALTER TABLE `batches` DISABLE KEYS */;
INSERT INTO `batches` VALUES (1,'ORGANIZER+-+Alpha+Omicron',1966,'',1),(2,'ORGANIZER+-+Theta',1966,'',1),(3,'ORGANIZER+-+Pi',1966,'',1),(4,'Magnificent+7',1967,'',1),(5,'3+Kings',1968,'A',1),(6,'Debutantes+18',1968,'A',1),(7,'Super+6',1968,'B',1),(8,'13+Vestal+Virgins',1968,'B',1),(9,'Solitaire',1969,'A',1),(10,'The+Good,+The+Bad+&+The+Ugly',1969,'A',1),(11,'Apollo+12',1969,'B',1),(12,'Dirty+Dozen',1969,'B',1),(13,'4+Aces',1970,'A',1),(14,'Unit+4+Plus+1',1970,'B',1),(15,'Unbeatable+4',1970,'B',1),(16,'Lone+Ranger',1970,'C',1),(17,'4-Ever',1971,'A',1),(18,'5+Fingers',1971,'A',1),(19,'Asymptotic+32',1971,'B',1),(20,'Caliber+25+++1+Bullet',1971,'B',1),(21,'Lachrymal+Duo',1972,'A',1),(22,'Ultra+9',1972,'A',1),(23,'4-Mula',1972,'B',1),(24,'After+6+Minus+1',1975,'A',1),(25,'Nine+Foxy+Ladies',1975,'A',1),(26,'David+&+Golliath',1975,'B',1),(27,'Triompho+++1',1975,'C',1),(28,'Gatsby+75++(+5+)',1975,'C',1),(29,'Titanic+Pentagon+(12+Dots)',1976,'A',1),(30,'Bold+Rush+(12+Dots)',1976,'A',1),(31,'Two+the+Hardway',1976,'B',1),(32,'Two+of+Us',1976,'B',1),(33,'4-Seers+Camaraderie',1977,'A',1),(34,'5+Sexy',1977,'A',1),(35,'Mystic+Survival+7',1977,'B',1),(36,'Mystic+Survival+8',1977,'B',1),(37,'Shibship+Symbion+7',1978,'A',1),(38,'Shibship+Symbion+7+(Summer)',1978,'A',1),(39,'LFS+Clan+12',1978,'B',1),(40,'LFS+Clan+12',1978,'B',1),(41,'Voltes+V',1978,'C',1),(42,'Voltes+V',1978,'C',1),(43,'Golden+Triangle',1979,'A',1),(44,'The+Hardy+Boys',1979,'B',1),(45,'Polymer+5',1980,'A',1),(46,'Mystic+Friends+6',1981,'A',1),(47,'Diamonds+4',1981,'B',1),(48,'Diamonds+4+/+The+Lone+Ranger',1981,'B',1),(49,'Spectrum+7',1982,'',1),(50,'Eureka+12+Jewels',1983,'A',1),(51,'Summerian+Trefoil',1984,'A',1),(52,'Night+Hexagon',1984,'B',1),(53,'Malestorm+9',1985,'A',1),(54,'Reflex+7',1985,'B',1),(55,'Veni+Vidi+Veci+6',1985,'C',1),(56,'The+New+Seedlings+7',1986,'A',1),(57,'Scorpio+Nights+5',1986,'B',1),(58,'The+Kamikaze+8',1986,'C',1),(59,'Spartan+Clan+6',1987,'A',1),(60,'Revival+Batch+6',1987,'B',1),(61,'Lone+Ranger',1988,'A',1),(62,'Feldspar+15',1988,'B',1),(63,'The+Studs+2',1988,'C',1),(64,'',1988,'',1),(65,'The+Agnus+Dei+5',1989,'A',1),(66,'The+Robust+Cluster+9',1989,'B',1),(67,'Las+Survivantes+3',1990,'A',1),(68,'The+Kabisig+8',1990,'B',1),(69,'The+Patriot+7',1990,'C',1),(70,'Lone+Survivor',1992,'A',1),(71,'Falcon+Fighters+2',1992,'B',1),(72,'The+Levites+2',1992,'C',1),(73,'The+Hamili+14',1993,'A',1),(74,'Pathfinder+10',1993,'B',1),(75,'The+Hawks+3',1994,'A',1),(76,'Brown+Sea+Islanders+4',1994,'B',1),(77,'The+Chevaliers+11',1995,'A',1),(78,'The+Musketeers+7',1995,'B',1),(79,'Obscure+4',1996,'A',1),(80,'The+Last+Man+Standing+I',1996,'B',1),(81,'The+Enthusiast+4',1997,'A',1),(82,'The+Little+Foot+14',1997,'B',1),(83,'The+Zealots+11',1998,'B',1),(84,'The+Unorthodox+2',1998,'C',1),(85,'The+Jedi+12',1999,'A',1),(86,'The+Last+Man+Standing+III',1999,'B',1),(87,'Zoroasters+3',2000,'B',1),(88,'Dos+Pares',2001,'A',1),(89,'Dreadnaughts+8',2001,'B',1),(90,'Leviatan+4',2002,'A',1),(91,'Absit+Omen+4',2002,'B',1),(92,'Nebula+4',2003,'B',1),(93,'The+Last+Samurai',2003,'',1),(94,'The+Desert+Rose',2004,'',1),(95,'Rennaissance+26',2005,'A',1),(96,'The+Survivors+5',2005,'B',1),(97,'Pledge+Class+Catan+5',2007,'A',1),(98,'Pledge+Class+Mendiola+8',2008,'A',1),(99,'Pledge+Class+Brosas',2008,'B',1),(100,'Vendetta',2009,'A',1),(101,'Tenacious+3',2009,'B',1),(102,'Coltan',2010,'A',1),(103,'Gamma',1967,'',1),(104,'?',1967,'',1),(105,'Alpha+Upsilon',1967,'',1),(106,'Beta+Phi',1967,'',1),(107,'Delta+Delta',1967,'',1),(108,'Theta+-+Dirty+Dozen',1968,'',1),(109,'Gamma',1968,'',1),(110,'Gamma',1969,'',1),(111,'Alpha+Xi',1969,'',1),(112,'Alpha+Omicron',1969,'B',1),(113,'Delta+Delta',1970,'',1),(114,'Gamma+Delta',1970,'',1),(115,'Iota+Beta',1970,'',1),(116,'Gamma+Delta',1971,'',1),(117,'Gamma',1972,'',1),(118,'Beta+Nu',1972,'',1),(119,'Beta+Upsilon',1975,'',1),(120,'Beta+Psi+-+Signos+Trece+Con+Dos',1978,'',1),(121,'Epsilon+Gamma',1979,'',1),(122,'Beta+Chi',1980,'',1),(123,'(from+one+Dipolog+Chapter)',1982,'',1),(124,'Eta+Tau',1983,'',1),(125,'Zeta+Rho',1986,'',1),(126,'Alpha+Xi',1987,'B',1),(127,'Affiliate+-+Theta+Zeta',1988,'',1),(128,'Beta+Omega',1989,'',1),(129,'Delta+Phi',1989,'B',1),(130,'Eta+-+Desert+Storm',1990,'',1),(131,'Iota+Sigma',1993,'B',1),(132,'%3F1',1993,'A',1),(133,'Zeta+Rho',1994,'A',1),(134,'Alpha+Xi',1994,'A',1),(135,'Iota+Sigma',1994,'A',1),(136,'Zeta+Beta',1996,'',1),(137,'HNU+Pet.',2000,'',1),(138,'Delta',2001,'A',1),(139,'Lambda+Chi',2003,'',1),(140,'?',0,'',1),(141,'Mystic+Survival+78+(?)',0,'',1),(142,'?',1989,'',1);
/*!40000 ALTER TABLE `batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contacts` (
  `contacts_id` int(11) NOT NULL AUTO_INCREMENT,
  `profiles_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `detail` varchar(200) COLLATE utf8_bin NOT NULL,
  `primaryflag` tinyint(4) NOT NULL,
  `status` tinyint(4) NOT NULL,
  PRIMARY KEY (`contacts_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (1,1,1,'12344',1,0),(2,1,1,'12344',1,0),(3,1,1,'saddsda',0,0),(4,1,4,'asdadawqeqwe',0,0),(5,1,1,'123421412312',0,0),(6,1,1,'12123',0,0);
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacttypes`
--

DROP TABLE IF EXISTS `contacttypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contacttypes` (
  `contacttypes_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`contacttypes_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacttypes`
--

LOCK TABLES `contacttypes` WRITE;
/*!40000 ALTER TABLE `contacttypes` DISABLE KEYS */;
INSERT INTO `contacttypes` VALUES (1,'Home'),(2,'Mobile'),(3,'Office'),(4,'E-mail'),(5,'Fax');
/*!40000 ALTER TABLE `contacttypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `countries` (
  `countries_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`countries_id`)
) ENGINE=MyISAM AUTO_INCREMENT=258 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'Afghanistan'),(2,'Akrotiri'),(3,'Albania'),(4,'Algeria'),(5,'American Samoa'),(6,'Andorra'),(7,'Angola'),(8,'Anguilla'),(9,'Antarctica'),(10,'Antigua and Barbuda'),(11,'Argentina'),(12,'Armenia'),(13,'Aruba'),(14,'Ashmore and Cartier Islands'),(15,'Australia'),(16,'Austria'),(17,'Azerbaijan'),(18,'Bahamas, The'),(19,'Bahrain'),(20,'Bangladesh'),(21,'Barbados'),(22,'Bassas da India'),(23,'Belarus'),(24,'Belgium'),(25,'Belize'),(26,'Benin'),(27,'Bermuda'),(28,'Bhutan'),(29,'Bolivia'),(30,'Bosnia and Herzegovina'),(31,'Botswana'),(32,'Bouvet Island'),(33,'Brazil'),(34,'British Indian Ocean Territory'),(35,'British Virgin Islands'),(36,'Brunei'),(37,'Bulgaria'),(38,'Burkina Faso'),(39,'Burma'),(40,'Burundi'),(41,'Cambodia'),(42,'Cameroon'),(43,'Canada'),(44,'Cape Verde'),(45,'Cayman Islands'),(46,'Central African Republic'),(47,'Chad'),(48,'Chile'),(49,'China'),(50,'Christmas Island'),(51,'Clipperton Island'),(52,'Cocos (Keeling) Islands'),(53,'Colombia'),(54,'Comoros'),(55,'Congo, Democratic Republic of the'),(56,'Congo, Republic of the'),(57,'Cook Islands'),(58,'Coral Sea Islands'),(59,'Costa Rica'),(60,'Cote d\'Ivoire'),(61,'Croatia'),(62,'Cuba'),(63,'Cyprus'),(64,'Czech Republic'),(65,'Denmark'),(66,'Dhekelia'),(67,'Djibouti'),(68,'Dominica'),(69,'Dominican Republic'),(70,'Ecuador'),(71,'Egypt'),(72,'El Salvador'),(73,'Equatorial Guinea'),(74,'Eritrea'),(75,'Estonia'),(76,'Ethiopia'),(77,'Europa Island'),(78,'Falkland Islands (Islas Malvinas)'),(79,'Faroe Islands'),(80,'Fiji'),(81,'Finland'),(82,'France'),(83,'French Guiana'),(84,'French Polynesia'),(85,'French Southern and Antarctic Lands'),(86,'Gabon'),(87,'Gambia, The'),(88,'Gaza Strip'),(89,'Georgia'),(90,'Germany'),(91,'Ghana'),(92,'Gibraltar'),(93,'Glorioso Islands'),(94,'Greece'),(95,'Greenland'),(96,'Grenada'),(97,'Guadeloupe'),(98,'Guam'),(99,'Guatemala'),(100,'Guernsey'),(101,'Guinea'),(102,'Guinea-Bissau'),(103,'Guyana'),(104,'Haiti'),(105,'Heard Island and McDonald Islands'),(106,'Holy See (Vatican City)'),(107,'Honduras'),(108,'Hong Kong'),(109,'Hungary'),(110,'Iceland'),(111,'India'),(112,'Indonesia'),(113,'Iran'),(114,'Iraq'),(115,'Ireland'),(116,'Isle of Man'),(117,'Israel'),(118,'Italy'),(119,'Jamaica'),(120,'Jan Mayen'),(121,'Japan'),(122,'Jersey'),(123,'Jordan'),(124,'Juan de Nova Island'),(125,'Kazakhstan'),(126,'Kenya'),(127,'Kiribati'),(128,'Korea, North'),(129,'Korea, South'),(130,'Kuwait'),(131,'Kyrgyzstan'),(132,'Laos'),(133,'Latvia'),(134,'Lebanon'),(135,'Lesotho'),(136,'Liberia'),(137,'Libya'),(138,'Liechtenstein'),(139,'Lithuania'),(140,'Luxembourg'),(141,'Macau'),(142,'Macedonia'),(143,'Madagascar'),(144,'Malawi'),(145,'Malaysia'),(146,'Maldives'),(147,'Mali'),(148,'Malta'),(149,'Marshall Islands'),(150,'Martinique'),(151,'Mauritania'),(152,'Mauritius'),(153,'Mayotte'),(154,'Mexico'),(155,'Micronesia, Federated States of'),(156,'Moldova'),(157,'Monaco'),(158,'Mongolia'),(159,'Montserrat'),(160,'Morocco'),(161,'Mozambique'),(162,'Namibia'),(163,'Nauru'),(164,'Navassa Island'),(165,'Nepal'),(166,'Netherlands'),(167,'Netherlands Antilles'),(168,'New Caledonia'),(169,'New Zealand'),(170,'Nicaragua'),(171,'Niger'),(172,'Nigeria'),(173,'Niue'),(174,'Norfolk Island'),(175,'Northern Mariana Islands'),(176,'Norway'),(177,'Oman'),(178,'Pakistan'),(179,'Palau'),(180,'Panama'),(181,'Papua New Guinea'),(182,'Paracel Islands'),(183,'Paraguay'),(184,'Peru'),(185,'Philippines'),(186,'Pitcairn Islands'),(187,'Poland'),(188,'Portugal'),(189,'Puerto Rico'),(190,'Qatar'),(191,'Reunion'),(192,'Romania'),(193,'Russia'),(194,'Rwanda'),(195,'Saint Helena'),(196,'Saint Kitts and Nevis'),(197,'Saint Lucia'),(198,'Saint Pierre and Miquelon'),(199,'Saint Vincent and the Grenadines'),(200,'Samoa'),(201,'San Marino'),(202,'Sao Tome and Principe'),(203,'Saudi Arabia'),(204,'Senegal'),(205,'Serbia and Montenegro'),(206,'Seychelles'),(207,'Sierra Leone'),(208,'Singapore'),(209,'Slovakia'),(210,'Slovenia'),(211,'Solomon Islands'),(212,'Somalia'),(213,'South Africa'),(214,'South Georgia and the South Sandwich Islands'),(215,'Spain'),(216,'Spratly Islands'),(217,'Sri Lanka'),(218,'Sudan'),(219,'Suriname'),(220,'Svalbard'),(221,'Swaziland'),(222,'Sweden'),(223,'Switzerland'),(224,'Syria'),(225,'Taiwan'),(226,'Tajikistan'),(227,'Tanzania'),(228,'Thailand'),(229,'Timor-Leste'),(230,'Togo'),(231,'Tokelau'),(232,'Tonga'),(233,'Trinidad and Tobago'),(234,'Tromelin Island'),(235,'Tunisia'),(236,'Turkey'),(237,'Turkmenistan'),(238,'Turks and Caicos Islands'),(239,'Tuvalu'),(240,'Uganda'),(241,'Ukraine'),(242,'United Arab Emirates'),(243,'United Kingdom'),(244,'United States'),(245,'Uruguay'),(246,'Uzbekistan'),(247,'Vanuatu'),(248,'Venezuela'),(249,'Vietnam'),(250,'Virgin Islands'),(251,'Wake Island'),(252,'Wallis and Futuna'),(253,'West Bank'),(254,'Western Sahara'),(255,'Yemen'),(256,'Zambia'),(257,'Zimbabwe');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `courses` (
  `courses_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `description` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`courses_id`)
) ENGINE=MyISAM AUTO_INCREMENT=68 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'BSChE+1970','BSChE'),(2,'BSCE',''),(3,'MD',''),(4,'Dentistry',''),(5,'BSChE 1972',''),(6,'BSChE 1971',''),(7,'BSPharma',''),(8,'LLB',''),(9,'BSC',''),(10,'BSME 1975',''),(11,'BSND',''),(12,'BSME',''),(13,'BSA',''),(14,'BSBA',''),(15,'BSN',''),(16,'PMA 1977',''),(17,'BSC 1975',''),(18,'BSCA',''),(19,'BSME 1976',''),(20,'BSEE',''),(21,'BSCE 1976',''),(22,'BA',''),(23,'BSEE 1976',''),(24,'BSCE 1978',''),(25,'BSChE 1975',''),(26,'BSChE 1976',''),(27,'BSChE',''),(28,'BSC 1976',''),(29,'BSME 1977',''),(30,'BSME 1978',''),(31,'BSEE 1977',''),(32,'BSChE 77',''),(33,'BSPharma 79',''),(34,'BSME 1979',''),(35,'BSECE',''),(36,'BSChE 79',''),(37,'BSPharma 77',''),(38,'BSEE 78',''),(39,'BSBio',''),(40,'pacem',''),(41,'BSME 81',''),(42,'LLB 80',''),(43,'ChE',''),(44,'BSIE',''),(45,'Nautical/BSN',''),(46,'Pharma',''),(47,'sj',''),(48,'BSAccounting',''),(49,'BSCoE',''),(50,'Nautical',''),(51,'BSECE 1995',''),(52,'BSComE',''),(53,'BSComE 1996',''),(54,'BSME 1997',''),(55,'BSECE 1996',''),(56,'BSECE 1999',''),(57,'ssc',''),(58,'BS Accounting, LLB',''),(59,'BSChE 2005',''),(60,'BSECE, BS Nursing',''),(61,'BS Biology',''),(62,'BS ComE',''),(63,'BS Accounting',''),(64,'BSF',''),(65,'BSArch',''),(66,'BSC 2001',''),(67,'BS IT','');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customfields`
--

DROP TABLE IF EXISTS `customfields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customfields` (
  `customfields_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `type` enum('alphanum','numeric') COLLATE utf8_bin NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`customfields_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customfields`
--

LOCK TABLES `customfields` WRITE;
/*!40000 ALTER TABLE `customfields` DISABLE KEYS */;
INSERT INTO `customfields` VALUES (1,'testfield','alphanum',0);
/*!40000 ALTER TABLE `customfields` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customfieldsdata`
--

DROP TABLE IF EXISTS `customfieldsdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customfieldsdata` (
  `customfieldsdata_id` int(11) NOT NULL AUTO_INCREMENT,
  `profile_id` int(11) NOT NULL,
  `fields_id` int(11) NOT NULL,
  `value` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`customfieldsdata_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customfieldsdata`
--

LOCK TABLES `customfieldsdata` WRITE;
/*!40000 ALTER TABLE `customfieldsdata` DISABLE KEYS */;
/*!40000 ALTER TABLE `customfieldsdata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profiles` (
  `profiles_id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL,
  `batches_id` int(11) NOT NULL,
  `courses_id` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `numbertype` enum('','Life','Unrit') COLLATE utf8_bin NOT NULL,
  `firstname` varchar(255) COLLATE utf8_bin NOT NULL,
  `lastname` varchar(255) COLLATE utf8_bin NOT NULL,
  `middlename` varchar(100) COLLATE utf8_bin NOT NULL,
  `suffix` varchar(100) COLLATE utf8_bin NOT NULL,
  `baptismalname` varchar(255) COLLATE utf8_bin NOT NULL,
  `occupation` varchar(255) COLLATE utf8_bin NOT NULL,
  `office` text COLLATE utf8_bin NOT NULL,
  `remarks` text COLLATE utf8_bin NOT NULL,
  `bloodtype` enum('','a','b','ab','o') COLLATE utf8_bin NOT NULL,
  `birthmonth` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL,
  PRIMARY KEY (`profiles_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (1,1,111,12,1234,'','Antonio','Basar','Juntilla','Engr.','','Employee','','','',0,0),(2,0,119,0,12,'Life','12','12','12','12','12','12','12','12','a',12,0);
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schoolyearofficers`
--

DROP TABLE IF EXISTS `schoolyearofficers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schoolyearofficers` (
  `schoolyearofficers_id` int(11) NOT NULL AUTO_INCREMENT,
  `gc_glc` int(11) NOT NULL,
  `pc_plc` int(11) NOT NULL,
  `ac_alc` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  PRIMARY KEY (`schoolyearofficers_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schoolyearofficers`
--

LOCK TABLES `schoolyearofficers` WRITE;
/*!40000 ALTER TABLE `schoolyearofficers` DISABLE KEYS */;
/*!40000 ALTER TABLE `schoolyearofficers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `users_id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8_bin NOT NULL,
  `password` varchar(50) COLLATE utf8_bin NOT NULL,
  `timestamp` bigint(100) NOT NULL,
  `type` tinyint(4) NOT NULL,
  `status` int(5) NOT NULL,
  PRIMARY KEY (`users_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','12345',1378909255,1,1);
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

-- Dump completed on 2013-09-23  6:49:50
