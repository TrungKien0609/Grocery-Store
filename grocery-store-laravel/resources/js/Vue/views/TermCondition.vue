<template>
  <div class="term-condition-container">
    <div class="header">
      <div class="image">
        <img
          src="/images/banner/page-header-bg.jpg"
          alt="page-header"
        />
      </div>
      <h1 class="page-header">Term & Conditions</h1>
    </div>
    <div class="content">
      <h1 class="title">Welcome to Neik Shop!</h1>
      <p>
        These terms and conditions outline the rules and regulations for the use
        of Neik's Website, located at https://neik.com/. By
        accessing this website we assume you accept these terms and conditions.
        Do not continue to use Neik Store if you do not agree to take all of the
        terms and conditions stated on this page.
      </p>
      <p>
        The following terminology applies to these Terms and Conditions, Privacy
        Statement and Disclaimer Notice and all Agreements: "Client", "You" and
        "Your" refers to you, the person log on this website and compliant to
        the Company’s terms and conditions. "The Company", "Ourselves", "We",
        "Our" and "Us", refers to our Company. "Party", "Parties", or "Us",
        refers to both the Client and ourselves. All terms refer to the offer,
        acceptance and consideration of payment necessary to undertake the
        process of our assistance to the Client in the most appropriate manner
        for the express purpose of meeting the Client’s needs in respect of
        provision of the Company’s stated services, in accordance with and
        subject to, prevailing law of Netherlands. Any use of the above
        terminology or other words in the singular, plural, capitalization
        and/or he/she or they, are taken as interchangeable and therefore as
        referring to same.
      </p>
      <h1 class="title">Cookies</h1>
      <p>
        We employ the use of cookies. By accessing Neik, you agreed to use
        cookies in agreement with the Neik's Privacy Policy. Most
        interactive websites use cookies to let us retrieve the user’s details
        for each visit. Cookies are used by our website to enable the
        functionality of certain areas to make it easier for people visiting our
        website. Some of our affiliate/advertising partners may also use
        cookies.
      </p>
      <h1 class="title">License</h1>
      <p>
        Unless otherwise stated, Neik and/or its licensors own the
        intellectual property rights for all material on Neik. All
        intellectual property rights are reserved. You may access this from
        Neik for your own personal use subjected to restrictions set in
        these terms and conditions.This Agreement shall begin on the date
        hereof. Our Terms and Conditions were created with the help of the Terms
        And Conditions Generator.
      </p>
      <div class="warning">You must not:</div>
      <p>
        1. Identifiers (e.g. name, mailing address, email address, phone number,
        credit/debit card number)
      </p>
      <p>2. Characteristics of protected classifications (e.g. gender, age)</p>
      <p>
        3. Commercial information (e.g. products or services purchased, purchase
        history)
      </p>
      <p>
        4. Internet or other electronic network activity (e.g. browse or search
        history)
      </p>
      <p>5. Geo location data (e.g. latitude or longitude)</p>
      <p>
        6. Audio, electronic, visual, or similar information (e.g. recording of
        Guest service calls)
      </p>
      <p>
        7. Inferences drawn from any of the above (e.g. preferences or
        characteristics)
      </p>
      <p>
        Parts of this website offer an opportunity for users to post and
        exchange opinions and information in certain areas of the website.
        Neik does not filter, edit, publish or review Comments prior to
        their presence on the website. Comments do not reflect the views and
        opinions of Neik,its agents and/or affiliates. Comments reflect
        the views and opinions of the person who post their views and opinions.
        To the extent permitted by applicable laws, Neik shall not be
        liable for the Comments or for any liability, damages or expenses caused
        and/or suffered as a result of any use of and/or posting of and/or
        appearance of the Comments on this website.
      </p>
      <h1 class="title">Content Liability</h1>
      <p>
        We shall not be hold responsible for any content that appears on your
        Website. You agree to protect and defend us against all claims that is
        rising on your Website. No link(s) should appear on any Website that may
        be interpreted as libelous, obscene or criminal, or which infringes,
        otherwise violates, or advocates the infringement or other violation of,
        any third party rights.Without prior approval and written permission,
        you may not create frames around our Webpages that alter in any way the
        visual presentation or appearance of our Website.
      </p>
      <h1 class="title">Your Privacy</h1>
      <p>
        Please read
        <router-link :to="{ name: 'PrivacyPolicy' }" style="color: #10b981">
          Privacy Policy
        </router-link>
      </p>
      <h1 class="title">Reservation of Rights</h1>
      <p>
        We reserve the right to request that you remove all links or any
        particular link to our Website. You approve to immediately remove all
        links to our Website upon request. We also reserve the right to amen
        these terms and conditions and it’s linking policy at any time. By
        continuously linking to our Website, you agree to be bound to and follow
        these linking terms and conditions.
      </p>
      <h1 class="title">Removal of links from our website</h1>
      <p>
        If you find any link on our Website that is offensive for any reason,
        you are free to contact and inform us any moment. We will consider
        requests to remove links but we are not obligated to or so or to respond
        to you directly. We do not ensure that the information on this website
        is correct, we do not warrant its completeness or accuracy; nor do we
        promise to ensure that the website remains available or that the
        material on the website is kept up to date.
      </p>
      <h1 class="title">Disclaimer</h1>
      <p>
        To the maximum extent permitted by applicable law, we exclude all
        representations, warranties and conditions relating to our website and
        the use of this website. Nothing in this disclaimer will:
      </p>
      <p>
        1. limit or exclude our or your liability for death or personal injury;
      </p>
      <p>
        2. limit or exclude our or your liability for fraud or fraudulent
        misrepresentation;
      </p>
      <p>
        3. limit any of our or your liabilities in any way that is not permitted
        under applicable law; or
      </p>
      <p>
        4. exclude any of our or your liabilities that may not be excluded under
        applicable law.
      </p>
      <p>
        The limitations and prohibitions of liability set in this Section and
        elsewhere in this disclaimer: (a) are subject to the preceding
        paragraph; and (b) govern all liabilities arising under the disclaimer,
        including liabilities arising in contract, in tort and for breach of
        statutory duty. As long as the website and the information and services
        on the website are provided free of charge, we will not be liable for
        any loss or damage of any nature.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TermConditions",
};
</script>
<style lang="scss" scoped>
.term-condition-container {
  .title,
  .warning {
    font-family: sans-serif;
    font-size: 1.5rem;
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
    padding: 3rem 2.5rem;
    @media (max-width: 600px) {
      padding: 2rem 1rem;
    }
    .warning {
      font-size: 1.125rem;
      font-weight: 600;
    }
  }
}
</style>
