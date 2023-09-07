function loaddata() {
    let obj = new XMLHttpRequest();
    console.log("enteringg")
    obj.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (!localStorage.getItem('responsekey'))
                localStorage.setItem('responsekey', this.responseText);


        }
    };
    obj.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);
    obj.send();

}
