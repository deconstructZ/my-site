<template>
  <form
    id="data-form-container"
    class="data-form-container"
    @submit.prevent="handleSubmit"
    ref="comment"
  >
    <div class="form-item">
      <div class="input-area">
        <input type="text" placeholder="用户昵称" v-model="formData.nickName" />
        <span class="tip">{{ formData.nickName.length }}/10</span>
      </div>
      <div class="error">{{ error.nickName }}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea
          maxlength="300"
          placeholder="输入内容"
          v-model="formData.content"
        ></textarea>
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button :disabled="isSubmiting">
          {{ isSubmiting ? "提交中..." : "提交" }}
        </button>
      </div>
    </div>
  </form>
</template>
  
  <script>
export default {
  data() {
    return {
      isSubmiting: false,
      formData: {
        nickName: "",
        content: "",
      },
      error: {
        nickName: "",
        content: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.error.nickName = this.formData.nickName ? "" : "请输入昵称";
      this.error.content = this.formData.content ? "" : "请输入内容";
      if (this.error.nickName || this.error.content) {
        return;
      }
      this.isSubmiting = true; //正在提交防止重复点击
      this.$emit("submit", this.formData, (info) => {
        this.$showMessage({
          content: info,
          type: "success",
          duration: 2000,
          container: this.$refs.comment,
          callback: () => {
            this.isSubmiting = false;
            this.formData.nickName = "";
            this.formData.content = "";
          },
        });
      }); //父组件处理完成之后我还要把isSubmiting设为false,并且清空文本框内容
    },
  },
};
</script>
  
  <style scoped lang="less">
@import "~@/styles/var.less";
.data-form-container {
  margin-bottom: 20px;
  overflow: hidden;
}
.form-item {
  margin-bottom: 8px;
}
.input-area {
  width: 50%;
  position: relative;
}
.text-area {
  position: relative;
}
.tip {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: #b4b8bc;
  font-size: 12px;
}
input,
textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px dashed @gray;
  outline: none;
  color: @words;
  font-size: 14px;
  border-radius: 4px;
  &:focus {
    border-color: @primary;
  }
}
input {
  padding: 0 15px;
  height: 40px;
}
textarea {
  resize: none;
  padding: 8px 15px;
  height: 120px;
}
.error {
  margin-top: 6px;
  color: @danger;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
button {
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 34px;
  color: #fff;
  border-radius: 4px;
  background: @primary;
  &:hover {
    background: darken(@primary, 10%);
  }
  &:disabled {
    background: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}
</style>
  