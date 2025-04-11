# To compile and run this application after downloading it from GitHub for the first time, follow these steps:

1. Install Node.js
Ensure you have Node.js installed on your system. You can download it from Node.js Official Website.
Verify installation:
node -v
npm -v

2. Clone the Repository
Clone the GitHub repository to your local machine:
git clone [https://github.com/JoshD888/checklist.git](https://github.com/Zach-Swartz/checklist.git)
Navigate to the project directory:
cd checklist

3. Install Dependencies
The project has two main folders: Frontend and Backend. Store these in one large folder that you can title Checklist. You need to install dependencies for both.
Frontend
Navigate to the Frontend folder:
cd Frontend
Install dependencies:
npm install
Backend
Navigate to the Backend folder:
cd ../Backend
Install dependencies:
npm install express

5. Set Up the Backend
Start the backend server:
node src/index.js

6. Set Up the Frontend
Navigate back to the Frontend folder:
cd ../Frontend
Start the frontend development server:
npm start
This will start the React application and open it in your default browser at http://localhost:3000.

7. Verify the Application
Ensure the backend is running on http://localhost:3001.
Upon running npm start, the app should automatically open in your we browser.
If it doesn't automatically open, enter http://localhost:3000 in your browser to test the application.

Summary of Commands
- Clone the repository
git clone [https://github.com/JoshD888/checklist.git](https://github.com/Zach-Swartz/checklist.git)
cd checklist
- Install dependencies
cd Frontend
npm install
cd ../Backend
npm install express
- Start the backend
node src/index.js
- Start the frontend
cd ../Frontend
npm start
