class Header {

    handlerOpenShoppingPage(){
shoppingPage.render();
    }


render(count){
    const html = `
    <div class="heder-container"  >
    <div class="heder-counter" onclick="headerPage.handlerOpenShoppingPage();"  >
    🔥${count}
    </div>
    </div>
    `;

ROOT_HEADER.innerHTML= html;


}
}
const headerPage = new Header();

// const productsStore = localStorageUtill.getProducts()
//
// headerPage.render(productsStore.length);