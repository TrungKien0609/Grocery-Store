<template>
  <div class="faq-container">
    <div class="header">
      <div class="image">
        <img src="/images/banner/page-header-bg.jpg" alt="page-header" />
      </div>
      <h1 class="page-header">Frequently Asked Questions</h1>
    </div>
    <div class="content">
      <svg-vue icon="faq" class="image" viewBox="100 0 650 650"></svg-vue>
      <div class="questions">
        <Question
          v-for="(item, index) in questions"
          :key="index"
          :question="item"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AskAndAnswer",
  components: {
    Question : () => import('../components/question.vue')
  },
  data() {
    return {
      questions: [
        {
          id: 0,
          name: "How does NeikShop work ?",
          answer:
            "Yes. You can cancel your subscription anytime. Your subscription will continue to be active until the end of your current term (month or year) but it will not auto-renew. Unless you delete your account manually, your account and all data will be deleted 60 days from the day your subscription becomes inactive.",
        },
        {
          id: 1,
          name: "Can I cancel my subscription anytime ?",
          answer:
            "Distinctively initiate error-free channels with highly efficient ROI. Intrinsicly envisioneer world-class data via best-of-breed best practices. Efficiently enable empowered e-tailers after cross-unit services. Uniquely expedite seamless e-tailers via cooperative interfaces. Monotonectally myocardinate customer directed meta-services whereas error-free scenarios.",
        },
        {
          id: 2,
          name: "Whice payment method you should accept ?",
          answer:
            "Holisticly engage sticky niche markets before collaborative collaboration and idea-sharing. Phosfluorescently facilitate parallel applications with unique imperatives. Proactively plagiarize functionalized deliverables via inexpensive solutions. Collaboratively embrace web-enabled infomediaries rather than diverse testing procedures.",
        },
        {
          id: 3,
          name: "What are the benefits of using NeikShop affliate ?",
          answer:
            "Continually impact seamless imperatives for best-of-breed best practices. Phosfluorescently facilitate parallel applications with unique imperatives. Proactively plagiarize functionalized deliverables via inexpensive solutions. Collaboratively embrace web-enabled infomediaries rather than diverse testing procedures.",
        },
        {
          id: 3,
          name: "What are the benefits of using NeikShop affliate ?",
          answer:
            "Continually impact seamless imperatives for best-of-breed best practices. Phosfluorescently facilitate parallel applications with unique imperatives. Proactively plagiarize functionalized deliverables via inexpensive solutions. Collaboratively embrace web-enabled infomediaries rather than diverse testing procedures.",
        },
        {
          id: 3,
          name: "What are the benefits of using NeikShop affliate ?",
          answer:
            "Continually impact seamless imperatives for best-of-breed best practices. Phosfluorescently facilitate parallel applications with unique imperatives. Proactively plagiarize functionalized deliverables via inexpensive solutions. Collaboratively embrace web-enabled infomediaries rather than diverse testing procedures.",
        },
        {
          id: 3,
          name: "What are the benefits of using NeikShop affliate ?",
          answer:
            "Continually impact seamless imperatives for best-of-breed best practices. Phosfluorescently facilitate parallel applications with unique imperatives. Proactively plagiarize functionalized deliverables via inexpensive solutions. Collaboratively embrace web-enabled infomediaries rather than diverse testing procedures.",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.faq-container {
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
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    padding: 3rem 2.5rem;
    @media (max-width: 760px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 600px) {
      padding: 2rem 1rem;
    }
    .image {
      width: 100%;
      height: auto;
    }
  }
}
</style>
