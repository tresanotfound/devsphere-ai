import { Routes, Route, Navigate } from "react-router-dom";

// AUTH
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";

// DASHBOARD
import DashboardHome from "../pages/Dashboard/DashboardHome";

// AI
import AIWorkspace from "../components/ai/AIWorkspace";

// PROJECTS
import Projects from "../components/projects/Projects";

// NOTES
import Notes from "../components/notes/Notes";

// ANALYTICS
import Analytics from "../components/analytics/Analytics";

// TASKS
import Tasks from "../components/tasks/Tasks";

// CHAT
import Chat from "../components/chat/Chat";

// SETTINGS
import Settings from "../components/settings/Settings";
import ProfileSettings from "../components/settings/ProfileSettings/ProfileSettings";
import NotificationSettings from "../components/settings/NotificationSettings/NotificationSettings";
import SecuritySettings from "../components/settings/SecuritySettings/SecuritySettings";
import ThemeSettings from "../components/settings/ThemeSettings/ThemeSettings";
import BillingSettings from "../components/settings/BillingSettings/BillingSettings";
import AIPreferences from "../components/settings/AIPreferences/AIPreferences";

// ADMIN
import Admin from "../components/admin/Admin";

// PROTECTED ROUTE
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {

  return (

    <Routes>

      {/* DEFAULT */}

      <Route
        path="/"
        element={<Navigate to="/login" />}
      />

      {/* AUTH */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* DASHBOARD */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardHome />
          </ProtectedRoute>
        }
      />

      {/* TASKS */}

      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <Tasks />
          </ProtectedRoute>
        }
      />

      {/* PROJECTS */}

      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        }
      />

      {/* AI */}

      <Route
        path="/ai"
        element={
          <ProtectedRoute>
            <AIWorkspace />
          </ProtectedRoute>
        }
      />

      {/* NOTES */}

      <Route
        path="/notes"
        element={
          <ProtectedRoute>
            <Notes />
          </ProtectedRoute>
        }
      />

      {/* CHAT */}

      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        }
      />

      {/* ANALYTICS */}

      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />

      {/* SETTINGS MAIN */}

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      {/* SETTINGS SUBPAGES */}

      <Route
        path="/settings/profile"
        element={
          <ProtectedRoute>
            <ProfileSettings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings/notifications"
        element={
          <ProtectedRoute>
            <NotificationSettings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings/security"
        element={
          <ProtectedRoute>
            <SecuritySettings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings/theme"
        element={
          <ProtectedRoute>
            <ThemeSettings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings/billing"
        element={
          <ProtectedRoute>
            <BillingSettings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings/ai"
        element={
          <ProtectedRoute>
            <AIPreferences />
          </ProtectedRoute>
        }
      />

      {/* ADMIN */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />

      {/* 404 */}

      <Route
        path="*"
        element={
          <div className="p-10 text-4xl font-bold">
            404 Page Not Found
          </div>
        }
      />

    </Routes>

  );
}

export default AppRoutes;