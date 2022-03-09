<template>
  <div class="checkout-container">
    <ValidationObserver class="form" v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div class="index fisrt">01. Personal Details</div>
        <div class="personal-info">
          <div class="block">
            <label for="personal-first-name">First Name</label>
            <ValidationProvider
              name="First Name"
              rules="required"
              v-slot="{ errors }"
            >
              <input
                type="text"
                placeholder="Kien"
                v-model="firstName"
                id="personal-first-name"
              />
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="block">
            <label for="personal-last-name">Last Name</label>
            <ValidationProvider
              name="Last Name"
              rules="required"
              v-slot="{ errors }"
            >
              <input
                type="text"
                placeholder="Trung"
                v-model="lastName"
                id="personal-last-name"
              />
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="block">
            <label for="personal-email">Email address</label>
            <ValidationProvider
              name="email"
              rules="required|email"
              v-slot="{ errors }"
            >
              <input
                type="email"
                placeholder="yourmail@gmail.com"
                id="personal-email"
                v-model="email"
              />
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="block">
            <label for="personal-phone">Phone number</label>
            <ValidationProvider
              name="Phone"
              rules="required|integer"
              v-slot="{ errors }"
            >
              <input
                type="tel"
                placeholder="039-961-0609"
                id="personal-phone"
                v-model="phone"
              />
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="index">02. Shipping Details</div>
        <div class="shipping-detail">
          <div class="block">
            <label for="personal-address">Street address</label>
            <ValidationProvider
              name="Address"
              rules="required"
              v-slot="{ errors }"
            >
              <input
                type="text"
                placeholder="43 Phạm Như Xương"
                v-model="address"
                id="personal-address"
              />
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="small-field">
            <div class="block">
              <label for="personal-city">City</label>
              <ValidationProvider
                name="City"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  type="text"
                  placeholder="Đà Nẵng"
                  v-model="city"
                  id="personal-city"
                />
                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="block">
              <label for="personal-country">Country</label>
              <ValidationProvider
                name="Country"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  type="text"
                  placeholder="Việt Nam"
                  v-model="country"
                  id="personal-country"
                />
                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>
          <ValidationProvider
            name="Shipping Option"
            rules="required"
            v-slot="{ errors }"
          >
            <div class="small-field">
              <label class="except">Shipping Cost</label>
              <div class="block shipping">
                <label class="radio-label" for="personal-shipping-fast">
                  <svg-vue icon="truck" class="dark-icon"></svg-vue>
                  <div class="mini">
                    <h3>FedEx</h3>
                    <p>Delivery: Today Cost : $60.00</p>
                  </div>
                </label>
                <input
                  name="personal-shipping-cost"
                  type="radio"
                  style="height: 18px; width: 18px; vertical-align: middle"
                  id="personal-shipping-fast"
                  v-model="shoppingCost"
                  value="60"
                />
              </div>
              <div class="block shipping">
                <label class="radio-label" for="personal-shipping-slow">
                  <svg-vue icon="truck" class="dark-icon"></svg-vue>
                  <div class="mini">
                    <h3>UPS</h3>
                    <p>Delivery: 7 Days Cost : $20.00</p>
                  </div>
                </label>
                <input
                  type="radio"
                  name="personal-shipping-cost"
                  id="personal-shipping-slow"
                  style="height: 18px; width: 18px; vertical-align: middle"
                  v-model="shoppingCost"
                  value="20"
                />
              </div>
            </div>
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="index">03. Payment Details</div>
        <div class="small-field">
          <div class="block">
            <div class="payment-method">
              <div class="small-field" style="margin-top: 0">
                <div class="block shipping">
                  <label class="radio-label" for="personal-cash-service">
                    <svg-vue icon="cash" style="height: 20px"></svg-vue>
                    <div class="mini">
                      <h3>Cash On Delivery</h3>
                    </div>
                  </label>
                  <input
                    type="radio"
                    name="personal-payment-service"
                    style="height: 18px; width: 18px; vertical-align: middle"
                    id="personal-cash-service"
                    checked
                  />
                </div>
                <!-- not aplly for demo -->
                <div
                  class="block shipping"
                  style="filter: blur(1px); pointer-events: none"
                >
                  <label class="radio-label" for="personal-credit-service">
                    <svg-vue icon="credit" style="height: 20px"></svg-vue>
                    <div class="mini">
                      <h3>Credit Card</h3>
                    </div>
                  </label>
                  <input
                    type="radio"
                    name="personal-payment-service"
                    id="personal-credit-service"
                    style="height: 18px; width: 18px; vertical-align: middle"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="submit">
          <router-link :to="{ name: 'Home' }">
            <button class="btn back-btn">
              <svg-vue
                icon="back"
                class="dark-icon"
                style="margin-right: 0.5rem"
              ></svg-vue>
              Continue Shopping
            </button>
          </router-link>
          <button class="btn next-btn" type="submit">
            Confirm Order
            <svg-vue
              icon="next"
              class="dark-icon"
              style="margin-left: 0.5rem"
            ></svg-vue>
          </button>
        </div>
      </form>
    </ValidationObserver>
    <div class="order-summary">
      <h3 class="tittle">Order Summary</h3>
      <div class="list">
        <div class="emty" v-if="isEmpty">
          <svg-vue
            icon="bag2"
            class="dark-icon"
            style="display: block"
          ></svg-vue>
          <p>No items added yet</p>
        </div>
        <CartItem v-for="(item, index) in items" :key="index" :item="item" />
      </div>
      <div class="coupon">
        <input
          type="text"
          v-model="code"
          placeholder="Input your coupon code"
        />
        <button @click.prevent="checkCode" class="btn apply-btn">Apply</button>
      </div>
      <div class="block">
        <div class="label">Subtotal</div>
        <p>${{ cartTotal }}</p>
      </div>
      <div class="block">
        <div class="label">Shipping Cost</div>
        <p>${{ shoppingCost === "" ? 0 : shoppingCost }}</p>
      </div>
      <div class="block">
        <div class="label">Discount</div>
        <p>${{ discountCost }}</p>
      </div>
      <div class="total">
        TOTAL COST
        <p>${{ totalCost }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Checkout",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      shoppingCost: "",
      paymentMethod: "",
      discountCost: 0,
      code: "",
    };
  },
  components: {
    CartItem: () => import("../components/CartItem.vue"),
  },
  methods: {
    onSubmit() {
      axios
        .post("/api/order", {
          orders: this.totalUniqueItems,
          cart_items: this.items,
        })
        .then((res) => {
          this.deleteCartAfterCheckout();
          this.$toaster.success("Successfully checkout");
        });
    },
    ...mapMutations(["deleteCartAfterCheckout"]),
    checkCode() {
      if (this.code === "") {
        this.$toaster.error("Please input a Coupon code !");
      } else {
        let index = this.offers.findIndex((item) => {
          return (
            item.code === this.code &&
            Date.parse(item.date) / 1000 > new Date().getTime() / 1000
          );
        });
        if (index === -1) {
          this.$toaster.error("Please input a valid Coupon code !");
        } else {
          if (this.offers[index].rule > this.cartTotal) {
            this.$toaster.error(
              "Minimum " +
                this.offers[index].rule +
                " USD for Apply this coupon!"
            );
          } else {
            this.discountCost = Math.round(
              (this.offers[index].discount / 100) * this.totalCost
            );
          }
        }
      }
    },
  },
  computed: {
    ...mapState([
      "items",
      "isEmpty",
      "cartTotal",
      "offers",
      "totalUniqueItems",
    ]),
    totalCost() {
      return (
        this.cartTotal + Number(this.shoppingCost) - Number(this.discountCost)
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  display: block;
  padding: 0.875rem 1.5rem;
  line-height: 1.25rem;
  transition: 0.25s;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  font-family: sans-serif;
  cursor: pointer;
}
input[type="radio"] {
  accent-color: green;
}
.checkout-container {
  display: flex;
  justify-content: flex-start;
  padding: 3rem 2.5rem;
  max-width: 1536px;
  background-color: rgba(249, 250, 251, 1);
  font-family: "Open Sans", sans-serif;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 600px) {
    padding: 2.5rem 1rem;
  }
  .form {
    width: 60%;
    .error {
      color: rgb(248 113 113);
      font-size: 0.875rem;
      line-height: 1.25rem;
      margin-top: 0.5rem;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
    input {
      display: block;
      width: 100%;
      padding: 0.5rem 1.25rem;
      height: 3rem;
      transition: 0.25s;
      opacity: 0.75;
      font-size: 0.875rem;
      line-height: 1.25rem;
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 0.375rem;
      &:focus {
        border-color: #10b981;
      }
    }
    .index {
      color: rgb(55 65 81);
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.5rem;
      font-family: sans-serif;
      padding-bottom: 0.75rem;
      margin-top: 3rem;
      &:first-of-type {
        margin-top: 0;
      }
    }
    label {
      color: rgb(107 114 128);
      font-weight: 500;
      line-height: 1rem;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
      display: block;
    }
    .personal-info {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.5rem;
      @media (max-width: 660px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
    .shipping-detail,
    .payment-method {
      .small-field {
        margin-top: 1.5rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        @media (max-width: 660px) {
          grid-template-columns: repeat(1, 1fr);
        }
        .except {
          grid-column: 1 / 3;
          margin-bottom: -1.5rem;
          @media (max-width: 660px) {
            grid-column: 1 / 2;
          }
        }
        .shipping {
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          padding: 0.75rem;
          align-items: center;
          background-color: #fff;
          border: 1px solid #eee;
          border-radius: 0.375rem;
          label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin: 0;
            width: 100%;
            cursor: pointer;
            .dark-icon {
              color: rgb(156 163 175);
              ::v-deep path {
                fill: none;
              }
            }
            .mini {
              font-weight: 500;
              h3 {
                color: rgb(75 85 99);
                font-size: 0.875rem;
              }
              p {
                color: rgb(107 114 128);
                line-height: 1rem;
                font-size: 0.75rem;
              }
            }
          }
        }
      }
    }
    .submit {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.5rem;
      margin-top: 2.5rem;
      @media (max-width: 660px) {
        grid-template-columns: repeat(1, 1fr);
      }
      .btn {
        width: 100%;
        &:hover {
          border-color: #ccc;
        }
      }
      .back-btn {
        color: rgb(55 65 81);
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-family: sans-serif;
        padding: 0.75rem 0;
        background-color: rgb(224 231 255);
        border: 1px solid #eee;
        border-radius: 0.25rem;
      }
      .next-btn {
        background-color: #10b981;
        color: #fff;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding: 0.75rem 0;
        &:hover {
          background-color: rgb(5 150 105);
        }
      }
    }
  }
  .order-summary {
    padding: 2rem;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 0.5rem;
    display: inline-block;
    max-height: 640px;
    position: sticky;
    top: 132px;
    margin-left: 2.5rem;
    @media (max-width: 1024px) {
      margin-left: 1.5rem;
    }
    @media (max-width: 768px) {
      width: 100%;
      position: initial;
      margin-left: 0;
      margin-bottom: 2rem;
      max-height: 700px;
    }
    width: 40%;
    .tittle {
      font-weight: 600;
      font-size: 1.125rem;
      line-height: 1.75rem;
      font-family: sans-serif;
      padding-bottom: 1rem;
    }
    .list {
      overflow-y: auto;
      width: 100%;
      max-height: 16rem;
      height: 100%;
      min-height: 6rem;
      .emty {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .dark-icon {
          color: #333;
          transform: scale(1.5);
          ::v-deep path {
            fill: none;
          }
        }
        p {
          margin-top: 1rem;
          color: #333;
          font-size: 0.9rem;
          font-weight: 600;
        }
      }
      &::-webkit-scrollbar {
        width: 5px;
        background-color: #f5f5f5;
      }
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #f5f5f5;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #10b981;
      }
    }
    .coupon {
      padding: 1rem 0;
      margin-top: 1rem;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.25rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      input {
        padding: 0.5rem 1rem;
        transition: 0.25s;
        font-size: 0.875rem;
        line-height: 1.25rem;
        border: 1px solid #eee;
        border-radius: 0.375rem;
        width: 100%;
        height: 3rem;
        &:focus {
          border-color: rgb(16 185 129);
        }
      }
      .apply-btn {
        border: 1px solid rgb(229 231 235);
        background-color: transparent;
        font-weight: 600;
        margin-left: 1rem;
        @media (max-width: 768px) {
          width: 100%;
          margin-top: 1.5rem;
        }
        &:hover {
          color: #fff;
          background-color: rgb(16 185 129);
        }
      }
    }
    .block {
      padding: 0.5rem 0;
      font-family: "Open Sans", sans-serif;
      display: block;
      color: rgb(107 114 12);
      font-weight: 700;
      font-size: 0.9rem;
      line-height: 1.25rem;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      p {
        color: #000;
        font-weight: 700;
        font-family: sans-serif;
      }
    }
    .total {
      margin-top: 1rem;
      border-top: 1px solid #ccc;
      font-family: sans-serif;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 1.125rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1.25rem;
      p {
        font-family: sans-serif;
        font-weight: 800;
        font-size: 1.125rem;
        line-height: 1.75rem;
      }
    }
  }
  // @media (max-width: 600px) {
  //   padding: 2.5rem 1rem;
  // }
}
</style>