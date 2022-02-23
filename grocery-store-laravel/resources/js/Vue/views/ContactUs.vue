<template>
  <div class="contact-us-container">
    <div class="header">
      <div class="image">
        <img src="/images/banner/page-header-bg.jpg" alt="page-header" />
      </div>
      <h1 class="page-header">Contact Us</h1>
    </div>
    <div class="contact-info">
      <div class="detail">
        <svg-vue icon="email" class="dark-icon"></svg-vue>
        <h3 class="title">Email Us</h3>
        <p class="description">
          <span>Trungkien7300@gmail.com</span> Interactively grow empowered for
          process-centric total linkage
        </p>
      </div>
      <div class="detail">
        <svg-vue icon="phone-ringing" class="dark-icon rotate"></svg-vue>
        <h3 class="title">Call Us</h3>
        <p class="description">
          <span>0399610609</span> Distinctively disseminate focused solutions
          clicks-and-mortar ministate.
        </p>
      </div>
      <div class="detail">
        <svg-vue icon="location" class="dark-icon"></svg-vue>
        <h3 class="title">Location</h3>
        <p class="description">TP.Đà Nẵng, Việt Nam</p>
      </div>
    </div>
    <div class="support">
      <div class="image">
        <img src="/images/banner/contact-us.png" alt="contact-us" />
      </div>
      <div class="form">
        <h2 class="title">For any support just send your query</h2>
        <p class="description">
          Collaboratively promote client-focused convergence vis-a-vis customer
          directed alignments via plagiarize strategic users and standardized
          infrastructures.
        </p>
        <form action="#">
          <div class="block1">
            <label
              >Your Name <input type="text" placeholder="Enter Your Name"
            /></label>
            <label
              >Your Email <input type="text" placeholder="Enter Your Email"
            /></label>
          </div>
          <label
            >Subject <input type="text" placeholder="Enter Your Subject"
          /></label>
          <label
            >Message
            <textarea
              rows="5"
              placeholder="Wirte your message here"
              ref="message"
            ></textarea>
          </label>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>
<style lang="scss" scoped>
.contact-us-container {
  .header {
    position: relative;
    width: 100%;
    background-color: #fff;
    max-height: 200px;
    overflow: hidden;
    .image {
      width: 100%;
    }
    .page-header {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: sans-serif;
      font-size: 2.25rem;
      @media (max-width: 1024px) {
        font-size: 1.875rem;
      }
      @media (max-width: 760px) {
        font-size: 1.25rem;
      }
    }
  }
  .contact-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    padding: 4rem 2.5rem;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      padding: 2rem 2.5rem;
    }
    @media (max-width: 760px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 600px) {
      padding: 2rem 1rem;
    }
    .detail {
      display: flex;
      align-items: center;
      flex-direction: column;
      border: 1px solid #eee;
      border-radius: 7px;
      padding: 2rem 0;
      .dark-icon {
        width: 35px;
        height: auto;
        &.rotate {
          transform: rotate(90deg);
        }
        ::v-deep path {
          fill: #10b981;
        }
      }
      .title {
        font-family: sans-serif;
        font-weight: 600;
        line-height: 2.25rem;
        margin: 0.5rem 0;
      }
      .description {
        width: 85%;
        font-size: 1rem;
        text-align: center;
        color: #000;
        span {
          color: #10b981;
          cursor: pointer;
          font-weight: 500;
        }
      }
    }
  }
  .support {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    padding: 2.5rem;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 600px) {
      padding: 2.5rem 1rem;
    }
    .image {
      @media (max-width: 1024px) {
        display: none;
      }
    }
    .form {
      .title {
        font-family: sans-serif;
        font-weight: 600;
        font-size: 1.875rem;
        @media (max-width: 1024px) {
          font-size: 1.5rem;
        }
        @media (max-width: 760px) {
          font-size: 1.25rem;
        }
        width: 90%;
        line-height: 2.25rem;
      }
      .description {
        margin: 1rem 0;
        width: 85%;
        font-size: 1rem;
        color: #4b5563;
      }
      form {
        margin: 3rem 0;
        @media (max-width: 1024px) {
          margin: 0;
        }
        label {
          display: block;
          width: 100%;
          color: #4b5563;
          line-height: 2rem;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }
        input,
        textarea {
          display: block;
          width: 100%;
          border: 1px solid #eee;
          border-radius: 5px;
          padding: 0.8rem 1.2rem;
          transition: 0.25s;
          &:focus {
            border-color: #10b981;
          }
          &::placeholder {
            color: #bbb;
            opacity: 1;
          }
        }
        button {
          color: #fff;
          background-color: #10b981;
          font-family: sans-serif;
          font-weight: 600;
          padding: 1rem 2rem;
          font-size: 1rem;
          border-radius: 5px;
          margin-top: 2rem;
          transition: 0.25s;
          cursor: pointer;
          &:hover {
            background-color: rgba(5, 150, 105, 1);
          }
        }
        .block1 {
          display: flex;
          gap: 1.5rem;
          @media (max-width: 760px) {
            flex-direction: column;
            gap: 0;
          }
        }
      }
    }
  }
}
</style>
