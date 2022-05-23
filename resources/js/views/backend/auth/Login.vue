<template>
    <div class="bg-gradient-primary" style="min-height: 100vh; max-width: 100%">
        <div class="container">
            <!-- Outer Row -->
            <div class="row justify-content-center">
                <div class="col-xl-10 col-lg-12 col-md-9">
                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <!-- Nested Row within Card Body -->
                            <div class="row">
                                <div
                                    class="col-lg-6 d-none d-lg-block bg-login-image"
                                ></div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">
                                                Welcome Back!
                                            </h1>
                                        </div>
                                        <form
                                            class="user"
                                            @submit.prevent="submitLoginData"
                                        >
                                            <div class="form-group">
                                                <input
                                                    v-model="loginData.email"
                                                    type="email"
                                                    @input="
                                                        $v.loginData.email.$touch()
                                                    "
                                                    :class="{
                                                        'is-invalid':
                                                            $v.loginData.email
                                                                .$error,
                                                    }"
                                                    class="form-control form-control-user"
                                                    id="exampleInputEmail"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..."
                                                />
                                                <div
                                                    class="text-danger"
                                                    v-if="
                                                        $v.loginData.email
                                                            .$error
                                                    "
                                                >
                                                    {{ emailError }}
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <input
                                                    v-model="loginData.password"
                                                    @input="
                                                        $v.loginData.password.$touch()
                                                    "
                                                    :class="{
                                                        'is-invalid':
                                                            $v.loginData
                                                                .password
                                                                .$error,
                                                    }"
                                                    type="password"
                                                    class="form-control form-control-user"
                                                    id="exampleInputPassword"
                                                    placeholder="Password"
                                                />
                                                <div
                                                    class="text-danger"
                                                    v-if="
                                                        $v.loginData.password
                                                            .$error
                                                    "
                                                >
                                                    {{ passwordError }}
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div
                                                    class="custom-control custom-checkbox small"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        class="custom-control-input"
                                                        id="customCheck"
                                                    />
                                                    <label
                                                        class="custom-control-label"
                                                        for="customCheck"
                                                        >Remember Me</label
                                                    >
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                class="btn btn-primary btn-user btn-block"
                                            >
                                                Login
                                            </button>
                                        </form>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
    name: "Login",

    data() {
        return {
            loginData: {
                email: "",
                password: "",
                remember: "",
            },
            isLoading: false,
        };
    },

    validations: {
        loginData: {
            email: {
                required,
                email,
            },
            password: {
                required,
                minLength: minLength(6),
            },
        },
    },

    computed: {
        emailError() {
            if (!this.$v.loginData.email.$error) {
                return "";
            }

            if (!this.$v.loginData.email.required) {
                return "This field is required.";
            }

            if (!this.$v.loginData.email.email) {
                return "Incorrect email format.";
            }
        },
        passwordError() {
            if (!this.$v.loginData.password.$error) {
                return "";
            }

            if (!this.$v.loginData.password.minLength) {
                return "Password should be minimum 6 characters.";
            }
        },
    },

    methods: {
        submitLoginData() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return true;
            }
        },
    },
};
</script>
