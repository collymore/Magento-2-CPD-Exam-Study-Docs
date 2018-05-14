const path = require('path')

module.exports = {
    title: 'Magento 2 CPD Study Guide',
    description: "We'll make a Magento developer of you yet!",
    footer: "Develo Design",
    themeConfig: {
      repo: 'vuejs/vuepress',
      repoLabel: 'Contribute!',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Contents', link: '/index/index.html' },
        { text: 'Chapters', link: '#', items: [
          { text: 'Architecture and Customization', link: '/architecture/' },
          { text: 'Request Flow Processing', link: '/requestflow/' },
          { text: 'Working with Databases in Magento', link: '/databases/' },
          { text: 'Using the Entity-Attribute-Value (EAV) Model', link: '/eav/' },
          { text: 'Developing with Adminhtml', link: '/adminhtml/' },
          { text: 'Customizing the Catalog', link: '/catalog/' },
          { text: 'Customizing the Checkout Process', link: '/checkout/' },
          { text: 'Sales Operations', link: '/sales/' },
          { text: 'Customer Management', link: '/customer/' }
          ]
        }
      ]
      }
    }