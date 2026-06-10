---
hidden: false
liveNow: true
order: 4
imgInicio: "/images/MelonsApp.png"
title: MelonApp
description: Melon is a Trello-style task management app developed with Supabase.
link: "https://melonsapp.netlify.app/"
github: "https://github.com/BlasVernazza06/Melon.git"
technologies:
  - nombre: React JS
    imagen: "/TechIcons/icons-react.svg"
    class: "bg-[#003159]"

  - nombre: Supabase
    imagen: "/TechIcons/supabase.svg"
    class: "bg-[#18181B]"

  - nombre: DndKit
    imagen: "/TechIcons/dndkit.png"
    class: "bg-[#000000]"

otherTechnologies:
  - nombre: Tailwind
    imagen: "/TechIcons/icons-tailwind.svg"
    class: "bg-[#0F172A]"
---

## About the Project

MelonApp is a productivity tool inspired by Trello, designed to help teams and individuals organize their workflows visually and effectively. With a clean interface and a focus on user experience, Melon allows you to manage complex projects using boards, lists, and cards.

## Implementation Challenges

### Drag & Drop Functionality

The main challenge was implementing a smooth drag-and-drop system for cards and columns. This required precise state management to ensure that changes were immediately reflected in both the user interface and on the server.

### Real-time with Supabase

I used Supabase's real-time database capabilities to allow changes made by one user to be automatically reflected in other collaborators' sessions, enabling true synchronous collaboration.

### State Architecture

The management of nested states (Boards > Columns > Cards) was handled efficiently to avoid unnecessary re-renders and keep the application fast even with large volumes of data.

## Key Features

- **Collaborative Boards**: Creation and management of multiple workspaces.
- **Drag & Drop System**: Intuitive interface to move tasks between different states.
- **Secure Authentication**: Built-in login and registration system using Supabase Auth.
- **Total Persistence**: Your data is always secure and synchronized in the cloud.
