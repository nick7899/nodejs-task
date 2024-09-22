# Ticket Management System

## Setup Instructions

1. get the repository:

git  < https://github.com/nick7899/nodejs.ticket.management >  ticket-management-system


2. Install dependencies:
npm install


3. Create a `.env` file and add your MongoDB connection string:
MONGO_URI=mongodb://localhost:27017/

4. Start the server:
npm run dev


5. API Endpoints:
- **POST /api/tickets**: Create a new ticket.
- **GET /api/tickets**: Retrieve all tickets.
- **GET /api/tickets/:id**: Retrieve a ticket by ID.
- **PUT /api/tickets/:id**: Update a ticket by ID.
- **DELETE /api/tickets/:id**: Delete a ticket by ID.



**Test all this API endpoints in postman to see if the project is working rigth**

***********************************************************************************************************************************


---

# Ticket Management System API Documentation

## Overview

The Ticket Management System API allows users to create, manage, and track tickets for various issues or requests. This API provides endpoints for creating tickets, viewing ticket details, updating ticket statuses, and deleting tickets.

## Base URL

```
Http://LOCALhost:5000/api/tickets
```



********************************************************************************************************************************

## Endpoints

### 1. Create a Ticket

**Endpoint:** `POST /api/tickets`

**Description:** Creates a new ticket.

**Request Body:**

```json
{
  "title": "Issue title",
  "description": "Detailed description of the issue",
  "priority": "low | medium | high",
  "status": "open"
}
```

**Response:**

- **200 OK**

```json
{
  "id": "ticket_id",
  "title": "Issue title",
  "description": "Detailed description of the issue",
  "priority": "medium",
  "status": "open",
  "created_at": "timestamp",
  "updated_at": "timestamp"
}
```

### 2. Get All Tickets

**Endpoint:** `GET /api/tickets`

**Description:** Retrieves a list of all tickets.

**Response:**

- **200 OK**

```json
[
  {
    "id": "ticket_id",
    "title": "Issue title",
    "status": "open",
    "priority": "medium",
    "created_at": "timestamp"
  },
  ...
]
```

### 3. Get Ticket by ID

**Endpoint:** `GET /api/tickets/:id`

**Description:** Retrieves details of a specific ticket by ID.

**Response:**

- **200 OK**

```json
{
  "id": "ticket_id",
  "title": "Issue title",
  "description": "Detailed description of the issue",
  "priority": "medium",
  "status": "open",
  "created_at": "timestamp",
  "updated_at": "timestamp"
}
```

### 4. Update Ticket

**Endpoint:** `PUT /api/tickets/:id`

**Description:** Updates an existing ticket.

**Request Body:**

```json
{
  "title": "Updated issue title",
  "description": "Updated description",
  "priority": "low | medium | high",
  "status": "open | in-progress | closed"
}
```

**Response:**

- **200 OK**

```json
{
  "id": "ticket_id",
  "title": "Updated issue title",
  "description": "Updated description",
  "priority": "medium",
  "status": "in-progress",
  "created_at": "timestamp",
  "updated_at": "timestamp"
}
```

### 5. Delete Ticket

**Endpoint:** `DELETE /api/tickets/:id`

**Description:** Deletes a specific ticket by ID.

**Response:**

- **204 No Content**
*****************************************************************************************************************

### Error Codes

- **400 Bad Request**: Invalid request data.
- **401 Unauthorized**: Missing or invalid API key.
- **404 Not Found**: Ticket not found.
- **500 Internal Server Error**: An error occurred on the server.

## Rate Limits

API requests are limited to 100 requests per minute per API key.

## Contact

For questions or support, please contact (mailto:nikhilbhawsar122@gmail.com).

---

