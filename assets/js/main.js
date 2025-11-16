{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Smooth scroll for navbar links\
document.querySelectorAll('#navbar a.nav-link').forEach(link => \{\
  link.addEventListener('click', e => \{\
    const href = link.getAttribute('href');\
    if (href && href.startsWith('#')) \{\
      e.preventDefault();\
      const target = document.querySelector(href);\
      if (target) \{\
        const y = target.getBoundingClientRect().top + window.scrollY - 70;\
        window.scrollTo(\{ top: y, behavior: 'smooth' \});\
      \}\
    \}\
  \});\
\});}