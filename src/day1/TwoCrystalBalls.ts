//You have two crystal balls. You are standing at the top of a 100 story building.
//Find out in the most optimized way what is the first floor at which a ball will break.
//
//A search problem, very unique. You have two chances to find the value(two balls).
//Fundamentaly, use something similar to a binary search except your STEP size is not halved
//its sqrt(n).
//We want to optimize to be faster than O(n)
//return the index at which this is true
export default function two_crystal_balls(breaks: boolean[]): number {
    const step = Math.floor(Math.sqrt(breaks.length));
    let index = step;
    //Use the first crystal to step through the array and find a breaking point
    while (index <= breaks.length) {
        if (breaks[index]) {
            break;
        }
        index += step;
    }
    //After breaking, walk back to the last known good point(where it broke)
    index -= step;
    //Linear search the rest to find the first breaking point
    for (let j = index; j < breaks.length; j++) {
        if (breaks[j]) return j;
    }

    return -1;
}
