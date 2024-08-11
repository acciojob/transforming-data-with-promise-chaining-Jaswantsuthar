//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function() {
    // Get the input value and parse it as a number
    const inputValue = parseInt(document.getElementById("ip").value);

    // Create the first promise that resolves after 2 seconds with the input number
    const initialPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(inputValue)) {
                reject("Invalid input: Please enter a valid number.");
            } else {
                resolve(inputValue);
            }
        }, 2000);
    });

    initialPromise
        .then((number) => {
            document.getElementById("output").textContent = `Result: ${number}`;
            // Return a promise that multiplies the number by 2 and resolves after 1 second
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(number * 2);
                }, 1000);
            });
        })
        .then((number) => {
            document.getElementById("output").textContent = `Result: ${number}`;
            // Return a promise that subtracts 3 from the number and resolves after 1 second
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(number - 3);
                }, 1000);
            });
        })
        .then((number) => {
            document.getElementById("output").textContent = `Result: ${number}`;
            // Return a promise that divides the number by 2 and resolves after 1 second
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(number / 2);
                }, 1000);
            });
        })
        .then((number) => {
            document.getElementById("output").textContent = `Result: ${number}`;
            // Return a promise that adds 10 to the number and resolves after 1 second
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(number + 10);
                }, 1000);
            });
        })
        .then((finalNumber) => {
            document.getElementById("output").textContent = `Final Result: ${finalNumber}`;
        })
        .catch((error) => {
            document.getElementById("output").textContent = error;
        });
});
