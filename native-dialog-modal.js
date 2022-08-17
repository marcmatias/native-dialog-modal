class NativeDialogModal {

  constructor(options) {
    this.options = {
      ...options
    }
  
    this.init();
  }

  init() {
    const buttons = document.querySelectorAll(".openModal");

    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const modal = document.querySelector(
          `#${event.target.dataset.modal}`
        );
        modal.showModal();
      });
    });

    const closeButtons = document.querySelectorAll(".closeModal");

    closeButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const modal = event.target.closest("dialog");
        modal.close();
      });
    });
  }
}

// Auto init class
new NativeDialogModal();