window.onload = function(){
    divs = this.document.querySelectorAll(`.item input`);

    let lastChecked = "none"

    function checkBoxes(event){
        if (event.shiftKey && event.target.checked && (lastChecked != "none" && lastChecked != this)){
            let between = false;
            divs.forEach(node=>{
                if (node == this || node == lastChecked ){                   
                    between = !between
                }
                if (between){
                    node.checked = true;
                }    
            })
        }
        if (event.target.checked) {
            lastChecked = this;
        }
    }

    divs.forEach(element => {
        element.addEventListener('click', checkBoxes)
    }); 
        
}