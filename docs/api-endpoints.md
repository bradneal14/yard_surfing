# API Endpoints

## HTML API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Profiles

- `GET /api/users/index`:shows all users
  - Profiles index/search
- `GET /api/user/:id`: shows one user's profile
- `PATCH /api/user/:id/edit`: user profile edit form

### Stays

- `GET /api/users/:id/stays` -User can only see own info, history and future
- `POST /api/users/:id/stays/new`: new stay request form
- `PATCH /api/users/:id/stays/:id/edit`: edit booked stay
- `DELETE /api/users/:id/stays/:id`: delete booked stay


### Yards

- A users's yard will be included in the user show template
- `POST /api/users/:id/yards/new`: add yard to user
- `GET /api/yards/host_id/index`: shows all properties of user
- `GET /api/yards/host_id/yard_id/show`: show single yard of host
- `DELETE /api/yards/host_id/yard_id`: remove yard from user

### Messages
- `GET /api/users/:id/messages/index`: Shows all messages for user
- `GET /api/users/:id/message/show`: shows one message for user
- `POST /api/users/:id/messages/new`: new message form for user
