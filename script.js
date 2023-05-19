const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    //console.log(panel)
    panel.addEventListener('click', () => {
        // console.log(123)
        removeActiveClasses()   //remove 'active' from all classes
        panel.classList.add('active')   //add active to the class that is clicked
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}