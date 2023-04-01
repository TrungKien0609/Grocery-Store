-- MariaDB dump 10.19  Distrib 10.10.1-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: laravel
-- ------------------------------------------------------
-- Server version	10.10.1-MariaDB-1:10.10.1+maria~ubu2204

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_items` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  `cart_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_items_product_id_foreign` (`product_id`),
  KEY `cart_items_cart_id_foreign` (`cart_id`),
  CONSTRAINT `cart_items_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cart_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `total_unique_items` int(11) NOT NULL,
  `cart_total` int(11) NOT NULL,
  `total_items` int(11) NOT NULL,
  `is_emty` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `carts_user_id_foreign` (`user_id`),
  CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES
(1,2,1,24,2,0,'2023-04-01 21:19:27','2023-04-01 22:38:00');
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES
(1,'Fish & Meat','fish-meat','/storage/uploads/ljRH5Ilujz28W6lTRPV3Q9EpiGRDqAwcuIuJcaZL.png','2023-04-01 21:03:52','2023-04-01 21:03:52'),
(2,'Fruits & Vetgetable','fruits-vetgetable','/storage/uploads/ItonnnxWYcTkXRvb5Kc6lCOph3BnNw3xAu6L7gZU.png','2023-04-01 21:04:34','2023-04-01 21:04:34'),
(3,'Fresh & Seafood','fresh-seafood','/storage/uploads/SQqd3lAqfZls1ZniLVoW2pLsiQIFjZgXbc4OjIwR.png','2023-04-01 21:05:33','2023-04-01 21:05:33'),
(4,'Cooking Essentials','cooking-essentials','/storage/uploads/5BDxQupJsjHV7Q2F0advVCWhwCQ0uHFoqd5iDmt9.png','2023-04-01 21:06:12','2023-04-01 21:06:12'),
(5,'Breakfast','breakfast','/storage/uploads/C7Ton2Uf4OdtjsoEmSMHWiqcDVwAzqNunp9Yu9Vd.png','2023-04-01 21:06:41','2023-04-01 21:06:41'),
(6,'Drinks','drinks','/storage/uploads/O58CpvmWlI41Jc1dWj706Xw6M6srwwaqadfe30dw.jpg','2023-04-01 21:07:23','2023-04-01 21:07:23'),
(7,'Baby Care','baby-care','/storage/uploads/zWMazLe4BDPXbUnxVuLhkCh9K6Tbj8gDSzSOKuiS.png','2023-04-01 21:08:09','2023-04-01 21:08:09'),
(8,'Pet Care','pet-care','/storage/uploads/e2grfDqBShvFUUcux0pJP5VZevXqbvkh0Pq0T8V7.png','2023-04-01 21:08:31','2023-04-01 21:08:31'),
(9,'Milk & Dairy','milk-dairy','/storage/uploads/ZwBgwvVtejCF4TE5XQU3VAhFk8rCkikiIOfrZfU4.png','2023-04-01 21:09:35','2023-04-01 21:09:35'),
(10,'Organic Food','organic-food','/storage/uploads/AkXk468iKoUWDvCy4NROIHL9Ykelmo1GLoAf0j8y.png','2023-04-01 21:10:12','2023-04-01 21:10:12');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES
(1,'2014_10_12_000000_create_users_table',1),
(2,'2019_08_19_000000_create_failed_jobs_table',1),
(3,'2019_12_14_000001_create_personal_access_tokens_table',1),
(4,'2022_02_14_024655_create_categories_table',1),
(5,'2022_02_19_173015_create_carts_table',1),
(6,'2022_02_19_220857_create_sub_categories_table',1),
(7,'2022_02_19_221055_create_products_table',1),
(8,'2022_02_19_223043_create_cart_items_table',1),
(9,'2022_02_19_225550_create_orders_table',1),
(10,'2022_02_19_225644_create_order_items_table',1),
(11,'2022_02_19_225727_create_reviews_table',1),
(12,'2022_02_19_225745_create_review_images_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_items` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `total` int(11) NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `method` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  `order_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_items_product_id_foreign` (`product_id`),
  KEY `order_items_order_id_foreign` (`order_id`),
  CONSTRAINT `order_items_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `order_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES
(1,84,'pending','COD',6,4,1,'2023-04-01 21:25:44','2023-04-01 21:25:44'),
(2,72,'pending','COD',4,2,1,'2023-04-01 21:25:44','2023-04-01 21:25:44'),
(3,30,'pending','COD',3,3,1,'2023-04-01 22:32:56','2023-04-01 22:32:56'),
(4,24,'pending','COD',2,1,1,'2023-04-01 22:38:15','2023-04-01 22:38:15');
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `total_orders` int(11) NOT NULL,
  `pending_orders` int(11) NOT NULL,
  `processing_orders` int(11) NOT NULL,
  `complete_orders` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_user_id_foreign` (`user_id`),
  CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES
(1,2,4,4,0,0,'2023-04-01 21:19:27','2023-04-01 22:38:15');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES
(1,'App\\Models\\User',1,'user-token','f86d29f0ebd2eb30eff88b291808c6c132de08c28aab733e05c9b848ad6465a1','[\"*\"]','2023-04-01 21:19:20','2023-04-01 20:57:50','2023-04-01 21:19:20'),
(3,'App\\Models\\User',2,'user-token','a4c3620b056c41f5d4bdc2c683dbfcfb81af320b07df79ff966ec195a9804a3d','[\"*\"]','2023-04-01 21:22:34','2023-04-01 21:19:47','2023-04-01 21:22:34'),
(4,'App\\Models\\User',1,'user-token','67d5d626c98f5629c658ae551ed6227134d762bdf9d4633821664a85773f0ef3','[\"*\"]','2023-04-01 21:24:46','2023-04-01 21:22:44','2023-04-01 21:24:46'),
(5,'App\\Models\\User',1,'user-token','ff1df205e9227344786bdf813819aaca316bcc52949c9d2fb97cc2006a75f836','[\"*\"]','2023-04-01 21:25:03','2023-04-01 21:25:03','2023-04-01 21:25:03'),
(6,'App\\Models\\User',2,'user-token','6b7e2b3c52e1875ae43813129f5b5ec3611a242d953e0640048b41d1e919fbf3','[\"*\"]','2023-04-01 22:39:22','2023-04-01 21:25:24','2023-04-01 22:39:22'),
(7,'App\\Models\\User',1,'user-token','5a5757d6c05e71a3b3af143ec6f7835148f6661c227ee637d805efa46923d2f6','[\"*\"]','2023-04-01 22:54:03','2023-04-01 22:41:14','2023-04-01 22:54:03');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `original_price` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` int(11) NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `stock_info` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sub_category_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `products_name_unique` (`name`),
  KEY `products_sub_category_id_foreign` (`sub_category_id`),
  CONSTRAINT `products_sub_category_id_foreign` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES
(1,'Salmon Filet Portion',12,12,'salmon-filet-portion',0,'A fish is an animal which lives and breathes in water. All fish are vertebrates (have a backbone) and most breathe through gills and have fins and scales. ... There are three classes of fish: jawless, cartilaginous, and bony. All fish have a backbone.','in stock','6oz',98,'/storage/uploads/rGosQw5IMtEc4mTHMBUHk5VrT5BkuYgQHkhugiNL.jpg','show',1,'2023-04-01 21:15:36','2023-04-01 22:38:15'),
(2,'Bone In Chuck',18,18,'bone-in-chuck',0,'Beef, flesh of mature cattle, as distinguished from veal, the flesh of calves. The best beef is obtained from early maturing, special beef breeds. High-quality beef has firm, velvety, fine-grained lean, bright red in colour and well-marbled. The fat is smooth, creamy white, and well distributed.','in stock','1lb',96,'/storage/uploads/bZh5ZytwbmbmSp5IcTKmMOBtaiB3jXnsjmJ2dUkN.jpg','show',2,'2023-04-01 21:17:02','2023-04-01 21:25:44'),
(3,'Dates Loose',13,10,'dates-loose',23,'Dried fruit is fruit from which the majority of the original water content has been removed either naturally, through sun drying, or through the use of specialized dryers or dehydrators. ... Nearly half of the dried fruits sold are raisins, followed by dates, prunes, figs, apricots, peaches, apples, and pears.','in stock','1kg',97,'/storage/uploads/36jYQ0ipqSMf1u9pNGdHj8PHVqdKUTOxsnZRIbO8.jpg','show',3,'2023-04-01 21:19:20','2023-04-01 22:32:56'),
(4,'Strawberries Package',14,14,'strawberries-package',0,'In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.','in stock','25oz',94,'/storage/uploads/jDLjCxH2YbLLMqBgExh81bTF4ZQjglimdnEIATgr.jpg','show',15,'2023-04-01 21:24:46','2023-04-01 21:25:44'),
(5,'Canada Salmon',12,12,'canada-salmon',0,'A fish is an animal which lives and breathes in water. All fish are vertebrates (have a backbone) and most breathe through gills and have fins and scales. ... There are three classes of fish: jawless, cartilaginous, and bony. All fish have a backbone.','in stock','5oz',100,'/storage/uploads/7LyjxqhrtzRv9ZnO59cw1FUcThNMBMU77nySEl1t.jpg','show',5,'2023-04-01 22:43:43','2023-04-01 22:43:43'),
(6,'Fortune Oil',8,8,'fortune-oil',0,'Cooking oil is plant, animal, or synthetic fat used in frying, baking, and other types of cooking. ... Cooking oil is typically a liquid at room temperature, although some oils that contain saturated fat, such as coconut oil, palm oil and palm kernel oil are solid.','in stock','5ltr',100,'/storage/uploads/Sz9HRIVIddlfoVG1iLHVpEWnzVyGlNKqGx5rsehB.jpg','show',6,'2023-04-01 22:44:57','2023-04-01 22:44:57'),
(7,'Kalijira Premium Rice',12,12,'kalijira-premium-rice',0,'rice, (Oryza sativa), edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced. ... Rice is cooked by boiling, or it can be ground into a flour. It is eaten alone and in a great variety of soups, side dishes, and main dishes in Asian, Middle Eastern, and many other cuisines.','in stock','5kg',100,'/storage/uploads/7RFoAYBBhrL2y6B9CgL7iX5y3wiJhNqLdUgtMptM.jpg','show',7,'2023-04-01 22:45:55','2023-04-01 22:45:55'),
(8,'Bread',9,9,'bread',0,'The definition of a breakfast food is a food that is eaten primarily for the first meal of the day commonly including: cereal, toast, eggs, pancakes, waffles, pastries, sausage or bacon. An example of a breakfast food is oatmeal. An example of a breakfast food is french toast with scrambled eggs.','in stock','1pc',100,'/storage/uploads/1jogWeJTIRlI7fgUy3bH54AMygMiIaEy9ex2hoTm.jpg','show',8,'2023-04-01 22:47:17','2023-04-01 22:47:17'),
(9,'Organic Pitta Tea',8,8,'organic-pitta-tea',0,'Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China and East Asia. After water, it is the most widely consumed drink in the world. ... Tea has a stimulating effect in humans primarily due to its caffeine content.','in stock','16ct',100,'/storage/uploads/nOF1ZC24Ae3PohcXjvPpidF3du9v7FQJNPh0gkCS.jpg','show',9,'2023-04-01 22:48:25','2023-04-01 22:48:25'),
(10,'Alhambra Purified Water',7,7,'alhambra-purified-water',0,'water, a substance composed of the chemical elements hydrogen and oxygen and existing in gaseous, liquid, and solid states. It is one of the most plentiful and essential of compounds. A tasteless and odourless liquid at room temperature, it has the important ability to dissolve many other substances.','in stock','1ltr',100,'/storage/uploads/ZMP9os7ZpvkH1hE4XxwLlSYRXHCMVQ9htVCwKV6V.jpg','show',10,'2023-04-01 22:49:21','2023-04-01 22:49:21'),
(11,'Cerelac Cherry',17,17,'cerelac-cherry',0,'Baby foods are either a soft, liquid paste or an easily chewed food since babies lack developed muscles and teeth to effectively chew. Babies typically move to consuming baby food once nursing or formula is not sufficient for the child\'s appetite. Babies do not need to have teeth to transition to eating solid foods.','in stock','400gm',100,'/storage/uploads/mbDyivy7QI6BMdmvxO3p8WfNUmONPAv2KKNCnlEv.jpg','show',11,'2023-04-01 22:50:41','2023-04-01 22:50:41'),
(12,'Premium Cat Food',12,11,'premium-cat-food',10,'Provide plenty of human companionship. Provide regular, suitable meals with a constant supply of fresh water. Provide a clean and comfortable bed. Provide the cat with outdoor access or be prepared to empty and clean a litter tray on a daily basis.','in stock','16lb',100,'/storage/uploads/QCWU9LeT3aGyyBEyxsqdjoPejk03qtxmudhSPotf.jpg','show',12,'2023-04-01 22:52:06','2023-04-01 22:52:06'),
(13,'Shurfine Vanilla Yogurt',11,11,'shurfine-vanilla-yogurt',0,'a room, building, or establishment where milk is kept and butter or cheese is made. 2a : the department of farming or of a farm that is concerned with the production of milk, butter, and cheese. b : a farm devoted to such production.','in stock','6oz',100,'/storage/uploads/RSjVxAAlgvjCwxFDfRPJ6yA963qGJOgJew0daahU.jpg','show',13,'2023-04-01 22:53:12','2023-04-01 22:53:12'),
(14,'Orange Imported',10,9,'orange-imported',10,'Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.','in stock','1kg',100,'/storage/uploads/juUaEXyUcw9qR2WivJ6qeuUQVlbvZcTjEsSkXPPv.jpg','show',14,'2023-04-01 22:53:57','2023-04-01 22:53:57');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review_images`
--

DROP TABLE IF EXISTS `review_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `review_images` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `review_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `review_images_review_id_foreign` (`review_id`),
  CONSTRAINT `review_images_review_id_foreign` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_images`
--

LOCK TABLES `review_images` WRITE;
/*!40000 ALTER TABLE `review_images` DISABLE KEYS */;
INSERT INTO `review_images` VALUES
(1,'/storage/uploads/reviews/e8jvVKJtj5kh5N2Z21lOGCObs4NsWCTBX7CoSdzk.png',1,'2023-04-01 21:37:11','2023-04-01 21:37:11'),
(2,'/storage/uploads/reviews/hFab5vGswaPUTUBEti6jdZ6khunNY5cEZ5E2NEK4.jpg',2,'2023-04-01 22:31:54','2023-04-01 22:31:54'),
(3,'/storage/uploads/reviews/yKm0LBwC3QWPKgZKZwFr053lOFVbrJltzn6eOZfZ.png',3,'2023-04-01 22:34:12','2023-04-01 22:34:12'),
(4,'/storage/uploads/reviews/cNRoPN8eF3ErVzGh17OROaDsUvcv3NINEPpagJoE.png',4,'2023-04-01 22:38:27','2023-04-01 22:38:27');
/*!40000 ALTER TABLE `review_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `star` int(11) NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `like_amount` int(11) NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reviews_product_id_foreign` (`product_id`),
  KEY `reviews_user_id_foreign` (`user_id`),
  CONSTRAINT `reviews_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES
(1,5,'Purchased','sddasfassaf',0,4,2,'2023-04-01 21:37:11','2023-04-01 21:37:11'),
(2,4,'Purchased','sddasfassaf',0,2,2,'2023-04-01 22:31:54','2023-04-01 22:31:54'),
(3,5,'Purchased','sddasfassaf',0,3,2,'2023-04-01 22:34:12','2023-04-01 22:34:12'),
(4,5,'Purchased','10 diem',0,1,2,'2023-04-01 22:38:27','2023-04-01 22:38:27');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_categories`
--

DROP TABLE IF EXISTS `sub_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sub_categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sub_categories_name_unique` (`name`),
  KEY `sub_categories_category_id_foreign` (`category_id`),
  CONSTRAINT `sub_categories_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_categories`
--

LOCK TABLES `sub_categories` WRITE;
/*!40000 ALTER TABLE `sub_categories` DISABLE KEYS */;
INSERT INTO `sub_categories` VALUES
(1,'Fish','fish',1,'2023-04-01 21:10:47','2023-04-01 21:10:47'),
(2,'Meat','meat',1,'2023-04-01 21:10:55','2023-04-01 21:10:55'),
(3,'Dry Fruits','dry-fruits',2,'2023-04-01 21:11:08','2023-04-01 21:11:08'),
(5,'Fresh Seafood','fresh-seafood',3,'2023-04-01 21:11:31','2023-04-01 21:11:31'),
(6,'Oil','oil',4,'2023-04-01 21:11:43','2023-04-01 21:11:43'),
(7,'Rice','rice',4,'2023-04-01 21:11:54','2023-04-01 21:11:54'),
(8,'Bread','bread',5,'2023-04-01 21:12:06','2023-04-01 21:12:06'),
(9,'Tea','tea',6,'2023-04-01 21:12:28','2023-04-01 21:12:28'),
(10,'Water','water',6,'2023-04-01 21:12:34','2023-04-01 21:12:34'),
(11,'Baby Food','baby-food',7,'2023-04-01 21:12:53','2023-04-01 21:12:53'),
(12,'Cat Care','cat-care',8,'2023-04-01 21:13:12','2023-04-01 21:13:12'),
(13,'Dairy','dairy',9,'2023-04-01 21:13:33','2023-04-01 21:13:33'),
(14,'Organic Food','organic-food',10,'2023-04-01 21:13:51','2023-04-01 21:13:51'),
(15,'Fresh Fruits','fresh-fruits',2,'2023-04-01 21:18:07','2023-04-01 21:18:07');
/*!40000 ALTER TABLE `sub_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '/storage/uploads/default/avatar.png',
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'Viet Nam',
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'wqqlSuieua','admin@gmail.com',NULL,'$2y$10$ZyWNcp1KKV4qaHZQDl7zKebPJq1h02IMZy1xenGuaIWjdyWJUmfA.','/storage/uploads/default/avatar.png','Viet Nam','0','admin',NULL,NULL),
(2,'Trung Kiên','trungkien7300@gmail.com','google',NULL,'https://lh3.googleusercontent.com/a/AGNmyxaaEWjItvnkxUuJh2H5gNrYfw_uYk5Pg-7NH81tcg=s96-c','Viet Nam','0','user','2023-04-01 21:19:27','2023-04-01 21:19:27');
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

-- Dump completed on 2023-04-01 16:13:06
