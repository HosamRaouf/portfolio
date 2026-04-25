"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import type { ReactElement } from "react";

// Official SVG icons for each skill
const skillIcons: Record<string, React.ReactNode> = {
  // State Management
  "BloC": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 1 1 0 16A8 8 0 0 1 12 4zm-1 4v4H7l5 6 5-6h-4V8h-2z"/></svg>,
  "Cubit": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 1 1 0 16A8 8 0 0 1 12 4zm-1 4v4H7l5 6 5-6h-4V8h-2z"/></svg>,
  "GetX": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M21 5.5l-1.45-1.45L12 11.6 4.45 4.05 3 5.5l7.55 7.55L3 20.6l1.45 1.45L12 14.5l7.55 7.55L21 20.6l-7.55-7.55z"/></svg>,
  "Provider": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 17.93V18a1 1 0 0 0-2 0v1.93A8.001 8.001 0 0 1 4.07 13H6a1 1 0 0 0 0-2H4.07A8.001 8.001 0 0 1 11 4.07V6a1 1 0 0 0 2 0V4.07A8.001 8.001 0 0 1 19.93 11H18a1 1 0 0 0 0 2h1.93A8.001 8.001 0 0 1 13 19.93z"/></svg>,
  "Hive": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M12 1L3 5v14l9 4 9-4V5l-9-4zm7 17l-7 3.11L5 18V6.89L12 3.78l7 3.11V18zM12 7l-4 1.78v6.44L12 17l4-1.78V8.78L12 7z"/></svg>,
  "Shared Preferences": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M20 6h-2.18c.07-.44.18-.86.18-1a3 3 0 0 0-6 0c0 .14.11.56.18 1H10a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-7-1a1 1 0 1 1 2 0c0 .14-.29 1-1 1s-1-.86-1-1z"/></svg>,

  // Cloud & Firebase
  "Firebase": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"/></svg>,
  "Firebase Authentication": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>,
  "Firestore": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm7 14.5l-7 3.9-7-3.9V8.5l7-3.9 7 3.9v8zM12 7l-4 2.2v5.6l4 2.2 4-2.2V9.2L12 7z"/></svg>,
  "Firebase Cloud Messaging": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"/></svg>,
  "Firebase Studio": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.43c-.31.17-.69.17-1 0L3.53 17.38c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.43c.31-.17.69-.17 1 0l7.97 4.43c.32.17.53.5.53.88v9z"/></svg>,
  "Google Cloud": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.77 1.795h9.5a6.747 6.747 0 0 0 6.468-4.927l.008-.02a6.754 6.754 0 0 0-2.536-7.067l.013.01h-.006a9.34 9.34 0 0 0-8.728-7.649zm-.004 1.74a7.608 7.608 0 0 1 7.116 6.128.881.881 0 0 0 .417.647 5.028 5.028 0 0 1 2.088 5.559 5.005 5.005 0 0 1-4.809 3.657h-9.5a4.97 4.97 0 0 1-3.545-1.332 4.926 4.926 0 0 1-.214-6.976 4.985 4.985 0 0 1 .946-.8.88.88 0 0 0 .388-.869 7.6 7.6 0 0 1 7.113-6.014z"/></svg>,
  "Dio": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>,
  "Google Cloud Maps": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>,
  "Geolocation": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
  "Geocoding": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,

  // Architecture
  "Clean Architecture": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  "SOLID": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg>,
  "CI/CD": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M12 6V3L8 7l4 4V8c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" /></svg>,
  "Deep Linking": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>,
  "REST APIs": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M14 12l-2 2-2-2 2-2 2 2zm-2-6l2.12 2.12 2.5-2.5L12 1 7.38 5.62l2.5 2.5L12 6zm-6 6l2.12-2.12-2.5-2.5L1 12l4.62 4.62 2.5-2.5L6 12zm12 0l-2.12 2.12 2.5 2.5L23 12l-4.62-4.62-2.5 2.5L18 12zm-6 6l-2.12-2.12-2.5 2.5L12 23l4.62-4.62-2.5-2.5L12 18z"/></svg>,
  "Store Management": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M20 4H4v2l16-2zm1 4H3l-1 9h20l-1-9zm-9 7.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 10.5 12 10.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
  "MVVM": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M3 3h18v2H3V3zm0 8h18v2H3v-2zm0 8h18v2H3v-2zm3-5l3 3 3-3H6zm6 0l3 3 3-3h-6z"/></svg>,
  "MVC": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4zm3-9l-3 3 3 3V7zm14 6l-3-3-3 3h6z"/></svg>,

  // Design & Animation
  "Claude Design": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>,
  "Figma": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 3.333 3.333 3.333 3.333 0 0 0 3.333-3.333V8.668h-.002zm0 0a3.333 3.333 0 1 0 .002 6.666A3.333 3.333 0 0 0 15.332 8.668z"/></svg>,
  "Rive": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M2 4v16h16.6L22 4H2zm14.21 12.6H4V6h15.19l-2.98 10.6z"/></svg>,
  "Lottie": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/></svg>,
  "Photoshop": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M0 4.008C0 1.794 1.794 0 4.008 0h15.984C22.206 0 24 1.794 24 4.008v15.984C24 22.206 22.206 24 19.992 24H4.008C1.794 24 0 22.206 0 19.992V4.008zm13.8 5.22c-1.344-.33-1.968-.294-2.538-.294-2.628 0-4.416 1.908-4.416 4.896 0 3.762 2.514 4.65 4.248 4.65 1.98 0 3.072-.912 3.588-1.548l.126 1.326h2.346V8.142h-2.328l-.126 1.086zm.132 6.408c-.408.636-1.098 1.152-2.082 1.152-1.038 0-2.298-.606-2.298-2.814 0-2.07 1.218-2.916 2.448-2.916.918 0 1.584.378 1.932.756v3.822z"/></svg>,
  "Illustrator": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M0 4.008C0 1.794 1.794 0 4.008 0h15.984C22.206 0 24 1.794 24 4.008v15.984C24 22.206 22.206 24 19.992 24H4.008C1.794 24 0 22.206 0 19.992V4.008zm13.8 5.784h1.716v7.56H13.8v-7.56zm0-2.784h1.716v1.8H13.8V7.008zM8.4 7.008h2.016l3.384 10.344h-1.872l-.864-2.784H8.652l-.876 2.784H6L8.4 7.008zm.468 6.072h2.268L9.996 9.204h-.036l-1.092 3.876z"/></svg>,

  // Tools
  "Git": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.6.177-.175.366-.306.565-.394V8.914c-.199-.088-.389-.217-.566-.393-.535-.538-.674-1.33-.406-1.994L7.559 3.752 1.1 10.208c-.604.603-.604 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l9.78-9.78c.605-.603.605-1.582 0-2.164"/></svg>,
  "Android Studio": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M14.333 9.379a2.955 2.955 0 0 1 2.942 2.944 2.955 2.955 0 0 1-2.942 2.944 2.955 2.955 0 0 1-2.942-2.944 2.955 2.955 0 0 1 2.942-2.944zm-4.666 0a2.955 2.955 0 0 1 2.942 2.944 2.955 2.955 0 0 1-2.942 2.944 2.955 2.955 0 0 1-2.942-2.944 2.955 2.955 0 0 1 2.942-2.944zM1 7.714h.764v8.572H1V7.714zm21.236 0H23v8.572h-.764V7.714zM3.819 5.19L12 1l8.181 4.19v13.62L12 23 3.819 18.81V5.19z"/></svg>,
  "Xcode": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M7.017 0H3.77L0 6.39l3.77 6.348h3.247L3.247 6.39 7.017 0zm9.966 0h-3.249L9.965 6.39l3.769 6.348h3.249L13.214 6.39 16.983 0zM12 9.348L8.231 15.696 12 22.044l3.77-6.348L12 9.348z"/></svg>,
  "VS Code": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>,
  "Antigravity": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 2c1.76 0 3.4.49 4.79 1.34l-1.43 1.43A5.954 5.954 0 0 0 12 6a6 6 0 0 0-6 6 5.952 5.952 0 0 0 .77 2.94L5.3 16.4A7.947 7.947 0 0 1 4 12c0-4.42 3.58-8 8-8zm0 4a4 4 0 0 1 4 4 3.99 3.99 0 0 1-1.17 2.83l-5.66-5.66A3.99 3.99 0 0 1 12 6zm3.79 5.63A6.018 6.018 0 0 1 12 18a6 6 0 0 1-5.23-3.02l1.43-1.43c.6 1.5 2.06 2.45 3.8 2.45 1.13 0 2.16-.38 2.97-1.02l-1.18-1.35z"/></svg>,
  "GitHub Actions": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
  "AI Agents": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
  "Google Play Console": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M3 20.5V3.5C3 2.9 3.5 2.4 4.1 2.4c.2 0 .3.1.5.2l16 8.5c.4.2.6.6.6 1s-.2.8-.6 1l-16 8.5c-.2.1-.3.2-.5.2-.6 0-1.1-.5-1.1-1.1z"/></svg>,
  "App Store Connect": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.31-.79-1.53 0-2.01.76-3.31.82-1.33.05-2.31-1.29-3.14-2.48C4.15 17.05 2.85 12.39 3.57 9.17c.36-1.6 2.01-2.74 3.73-2.77 1.31-.02 2.54.91 3.35.91.8 0 2.29-1.15 3.84-.99 1.6.07 2.85.65 3.5 1.6-3.35 2.02-2.82 6.1.4 7.42-.64 1.58-1.49 3.16-2.68 4.16zM15.47 5.42c.68-.82 1.13-1.96.99-3.11-1.01.04-2.22.68-2.94 1.5-.64.72-1.2 1.89-1.04 3.01 1.11.08 2.23-.55 2.99-1.4z"/></svg>,
  "TestFlight": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.43c-.31.17-.69.17-1 0L3.53 17.38c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.43c.31-.17.69-.17 1 0l7.97 4.43c.32.17.53.5.53.88v9zM12 4.1L4.5 8.2v7.6l7.5 4.1 7.5-4.1V8.2L12 4.1z"/></svg>,

  // Languages / Flutter core
  "Flutter": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.37zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>,
  "Dart": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.32-.316 2.69 2.69 0 0 1 1.897.789l9.262 9.234c1.045.994.827 2.561-.35 3.206L4.105 4.105zm.105.105l7.125 15.99-8.27-8.255a2.69 2.69 0 0 1 0-3.734l1.145-3.999V4.21zm19.682 7.787l-7.176 7.176-7.097-15.77L19.8 3.79l4.092 8.302zm-7.285 7.38l-2.956 2.956a2.69 2.69 0 0 1-3.793 0L.682 12.337c-1.083-.994-.827-2.561.35-3.206l16.575 10.14z"/></svg>,
  "Impeller Engine": <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><path d="M13.5 2c-5.629 0-10.212 4.436-10.475 10H0l4 5.8 4-5.8H5.527c.258-3.985 3.556-7.15 7.563-7.15 3.912 0 7.056 3.007 7.449 6.8L22 11.35C21.388 6.05 17.42 2 13.5 2zm-2.764 6.72l-4.5 4.5 4.5 4.5 4.5-4.5-4.5-4.5zm0 2.83l1.67 1.67-1.67 1.67-1.67-1.67 1.67-1.67z"/></svg>,
};

