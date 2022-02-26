<template>
  <div class="table-container">
    <h3 class="text-center mt-4 mb-4">Products</h3>
    <div class="container-fluid">
      <div class="table-responsive">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th class="text-center small" style="min-width: initial">No.</th>
              <th
                role="button"
                class="small"
                @click.prevent="sortField('category')"
              >
                Category
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent="sortField('subCategory')"
              >
                Sub Category
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent="sortField('name')"
              >
                Name
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent="sortNumber('price')"
              >
                Price (vnd)
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent="sortNumber('original_price')"
              >
                Ori Price(vnd)
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent="sortNumber('discount')"
              >
                Discount (%)
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent="sortField('stock_info')"
              >
                Stock
                <i class="fa-solid fa-sort"></i>
              </th>
              <th role="button" class="small">Description</th>
              <th
                role="button"
                class="small"
                @click.prevent="sortField('unit')"
              >
                Unit
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent="sortNumber('quantity')"
              >
                Quantity
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent="sortField('status')"
              >
                Status
                <i class="fa-solid fa-sort"></i>
              </th>
              <th role="button" class="small">Image</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products.data" :key="index">
              <td class="text-center">{{ start + index + 1 }}</td>
              <td>
                {{ product.category }}
              </td>
              <td>
                {{ product.subCategory }}
              </td>
              <td>
                {{ product.name }}
              </td>
              <td>
                {{ product.price }}
              </td>
              <td>
                {{ product.original_price }}
              </td>
              <td>
                {{ product.discount }}
              </td>
              <td>
                {{ product.stock_info }}
              </td>
              <td>
                <div class="description">
                  {{ product.description }}
                  <div id="hover-des">
                    {{ product.description }}
                  </div>
                </div>
              </td>
              <td>
                {{ product.unit }}
              </td>
              <td>
                {{ product.quantity }}
              </td>
              <td>
                {{ product.status }}
              </td>
              <td>
                <div class="imageWrapper">
                  <img class="image" :src="'/storage/' + product.image" />
                  <img
                    class="hover-image"
                    :src="'/storage/' + product.image"
                    alt="image"
                  />
                </div>
              </td>
              <td class="text-center d-flex justify-content-end">
                <div style="width: 150px">
                  <button
                    @click.prevent.prevent="edit(product.id)"
                    class="btn btn-warning"
                  >
                    Edit
                  </button>
                  <button
                    @click.prevent="deleteField(product.id)"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-center">#</td>
              <td style="min-width: 250px; width: 250px" class="d-flex">
                <select
                  class="form-select-sm"
                  style="max-width: 130px; margin: 0"
                  v-model="input.category_id"
                  @change.prevent="renderSubCategories(input.category_id)"
                >
                  <option disabled value="">Choose Category</option>
                  <option
                    v-for="(category, index) in selectCategories"
                    :key="index"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </td>
              <td>
                <select
                  class="form-select form-select-sm"
                  v-model="input.subCategory_id"
                >
                  <option disabled value="">Choose SubCategory</option>
                  <option
                    v-for="(sub, index) in subCategories"
                    :key="index"
                    :value="sub.id"
                  >
                    {{ sub.name }}
                  </option>
                  <!-- need to render -->
                </select>
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Product Name"
                  v-model="input.name"
                  type="text"
                />
              </td>
              <td class="invisible">
                <input class="form-control form-control-sm" />
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Original Price"
                  v-model="input.originalPrice"
                  type="number"
                />
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Discount"
                  v-model="input.discount"
                  type="number"
                />
              </td>
              <td class="invisible">
                <input class="form-control form-control-sm" />
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Description"
                  v-model="input.description"
                  type="text"
                />
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Unit"
                  v-model="input.unit"
                  type="text"
                />
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Quantity"
                  v-model="input.quantity"
                  id="quantity"
                  type="number"
                />
              </td>
              <td>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  v-model="input.status"
                >
                  <option disabled value="">Choose status</option>
                  <option value="show">Show</option>
                  <option value="hide">Hide</option>
                </select>
              </td>
              <td>
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  id="product_image"
                  ref="add"
                  @change.prevent="inputFileChange('add')"
                />
                <label for="product_image" class="image-button small d-flex"
                  ><i class="far fa-image h2" role="button"></i>
                  <div class="imageWrapper" v-if="input.image.length > 0">
                    <img class="image" :src="input.image" />
                  </div>
                </label>
              </td>
              <td class="d-flex justify-content-end">
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
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  v-model="editInput.category_id"
                  @change.prevent="renderSubCategories(editInput.category_id)"
                >
                  <option
                    v-for="(category, index) in selectCategories"
                    :key="index"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>

              <div class="col-md-6">
                <label>SubCategory</label>
                <select
                  class="form-select form-select-sm"
                  v-model="editInput.subCategory_id"
                >
                  <option disabled value="" selected>change subCategory</option>
                  <option
                    v-for="(sub, index) in subCategories"
                    :key="index"
                    :value="sub.id"
                  >
                    {{ sub.name }}
                  </option>
                </select>
              </div>
              <div class="col-md-6">
                <label>Name</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="editInput.name"
                />
              </div>
              <div class="col-md-6">
                <label>Original Price</label>
                <input
                  class="form-control"
                  type="number"
                  v-model="editInput.originalPrice"
                />
              </div>
              <div class="col-md-6">
                <label>Discount</label>
                <input
                  class="form-control"
                  type="number"
                  v-model="editInput.discount"
                />
              </div>
              <div class="col-md-6">
                <label>Description</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="editInput.description"
                />
              </div>
              <div class="col-md-6">
                <label>Unit</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="editInput.unit"
                />
              </div>
              <div class="col-md-6">
                <label>Quantity</label>
                <input
                  class="form-control"
                  type="number"
                  v-model="editInput.quantity"
                />
              </div>
              <div class="col-md-6">
                <label>Status</label>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  v-model="editInput.status"
                >
                  <option value="show">Show</option>
                  <option value="hide">Hide</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="last_name">Image</label>
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  ref="edit"
                  id="edit_product_image"
                  @change.prevent="inputFileChange('edit')"
                />
                <label
                  for="edit_product_image"
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
      v-if="products.last_page"
      @paginate="paginate"
      :totalPage="products.last_page"
    />
  </div>
