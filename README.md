# 🗨️ LiveTalk

**LiveTalk** is a lightweight real-time chat app built with **Node.js** and **raw WebSockets**. It allows an admin to manage chat rooms while users can join, message, and upvote conversations.

---

## Features

### Admin Capabilities
- Create chat rooms with customizable properties:
  - `name`: Name of the chat room
  - `start_time`: When the room becomes active
  - `is_open`: Whether the room is open for chat
  - `cool_down_time`: Optional delay between messages

### User Interactions
- Join available chat rooms
- Send and receive real-time messages
- Upvote messages

### Voting Logic
- Messages with **>3 upvotes** move to a **Highlighted** section
- Messages with **>10 upvotes** trigger an **admin alert**

---

## Tech Stack

- Node.js
- WebSocket (`ws` library)
- No frameworks — raw, minimal implementation

---

## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/yourusername/livetalk.git
cd livetalk

# Install dependencies
npm install

# Start the server
node server.js
