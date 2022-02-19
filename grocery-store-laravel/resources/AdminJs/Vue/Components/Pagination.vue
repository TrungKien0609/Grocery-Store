<template>
  <div class="pagination-container">
    <Paginate
      :page-count="totalPage"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-link-class="'page-link'"
      :break-view-class="'break-view'"
      :prev-link-class="'prev-link'"
      :active-class="'active'"
      :next-link-class="'next-link'"
      :disabled-class="'disabled'"
    >
      >>
    </Paginate>
  </div>
</template>
<script>
import Paginate from "vuejs-paginate";
export default {
  components: {
    Paginate,
  },
  props: ['totalPage'],
  methods: {
    clickCallback(pageNum){
      this.$emit("paginate", pageNum);
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .pagination {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: 600;
    font-family: sans-serif;
    flex-wrap: wrap;
  }
  .page-link {
    margin: 0.25rem 0.2rem;
    padding: 0.5rem;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid rgba(5, 150, 105, 1);
    font-size: 0.75rem;
    color: #333;
    cursor: pointer;
    transition: 0.25s;
    &:hover:not(.break-view) {
      color: #fff;
      background-color: rgba(5, 150, 105, 1);
    }
  }
  .active {
    .page-link {
      color: #fff;
      background-color: rgba(5, 150, 105, 1);
    }
  }
  .break-view {
    border: none;
  }
  .prev-link,
  .next-link {
    color: #333;
    padding: 0.3rem 1rem;
    border: 2px solid rgba(5, 150, 105, 1);
    border-radius: 9999px;
    font-size: 0.75rem;
    margin: 0.25rem 0;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
      color: #fff;
      background-color: rgba(5, 150, 105, 1);
    }
  }
  .prev-link {
    margin-right: 0.5rem;
  }
  .next-link {
    margin-left: 0.5rem;
  }
  .disabled {
    display: none;
  }
  .break-view {
    border: none;
    display: block;
  }
}
</style>
