---
meta:
  - name: keywords
    content: Magento, Module-based architecture
sidebar: auto
prev: false
next: /requestflow/
---
# Architecture and Customization

::: tip
 TODO : Add all info about Architecture and Customization Techniques
:::

## Module-based architecture

<Zoom imgSrc="https://devdocs.magento.com/common/images/archi_diagrams_layers_alt4.jpg" alt="Magento 2 Architecture"></Zoom>    

### Module limitations.
Lorum Ipsum How does the application behave in different deployment modes, and how do these behaviors impact the deployment approach for PHP code, frontend asset

### How different modules interact with each other.
Lorum Ipsum How does the application behave in different deployment modes, and how do these behaviors impact the deployment approach for PHP code, frontend asset

### Side effects that can come from this interaction,
Lorum Ipsum How does the application behave in different deployment modes, and how do these behaviors impact the deployment approach for PHP code, frontend asset

<vue-confirmation-button :messages="['Done', '✔']"></vue-confirmation-button>

***
## Directory structure
Determine how to locate different types of files in Magento. Where are the files containing JavaScript, HTML, and PHP located? 

How do you find the files responsible for certain functionality?
<vue-confirmation-button :messages="['Done', '✔']"></vue-confirmation-button>


## Utilize configuration XML and variables scope
Determine how to use configuration files in Magento. Which configuration files correspond to different features and functionality?
<vue-confirmation-button :messages="['Done', '✔']"></vue-confirmation-button>


## Dependency injection
Describe Magento’s dependency injection approach and architecture. How are objects realized in Magento? Why is it important to have a centralized process creating object instances?

Identify how to use DI configuration files for customizing Magento. How can you override a native class, inject your class into another object, and use other techniques available in di.xml (such as virtualTypes)?
<vue-confirmation-button :messages="['Done', '✔']"></vue-confirmation-button>


## Plugins
Demonstrate how to design complex solutions using the plugin’s life cycle. How do multiple plugins interact, and how can their execution order be controlled? How do you debug a plugin if it doesn’t work?

Identify strengths and weaknesses of plugins. What are the limitations of using plugins for customization? In which cases should plugins be avoided?
<vue-confirmation-button :messages="['Done', '✔']"></vue-confirmation-button>


## Event observers and scheduled jobs
Demonstrate how to configure observers. How do you make your observer only be active on the frontend or backend? 

Demonstrate how to configure a scheduled job. Which parameters are used in configuration, and how can
configuration interact with server configuration?

Identify the function and proper use of automatically available events, for example *_load_after, etc.
<vue-confirmation-button :messages="['Done', '✔']"></vue-confirmation-button>


## Utilize the CLI
Describe the usage of bin/magento commands in the development cycle. Which commands are available? How are commands used in the development cycle?

Demonstrate an ability to create a deployment process. How does the application behave in different deployment modes, and how do these behaviors impact the deployment approach for PHP code, frontend assets, etc.?
<vue-confirmation-button :messages="['Done', '✔']"></vue-confirmation-button>


## Manage the cache
Describe cache types and the tools used to manage caches. How do you add dynamic content to pages served from the full page cache?

Describe how to operate with cache clearing. How would you clean the cache? In which case would you refresh cache/flash cache storage?

Describe how to clear the cache programmatically. What mechanisms are available for clearing all or part of the cache?
<vue-confirmation-button :messages="['Done', '✔']"></vue-confirmation-button>

::: tip Revision Flash Cards
   <carousel3d :controls-visible="true">
        <slide :index="0">
          <h4>Advantages of layered application design</h4>
          <ul>
          <li>Stringent separation of business logic from presentation logic</li>
          <li>Clear organization of code predictably points extension developers to code location</li>
          </ul>
          <vue-confirmation-button css="star" :messages="['★', '✔']"></vue-confirmation-button>
        </slide>
        <slide :index="1">
          <h4>Presentation Layer</h4>
          <p>Presentation layer represents customization of HTML,CSS,Javascript,Magento UI,PHTML file and Block file.</p>
          <p>Presentation layer is Top layer among four layer</p>
          <vue-confirmation-button css="star" :messages="['★', '✔']"></vue-confirmation-button>
        </slide>
        <slide :index="2">
          <h4>Presentation layer components</h4>
          <ul>
            <li><strong>View model</strong> (Blocks & Containers)</li>
            <li><strong>Blocks</strong> can generate their content using static HTML, Knockout JS scripts, and PHTML</li>
            <li><strong>Containers</strong> collect an ordered group of children view elements</li>
          </ul>
            <vue-confirmation-button css="star" :messages="['★', '✔']"></vue-confirmation-button>
        </slide>
        <slide :index="3">
          <h4>Presentation code calls other layers</h4>
          <ul>
            <li>Calls service contracts</li>
            <li>Presentation code is dependent on a specific implementation,  directly calls the business logic layer</li>
            <li>View layer calls code from the Model through service contracts.</li>
          </ul>
          <vue-confirmation-button :messages="['★', '✔']"></vue-confirmation-button>
        </slide>
  </carousel3d>
:::