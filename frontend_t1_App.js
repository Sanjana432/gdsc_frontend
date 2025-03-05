import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

// Authentication helper
const authenticateUser = async (email, password) => {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      email,
      password,
    });
    return response.data.token;
  } catch (error) {
    console.error('Login failed:', error);
    return null;
  }
};

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Redirect to="/login" />;
  }
  return children;
};

function App() {
  const [auth, setAuth] = useState(false);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const postsPerPage = 5;

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts');
        setPosts(response.data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setPosts(filteredPosts);
  };

  const handleSort = (criteria) => {
    const sortedPosts = [...posts].sort((a, b) => {
      if (criteria === 'likes') return b.likes - a.likes;
      if (criteria === 'date') return new Date(b.createdAt) - new Date(a.createdAt);
      return 0;
    });
    setPosts(sortedPosts);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  };

  const handleLogin = async (email, password) => {
    const token = await authenticateUser(email, password);
    if (token) {
      localStorage.setItem('token', token);
      setAuth(true);
    }
  };

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : ''}>
        <header>
          <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </header>

        <Switch>
          <Route path="/login">
            <div>
              <h2>Login</h2>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={() => handleLogin(email, password)}>Login</button>
            </div>
          </Route>

          <ProtectedRoute path="/posts">
            <div>
              <input
                type="text"
                placeholder="Search posts"
                value={search}
                onChange={handleSearch}
              />
              <button onClick={() => handleSort('likes')}>Sort by Likes</button>
              <button onClick={() => handleSort('date')}>Sort by Date</button>

              {posts.map((post) => (
                <div key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  <p>Likes: {post.likes}</p>
                  <Link to={`/post/${post.id}`}>View Details</Link>
                </div>
              ))}
            </div>
          </ProtectedRoute>

          <ProtectedRoute path="/post/:id">
            <PostDetail />
          </ProtectedRoute>

          <ProtectedRoute path="/user/:id">
            <UserProfile />
          </ProtectedRoute>

          <Route path="/" exact>
            <h1>Welcome to the Social Media App</h1>
            <Link to="/login">Login</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const PostDetail = ({ match }) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const postResponse = await axios.get(`https://dummyjson.com/posts/${match.params.id}`);
        setPost(postResponse.data);
        const commentsResponse = await axios.get(`https://dummyjson.com/posts/${match.params.id}/comments`);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };
    fetchPostDetails();
  }, [match.params.id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h3>Comments:</h3>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

const UserProfile = ({ match }) => {
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userResponse = await axios.get(`https://dummyjson.com/users/${match.params.id}`);
        setUser(userResponse.data);
        const postsResponse = await axios.get(`https://dummyjson.com/users/${match.params.id}/posts`);
        setUserPosts(postsResponse.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
    fetchUserProfile();
  }, [match.params.id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>Posts:</h3>
      {userPosts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default App;
