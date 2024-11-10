# PixelSpring

**PixelSpring** is a fullstack project for uploading and downloading images, developed with **React.js** and **Spring Boot**. The goal is to provide a simple and functional interface for managing images, focusing on a scalable and maintainable architecture.

## Technologies Used

The project was developed using the following technologies:

- **React.js, TypeScript, and Next.js**: Used to build modern interfaces, widely adopted by companies around the world.
- **Spring Boot**: Framework for developing REST APIs, with support for databases and security.
- **Tailwind CSS**: Quickly and consistently styles the user interface.
- **PostgreSQL**: A relational database used to store and manage data efficiently.
- **Docker**: Used for building and deploying the application in containers, ensuring portability and scalability.

## Features

- **User Authentication (Login and Signup)**: Allows users to register and log in, with support for public and private routes, using **JWT** security.
- **Image Upload**: Users can upload images to the platform, supporting common formats such as **JPEG**, **PNG**, and others.
- **Search and Filter Images**: Makes it easier to search for images in the database by name or file type.
- **Image Tags**: Users can add tags to images for better categorization. Multiple tags can be assigned to each image to aid in search and organization.
- **Responsive Design**: The application features a responsive design, ensuring an optimal user experience on desktop, tablet, and mobile devices.

## Prerequisites

Before running the project, ensure that you have the following software installed:

- **Node.js** (version 14 or higher)
- **Java JDK** (version 17 or higher)
- **Docker** (to run the application in containers)
- **PostgreSQL** (for the database, if you opt to run it locally)

## Setup and Running the Application

### 1. Clone the repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/username/pixelspring.git
cd pixelspring
```
### 2. Database Setup

Configure your PostgreSQL database, or use Docker Compose to automatically set up the database container. You will need to update the database credentials in the `application.properties` file in the back-end directory.

### 3. Docker Setup

The project includes a `start.sh` script that automatically configures and starts the services (API, front-end, and database) using **Docker Compose**.

To start the application, run:

```bash
./start.sh
```

### 4. Accessing the Application

Once the containers are up and running, you can access the application at: `http://localhost:3000`


## Project Structure

Here is an overview of the project's directory structure:

- **pixelspringapi/**: The back-end application written in **Spring Boot**.
- **pixelspring/**: The front-end application written in **React/Next.js**.
- **docker-compose.yml**: Docker Compose configuration file for running all services (API, front-end, and database) in containers.
- **start.sh**: Script that starts the application, configuring Docker and the necessary services.

## Deploy

The API, front-end application, and database have been deployed using **Render** and **Neon** for seamless cloud hosting and database management.

And are live and accessible via [PixelSpring](https://pixelspring-app.onrender.com/) 



