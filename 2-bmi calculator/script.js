const form = document.querySelector('form')
// this use case will give you empty 
// height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();
    height = parseInt(document.querySelector('#height').value)
    weight = parseInt(document.querySelector('#weight').value)
    results = (document.querySelector('#results').value)

    if (height ===  '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a vaild height";
    }
})