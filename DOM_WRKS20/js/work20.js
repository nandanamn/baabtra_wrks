document.addEventListener('DOMContentLoaded', function() {
    const sortableList = document.getElementById('sortableList');
    let draggingItem = null;

    // Function to handle the drag start event
    function handleDragStart(e) {
        draggingItem = e.target;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', e.target.innerText);
        e.target.classList.add('dragging');
    }

    // Function to handle the drag over event
    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    // Function to handle the drop event
    function handleDrop(e) {
        e.preventDefault();
        const dropTarget = e.target;

        // Don't do anything if the drop target is the same as the dragged item
        if (draggingItem === dropTarget) {
            return;
        }

        // Swap the positions of the dragged item and the drop target
        const items = Array.from(sortableList.children);
        const indexA = items.indexOf(draggingItem);
        const indexB = items.indexOf(dropTarget);

        sortableList.insertBefore(draggingItem, dropTarget);

        // Reset the dragged item's class
        draggingItem.classList.remove('dragging');
        draggingItem = null;
    }

    // Function to handle the drag end event
    function handleDragEnd() {
        draggingItem.classList.remove('dragging');
        draggingItem = null;
    }

    // Add drag and drop event listeners to each list item
    const listItems = document.querySelectorAll('#sortableList li');
    listItems.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('drop', handleDrop);
        item.addEventListener('dragend', handleDragEnd);
    });
});
