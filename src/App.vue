<template>
  <div id="app">
    <GlobalHeader></GlobalHeader>
    <router-view :client="client" :experience="experience" :skill="skill"/>
    <GlobalFooter></GlobalFooter>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GlobalHeader from "@/components/general/GlobalHeader.vue";
import GlobalFooter from "@/components/general/GlobalFooter.vue";
export default Vue.extend({
  name: "home",
  components: {
    GlobalHeader,
    GlobalFooter
  },
  data() {
    return {
      name: "Fredrik Aronsson",
      client: {
        "kaspersky-lab": {
          meta: {
            title: "Kaspersky Lab",
            description:
              "Working remotely managing and maintaining 40+ multi-regional websites and executing web content."
          },
          jumbotron: {
            scroll: true,
            overlay: true,
            classes: "frontpage",
            teaser: {
              heading: "Kaspersky Lab",
              subHeading: "Remotely as Front-End Developer"
            }
          },
          projects: {
            "next-generation-website": {
              meta: {
                title: "Next-Gen Website @ Kaspersky Lab",
                description:
                  "Preperation and execution of the next generation website. A/B‐testing a new potential design & developing a buyblock by using backbone.js as framework."
              },
              homepage: true,
              client: true,
              teaser: {
                title: "Next Generation Website",
                desc:
                  "A new era has come, the development of a responsive e-commerce website, A/B-testing design ideas and building new buyblock with wider range of pack-options",
                img: require("@/assets/img/next-gen-kaspersky-antivirus.png"),
                alt: "test",
                button: {
                  href: "/kaspersky-lab/next-generation-website"
                }
              },
              jumbotron: {
                scroll: true,
                overlay: true,
                image: require("@/assets/img/page-header/case-next-generation-website.jpg"),
                classes: "frontpage",
                teaser: {
                  heading: "Next Generation website",
                  subHeading: "The transition from 65 local sites into 18."
                }
              },
              sections: [
                {
                  title: "A/B-testing Licence Renewal",
                  paragraph: [
                    "Developing a new design for our Licence Renewal section & A/B testing it against the current design of Licence Renewal Center. The users were seperated to between different version by redirections.",
                    "The design was later introduced in the Next-Generation website with an improved compare table."
                  ],
                  img: {
                    path: require("@/assets/img/next-gen-lrc-ab-test.png"),
                    alt: "A/B-testing new design"
                  },
                  button: {
                    href: "https://www.kaspersky.com/renewal-center/home",
                    target: "_blank"
                  }
                },
                {
                  title: "Building buyblock",
                  paragraph: [
                    "Buyblock was developed to handle a wider range of pack-options for our Small to Medium Business products. The buyblock allowed the user to key-up to buy a specific amount or entering a number manually. This as dropdown or radio would not be a valid option.",
                    "The buyblock was later on moved and used on our Next Generation website, and is now used as a standard on our Small Businesses products."
                  ],
                  img: {
                    path: require("@/assets/img/next-generation-smb-buyblock.png"),
                    alt: "Buyblock for small businesses"
                  },
                  button: {
                    href:
                      "https://www.kaspersky.com/business-security/small-business",
                    target: "_blank"
                  }
                },
                {
                  title: "Executing Business-to-Customer Section",
                  paragraph: [
                    "My main task was to manage and develop the Business-to-Customer section. Creating anything from product pages, product-overview, download pages and the logic behind the help-me-choose-tool.",
                    "Responsibility for a standardized and ease-of-use CMS structure on Business-to-Customer section upon agreed flexibility to reach marketing and sales goals."
                  ],
                  img: {
                    path: require("@/assets/img/next-gen-kaspersky-antivirus.png"),
                    alt: "Execution of Next Generation site"
                  }
                }
              ]
            },
            "landing-pages": {
              meta: {
                title: "Landing Pages",
                description:
                  "Promoting new product lines and driving awareness & activation around the brand. Landing pages created with crossbrowser and responsive design in mind."
              },
              homepage: false,
              client: true,
              teaser: {
                title: "Landing Pages",
                desc:
                  "Promoting live events and new product lines through media campaigns and landing pages",
                img: require("@/assets/img/landing-page-responsive-design.png"),
                alt: "test",
                button: {
                  href: "/kaspersky-lab/landing-pages"
                }
              },
              jumbotron: {
                scroll: true,
                overlay: true,
                image: require("@/assets/img/page-header/case-web-project-localization.jpg"),
                classes: "frontpage",
                teaser: {
                  heading: "Landing Pages",
                  subHeading: "Promoting events & new product lines."
                }
              },
              slideshow: [
                {
                  title: "My Security Cloud",
                  paragraph: [
                    "Media campaign introducing, creating awareness and promoting our new product, Kaspersky Security Cloud."
                  ],
                  img: {
                    path: require("@/assets/img/slideshow/landing-page-mysecuritycloud.png"),
                    alt: "Media campaign introducing My Security Cloud"
                  },
                  button: {
                    href: "http://www.mysecuritycloud.co.uk/",
                    text: "Preview the Landing Page"
                  }
                },
                {
                  title: "GDPR",
                  paragraph: [
                    "GDPR is a new data privacy regulation in EU which will come into force mid-2018. The objective of the landing page was to help businesses handle this new regulation.",
                    "Succesful initiative and is now part of our standard pages."
                  ],
                  img: {
                    path: require("@/assets/img/slideshow/landing-page-gdpr.png"),
                    alt: "Successful initiative creating awareness around GDPR"
                  },
                  button: {
                    href: "https://www.kaspersky.se/gdpr",
                    text: "Preview now"
                  }
                },
                {
                  title: "Booklet: Kasper and Sky",
                  paragraph: [
                    "Local campaign run in Netherlands introducing a Kaspersky Children book to help parents keep their children safe online. Scope to  target consumers through social media, magazines and newspapers."
                  ],
                  img: {
                    path: require("@/assets/img/slideshow/landing-page-kasper-and-sky.png"),
                    alt: "Kasper, Sky and the green Bear"
                  },
                  button: {
                    href:
                      "https://www.kaspersky.nl/kasper-sky-en-de-groene-beer",
                    text: "Take a peak"
                  }
                },
                {
                  title: "Unhackable",
                  paragraph: [
                    "The campaign was used during Kaspersky Motorsport tour in the Nordics with an objective to drive brand awareness & activiation."
                  ],
                  img: {
                    path: require("@/assets/img/slideshow/landing-page-unhackable.png"),
                    alt: "Stay unhackable with Kaspersky Lab"
                  },
                  button: {
                    href: "https://www.kaspersky.se/unhackable",
                    text: "Preview now"
                  }
                },
                {
                  title: "Starmus event",
                  paragraph: [
                    "Kaspersky sponsored the Starmus event which took place in Norway (June, 2017). The objective was to drive traffic to the Starmus event and increase download rate on our Free Anti-Virus solution.",
                    "The page has been deactivated as the event already taken place."
                  ],
                  img: {
                    path: require("@/assets/img/slideshow/landing-page-starmus-event.png"),
                    alt: "Campaign for Starmus Event"
                  },
                  button: false
                },
                {
                  title: "In Pista con Kaspersky",
                  paragraph: [
                    "A contest campaign where our customers had a chance to win a racing experience. The object was to sell our newly released front-line product."
                  ],
                  img: {
                    path: require("@/assets/img/slideshow/landing-page-inpista-promotion.png"),
                    alt: "Contest while promoting new front-line products"
                  },
                  button: false
                }
              ],
              sections: [
                {
                  title: "Cross Browser Compatibility",
                  paragraph: [
                    "The Landing Pages were carefully designed to be compatible and functional cross-browsers and were tested in Chrome, Firefox and IE7+.",
                    "The pages were carefully reviewed in several browsers as every browser may interact differently causing unexpected issues."
                  ],
                  img: {
                    path: require("@/assets/img/crossbrowser.png"),
                    alt: "Cross-Browser compability"
                  }
                },
                {
                  title: "Responsive Design",
                  paragraph: [
                    "The Landing Pages were created desktop-first and later optimised for mobile devices. Pages were carefully tested on iPhone 5 and on tablet, to cover a smaller and wider screen resolution."
                  ],
                  img: {
                    path: require("@/assets/img/landing-page-responsive-design.png"),
                    alt: "Responsive landing pages"
                  }
                }
              ]
            },
            "beneft-from-microdata": {
              meta: {
                title: "Improving Search Engine results",
                description:
                  "Find out how Kaspersky benefited from using Schema.org microdata to improve the SERP and click-through rate with aggregate rating and pricing!"
              },
              homepage: false,
              client: true,
              teaser: {
                title: "Improving the Search Engine Result",
                desc:
                  "Find out how Kaspersky used Schema.org microdata for the aggregate rating to improve the SERP and click-through rate",
                img: require("@/assets/img/microdata-improved-serp.png"),
                alt: "test",
                button: {
                  href: "/kaspersky-lab/beneft-from-microdata"
                }
              },
              jumbotron: {
                scroll: true,
                overlay: true,
                image: require("@/assets/img/page-header/case-improve-search-engine-result.png"),
                classes: "case",
                teaser: {
                  heading: "Improving the Search Engine Result",
                  subHeading:
                    "Benefiting from Schema.org's rich snippet on product page."
                }
              },
              sections: [
                {
                  title: "General Benefits of Schema Microdata",
                  paragraph: [
                    "Schema.org is a micro-data markup shared across the majority of the leading search engines, such as Google, Yandex. As an example with micro-data, we can help the search engine to understand that your time and dates as it can be a huge struggle for the search engine to interpret correctly. This due to time-zones but also how it’s formatted around the world. E.g. <strong>dd/mm/yyyy</strong> is the proper outcome in Great Britain, while <strong>mm/dd/yyyy</strong> is in the US and in Finland <strong>d/m/yyyy</strong> may be used. By using micro-data we can make sure it interprets the data correct and hand relevant data to the users.",
                    "Google has claimed that schema micro-data doesn't helping your search ranking. However, you're improving your websites rich snippet while using micro-data, which in the end can improve your SERP and increase the click-through rates!"
                  ],
                  class: "full-width"
                },
                {
                  title: "The impact on SEO and SERP",
                  paragraph: [
                    "At Kaspersky microdata markup was used to our advantage mainly on our product pages where I’ve been involved rolling out microdata across our Marketing websites. The result of using microdata improved the SERP with a rich snippet showing the aggregate rating; the average rating from our users, amount of users and the price."
                  ],
                  img: {
                    path: require("@/assets/img/microdata-improved-serp.png"),
                    alt: "Improve impact on SEO and SERP"
                  }
                }
              ]
            }
          },
          sections: [
            {
              title: "Background",
              paragraph: [
                "Kaspersky Lab is the world's largest privately held vendor of digital security solutions and is ranked as top four's vendors of security solutions for endpoint users. Kaspersky Lab protects over 400 million users (was 250 million when I joined) and 270,000 corporate clients from cyber-threats worldwide.",
                "Kaspersky Lab is well-known for their end-user products, such as Kaspersky Anti-Virus; Kaspersky Internet Security & Kaspersky Total Security"
              ],
              class: "full-width"
            },
            {
              title: "Responsibilities",
              paragraph: [
                "The duty as a Web Producer at Kaspersky Lab is to maintain our multi-regional sites & executing and producing high standard web content and User Interfaces.",
                "Ranging from creating user-targeted landing-pages which promoted our product-lines or finding grounds for new potential users or creating brand awareness."
              ],
              list: [
                "Front-End Development",
                "Content Management",
                "User Interface"
              ],
              class: "full-width"
            }
          ]
        }
      },
      experience: {
        sectionTitle: "Working Experience",
        bundle: [
          {
            title: "Front-End Developer",
            desc:
              "Consulting in Front-End Development maintaining websites & conversion rate optimization.",
            worksFor: "Sigma IT Consulting",
            workLocation: "Gothenburg",
            timeRange: "11/2018 - present"
          },
          {
            title: "Front-End Developer",
            desc:
              "Working remotely managing and maintaining 40+ multi-regional websites and executing web content.",
            worksFor: "Kaspersky Lab",
            workLocation: "Gothenburg",
            timeRange: "09/2014 - 11/2018",
            button: {
              href: "/kaspersky-lab"
            }
          },
          {
            title: "Junior Web Developer",
            desc:
              "Maintaining multi-regional sites at Kaspersky Lab and executing high standard User Interfaces (UI).",
            worksFor: "Kaspersky Lab",
            workLocation: "London",
            timeRange: "02/2014 - 09/2014",
            button: {
              href: "/kaspersky-lab"
            }
          }
        ]
      },
      skill: {
        sectionTitle: "Key skills and competencies",
        bundle: [
          {
            title: "Front-End Development",
            type: [
              {
                name: "Javascript",
                img: require("@/assets/img/skills/icon-javascript.png"),
                class: "js",
                level: {
                  workExp: 4,
                  personalExp: 3,
                  interest: 4
                }
              },
              {
                name: "Sass",
                img: require("@/assets/img/skills/icon-sass.svg"),
                class: "sass",
                level: {
                  workExp: 3,
                  personalExp: 4,
                  interest: 4
                }
              },
              {
                name: "AngularJS",
                img: require("@/assets/img/skills/icon-angular.svg"),
                class: "angular",
                level: {
                  workExp: 2,
                  personalExp: 4,
                  interest: 4
                }
              },
              {
                name: "Vue.js",
                img: require("@/assets/img/skills/icon-vue.png"),
                class: "vuejs",
                level: {
                  workExp: 3,
                  personalExp: 3,
                  interest: 4
                }
              }
            ]
          }
        ]
      }
    };
  }
});
</script>

