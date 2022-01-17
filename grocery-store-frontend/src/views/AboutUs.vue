<template>
  <div class="about-us-container">
    <div class="header">
      <div class="image">
        <img
          src="@/assets/images/banner/page-header-bg.jpg"
          alt="page-header"
        />
      </div>
      <h1 class="page-header">About Us</h1>
    </div>
    <div class="section">
      <h1 class="title">Welcome to our NeikShop</h1>
      <div class="content">
        <div class="article">
          <p>
            Holisticly seize parallel metrics and functional ROI. Seamlessly
            revolutionize error-free internal or "organic" sources before
            effective scenarios. Progressively incentivize state of the art
            applications for efficient intellectual capital. Credibly leverage
            existing distinctive mindshare through cutting-edge schemas.
            Proactively procrastinate team building paradigms coordinate
            client-centric total transparent internal.
          </p>
          <p>
            Dynamically embrace diverse customer service and installed base
            paradigms. Credibly seize enterprise-wide experiences for end-to-end
            data. Professionally brand flexible alignments and cost effective
            architectures. Enthusiastically incentivize seamless communities
            with seamlessly facilitate revolutionary metrics with strategic
            theme areas.
          </p>
          <div class="data">
            <div>
              <h1>10K</h1>
              <b>Listed Products</b>
              <p>Dynamically morph team driven partnerships after vertical.</p>
            </div>
            <div>
              <h1>8K</h1>
              <b>Lovely Customer</b>
              <p>Competently productize virtual models without performance.</p>
            </div>
          </div>
        </div>
        <div class="image">
          <img src="@/assets/images/banner/about-us.jpg" alt="about-us" />
        </div>
      </div>
      <article>
        <p>
          Holisticly seize parallel metrics and functional ROI. Seamlessly
          revolutionize error-free internal or "organic" sources before
          effective scenarios. Progressively incentivize state of the art
          applications for efficient intellectual capital. Credibly leverage
          existing distinctive mindshare through cutting-edge schemas.
          Proactively procrastinate team building paradigms coordinate
          client-centric total transparent internal. Energistically
          reconceptualize global leadership for high-quality networks. Credibly
          restore an expanded array of systems rather than accurate results.
          Collaboratively synergize backend bandwidth without 24/7
          functionalities. Credibly utilize proactive ideas whereas cross-media
          core competencies. Uniquely maximize professional best practices
          through resource maximizing services. Conveniently architect
          cross-unit web services for e-business imperatives.
        </p>
        <p>
          Appropriately visualize market-driven data before one-to-one
          scenarios. Collaboratively productize multifunctional ROI through
          intuitive supply chains. Enthusiastically seize revolutionary value
          and process-centric services. Competently harness intuitive
          information after interoperable markets. Interactively revolutionize
          future-proof value before granular sources. Dynamically embrace
          diverse customer service and installed base paradigms. Credibly seize
          enterprise-wide experiences for end-to-end data. Professionally brand
          flexible alignments and cost effective architectures. Enthusiastically
          incentivize seamless communities with seamlessly facilitate
          revolutionary metrics with strategic theme areas.
        </p>
      </article>
      <div class="image">
        <img src="@/assets/images/banner/about-banner.jpg" alt="about-banner" />
      </div>
    </div>
    <div class="partner">
      <h1 class="title">Our Founder</h1>
      <p>
        We’re impartial and independent, and every day we create distinctive,
        world-class reintermediate backend supply programmes.
      </p>
      <div class="partner-info">
        <div class="every">
          <div class="image">
            <img src="@/assets/images/founders/team-1.jpg" alt="Trung Kien" />
          </div>
          <h3 class="name">Trung Kien</h3>
          <p class="level">Co-founder & Executive</p>
        </div>
        <div class="every">
          <div class="image">
            <img src="@/assets/images/founders/team-2.jpg" alt="Trung Kien" />
          </div>
          <h3 class="name">Orla Dwyer</h3>
          <p class="level">Chief Executive</p>
        </div>
        <div class="every">
          <div class="image">
            <img src="@/assets/images/founders/team-3.jpg" alt="Trung Kien" />
          </div>
          <h3 class="name">Dara Frazier</h3>
          <p class="level">Chief Strategy Officer</p>
        </div>
        <div class="every">
          <div class="image">
            <img src="@/assets/images/founders/team-4.jpg" alt="Trung Kien" />
          </div>
          <h3 class="name">Glenda Arvidson</h3>
          <p class="level">HR Officer</p>
        </div>
        <div class="every">
          <div class="image">
            <img src="@/assets/images/founders/team-5.jpg" alt="Trung Kien" />
          </div>
          <h3 class="name">Melvin Davis</h3>
          <p class="level">Lead Developer</p>
        </div>
        <div class="every">
          <div class="image">
            <img src="@/assets/images/founders/team-6.jpg" alt="Trung Kien" />
          </div>
          <h3 class="name">Niamh Shea</h3>
          <p class="level">Co-founder, Chairman</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>
<style lang="scss" scoped>
.about-us-container {
  .title {
    font-family: sans-serif;
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 0.5rem;
    @media (max-width: 1024px) {
      font-size: 1.25rem;
    }
  }
  p {
    color: #000;
    line-height: 1.65rem;
    margin-bottom: 1rem;
  }
  .image {
    border-radius: 10px;
    overflow: hidden;
  }
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
  .section {
    padding: 4rem 2.5rem;
    @media (max-width: 1024px) {
      padding: 2rem 2.5rem;
    }
    @media (max-width: 640px) {
      padding: 2rem 1rem;
    }
    .content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 3.25rem;
      @media (max-width: 1024px) {
        grid-template-columns: repeat(1, 1fr);
      }
      .article {
        .data {
          display: flex;
          justify-content: space-between;
          gap: 1.5rem;
          @media (max-width: 760px) {
            flex-direction: column;
          }
          div {
            padding: 2rem 1.5rem;
            background-color: rgba(238, 242, 255, 1);
            border-radius: 10px;
            h1 {
              color: rgba(31, 41, 55, 1);
              font-weight: 800;
              font-size: 1.875rem;
              line-height: 2.25rem;
              font-family: sans-serif;
              margin-bottom: 1rem;
            }
            b {
              font-weight: 700;
              font-family: sans-serif;
              font-size: 1.125rem;
              line-height: 1.75rem;
            }
            p {
              color: #000;
              line-height: 1.75rem;
            }
          }
        }
      }
    }
    article {
      margin: 3rem 0;
    }
  }
  .partner {
    background-color: rgba(249, 250, 251, 1);
    padding: 3rem 2.5rem;
    @media (max-width: 600px) {
      padding: 2rem 1rem;
    }
    p {
      width: 50%;
      @media (max-width: 1024px) {
        width: 90%;
      }
    }
    .partner-info {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 1.5rem;
      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
      }
      .name {
        font-family: sans-serif;
        font-weight: 600;
        font-size: 1rem;
        margin-top: 1.5rem;
      }
      .level {
        width: 100%;
        font-size: 0.9rem;
      }
    }
  }
}
</style>
