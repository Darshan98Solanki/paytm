---
# PayTM Clone - <a href='https://paytm-axue.vercel.app' target='_blank'>PayDM link</a>

This project demonstrates a PayTM clone where users can sign up and register on our platform to receive some signup paper money. They can transfer the money to their friends who are already on the platform.

## Features

- **Secure Transactions:** Utilizes encryption and secure payment protocols to ensure transaction safety.
- **Modular Codebase:** Well-structured and modular code for easy understanding and maintenance.
- **User Search:** Allows users to search for other users on the platform.
- **No User Found Handling:** Displays a message when no users are found based on the search criteria.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Security:** JWT for authentication, bcrypt for password hashing
- **Database:** MongoDB for storing transaction and user data
- **HTTP Client:** Axios for making API requests

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Express.js
- React.js

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Darshan98Solanki/paytm.git
   ```

2. Navigate to the project directory:

   ```bash
   cd paytm
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables in a `.env` file:

   ```
   PAYTM_MERCHANT_ID=<Your PayTM Merchant ID>
   PAYTM_MERCHANT_KEY=<Your PayTM Merchant Key>
   JWT_SECRET=<Your JWT Secret>
   ```

5. Start the development server:

   ```bash
   npm start
   ```

### Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Sign up or log in to the platform.
3. Use the search bar to find users.
4. Transfer money to other users on the platform.

### Project Structure

- `frontend/src/components`: Contains React components such as `User`, `Users`, `SearchBar`, and `NoUserFound`.
- `backend`: Contains the backend code for handling API requests and database operations.

### Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

### License

This project is licensed under the MIT License. See the `LICENSE` file for more details.