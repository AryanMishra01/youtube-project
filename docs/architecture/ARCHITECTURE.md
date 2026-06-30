# Architecture

## Purpose

This document describes the current architecture of the YouTube-style React application in this repository.

## System Overview

The application is a client-side React application that renders a video browsing experience, supports route-based navigation, and integrates with the YouTube Data API for content and metadata.

## Runtime Structure

- The application entry point is [src/App.js](../../src/App.js).
- The root layout is composed in [src/components/Body.js](../../src/components/Body.js).
- Route rendering is handled with React Router.
- Shared UI state is managed through Redux Toolkit.
- API interaction is handled directly by components using the Fetch API.

## Major Layers

### Presentation Layer

Components in [src/components](../../src/components) render the UI for the header, sidebar, video grid, watch page, search results, and comments.

### State Layer

- [src/utils/store.js](../../src/utils/store.js) configures the Redux store.
- [src/utils/appSlice.js](../../src/utils/appSlice.js) manages UI state such as the sidebar and selected video.
- [src/utils/searchSlice.js](../../src/utils/searchSlice.js) defines a search cache slice for future integration.

### Data Layer

Shared API endpoints and category mappings are centralized in [src/utils/constants.js](../../src/utils/constants.js).

## Data Flow

1. The app renders the shared shell and route-specific content.
2. Components request data from YouTube endpoints.
3. Results are stored in local component state or shared Redux state.
4. Navigation routes update the viewed content and preserve selected video context.

## Dependencies

The current implementation relies on:

- React and React DOM
- React Router DOM
- Redux Toolkit and React Redux
- Tailwind CSS
- Create React App tooling

## Notes

The architecture is intentionally simple and focused on core video browsing workflows rather than a full production-grade media platform.

## Revision History

- Date: 2026-06-30
- Document: architecture/ARCHITECTURE.md
- Sections Updated: Initial baseline documentation
- Reason: Establish the first architecture baseline from the implemented repository structure.
- Summary: Documented the current React, routing, state management, and API architecture based on repository files only.
