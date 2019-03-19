-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 17 2019 г., 22:27
-- Версия сервера: 5.7.23
-- Версия PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `laravel-react`
--

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `category_name` varchar(200) NOT NULL,
  `category_slug` varchar(200) NOT NULL,
  `show_on_homepage` tinyint(1) NOT NULL DEFAULT '0',
  `category_filter_by` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `category_slug`, `show_on_homepage`, `category_filter_by`) VALUES
(1, 'Скрабы', 'scrub', 1, 'scrub'),
(2, 'Хит продаж', 'bestseller', 1, 'bestseller'),
(3, 'Косметика для лица', 'cosmeticiviso', 0, 'cosmeticiviso'),
(4, 'Косметика для тела', 'setregalo', 0, 'setregalo');

-- --------------------------------------------------------

--
-- Структура таблицы `categories_relationship`
--

CREATE TABLE `categories_relationship` (
  `object_id` bigint(20) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `categories_relationship`
--

INSERT INTO `categories_relationship` (`object_id`, `category_id`) VALUES
(2, 2),
(2, 3),
(3, 2),
(3, 3),
(9, 3),
(4, 1),
(4, 2),
(5, 1),
(5, 2),
(12, 1),
(11, 1),
(13, 1),
(10, 1),
(7, 3),
(6, 3),
(8, 3),
(6, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `pages`
--

CREATE TABLE `pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(200) NOT NULL,
  `title` text NOT NULL,
  `menu_order` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `pages`
--

INSERT INTO `pages` (`id`, `slug`, `title`, `menu_order`) VALUES
(1, 'about-cosmetics', 'О косметике', 0),
(2, 'shop', 'Ассортимент', 1),
(8, 'videotip', 'Видеосоветы', 2),
(9, 'stock', 'Акции', 3),
(10, 'doyouknow', 'А вы знали ?', 4),
(11, 'contacts', 'Контакты', 5),
(12, 'doyouknow', 'А вы знали ?', 4),
(13, 'contacts', 'Контакты', 5);

-- --------------------------------------------------------

--
-- Структура таблицы `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` bigint(20) NOT NULL,
  `title` text NOT NULL,
  `excerpt` text NOT NULL,
  `content` longtext NOT NULL,
  `descrtitle` text NOT NULL,
  `descrtext` text NOT NULL,
  `regular_price` decimal(10,0) NOT NULL,
  `sale_price` decimal(10,0) DEFAULT '0',
  `discount` decimal(5,2) NOT NULL DEFAULT '0.00',
  `currency` varchar(20) NOT NULL,
  `image` varchar(255) NOT NULL,
  `is_reccomended` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `title`, `excerpt`, `content`, `descrtitle`, `descrtext`, `regular_price`, `sale_price`, `discount`, `currency`, `image`, `is_reccomended`) VALUES
(1, 'Крем для рук и ногтей', 'питательный крем 250 мл', '', 'Крем для рук и ногтей', 'Крем для рук и ногтей', '115', '0', '0.00', 'грн', 'uploads/2018/10/250ml_1_07-600x587.jpg', 1),
(2, 'Крем для век', 'крем для контура глаз 5 мл', '', 'Крем для век', 'Крем для контура глаз Alga Ph снимает отечность и убирает темные круги под глазами. Активные компоненты в его составе обеспечивают необходимую защиту, питание и гидратацию нежной коже вокруг глаз.', '350', '0', '0.00', 'грн', 'uploads/2018/08/5-ml_0004-600x587.jpg', 1),
(3, 'Питательный крем', 'ночной питательный крем 5 мл', '', 'Питательный крем', 'Благодаря своим органическим компонентам, ночной питательный крем Alga Ph, обеспечивает коже максимально здоровое природное питание. <br /> Помимо увлажнения он насыщает кожу минералами, витаминами, аминокислотами и протеинами.', '735', '0', '0.00', 'грн', 'uploads/2018/08/50-ml_0005-600x587.jpg', 1),
(4, 'Скраб-крем апельсин', 'сахарный крем-скраб 180 г', '', 'Скраб-крем апельсин', 'Крем-скраб', '75', '0', '0.00', 'грн', 'uploads/2018/10/180-g_scrub-cream__01-600x587.jpg', 1),
(5, 'Скраб-крем дыня', 'сахарный крем-скраб 180 г', '', 'Скраб-крем дыня', 'Крем-скраб', '75', '0', '0.00', 'грн', 'uploads/2018/10/180-g_scrub-cream__03-600x587.jpg', 1),
(6, 'Детский крем', 'гипоалергенный крем 50 мл', '', 'Детский крем', 'Использование защитного гипоалергеного крема Crema Protettiva dei Piccoli может стать отличным способом профилактики многих дерматологических симптомов.', '595', '500', '16.00', 'грн', 'uploads/2018/08/50-ml_0006-600x587.jpg', 0),
(7, 'Увлажняющий крем', 'дневной увлажняющий крем 50 мл', '', 'Увлажняющий крем', 'Дневной увлажняющий крем AlgaPh не просто удерживает влагу, но и заставляет ее работать на кожу.<br/> Его компоненты притягивают влагу извне, замедляют процесс ее испарения и усиливают защитный барьер эпидермиса.', '665', '0', '0.00', 'грн', 'uploads/2018/08/50-ml_0007-600x587.jpg', 0),
(8, 'Увлажняющий крем', 'дневной увлажняющий крем 5 мл', '', 'Увлажняющий крем', 'Дневной увлажняющий крем AlgaPh не просто удерживает влагу, но и заставляет ее работать на кожу.<br/> Крем притягивают влагу извне, замедляют процесс ее испарения и усиливают защитный барьер эпидермиса.', '210', '0', '0.00', 'грн', 'uploads/2018/08/5-ml_0003-600x587.jpg', 0),
(9, 'Питательный крем', 'ночной питательный крем 5 мл', '', 'Питательный крем', 'Благодаря своим органическим компонентам, ночной питательный крем Alga Ph, обеспечивает коже максимально здоровое природное питание.<br/> Помимо увлажнения он насыщает кожу минералами, витаминами и аминокислотами.', '245', '215', '12.00', 'грн', 'uploads/2018/07/5-ml_0002-600x587.jpg', 0),
(10, 'Скраб-крем клубника', 'сахарный крем-скраб 180 г', '', 'Скраб-крем клубника', 'Крем-скраб', '75', '0', '0.00', 'грн', 'uploads/2018/10/180-g_scrub-cream__02-600x587.jpg', 0),
(11, 'Скраб-крем ананас', 'сахарный крем-скраб 180 г', '', 'Скраб-крем ананас', 'Крем-скраб', '75', '0', '0.00', 'грн', 'uploads/2018/10/180-g_scrub-cream__04-600x587.jpg', 0),
(12, 'Скраб-крем красные ягоды', 'сахарный крем-скраб 180 г', '', 'Скраб-крем красные ягоды', 'Крем-скраб', '75', '0', '0.00', 'грн', 'uploads/2018/10/180-g_scrub-cream__05-600x587.jpg', 0),
(13, 'Скраб-крем фруктовый микс', 'сахарный крем-скраб 180 г', '', 'Скраб-крем фруктовый микс', 'Крем-скраб', '75', '0', '0.00', 'грн', 'uploads/2018/10/180-g_scrub-cream__05-600x587.jpg', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Jake Weber', 'randal12@example.net', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'jUblahTfQa', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(2, 'Lonie Senger DVM', 'skylar36@example.net', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'OlM8Orm1Cg', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(3, 'Ms. Alessandra Prohaska', 'maye54@example.org', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'KbWSBAjTKt', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(4, 'Mr. Leo Legros', 'iconn@example.net', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'ztObSRsyXf', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(5, 'Stephan Goodwin Jr.', 'schmitt.lera@example.net', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'ShNTGxlME3', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(6, 'Phyllis Pouros', 'lavada25@example.net', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'vX6cWACdo7', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(7, 'Rhett Murazik', 'sdickens@example.org', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'u77HXN1BW0', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(8, 'Barton Bartell', 'schmeler.dandre@example.org', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'Wc9jmRkNdU', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(9, 'Arden Erdman', 'erling24@example.net', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'WI7qDJOUUw', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(10, 'Mr. Morton Stracke Sr.', 'concepcion.cormier@example.com', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', '5OdlOJnWyx', '2019-02-17 07:11:18', '2019-02-17 07:11:18');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Индексы таблицы `categories_relationship`
--
ALTER TABLE `categories_relationship`
  ADD KEY `object_id` (`object_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `categories_relationship`
--
ALTER TABLE `categories_relationship`
  ADD CONSTRAINT `categories_relationship_ibfk_1` FOREIGN KEY (`object_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
