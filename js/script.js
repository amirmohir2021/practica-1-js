window.addEventListener('DOMContentLoaded', function() {

    let products = document.querySelectorAll('.products'),
     buttons = document.getElementsByTagName('button'),
     openBtn = document.querySelector('.open');


     function createCart(){
     let cart =  document.createElement('div'),
          field = document.createElement('div'),
          heading = document.createElement('h2'),
          closeBtn = document.createElement('button');

        cart.classList.add('cart')
        field.classList.add('cart-field')
        closeBtn.classList.add('close')


        heading.textContent='Create a new Cart'
        closeBtn.textContent ='Close'



        document.body.appendChild(cart)
        cart.appendChild(heading)
        cart.appendChild(field)
        cart.appendChild(closeBtn)
     } 
     createCart()

 let cart = document.querySelector('.cart'),
      closeBtn  = document.querySelector('.close'),
       field = document.querySelector('.cart-field')
  
        openBtn.addEventListener('click', function() {

            cart.style.display = 'block'

        })
        closeBtn.addEventListener('click', function() {

            cart.style.display = 'none'
        })

         buttons.foreach(function(item,i) {

            item.addEventListener('click', function() {

                let cloneItem = products[i].cloneNode(true),
                btn = cloneItem.querySelector('button');
                btn.remove()
                field.appendChild(cloneItem)
                products[i].remove()
            })


         })

})





