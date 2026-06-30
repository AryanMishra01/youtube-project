# Project Documentation

## 1. Project Overview

This repository contains a React-based YouTube-style application built with Create React App, Tailwind CSS, Redux Toolkit, and React Router. The project focuses on core video browsing workflows such as browsing popular videos, filtering by category, searching for videos, viewing video details, and reading comments.

The implementation is intentionally centered on a simplified but functional user experience rather than a full production-ready video platform.

## 2. Architecture

The application follows a component-driven architecture with centralized state management.

- The root application is initialized in [src/App.js](../src/App.js) and wraps the UI with the Redux store and router provider.
- Route-based rendering is handled by React Router, with the main layout defined in [src/components/Body.js](../src/components/Body.js).
- Feature-specific UI is separated into components that manage their own local state for loading, errors, and fetched data.
- Shared configuration values such as API endpoints and category mappings are centralized in [src/utils/constants.js](../src/utils/constants.js).

## 3. Folder Structure

- [src/components](../src/components) contains presentational and page-level components.
- [src/utils](../src/utils) contains Redux slices and shared constants.
- [src/App.js](../src/App.js) defines application routes and provider setup.
- [src/App.test.js](../src/App.test.js) contains the current test entry point.

## 4. Features

The current implementation includes the following user-facing features:

- Home page with a video grid of popular videos
- Category selection for browsing different video groups
- Search experience that navigates to a dedicated results page
- Watch page with an embedded video player and video metadata
- Comments section for the selected video
- Responsive, simple UI styling using Tailwind CSS

## 5. Components

The main components are:

- [src/components/Body.js](../src/components/Body.js): Provides the shared layout with the header, sidebar, and outlet for routed content.
- [src/components/Head.js](../src/components/Head.js): Renders the top navigation bar, search input, and menu toggle.
- [src/components/Sidebar.js](../src/components/Sidebar.js): Displays primary navigation and video category links.
- [src/components/MainContainer.js](../src/components/MainContainer.js): Hosts the main video browsing experience.
- [src/components/VideoContainer.js](../src/components/VideoContainer.js): Fetches and displays videos for the selected category.
- [src/components/VideoCard.js](../src/components/VideoCard.js): Renders an individual video card and navigates to the watch page.
- [src/components/WatchPage.js](../src/components/WatchPage.js): Displays the selected video, metadata, and related comments.
- [src/components/SearchResults.js](../src/components/SearchResults.js): Shows search results for the current query.
- [src/components/CommentsContainer.js](../src/components/CommentsContainer.js): Loads and renders comments for the active video.
- [src/components/Comment.js](../src/components/Comment.js): Renders a single comment entry.

## 6. Routing

Routing is handled through React Router with a single route layout.

- `/` renders the home page and video feed.
- `/watch?v=<videoId>` renders the watch page for a selected video.
- `/results?search_query=<query>` renders the search results page for a search query.

## 7. State Management

State is managed with Redux Toolkit.

- [src/utils/appSlice.js](../src/utils/appSlice.js) manages UI state for the sidebar toggle and the selected video.
- [src/utils/searchSlice.js](../src/utils/searchSlice.js) defines a search cache slice, although it is not yet actively used in the current UI flow.
- Local component state is used for loading, errors, and fetched data where appropriate.

## 8. API Integrations

The application integrates with the YouTube Data API through configuration defined in [src/utils/constants.js](../src/utils/constants.js).

The current API usage includes:

- Popular videos feed
- Video details for the watch page
- Search results for the search view
- Comments for the selected video
- Sidebar categories from YouTube video categories

## 9. Configuration

The project uses environment variables for API access. The YouTube API key is expected to be available through the `REACT_APP_YOUTUBE_API_KEY` environment variable.

Other project setup includes:

- React and React DOM
- Redux Toolkit and React Redux
- React Router DOM
- Tailwind CSS and related build tooling

## 10. Accessibility

The current implementation includes several accessibility-focused enhancements:

- Semantic navigation and main content regions
- ARIA labels on interactive controls and navigation landmarks
- Skip-navigation link for keyboard users
- Visible focus styles for buttons and links
- Live regions for loading and error states

These measures improve usability for keyboard and screen reader users.

## 11. Testing

Testing is currently minimal. The repository includes the default Create React App test setup and an initial placeholder test in [src/App.test.js](../src/App.test.js).

The current testing approach is primarily structural and does not yet cover the main user journeys or component behavior in depth.

## 12. Performance

The application uses lightweight component state and asynchronous fetching to keep the UI responsive. It also avoids unnecessary repeated requests by using abortable fetch requests where appropriate for category, search, and video detail loading.

## 13. Known Issues

- The search cache slice in [src/utils/searchSlice.js](../src/utils/searchSlice.js) is defined but not yet integrated with the UI.
- The current test suite does not yet cover core behaviors such as routing, search, and video loading.
- Some UI elements remain simplified and may require further refinement for full production parity.

## 14. Future Improvements

Potential future improvements include:

- Expanding test coverage for important user flows
- Integrating the search cache for improved request efficiency
- Refining the UI and interaction details to more closely match a full YouTube experience
- Adding stronger error handling and loading states across additional flows

## 15. Revision History

- Date: 2026-06-30
- Updated Sections: Project Overview, Architecture, Folder Structure, Features, Components, Routing, State Management, API Integrations, Configuration, Accessibility, Testing, Performance, Known Issues, Future Improvements
- Summary: Created the initial project documentation based on the current implementation.
- Reason: Establish the first maintained documentation baseline for the repository.