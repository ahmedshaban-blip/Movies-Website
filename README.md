# FilmFlix Movie Browser
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/ahmedshaban-blip/Movies-Website)

A responsive movie browsing website built with React and Redux. This application allows users to discover movies from The Movie Database (TMDb) API, search for specific titles, view detailed information, and manage a personal list of favorite movies.

## Live Demo

[FilmFlix Movie Browser Demo](https://movies-website-neon-tau.vercel.app/)

## Features

-   **Discover Movies:** Browse lists of "Now Playing" and "Upcoming" movies fetched from the TMDb API.
-   **Movie Search:** Dynamically search for movies by title with debounced API requests for a smooth user experience.
-   **Detailed View:** Click on a movie to see its details, including poster, synopsis, rating, release date, and genres.
-   **Favorites Management:** Add movies to a "Favorites" list or remove them. The list persists across the session using Redux state.
-   **Pagination:** Navigate through multiple pages of movie results.
-   **Multilingual Support:** Toggle between English and Arabic language interfaces.
-   **Responsive Design:** A clean, dark-themed UI that is fully responsive and works on various screen sizes, built with Bootstrap and CoreUI.
-   **User Forms:** Includes functional templates for Login and Sign Up pages with client-side validation.
-   **Loading & Error States:** Skeleton loaders provide a better user experience while data is being fetched, and clear error messages are displayed on failure.

## Tech Stack

-   **Frontend:** React, React Router
-   **State Management:** Redux, Redux Thunk
-   **Styling:** Custom CSS, Bootstrap, CoreUI for React
-   **API Communication:** Axios
-   **Data Source:** [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/ahmedshaban-blip/movies-website.git
    cd movies-website
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```
    
3.  **API Key Configuration:**
    This project uses an API key from TMDb. The key is currently hardcoded in the source files (`src/action.js`, `src/MovieDetails.jsx`). For a production environment, it is highly recommended to store this in an environment variable.

4.  **Run the application:**
    ```sh
    npm start
    ```
    The app will open in your default browser at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs the app in development mode. The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

This command removes the single build dependency from your project and copies all configuration files and transitive dependencies (webpack, Babel, etc.) into your project, giving you full control over them.
