  
  const ctx = document.getElementById('myBarChart').getContext('2d');
  const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // X-axis labels
      datasets: [{
        label: 'Bookings',
        data: [12, 19, 7, 15, 9, 15, 12, 10], // Y-axis data
        backgroundColor: '#0bb7af', // Bar color
        borderRadius: 5, // Rounded corners
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: { beginAtZero: true },
      }
    }
  }); 