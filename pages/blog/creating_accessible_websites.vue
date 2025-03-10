<template>
    <div>
        <ContentBlogformatter image="https://i.imghippo.com/files/SKBx1342H.png" alt="Image of accessibility" title="A Beginner's Guide to Creating Accessible Websites" author="Abdiel Kengne" date="March 09, 2025">
          
            <template #content>
                <ContentBlogUtilsBlogHeading heading="Introduction"/>
                <ContentBlogUtilsBlogText>
                    When creating our webpages, we often neglect an important step: accessibility. We tend to focus more on stunning animations, high interactivity, and visual enhancement, while ignoring those with differences such as Color Blindness , Motor Impairments and others who rely on screen readers to navigate our pages.
                    Some basic accessibility features include <strong>Semantic HTML tags</strong>, <strong>Color Contrast</strong>, <strong>ALT Image attribute</strong> and <strong>Spacing</strong>
                    .This guide is to help you get started on implementing these basic accessibility features to your website, to make it easy for everyone to use it.
                </ContentBlogUtilsBlogText>
                <ContentBlogUtilsBlogHeading heading="Semantic HTML tags"/>
                <ContentBlogUtilsBlogText>
                    By "Semantic" HTML tags, I mean tags which were created to do their roles. Don't use tags that do the role of other tags. For example, use the <code>&lt;button&gt;</code>
                    tag to define a clickable button, instead of <code>&lt;div&gt;</code>. This is important because screen readers analyze HTML tags and read their content to users according to their roles. A screen reader would easily know the
         <code> &lt;button&gt;</code> tag is a button, and let the user know it is a button which acts as an interactive element. But if a screen reader comes across a <code>&lt;div&gt;</code> 
         , even if it has the same interactivity of a native button element, will not let the user know if it a button, because a div has no meaning at all, and is mainly used for styling, unless you tweak it's attributes with roles and ARIAs, which can be very difficult 
                .</ContentBlogUtilsBlogText>
                <ContentBlogUtilsBlogText>
                 For accessible and SEO friendly website, I recommend you to use the <code> &lt;header&gt;</code> tag for the heading of your webpage like the Hero section, the <code> &lt;nav&gt;</code> tag to place your navbar or navigation panel, the <code> &lt;main&gt;</code> tag to embed the main content of your page, and the <code> &lt;footer&gt;</code> 
                 tag to put your copyright, contact details, or links to related content.
                </ContentBlogUtilsBlogText>
                <ContentBlogUtilsBlogHeading heading="Color contrast"/>
                <ContentBlogUtilsBlogText>
                    This is one of the hardest, but important accessibility  feature to implement.
                     Color contrast refers to the difference in lightness or darkness between two colors, making text and elements easier to read and distinguish.
                </ContentBlogUtilsBlogText>
            </template>
         
        </ContentBlogformatter>
    </div>
</template>
<script setup lang="ts">
useSeoMeta({
    title:'A Beginner\'s Guide to Creating Accessible Websites | AK',
    ogTitle:'A Beginner\'s Guide to Creating Accessible Websites | AK',
    description:'Learn the basics of web accessibility',
    ogDescription:'Learn the basics of web accessibility',
    ogImage:'https://i.imghippo.com/files/SKBx1342H.png',
    
    twitterCard:'summary_large_image',
    twitterTitle:'A Beginner\'s Guide to Creating Accessible Websites | AK',
    twitterDescription:'Learn the basics of web accessibility',
    twitterImage:'https://i.imghippo.com/files/SKBx1342H.png'
})
</script>
