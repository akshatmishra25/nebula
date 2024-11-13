# 🌌 Nebula

Nebula is a **Backend as a Service (BaaS)** platform designed for developers to easily manage backend infrastructure for applications. With a focus on flexibility and ease of integration, Nebula provides services like authentication, project management, and customizable backend features.

> **Looking for open-source contributors** – come join us in building Nebula!

## 🌐 Project Overview

Nebula allows users to:
1. **Register** and create an account on the platform.
2. **Create Projects** and select the desired frontend and backend services.
3. **Generate Unique Connection Strings** for each project, allowing easy access to the selected BaaS services.
4. **Add Services** like authentication, dashboard, and more to enhance project functionality.
5. **Admin Customization** - Admins have full control over the services provided to users.

## 📁 Project Structure

The folder structure is designed to keep the code modular and maintainable.

```
nebula/
├── cmd/
│   └── server/                 # Main application entry point
│       └── main.go             # Bootstraps the application
├── config/
│   └── config.go               # Configuration management (loads environment variables)
├── internal/
│   ├── auth/                   # Authentication module
│   │   ├── handlers.go         # Auth-related handlers (login, register)
│   │   └── middleware.go       # JWT validation, role-based auth
│   ├── models/                 # Database models
│   │   ├── user.go             # User model
│   │   ├── project.go          # Project model
│   │   ├── service.go          # Service model
│   │   └── user_project_service.go  # User-project-service association model
│   ├── projects/               # Project management module
│   │   ├── handlers.go         # Project-related handlers
│   │   └── service.go          # Project service logic
│   ├── services/               # Service management module
│   │   ├── handlers.go         # Handlers to add/manage services
│   │   └── service.go          # Business logic for services
│   └── utils/                  # Utility functions
│       ├── database.go         # Database connection setup
│       ├── hash.go             # Password hashing functions
│       └── jwt.go              # JWT generation and validation functions
├── pkg/                        # Package libraries reusable across modules
│   └── connection_string/      # Connection string generator
│       └── generator.go        # Logic to create unique connection strings
├── migrations/                 # Database migrations (using a tool like golang-migrate)
│   └── initial_schema.sql      # Initial schema for users, projects, services
├── .env                        # Environment variables
├── go.mod                      # Go module file
└── README.md                   # Project documentation
```