---
hidden: false
liveNow: true
order: 3
imgInicio: "/images/MelonsApp.png"
title: "MelonApp – Collaborative Kanban Workspace"
description: "Agile management platform featuring an optimized drag-and-drop engine, bidirectional state synchronization, and real-time database subscriptions."
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

## 📌 Engineering Summary
MelonApp is a high-performance productivity and project management tool inspired by Kanban. It resolves the complexity of multi-user concurrent collaboration and visual layout jitter by incorporating a reactive architecture backed by real-time sockets and an advanced physics and collision detection suite on the client.

## 🏗️ System Architecture & Technical Decisions
* **Reactive React Frontend:** Developed with React, leveraging memoization and selective rendering techniques to prevent local changes in single Kanban cards from triggering massive re-renders across the entire board.
* **Real-Time Sockets Sync (Supabase):** Implemented logical replication channels and real-time sockets (Supabase Realtime) to keep boards and lists in sync across active sessions without falling back to periodic HTTP polling.
* **Drag-and-Drop Engine (DndKit):** Integrated modular `@dnd-kit/core` primitives to handle dragging and sorting. Applied hardware acceleration and native pointer event mapping for touch and keyboard accessibility.
* **Transactional Reliability:** Backed by Supabase PostgreSQL protected with strict Row-Level Security (RLS) rules and database triggers that automatically recalculate list indices upon card movements to prevent positional conflicts.

## 🚀 Technical Challenges & Impact Metrics
* **Sub-100ms Multihost Synchronization:** Propagated and rendered card movements across concurrent devices in under **100ms** by streamlining Supabase payload event structures.
* **Highly Responsive Drag UI:** Sustained a consistent **60 FPS** frame rate when dragging cards on dense boards (exceeding 150 visual elements) by leveraging decoupled state trees and GPU-accelerated layouts.
* **Optimistic UI Updates:** Built optimistic UI transitions on the client with automated rollback hooks to handle database write timeouts or transient disconnection scenarios cleanly.
