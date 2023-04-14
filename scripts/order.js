/*globals $ */
/*    
 *    WC4 Team Project
 *    Author: Emma Middleton, Joshua Knutson, Mobin Syed, Johan Elder
 *    Date: March 2, 2022
 */
const cart = {
    items: [],
    total: 0
};

let quoteCard = $("#cart");

let foodbuttons = $(".foodbutton");
for(let i = 0; i < foodbuttons.length; i++){
    let curButton = $(foodbuttons[i]);
    curButton.click(function(){
        let menuItem = curButton.parent().parent().parent();
        let foodName = menuItem.attr("data-sf-name");
        let foodPrice = parseInt(menuItem.attr("data-sf-price"));

        cart.items.push({name: foodName, price: foodPrice});
        updateCart();
    });
}

function updateCart() {
    if (cart.items.length > 0) {
        quoteCard.show();
    } else {
        quoteCard.hide();
    }
    let table = "";
    let total = 0;
    for (let i = 0; i < cart.items.length; i++) {
        let item = cart.items[i];
        table += "<tr><td>" + item.name + "</td><td><span class='cartprice'>$" + item.price + "</span></td></tr>";
        total += item.price;
    }
    cart.total = total;

    table += "<tr id='total'><td>TOTAL</td><td><span>$" + cart.total + "</span></td></tr>";
    let pageCart = $("#pagecart");
    pageCart.html(table);
}

