# Nebula 

Here is what it's all about. A Backend as a Service(BaaS) platform which I wanted to try out making as I love building stuff. Looking for open source contributors who would be interested in the same.

### File Structure



nebula/
├── cmd/
│   └── server/             # Main application entry point
│       └── main.go         # Bootstraps the application
├── config/
│   └── config.go           # Configuration management (loads environment variables)
├── internal/
│   ├── auth/               # Authentication module
│   │   ├── handlers.go     # Auth-related handlers (login, register)
│   │   └── middleware.go   # JWT validation, role-based auth
│   ├── models/             # Database models
│   │   ├── user.go         # User model
│   │   ├── project.go      # Project model
│   │   ├── service.go      # Service model
│   │   └── user_project_service.go  # User project-service association model
│   ├── projects/           # Project management module
│   │   ├── handlers.go     # Project-related handlers
│   │   └── service.go      # Project service logic
│   ├── services/           # Service management module
│   │   ├── handlers.go     # Handlers to add/manage services
│   │   └── service.go      # Business logic for services
│   └── utils/              # Utility functions
│       ├── database.go     # Database connection setup
│       ├── hash.go         # Password hashing functions
│       └── jwt.go          # JWT generation and validation functions
├── pkg/                    # Package libraries reusable across modules
│   └── connection_string/  # Connection string generator
│       └── generator.go    # Logic to create unique connection strings
├── migrations/             # Database migrations (using a tool like golang-migrate)
│   └── initial_schema.sql  # Initial schema for users, projects, services
├── .env                    # Environment variables
├── go.mod                  # Go module file
└── README.md               # Project documentation
