"use strict";

// Function to calculate the percentage of the world population
function percentageOfWorld1(population) {
    const worldPopulation = 7900; // World population in millions
    return (population / worldPopulation) * 100;
}

const populations = [10, 1441, 332, 83];

console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]).toFixed(2) + '%',
    percentageOfWorld1(populations[1]).toFixed(2) + '%',
    percentageOfWorld1(populations[2]).toFixed(2) + '%',
    percentageOfWorld1(populations[3]).toFixed(2) + '%',
];

console.log(percentages);