/***
 * The input list is first sorted in ascending order and then filter for duplicated that occur successively to each other    
 * @param list array of strings
 * @returns array of strings without duplicates 
 */
function deduplicate(list) {

    const deduplicate_list = list
        .sort() // sort in ascending order converting the strings to it's integer values. 
        .filter((word, idx, array) => (idx === 0 || word != array[idx-1]));
        // filter include the first word, and then in for each looking one step back to see if the work is already recorded for the list. 
    return deduplicate_list; 
};

exports.deduplicate = deduplicate;
