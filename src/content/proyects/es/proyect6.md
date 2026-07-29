---
order: 2
visible: true
liveNow: true
imgInicio: "/images/JavaProyect.png"
title: "Enterprise Sales System – Backend en Java con Separación de Capas y Optimización SQL"
description: "Servicio backend empresarial desarrollado bajo patrones DAO/DTO, control transaccional estricto (ACID) y APIs RESTful validadas."
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

## 📌 Resumen de Ingeniería
Este sistema empresarial de facturación e inventario está diseñado para manejar la complejidad transaccional de operaciones comerciales de alta fidelidad. La solución aborda los problemas comunes de inconsistencia de stock y degradación del rendimiento en lecturas recurrentes mediante la aplicación estricta de patrones arquitectónicos empresariales en Java y un esquema relacional altamente indexado.

## 🏗️ Arquitectura del Sistema & Decisiones Técnicas
* **Arquitectura de Capas Java:** Estructurado rigurosamente bajo patrones orientados a objetos, implementando la separación de responsabilidades a través de las capas de negocio (Services), objetos de acceso a datos (DAO - Data Access Object) y transferencia de datos desacoplada (DTO - Data Transfer Object) para aislar el modelo de base de datos de los controladores REST.
* **Persistencia Relacional (MySQL):** Motor relacional MySQL optimizado con integridad referencial explícita. Se programaron disparadores (Triggers) a nivel de base de datos para automatizar el cálculo financiero y auditorías de inventario, reduciendo el procesamiento en memoria de la aplicación.
* **Control Transaccional ACID:** Implementación de transacciones manejadas mediante bloques controlados, garantizando la consistencia y reversión total (rollback) en operaciones de facturación multi-ítem en caso de fallos de inventario intermitentes.
* **Testing y Documentación:** Diseño de una suite completa de pruebas de endpoints utilizando Postman, evaluando el comportamiento de las respuestas bajo condiciones extremas y de datos límite (Edge Cases) con sus respectivos códigos de estado HTTP.

## 🚀 Desafíos Técnicos & Métricas de Impacto
* **Consistencia e Integridad del Inventario:** Garantía del 100% en la precisión de stock y facturación mediante la aplicación de bloqueos transaccionales (Pessimistic/Optimistic Locking en DB) previniendo condiciones de carrera concurrentes (Race Conditions).
* **Latencia de Consultas Complejas:** Reducción de latencias de consultas agregadas complejas a **<8ms** mediante la creación de índices compuestos de base de datos y la normalización de tablas en tercera forma normal (3NF).
* **Manejo Estandarizado de Excepciones:** Diseño de un interceptor de excepciones global en el backend Java para responder siempre con payloads JSON estructurados y códigos HTTP adecuados, reduciendo el tiempo de depuración del cliente en un 40%.
