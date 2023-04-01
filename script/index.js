const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            console.log(entry);
        } else{
            entry.target.classList.remove('show')
        }
    })
})
const projectDescription = document.querySelectorAll('.proj_des')
projectDescription.forEach((el) => observer.observe(el))
console.log('im linked');
console.log(projectDescription);