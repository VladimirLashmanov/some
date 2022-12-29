class Error{

    render(){
        const html=`
        <div class="error-container"  >
        <div class="error-massage"  >
       <h3>DISCONECT</h3> 
       <p> ples wait</p>
         </div>
         </div>
        
        `;
ROOT_ERROR.innerHTML=html;
    }

}

const errorPage = new Error();