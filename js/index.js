async function fetchData() {
    try {
        const response = await fetch('https://ayanashat.github.io/api/db.json');
        let data = await response.json();
        localStorage.setItem('data', JSON.stringify(data));
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData().then(() => {
    const storedData = localStorage.getItem('data');

    const data = JSON.parse(storedData);


    const customerDataTbody = document.getElementById('customer-data');
    const searchInput = document.getElementById('searchInput');


    function renderTable(customersData) {

        for (let customer of customersData) {
            let transactions = data['transactions'].filter(tran => tran.customer_id === customer.id);
            let totalAmount = transactions.reduce((sum, tran) => sum + tran.amount, 0);

            let row = document.createElement('tr');

            row.innerHTML = `
                <td>${customer.id}</td>
                <td class="customer-name">${customer.name}<input type="hidden" value="${customer.id}" class="customer-id"></td>
                <td>${totalAmount}</td>
            `;

            customerDataTbody.appendChild(row)


        }

    }
    renderTable(data.customers)



    function filterCustomers() {
        const query = searchInput.value.toLowerCase();
        const customers = data.customers.filter(customer => customer.name.toLowerCase().includes(query));
        customerDataTbody.innerHTML = '';
        renderTable(customers);
    }

    let customerNames= data.customers.map(customer=>customer.name)
    let customerAmounts = data.customers.map(customer => {
        return data.transactions
            .filter(transaction => transaction.customer_id === customer.id)
            .reduce((sum, transaction) => sum + transaction.amount, 0);
    });
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Total Amount',
                data: [],
                borderWidth: 1
            }]
        }
    });
    function updateChart(customerId) {
        const customerTransactions = data.transactions.filter(transaction => transaction.customer_id === customerId);
        const transactionDates = customerTransactions.map(transaction => transaction.date);
        const transactionAmounts = customerTransactions.map(transaction => transaction.amount);
        myChart.data.labels = transactionDates;
        myChart.data.datasets[0].data = transactionAmounts;
        myChart.update();
    }

    document.querySelectorAll('.customer-name').forEach(cell => {
        cell.addEventListener('click', function() {
            const customerId = parseInt(this.querySelector('.customer-id').value);
            updateChart(customerId);
        });
    });

    myChart.data.labels=customerNames
    myChart.data.datasets[0].data=customerAmounts

    searchInput.addEventListener('keyup', filterCustomers)

})

