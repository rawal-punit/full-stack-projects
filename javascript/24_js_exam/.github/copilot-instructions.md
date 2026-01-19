# Task Manager System - Copilot Instructions

## Project Overview
A vanilla JavaScript Task Management System with CRUD operations, local storage persistence, priority-based filtering, and search functionality.

## Architecture & Key Components

### Data Layer
- **Global State**: `tasks` array initialized from localStorage on page load
  - Each task object: `{id: string, title: string, description: string, dueDate: string, priority: string}`
  - IDs generated using `Date.now().toString()` for uniqueness
- **Persistence**: Functions `saveTasks()` and `loadTasks()` handle localStorage sync
  - Always call `saveTasks()` after modifying the `tasks` array

### Core Workflow Pattern
1. **Add/Edit**: `addTask()` - validates title and dueDate, checks for existing id, updates or creates task
2. **Display**: `displayTasks()` - applies filters and renders all tasks dynamically
3. **Modify/Remove**: Individual task buttons trigger `editTask()` and `deleteTask()`
4. **Filter**: Combines priority filter and search text via `displayTasks()`

## Implementation Conventions

### Form Handling
- Hidden input `taskId` stores the current editing task's ID (empty for new tasks)
- Validation required: title (non-empty after trim) and dueDate (must have value)
- Success: Clear all input fields after `addTask()` or `editTask()`

### Priority System
- Values: "Low", "Medium", "High"
- Filter dropdown `#priorityFilter` with "All Priorities" default
- Search input applies case-insensitive string matching across title and description

### DOM Manipulation
- Task list renders in `#taskList` container as individual `.task` divs
- Each task includes: title, description, dueDate, priority badge
- Action buttons: Edit (green, loads task into form), Delete (red, removes task)
- Edit button populates form fields and sets `taskId` for next save

## File Structure Reference
- [index.html](../index.html) - Form structure with hidden taskId, filter controls
- [script.js](../script.js) - Core functions: saveTasks, addTask, displayTasks, editTask, deleteTask
- [style.css](../style.css) - Responsive layout; `.task`, `.task-actions`, `.filters` classes

## Critical Patterns to Preserve

### Edit/Update Pattern
- Store editing task's ID in hidden input before rendering edit buttons
- On edit button click: populate form, set `taskId`, user modifies, calls `addTask()` which detects ID and updates

### Filter/Search Pattern
- Both filters trigger `displayTasks()` via `onchange`/`onkeyup`
- `displayTasks()` re-renders entire list applying:
  1. Priority filter (if not "All")
  2. Search text matching (case-insensitive substring)

### Validation Chain
- Title: `.trim()` before validation to reject whitespace-only input
- DueDate: Required; select element ensures valid date format
- Priority: Optional but should use select default value

## Development Notes
- No external dependencies (vanilla JS, native localStorage)
- No frameworks; DOM operations are direct element manipulation
- Ensure `saveTasks()` is called after any `tasks` array modification
- Always check `if(id)` before updating vs. pushing new task in `addTask()`
