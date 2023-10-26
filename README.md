<h1>VEGA - A Music Generation Platform</h1>

Welcome to Vega Web Client GitHub repository! Vega is a music generator app that allows user to generated original and unique music that fits their taste. This repository contains the source code and development history of the Vega platform.
Structure

The vega project is structured as follows:

    https://github.com/abreham-atlaw/vega-mobileclient/: This repository contains the source code for the mobile client of the vega app. It's a flutter app with BLoc state management.
    https://github.com/biruk-ay/vega-backend/: This repository contains the source code for the backend of the vega app. It contains API Endpoints, models, .... It's a python Django project.
    https://github.com/abreham-atlaw/oscillate/: This repository contains the source code for training our vocal model.
    https://github.com/abreham-atlaw/vega-web-client: This repository contains source code for the Vega Web Client(Studio)

<h2>Project Structure</h2>

This project is a Vue.js application with a well-structured directory. Below is a brief description of the project structure:

## `src/`
This is the root directory of the source code.

- `App.vue`: This is the main Vue component.
- `assets/`: This directory contains static assets like images and CSS files. It has subdirectories for different features like `auth`, `common`, and `generate`, each containing their respective images.
- `common/`: This directory contains common Vue components, forms, network configurations, serializers, state management, utilities, and view models that are used across different features of the application.
- `configs/`: This directory contains configuration files for data and UI.
- `dependency_injection/`: This directory contains provider configurations for dependency injection.
- `features/`: This directory contains the business logic, data handling, and presentation components for each feature of the application. Each feature like `auth`, `core`, `generate`, and `player` has its own directory structure containing application logic, data models, repositories, requests, serializers, and presentation components.
- `main.ts`: This is the entry point of the Vue application.
- `router/`: This directory contains routing configurations for the Vue application.
- `utils/`: This directory contains utility functions.

Each feature follows a similar structure with `application`, `data`, and `presentation` directories. The `application` directory typically contains forms, states, and view models. The `data` directory includes models, repositories, requests, and serializers. The `presentation` directory holds the Vue components and views related to that feature.

This structure suggests a well-organized codebase where concerns are separated in a clear manner. It should be relatively easy to navigate and maintain.


<h2>Purpose</h2>

The purpose of this repository is to provide a collaborative space for development and improvement of the Vega platform. By making the repository publicly accessible, we aim to foster community engagement, allowing developers, contributors, and users to explore the codebase, report issues, and suggest enhancements.



<h2>How Generative AI Models are Solving the Problem</h2>

Personalization: Traditional streaming apps offer a limited selection of music that is curated by humans. This can make it difficult to find music that you enjoy and that fits your mood, especially if you have niche or specific tastes.
Creativity: Traditional streaming apps allow you to listen to pre-existing music. However, the music that you want may not have been made yet, or it may not be made in enough quantity. This could be due to language, cultural, or time barriers. For example, you would not find many rock songs that are sung in multiple languages, or an 80s hip hop track with current country song vocals.
Originality: The music generated for you is unique in that it has not been listened to by anyone before. This means that you can experience something truly new and original, and you can be the first person to share it with the world.