<style lang="sass">
@import 'assets/css/_reset'
@import 'assets/css/variables'
// Start
body
    background: $bkgColor
    font-family: $fontBody
    color: $baseColor
    font-weight: 300
    line-height: 1.7
img
    max-width: 100%
.container
    width: 100%
    max-width: $baseWidth
    padding: $baseSize * 2
    margin: auto
@for $i from 1 through 6
    h#{$i}
        font-family: $fontHeadings
        font-size: $baseSize + $baseScaling * (6 - $i)
        font-weight: 200
        line-height: 1.5
.flex-of-s, .flex-of-m, .flex-of-l
    display: flex
    flex-basis: auto
    align-content: center
    align-items: center
    flex-wrap: wrap
    &.full-width
      > div
        width: 100% !important
    &.reverse 
        flex-direction: row-reverse
        .figure
          img
            margin-left: 0
            float: left
    > div
        padding: 0 $baseSize
        &.figure
          position: relative
          img
            max-width: none
            float: right
.flex-of-s
    @media screen and (max-width: $breakpoint-small)
        flex-direction: column
        > div
            width: 100%
.flex-of-m
    @media screen and (max-width: $breakpoint-medium)
        flex-direction: column
        > div
            width: 100%
p
    padding: ($baseSize/2) 0
    font-weight: 300
a
    transition: all .3s
    &.CTA
        display: inline-block
        padding: $baseSize ($baseSize * 2)
        color: $red
        border: 1px solid $red
        border-radius: ($baseSize/4)
        &:hover
            color: $white
            background: $red
ul
  list-style: circle
  padding-left: $baseSize
  li
    padding-bottom: $baseSize / 2
strong
  font-weight: 500
main
    section
        overflow: hidden
        &:nth-child(odd)
            background: $lightBlue
</style>
