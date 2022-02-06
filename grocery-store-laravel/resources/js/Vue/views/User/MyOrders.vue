<template>
  <div class="my-orders-container">
    <h3 class="title">My Orders</h3>
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
          <th>ACTION</th>
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
          <td label-name="ACTION">
            <router-link to="" class="dark-link"
              ><button>Detail</button></router-link
            >
          </td>
        </tr>
        <tr>
          <td label-name="STT">1</td>
          <td label-name="ID">7C7F</td>
          <td label-name="NAME">Trung Kien</td>
          <td label-name="ORDERTIME">January 17, 2022</td>
          <td label-name="METHOD">COD</td>
          <td label-name="STATUS" class="processing">Processing</td>
          <td label-name="TOTAL">$72.0</td>
          <td label-name="ACTION">
            <router-link to="" class="dark-link"
              ><button>Detail</button></router-link
            >
          </td>
        </tr>
        <tr>
          <td label-name="STT">1</td>
          <td label-name="ID">7C7F</td>
          <td label-name="NAME">Trung Kien</td>
          <td label-name="ORDERTIME">January 17, 2022</td>
          <td label-name="METHOD">COD</td>
          <td label-name="STATUS" class="processing">Processing</td>
          <td label-name="TOTAL">$72.0</td>
          <td label-name="ACTION">
            <router-link to="" class="dark-link"
              ><button>Detail</button></router-link
            >
          </td>
        </tr>
        <tr>
          <td label-name="STT">1</td>
          <td label-name="ID">7C7F</td>
          <td label-name="NAME">Trung Kien</td>
          <td label-name="ORDERTIME">January 17, 2022</td>
          <td label-name="METHOD">COD</td>
          <td label-name="STATUS" class="processing">Processing</td>
          <td label-name="TOTAL">$72.0</td>
          <td label-name="ACTION">
            <router-link to="" class="dark-link"
              ><button>Detail</button></router-link
            >
          </td>
        </tr>
        <tr>
          <td label-name="STT">1</td>
          <td label-name="ID">7C7F</td>
          <td label-name="NAME">Trung Kien</td>
          <td label-name="ORDERTIME">January 17, 2022</td>
          <td label-name="METHOD">COD</td>
          <td label-name="STATUS" class="processing">Processing</td>
          <td label-name="TOTAL">$72.0</td>
          <td label-name="ACTION">
            <router-link to="" class="dark-link"
              ><button>Detail</button></router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.my-orders-container {
  .title {
    font-family: sans-serif;
    margin-bottom: 1.5rem;
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
        button {
          cursor: pointer;
          background-color: rgba(209, 250, 229, 1);
          color: #10b981;
          padding: 0.25rem 1rem;
          border-radius: 999999px;
          font-weight: 600;
          letter-spacing: 1px;
          transition: 0.25s;
          &:hover {
            color: #fff;
            background-color: rgba(16, 185, 129, 1);
          }
        }
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
