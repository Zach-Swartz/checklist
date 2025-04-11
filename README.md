To compile and run this application after downloading it from GitHub for the first time, follow these steps:

1. Install Node.js
Ensure you have Node.js installed on your system. You can download it from Node.js Official Website.
Verify installation:
node -v
npm -v

2. Clone the Repository
Clone the GitHub repository to your local machine:
git clone https://github.com/JoshD888/checklist.git
Navigate to the project directory:
cd checklist

3. Install Dependencies
The project likely has two main folders: Frontend and Backend. You need to install dependencies for both.
Frontend
Navigate to the Frontend folder:
cd Frontend
Install dependencies:
npm install
Backend
Navigate to the Backend folder:
cd ../Backend
Install dependencies:
npm install

4. Set Up the Backend
Start the backend server:
node src/index.js
If the backend uses environment variables (e.g., for database connections), ensure you create a .env file in the Backend directory and configure it as needed. Check the repository documentation or ask the project owner for details.

5. Set Up the Frontend
Navigate back to the Frontend folder:
cd ../Frontend
Start the frontend development server:
npm start
This will start the React application and open it in your default browser at http://localhost:3000.

6. Verify the Application
Ensure the backend is running on http://localhost:3001.
Open the frontend in your browser (http://localhost:3000) and test the application.

7. Optional: Build for Production
If you want to create a production build of the frontend:
npm run build
This will generate a build folder in the Frontend directory, which can be deployed to a web server.

Summary of Commands
# Clone the repository
git clone https://github.com/JoshD888/checklist.git
cd checklist
# Install dependencies
cd Frontend
npm install
cd ../Backend
npm install
# Start the backend
node src/index.js
# Start the frontend
cd ../Frontend
npm start
