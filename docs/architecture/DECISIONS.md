# Engineering Decisions

## Purpose

This document records the main engineering decisions that are visible in the current implementation.

## Decisions

| Topic | Decision | Evidence in Repository | Rationale |
| --- | --- | --- | --- |
| UI architecture | Use React components with route-based composition | [src/App.js](../../src/App.js), [src/components](../../src/components) | The application is structured around reusable components and route-based rendering. |
| State management | Use Redux Toolkit for shared UI state | [src/utils/store.js](../../src/utils/store.js), [src/utils/appSlice.js](../../src/utils/appSlice.js) | The sidebar menu state and selected video state are shared across components. |
| Styling | Use Tailwind CSS for component styling | [package.json](../../package.json), [src/index.css](../../src/index.css) | Tailwind is configured in the project dependencies and build setup. |
| Navigation | Use React Router for page-level navigation | [src/App.js](../../src/App.js) | The app routes between home, watch, and search results views. |
| Data integration | Use the YouTube Data API for content and metadata | [src/utils/constants.js](../../src/utils/constants.js) | The implementation fetches videos, details, comments, and categories from YouTube endpoints. |
| Deployment | Use Firebase Hosting workflows for preview and production deploys | [.github/workflows](../../.github/workflows) | Repository workflows define Firebase hosting deployment steps. |

## Notes

These decisions reflect the current implementation and should be revisited if the project evolves toward a more complex architecture.

## Revision History

- Date: 2026-06-30
- Document: architecture/DECISIONS.md
- Sections Updated: Initial baseline documentation
- Reason: Capture the main engineering decisions that are directly visible in the implemented repository.
- Summary: Documented the current state-management, routing, styling, and deployment choices based on repository evidence.
