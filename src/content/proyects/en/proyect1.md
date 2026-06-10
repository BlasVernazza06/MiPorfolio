---
hidden: false
liveNow: false
order: 1
imgInicio: "/images/LearnixPhoto.png"
title: Learnix
description: Course platform for IT sector knowledge development. Featuring a payment system and database.
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

## About the Project

Learnix is an educational platform designed to democratize access to technological knowledge. The main goal was to create a fluid and professional user experience, similar to the major e-learning platforms on the market.

The application allows users to browse a catalog of courses, make secure payments, and manage their educational progress intuitively.

## Technical Challenges

### Payment Integration with Stripe

One of the biggest challenges was implementing a robust payment flow. I used Stripe to manage transactions, ensuring that access to courses is automatically unlocked upon a successful purchase using webhooks.

### High-End Animations with GSAP

To give it a "premium" touch, I implemented complex animations using GSAP. From smooth page transitions to parallax scroll effects that make navigation a visually engaging experience.

### Relational Data Management

Using Supabase as the backend, I designed an efficient database structure to handle users, courses, enrollments, and profiles, ensuring fast queries and scalability.

## Key Features

- **User Dashboard**: Clear visualization of purchased courses and progress.
- **Secure Payment Gateway**: Full integration with Stripe.
- **Responsive Design**: Perfectly optimized for any device using Tailwind CSS.
- **Scalable Backend**: Authentication and database managed via Supabase.
