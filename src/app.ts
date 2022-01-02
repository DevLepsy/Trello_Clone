const itemsContainer = document.querySelectorAll('.items-container') as NodeListOf<HTMLDivElement>;

function addContainerListeners(currentContainer: HTMLDivElement) {
    const currentContainerDeleteBtn = currentContainer.querySelector('.delete-container-btn') as HTMLButtonElement;

    deleteBtnListeners(currentContainerDeleteBtn)
}

itemsContainer.forEach((container: HTMLDivElement) => {
    addContainerListeners(container);
})

function deleteBtnListeners(btn: HTMLButtonElement) {
    btn.addEventListener('click', handleContainerDelete)
}

function handleContainerDelete(e: MouseEvent) {
    const btn = e.target as HTMLButtonElement;
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')] as HTMLButtonElement[];
    const containers = [...document.querySelectorAll('.items-container')] as HTMLDivElement[];
    containers[btnsArray.indexOf(btn)].remove()
}