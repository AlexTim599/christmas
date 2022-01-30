const sortByValue = (data, sortBy) => {
    if (sortBy === 'az') {
        data.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        })
    } else if (sortBy === 'za') {
        data.reverse((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        })
    } else if (sortBy === 'ascending') {
        data.sort((a, b) => {
            return a.count - b.count
        })
    } else if (sortBy === 'descending') {
        data.sort((a, b) => {
            return b.count - a.count
        })
    }
    return data
}

export default sortByValue