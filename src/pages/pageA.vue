<template>
  <div>
    <div class="components-input-demo-size">
      <a-input placeholder="//"/>
      <a-input placeholder="//"/>
      <a-button type="primary" icon="search">Search</a-button>
    </div>
    <a-table
      :columns="columns"
      :rowKey="record => record.id"
      :dataSource="data"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <template slot="name" slot-scope="name">{{name.first}} {{name.last}}</template>
    </a-table>
  </div>
</template>



<script>
// import ContentItem from "../components/content-item";
// import reqwest from "reqwest";
import axios from "axios";

const columns = [
  {
    title: "User",
    dataIndex: "create_user",
    sorter: true,
    width: "20%",
  },
  {
    title: "Date",
    dataIndex: "create_date",
    sorter: true
    // width: "20%"
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: true
    // width: "20%"
  },
  {
    title: "Action",
    width: "50%"
  }
];

export default {
  name: "pageA",
  props: {},
  components: {
    // ContentItem
  },
  mounted() {
    this.fetch();
  },
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns
    };
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      });
    },
    fetch() {
      this.loading = true;
      axios("http://192.168.1.6:8000/api/blog")
        .then(data => {
          // const pagination = { ...this.pagination };
          // pagination.total = 200;
          console.log(data);

          this.loading = false;
          this.data = data.data;
          // this.pagination = pagination;
        })
        .catch(err => console.error(err))
        .finally(() => console.log("get done"));
    }
  }
};
</script>

<style scoped>
.components-input-demo-size .ant-input {
  width: 200px;
  margin: 0 8px 8px 0;
}
</style>
