function loaddata() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch data. Status code: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data); 
            })
            .catch(error => {
                reject(error); 
            });
    });
}

