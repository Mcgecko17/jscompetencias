fetch('/api/results')
    .then(response => response.json())
    .then(data => {
        const resultsList = document.getElementById('results-list');
        data.forEach(result => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>Nombre:</strong> ${result.name}<br>
                                  <strong>Email:</strong> ${result.email}<br>
                                  <strong>Mensaje:</strong> ${result.message}`;
            resultsList.appendChild(listItem);
        });
    });