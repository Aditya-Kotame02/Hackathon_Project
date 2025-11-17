DROP DATABASE IF EXISTS blogmangement_db;
CREATE DATABASE blogmangement_db;
USE blogmangement_db;

CREATE TABLE users(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(100),
    phone_no VARCHAR(10),
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE blogs(
    blog_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    contents VARCHAR(300),
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    user_id INT,
    category_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE ON UPDATE CASCADE

);

CREATE TABLE categories(
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    description VARCHAR(300)
);