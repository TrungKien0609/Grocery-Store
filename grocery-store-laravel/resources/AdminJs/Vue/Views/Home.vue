<template>
  <main>
    <div class="container-fluid px-4">
      <h1 class="mt-4">Dashboard</h1>
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <div class="card bg-primary text-white mb-4">
            <div class="card-body">
              <h3>150</h3>
              <div class="h6">User Registrations</div>
            </div>
            <div
              class="
                card-footer
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <a class="small text-white stretched-link" href="#">More infor</a>
              <div class="small text-white">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-warning text-white mb-4">
            <div class="card-body">
              <h3>150</h3>
              <div class="h6">Category</div>
            </div>
            <div
              class="
                card-footer
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <a class="small text-white stretched-link" href="#"
                >View Details</a
              >
              <div class="small text-white">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-success text-white mb-4">
            <div class="card-body">
              <h3>150</h3>
              <div class="h6">Sub Category</div>
            </div>
            <div
              class="
                card-footer
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <a class="small text-white stretched-link" href="#"
                >View Details</a
              >
              <div class="small text-white">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-danger text-white mb-4">
            <div class="card-body">
              <h3>150</h3>
              <div class="h6">Product</div>
            </div>
            <div
              class="
                card-footer
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <a class="small text-white stretched-link" href="#"
                >View Details</a
              >
              <div class="small text-white">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <Category />
      </div>
      <div class="row">
        <SubCategory />
      </div>
      <div class="row">
        <Product />
      </div>
      <div class="row">
        <User />
      </div>
    </div>
  </main>
</template>
<script>
import Category from "../Components/Category.vue";
import SubCategory from "../Components/SubCategory.vue";
import Product from "../Components/Product.vue";
import User from "../Components/User.vue";
export default {
  name: "Home",
  components: {
    Category,
    SubCategory,
    Product,
    User,
  },
};
</script>
