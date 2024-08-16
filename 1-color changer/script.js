const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button){
    console.log(button)
    button.addEventListener('click', function (c) {
        console.log(c);
        console.log(c.target);
        switch (c.target.id) {
            case 'grey' :
                body.style.backgroundColor = c.target.id
                break;
            case 'yellow' :
                body.style.backgroundColor = c.target.id
                break;
            case 'white' :
                body.style.backgroundColor = c.target.id
                break;
            case 'purple' :
                body.style.backgroundColor = c.target.id
                
                break;
            

            default:
                break;
        }
    } )
})