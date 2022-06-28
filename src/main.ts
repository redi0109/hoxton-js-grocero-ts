import './style.css'
import './reset.css'

let state = {
  storeItems: [
    {
      id: 1,
      name: 'beetroot',
      price: 0.45,
      stock: 8,
      inCart: 3,
    },
    {
      id: 2,
      name: 'carrot',
      price: 0.15,
      stock: 5,
      inCart: 5,
    },
    {
      id: 3,
      name: 'apple',
      price: 0.25,
      stock: 3,
      inCart: 1,
    },
    {
      id: 4,
      name: 'apricot',
      price: 0.35,
      stock: 4,
      inCart: 0,
    },
    {
      id: 5,
      name: 'avocado',
      price: 0.14,
      stock: 9,
      inCart: 1,
    },
    {
      id: 6,
      name: 'bananas',
      price: 0.23,
      stock: 1,
      inCart: 0,
    },
    {
      id: 7,
      name: 'bell-pepper',
      price: 0.17,
      stock: 7,
      inCart: 3,
    },
    {
      id: 8,
      name: 'berry',
      price: 0.1,
      stock: 6,
      inCart: 0,
    },
    {
      id: 9,
      name: 'blueberry',
      price: 0.25,
      stock: 12,
      inCart: 0,
    },
    {
      id: 10,
      name: 'eggplant',
      price: 0.12,
      stock: 1,
      inCart: 2,
    },
  ],
}

function ItemImage(item) {
  let id = String(item.id).padStart(3, '0')
  return `assets/icons/${id}-${item.name}.svg`
}

function getCartItems() {
  return state.storeItems.filter(item => item.inCart > 0)
}

function total() {


}


function increaseQuantity(item) {
  if (item.stock === 0) return

  item.inCart++
  item.stock--
}

function decreaseQuantity(item) {
  if (item.inCart > 0) {
    item.inCart--
    item.stock++
  }
}

function renderStoreItems() {
  let storeUl = document.querySelector('.store--item-list')
  storeUl.textContent = ''

  for (let item of state.storeItems) {
    let storeItemEl = document.createElement('li')

    let iconDiv = document.createElement('div')
    iconDiv.className = '.store--item-icon'

    let iconImg = document.createElement('img')
    iconImg.src = ItemImage(item)

    let addBtn = document.createElement('button')
    addBtn.textContent = `Add to cart (${item.stock})`
    addBtn.addEventListener('click', function () {
      increaseQuantity(item)
      render()
    })

    iconDiv.append(iconImg)
    storeItemEl.append(iconDiv, addBtn)
    storeUl.append(storeItemEl)
  }
}

function renderCartItems() {
  let cartUl = document.querySelector('.cart--item-list')
  cartUl.textContent = ''

  let cartItems = getCartItems()

  for (let item of cartItems) {
    let cartLi = document.createElement('li')

    let itemImg = document.createElement('img')
    itemImg.className = 'cart--item-icon'
    itemImg.src = ItemImage(item)
    itemImg.alt = item.name

    let itemNameP = document.createElement('p')
    itemNameP.textContent = item.name

    let removeBtn = document.createElement('button')
    removeBtn.className = 'quantity-btn remove-btn center'
    removeBtn.textContent = '-'
    removeBtn.addEventListener('click', function () {
      decreaseQuantity(item)
      render()
    })

    let quantitySpan = document.createElement('span')
    quantitySpan.className = 'quantity-text center'
    quantitySpan.textContent = String(item.inCart)

    let addBtn = document.createElement('button')
    addBtn.className = 'quantity-btn add-btn center'
    addBtn.textContent = '+'
    addBtn.addEventListener('click', function () {
      increaseQuantity(item)
      render()
    })

    cartLi.append(itemImg, itemNameP, removeBtn, quantitySpan, addBtn)
    cartUl.append(cartLi)
  }
}

function renderTotal() {

}

function render() {
  renderStoreItems()
  renderCartItems()
  renderTotal()
}

render()
