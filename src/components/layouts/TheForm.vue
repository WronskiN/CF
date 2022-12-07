<template>
  <div class="formContainer">
    <form @submit.prevent="">
      <div v-if="activeStep === 1" class="form-step" data-step="1">
        <h1>Get a Better Broadband and WiFi Deal at your Home</h1>
        <h2>What’s your postcode?</h2>
        <p class="postcodeParagraph">
          Enter your postcode and click ‘Continue’.
        </p>
        <div class="btnWrapper">
          <base-input
            type="text"
            name="postcode"
            id="postcode"
            placeholder="eg. SW1A 1AA"
            label=""
            forName=""
            v-model="postcode"
          ></base-input>
          <!-- <input type="text" name="postcode" id="postcode" v-model="postcode" /> -->

          <continue-button
            step="1"
            class="contBtn"
            @click="nextStep"
          ></continue-button>
        </div>
        <p class="formStepBottomDescription">
          Find a better Broadband and WiFi deal in your area. Choose from big
          providers such as TalkTalk, Virgin, Sky and Shell. Unlimited,
          Superfast deals with speeds up to 900mbps. Find out the top speed at
          your address. Enter your postcode and find deals in your area.
        </p>
      </div>

      <div v-if="activeStep === 2" class="form-step" data-step="2">
        <h3>Who provides your current Broadband?</h3>
        <base-options :options="currentBroadband"></base-options>
        <h3>What’s your ideal speed?</h3>
        <base-options :options="broadbandSpeed"></base-options>
        <h3>Which Broadband type do you need?</h3>
        <base-options :options="broadbandType"></base-options>
        <div class="buttonWrapper">
          <back-button @click="prevStep()"></back-button>
          <continue-button
            step="2"
            class="contBtnSecond"
            @click="nextStep()"
          ></continue-button>
        </div>
        <div class="formStepBottom">
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
            <p class="safeSecureText">Safe | Secure | Privacy Protected</p>
          </div>
          <div>
            <img
              src="../../assets/let-s-encrypt-logo.png"
              alt="lets encrypted logo"
              width="80px"
              height="auto"
            />
          </div>
        </div>
      </div>

      <div v-if="activeStep === 3" class="form-step" data-step="3">
        <h3>What is your age?</h3>
        <div class="buttonWrapper">
          <age-option :options="ageOptions"></age-option>
        </div>
        <div class="buttonWrapper">
          <back-button @click="prevStep()"></back-button>
          <continue-button
            step="3"
            class="contBtnSecond none"
            @click="nextStep()"
          ></continue-button>
        </div>
        <div class="formStepBottom">
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
            <p class="safeSecureText">Safe | Secure | Privacy Protected</p>
          </div>
          <div>
            <img
              src="../../assets/let-s-encrypt-logo.png"
              alt="lets encrypted logo"
              width="80px"
              height="auto"
            />
          </div>
        </div>
      </div>
      <div
        class="form-step form-step-result"
        data-step="4"
        style="display: none"
      >
        <div class="resultCard">
          <div class="resultCardTop">
            <div class="resultMessage">
              <span>1</span>We've found you an offer!
            </div>
            <div class="resultCardTopInner">
              <p>Offered by:</p>
              <img
                src="../../assets/talktalk.png"
                alt="talktalk logo"
                width="90px"
                height="auto"
              />
            </div>
          </div>
          <div class="resulCardOfferPackage">
            <img
              src="../../assets/broadband-result.png"
              alt="offer package"
              width="100%"
              height="auto"
              style="border-radius: 5px"
            />
          </div>
          <div class="resultCardPackageDetails">
            <p class="subTitle">Monthly Cost From:</p>
            <p class="price">£17.95</p>
            <p class="subTitle">Features included:</p>
            <ul>
              <li>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.5 15.2373C6.01664 15.2373 4.56659 14.7974 3.33322 13.9733C2.09986 13.1492 1.13857 11.9779 0.570908 10.6074C0.00325078 9.23699 -0.145276 7.72899 0.144113 6.27413C0.433502 4.81927 1.14781 3.4829 2.1967 2.434C3.2456 1.38511 4.58197 0.670805 6.03682 0.381416C7.49168 0.0920273 8.99968 0.24056 10.3701 0.808217C11.7406 1.37587 12.9119 2.33716 13.736 3.57053C14.5601 4.8039 15 6.25395 15 7.73731C15 9.72643 14.2098 11.6341 12.8033 13.0406C11.3968 14.4471 9.48913 15.2373 7.5 15.2373ZM11.8162 5.07689C11.65 4.91079 11.4246 4.81749 11.1896 4.81749C10.9546 4.81749 10.7292 4.91079 10.5629 5.07689L6.23917 9.40064L4.83584 7.9973C4.66999 7.83785 4.44822 7.74981 4.21816 7.75207C3.98811 7.75433 3.76811 7.84672 3.60543 8.0094C3.44275 8.17208 3.35035 8.39208 3.34809 8.62214C3.34583 8.85219 3.43388 9.07395 3.59334 9.2398L5.58125 11.2277C5.76694 11.3887 6.00446 11.4773 6.25021 11.4773C6.49597 11.4773 6.73348 11.3887 6.91917 11.2277L11.8162 6.33064C11.8986 6.24833 11.9639 6.15061 12.0085 6.04305C12.0531 5.93549 12.076 5.8202 12.076 5.70377C12.076 5.58734 12.0531 5.47204 12.0085 5.36448C11.9639 5.25692 11.8986 5.15919 11.8162 5.07689Z"
                    fill="#32CE8D"
                  />
                </svg>
                Unlimited Superfast Broadband
              </li>
              <li>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.5 15.2373C6.01664 15.2373 4.56659 14.7974 3.33322 13.9733C2.09986 13.1492 1.13857 11.9779 0.570908 10.6074C0.00325078 9.23699 -0.145276 7.72899 0.144113 6.27413C0.433502 4.81927 1.14781 3.4829 2.1967 2.434C3.2456 1.38511 4.58197 0.670805 6.03682 0.381416C7.49168 0.0920273 8.99968 0.24056 10.3701 0.808217C11.7406 1.37587 12.9119 2.33716 13.736 3.57053C14.5601 4.8039 15 6.25395 15 7.73731C15 9.72643 14.2098 11.6341 12.8033 13.0406C11.3968 14.4471 9.48913 15.2373 7.5 15.2373ZM11.8162 5.07689C11.65 4.91079 11.4246 4.81749 11.1896 4.81749C10.9546 4.81749 10.7292 4.91079 10.5629 5.07689L6.23917 9.40064L4.83584 7.9973C4.66999 7.83785 4.44822 7.74981 4.21816 7.75207C3.98811 7.75433 3.76811 7.84672 3.60543 8.0094C3.44275 8.17208 3.35035 8.39208 3.34809 8.62214C3.34583 8.85219 3.43388 9.07395 3.59334 9.2398L5.58125 11.2277C5.76694 11.3887 6.00446 11.4773 6.25021 11.4773C6.49597 11.4773 6.73348 11.3887 6.91917 11.2277L11.8162 6.33064C11.8986 6.24833 11.9639 6.15061 12.0085 6.04305C12.0531 5.93549 12.076 5.8202 12.076 5.70377C12.076 5.58734 12.0531 5.47204 12.0085 5.36448C11.9639 5.25692 11.8986 5.15919 11.8162 5.07689Z"
                    fill="#32CE8D"
                  />
                </svg>
                No Price Increases
              </li>
              <li>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.5 15.2373C6.01664 15.2373 4.56659 14.7974 3.33322 13.9733C2.09986 13.1492 1.13857 11.9779 0.570908 10.6074C0.00325078 9.23699 -0.145276 7.72899 0.144113 6.27413C0.433502 4.81927 1.14781 3.4829 2.1967 2.434C3.2456 1.38511 4.58197 0.670805 6.03682 0.381416C7.49168 0.0920273 8.99968 0.24056 10.3701 0.808217C11.7406 1.37587 12.9119 2.33716 13.736 3.57053C14.5601 4.8039 15 6.25395 15 7.73731C15 9.72643 14.2098 11.6341 12.8033 13.0406C11.3968 14.4471 9.48913 15.2373 7.5 15.2373ZM11.8162 5.07689C11.65 4.91079 11.4246 4.81749 11.1896 4.81749C10.9546 4.81749 10.7292 4.91079 10.5629 5.07689L6.23917 9.40064L4.83584 7.9973C4.66999 7.83785 4.44822 7.74981 4.21816 7.75207C3.98811 7.75433 3.76811 7.84672 3.60543 8.0094C3.44275 8.17208 3.35035 8.39208 3.34809 8.62214C3.34583 8.85219 3.43388 9.07395 3.59334 9.2398L5.58125 11.2277C5.76694 11.3887 6.00446 11.4773 6.25021 11.4773C6.49597 11.4773 6.73348 11.3887 6.91917 11.2277L11.8162 6.33064C11.8986 6.24833 11.9639 6.15061 12.0085 6.04305C12.0531 5.93549 12.076 5.8202 12.076 5.70377C12.076 5.58734 12.0531 5.47204 12.0085 5.36448C11.9639 5.25692 11.8986 5.15919 11.8162 5.07689Z"
                    fill="#32CE8D"
                  />
                </svg>
                <p>
                  <span>Amazon Echo Dot</span> and
                  <span>Amazon Smart Plug</span> Included on selected deals
                </p>
              </li>
            </ul>
            <a class="findOutMoreLink" href="">Find Out More</a>
          </div>
        </div>
        <div class="btnWrapper">
          <base-input
            type="text"
            name="First Name"
            id="first-name"
            placeholder="First Name"
            label="First Name"
            forName="First Name"
          ></base-input>
          <base-input
            type="text"
            name="Last Name"
            id="last-name"
            placeholder="Last Name"
            label="Last Name"
            forName="Last Name"
          ></base-input>
          <base-input
            type="tel"
            name="Telephone"
            id="telephone"
            placeholder="Telephone"
            label="Telephone"
            forName="Telephone"
          ></base-input>
          <base-input
            type="email"
            name="Email"
            id="email"
            placeholder="Email"
            label="Email"
            forName="Email"
          ></base-input>
          <div class="formCheckboxWrapper">
            <input
              class="signupInput"
              type="checkbox"
              name="signup"
              id="signup"
            />
            <label class="signupLabel" for="signup"
              >If you would like to receive the best deals on Broadband and
              other offers from CF-Broadband.com, please tick this box.</label
            >
          </div>
          <continue-button
            step="4"
            class="contBtn"
            style="width: 100%"
          ></continue-button>
          <p class="privacyPolicyDesc">
            By clicking “Continue”, you agree to our Privacy Policy and to be
            contacted by phone, email and SMS by a Broadband Advisor
          </p>
          <back-button></back-button>
          <div class="formStepBottom">
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
              <p class="safeSecureText">Safe | Secure | Privacy Protected</p>
            </div>
            <div>
              <img
                src="../../assets/let-s-encrypt-logo.png"
                alt="lets encrypted logo"
                width="80px"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="loadingView" style="display: none">
      <div class="loadingViewInner">
        <div class="dot1"></div>
        <div class="dot2"></div>
        <div class="dot3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const postcode = ref("");

