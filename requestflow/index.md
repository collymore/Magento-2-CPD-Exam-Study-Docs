---
meta:
  - name: keywords
    content: Magento, Module-based architecture
sidebar: auto
prev: /architecture/
next: /databases/
---

# Request Flow Processing

## Utilize modes and application initialization

**Steps for application initialization.** How would you design a customization that should act on every request and capture output data regardless of the controller?

**Magento modes.** What are pros and cons of using developer mode/production mode? When do you use default mode? How do you enable/disable maintenance mode?

**Front controller responsibilities.** In which situations will the front controller be involved in execution, and how can it be used in the scope of customizations?

## Demonstrate ability to process URLs in Magento

**How Magento processes a given URL.** How do you identify which module and controller corresponds to a given URL? What is necessary to create a custom URL structure?

**The URL rewrite process** and its role in creating user-friendly URLs. How are user-friendly URLs established, and how are they customized?

**How action controllers and results function.** How do controllers interact with another? How are different response types generated?

## Demonstrate ability to customize request routing

**Request routing and flow in Magento.**
When is it necessary to create a new router or to customize existing routers? How do you handle custom 404 pages?


## Determine the layout initialization process

**How layout is compiled.** How would you debug your layout.xml files and verify that the right layout instructions are used?

**How HTML output is rendered.** How does Magento flush output, and what mechanisms exist to access and customize output?

**Module layout XML schema.** How do you add new elements to the pages introduced by a given module?

**Layout fallback for customizations and debugging.** How do you identify which exact layout.xml file is processed in a given scope? How does Magento treat layout XML files with the same names in different modules?

**The differences between admin and frontend scopes.**
What differences exist for layout initialization for the admin scope?

## Determine the structure of block templates

**Root templates, empty.xml, and page_layout.** How are page structures defined, including number of columns, which basic containers are present, etc.?

**Blocks and templates in the request flow.** In which situations would you create a new block or a new template?