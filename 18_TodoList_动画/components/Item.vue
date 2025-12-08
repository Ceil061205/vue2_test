<template>
    <li>
      <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
       <!-- 以下代码不推荐（直接修改props） -->
       <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input ref="inputTitle" v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo,$event)">
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
      <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)" >编辑</button>
  </li>
</template>
<script>
import pubsub from 'pubsub-js';
export default {
  name: "MyItem",
  props: ['todo'],
  methods: {
    handleCheck(id) {
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo',id)
    },
    handleDelete(id) {
      if (confirm('确认删除吗')) {
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo',id)
        pubsub.publish('deleteTodo',id)
      }
    },
    handleEdit(todo) {
      if (todo.hasOwnProperty('isEdit')) {
        console.log('u');
        
        todo.isEdit = true
      } else {
        console.log('wu');
        this.$set(todo,'isEdit',true)
      }
      // 指定的回调会在dom更新后执行  当数据改变后要基于更新后的新dom进行操作
      this.$nextTick(function() {
        this.$refs.inputTitle.focus()
      })
      // setTimeout(() => {
      //   this.$refs.inputTitle.focus()
      // })
    },
    handleBlur(todo,e) {
      todo.isEdit = false
      if(!e.target.value.trim()) return alert('不能为空')
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
    }
  }
}
</script>
<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #ddd;
}
li:hover button{
  display: block;
}
</style>
