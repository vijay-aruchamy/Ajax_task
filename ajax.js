function loaddata() {
    let obj = new XMLHttpRequest();
    obj.onreadystatechange = function () {
        console.log(this.status);
        console.log(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            localStorage.setItem('responsekey', this.responseText);
            console.log("enteringg")
            


        }
    };
    obj.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);
    obj.send();

}
