# Social Media App Technical Documentation
## Introduction

📱 The Social Media App is a web application designed for social networking, allowing users to create posts, interact with other users, and engage in discussions.

## Installation

To run the Social Media App locally, follow these steps:

1. Clone the repository from [GitHub](https://github.com/almaskhan1286/Socail-Media-App.git).
2. Ensure Node.js and npm are installed on your system.
3. Install dependencies using `npm install`.

## Architecture

The project consists of several modules responsible for different aspects of the application:

- 🖥️ **API.js:** Handles interactions with the backend API, including fetching posts, posting new content, and updating posts.
- 👤 **User.js:** Defines a class structure for user data and methods to display user information.
- 🤵 **user-manager.js:** Coordinates between the API and rendering logic, fetching users from the API, and rendering user data on the front end.
- 📝 **Post.js:** Represents the structure of a single post and handles its rendering logic.
- 💬 **comment-manager.js:** Manages comments, including posting, editing, and deleting comments.
- 💬 **Comment.js:** Defines the structure of comments and encapsulates comment data.

## Usage

To use the Social Media App:

- Fetching Users: Call the `fetchAndHandleUsers()` function from `user-manager.js`.
- Rendering Posts: Call the `fetchPostsAndRender()` function from `post-manager.js`.
- Posting Comments: Use the comment form with the ID `post-comment`.

## API Automation System

The Social Media App utilizes a robust API automation system to handle interactions with the backend server.
The only thing is to just pass the api url with its method it  **automatically** 🚀 handle fetching data and show data

### API Methods 🚀

- `request(url, methodName)`: Makes API requests with error handling and logging.
- `generateFetchMethod(apiUrl, methodName)`: Generates fetch methods for specific API endpoints.

## Manager Files

The Social Media App incorporates manager files to segregate the responsibilities between class-based approaches and pure JavaScript functionalities.

### PostManager.js

- Orchestrates the class-based approach for managing posts.
- Renders posts fetched from the API.
- Handles user interactions.

### CommentManager.js

- Governs pure JavaScript functions and custom logics associated with comments.
- Manages posting, editing, and deleting comments.
- Handles local data management.

## Development Workflow

- Implement proper error handling and logging.
- Follow consistent coding standards and best practices.
- Test individual components and functionalities thoroughly.

## Troubleshooting and Debugging

- Utilize console logging for error messages and debugging.
- Monitor network requests and server responses.

## Security Considerations

- Ensure secure handling of user authentication tokens and sensitive data.
- Implement proper authentication and authorization mechanisms.



**These files are fully structured 🚀 and follow the law of separation each and every functionality is separate reponsible only one functionality and also encapsulate the data and various methods into the class**