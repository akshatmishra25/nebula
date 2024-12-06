package models

type Project struct {
    ID          int    `json:"id"`
    UserID      int    `json:"user_id"`
    Name        string `json:"name"`
    Description string `json:"description"`
    Frontend    string `json:"frontend"`
    Connection  string `json:"connection"`
}
