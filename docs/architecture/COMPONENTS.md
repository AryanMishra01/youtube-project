# Components

## Purpose

This document summarizes the major React components currently implemented in the repository and their responsibilities.

## Component Inventory

### App Shell

- [src/App.js](../../src/App.js): Boots the application, provides the Redux store, and defines the router configuration.

### Layout and Navigation

- [src/components/Body.js](../../src/components/Body.js): Renders the shared layout with the header, sidebar, and routed content.
- [src/components/Head.js](../../src/components/Head.js): Provides the top navigation bar, search input, menu toggle, and home link.
- [src/components/Sidebar.js](../../src/components/Sidebar.js): Displays primary navigation and category links derived from API data.

### Main Experience

- [src/components/MainContainer.js](../../src/components/MainContainer.js): Hosts the main content area for the home experience.
- [src/components/VideoContainer.js](../../src/components/VideoContainer.js): Fetches and displays videos for the selected category.
- [src/components/ButtonList.js](../../src/components/ButtonList.js): Renders category selection controls.
- [src/components/Button.js](../../src/components/Button.js): Renders the individual category button.
- [src/components/VideoCard.js](../../src/components/VideoCard.js): Presents a single video item and routes to the watch page.

### Video Detail and Search Views

- [src/components/WatchPage.js](../../src/components/WatchPage.js): Renders the selected video, metadata, and comments experience.
- [src/components/SearchResults.js](../../src/components/SearchResults.js): Displays search results based on the current query.

### Comments

- [src/components/CommentsContainer.js](../../src/components/CommentsContainer.js): Fetches and renders comments for the selected video.
- [src/components/Comment.js](../../src/components/Comment.js): Renders a single comment entry.

## Component Relationships

- The shared layout in [src/components/Body.js](../../src/components/Body.js) hosts route-based content through React Router.
- The home experience flows from [src/components/MainContainer.js](../../src/components/MainContainer.js) into [src/components/VideoContainer.js](../../src/components/VideoContainer.js).
- Selecting a video card updates shared state and routes to the watch page.
- The watch page renders the comments section as a nested component.

## Notes

The component structure is intentionally simple and follows a clear separation between layout, content browsing, detail views, and comment rendering.

## Revision History

- Date: 2026-06-30
- Document: architecture/COMPONENTS.md
- Sections Updated: Initial baseline documentation
- Reason: Establish the first baseline component reference from the implemented repository.
- Summary: Documented the current component inventory and responsibilities based on the repository source files.
