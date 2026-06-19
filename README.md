# VectorShift Frontend Technical Assessment

## Overview

This repository contains my solution for the **VectorShift Frontend Technical Assessment**.

The assignment involved improving and extending a visual workflow builder built with **React**, **React Flow**, **FastAPI**, and **Python**. The goal was to demonstrate frontend architecture, component abstraction, UI/UX design, dynamic node behavior, and frontend-backend integration.

---

## Features Implemented

### 1. Node Abstraction

One of the primary objectives was to reduce duplication across node implementations.

#### Approach

A reusable **Base Node** abstraction was created to encapsulate:

* Common node layout and styling
* Input and output handle rendering
* Node header and content sections
* Shared configuration patterns
* Extensible node metadata

This abstraction allows new nodes to be created through configuration rather than duplicating component logic.

#### Benefits

* Reduced code duplication
* Consistent styling across all node types
* Easier maintenance and future enhancements
* Faster development of new nodes

#### Additional Nodes Created

To demonstrate the flexibility of the abstraction, five additional nodes were implemented:

* Condition Node
* Knowledge Node
* Merge Node
* Talk Node
* Url Node

These nodes showcase how new functionality can be introduced with minimal boilerplate.

---

### 2. UI & Styling Improvements

The original project contained minimal styling.

#### Enhancements

* Modern node design
* Consistent spacing and typography
* Improved visual hierarchy
* Enhanced handle visibility
* Responsive node layouts
* Improved canvas appearance
* Unified color palette and design language

#### Goals

The design focuses on:

* Readability
* Consistency
* Professional appearance
* Better user experience while building pipelines

---

### 3. Dynamic Text Node

The Text Node was enhanced with advanced functionality.

#### Auto-Resizing

The node dynamically adjusts its:

* Width
* Height

based on user input, improving visibility and reducing the need for scrolling.

#### Variable Detection

The text input now supports variables using the syntax:

```text
{{variableName}}
```

Examples:

```text
Hello {{userName}}
```

```text
Process data from {{inputData}}
```

#### Dynamic Handle Generation

When valid variables are detected:

* New input handles are automatically created
* Handles are rendered on the left side of the node
* Each variable maps to a corresponding input connection

This allows users to visually connect data sources directly to variables referenced within the text.

---

### 4. Backend Integration

A full integration was implemented between the frontend workflow builder and the FastAPI backend.

#### Frontend

When the user clicks **Submit Pipeline**:

* All nodes are collected
* All edges are collected
* Pipeline data is sent to the backend API

#### Backend

The `/pipelines/parse` endpoint was enhanced to:

* Count total nodes
* Count total edges
* Validate whether the graph is a Directed Acyclic Graph (DAG)

#### Response Format

```json
{
  "num_nodes": 8,
  "num_edges": 7,
  "is_dag": true
}
```

#### User Feedback

After receiving the response:

* A user-friendly alert is displayed
* Node count is shown
* Edge count is shown
* DAG validation result is shown

This provides immediate feedback about the structure and validity of the pipeline.

---

## Tech Stack

### Frontend

* React
* Javascript
* React Flow
* Tailwind Css

### Backend

* Python
* FastAPI

## Running the Application

### Frontend

```bash
cd frontend
npm install
npm start
```

Application runs at:

```text
http://localhost:3000
```

### Backend

```bash
cd backend
uvicorn main:app --reload
```

API runs at:

```text
http://localhost:8000
```

---

## Example Workflow

1. Create nodes on the canvas.
2. Connect nodes using edges.
3. Add variables to a Text Node using:

```text
{{input}}
{{customerName}}
```

4. Observe dynamic handles being generated.
5. Click **Submit Pipeline**.
6. Receive pipeline analysis including:

   * Number of Nodes
   * Number of Edges
   * DAG Validation Result

---

## Assessment Objectives Covered

| Requirement                        | Status      |
| ---------------------------------- | ----------- |
| Node Abstraction                   | ✅ Completed |
| Five Additional Nodes              | ✅ Completed |
| UI Styling Improvements            | ✅ Completed |
| Dynamic Text Node Resizing         | ✅ Completed |
| Variable Parsing & Dynamic Handles | ✅ Completed |
| Frontend API Integration           | ✅ Completed |
| Backend Pipeline Analysis          | ✅ Completed |
| DAG Validation                     | ✅ Completed |
| User-Friendly Response Alert       | ✅ Completed |

---

## Notes

This implementation emphasizes:

* Reusability
* Scalability
* Clean component architecture
* User experience
* Maintainability

