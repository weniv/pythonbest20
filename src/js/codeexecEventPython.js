function downloadNotebook() {
    const notebook = {
        "cells": [],
        "metadata": {
            "kernelspec": {
                "display_name": "Python 3",
                "language": "python",
                "name": "python3"
            },
            "language_info": {
                "codemirror_mode": {
                    "name": "ipython",
                    "version": 3
                },
                "file_extension": ".py",
                "mimetype": "text/x-python",
                "name": "python",
                "nbconvert_exporter": "python",
                "pygments_lexer": "ipython3",
                "version": "3.7.9"
            }
        },
        "nbformat": 4,
        "nbformat_minor": 4
};

const cells = document.querySelectorAll('.py-repl-editor')
for (let i = 0; i < cells.length; i++) {
    cells
    notebook.cells.push({
        "cell_type": "code",
        "execution_count": null,
        "metadata": {},
        "outputs": [],
        "source": cells[i].childNodes[0].shadowRoot.querySelector('.cm-content').innerText
    });
}
const notebookJson = JSON.stringify(notebook, null, 2);
const blob = new Blob([notebookJson], { type: 'application/json' });
const url = URL.createObjectURL(blob);

const a = document.createElement('a');
a.download = 'notebook.ipynb';
a.href = url;
a.click();
}