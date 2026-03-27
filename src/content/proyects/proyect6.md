---
order: 3
visible: true
liveNow: true
imgInicio: "/images/JavaProyect.png"
title: Java Project
description: Proyecto final realizado para el curso de Programacion con Java 3.0
link: "https://github.com/BlasVernazza06/EntregaProyectoFinal-Vernazza"
github: "https://github.com/BlasVernazza06/EntregaProyectoFinal-Vernazza"
technologies:
  - nombre: Java
    imagen: "/TechIcons/java.svg"
    class: "bg-[#c26d27]"

  - nombre: MySQL
    imagen: "/TechIcons/icons-mysql.svg"
    class: "bg-[#125c8d]"

  - nombre: Postman
    imagen: "/TechIcons/icons-postman.svg"
    class: "bg-[#FF6C37]"
---

## Sobre el Proyecto

Este proyecto representa la culminación del curso "Programación con Java 3.0", donde el enfoque principal fue desarrollar una aplicación comercial robusta utilizando el lenguaje Java y principios sólidos de ingeniería de software.

La aplicación consiste en un sistema de gestión de ventas y productos que maneja de manera eficiente grandes volúmenes de datos.

## Desarrollo del Backend

### Arquitectura de Capas

El sistema fue estructurado siguiendo patrones de diseño como DAO (Data Access Object) y DTO (Data Transfer Object), asegurando una separación clara entre la lógica de negocio, la persistencia de datos y las interfaces de comunicación.

### Gestión de Base de Datos

Utilicé MySQL como motor de base de datos relacional, diseñando un esquema optimizado con relaciones complejas, triggers y procedimientos almacenados para garantizar la integridad de la información.

### Testing de API

Toda la lógica del servidor fue rigurosamente testeada utilizando Postman, creando suites de pruebas para cada endpoint REST y asegurando que las respuestas HTTP y el manejo de errores fueran correctos bajo diversos escenarios.

## Características Principales

- **Gestión de Inventario**: Control total sobre altas, bajas, modificaciones y consultas de productos.
- **Sistema de Facturación**: Generación automatizada de tickets y reportes de venta.
- **Integridad de Datos**: Implementación de validaciones robustas tanto en el código Java como en la base de datos.
- **API RESTful**: Arquitectura escalable lista para ser consumida por cualquier cliente frontend.
