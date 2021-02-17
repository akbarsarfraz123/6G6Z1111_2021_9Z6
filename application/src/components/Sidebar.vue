<template>
  <nav class="nav bg-dark d-flex flex-column shadow-right">
    <div>
      <h1 class="mt-3">1CWK100</h1>
    </div>
    <div class="section-split"></div>
    <div class="nav-account">
      <div class="account d-flex justify-content-start">
        <a class="ms-1 mb-2 h6" href="">LDixon</a>
      </div>
      <div class="account-extras d-flex">
        <a class="me-auto ms-1" href="">account details</a>
        <a class="me-1" href="">log out</a>
      </div>
      <div class="section-split"></div>
    </div>
    <div class="functionality d-flex flex-column">
      <router-link :to="{ name: 'Dashboard' }"
        ><font-awesome-icon icon="home" /> Home</router-link
      >
      <router-link :to="{ name: 'Add' }"
        ><font-awesome-icon icon="plus" />Add</router-link
      >
      <router-link :to="{ name: 'Remove' }"
        ><font-awesome-icon icon="minus" />Remove</router-link
      >
      <router-link :to="{ name: 'Documents' }"
        ><font-awesome-icon icon="folder" />Documents</router-link
      >
      <router-link :to="{ name: 'About' }"
        ><font-awesome-icon icon="info" />About</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  margin: 0px;
  min-width: 250px;
  max-width: 250px;
  min-height: 100vh;

  .nav-account {
    a {
      font-size: 20px;
    }
  }
  color: white;

  a {
    text-decoration: none;
    color: white;
  }

  .nav-account {
    margin-top: 10px;
    a {
      font-size: 20px;
    }

    .account-extras {
      a {
        font-size: 15px;
      }
    }
  }

  .section-split {
    margin: 20px auto;
    display: flex;
    width: 80%;
    height: 1px;
    background-color: white;
    background: rounded;
  }

  .functionality {
    svg {
      margin-right: 8px;
    }
  }
}
.shadow-right {
  box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%), 0 2px 30px 0 rgb(0 0 0 / 35%);
  -webkit-box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%),
    0 2px 30px 0 rgb(0 0 0 / 35%);
  -moz-box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%), 0 2px 30px 0 rgb(0 0 0 / 35%);
}
</style>
