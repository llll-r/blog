<template>
  <div class="login-form">
    <a-form-model
      ref="ruleForm"
      :model="ruleForm"
   
      v-bind="layout"
    >
      <a-form-model-item has-feedback label="用户名" prop="pass">
        <a-input
          v-model="ruleForm.username"
          type="username"
          autocomplete="off"
          name="username"
        />
      </a-form-model-item>
      <a-form-model-item has-feedback label="密码" prop="checkPass">
        <a-input
          v-model="ruleForm.checkPass"
          type="password"
          autocomplete="off"
        />
      </a-form-model-item>

      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="submitForm('ruleForm')">
          Submit
        </a-button>
        <a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
          Reset
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    let checkPending;

    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },

      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push("/home");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
.login-form {
  margin: 0 auto;
  margin-top: 100px;
  width: 80%;
}
</style>