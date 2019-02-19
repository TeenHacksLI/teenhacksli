# teenhacksli.com
This is the website for TeenHacks LI

<span style="color: #5FAFC9"><b>Soft blue:</b></span> #5FAFC9

TeenHacksLI.com Webmaster Guide

This website utilizes 

## TeenHacksLI.com Webmaster Guide
### Made by Jeffrey Yu on 2.19.19
<b>Prerequisite</b>: this guidebook assumes you have a good grasp on HTML, CSS, and a general understanding of how Boostrap works. 
#### Introduction
This repository contains all website files for TeenHacks LI (teenhacksli.com). This website is hosted on GitHub Pages. We utilize Domain.com as our domain register, and CloudFlare for our nameserver. As of 2.19.19, we do not utilize branching as everything is stored under the master branch.

This website has several dependencies. The main one being Bootstrap. We utilize the Bootstrap CSS and JS files for ease of making a professional and clean looking website without having to do all the work. Please note, when making new event sites, update the Bootstrap to whatever the current version is. We also use Font Awesome for our icons, which also needs to be updated. Note: the original Fall 2018 website came from a template and since then, we have been trying to phase out the dependency on that template by writing our own CSS/JS files. We use Google Fonts for our fonts, as well as Google Analytics for tracking website traffic.

The repository is organized into a few main files and other folders. The main files are index.html which contains the infinite scroll page (the main page) and then styles.css (the universal CSS file for everything). There is also a folder for img that is used for all images, and main.js used for the JavaScript. Other files may be present. Note: the current site files are all under the main repository and links from one file to another should all be relative. Old sites are stored in an archive folder, but no active files should link to an old site’s file.


#### HTML Body Structure
The basic structure of our website in an infinite scroll site with no other HTML pages. There are exceptions to this though, such as our live page for day-of information, our press page, and others, but our infinite scroll page in the primary page. Taking a look at the HTML code, you can start to see our website is divided into many sections. 

<b>START</b>: To start off there is the navigation bar. Then there is the header which contains the parallax background and primary info text. The nav bar and header have complex CSS/JS functions that I choose not to touch since I’m not smart enough to understand it without breaking it, so if you want to change anything, proceed with caution.

<b>MIDDLE</b>: The middle of the page, where the bulk of the information is, is made up of many <section> tags and each with an assigned ID attribute. (Note: there is no specific rule on ID naming, but just make sure they don’t repeat. The ID is used by the navbar to navigate to a specific section.) Within each section, we utilize the BS grid function using nested <div> tags, with the class attribute defining a container, row, then column. In addition, typically each section has a section-heading title followed by a horizontal line. A typical section would look like this:

```html
<section id="about">
    <div class="container">
        <div class="row">
            <div class="col-l0 mx-auto text-center">
                <h2 class="section-heading">Title</h2>
                <hr class="my-4"
            </div>
        </div>
    </div>
</section>
```

<b>END</b>: To end everything, there is the footer. This was again copied from an exemplar so I don’t like to mess with it.

#### CSS 
Taking a look at the CSS file, you again can see it is divided into many sections. It is meant to be chronological with the index.html page.
<b>GENERA</b>L: To start off, there is general CSS about the font, text-size, etc., then colors for general classes. If you would like to create a GENERAL CLASS design that is meant to be used repeatedly, place that here. There is then a section for the section design.

<b>NAVBAR/HEADER STUFF</b>: This is all the CSS for the navbar and the header. As mentioned previously, I wouldn’t touch this. If you do, be careful not to break anything.

<b>SECTION STUFF</b>: This is general section stuff. With the HTML, this should usually correspond to specific ID attributes used when creating a new section. This allows you to easily customize the specific section you are working on without changing everything else. THIS IS WHERE I DO MOST OF MY WORK. Because this is later on in the CSS, this can override any code from the general CSS mentioned before. The only downside of working here is, if you have something you do over and over again for multiple sections, you have to write new CSS each time. For something like that, you can make it a general class item and place above.

<b>FOOTER</b>: Again, I don’t touch this because its scary. Play around at your own risk.

#### Best Practices
Now you have a general understanding of how the HTML and CSS is laid out, the main thing you will probably be doing is editing or adding new sections. The basic section set up is above and you can edit from there. As you scroll through the page, the sections change colors so just make sure everything is aesthetically pleasing. Also, as mentioned before, I recommend when editing CSS for a section, do it under the Section part of the CSS code, and not the General part. Just follow the existing format.

COMMENT YOUR DAMN CODE. You are working on a team, so others need to understand it. Please please please comment your code in both the HTML and CSS. In the CSS, just follow the standard conventions for each section, but if there is anything special, please explicitly say so.