const skillsData = [
  {
    category: "Flutter & Dart",
    skills: ["Flutter", "Dart"],
    color: "purple" as const,
    accent: "rgba(122,95,255,0.1)",
    border: "rgba(122,95,255,0.3)"
  },
  {
    category: "State Management",
    skills: ["BloC", "Cubit", "GetX", "Provider", "Hive", "Shared Preferences"],
    color: "cyan" as const,
    accent: "rgba(0,240,255,0.06)",
    border: "rgba(0,240,255,0.18)"
  },
  {
    category: "Cloud & Firebase",
    skills: ["Firebase", "Firebase Authentication", "Firestore", "Firebase Cloud Messaging", "Firebase Studio", "Google Cloud Maps", "Geolocation", "Geocoding", "Dio"],
    color: "pink" as const,
    accent: "rgba(255,46,136,0.06)",
    border: "rgba(255,46,136,0.18)"
  },
  {
    category: "Architecture & Core",
    skills: ["Clean Architecture", "MVVM", "MVC", "SOLID", "CI/CD", "Deep Linking", "REST APIs", "Store Management"],
    color: "purple" as const,
    accent: "rgba(122,95,255,0.06)",
    border: "rgba(122,95,255,0.18)"
  },
  {
    category: "Design & Animation",
    skills: ["Claude Design", "Figma", "Rive", "Lottie", "Photoshop", "Illustrator"],
    color: "cyan" as const,
    accent: "rgba(0,240,255,0.06)",
    border: "rgba(0,240,255,0.18)"
  },
  {
    category: "Tools & Environment",
    skills: ["Android Studio", "Xcode", "VS Code", "Git", "Google Play Console", "App Store Connect", "TestFlight", "Antigravity", "GitHub Actions", "AI Agents"],
    color: "pink" as const,
    accent: "rgba(255,46,136,0.06)",
    border: "rgba(255,46,136,0.18)"
  }
];

