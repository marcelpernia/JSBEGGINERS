import products from './products.js'

const modal = document.getElementById('modal');
const closeBtn = document.querySelectorAll('.close-modal');
const productList = document.getElementById('productList');

const handleModal = (id) => {
    modal.classList.add('is-active');
    
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-img');
    const modalDescription = document.getElementById('modal-description');
    const {image, title, description} = products.find(item => item.id === id)
    
    modalTitle.innerText = title
    modalImage.src = image
    modalDescription.innerHTML = description
}

const closeModal = () => {
    modal.classList.remove('is-active');
}

closeBtn.forEach((button) => {
    button.addEventListener('click', () => {
        closeModal()
    })
})

const templateCard = ({id, title, description, image}) => {
    return `
    <div class="card" id="${id}" data-description="${description}">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="${image}" alt="Placeholder image" />
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <h3 class="mb-0">${title}</h3>
            </div>
        </div>
    </div>
    `
}

products.forEach(item => {
    productList.innerHTML += templateCard(item);
})

productList.addEventListener('click', function(e) {
    if(e.target && e.target.tagName === 'IMG') {
        const id = e.target.parentNode.parentNode.parentNode.id
        handleModal(id);
    }
})