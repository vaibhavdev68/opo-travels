'use client';

import { useState } from 'react';

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'cookies', title: 'Cookies' },
    { id: 'license', title: 'License' },
    { id: 'hyperlinking', title: 'Hyperlinking to our Content' },
    { id: 'iframes', title: 'iFrames' },
    { id: 'content-liability', title: 'Content Liability' },
    { id: 'privacy', title: 'Your Privacy' },
    { id: 'reservation', title: 'Reservation of Rights' },
    { id: 'removal', title: 'Removal of links from our website' },
    { id: 'disclaimer', title: 'Disclaimer' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-8 bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 mb-4">
                  Welcome to opo travel!
                </p>
                <p className="text-gray-700 mb-4">
                  These terms and conditions outline the rules and regulations for the use of opo travel's Website, located at https://opo-travels.vercel.app/.
                </p>
                <p className="text-gray-700 mb-4">
                  By accessing this website we assume you accept these terms and conditions. Do not continue to use opo travel if you do not agree to take all of the terms and conditions stated on this page.
                </p>
                <p className="text-gray-700">
                  The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                </p>
              </div>

              {/* Cookies Section */}
              <section id="cookies" className="mb-8 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We employ the use of cookies. By accessing opo travel, you agreed to use cookies in agreement with the opo travel's Privacy Policy.
                </p>
                <p className="text-gray-700">
                  Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                </p>
              </section>

              {/* License Section */}
              <section id="license" className="mb-8 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">License</h2>
                <p className="text-gray-700 mb-4">
                  Unless otherwise stated, opo travel and/or its licensors own the intellectual property rights for all material on opo travel. All intellectual property rights are reserved. You may access this from opo travel for your own personal use subjected to restrictions set in these terms and conditions.
                </p>
                
                <p className="text-gray-700 mb-4">You must not:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Republish material from opo travel</li>
                  <li>Sell, rent or sub-license material from opo travel</li>
                  <li>Reproduce, duplicate or copy material from opo travel</li>
                  <li>Redistribute content from opo travel</li>
                </ul>

                <p className="text-gray-700 mb-4">
                  This Agreement shall begin on the date hereof.
                </p>

                <p className="text-gray-700 mb-4">
                  Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. opo travel does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of opo travel, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, opo travel shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                </p>

                <p className="text-gray-700 mb-4">
                  opo travel reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
                </p>

                <p className="text-gray-700 mb-4">You warrant and represent that:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                  <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                  <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                  <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                </ul>

                <p className="text-gray-700">
                  You hereby grant opo travel a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
                </p>
              </section>

              {/* Hyperlinking Section */}
              <section id="hyperlinking" className="mb-8 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hyperlinking to our Content</h2>
                <p className="text-gray-700 mb-4">
                  The following organizations may link to our Website without prior written approval:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Government agencies;</li>
                  <li>Search engines;</li>
                  <li>News organizations;</li>
                  <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                  <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                </ul>

                <p className="text-gray-700 mb-4">
                  These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
                </p>

                <p className="text-gray-700 mb-4">
                  We may consider and approve other link requests from the following types of organizations:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>commonly-known consumer and/or business information sources;</li>
                  <li>dot.com community sites;</li>
                  <li>associations or other groups representing charities;</li>
                  <li>online directory distributors;</li>
                  <li>internet portals;</li>
                  <li>accounting, law and consulting firms; and</li>
                  <li>educational institutions and trade associations.</li>
                </ul>

                <p className="text-gray-700 mb-4">
                  We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of opo travel; and (d) the link is in the context of general resource information.
                </p>

                <p className="text-gray-700 mb-4">
                  These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.
                </p>

                <p className="text-gray-700 mb-4">
                  If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to opo travel. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                </p>

                <p className="text-gray-700 mb-4">Approved organizations may hyperlink to our Website as follows:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>By use of our corporate name; or</li>
                  <li>By use of the uniform resource locator being linked to; or</li>
                  <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</li>
                </ul>

                <p className="text-gray-700">
                  No use of opo travel's logo or other artwork will be allowed for linking absent a trademark license agreement.
                </p>
              </section>

              {/* iFrames Section */}
              <section id="iframes" className="mb-8 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">iFrames</h2>
                <p className="text-gray-700">
                  Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                </p>
              </section>

              {/* Content Liability Section */}
              <section id="content-liability" className="mb-8 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Liability</h2>
                <p className="text-gray-700">
                  We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                </p>
              </section>

              {/* Privacy Section */}
              <section id="privacy" className="mb-8 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy</h2>
                <p className="text-gray-700">
                  Please read our Privacy Policy
                </p>
              </section>

              {/* Reservation of Rights Section */}
              <section id="reservation" className="mb-8 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Reservation of Rights</h2>
                <p className="text-gray-700">
                  We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                </p>
              </section>

              {/* Removal Section */}
              <section id="removal" className="mb-8 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Removal of links from our website</h2>
                <p className="text-gray-700 mb-4">
                  If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                </p>
                <p className="text-gray-700">
                  We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                </p>
              </section>

              {/* Disclaimer Section */}
              <section id="disclaimer" className="mb-8 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
                <p className="text-gray-700 mb-4">
                  To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>limit or exclude our or your liability for death or personal injury;</li>
                  <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                  <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                  <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                </ul>

                <p className="text-gray-700 mb-4">
                  The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
                </p>

                <p className="text-gray-700">
                  As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}