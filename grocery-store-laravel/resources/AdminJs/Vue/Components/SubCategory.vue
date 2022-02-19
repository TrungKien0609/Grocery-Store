<template>
  <div class="table-container">
    <h3 class="text-center mt-4 mb-4">SubCategories</h3>
    <div class="container-fluid">
      <div class="table-responsive">
        <table class="table" v-show="subCategories.length">
          <thead class="thead-dark">
            <tr>
              <th class="text-center">No.</th>
              <th role="button" @click="sortField('parent')">
                Category
                <i class="fa-solid fa-sort"></i>
              </th>
              <th role="button" @click="sortField('name')">
                Sub Category
                <i class="fa-solid fa-sort"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(category, index) in subCategories" :key="index">
              <td class="text-center">{{ index + 1 }}</td>
              <td>
                {{ category.parent }}
              </td>
              <td>
                {{ category.name }}
              </td>
              <td class="text-center d-flex justify-content-end">
                <div style="width: 150px">
                  <a href="#" @click="edit(index)" class="btn btn-warning"
                    >Edit</a
                  >
                  <a href="#" @click="deleteField(index)" class="btn btn-danger"
                    >Delete</a
                  >
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-center">#</td>
              <td>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  v-model="input.parent"
                >
                  <option disabled value="">Choose Parent Category</option>
                  <option value="Fish & Meat">Fish & Meat</option>
                  <option value="Drinks">Drinks</option>
                  <option value="Breakfast">Breakfast</option>
                </select>
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Category Name"
                  ref="name"
                  v-model="input.name"
                  id="name"
                  type="text"
                />
              </td>
              <td class="d-flex justify-content-end">
                <a href="#!" @click="add" class="btn btn-success btn-sm">Add</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- errro -->
      <div
        v-if="inputError"
        class="
          alert alert-danger
          d-flex
          justify-content-between
          align-items-center
        "
        role="alert"
      >
        <p>Invalid form input.</p>
        <button
          type="button"
          class="close btn btn-danger"
          @click="inputError = false"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit</h5>
          <button
            type="button"
            class="close btn btn-danger"
            data-dismiss="modal"
            aria-label="Close"
            @click="toggleModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div
            v-if="editError"
            class="alert alert-danger d-flex justify-content-between"
            role="alert"
          >
            <p>Invalid form input.</p>
            <button
              type="button"
              class="close btn btn-danger"
              @click="editError = false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form>
            <div class="row">
              <div class="col-md-6">
                <label for="parent">Parent</label>
                <input
                  class="form-control"
                  id="parent"
                  type="text"
                  :value="editInput.parent"
                  disabled
                  readonly
                />
              </div>
              <div class="col-md-6">
                <label for="last_name">Name</label>
                <input
                  class="form-control"
                  placeholder="Category Name"
                  id="category_name"
                  type="text"
                  v-model="editInput.name"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="toggleModal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="update">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subCategories: [
        {
          parent: "Fish & Meat",
          name: "Fish",
        },
        {
          parent: "Fish & Meat",
          name: "Meat",
        },
        {
          parent: "Breakfast",
          name: "Bread",
        },
        {
          parent: "Breakfast",
          name: "Coffee",
        },
      ],
      input: {
        name: "",
        parent: "",
      },
      inputError: false,
      editIndex: 0,
      editInput: {
        name: "",
        parent: "",
      },
      editError: false,
      showModal: false,
      isSort: false,
    };
  },
  methods: {
    //function to add data to table
    add: function () {
      if (this.input.name == "" || this.input.parent == "") {
        this.inputError = true;
        return true;
      }
      this.inputError = false;
      this.subCategories.unshift({
        name: this.input.name,
        parent: this.input.parent,
      });
      for (var key in this.input) {
        this.input[key] = "";
      }
      this.$refs.parent.focus();
    },
    edit: function (index) {
      this.editInput.name = this.subCategories[index].name;
      this.editInput.parent = this.subCategories[index].parent;
      this.editIndex = index;
      this.editError = false;
      this.showModal = true;
    },
    update: function () {
      if (this.editInput.name == "") {
        this.editError = true;
        return true;
      }
      this.editError = false;
      this.subCategories.splice(this.editIndex, 1);
      this.subCategories.unshift({
        name: this.editInput.name,
        parent: this.editInput.parent,
      });
      for (var key in this.editInput) {
        this.editInput[key] = "";
      }
      this.showModal = false;
    },
    deleteField: function (index) {
      this.subCategories.splice(index, 1);
    },
    sortField(field) {
      let increase = -1;
      if (!this.isSort) increase = 1;
      this.subCategories.sort((a, b) => {
        var nameA = a[field].toUpperCase(); // ignore upper and lowercase
        var nameB = b[field].toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -increase;
        }
        if (nameA < nameB) {
          return increase;
        }
        // names must be equal
        return 0;
      });
      this.isSort = !this.isSort;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>
<style lang="scss" scoped>
.table-container {
  .modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
  }
}
.modal {
  display: block !important;
}
</style>