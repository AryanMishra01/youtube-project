---
mode: agent
description: Analyze repository changes, identify impacted knowledge areas, review existing documentation, and maintain the Engineering Knowledge Base through incremental, approval-driven updates.
---

# Knowledge Management Workflow

## Objective

Maintain the repository Engineering Knowledge Base.

The goal is to ensure repository knowledge always reflects the latest implementation while preserving existing documentation.

Never regenerate documentation unnecessarily.

Always follow a Review → Approval → Update workflow.

---

# Scope

Maintain documentation located under:

docs/

including (but not limited to):

- PROJECT_DOCUMENTATION.md
- architecture/*
- engineering/*
- ai/*
- portfolio/*

Do not modify README.md unless explicitly requested.

---

# Phase 1 — Repository Analysis

Analyze the current repository.

Identify:

- Project structure
- Architecture
- Features
- Components
- APIs
- Routing
- State management
- Configuration
- Accessibility
- Testing
- Performance
- AI agents
- Instructions
- Prompts
- Workflows

The repository source code is the source of truth.

---

# Phase 2 — Change Detection

Determine what has changed since the current documentation was last updated.

Classify each change into one or more categories:

- Feature
- Architecture
- Component
- API
- Routing
- Configuration
- Accessibility
- Testing
- Performance
- AI Agent
- Prompt
- Instruction
- Workflow
- Engineering Decision
- Challenge
- Lesson Learned
- Best Practice

Ignore formatting-only changes.

---

# Phase 3 — Knowledge Ownership

Determine which document owns each knowledge category.

Examples:

| Category | Primary Document |
|----------|------------------|
| Feature | PROJECT_DOCUMENTATION.md |
| Architecture | architecture/ARCHITECTURE.md |
| Components | architecture/COMPONENTS.md |
| AI Agents | ai/AGENTS.md |
| Prompts | ai/PROMPTS.md |
| Instructions | ai/INSTRUCTIONS.md |
| Workflows | ai/WORKFLOWS.md |
| Lessons Learned | engineering/LESSONS_LEARNED.md |
| Challenges | engineering/CHALLENGES.md |
| Engineering Decisions | architecture/DECISIONS.md |

Only update documents responsible for the detected changes.

Never update unrelated documentation.

---

# Phase 4 — Knowledge Review

Review the existing documentation.

Compare:

Current implementation

↓

Existing knowledge

Determine:

- Missing knowledge
- Outdated knowledge
- Incorrect knowledge
- Duplicate knowledge
- Obsolete knowledge

Do NOT modify any documentation during this phase.

---

# Phase 5 — Generate Knowledge Review Report

Produce a report containing:

## Repository Summary

## Files Reviewed

## Changes Detected

## Knowledge Categories

## Affected Documents

## Recommended Updates

## Risk Assessment

## Summary

Finish with:

**No documentation has been modified. Waiting for approval.**

---

# Phase 6 — Approval Gate

Never modify documentation automatically.

Wait for explicit approval.

Examples:

- Proceed
- Apply changes
- Update documentation
- Update only Architecture
- Update only AI documentation
- Update only PROJECT_DOCUMENTATION.md

Only update approved documents.

---

# Phase 7 — Incremental Update

After approval:

Update only approved documentation.

Preserve:

- existing headings
- formatting
- manual notes
- document ordering
- revision history

Never regenerate complete documentation.

Never remove unrelated content.

---

# Phase 8 — Revision History

Whenever documentation changes:

Append a revision history entry containing:

- Date
- Documents Updated
- Sections Updated
- Reason
- Summary

Append only.

Do not overwrite previous entries.

---

# Validation

Before completing execution verify:

- Only approved documents were modified.
- Documentation matches implementation.
- No duplicate information exists.
- Manual content is preserved.
- Formatting remains consistent.
- Revision history has been updated where applicable.

---

# Completion

If no documentation changes are required, respond:

> The Engineering Knowledge Base is already up to date. No updates are required.

Do not modify any files.