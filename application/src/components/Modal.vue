<template>
  <div class="modal" id="modal">
    <div class="modal__content">
      <div class="modal__header">
        <h1 class="modal__title">Import</h1>
        <span class="modal__close" @click="closeModal()">&times;</span>
      </div>
      <div class="modal__body">
        <div class="custom-file">
          <form class="form-inline">
            <label class="sr-only" for="inlineFormInputName2"
              >Document Title</label
            >
            <input
              type="text"
              class="form-control mb-2 mr-sm-2"
              id="inlineFormInputName2"
              placeholder="Document 1"
            />
            <input type="file" class="custom-file-input" id="customFile" />
            <input
              class="btn btn-primary-outline"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    openModal() {
      const modal = document.getElementById("modal");
      modal.classList.add("show");
    },
    closeModal() {
      const modal = document.getElementById("modal");
      modal.classList.remove("show");
    }
  }
};
</script>

<style scoped lang="scss">
#mainBody {
  font-family: "Roboto", sans-serif;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.modal {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
}

.modal.show {
  visibility: visible;
  opacity: 1;
}

.modal.show .modal__content {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
}

.modal__content {
  min-width: 370px;
  width: 600px;
  background: #fff;
  margin: auto;
  visibility: hidden;
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 0.4s ease-in-out visibility 0.4s ease-in-out,
    transform 0.4s ease-in-out;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid #eee;
}

.modal__title {
  font-weight: normal;
  font-size: 25px;
}

.modal__close {
  padding: 5px;
  cursor: pointer;
  font-size: 25px;
}

.modal__body {
  padding: 10px;
  text-align: justify;
}
</style>
