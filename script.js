const panels = document.querySelectorAll('.panel')


panels.forEach((panel) => {
    // add a addEventListener for each panels
    panel.addEventListener('click', () => {
        // console.log(123)
        removeActiveClasses()
        panel.classList.add('active')
    })
    // console.log(panel)
})

function removeActiveClasses() {
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}
