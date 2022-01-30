// import data from './data'

import sortByValue from './sortByValue'
import insertToysCards from './insertToysCards'

const megaPihar = (data) => {
    const filters = JSON.parse(localStorage.getItem('filterStorage'))
    const toysContainer = document.querySelector('.toys-container')

    let filteredData = data

    for (let key in filters) {
        if (key === 'shape') {
            const shapes = Object.values(filters[key]).filter(item => item !== null)
            if (shapes.length === 0) {
                continue
            }
            filteredData = filteredData.filter(item => shapes.includes(item.shape))
        }

        if (key === 'color') {
            const colors = Object.values(filters[key]).filter(item => item !== null)
            if (colors.length === 0) {
                continue
            }
            filteredData = filteredData.filter(item => colors.includes(item.color))
        }

        if (key === 'size') {
            const sizes = Object.values(filters[key]).filter(item => item !== null)
            if (sizes.length === 0) {
                continue
            }
            filteredData = filteredData.filter(item => sizes.includes(item.size))
        }

        if (key === 'favorite') {
            if (filters[key] === true) {
                filteredData = filteredData.filter(item => item.favorite === true)
            }
        }

        if (key === 'filterByCount') {
            filteredData = filteredData.filter((item) => Number(item.count) >= Number(filters.filterByCount[0]) && Number(item.count) <= Number(filters.filterByCount[1]))
        }

        if (key === 'filterByYear') {
            filteredData = filteredData.filter((item) => Number(item.year) >= Number(filters.filterByYear[0]) && Number(item.year) <= Number(filters.filterByYear[1]))
        }

        if (filteredData.length === 0) {
            toysContainer.innerHTML = 'Совпадений не найдено!'
            return
        }
    }
    const sortedData = sortByValue(filteredData, filters && filters.sortBy ? filters.sortBy : false)
    insertToysCards(toysContainer, sortedData, filteredData, true)
}

export default megaPihar