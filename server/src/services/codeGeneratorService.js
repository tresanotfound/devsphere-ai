import {
  loginTemplate,
} from "./codeTemplates/loginTemplate.js";

import {
  signupTemplate,
} from "./codeTemplates/signupTemplate.js";

import {
  navbarTemplate,
} from "./codeTemplates/navbarTemplate.js";

import {
  sidebarTemplate,
} from "./codeTemplates/sidebarTemplate.js";

import {
  dashboardTemplate,
} from "./codeTemplates/dashboardTemplate.js";

import {
  reduxSliceTemplate,
} from "./codeTemplates/reduxSliceTemplate.js";

import {
  reduxStoreTemplate,
} from "./codeTemplates/reduxStoreTemplate.js";

import {
  expressRouteTemplate,
} from "./codeTemplates/expressRouteTemplate.js";

import {
  controllerTemplate,
} from "./codeTemplates/controllerTemplate.js";

import {
  mongooseTemplate,
} from "./codeTemplates/mongooseTemplate.js";

import {
  socketServerTemplate,
} from "./codeTemplates/socketServerTemplate.js";

import {
  socketClientTemplate,
} from "./codeTemplates/socketClientTemplate.js";

import {
  jwtTemplate,
} from "./codeTemplates/jwtTemplate.js";

import {
  axiosTemplate,
} from "./codeTemplates/axiosTemplate.js";

import {
  contextTemplate,
} from "./codeTemplates/contextTemplate.js";

import {
  hookTemplate,
} from "./codeTemplates/hookTemplate.js";

import {
  protectedRouteTemplate,
} from "./codeTemplates/protectedRouteTemplate.js";

export const generateCode = (
  prompt
) => {

  const lower =
    prompt.toLowerCase();

  /* =========================
     LOGIN
  ========================= */

  if (
    lower.includes("login")
  ) {

    return loginTemplate();
  }

  /* =========================
     SIGNUP
  ========================= */

  if (
    lower.includes("signup") ||
    lower.includes("register")
  ) {

    return signupTemplate();
  }

  /* =========================
     NAVBAR
  ========================= */

  if (
    lower.includes("navbar")
  ) {

    return navbarTemplate();
  }

  /* =========================
     SIDEBAR
  ========================= */

  if (
    lower.includes("sidebar")
  ) {

    return sidebarTemplate();
  }

  /* =========================
     DASHBOARD
  ========================= */

  if (
    lower.includes("dashboard")
  ) {

    return dashboardTemplate();
  }

  /* =========================
     REDUX SLICE
  ========================= */

  if (
    lower.includes("redux slice")
  ) {

    return reduxSliceTemplate();
  }

  /* =========================
     REDUX STORE
  ========================= */

  if (
    lower.includes("redux store")
  ) {

    return reduxStoreTemplate();
  }

  /* =========================
     EXPRESS ROUTE
  ========================= */

  if (
    lower.includes("express") ||
    lower.includes("route")
  ) {

    return expressRouteTemplate();
  }

  /* =========================
     CONTROLLER
  ========================= */

  if (
    lower.includes("controller")
  ) {

    return controllerTemplate();
  }

  /* =========================
     MONGOOSE
  ========================= */

  if (
    lower.includes("mongoose") ||
    lower.includes("mongodb") ||
    lower.includes("schema")
  ) {

    return mongooseTemplate();
  }

  /* =========================
     SOCKET SERVER
  ========================= */

  if (
    lower.includes("socket server")
  ) {

    return socketServerTemplate();
  }

  /* =========================
     SOCKET CLIENT
  ========================= */

  if (
    lower.includes("socket client")
  ) {

    return socketClientTemplate();
  }

  /* =========================
     JWT
  ========================= */

  if (
    lower.includes("jwt") ||
    lower.includes("middleware")
  ) {

    return jwtTemplate();
  }

  /* =========================
     AXIOS
  ========================= */

  if (
    lower.includes("axios")
  ) {

    return axiosTemplate();
  }

  /* =========================
     CONTEXT API
  ========================= */

  if (
    lower.includes("context")
  ) {

    return contextTemplate();
  }

  /* =========================
     CUSTOM HOOK
  ========================= */

  if (
    lower.includes("hook")
  ) {

    return hookTemplate();
  }

  /* =========================
     PROTECTED ROUTE
  ========================= */

  if (
    lower.includes("protected route")
  ) {

    return protectedRouteTemplate();
  }

  /* =========================
     DEFAULT
  ========================= */

  return `
// No matching template found

Prompt:
${prompt}

Available Templates:

- Login Component
- Signup Component
- Navbar
- Sidebar
- Dashboard
- Redux Slice
- Redux Store
- Express Route
- Controller
- Mongoose Schema
- Socket Server
- Socket Client
- JWT Middleware
- Axios Service
- React Context
- Custom Hook
- Protected Route
`;
};