var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
    document.write('<p>' + message + '</p>');
}

while (true) {
    search = prompt("Search for product. Type list to show all or quit to exit");
    if (search === 'quit') {
        break;
    }
}