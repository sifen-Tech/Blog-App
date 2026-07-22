# Personal Blog App

A modern and responsive blog application built with **React**, **React Router**, **Jotai**, and **Tailwind CSS**. Users can browse blog posts, read full articles, create their own posts, and save favorite blogs using bookmarks.

This project demonstrates modern React development concepts, including component-based architecture, client-side routing, global state management, API integration, and local storage.

---

## Preview

### Home Page

![Home Page](./screenshots/home.png)

### Blog Details

![Blog Details](./screenshots/details.png)

### Create Post

![Create Post](./screenshots/create-post.png)

### Bookmarks

![Bookmarks](./screenshots/bookmarks.png)

---

## Features

### Home Page

- Fetches blog posts from the DummyJSON API
- Displays blogs in reusable cards
- Responsive card layout
- Loading and error states
- "Read More" navigation to blog details

### Blog Details

- Dynamic routing with React Router
- Displays:
  - Blog title
  - Full blog content
  - Tags
  - Comments
- Bookmark and remove bookmarks
- Back navigation to Home

### Create Post

- Create custom blog posts
- Form validation
- Stores posts in Local Storage
- Redirects to Home after publishing

### Bookmarks

- Save favorite blog posts
- Remove bookmarked blogs
- Global bookmark state using Jotai

### User Interface

- Responsive design
- Mountain background theme
- Glassmorphism cards
- Modern navigation bar
- Consistent spacing across pages

---

## Technologies Used

- React.js
- React Router DOM
- Jotai
- Tailwind CSS
- Lucide React
- DummyJSON API
- Local Storage
- Vite

---

## Project Structure

```
src
│
├── atoms
│   └── bookmarkAtoms.jsx
│
├── components
│   ├── BlogCard.jsx
│   ├── BlogForm.jsx
│   └── Navbar.jsx
│
├── images
│   └── mountain.png
│
├── pages
│   ├── Home.jsx
│   ├── BlogDetails.jsx
│   ├── CreatePost.jsx
│   └── Bookmarks.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## API

This project uses the **DummyJSON API**.

### Get All Posts

```
https://dummyjson.com/posts
```

### Get Single Post

```
https://dummyjson.com/posts/:id
```

### Get Comments

```
https://dummyjson.com/posts/:id/comments
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/sifen-Tech/Blog-App.git
```

### Navigate to the project folder

```bash
cd Blog-App
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## Dependencies

```bash
npm install react-router-dom
npm install jotai
npm install lucide-react
npm install tailwindcss
```

---

## Data Storage

The application uses two different storage methods:

### Local Storage

Used to store:

- User-created blog posts

### Jotai

Used to manage:

- Global bookmark state

---

## React Concepts Demonstrated

- Functional Components
- React Hooks
- useState
- useEffect
- React Router
- Dynamic Routes
- Conditional Rendering
- Component Reusability
- Props
- Global State Management
- Local Storage
- API Fetching
- Form Handling

---

## Future Improvements

- Search functionality
- Tag filtering
- Like system
- Edit posts
- Delete posts
- User authentication
- Dark/Light mode
- Backend integration
- Database storage
- Image uploads
- Pagination

---

## Author

**Sifen Beyan**

GitHub: https://github.com/sifen-Tech

---

## Support

If you like this project, consider giving it a ⭐ on GitHub!

---
