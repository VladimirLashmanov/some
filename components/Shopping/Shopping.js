class Shopping {

    hendleClear(){
        ROOT_SHOPPING.innerHTML='';
    }



    render() {

        const productsStor = localStorageUtill.getProducts()
        let htmlCatalog = '';
        let sumCatalig = 0;

        CATALOG.forEach(({id, name, price}) => {

            if (productsStor.indexOf(id) !== -1) {
                htmlCatalog += `
                <tr>
                <td class="shopping-element__name" >⚡ ${name}</td>
                <td class="shopping-element__price"  >${price.toLocaleString()}USD</td>
                
                </tr>
                `;
                sumCatalig+=price;
            }


        });

        const html = `

        
        <div class="shopping-container"   >
        <div class="shopping__close" onclick="shoppingPage.hendleClear()" ></div>
        <table>
        ${htmlCatalog}
        
          <tr>
                <td class="shopping-element__name" >💥 Сумма</td>
                <td class="shopping-element__price"  >${sumCatalig.toLocaleString()}USD</td>
                
          </tr>
</table>
        
        </div>
        
        
        `
        ;
        ROOT_SHOPPING.innerHTML = html;

    }
}

const shoppingPage = new Shopping();
