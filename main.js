// function sumOfDistinctElements(set1, set2) {
//     let sum = 0;

//     // Add elements from set1 that are not in set2
//     for (let i = 0; i < set1.length; i++) {
//         if (!set2.includes(set1[i])) {
//             sum += set1[i];
//         }
//     }

//     // Add elements from set2 that are not in set1
//     for (let i = 0; i < set2.length; i++) {
//         if (!set1.includes(set2[i])) {
//             sum += set2[i];
//         }
//     }

//     return sum;
// }

// // Example usage:
// let set1 = [3, 1, 7, 9];
// let set2 = [2, 4, 1, 9, 3];

// let result = sumOfDistinctElements(set1, set2);
// console.log(result);  // Output: 13










// Dot product function
function dotProduct(v1, v2) {
    let ps = 0;  // Initialize dot product to 0

    // Calculate the dot product
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }

    return ps;
}

// Function to check if two vectors are orthogonal
function checkOrthogonality(v1, v2) {
    let ps = dotProduct(v1, v2);

    if (ps === 0) {
        console.log("The vectors are orthogonal.");
    } else {
        console.log("The vectors are NOT orthogonal.");
    }
}

// Main function to handle multiple vector pairs
function main() {
    let nPairs = parseInt(prompt("Enter the number of vector pairs: "), 10);  // Number of vector pairs

    for (let i = 0; i < nPairs; i++) {
        let n = parseInt(prompt("Enter the size of the vectors: "), 10);  // Size of the vectors

        let v1 = [];
        let v2 = [];

        // Input for vector 1
        console.log("Enter elements of the first vector:");
        for (let j = 0; j < n; j++) {
            v1.push(parseInt(prompt(`Element ${j + 1} of vector 1: `), 10));
        }

        // Input for vector 2
        console.log("Enter elements of the second vector:");
        for (let j = 0; j < n; j++) {
            v2.push(parseInt(prompt(`Element ${j + 1} of vector 2: `), 10));
        }

        // Check orthogonality
        checkOrthogonality(v1, v2);
    }
}

// Call the main function
main();
