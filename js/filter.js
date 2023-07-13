const list = document.querySelector('.filter__list'),
    items = document.querySelectorAll('.portfolio__column')
    listItems = document.querySelectorAll('.filter__item')
function  filter(){
    list.addEventListener('click', event =>{
        const targetId = event.target.dataset.id
        const target = event.target

        if (target.classList.contains('filter__item')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('active')
        }

        switch (targetId){
            case 'all':
                getItems('portfolio__column')
                break
            case 'web':
                getItems(targetId)
                break
            case 'apps':
                getItems(targetId)
                break
            case 'other':
                getItems(targetId)
                break
        }
    })
}
filter()
function getItems(className) {
    items.forEach(item =>{
        if(item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}