export default {
  data() {
    return {
      step: 1,
      activeStep: 1,
      // postcode = "",
      currentBroadband: [
        { name: "Sky", id: "sky" },
        { name: "BT", id: "bt" },
        { name: "EE", id: "ee" },
        { name: "Virgin Media", id: "virgin-media" },
        { name: "Other", id: "other" },
        { name: "Dont have one", id: "dont-have-one" },
      ],
      broadbandSpeed: [
        { name: "0 - 30 mbps", id: "0-30mbps" },
        { name: "30 - 60 mbps", id: "30-60mbps" },
        { name: "60 mbps +", id: "over60mbps" },
      ],
      broadbandType: [
        { name: "Fibre", id: "fibre" },
        { name: "Standard", id: "standard" },
        { name: "Not Sure", id: "notsure" },
      ],
      ageOptions: [
        { age: "18-24", id: "18-24" },
        { age: "25-34", id: "25-34" },
        { age: "35-44", id: "35-44" },
        { age: "45-54", id: "45-54" },
        { age: "55-64", id: "55-64" },
        { age: "65+", id: "65" },
      ],
    };
  },
  methods: {
    nextStep() {
      this.step++;
      this.activeStep++;
      // this.postcode = this.postcode;
      console.log(this.activeStep);
      console.log(postcode);
    },
    prevStep() {
      this.step--;
      this.activeStep--;
      console.log(this.activeStep);
    },
  },
};
</script>