</template>

<script>
import { PRODUCT_CONFIG, CATEGORY_CONFIG } from "../Config/index.js";
import Pagination from "../Components/Pagination.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      subCategories: [],
      input: {
        category_id: "",
        subCategory_id: "",
        name: "",
        originalPrice: "",
        discount: "",
        description: "",
        unit: "",
        quantity: "",
        status: "",
        image: "",
      },
      inputError: false,
      editInput: {
        id: "",
        category_id: "",
        subCategory_id: "",
        name: "",
        originalPrice: "",
        discount: "",
        description: "",
        unit: "",
        quantity: "",
        status: "",
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
      config: PRODUCT_CONFIG,
    });
  },
  methods: {
    //function to add data to table
    add() {
      if (
        this.input.category_id == "" ||
        this.input.subCategory_id == "" ||
        this.input.name == "" ||
        this.input.originalPrice == "" ||
        this.input.discount == "" ||
        this.input.description == "" ||
        this.input.unit == "" ||
        this.input.quantity == "" ||
        this.input.status == "" ||
        this.$refs.add.files.length == 0
      ) {
        this.inputError = true;
        return true;
      }
      this.inputError = false;
      let image = this.$refs.add;
      let obj = {
        form: {
          image: image.files[0],
          sub_category_id: this.input.subCategory_id,
          name: this.input.name,
          original_price: this.input.originalPrice,
          discount: this.input.discount,
          description: this.input.description,
          unit: this.input.unit,
          quantity: this.input.quantity,
          status: this.input.status,
        },
        config: PRODUCT_CONFIG,
      };
      this.addData(obj);
      for (var key in this.input) {
        this.input[key] = "";
      }
    },
    edit(id) {
      let obj = {
        id: id,
        config: PRODUCT_CONFIG,
      };
      this.showData(obj).then((response) => {
        this.editInput.id = response.id;
        this.editInput.category_id = response.category_id;
        this.editInput.image = "/storage/" + response.image;
        this.editInput.name = response.name;
        this.editInput.originalPrice = response.original_price;
        this.editInput.discount = response.discount;
        this.editInput.description = response.description;
        this.editInput.unit = response.unit;
        this.editInput.quantity = response.quantity;
        this.editInput.status = response.status;
        this.editError = false;
        this.showModal = true;
        this.renderSubCategories(response.category_id);
        this.editInput.subCategory_id = response.sub_category_id;
      });
    },
    update() {
      if (
        this.editInput.subCategory_id == "" ||
        this.editInput.name == "" ||
        this.editInput.originalPrice == "" ||
        this.editInput.stock == "" ||
        this.editInput.description == "" ||
        this.editInput.unit == "" ||
        this.editInput.quantity == "" ||
        this.editInput.status == ""
      ) {
        this.editError = true;
        return true;
      }
      this.editError = false;
      let imageEdit = this.$refs.edit;
      let obj = {
        form: {
          id: this.editInput.id,
          image: imageEdit,
          name: this.editInput.name,
          original_price: this.editInput.originalPrice,
          discount: this.editInput.discount,
          description: this.editInput.description,
          unit: this.editInput.unit,
          quantity: this.editInput.quantity,
          status: this.editInput.status,
          sub_category_id: this.editInput.subCategory_id,
        },
        config: PRODUCT_CONFIG,
      };
      this.updateData(obj);
      for (var key in this.editInput) {
        this.editInput[key] = "";
      }
      this.showModal = false;
    },
    deleteField: function (id) {
      if (confirm("Press OK to complete ?")) {
        let obj = {
          id: id,
          config: PRODUCT_CONFIG,
        };
        this.deleteData(obj);
      }
    },
    sortField(field) {
      let increase = -1;
      if (!this.isSort) increase = 1;
      this.products.data.sort((a, b) => {
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
    sortNumber(field) {
      let increase = -1;
      if (!this.isSort) increase = 1;
      this.products.data.sort((a, b) => {
        return increase * (a[field] - b[field]);
      });
      this.isSort = !this.isSort;
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
      this.start = PRODUCT_CONFIG.perPage * (pageNum - 1);
      this.$store.dispatch("getData", {
        page: pageNum,
        config: PRODUCT_CONFIG,
      });
    },
    renderSubCategories(id) {
      this.input.subCategory_id = "";
      this.editInput.subCategory_id = "";
      let obj = {
        id: id,
        config: CATEGORY_CONFIG,
      };
      this.showData(obj).then((response) => {
        this.subCategories = response.subCategory;
      });
    },
  },
  computed: {
    ...mapState(["products", "selectCategories"]),
  },
};
</script>
<style lang="scss" scoped>
.table-container {
  tr {
    border-bottom: 1px solid #ccc;
    th {
      min-width: 150px;
    }
    td {
      position: relative;
      height: 100%;
      border: none;
      .description:hover > #hover-des {
        display: block;
      }
      #hover-des {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 150px;
        height: 100px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 0px 12px #ccc;
        padding: 1rem;
        z-index: 100;
        overflow: auto;
        font-size: 0.85rem;
        white-space: initial;
      }
    }
  }
  .table {
    min-width: 1400px;
    overflow: auto;
    .description {
      white-space: nowrap;
      width: 100px;
      max-width: 100px;
      min-width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .modal {
    display: block !important;
    .modal-content {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 500px;
    }
  }
}
</style>