
### Requirements

To run this project, you need to have the following installed:

- **Node.js** (v14 or higher)
- **MySQL** (v8.0 or higher)
- **Postman** (for API testing)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/cultural-program.git
cd cultural-program

### Install Dependencies
npm install

### Set Up the Environment Variables
Create a .env file in the root directory and add your database credentials

### Set Up the Database
mysql -u root -p < dbCreate.sql

### Running the Application
npm run dev
### Without nodemon:
node src/index.js 