<style scoped>
.resultCardTopInner {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 5px;
}
.resultCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 20px 20px;
  gap: 7px;
  width: 343px;
  background: #ffffff;
  border-radius: 10px;
  margin: 1rem auto 2rem;
  box-shadow: 0px 4px 16px #cccccc;
  position: relative;
}
.resultCard .subTitle {
  color: #637381;
  font-size: 14px;
  margin-bottom: 0;
}
.resultCard .price {
  color: #015aff;
  font-size: 64px;
  font-weight: 700;
}
.resultMessage {
  width: 85%;
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  font-size: 16px;
  text-align: center;
  color: white;
  background: #216cf6;
  border-radius: 25px;
  font-weight: 700;
  letter-spacing: 1px;
}
.resultMessage span {
  margin-right: 0.5rem;
  color: #8ee69d;
  font-size: 20px;
}
.resultCard p {
  color: #637381;
  font-size: 14px;
}
.resultCard ul {
  list-style: none;
  margin-top: 1rem;
}
.resultCard ul li {
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
  color: #001429;
  display: flex;
}
.resultCard ul li p {
  width: 90%;
  color: #001429;
  line-height: 21px;
  font-weight: 400;
  font-size: 16px;
}
.resultCard ul li svg {
  margin-right: 0.5rem;
}
.resultCard ul li span {
  font-weight: 700;
}
.formContainer {
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 10px 16px;
  min-height: calc(100vh - 280px);
}
p {
  margin-bottom: 0.5rem;
}
.formStepBottomDescription {
  font-size: 12px;
  margin-top: 1.5rem;
  color: #637381;
}
.buttonWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 343px;
}
.contBtn {
  width: 100%;
  margin-top: 1rem;
}
.backButton {
  height: 56px;
  margin-top: 1rem;
}
.contBtnSecond {
  margin-top: 1rem;
}
.contBtnSecond.none {
  display: none;
}
.btnWrapper {
  max-width: 343px;
}
.postcodeParagraph {
  margin: 15px 0;
}
.form-step h3 {
  margin: 1rem 0;
}
.formStepBottom {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.safeSecure {
  display: flex;
}
.safeSecure p {
  margin-bottom: 0;
}
.safeSecureText {
  font-size: 10px;
  margin-left: 0.5rem;
}
.form-step-result .btnWrapper {
  margin: 0 auto;
}
.formCheckboxWrapper {
  display: flex;
}
.signupLabel {
  padding-left: 0.5rem;
  display: block;
  width: 90%;
  font-size: 12px;
  line-height: 21px;
}
.signupInput {
  border: 2px solid #216cf6 !important;
  border-radius: 5px;
  cursor: pointer;
  outline: 2px solid #216cf6;
  outline-style: auto;
  width: 24px;
  height: 24px;
}
.signupInput:active,
.signupInput:focus,
.signupInput:hover {
  border: 2px solid #216cf6 !important;
  border-radius: 5px;
  outline: 2px solid #216cf6;
  outline-style: auto;
}
.privacyPolicyDesc {
  font-size: 12px;
  line-height: 21px;
  margin-top: 1rem;
  text-align: center;
}
@media (min-width: 768px) {
  .formStepBottomDescription {
    font-size: 14px;
    width: 75%;
    line-height: 24px;
  }
  .contBtn {
    width: auto;
    margin-left: auto;
    margin-right: 1rem;
    margin-top: 1.5rem;
  }
  .contBtnSecond {
    margin-top: 1rem;
    margin-top: 1.5rem;
    margin-right: 1rem;
  }
  .backButton {
    height: 56px;
    margin-top: 1.5rem;
  }
  .form-step h1 {
    width: 80%;
  }
  .safeSecureText {
    font-size: 12px;
  }

  .loadingView {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(310.31deg, #dbe8ff 3.6%, #f9fafb 37.88%),
      #f9fafb;
    z-index: 10;
  }
  .loadingViewInner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .resultCardPackageDetails .findOutMoreLink {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 56px;
    background: #f25a38;
    border-radius: 100px;
    font-weight: 700;
    line-height: 32px;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
  }
  .resultCardPackageDetails .findOutMoreLink:hover {
    background: #eb350c;
  }

  @keyframes ScaleInOut {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    25% {
      transform: scale(0.9);
      opacity: 1;
    }
    50% {
      transform: scale(0.8);
      opacity: 0.6;
    }
    75% {
      transform: scale(0.7);
      opacity: 0.4;
    }
    100% {
      transform: scale(0.6);
      opacity: 0.4;
    }
  }
  .dot1,
  .dot2,
  .dot3 {
    width: 15px;
    height: 15px;
    background: #216cf6;
    border: none;
    border-radius: 50%;
    margin: 0 0.2rem;
    transition: all 0.8s ease-in-out;
    animation-direction: reverse;
  }
  .dot1 {
    animation: ScaleInOut 1s ease-in-out 0.2s infinite alternate;
  }
  .dot2 {
    animation: ScaleInOut 1s ease-in-out 0.6s infinite alternate;
  }
  .dot3 {
    animation: ScaleInOut 1s ease-in-out 0.8s infinite alternate;
  }
}
</style>