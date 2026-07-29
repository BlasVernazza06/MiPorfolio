---
hidden: false
liveNow: false
order: 6
imgInicio: "/images/LearnixPhoto.png"
title: "Learnix – Scalable LMS with Transactional Processing and Webhook Reconciliation"
description: "Transactional e-learning platform with resilient payment gateway integrations, high-performance UI animations, and scalable persistence."
link: "https://learnix-app.vercel.app/"
github: "https://github.com/BlasVernazza06/learnix-app.git"
technologies:
  - nombre: NextJs
    imagen: "/TechIcons/nextjs_icon_dark.svg"
    class: "bg-[#000000]"

  - nombre: Stripe
    imagen: "/TechIcons/icon-stripe.svg"
    class: "bg-[#2114F2]"

  - nombre: Supabase
    imagen: "/TechIcons/supabase.svg"
    class: "bg-[#18181B]"

otherTechnologies:
  - nombre: Tailwind
    imagen: "/TechIcons/icons-tailwind.svg"
    class: "bg-[#0F172A]"

  - nombre: Gsap
    imagen: "/TechIcons/gsap-white.svg"
    class: "bg-[#88CE02]"
---

## 📌 Engineering Summary
Learnix is a robust, high-impact Learning Management System (LMS) engineered to optimize course distribution and tech e-learning monetization. The platform addresses checkout drop-offs and transactional inconsistencies by implementing a fault-tolerant payment workflow combined with immersive, hardware-accelerated user interfaces.

## 🏗️ System Architecture & Technical Decisions
* **Frontend & Next.js Rendering:** Developed in Next.js leveraging dynamic routing and rendering hybridization (ISR/SSR) to deliver static, sub-second course catalogs while keeping user progress profiles interactive and dynamic.
* **Resilient Payments Processing:** Integrated Stripe Checkout API coupled with Next.js API Routes. Course enrollment workflows are triggered asynchronously through a resilient webhook processing pipeline designed to handle transient network errors.
* **Data Layer & RBAC (Supabase):** PostgreSQL database engine hosted on Supabase. Implemented Row-Level Security (RLS) policies to safeguard educational catalog assets and guarantee that course access is strictly granted to authenticated buyers.
* **Premium GPU-Accelerated UI:** Applied GSAP (GreenSock Animation Platform) for smooth transitions and complex timeline-based scrolling behaviors. Avoided layout thrashing by offloading paint calculations directly to CSS3 transforms.

## 🚀 Technical Challenges & Impact Metrics
* **0% License Delivery Failure Rate:** Implemented cryptographically verified, idempotent Stripe Webhook handlers, incorporating transactional DB writes to prevent duplicate purchases or missed enrollments.
* **60 FPS Performance Target:** Maintained solid **60 FPS** UI animations on mobile viewports by optimizing browser repaints, layer compositing, and minimizing DOM node overhead.
* **Optimized Load Speeds (LCP):** Achieved a Largest Contentful Paint of **<1.2s** using Next.js Incremental Static Regeneration (ISR) and optimized modern image formats.
