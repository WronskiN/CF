<template>
  <div class="headerWrapper">
    <nav>
      <div class="container pos-r">
        <div class="logo">
          <svg
            width="32"
            height="20"
            viewBox="0 0 32 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.866211"
              width="31.142"
              height="18.2677"
              rx="9.13384"
              fill="#015AFF"
            />
            <rect
              x="14.0049"
              y="2.51855"
              width="15.3101"
              height="14.9621"
              rx="7.48105"
              fill="white"
            />
            <path
              d="M26.342 8.02016C25.0952 6.77338 23.4362 6.08301 21.6639 6.08301C19.8916 6.08301 18.2327 6.77338 16.9859 8.02016C16.6974 8.30867 16.6974 8.76205 16.9859 9.05056C17.1302 9.19482 17.3156 9.26695 17.5011 9.26695C17.6866 9.26695 17.8721 9.19482 18.0163 9.05056C18.9849 8.07168 20.2832 7.53587 21.6639 7.53587C23.0447 7.53587 24.343 8.07168 25.3116 9.05056C25.6001 9.33908 26.0534 9.33908 26.342 9.05056C26.6305 8.76205 26.6305 8.29837 26.342 8.02016Z"
              fill="#216CF6"
            />
            <path
              d="M18.9224 9.96739C18.6339 10.2559 18.6339 10.7093 18.9224 10.9978C19.0667 11.142 19.2522 11.2142 19.4376 11.2142C19.6231 11.2142 19.8086 11.142 19.9528 10.9978C20.9008 10.0498 22.4361 10.0498 23.3738 10.9875C23.652 11.276 24.1157 11.276 24.4042 10.9875C24.6927 10.699 24.6927 10.2456 24.4042 9.95708C22.8895 8.4527 20.4371 8.4527 18.9224 9.96739Z"
              fill="#216CF6"
            />
            <path
              d="M21.6745 13.8313C22.3004 13.8313 22.8079 13.3239 22.8079 12.6979C22.8079 12.0719 22.3004 11.5645 21.6745 11.5645C21.0485 11.5645 20.541 12.0719 20.541 12.6979C20.541 13.3239 21.0485 13.8313 21.6745 13.8313Z"
              fill="#216CF6"
            />
          </svg>
          <span class="logoName">CF Broadband</span>
        </div>
        <div class="safeSecure">
          <svg
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.92857 4.8125H8.39286V3.26562C8.39286 1.46523 6.87054 0 5 0C3.12946 0 1.60714 1.46523 1.60714 3.26562V4.8125H1.07143C0.479911 4.8125 0 5.27441 0 5.84375V9.96875C0 10.5381 0.479911 11 1.07143 11H8.92857C9.52009 11 10 10.5381 10 9.96875V5.84375C10 5.27441 9.52009 4.8125 8.92857 4.8125ZM5.89286 8.42188C5.89286 8.89668 5.4933 9.28125 5 9.28125C4.5067 9.28125 4.10714 8.89668 4.10714 8.42188V7.39062C4.10714 6.91582 4.5067 6.53125 5 6.53125C5.4933 6.53125 5.89286 6.91582 5.89286 7.39062V8.42188ZM6.60714 4.8125H3.39286V3.26562C3.39286 2.4127 4.11384 1.71875 5 1.71875C5.88616 1.71875 6.60714 2.4127 6.60714 3.26562V4.8125Z"
              fill="#001429"
            />
          </svg>
          <p>Safe &amp; Secure</p>
        </div>
      </div>
    </nav>
    <header>
      <div class="container">
        <div class="progressWrapper" v-if="showProgress === true">
          <div class="progress">
            <div class="progressBar" :style="'width:' + progressStep"></div>
          </div>
          <div class="progressCounter">
            <div class="progressCounterItem active" data-progress="1">
              <span>1</span>
            </div>
            <div class="progressCounterItem" data-progress="2">
              <span>2</span>
            </div>
            <div class="progressCounterItem" data-progress="3">
              <span>3</span>
            </div>
            <div class="progressCounterItem" data-progress="4">
              <span>4</span>
            </div>
          </div>
        </div>
        <div class="brandLogos" v-if="showBrands === true">
          <img
            src="../../assets/bt-logo.jpg"
            alt="bt logo"
            width="50px"
            height="auto"
          />
          <img
            src="../../assets/sky-logo.png"
            alt="sky logo"
            width="60px"
            height="auto"
          />
          <img
            src="../../assets/talktalk.png"
            alt="talk talk logo"
            width="60px"
            height="auto"
          />
          <img
            src="../../assets/Virgin_Media.svg.png"
            alt="virgin Media logo"
            width="60px"
            height="auto"
          />
          <img
            src="../../assets/Vodafone-Logo.png"
            alt="vodafone logo"
            width="60px"
            height="auto"
          />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: ["showProgress", "showBrands"],
  data() {
    return {
      step: 1,
    };
  },
  computed: {
    progressStep() {
      return (100 / 3) * (this.step - 1) + "%";
    },
  },
};
</script>

<style scoped>
.headerWrapper {
  width: 100%;
  overflow: hidden;
}
nav {
  width: 100%;
  height: 56px;
  max-width: 1024px;
  margin: 0 auto;
  padding: 14px 16px;
}
.container {
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
header {
  width: 100%;
  padding: 14px 16px;
}
header .container {
  flex-wrap: wrap;
  max-width: 800px;
}
.logo {
  width: 50%;
  display: flex;
  align-items: center;
}
.logoName {
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
  margin-left: 0.2rem;
}
.safeSecure {
  display: flex;
  align-items: center;
}
.safeSecure p {
  margin: 0 0 0 0.5rem;
  display: inline-block;
  font-size: 14px;
}
.brandLogos {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 0;
}
.brandLogos img {
  object-fit: contain;
}
.progressWrapper {
  width: 100%;
  padding: 14px 16px;
  position: relative;
}
.progress {
  position: absolute;
  width: 100%;
  height: 4px;
  z-index: 1;
  left: 0;
  right: 0;
  background: #001429;
}
.progress .progressBar {
  position: absolute;
  left: 0;
  height: 100%;
  width: 33%;
  background: #015aff;
  transition: all 0.2s ease-in-out;
  z-index: 1;
}
.progressCounter {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
}
.progressCounterItem span {
  background: #fff;
  padding: 5px 10px;
  border: 3px solid #001429;
  border-radius: 50%;
  color: #001429;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
}
.progressCounterItem.active span {
  background: #015aff;
  border: 3px solid #015aff;
  color: #fff;
}
.pos-r {
  position: relative;
  z-index: 11;
}
@media (min-width: 768px) {
  nav {
    padding: 14px 42px;
  }
  .brandLogos {
    width: 60%;
    margin-right: auto;
  }
}
@media (min-width: 1440px) {
  .brandLogos {
    width: 50%;
  }
}
</style>