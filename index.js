function render(){
    const productsStore = localStorageUtill.getProducts()

    headerPage.render(productsStore.length);
    productsPage.render();
}
spinnerPage.render()

let CATALOG=[];


fetch('server/catalog.json')
.then(res=>res.json() )
.then(body =>{

   CATALOG=body;

setTimeout(() => {
    spinnerPage.hendelClear();

    render();

},2000)


})
.catch(error =>{
    spinnerPage.hendelClear();
    errorPage.render();
});