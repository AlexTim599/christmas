const insertToysCards = (element, cards, data, clear = false) => {
    if (clear === true) {
        element.innerHTML = ''
    }

    cards.forEach((item) => {
        element.innerHTML += `
        <div class="toys-card" data-num=${item.num -1}>
                    <div class="title toys-title">${item.name}</div>
                    <img class="img toys-img" src="./assets/toys/${item.num}.png" alt="photo">
                    <div class="toys-description">
                        <p class="count">Количество: ${item.count}</p>
                        <p class="year">Год покупки: ${item.year}</p>
                        <p class="shape">Форма: ${item.shape}</p>
                        <p class="color">Цвет: ${item.color}</p>
                        <p class="size">Размер: ${item.size}</p>
                        <p class="lavely">Любимая:
                            <span class = "lavelyBoolean">${item.favorite ? 'да': 'нет'}</span>
                        </p>
                    </div>
                </div>
              `
    })
    const toyCard = document.querySelectorAll('.toys-card')

    toyCard.forEach(element => {
        element.addEventListener('click', (element) => {
            const index = element.currentTarget.dataset.num

            let myFavorite = localStorage.getItem('myFavorite')



            if (data[index].favorite === false) {
                if (myFavorite === '20') {
                    alert('Все слоты заняты')
                    return
                }

                myFavorite++

                localStorage.setItem('myFavorite', myFavorite)
            } else {
                myFavorite--
                localStorage.setItem('myFavorite', myFavorite)
            }

            element.currentTarget.classList.toggle('checked')
            let lavelyBoolean = element.currentTarget.querySelector('.lavelyBoolean')


            if (data[index].favorite === true) {
                data[index].favorite = false
                lavelyBoolean.innerHTML = 'нет'
            } else {
                data[index].favorite = true
                lavelyBoolean.innerHTML = 'да'
            }

            // localStorage.setItem()

        })
    })
}

export default insertToysCards