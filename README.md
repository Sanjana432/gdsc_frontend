# gdsc_frontend
TASK 2 Mood-Based Theme Switcher App
This project is a React-based mood-based theme switcher that dynamically changes the UI theme based on the user's selected mood. It includes various features like state management, conditional rendering, event handling, and component reusability. Additionally, it integrates AI-powered features, such as suggesting theme colors based on mood, and includes other fun additions, like mood-based music recommendations.

Key Features
Core Features
State Management: Utilizes useState to store the current theme and mood, ensuring seamless updates across the app.
Props & Component Reusability: The ThemeProvider component manages theme updates, and other components like MoodSelector can be reused for various moods.
Event Handling: Users can select a mood through buttons, and the UI will dynamically update.
Conditional Rendering: The app adjusts its UI components, including background colors and text, based on the selected mood.
AI-Powered Features
AI-Generated Theme Suggestions: Uses OpenAI's API to suggest a color theme based on the current mood.
Sentiment Analysis: Analyzes the sentiment of user input and auto-selects the corresponding mood (e.g., "happy", "sad", "calm").
Additional Enhancements (Optional)
Framer Motion Animations: Dynamic and mood-based animations are applied (e.g., bouncy effects for "Happy", slow fades for "Calm").
Gradient Backgrounds: Background colors dynamically change based on the mood.
Interactive Elements: Buttons and UI elements react differently depending on the selected mood.
Personalization & Persistence:
Local Storage support to remember the last selected mood and theme.
Users can tweak colors and styles for each mood.
Independent Dark/Light Mode toggle for accessibility.
Mood-Based Music Recommendation: Integrates with the Spotify API to recommend music based on the mood.
Mood-Based UI Sounds: Adds sound effects (like chimes) based on the selected mood.
Bonus Challenge
"Surprise Me" Button: A button that randomly selects a mood and its corresponding theme.
Project Setup
1. Install Dependencies
You need to install the necessary dependencies to run this project. In your project directory, run:

bash
Copy
npm install react axios framer-motion sentiment
axios: For fetching data from external APIs like OpenAI and Spotify.
framer-motion: For smooth animations.
sentiment: For analyzing text sentiment.
2. API Keys
Make sure you have valid API keys for:

OpenAI API: For AI-generated theme suggestions.
Spotify API: For music recommendations.
Add your API keys in the relevant sections of the code:

javascript
Copy
Authorization: `Bearer YOUR_OPENAI_API_KEY`
javascript
Copy
Authorization: `Bearer YOUR_SPOTIFY_API_KEY`
3. Run the App
To start the app, run:

bash
Copy
npm start
The app should be running on http://localhost:3000.

File Structure
markdown
Copy
/src
  /components
    - AIThemeSuggestion.js
    - MoodSelector.js
    - SentimentAnalysis.js
    - SpotifyMusic.js
    - SurpriseMeButton.js
    - ThemeProvider.js
    - App.js
  - index.js
Description of Key Components
ThemeProvider.js
The ThemeProvider component manages the global theme and mood state using the useState hook. It also saves the user's last selected mood and theme to localStorage to maintain persistence between app reloads.

MoodSelector.js
The MoodSelector component allows users to select a mood, which in turn updates the theme of the app. It displays buttons for selecting moods like "Happy", "Calm", and "Sad".

AIThemeSuggestion.js
This component uses the OpenAI API to suggest a color theme based on the selected mood. The theme suggestions are fetched dynamically and displayed below the mood selector.

SpotifyMusic.js
This component uses the Spotify API to fetch music recommendations based on the current mood and displays them as a list of tracks.

SurpriseMeButton.js
The "Surprise Me" button generates a random mood and automatically switches the theme accordingly.

SentimentAnalysis.js
A component that uses the Sentiment package to analyze user input from a textarea and automatically sets the mood to "happy", "calm", or "sad" based on the text sentiment.

App.js
The main app component that connects everything together, including dynamic background color changes, animations, and rendering mood-based suggestions.

RootApp.js
Wraps the entire application with the ThemeProvider to ensure the theme and mood context is available throughout the app.

Usage
Selecting a Mood
Click the "Happy", "Calm", or "Sad" buttons to change the theme.
The theme will update immediately, changing background colors, text colors, and other elements based on the selected mood.
AI Theme Suggestion
Based on the selected mood, the app will query OpenAI's API and display a color theme suggestion.
Sentiment Analysis
Type text in the provided textarea, and the app will automatically analyze the sentiment of the text and select the corresponding mood.
Surprise Me!
Press the "Surprise Me!" button to randomly change the mood and theme.
Music Recommendations
The app will show music recommendations from Spotify based on the selected mood.
Future Enhancements
User-Customized Mood Themes: Allow users to manually adjust colors for each mood.
Accessibility: Add additional accessibility features, such as high contrast modes or text-to-speech options for visually impaired users.
Persistent Mood Audio: Play background music or sounds according to the selected mood.




task1 
# Social Media App

This is a fully responsive social media app built using React. It allows users to view and interact with posts using the DummyJSON API.

## Features

- **User Authentication**: JWT-based login and protected routes.
- **Post Feed**: Fetch and display posts with likes, content, and tags.
- **Search, Sort, and Pagination**: Search posts by keywords, sort by likes or date, and paginate the post feed.
- **Post Details & Comments**: View detailed posts and their associated comments.
- **User Profile Page**: View a user's profile and their posts.
- **Light/Dark Mode Toggle**: Switch between light and dark themes.
