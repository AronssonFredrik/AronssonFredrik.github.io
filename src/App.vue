<template>
  <div id="app">
    <GlobalHeader :siteName="name"></GlobalHeader>
    <router-view :client="client" :experience="experience" :skill="skill"/>
    <GlobalFooter :message="footer"></GlobalFooter>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GlobalHeader from '@/components/general/GlobalHeader.vue'; 
import GlobalFooter from '@/components/general/GlobalFooter.vue'; 

const scroll = {
    currentLoc: window.scrollY,

}

export default Vue.extend({
  name: 'home',
  components: {
    GlobalHeader,
    GlobalFooter
  },
  data() {
    return {
      name: "Fredrik Aronsson",
      footer: [
        "Vat liable since October 2014",
        "Website developed with vueJS, Sass, etc",
        "Sent from App.vue"
      ],
      client: {
        "kaspersky-lab": {
          jumbotron: {
              scroll: true,
              overlay: true,
              classes: 'frontpage',
              teaser: {
                  heading: "Kaspersky Lab",
                  subHeading: "Working remotely as Web Producer"
              }
          },
          projects: {
            "next-generation-website": {
              homepage: true,
              client: true,
              teaser: {
                  title: 'Next Generation Website',
                  desc: 'A new era has come, the development of a responsive e-commerce website, A/B-testing design ideas and building new buyblock with wider range of pack-options',
                  img: require('@/assets/img/next-gen-kaspersky-antivirus.png'),
                  alt: "test",
                  button: {
                    text: "abc123",
                    url: "/kaspersky-lab/next-generation-website"
                  }
              },
              jumbotron: {
                  scroll: true,
                  overlay: true,
                  classes: 'frontpage',
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
                        path: require('@/assets/img/next-gen-lrc-ab-test.png'),
                        alt: 'A/B-testing new design'
                      },
                      button: {
                        href: "https://www.kaspersky.com/renewal-center/home",
                        text: "Preview it now ↝",
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
                        path: require('@/assets/img/next-generation-smb-buyblock.png'),
                        alt: 'Buyblock for small businesses'
                      },
                      button: {
                        href: "https://www.kaspersky.com/business-security/small-business",
                        text: "Preview it now ↝"
                      }
                  },
                  {
                      title: "Executing Business-to-Customer Section",
                      paragraph: [
                          "My main task was to manage and develop the Business-to-Customer section. Creating anything from product pages, product-overview, download pages and the logic behind the help-me-choose-tool.",
                          "Responsibility for a standardized and ease-of-use CMS structure on Business-to-Customer section upon agreed flexibility to reach marketing and sales goals."
                      ],
                      img: {
                        path: require('@/assets/img/next-gen-kaspersky-antivirus.png'),
                        alt: 'Execution of Next Generation site'
                      }
                  }
              ]
            },
            "landing-pages": {
              homepage: false,
              client: true,
              teaser: {
                  title: 'Landing Pages',
                  desc: 'Promoting live events and new product lines through media campaigns and landing pages',
                  img: require('@/assets/img/landing-page-responsive-design.png'),
                  alt: "test",
                  button: {
                    text: "abc123",
                    url: "/kaspersky-lab/landing-pages"
                  }
              },
              jumbotron: {
                  scroll: true,
                  overlay: true,
                  classes: 'frontpage',
                  teaser: {
                      heading: "Landing Pages",
                      subHeading: "Promoting events & new product lines."
                  }    
              },
              sections: [
                  {
                      title: "Cross Browser Compatibility",
                      paragraph: [
                          "The Landing Pages were carefully designed to be compatible and functional cross-browsers and were tested in Chrome, Firefox and IE7+.",
                          "The pages were carefully reviewed in several browsers as every browser may interact differently causing unexpected issues."
                      ],
                      img: {
                        path: require('@/assets/img/crossbrowser.png'),
                        alt: 'Cross-Browser compability'
                      }
                  },
                  {
                      title: "Responsive Design",
                      paragraph: [
                          "The Landing Pages were created desktop-first and later optimised for mobile devices. Pages were carefully tested on iPhone 5 and on tablet, to cover a smaller and wider screen resolution."
                      ],
                      img: {
                        path: require('@/assets/img/landing-page-responsive-design.png'),
                        alt: 'Responsive landing pages'
                      }
                  }
              ]
            },
            "beneft-from-microdata": {
              homepage: false,
              client: true,
              teaser: {
                  title: 'Improving the Search Engine Result',
                  desc: 'Find out how Kaspersky used Schema.org microdata for the aggregate rating to improve the SERP and click-through rate',
                  img: require('@/assets/img/microdata-improved-serp.png'),
                  alt: "test",
                  button: {
                    text: "Read More →",
                    url: "/kaspersky-lab/beneft-from-microdata"
                  }
              },
              jumbotron: {
                  scroll: true,
                  overlay: true,
                  classes: 'case',
                  teaser: {
                      heading: "Improving the Search Engine Result",
                      subHeading: "Benefiting from Schema.org's rich snippet on product page."
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
                        path: require('@/assets/img/microdata-improved-serp.png'),
                        alt: 'Improve impact on SEO and SERP'
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
                  "Ranging from creating user-targeted landing-pages which promoted our product-lines or finding grounds for new potential users or creating brand awareness.",
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
                  desc: "Consulting in Front-End Development maintaining websites & conversion rate optimization.",
                  worksFor: "Self-Employeed",
                  workLocation: "Gothenburg",
                  timeRange: "09/2014 - present"
              },
              {
                  title: "Remote Web Producer",
                  desc: "Working remotely managing and maintaining 40+ multi-regional websites and executing web content.",
                  worksFor: "Kaspersky Lab",
                  workLocation: "Gothenburg",
                  timeRange: "09/2014 - present"
              },
              {
                  title: "Junior Web Producer",
                  desc: "Maintaining multi-regional sites at Kaspersky Lab and executing high standard User Interfaces (UI).",
                  worksFor: "Kaspersky Lab",
                  workLocation: "London",
                  timeRange: "02/2014 - 09/2014"
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
                          name: "Sass",
                          workExp: 3,
                          personalExp: 5,
                          interest: 5
                      },
                      {
                          name: "jQuery",
                          workExp: 5,
                          personalExp: 5,
                          interest: 5
                      },
                      {
                          name: "AngularJS",
                          workExp: 3,
                          personalExp: 4,
                          interest: 5
                      },
                      {
                          name: "vue.js",
                          workExp: 1,
                          personalExp: 3,
                          interest: 5
                      }
                  ]
              },
              {
                  title: "Content Management Systems",
                  type: [
                      {
                          name: "SDL Tridion",
                          workExp: 5,
                          personalExp: 5,
                          interest: 5
                      },
                      {
                          name: "Craft CMS",
                          workExp: 1,
                          personalExp: 4,
                          interest: 3
                      }
                  ]
              }

          ]
      }      
    }
  },
  created () {
    document.title = this.$route.meta.title + " • " + this.name;
  },
  watch: {
    '$route' (to, from) {
      document.title = this.$route.meta.title + " • " + this.name;
    }
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
    &.full-width
      > div
        width: 100%
    .reverse &
        flex-direction: row-reverse
        .figure
          img
            margin-left: 0
            float: left
    > div
        padding: 0 $baseSize
        width: 50%
        &.figure
          position: relative
          img
            max-width: none
            float: right

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
