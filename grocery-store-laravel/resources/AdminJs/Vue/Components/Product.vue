<template>
  <div class="table-container">
    <h3 class="text-center mt-4 mb-4">Products</h3>
    <div class="container-fluid">
      <div class="table-responsive">
        <table class="table" v-show="products.length">
          <thead class="thead-dark">
            <tr>
              <th class="text-center small" style="min-width: initial">No.</th>
              <th
                role="button"
                class="small"
                @click.prevent.prevent="sortField('category')"
              >
                Category
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent.prevent="sortField('subCategory')"
              >
                Sub Category
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent.prevent="sortField('name')"
              >
                Product Name
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent.prevent="sortNumber('price')"
              >
                Price (vnd)
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent.prevent="sortNumber('originalPrice')"
              >
                Ori Price(vnd)
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent.prevent="sortNumber('discount')"
              >
                Discount (%)
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent.prevent="sortField('stock')"
              >
                Stock
                <i class="fa-solid fa-sort"></i>
              </th>
              <th role="button" class="small">Description</th>
              <th
                role="button"
                class="small"
                @click.prevent.prevent="sortField('unit')"
              >
                Unit
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent.prevent="sortNumber('quantity')"
              >
                Quantity
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent.prevent="sortField('status')"
              >
                Status
                <i class="fa-solid fa-sort"></i>
              </th>
              <th
                role="button"
                class="small"
                @click.prevent.prevent="sortField('name')"
              >
                Image
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="index">
              <td class="text-center">{{ index + 1 }}</td>
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
                {{ product.originalPrice }}
              </td>
              <td>
                {{ product.discount }}
              </td>
              <td>
                {{ product.stock }}
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
                  <img class="image" :src="product.image" />
                  <img class="hover-image" :src="product.image" alt="image" />
                </div>
              </td>
              <td class="text-center d-flex justify-content-end">
                <div style="width: 150px">
                  <a
                    href="#"
                    @click.prevent.prevent="edit(index)"
                    class="btn btn-warning"
                    >Edit</a
                  >
                  <a
                    href="#"
                    @click.prevent="deleteField(index)"
                    class="btn btn-danger"
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
                  v-model="input.category"
                  ref="category"
                >
                  <option disabled value="">Choose Category</option>
                  <option value="Fish & Meat">Fish & Meat</option>
                  <option value="Drinks">Drinks</option>
                  <option value="Breakfast">Breakfast</option>
                </select>
              </td>
              <td>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  v-model="input.subCategory"
                >
                  <option disabled value="">Choose SubCategory</option>
                  <option value="Fish ">Fish</option>
                  <option value="Meat">Meat</option>
                  <option value="Beef">Beef</option>
                </select>
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Product Name"
                  v-model="input.name"
                  id="product-name"
                  type="text"
                />
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="price"
                  v-model="input.price"
                  id="price"
                  type="number"
                />
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Original Price"
                  v-model="input.originalPrice"
                  id="ori-price"
                  type="text"
                />
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Discount"
                  v-model="input.discount"
                  id="discount"
                  type="number"
                />
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Stock Info"
                  v-model="input.stock"
                  id="stock"
                  type="text"
                />
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Description"
                  v-model="input.description"
                  id="description"
                  type="text"
                />
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Unit"
                  v-model="input.unit"
                  id="unit"
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
                  id="imageInput"
                  ref="inputImage"
                  @change="inputFileChange"
                />
                <label for="imageInput" class="image-button small d-flex"
                  ><i class="far fa-image h2" role="button"></i>
                  <div class="imageWrapper">
                    <img
                      class="image"
                      ref="addImage"
                      src="http://via.placeholder.com/30x30"
                    />
                    <img
                      class="hover-image add"
                      ref="addImageHover"
                      src="http://via.placeholder.com/30x30"
                      alt="image"
                    />
                  </div>
                </label>
              </td>
              <td class="d-flex justify-content-end">
                <a href="#!" @click.prevent="add" class="btn btn-success btn-sm"
                  >Add</a
                >
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
                <label for="">Category</label>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  v-model="editInput.category"
                >
                  <option selected value="Fish & Meat">Fish & Meat</option>
                  <option value="Drinks">Drinks</option>
                  <option value="Breakfast">Breakfast</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="">SubCategory</label>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  v-model="editInput.subCategory"
                >
                  <option selected value="Fish">Fish</option>
                  <option value="Drinks">Drinks</option>
                  <option value="Breakfast">Breakfast</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="last_name">Name</label>
                <input
                  class="form-control"
                  id="category_name"
                  type="text"
                  v-model="editInput.name"
                />
              </div>
              <div class="col-md-6">
                <label>Price</label>
                <input
                  class="form-control"
                  type="number"
                  v-model="editInput.price"
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
                <label>Stock</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="editInput.stock"
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
                <input
                  class="form-control"
                  type="text"
                  v-model="editInput.status"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          category: "Fish & Meat",
          subCategory: "Fish",
          name: "Wild King Salmon Steak",
          price: "12",
          originalPrice: "12",
          discount: 0,
          stock: "in stock",
          description:
            "Spice mixes are blended spices or herbs. ... Blends such as chili powder, curry powder, herbes de Provence, garlic salt, and other seasoned salts are traditionally sold pre-made by grocers, and sometimes baking blends such as pumpkin pie spice are also available.",
          unit: "750gm",
          quantity: "100",
          status: "show",
          image: "http://via.placeholder.com/50x50",
        },
        {
          category: "Drinks",
          subCategory: "Tea",
          name: "VPK Organic Kapha",
          price: "12",
          originalPrice: "12",
          discount: 0,
          stock: "in stock",
          description:
            "Spice mixes are blended spices or herbs. ... Blends such as chili powder, curry powder, herbes de Provence, garlic salt, and other seasoned salts are traditionally sold pre-made by grocers, and sometimes baking blends such as pumpkin pie spice are also available.",
          unit: "750gm",
          quantity: "100",
          status: "show",
          image: "https://cdn.tgdd.vn/2020/03/GameApp/youtube-200x200.jpg",
        },
        {
          category: "Honey",
          subCategory: "Honey",
          name: "Dabur Honey Oil Free",
          price: "10",
          originalPrice: "12",
          discount: 10,
          stock: "in stock",
          description:
            "Spice mixes are blended spices or herbs. ... Blends such as chili powder, curry powder, herbes de Provence, garlic salt, and other seasoned salts are traditionally sold pre-made by grocers, and sometimes baking blends such as pumpkin pie spice are also available.",
          unit: "750gm",
          quantity: "100",
          status: "show",
          image: "http://via.placeholder.com/50x50",
        },
      ],
      input: {
        category: "",
        subCategory: "",
        name: "",
        price: "",
        originalPrice: "",
        discount: 0,
        stock: "",
        description: "",
        unit: "",
        quantity: "",
        status: "",
        image: "",
      },
      inputError: false,
      editIndex: 0,
      editInput: {
        category: "",
        subCategory: "",
        name: "",
        price: "",
        originalPrice: "",
        discount: 0,
        stock: "",
        description: "",
        unit: "",
        quantity: "",
        status: "",
        image: "",
      },
      editError: false,
      showModal: false,
      isSort: false,
    };
  },
  methods: {
    //function to add data to table
    add: function () {
      if (
        this.input.category == "" ||
        this.input.subCategory == "" ||
        this.input.name == "" ||
        this.input.price == "" ||
        this.input.originalPrice == "" ||
        this.input.discount == "" ||
        this.input.stock == "" ||
        this.input.description == "" ||
        this.input.unit == "" ||
        this.input.quantity == "" ||
        this.input.status == ""
        // this.input.image == ""
      ) {
        this.inputError = true;
        return true;
      }
      this.inputError = false;
      this.products.unshift({
        name: this.input.name,
        parent: this.input.parent,
        category: this.input.category,
        subCategory: this.input.subCategory,
        name: this.input.name,
        price: this.input.price,
        originalPrice: this.input.originalPrice,
        discount: this.input.discount,
        stock: this.input.stock,
        description: this.input.description,
        unit: this.input.unit,
        quantity: this.input.quantity,
        status: this.input.status,
        image: "https://cdn.tgdd.vn/2020/03/GameApp/youtube-200x200.jpg",
        // image: this.input.image,
      });
      for (var key in this.input) {
        this.input[key] = "";
      }
      this.$refs.category.focus();
    },
    edit: function (index) {
      this.editInput.category = this.products[index].category;
      this.editInput.subCategory = this.products[index].subCategory;
      this.editInput.name = this.products[index].name;
      this.editInput.price = this.products[index].price;
      this.editInput.originalPrice = this.products[index].originalPrice;
      this.editInput.discount = this.products[index].discount;
      this.editInput.stock = this.products[index].stock;
      this.editInput.description = this.products[index].description;
      this.editInput.unit = this.products[index].unit;
      this.editInput.quantity = this.products[index].quantity;
      this.editInput.status = this.products[index].status;
      this.editIndex = index;
      this.editError = false;
      this.showModal = true;
    },
    update: function () {
      if (
        this.input.category == "" ||
        this.input.subCategory == "" ||
        this.input.name == "" ||
        this.input.price == "" ||
        this.input.originalPrice == "" ||
        this.input.discount == "" ||
        this.input.stock == "" ||
        this.input.description == "" ||
        this.input.unit == "" ||
        this.input.quantity == "" ||
        this.input.status == "" ||
        this.input.image == ""
      ) {
        this.editError = true;
        return true;
      }
      this.editError = false;
      this.products.splice(this.editIndex, 1);
      this.products.unshift({
        category: this.editInput.category,
        subCategory: this.editInput.subCategory,
        name: this.editInput.name,
        price: this.editInput.price,
        originalPrice: this.editInput.originalPrice,
        discount: this.editInput.discount,
        stock: this.editInput.stock,
        description: this.editInput.description,
        unit: this.editInput.unit,
        quantity: this.editInput.quantity,
        status: this.editInput.status,
        image: "",
      });
      for (var key in this.editInput) {
        this.editInput[key] = "";
      }
      this.showModal = false;
    },
    deleteField: function (index) {
      this.products.splice(index, 1);
    },
    sortField(field) {
      let increase = -1;
      if (!this.isSort) increase = 1;
      this.products.sort((a, b) => {
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
      this.products.sort((a, b) => {
        return increase * (a[field] - b[field]);
      });
      this.isSort = !this.isSort;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    inputFileChange() {
      let input = this.$refs.inputImage;
      let output = this.$refs.addImage;
      let outputHover = this.$refs.addImageHover;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          output.src = e.target.result;
          outputHover.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
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