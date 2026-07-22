# Personal Blog App

A modern React-based blog application where users can browse posts, view detailed blog content, create their own posts, and save their favorite blogs using bookmarks.

This project was built using React concepts including components, state management, routing, API integration, and Jotai global state management.

---

## Features

### Home Page

- Fetches blog posts from DummyJSON API
- Displays posts as reusable blog cards
- Shows loading state while fetching data
- Shows error messages when API requests fail
- Users can click a blog card to view full details

### Blog Details Page

- Dynamic routing using React Router
- Fetches a single blog post using its ID
- Displays:
  - Post title
  - Post content
  - Tags
  - Comments
- Allows users to bookmark/unbookmark posts
- Includes a back button to return to the home page

### Create Post Page

- Users can create their own blog posts
- Form handling using React state
- Stores created posts in browser localStorage
- Redirects back to Home after submission

### Bookmarks Page

- Displays saved blog posts
- Uses Jotai for global bookmark state management
- Allows users to manage favorite posts

---

## Technologies Used

- React.js
- React Router DOM
- Jotai (Global State Management)
- Tailwind CSS
- Lucide React Icons
- DummyJSON API
- Local Storage

---

## Project Structure

src
|**atoms
||**bookmarkAtoms.jsx
|
├── components
│ ├── Navbar.jsx
│ ├── BlogCard.jsx
│ ├── BlogForm.jsx
│
│
├── pages
│ ├── Home.jsx
│ ├── BlogDetails.jsx
│ ├── CreatePost.jsx
│ └── Bookmarks.jsx
│
├── App.jsx
└── main.jsx
|\_\_index.css

---

## API Used

This project uses DummyJSON API:

Posts:

https://dummyjson.com/posts

Single Post:

https://dummyjson.com/posts/:id

Comments:

https://dummyjson.com/comments/post/:id

---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/blog-app.git

Go into the project folder:

cd blog-app

Install dependencies:

npm install

Run the development server:

npm run dev

The application will run on:

http://localhost:5173
 Dependencies

Install required packages:

npm install react-router-dom jotai lucide-react
 Data Storage

The application uses:

Jotai → Manage bookmark state globally
localStorage → Store user-created blog posts
 Screenshots

(Add screenshots of your application here)

 Future Improvements
User authentication
Edit and delete created posts
Search and filter blogs
Dark mode
Backend integration
Database storage
 Author

Your Name:Sifen Beyan

GitHub:
https://github.com/sifen-Tech

```
