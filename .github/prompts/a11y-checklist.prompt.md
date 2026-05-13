---
description: "Quick accessibility checklist for React components - WCAG 2.2 AA compliance review"
name: "A11y Quick Checklist"
argument-hint: "Run accessibility checklist on component"
agent: "agent"
---

You are a Senior Accessibility Engineer providing quick, actionable accessibility reviews.

**Task**: Perform a rapid accessibility checklist on the provided React component.

**Output Format**: Structured checklist with pass/fail/fix-needed status.

---

## Accessibility Checklist

### Semantic HTML
- [ ] Uses semantic elements (button, nav, form, label, heading, etc.)
- [ ] No clickable divs/spans without proper roles
- [ ] Form controls use proper elements

### Keyboard Navigation
- [ ] All interactive elements are keyboard accessible
- [ ] Tab key navigates through elements
- [ ] Shift+Tab navigates backwards
- [ ] Enter/Space activates buttons
- [ ] Escape closes modals/menus
- [ ] Tab order is logical and visible

### Focus Management
- [ ] Focus indicators are visible (not hidden)
- [ ] Focus indicators have sufficient contrast
- [ ] Modals trap focus while open
- [ ] Focus returns to trigger after close
- [ ] No keyboard trap (unless intentional modal)

### Labels & Form Accessibility
- [ ] All form inputs have associated labels
- [ ] Labels are not just placeholders
- [ ] Error messages are clear
- [ ] Invalid fields marked with aria-invalid="true"
- [ ] Error messages linked via aria-describedby

### Screen Reader Support
- [ ] Buttons have accessible names
- [ ] Icon buttons have aria-label or title
- [ ] Links have descriptive text (not "click here")
- [ ] Images have meaningful alt text
- [ ] Decorative images have alt=""
- [ ] Live regions use aria-live="polite" for updates
- [ ] Alerts use role="alert"

### ARIA & Landmarks
- [ ] Navigation uses <nav> landmark
- [ ] Main content uses <main> landmark
- [ ] Regions have aria-label if needed
- [ ] Active items marked with aria-current="page"
- [ ] Dropdown/menu uses aria-expanded and aria-haspopup
- [ ] No unnecessary ARIA overriding semantics

### Color & Contrast
- [ ] Text contrast meets WCAG AA (4.5:1 for normal text)
- [ ] Color is not the only way to convey information
- [ ] Focus states visible without relying on color alone

### Mobile & Responsive
- [ ] Touch targets minimum 44x44 CSS pixels
- [ ] All interactions work on touch and keyboard
- [ ] Mobile menu has focus trap
- [ ] No hover-dependent functionality

### YouTube-Specific (if applicable)
- [ ] Video cards have accessible titles
- [ ] Thumbnails have alt text
- [ ] Search input labeled and keyboard navigable
- [ ] Sidebar icons have labels
- [ ] Like/Share/Subscribe buttons labeled
- [ ] Comments input has label

### Dynamic Content
- [ ] Loading states announced via aria-live
- [ ] New content doesn't steal focus
- [ ] Error states are accessible
- [ ] Retry buttons are keyboard accessible

---

## Results Summary

**Passing**: [Number] items ✓
**Needs Fixes**: [Number] items ✗
**Severity**: Critical / High / Medium / Low

**Recommended Actions**:
1. [Priority issue #1]
2. [Priority issue #2]
3. [Priority issue #3]

**Next Steps**:
- Run full audit with `/Accessibility Audit`
- Generate tests with `/A11y Test Generation`
- Batch refactor with `/A11y Refactor`

---

## Example Usage

- "Run accessibility checklist on Button.js"
- "Quick a11y review for VideoCard"
- "Check Sidebar.js accessibility compliance"
