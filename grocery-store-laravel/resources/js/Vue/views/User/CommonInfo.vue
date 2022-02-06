<template>
  <div class="common-info-container">
    <h3 class="title">Dashboard</h3>
    <div class="order-infos">
      <div class="info">
        <svg-vue
          icon="shopping-cart"
          class="dark-icon total"
          viewBox="-50 -100 650 650"
        ></svg-vue>
        <div class="text">
          <p>Total Order</p>
          <p class="amount">49</p>
        </div>
      </div>
      <div class="info">
        <svg-vue
          icon="pending"
          class="dark-icon pending"
          viewBox="-2 -2 35 35"
        ></svg-vue>
        <div class="text">
          <p>Pending Order</p>
          <p class="amount">18</p>
        </div>
      </div>
      <div class="info">
        <svg-vue
          icon="truck"
          viewBox="-3 0 27 27"
          class="dark-icon processing"
        ></svg-vue>
        <div class="text">
          <p>Processing Order</p>
          <p class="amount">15</p>
        </div>
      </div>
      <div class="info">
        <svg-vue
          icon="correct"
          class="dark-icon complete"
          viewBox="-100 -50 500 500"
        ></svg-vue>
        <div class="text">
          <p>Complete Order</p>
          <p class="amount">11</p>
        </div>
      </div>
    </div>
    <h3 class="sub-title">Recently Order</h3>
    <table class="list-item">
      <thead>
        <tr>
          <th>STT</th>
          <th>ID</th>
          <th>NAME</th>
          <th>ORDERTIME</th>
          <th>METHOD</th>
          <th>STATUS</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td label-name="STT">1</td>
          <td label-name="ID">7C7F</td>
          <td label-name="NAME">Trung Kien</td>
          <td label-name="ORDERTIME">January 17, 2022</td>
          <td label-name="METHOD">COD</td>
          <td label-name="STATUS" class="processing">Processing</td>
          <td label-name="TOTAL">$72.0</td>
        </tr>
        <tr>
          <td label-name="STT">2</td>
          <td label-name="ID">7C7F</td>
          <td label-name="NAME">Trung Kien</td>
          <td label-name="ORDERTIME">January 17, 2022</td>
          <td label-name="METHOD">COD</td>
          <td label-name="STATUS" class="pending">Pending</td>
          <td label-name="TOTAL">$72.0</td>
        </tr>
        <tr>
          <td label-name="STT">3</td>
          <td label-name="ID">7C7F</td>
          <td label-name="NAME">Trung Kien</td>
          <td label-name="ORDERTIME">January 17, 2022</td>
          <td label-name="METHOD">COD</td>
          <td label-name="STATUS" class="processing">Processing</td>
          <td label-name="TOTAL">$72.0</td>
        </tr>
        <tr>
          <td label-name="STT">4</td>
          <td label-name="ID">7C7F</td>
          <td label-name="NAME">Trung Kien</td>
          <td label-name="ORDERTIME">January 17, 2022</td>
          <td label-name="METHOD">COD</td>
          <td label-name="STATUS" class="processing">Processing</td>
          <td label-name="TOTAL">$72.0</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "CommonInfo",
};
</script>
<style lang="scss" scoped>
.common-info-container {
  .title {
    font-family: sans-serif;
    margin-bottom: 1.5rem;
  }
  .sub-title {
    font-family: sans-serif;
    font-weight: normal;
    margin: 1.5rem 0;
  }
  .order-infos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .info {
      border: 1px solid #eee;
      padding: 0.5rem 1rem;
      border-radius: 7px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .dark-icon {
        max-width: 45px;
        min-width: 45px;
        height: 45px;
        padding: 0.5rem;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 0.5rem;
      }
      .amount {
        font-weight: 700;
        font-family: sans-serif;
        font-size: 1.25rem;
      }
      .total {
        background-color: rgba(254, 202, 202, 1);
        ::v-deep path {
          fill: rgba(220, 38, 38, 1);
        }
      }
      .pending {
        background-color: rgba(254, 215, 170, 1);
        ::v-deep path {
          fill: rgba(234, 88, 12, 1);
        }
      }
      .processing {
        background-color: rgba(199, 210, 254, 1);
        padding: 10px;
        color: rgba(79, 70, 229, 1);
      }
      .complete {
        background-color: rgba(167, 243, 208, 1);
        ::v-deep path {
          fill: rgba(5, 150, 105, 1);
        }
      }
    }
  }
  .list-item {
    width: 100%;
    border: 1px solid #eee;
    border-collapse: collapse;
    border-radius: 7px;
    overflow: hidden;
    table-layout: fixed;
    tr {
      border-bottom: 1px solid #eee;
      &:nth-child(odd) {
        background-color: #f7f7f7;
      }
      th,
      td {
        padding: 0.75rem 1.25rem;
        font-size: 0.85rem;
        font-weight: 600;
        color: #fff;
        background-color: #10b981;
        text-align: center;
      }
      th {
        text-transform: uppercase;
        &:first-child {
          text-align: left;
        }
      }
      td {
        font-weight: normal;
        color: #000;
        background-color: transparent;
        &:first-child {
          text-align: left;
        }
        &:last-child {
          font-weight: bold;
        }
        &:nth-child(6) {
          &.pending,
          &.cancel {
            color: rgba(249, 115, 22, 1);
          }
          &.processing {
            color: rgba(99, 102, 241, 1);
          }
          &.delivered {
            columns: rgba(16, 185, 129, 1);
          }
        }
      }
    }
  }
  @media (max-width: 760px) {
    .list-item {
      display: block;
      max-height: 350px;
      overflow-y: auto;
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
      thead,
      tbody,
      th,
      td,
      tr {
        display: block;
      }
      thead tr {
        display: none;
      }
      tr {
        border-bottom: 1px solid #ccc;
        td {
          /* Behave  like a "row" */
          border: none;
          border-bottom: 1px solid #eee;
          position: relative;
          text-align: right;
          padding-left: 110px;
          &:first-child {
            text-align: right;
          }
        }
        td:before {
          /* Now like a table header */
          content: attr(label-name);
          position: absolute;
          /* Top/left values mimic padding */
          top: 0;
          left: 0;
          width: 20%;
          min-width: 100px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          font-weight: 600;
          color: #fff;
          background-color: #10b981;
        }
      }
    }
  }
}
</style>
