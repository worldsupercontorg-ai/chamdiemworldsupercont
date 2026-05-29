CREATE DATABASE pageant_system;

USE pageant_system;

CREATE TABLE contestants(

  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  country VARCHAR(255),
  image TEXT,
  total_score FLOAT DEFAULT 0

);

CREATE TABLE judges(

  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  token VARCHAR(255)

);

CREATE TABLE scores(

  id INT AUTO_INCREMENT PRIMARY KEY,
  contestant_id INT,
  judge_id INT,
  score FLOAT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
