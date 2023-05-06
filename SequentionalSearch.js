const array = [50, 60, 95, 65, 33, 95];


function findLocation(index) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] == index) {
            return i;
        }
    }

    console.log("Not defined");
}
console.log(findLocation(33));
