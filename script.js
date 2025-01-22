const data = [
    {
        id: 1,
        name: 'جوانات تيفلون خامة ايطالي',
        name_e: 'Ptfe O ring',
        image: 'images/gwanat.jpg',
        description: 'في الصمامات الكروية والمنتجات المشتقة، تكتسب حشية التفلون PTFE أهمية حيوية في نجاح المنتج النهائي من خلال توفير الإحكام والمتانة.'
    },
    {
        id: 2,
        name: "غراء لاصق للمعادن",
        name_e: 'Loxeal  for glue valves',
        image: 'images/glue.png',
        description: 'في الصمامات الكروية والمنتجات المشتقة، تكتسب حشية التفلون PTFE أهمية حيوية في نجاح المنتج النهائي من خلال توفير الإحكام والمتانة.'
    }
    ,
    {
        id: 3,
        name: "يد حنفية",
        name_e: 'Loxeal  for glue valves',
        image: 'images/taps.png',
        description: 'في الصمامات الكروية والمنتجات المشتقة، تكتسب حشية التفلون PTFE أهمية حيوية في نجاح المنتج النهائي من خلال توفير الإحكام والمتانة.'
    }
    ,
    {
        id: 4,
        name: "طبة قلب محبس زاوية",
        name_e: 'Loxeal  for glue valves',
        image: 'images/tbaa.png',
        description: 'في الصمامات الكروية والمنتجات المشتقة، تكتسب حشية التفلون PTFE أهمية حيوية في نجاح المنتج النهائي من خلال توفير الإحكام والمتانة.'
    }
    ,
    {
        id: 5,
        name: "جوانات (NBR) لعواميد المحابس والحنفيات",
        name_e: 'Loxeal  for glue valves',
        image: 'images/nbr.png',
        description: 'في الصمامات الكروية والمنتجات المشتقة، تكتسب حشية التفلون PTFE أهمية حيوية في نجاح المنتج النهائي من خلال توفير الإحكام والمتانة.'
    }
    ,
    {
        id: 6,
        name: "جوانات سوداء NBR",
        name_e: 'Loxeal  for glue valves',
        image: 'images/gwanat-black.png',
        description: 'في الصمامات الكروية والمنتجات المشتقة، تكتسب حشية التفلون PTFE أهمية حيوية في نجاح المنتج النهائي من خلال توفير الإحكام والمتانة.'
    }
    ,
    {
        id: 7,
        name: "فلاتر",
        name_e: 'Loxeal  for glue valves',
        image: 'images/filters.png',
        description: 'في الصمامات الكروية والمنتجات المشتقة، تكتسب حشية التفلون PTFE أهمية حيوية في نجاح المنتج النهائي من خلال توفير الإحكام والمتانة.'
    }
    ,
    {
        id: 8,
        name: "رمل رمالة للحنفيات والمحابس",
        name_e: 'Loxeal  for glue valves',
        image: 'images/sand.png',
        description: 'في الصمامات الكروية والمنتجات المشتقة، تكتسب حشية التفلون PTFE أهمية حيوية في نجاح المنتج النهائي من خلال توفير الإحكام والمتانة.'
    }
    ,
    {
        id: 9,
        name: "بردات محبس بلاكور",
        name_e: 'Loxeal  for glue valves',
        image: 'images/bradat.png',
        description: 'في الصمامات الكروية والمنتجات المشتقة، تكتسب حشية التفلون PTFE أهمية حيوية في نجاح المنتج النهائي من خلال توفير الإحكام والمتانة.'
    }
    ,
    {
        id: 10,
        name: "جوانات سيليكون",
        name_e: 'Loxeal  for glue valves',
        image: 'images/gwanta-s.png',
        description: 'في الصمامات الكروية والمنتجات المشتقة، تكتسب حشية التفلون PTFE أهمية حيوية في نجاح المنتج النهائي من خلال توفير الإحكام والمتانة.'
    }
    ,
    {
        id: 11,
        name: "باشبوري",
        name_e: 'Loxeal  for glue valves',
        image: 'images/basory.png',
        description: 'في الصمامات الكروية والمنتجات المشتقة، تكتسب حشية التفلون PTFE أهمية حيوية في نجاح المنتج النهائي من خلال توفير الإحكام والمتانة.'
    }
]

const productsContainer = document.querySelector('.products-page-container')

const init = ()=> {
    data.forEach(product=> {
        const div = document.createElement('div')
        div.innerHTML = `
                <div class="product" id=${product.id} >
                    <div class="pro-image">
                    <img src=${product.image} alt=${product.name} />
                    </div>
                    <h3 class="pro-name">${product.name}</h3>
                </div>
            `
        if (productsContainer) {
            productsContainer.appendChild(div)
        } else {
            return
        }
    })
}

init()

const products = document.querySelectorAll('.product')
const modal = document.querySelector('.modal')
let modalContent
if (modal) {
     modalContent = modal.querySelector('.content')
    const closeModal = modal.querySelector('i')
    closeModal.addEventListener("click", ()=> {
        modal.style.display = 'none'
        body.style.overflow = 'auto'
    })
}
const body = document.querySelector('body')


products.forEach(product=> {
    product.addEventListener("click", ()=> {
        modalContent.innerHTML = ''
        const pro = data.filter(e=> e.id == product.id)[0]
        
        modal.style.display = 'grid'
        body.style.overflow = 'hidden'
        modalContent.innerHTML = `
        <div class= 'image'>
            <img src=${pro.image} alt=${pro.name} />
        </div>
        <div class= 'text'>
            <h3>${pro.name}</h3>
            <p>${pro.description}</p>
        </div>
            
        `
    })
})

const list = document.querySelector('.list')

document.querySelector('nav .open').addEventListener('click', ()=> {
    list.style.right = '0px'
})
document.querySelector('nav .close').addEventListener('click', ()=> {
    list.style.right = '-100%'
})