**Tube and pipe calcuator Project**

**A web-app for calculating Tube and Pipe Strip Calculations. For building api for this web-app we use python and Django framework. for back-end and react for frontend**

**#Prerequisites:**

Before you begin, make sure you have the following installed on your system:

- Python 3.x
- pip (Python package manager)
- Virtualenv (for creating virtual environments)

**#Install requirements:**

1. First upgrade your Python to the latest version. So, head over to python.org/download and download the latest version.

You can check your python version: in terminal window type

python –version

1. Clone the repository: git clone <repository_url>
2. Navigate to the project directory: cd calculator
3. Create a virtual environment: python -m venv myenv
4. Activate the virtual environment:

- On Windows:
  ```
  myenv\Scripts\activate
  ```
- On macOS/Linux:
  ```
  source myenv/bin/activate
  ```

5. Install Django and other dependencies:
   pip install -r requirements.txt

6. Set up the environment variables:

- Create a `.env` file in the root directory of the project.
- Add your MySQL database configuration to the `.env` file. Example:
  ```
  DB_NAME=your_database_name
  DB_USER=your_database_user
  DB_PASSWORD=your_database_password
  DB_HOST=your_database_host
  ```

7. Run migrations to apply database changes: python manage.py migrate
8. Setting Up the Admin Site
   ## Create a Superuser: ```sh
   python manage.py createsuperuser

## API Usage

for building an API, make sure to install `corsheaders`:
pip install django-cors-headers
You can then configure CORS settings in your Django project's settings file.

## FrontEnd

# Getting Started with Create React App

1. Navigate to the frontend directory (if not in the same directory):
   cd path/to/your/react-app
2. Install the dependencies:
   npm install

   # or

   yarn install

3. Install Axios:
   npm install axios

# or

yarn add axios

4. Install Bootstrap:
   npm install bootstrap

# or

yarn add bootstrap

## Running the App:

Backend:

1. Run the development server: python manage.py runserver

Frontend:

1. Start the React development server:: npm start
   Start the React development server:
