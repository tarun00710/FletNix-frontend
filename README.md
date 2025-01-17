# FletNix Frontend

FletNix is a Netflix-inspired movie and TV show browsing application built using Angular 12+ with standalone components. This repository contains the frontend codebase for FletNix.

## Live Demo

Check out the live version of FletNix here: [FletNix Live](https://fletnix-v.netlify.app/)


## Features
- User authentication (Login/Register)
- Age Restriction ( No 'R' rated content for age less than 18 ) 
- Filter movies and shows by type (Movies, TV Shows)
- Search by title or cast
- Responsive UI with Netflix-inspired styling with tailwind css
- Paginated List for smooth navigation
- Detail Page for more info.
- Shimmer UI for loading state and good user experience

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Angular CLI](https://angular.io/cli) (version 12 or higher)
- A code editor like [Visual Studio Code](https://code.visualstudio.com/)

## Getting Started

### 1. Clone the Repository

```bash
# Clone using SSH
git clone git@github.com:tarun00710/FletNix-frontend.git

# Navigate to the project directory
cd FletNix-frontend
```

### 2. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

### 4. Run the Application

Start the Angular development server:

```bash
ng serve
```

The app will be available at [http://localhost:4200](http://localhost:4200).

### 5. Build the Application

To create a production build, run:

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## Folder Structure

```
FletNix/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   └── guards/
│   └── index.html
├── angular.json
├── package.json
├── README.md
└── tsconfig.json
```


## Acknowledgements

- Built with ❤️ using Angular
- Inspired by Netflix's UI

## Contact

For any queries, reach out to **Tarun** at [tarun00710](https://github.com/tarun00710).
