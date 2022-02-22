<template>
  <div class="table-container">
    <h3 class="text-center mt-4 mb-4">Categories</h3>
    <div class="container-fluid">
      <div class="table-responsive">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th class="text-center">No.</th>
              <th role="button" @click="sortField('name')">
                Category Name
                <i class="fa-solid fa-sort"></i>
              </th>
              <th role="button">Avatar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(category, index) in categories.data" :key="index">
              <td class="text-center">{{ start + index + 1 }}</td>
              <td>
                {{ category.name }}
              </td>
              <td>
                <div class="imageWrapper">
                  <img class="image" :src="'/storage/' + category.image" />
                  <img
                    class="hover-image"
                    :src="'/storage/' + category.image"
                    alt="image"
                  />
                </div>
              </td>
              <td class="text-center d-flex justify-content-end">
                <div style="width: 150px">
                  <button
                    href="#"
                    @click.prevent="edit(category.id)"
                    class="btn btn-warning"
                  >
                    Edit
                  </button>
                  <button
                    href="#"
                    @click.prevent="deleteField(category.id)"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-center">#</td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Category Name"
                  v-model="input.name"
                  type="text"
                />
              </td>
              <td>
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  ref="add"
                  id="category_image"
                  @change.prevent="inputFileChange('add')"
                />
                <label for="category_image" class="image-button small d-flex"
                  ><i class="far fa-image h2" role="button"></i>
                  <div class="imageWrapper" v-if="input.image.length > 0">
                    <img class="image" :src="input.image" />
                  </div>
                </label>
              </td>
              <td class="text-center">
                <button
                  @click.prevent="add"
                  class="btn btn-success btn-sm"
                  style="margin: 0"
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
          @click.prevent="inputError = false"
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
                <label for="category_name">Category Name</label>
                <input
                  class="form-control"
                  placeholder="Category Name"
                  id="category_name"
                  type="text"
                  v-model="editInput.name"
                />
              </div>
              <div class="col-md-6">
                <label for="last_name">Image</label>
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  ref="edit"
                  id="edit_category_image"
                  @change.prevent="inputFileChange('edit')"
                />
                <label
                  for="edit_category_image"
                  class="image-button small d-flex"
                >
                  <div class="imageWrapper">
                    <img class="image" :src="editInput.image" />
                  </div>
                </label>
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
          <button type="button" class="btn btn-primary" @click.prevent="update">
            Save changes
          </button>
        </div>
      </div>
    </div>
    <Pagination
      v-if="categories.last_page"
      @paginate="paginate"
      :totalPage="categories.last_page"
    />
  </div>
</template>

<script>
import { CATEGORY_CONFIG } from "../Config/index.js";
import Pagination from "../Components/Pagination.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      input: {
        name: "",
        image: "",
      },
      inputError: false,
      editInput: {
        id: "",
        name: "",
        image: "",
      },
      editError: false,
      showModal: false,
      isSort: false,
      start: 0,
    };
  },
  created() {
    this.$store.dispatch("getData", {
      page: 1,
      config: CATEGORY_CONFIG,
    });
  },
  methods: {
    //function to add data to table
    add() {
      // checkerror
      if (this.input.name == "" || this.$refs.add.files.length == 0) {
        this.inputError = true;
        return true;
      }
      this.inputError = false;
      // set data
      let image = this.$refs.add;
      let obj = {
        form: {
          image: image.files[0],
          name: this.input.name,
        },
        config: CATEGORY_CONFIG,
      };
      // call api
      this.addData(obj).then((response) => {
        // load option in select categories
        this.$store.dispatch("getSelectCategories");
      });
      //reset data in component
      for (var key in this.input) {
        this.input[key] = "";
      }
    },
    edit(id) {
      let obj = {
        id: id,
        config: CATEGORY_CONFIG,
      };
      this.showData(obj).then((response) => {
        this.editInput.id = response.id;
        this.editInput.name = response.name;
        this.editInput.image = "/storage/" + response.image;
        this.editError = false;
        this.showModal = true;
      });
    },
    update() {
      if (this.editInput.name === "") {
        this.editError = true;
        return true;
      }
      let imageEdit = this.$refs.edit;
      let obj = {
        form: {
          id: this.editInput.id,
          image: imageEdit,
          name: this.editInput.name,
        },
        config: CATEGORY_CONFIG,
      };

      this.updateData(obj);
      for (var key in this.editInput) {
        this.editInput[key] = "";
      }
      this.showModal = false;
    },
    sortField(field) {
      let increase = -1;
      if (!this.isSort) increase = 1;
      this.categories.data.sort((a, b) => {
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
    deleteField: function (id) {
      if (confirm("Xóa danh mục")) {
        let obj = {
          id: id,
          config: CATEGORY_CONFIG,
        };
        this.deleteData(obj);
      }
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    inputFileChange(ref) {
      let input = this.$refs[ref];
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          if (ref == "add") {
            this.input.image = e.target.result;
          }
          if (ref == "edit") {
            this.editInput.image = e.target.result;
          }
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    ...mapActions(["addData", "showData", "updateData", "deleteData"]),
    paginate(pageNum) {
      this.start = CATEGORY_CONFIG.perPage * (pageNum - 1);
      this.$store.dispatch("getData", {
        page: pageNum,
        config: CATEGORY_CONFIG,
      });
    },
  },
  computed: {
    ...mapState(["categories"]),
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