const changeTree = document.querySelectorAll('.select-tree-col')
const treeCenter = document.querySelector('.tree-big-center')

changeTree.forEach(element => {
    element.addEventListener('click', (element) => {
        const numTree = element.currentTarget.dataset.tree

        treeCenter.src = `./assets/tree/${numTree}.png`;
    })
});



// export default changeTree