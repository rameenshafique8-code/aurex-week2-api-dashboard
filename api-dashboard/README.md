API Dashboard — Aurex Internship Week 2

Project Overview

The API Dashboard is a responsive React application developed as part of the Aurex Full-Stack Engineering Internship, Month 2, Week 2.

The application fetches user data from a public REST API and displays it in an organized dashboard. Users can search records and filter them by city.

Features

- Fetch user data from a REST API using the Fetch API.
- Display user names, email addresses, company names, and cities.
- Search users by name, email, or company.
- Filter users by city.
- Refresh dashboard data.
- Display loading indicators while data is being fetched.
- Handle API errors with a retry option.
- Display a message when no matching users are found.
- Responsive layout for different screen sizes.

Technologies Used

- React.js
- JavaScript (ES6+)
- HTML
- CSS
- Vite
- Fetch API
- React Hooks: "useState" and "useEffect"

API Used

JSONPlaceholder Users API:

https://jsonplaceholder.typicode.com/users

The application uses sample user data from this public API for demonstration purposes.

Project Structure

api-dashboard/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md

Installation and Setup

1. Install Node.js and npm.
2. Open the project folder in VS Code.
3. Open the terminal in the project directory.
4. Install the dependencies:

npm install

5. Start the development server:

npm run dev

6. Open the local URL displayed in the terminal.

Learning Outcomes

- Understanding React functional components.
- Managing application state with "useState".
- Fetching asynchronous data with "fetch()" and "async/await".
- Using "useEffect" to fetch data when a component loads.
- Implementing search and filtering functionality.
- Handling loading, error, and empty states.
- Creating a responsive user interface with CSS.

Testing

The following tests should be performed before submission:

- Verify that user data loads successfully.
- Test search functionality.
- Test city filtering.
- Verify the empty-results message.
- Test the refresh and error-recovery functionality.
- Check the layout on smaller screens.

Author

Rameen Shafique

Internship

Aurex Full-Stack Engineering Internship — Month 2, Week 2

Note

This project uses sample data from a public API. It is an educational dashboard and is not connected to a private company database.
