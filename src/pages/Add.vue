<template>
  <div class="form-container">
    <div
      class="form-item"
      v-for="(item, index) in list"
      :key="index"
    >
      <el-input
        v-model="item.content"
        placeholder="请输入内容"
        style="width: 200px; margin-right: 10px;"
        @input="handleChange"
      />
      <el-button
        type="danger"
        size="mini"
        @click="delItem(index)"
      >
        删除
      </el-button>
    </div>
    <!-- <el-button
      type="primary"
      size="mini"
      @click="addItem"
      style="margin-top: 10px;"
    >
      增加表单项
    </el-button> -->
    <!-- <i class="el-icon-circle-plus-outline" @click="addItem" style="font-size: 30px"></i> -->
     <el-butto><i class="el-icon-circle-plus-outline" @click="addItem" style="font-size: 30px"></i></el-butto>
  </div>
</template>

<script>
export default {
  name: "MyAdd",
  props: {
    // 父组件传递的列表
    list: {
      type: Array,
      required: true,
    },
  },
  methods: {
    // add的方法是调用字后传入新的空字符然后根据v-for的循环list而生成的新表单项
    addItem() {
      // 不直接修改props，通过事件通知父组件
      // const newItem = { content: "" };
      // const newList = [...this.list, newItem];
      // this.$emit("update:list", newList);
      this.$emit("update:list",
        this.list.concat({ content: "" })
      );
    },
    delItem(index) {
      this.$confirm("确认删除？", "提示", { type: "warning" })
        .then(() => {
          const newList = [...this.list];
          newList.splice(index, 1);
          this.$emit("update:list", newList);
        })
        .catch(() => {});
    },
    // handleChange() {
    //   // 输入框变化时同步给父组件
    //   this.$emit("update:list", [...this.list]);
    // },
  },
};
</script>

<style scoped>
.form-container {
  padding: 20px;
}
.form-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}
</style>