<template>
  <div class="table-container">
    <h3 class="text-center mt-4 mb-4">Users</h3>
    <div class="container-fluid">
      <div class="table-responsive">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th class="text-center" style="min-width: initial">No.</th>
              <th role="button" @click="sortField('name')">
                Name
                <i class="fa-solid fa-sort"></i>
              </th>
              <th role="button">Email</th>
              <th role="button">Password</th>
              <th role="button" @click="sortField('address')">
                Address
                <i class="fa-solid fa-sort"></i>
              </th>
              <th role="button">Phone</th>
              <th role="button" @click="sortField('role')">
                Role
                <i class="fa-solid fa-sort"></i>
              </th>
              <th role="button">Avatar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users.data" :key="index">
              <td class="text-center">{{ start + index + 1 }}</td>
              <td>
                {{ user.name }}
              </td>
              <td>
                {{ user.email }}
              </td>
              <td>
                {{ user.password }}
              </td>
              <td>
                {{ user.address }}
              </td>
              <td>
                {{ user.phone }}
              </td>
              <td>
                {{ user.role }}
              </td>
              <td class="image-data">
                <div class="imageWrapper">
                  <img class="image" :src="'/storage/' + user.image" />
                  <img
                    class="hover-image"
                    :src="'/storage/' + user.image"
                    alt="image"
                  />
                </div>
              </td>
              <td class="text-center d-flex justify-content-end">
                <div style="width: 150px">
                  <button @click="edit(user.id)" class="btn btn-warning">
                    Edit
                  </button>
                  <button @click="deleteField(user.id)" class="btn btn-danger">
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
                  placeholder="Name"
                  v-model="input.name"
                  type="text"
                />
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Email"
                  v-model="input.email"
                  type="email"
                />
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  id="password"
                  placeholder="Password"
                  type="password"
                  v-model="input.password"
                />
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  type="password"
                  v-model="input.password_confirmation"
                />
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Address"
                  v-model="input.address"
                  type="text"
                />
              </td>
              <td>
                <input
                  class="form-control form-control-sm"
                  placeholder="Phone"
                  v-model="input.phone"
                  type="number"
                />
              </td>
              <td>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  v-model="input.role"
                >
                  <option disabled value="">Choose role</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
              <td class="text-center d-flex justify-content-start">
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  id="user_image"
                  ref="add"
                  @change.prevent="inputFileChange('add')"
                />
                <label for="user_image" class="image-button small d-flex"
                  ><i
                    class="far fa-image"
                    style="font-size: 33px"
                    role="button"
                  ></i>
                  <div class="imageWrapper" v-if="input.image.length > 0">
                    <img class="image" :src="input.image" />
                  </div>
                </label>
                <button
                  @click.prevent="add"
                  class="btn btn-success btn-sm"
                  style="margin: 0; margin-left: 5px; width: 100%"
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
                <label for="user_name">Name</label>
                <input
                  class="form-control"
                  id="user_name"
                  type="text"
                  v-model="editInput.name"
                />
              </div>
              <div class="col-md-6">
                <label for="email">Email</label>
                <input class="form-control" :value="editInput.email" disabled />
              </div>
              <div class="col-md-6">
                <label for="user_password">Password</label>
                <input
                  class="form-control"
                  id="user_password"
                  :value="editInput.password"
                  disabled
                />
              </div>
              <div class="col-md-6">
                <label for="user_address">Address</label>
                <input
                  class="form-control"
                  id="user_address"
                  type="text"
                  v-model="editInput.address"
                />
              </div>
              <div class="col-md-6">
                <label for="user_phone">Phone</label>
                <input
                  class="form-control"
                  id="user_phone"
                  type="number"
                  v-model="editInput.phone"
                />
              </div>
              <div class="col-md-6">
                <label>Role</label>
                <select
                  class="form-select"
                  aria-label=".form-select-sm example"
                  v-model="editInput.role"
                >
                  <option value="user" selected>User</option>
                  <option value="admin">Admin</option>
                </select>
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
      v-if="users.last_page"
      @paginate="paginate"
      :totalPage="users.last_page"
    />
  </div>
</template>

<script>
import { USER_CONFIG } from "../Config/index.js";
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
        email: "",
        password: "",
        address: "",
        password_confirmation: "",
        phone: "",
        role: "",
        image: "",
      },
      inputError: false,
      editIndex: 0,
      editInput: {
        id: "",
        name: "",
        email: "",
        address: "",
        password: "",
        phone: "",
        role: "",
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
      config: USER_CONFIG,
    });
  },
  methods: {
    //function to add data to table
    add() {
      //checkerror
      if (
        this.input.name === "" ||
        this.input.email === "" ||
        this.input.password === "" ||
        this.input.password_confirmation === "" ||
        this.input.password !== this.input.password_confirmation ||
        this.input.role === ""
      ) {
        this.inputError = true;
        return true;
      }
      this.inputError = false;
      // set data
      let image = this.$refs.add;
      let obj = {
        form: {
          name: this.input.name,
          email: this.input.email,
          address: this.input.address,
          phone: this.input.phone,
          password_confirmation: this.input.password_confirmation,
          password: this.input.password,
          role: this.input.role,
        },
        config: USER_CONFIG,
      };
      if (image.files.length > 0) {
        obj.form.image = image.files[0];
      }
      // call api
      this.addData(obj);
      //reset data in component
      for (var key in this.input) {
        this.input[key] = "";
      }
    },
    edit(id) {
      let obj = {
        id: id,
        config: USER_CONFIG,
      };
      this.showData(obj).then((response) => {
        this.editInput.id = response.id;
        this.editInput.email = response.email;
        this.editInput.name = response.name;
        this.editInput.address = response.address;
        this.editInput.password = response.password;
        this.editInput.phone = response.phone;
        this.editInput.role = response.role;
        this.editInput.image = "/storage/" + response.image;
        this.editError = false;
        this.showModal = true;
      });
    },
    update() {
      if (this.editInput.name == "" || this.editInput.email == "") {
        this.editError = true;
        return true;
      }
      let imageEdit = this.$refs.edit;
      let obj = {
        form: {
          id: this.editInput.id,
          email: this.editInput.email,
          name: this.editInput.name,
          password: this.editInput.password,
          role: this.editInput.role,
          image: imageEdit,
        },
        config: USER_CONFIG,
      };
      if (this.editInput.address !== null) {
        obj.form.address = this.editInput.address;
      }
      if (this.editInput.phone !== null) {
        obj.form.phone = this.editInput.phone;
      }
      this.updateData(obj);
      for (var key in this.editInput) {
        this.editInput[key] = "";
      }
      this.showModal = false;
    },
    sortField(field) {
      let increase = -1;
      if (!this.isSort) increase = 1;
      this.users.data.sort((a, b) => {
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
      if (confirm("Press OK for deletting ?")) {
        let obj = {
          id: id,
          config: USER_CONFIG,
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
      this.start = USER_CONFIG.perPage * (pageNum - 1);
      this.$store.dispatch("getData", {
        page: pageNum,
        config: USER_CONFIG,
      });
    },
  },
  computed: {
    ...mapState(["users"]),
  },
};
</script>
<style lang="scss" scoped>
.table-container {
  tr {
    border-bottom: 1px solid #ccc;
    td {
      &:first-of-type {
        max-width: 50px;
        min-width: 50px;
      }
      max-width: 150px;
      min-width: 150px;
      overflow: hidden;
      border: none;
      &.image-data {
        overflow: initial;
      }
    }
  }
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