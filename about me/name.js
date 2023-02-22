function anonname() {
    let person = prompt('♡ Kindly enter your name ♡: ');
    if (person === "") {
        person = "Anon Sneaky Person"
    }
    document.querySelector('#yourname').innerHTML = "Hellloo " + person;
}
anonname();
