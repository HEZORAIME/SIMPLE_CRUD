# Simple CRUD API with Node.js, Express, and MongoDB

This project is a simple Create, Read, Update, and Delete (CRUD) API built using Node.js, Express, and MongoDB (Mongoose). It provides basic endpoints for managing a collection of products.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (which includes npm, the Node Package Manager)
- A MongoDB Atlas account or a local MongoDB instance.

## Installation

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <your-repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**
    Open your terminal in the project directory and run:
    ```bash
    npm install
    ```
    This will install all the necessary packages listed in `package.json`, including:
    - `express`: Fast, unopinionated, minimalist web framework for Node.js.
    - `mongoose`: Elegant MongoDB object modeling for Node.js.
    - `body-parser`: Node.js body parsing middleware (though Express built-in middleware is primarily used now).
    - `nodemon` (dev dependency): Utility that monitors for any changes in your source and automatically restarts your server.


## Configuration

1.  **Database Connection:**
    You need to configure the MongoDB connection string. Open the `index.js` file and locate the following line:

    ```javascript
    mongoose.connect("yourmongoodbatlas") 
    ```
    Replace `"yourmongoodbatlas"` with your actual MongoDB Atlas connection string or your local MongoDB URI. 
    
    **Example for MongoDB Atlas:**
    `mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority`

    **Important:** Ensure your MongoDB Atlas cluster has network access configured to allow connections from your IP address or `0.0.0.0/0` (allow connections from anywhere - use with caution).

## Running the Application

1.  **Start the server (development mode with auto-restart):**
    ```bash
    npm run dev
    ```
    This command uses `nodemon` to start the server. It will automatically restart when you make changes to the code.

2.  **Start the server (production mode):**
    ```bash
    npm run serve 
    ```
    Alternatively, you can use:
    ```bash
    node index.js
    ```

Once the server is running, you should see a message in your console:
`Server is running on port 3000`
`Successfully connected to the MongoDB database!` (if the database connection is successful)