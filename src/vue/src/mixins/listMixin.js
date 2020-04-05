const listMixin = {
  data() {
    return {
      /**
       * 列表数据
       */
      tableData: [],
      /**
       * 列表查询条件
       */
      query: {
        /**
        * 排序条件
        */
        sorting: '',
        /**
         * 跳过的数量
         */
        skipCount: 0,
        /**
         * 页面大小
         */
        maxResultCount: 10
      },
      pagination: {
        totalCount: 0,
        pageIndex: 0
      }
    }
  },
  methods: {
    /**
    * 获取列表数据
    */
    getList() {
      throw new Error('您需要在您的组件中重写此方法。')
    },
    onPagination({ page }) {
      if (page > 1) {
        this.query.skipCount = (page - 1) * this.query.maxResultCount
        this.getList()
      }
    },
    updateTotalCount(count) {
      this.pagination.totalCount = count
    }
  }
}

export default listMixin
