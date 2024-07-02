Website Name: BS Travels

Live site link: https://assignment-10-535b2.web.app/

Features & Characteristics:

● Our website has 4 routes in the top. By default it will show on home section. it also have site name, profile image and a logout button. when user is logged in he qill show profile image and logout button, otherwise it will show login button and register button.

● Login section have email and password based system and sign in with google and github system.

● If a new user come then he can create his account with email and password.

● After successful account creation, log in , log out, the website will notify with hot toast.

● In home page one can see a slider, all tourists spots, country and others sections.

● After clicking on a card one can see the details.

● Clicking on All Tourist Spot section one can see all the loccation and he can see details by clicking on details button. Details section is private. So user have to log in to see this.

● In My List section user can see all the details he added. he can update and delete data from here.

● This site is connected with Mongodb.

● This site is made with React-simple-typewriter, React-tooltip, React Hook Form, Swiperjs package.

● This site is responsive for small, medium and large devises.


## HTML, CSS, Tailwind, React, Node JS, Express JS, Mongo DB have been used in this project.


Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version X.X.X)
- [MongoDB](https://www.mongodb.com/) (version X.X.X)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**

    ```sh
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies**

    ```sh
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory and add the following environment variables:

    ```env
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/your-database-name
    ```

4. **Start MongoDB**

    Ensure MongoDB is running. You can start MongoDB using:

    ```sh
    mongod
    ```

5. **Run the application**

    ```sh
    npm start
    ```

    The application should now be running on [http://localhost:5000](http://localhost:5000).

### Additional Notes

- Ensure MongoDB is properly installed and running on your local machine. You can refer to the [MongoDB installation guide](https://docs.mongodb.com/manual/installation/) for detailed instructions.
- If you encounter any issues, check the console for error messages and ensure all dependencies are correctly installed.
- For more advanced usage and configuration, refer to the project documentation or source code comments.

