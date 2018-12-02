/* //cart functionality

(function() {

    const cartInfo = document.getElementById("cart-info");
    const cart = document.getElementById("cart");

    cartInfo.addEventListener("click", function() {
        cart.classList.toggle("show-cart");
    });
})();

(function() {

    const cartExit = document.getElementById("cart-exit");
    const cart = document.getElementById("cart");

    cartExit.addEventListener("click", function() {
        cart.classList.toggle("show-cart");
    });
})();

//add items to the cart

(function() {
    const cartBtn = document.querySelectorAll(".");

    cartBtn.forEach(function(btn) {
        btn.addEventListener("click", function(event) {

            if(event.target.parentElement.classList.contains("store-item-icon"))
            {
                let name = 
                event.target.parentElement.parentElement.nextElementSibling.parentElement.parentElement.children[0].children[0].textContent;
                item.name = name;

                let price = 
                event.target.parentElement.parentElement.nextElementSibling.parentElement.parentElement.children[0].children[1].textContent;
                item.name = name;

                let finalPrice = price.slice(1).trim();
                item.price = finalPrice;

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item', 'my-3'
                );

                cartItem.innerHTML  = `
                    <div class="item-text">
                    <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                    <span>$</span>
                    <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                </div>
                <a href="#" id='cart-item-remove' class="cart-item-remove">
                    <i class="fas fa-trash"></i>
                </a>
                </div>

                `;
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');

                cart.insertBefore(cartItem,total);

                alert('item added to cart');

                showTotals();
            }
        });
    })();

                function showTotals(){
                    const total = [];
                    const items = document.querySelectorAll(".cart-item-price");

                    items.forEach(function(item){
                        total.push(parseFloat(item.textContent));

                    });

                    const totalMoney = total.reduce(function(total, item){
                        total += item;
                        return total;
                    }, 0);

                    const finalMoney  = totalMoney.toFixed(2);

                    document.getElementById('cart-total').textContent = finalMoney;
                    document.querySelector(".item-total").textContent = finalMoney;
                    document.getElementById("item-count").textContent = total.length;
                }
})();

 json loading

//get the notes JSON


note handlers, builders
var prices = new Map();

function getNoteInput() {
    //define note value
    var note_val = "";
    //define input field
    var $note_text = $(".note-input input");
    if ($note_text.val() !== "") {
        note_val = $note_text.val();
        return note_val;
    } else {
        return note_val;
    }
}

//check element visibility - expects single element relative to display:none
function checkVisible(element) {
    //check if element is hidden or not
    if (element.is(":hidden")) {
        return true;
    } else {
        return false;
    }
}

//check elements exists
function checkExist(element) {
    //check specified elements or not - return boolean
    if (element.length) {
        return true;
    } else {
        return false;
    }
}

function createButton(buttonClass, buttonText) {
    //build button
    var $button = $('<button class="' + buttonClass + '">' + buttonText + '</button>');
    //return built button
    return $button;
}

//manage input field and new note output
function createNote(data) {
    //object for wrapper html for note
    var $note = $('<p class="flex-item">');
    //create delete button
    var $delete_button = createButton("note-delete", "delete");
    //note input field to clear
    var $note_text = $(".note-input input");
    //conditional check for data
    if (data !== "") {
        //set content for note
        $note.html(data);
        //append delete button to each note
        $note.prepend($delete_button);
        //hide new note to setup fadeIn...
        $note.hide();
        //hide delete button until user selects note
        //append note text to note-output
        $(".note-output").append($note);
        //fadeIn hidden new note
        $note.fadeIn("slow");
        //clear note value
        $note_text.val("");
        //check visibility of note controls
        if (checkVisible($(".note-controls")) === true) {
            $(".note-controls").fadeIn();
        }
    }
}

//handle user event for `add` button click
$(".note-input button").on("click", function (e) {
    prices.set(straw.getAttribute("data-item-name"), straw.getAttribute("data-item-price"));
    //call note builder function
    console.log(prices.get(straw.getAttribute("data-item-name")));
    createNote(prices.get(straw.getAttribute("data-item-name")))
});

//handle user event for keyboard press
$(".note-input input").on("keypress", function (e) {
    //check code for keyboard press
    if (e.keyCode === 13) {
        var $note_data = getNoteInput();
        //call note builder function
        createNote($note_data);
    }
});

//handle deletion of single note - bind to existing element...
$(".note-output").on("click", "button.note-delete", function () {
    //delete parent note
    $(this).parent().remove();
    //set note selector
    var $note = $(".note-output p");
    //check for empty notes, and then remove note-controls
    if (checkExist($note) === false) {
        //hide note-controls
        $(".note-controls").hide();
    }
});

//handle deletion of all notes
$("#notes-delete").on("click", function (e) {
    //set note selector
    var $note = $(".note-output p");
    //check $note exists
    if (checkExist($note) === true) {
        //hide note-controls
        $(this).parent().hide();
        //remove all notes
        $note.remove();
    }
});

//handle click event per note
$(".note-output").on("click", "p", function () {
    //check if other delete buttons visible
    if (checkVisible($("button.note-delete")) === true) {
        //set all siblings to active=false to ensure checks are correct
        $(this).siblings().attr("active", "false");
        $("button.note-delete").hide();
    }
    //then handle click event for current note
    if (!$(this).attr("active") || $(this).attr("active") === "false") {
        $(this).attr("active", "true");
        $(this).children("button.note-delete").show();
    } else if ($(this).attr("active") === "true") {
        $(this).attr("active", "false");
        $(this).children("button.note-delete").hide();
    }
});



if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

var cart = {};
cart.products = [];

localStorage.setItem('cart', JSON.stringify(cart));

$('button').on('click', function(e) {
    var li = $(this).parent();

    var quantity = $(li).find('input[type=text]').val();
    

    var product = {};
    product.name = $(li).attr('data-name');
    product.price = $(li).attr('data-price');

    addToCart(product);
});

function addToCart(product) {
    // Retrieve the cart object from local storage
    if (localStorage && localStorage.getItem('cart')) {
        var cart = JSON.parse(localStorage.getItem('cart'));            

        cart.products.push(product);

        localStorage.setItem('cart', JSON.stringify(cart));
    } 
}









function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    //var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    localStorage.setItem("title", title);
    localStorage.setItem("price", price);
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        //var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

*/