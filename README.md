# Customer and Transaction Data Viewer

This project is a web application that retrieves customer and transaction data from a provided API endpoint and displays it in a user-friendly format. The application includes features such as a table for displaying customer data, filtering capabilities, and a graph to visualize transaction data.

## Demo

Check out the live demo of the application [here](https://ayanashat.github.io/aya-nashaat-job-fair/).

## Features

- A table that displays the list of customers along with their transaction data.
- The ability to filter the table by customer name or transaction amount.
- A graph that displays the total transaction amount per day for the selected customer.

## Requirements

- Use a modern JavaScript framework or library such as React, Angular, or Vue.js.
- Use any charting library to display the graph.
- Set up a local server to host the JSON data.
- Use the provided data as an API. Feel free to add data in the transaction dataset JSON for demonstration purposes.
- Create a new repository on your GitHub for your project, add your code to the repo, and enable GitHub Pages for your repo to host the application.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the local server to host the JSON data:
    ```bash
    npm run server
    ```

4. Start the application:
    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

1. View the list of customers and their transaction data in the table.
2. Use the filter options to search for specific customers or transaction amounts.
3. Click on a customer to view a graph displaying their total transaction amount per day.

## Data

Use the following sample data for the API. Feel free to add more data to the transaction dataset for demonstration purposes.

```json
{
  "customers": [
    {
      "id": 1,
      "name": "John Doe",
      "transactions": [
        { "date": "2023-07-10", "amount": 150 },
        { "date": "2023-07-11", "amount": 200 }
      ]
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "transactions": [
        { "date": "2023-07-10", "amount": 300 },
        { "date": "2023-07-12", "amount": 400 }
      ]
    }
  ]
}