const colorClass: Record<string, string> = {
  cyan: "text-neon-cyan",
  pink: "text-neon-pink",
  purple: "text-neon-purple"
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 container mx-auto max-w-6xl relative overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16 flex items-center gap-3 sm:gap-4">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-glass-border" />
          <h2 className="text-xl sm:text-2xl md:text-5xl font-heading font-bold text-white text-center whitespace-nowrap">
            SYSTEM_<span className="text-neon-cyan glow-text-cyan">SKILLS</span>
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-glass-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
            >
              <GlassCard className="h-full group" style={{ background: group.accent, borderColor: group.border }}>
                <h3 className={`text-base font-bold font-heading mb-5 tracking-wide ${colorClass[group.color]}`}>
                  {group.category}
                </h3>
                <div className="flex flex-col gap-2">
                  {group.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-3 py-2 bg-black/20 rounded-lg border border-white/5 hover:border-white/15 hover:bg-black/30 transition-all duration-200 group/skill"
                    >
                      <span className={`opacity-60 group-hover/skill:opacity-100 transition-opacity ${colorClass[group.color]}`}>
                        {skillIcons[skill] ?? (
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0"><circle cx="12" cy="12" r="5"/></svg>
                        )}
                      </span>
                      <span className="text-sm text-text-main font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
