<template>
  <div class="table-container">
    <h3 class="text-center mt-4 mb-4">SubCategories</h3>
    <div class="container-fluid">
      <div class="table-responsive">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th class="text-center">No.</th>
              <th role="button" @click.prevent="sortField('category')">
                Category
                <i class="fa-solid fa-sort"></i>
              </th>
              <th role="button" @click.prevent="sortField('name')">
                Sub Category
                <i class="fa-solid fa-sort"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(subCategory, index) in subCategories.data" :key="index">
              <td class="text-center">{{ start + index + 1 }}</td>
              <td>
                {{ subCategory.category }}
              </td>
              <td>
                {{ subCategory.name }}
              </td>
              <td class="text-center d-flex justify-content-end">
                <div style="width: 150px">
                  <button
                    @click.prevent="edit(subCategory.id)"
                    class="btn btn-warning"
                  >
                    Edit
                  </button>
                  <button
                    @click.prevent="deleteField(subCategory.id)"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-center">#</td>
              <td class="d-flex">
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  v-model="input.category_id"
                >
                  <option disabled value="">Choose Parent Category</option>
                  <option
                    v-for="(category, index) in selectCategories"
                    :key="index"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
                <button
                  class="btn btn-success"
                  style="margin-left: 5px"
                  v-show="isloadmore"
                  @click.prevent="loadMore"
                >
                  Load More
                </button>
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Category Name"
                  v-model="input.name"
                  type="text"
                />
              </td>
              <td class="d-flex justify-content-end">
                <button @click.prevent="add" class="btn btn-success btn-sm">
                  Add
                </button>
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
            @click.prevent="toggleModal"
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
              @click.prevent="editError = false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form>
            <div class="row">
              <div class="col-md-6">
                <label>Category</label>
                <div>
                  <select
                    class="form-select form-select-sm"
                    style="max-height: 50px; overflow: auto"
                    v-model="editInput.category_id"
                  >
                    <option
                      v-for="(category, index) in selectCategories"
                      :key="index"
                      :value="category.id"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                  <button
                    class="btn btn-success"
                    style="margin-top: 15px"
                    v-show="isloadmore"
                    @click.prevent="loadmore"
                  >
                    Load More
                  </button>
                </div>
              </div>
              <div class="col-md-6">
                <label>SubCategory</label>
                <input
                  class="form-control"
                  placeholder="SubCategory Name"
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
            style="margin-right: 7px"
            @click.prevent="toggleModal"
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
      v-if="subCategories.last_page"
      @paginate="paginate"
      :totalPage="subCategories.last_page"
    />
  </div>
</template>

<script>
import {
  SUB_CATEGORY_CONFIG,
} from "../Config/index.js";
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
        category_id: "",
      },
      inputError: false,
      editInput: {
        id: "",
        name: "",
        category_id: "",
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
      config: SUB_CATEGORY_CONFIG,
    });
  },
  methods: {
    add() {
      if (this.input.name == "" || this.input.category_id == "") {
        this.inputError = true;
        return true;
      }
      this.inputError = false;

      let obj = {
        form: {
          name: this.input.name,
          category_id: this.input.category_id,
        },
        config: SUB_CATEGORY_CONFIG,
      };
      this.addData(obj);
      for (var key in this.input) {
        this.input[key] = "";
      }
    },
    edit(id) {
      let obj = {
        id: id,
        config: SUB_CATEGORY_CONFIG,
      };
      this.showData(obj).then((response) => {
        this.editInput.id = response.id;
        this.editInput.name = response.name;
        this.editInput.category_id = response.category_id;
        this.editError = false;
        this.showModal = true;
      });
    },
    update() {
      if ((this.editInput.name == "") | (this.editInput.category_id == "")) {
        this.editError = true;
        return true;
      }
      this.editError = false;
      let obj = {
        form: {
          id: this.editInput.id,
          name: this.editInput.name,
          category_id: this.editInput.category_id,
        },
        config: SUB_CATEGORY_CONFIG,
      };
      this.updateData(obj);
      for (var key in this.editInput) {
        this.editInput[key] = "";
      }
      this.showModal = false;
    },
    deleteField(id) {
      if (confirm("Press OK for deletting ?")) {
        let obj = {
          id: id,
          config: SUB_CATEGORY_CONFIG,
        };
        this.deleteData(obj);
      }
    },
    sortField(field) {
      let increase = -1;
      if (!this.isSort) increase = 1;
      this.subCategories.data.sort((a, b) => {
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
    ...mapActions(["addData", "showData", "updateData", "deleteData"]),
    paginate(pageNum) {
      this.start = SUB_CATEGORY_CONFIG.perPage * (pageNum - 1);
      this.$store.dispatch("getData", {
        page: pageNum,
        config: SUB_CATEGORY_CONFIG,
      });
    },
  },
  computed: {
    ...mapState([
      "subCategories",
      "selectCategories",
      "isloadmore"
    ]),
  },
};
</script>
<style lang="scss" scoped>
table {
  min-width: 1000px;
}
button {
  margin: 0;
}
select {
  max-width: 200px;
  min-width: 200px;
  overflow: hidden;
}
td {
  border: none;
}
tr {
  border-bottom: 1px solid #ccc;
}
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