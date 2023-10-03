
# Hieronymus Bosch Website

Welcome to the Hieronymus Bosch Website project! This React-based website is dedicated to showcasing the life and artworks of the renowned Dutch Renaissance painter Hieronymus Bosch.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment ](#deployment )

## Introduction

Hieronymus Bosch, also known as Jheronimus van Aken, was a visionary artist whose work continues to captivate and inspire. This website serves as a platform to explore his life, discover his masterpieces, and delve into the surreal world of his art.

## Features

- **Art Gallery:** View a collection of Bosch's most famous paintings, complete with detailed descriptions and historical context.

- **Biography:** Learn about the life and times of Hieronymus Bosch, from his birth to his lasting legacy.

## Installation

To get started with this project, follow these steps for react application:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/hieronymus-bosch-website.git```
2. Navigate to the project directory:
 ``cd hieronymus-bosch-website``
 3. Install project dependencies:
 ``npm install``
 4. Start the development server:
 ``npm start``
 5. Open your web browser and visit `http://localhost:3000` to view the website locally.
 For Backend:
 Since this project is a small project it uses locally run SQL database, therefore gallery part might not be shown in your project.
 To create your own database, use this code in your mySQL workbench:
 ```mysql
CREATE DATABASE Bosch;
USE Bosch;
CREATE TABLE paintings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    imageLink VARCHAR(255) NOT NULL,
    dateOfCreation VARCHAR(20),
    shortBio TEXT
);
```
## Deployment 
Deployed on: https://bosch-gallery.netlify.app/

## Comments
Todo: add responsive layout.
