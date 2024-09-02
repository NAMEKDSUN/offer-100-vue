<template>
  <div class="background">
    <div class="container" :class="{ active: isSignInActive }">
      <!-- 注册 -->
      <div class="form-container sign-up-container">
        <div class="form">
          <h2>注册</h2>
          <div class="register-buttons">
            <button @click="toggleForm('jobSeeker')">求职</button>
            <button @click="toggleForm('recruiter')">招聘</button>
          </div>
          <div v-if="formType === 'recruiter'">
            <el-form
              label-width="0px"
              ref="RecruiterForm"
              :model="RecruiterForm"
              :rules="RecruiterForm_rules"
            >
              <el-form-item prop="username">
                <el-input
                  type="text"
                  v-model="RecruiterForm.username"
                  placeholder="手机号"
                  prefix-icon="el-icon-user"
                />
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  type="password"
                  v-model="RecruiterForm.password"
                  placeholder="密码"
                  show-password
                  prefix-icon="el-icon-lock"
                />
              </el-form-item>
              <el-form-item prop="companyName">
                <el-input
                  type="text"
                  v-model="RecruiterForm.companyName"
                  placeholder="企业名称"
                  prefix-icon="el-icon-s-custom"
                />
              </el-form-item>
              <el-form-item prop="job">
                <el-input
                  type="text"
                  v-model="RecruiterForm.job"
                  placeholder="招聘职务"
                  prefix-icon="el-icon-s-goods"
                />
              </el-form-item>
            </el-form>
          </div>
          <div class="card-class" v-if="formType === 'jobSeeker'">
            <el-form
              label-width="0px"
              ref="JobSeekerForm"
              :model="jobSeekerForm"
              :rules="jobSeekerForm_rules"
            >
            <el-form-item prop="username">
                <el-input
                  type="text"
                  v-model="jobSeekerForm.username"
                  placeholder="手机号"
                  prefix-icon="el-icon-user"
                />
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  type="password"
                  v-model="jobSeekerForm.password"
                  placeholder="密码"
                  show-password
                  prefix-icon="el-icon-lock"
                />
              </el-form-item>
            </el-form>
          </div>
          <button @click="toggleSignIn">注册</button>
        </div>
      </div>
      <!-- 登录 -->
      <div class="form-container sign-in-container">
        <div class="form">
          <h2>offer100</h2>
          <el-form
              label-width="0px"
              ref="LoginForm"
              :model="LoginForm"
              :rules="LoginForm_rules"
            >
            <el-form-item prop="username">
                <el-input
                  type="text"
                  v-model="LoginForm.username"
                  placeholder="手机号"
                  prefix-icon="el-icon-user"
                />
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  type="password"
                  v-model="LoginForm.password"
                  placeholder="密码"
                  show-password
                  prefix-icon="el-icon-lock"
                />
              </el-form-item>
            </el-form>
          <a href="#" class="forget-password">忘记密码？</a>
          <button @click="toggleSignIn">登录</button>
        </div>
      </div>
      <!-- 覆盖层容器 -->
      <div class="overlay_container">
        <div class="overlay">
          <!-- 覆盖层左侧 -->
          <div class="overlay_panel overlay_left_container">
            <h2>求职者or招聘者</h2>
            <p>输入您的个人信息，注册一个账号</p>
            <button @click="toggleSignIn">登录</button>
          </div>
          <!-- 覆盖层右侧 -->
          <div class="overlay_panel overlay_right_container">
            <h2>欢迎回来！</h2>
            <p>输入您的账号信息，开始你求职旅程吧</p>
            <button @click="toggleSignIn">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginRegister",
  data() {
    return {
      isSignInActive: false,
      login_username: "",
      login_password: "",
      RecruiterForm: {
        username: "",
        password: "",
        companyName: "",
        job: "",
      },
      jobSeekerForm: {
        username: "",
        password: "",
      },
      LoginForm: {
        username: "",
        password: "",
      },
      formType: "jobSeeker", // 用于控制显示哪种表单
      RecruiterForm_rules: {
        username: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "请输入正确的手机号",
            type: "number",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { max: 8, message: "密码不超过8位", trigger: "blur" },
        ],
        companyName: [
          { required: true, message: "请输入企业名称", trigger: "blur" },
        ],
        job: [{ required: true, message: "请输入招聘职务", trigger: "blur" }],
      },
      jobSeekerForm_rules: {
        username: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "请输入正确的手机号",
            type: "number",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { max: 8, message: "密码不超过8位", trigger: "blur" },
        ],
      },
      LoginForm_rules: {
        username: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "请输入正确的手机号",
            type: "number",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { max: 8, message: "密码不超过8位", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    toggleSignIn() {
      this.isSignInActive = !this.isSignInActive;
    },
    toggleForm(formType) {
      this.formType = formType;
    },
    registerAsJobSeeker() {
      console.log("注册为求职者");
      // 这里可以添加注册为求职者的逻辑
    },
    registerAsRecruiter() {
      console.log("注册为招聘者");
      // 这里可以添加注册为招聘者的逻辑
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.background {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(90deg, #ffc0cb, #ff4b2b, #8b0000);
  background-size: 400%;
  animation: MyAnimation 10s infinite;
}

/* 其他样式保持不变 */

@keyframes MyAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif; /* 可选：设置字体 */
}

h2 {
  margin-bottom: 10px;
  font-size: 32px;
  text-transform: capitalize;
}

.container {
  width: 768px;
  height: 480px;
  background-color: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-left: 350px;
  margin-top: 110px;
  transition: transform 0.6s ease-in-out;
}

.form-container {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: white;
  transition: all 0.6s ease-in-out;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 50px;
}

input {
  width: 100%;
  margin: 8px 0;
  padding: 12px;
  background-color: #eee;
  border: none;
}

.forget-password {
  /* display: inline-block; */
  height: 20px;
  text-decoration: none;
  color: #bbb;
  text-transform: capitalize;
  font-size: 12px;
}

.forget-password:hover {
  color: lightslategray;
  border-bottom: 2px solid #ff4b2b;
}

button {
  background: #ff4b2b;
  padding: 10px 50px;
  border: 1px solid transparent;
  border-radius: 20px;
  text-transform: uppercase;
  color: white;
  margin-top: 10px;
  outline: none;
  transition: transform 80;
}

button:active {
  transform: scale(0.95);
}

.overlay_container {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: 100;
  right: 0;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
}

.overlay {
  position: absolute;
  width: 200%;
  height: 100%;
  left: -100%;
  background-color: #ff4b2b;
}

.overlay_panel {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  color: white;
  padding: 0 40px;
  text-align: center;
}

.overlay_panel button {
  background-color: transparent;
  border: 1px solid white;
}

.overlay_panel p {
  font-size: 12px;
  margin: 10px 0 15px 0;
}

.overlay_right_container {
  right: 0;
}

.container.active .sign-up-container {
  transform: translateX(100%);
  z-index: 5;
}

.container.active .sign-in-container {
  transform: translateX(100%);
}

.container.active .overlay_container {
  transform: translateX(-100%);
}

.container.active .overlay {
  transform: translateX(50%);
}
/* 控制按钮并排 */
.register-buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.login_input{
  margin-bottom: 10px;
}
</style>