<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group id="example-input-group-1" label="Email" label-for="example-input-1">
        <b-form-input
          type="email"
          id="example-input-1"
          name="example-input-1"
          v-model="form.email"
          v-validate="{ required: true, min: 3 }"
          :state="validateState('example-input-1')"
          aria-describedby="input-1-live-feedback"
          data-vv-as="Email"
        ></b-form-input>

        <b-form-invalid-feedback id="input-1-live-feedback">{{ veeErrors.first('example-input-1') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="example-input-group-2" label="Password" label-for="example-input-2">
        <b-form-input
          type="password"
          id="example-input-2"
          name="example-input-2"
          v-model="form.password"
          v-validate="{ required: true, min: 3 }"
          :state="validateState('example-input-2')"
          aria-describedby="input-2-live-feedback"
          data-vv-as="Password"
        ></b-form-input>

        <b-form-invalid-feedback id="input-1-live-feedback">{{ veeErrors.first('example-input-1') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button class="ml-2" @click="resetForm()">Reset</b-button>
    </b-form>
  </div>
</template>

<style>
body {
  padding: 1rem;
}
</style>

<script>
export default {
  data() {
    return {
      
      form: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
    resetForm() {
      this.form = {
        email: null,
        password: null
      };

      this.$nextTick(() => {
        this.$validator.reset();
      });
    },
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }

        alert("Form submitted!");
      });
    }
  }
};
</script>