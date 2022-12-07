<template>
  <footer>
    <div class="container">
      <div class="footer-about">
        <p>
          CF-Broadband.com is a trading name of Client Flo Media Limited.<br />
          Registered Office Address - 5-9 Main Street, GX11 1AA. Company Number
          120004.
        </p>
      </div>
      <div class="footer-terms">
        <div>
          <a href="#">Terms</a>
          <a href="#">Privacy Policy</a>
        </div>
        <p>Copyright © 2022 <a href="#">CF-Broadband.com</a></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  max-width: 1024px;
  height: 125px;
  padding: 10px 16px;
  background: #fff;
  margin: 0 auto;
}
.container {
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
footer p {
  text-align: left;
  color: #001429;
  font-size: 10px;
  line-height: 21px;
}
.footer-about > p {
  margin: 0;
}
footer a {
  color: #001429;
  font-size: 10px;
  line-height: 21px;
  text-transform: none;
  text-decoration: none;
}
.footer-terms {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;
}
.footer-terms > div {
  order: 2;
  display: flex;
  align-items: center;
}
.footer-terms > p {
  order: 1;
}
.footer-terms > div > a:first-child {
  margin-right: 0.5rem;
}

@media (min-width: 768px) {
  .container {
    flex-wrap: nowrap;
  }
  footer p,
  footer a {
    font-size: 12px;
  }
  footer {
    height: 70px;
  }
  .footer-terms > p {
    order: 2;
    margin: 0;
  }
  .footer-terms {
    width: 50%;
    justify-content: end;
  }
  .footer-terms > div {
    width: 100%;
    justify-content: end;
    align-items: flex-start;
    order: 1;
  }
}
</style>