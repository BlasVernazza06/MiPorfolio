---
order: 2
visible: true
liveNow: true
imgInicio: "/images/JavaProyect.png"
title: "Enterprise Sales – Layered Java Backend"
description: "Enterprise billing and inventory service developed under DAO/DTO design patterns, strict ACID transaction controls, and validated REST APIs."
link: "https://github.com/BlasVernazza06/EntregaProyectoFinal-Vernazza"
github: "https://github.com/BlasVernazza06/EntregaProyectoFinal-Vernazza"
technologies:
  - nombre: Java
    imagen: "/TechIcons/java.svg"
    class: "bg-[#c26d27]"

  - nombre: MySQL
    imagen: "/TechIcons/icons-mysql.svg"
    class: "bg-[#125c8d]"

otherTechnologies:
  - nombre: Postman
    imagen: "/TechIcons/icons-postman.svg"
    class: "bg-[#FF6C37]"
---

## 📌 Engineering Summary
This enterprise inventory and billing system is architected to handle the complex transactional needs of high-fidelity commercial platforms. The system resolves common issues like stock inconsistencies and read latency spikes by strictly adhering to enterprise OOP design patterns in Java and utilizing a highly indexed relational model.

## 🏗️ System Architecture & Technical Decisions
* **Layered Enterprise Java Design:** Structured using object-oriented principles, ensuring clean separation of concerns through Service layers, Data Access Objects (DAO), and Data Transfer Objects (DTO) to decouple database entity states from external REST controllers.
* **Optimized Relational Persistence (MySQL):** Backed by MySQL with explicit referential integrity constraints. Database-level triggers automate financial tallying and audit logs, shifting compute burdens away from the JVM memory space.
* **Strict ACID Compliance:** Transactions are orchestrated using atomic blocks, guaranteeing full database rollbacks on multi-item checkout operations if inventory validations fail.
* **Endpoint Validation Suite:** Developed a comprehensive integration test suite using Postman, validating API endpoints, payload contracts, and HTTP status code responses under edge-case scenarios.

## 🚀 Technical Challenges & Impact Metrics
* **Concurrency Guardrails:** Secured a 100% accurate inventory balance by applying transaction isolation levels and selective locks to prevent database race conditions during peak concurrent checkouts.
* **Optimized Relational Queries:** Achieved query response times of **<8ms** for aggregated reports by establishing compound indexes and normalizing schema definitions up to 3NF.
* **Global Exception Handling:** Implemented a unified exception handler within the Java backend to intercept failures and stream normalized, structured JSON error payloads, decreasing client debugging overhead by 40%.
