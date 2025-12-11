"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitGlobeKpi from '@/components/sections/hero/HeroSplitGlobeKpi';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import TagMediaSplitAbout from '@/components/sections/about/TagMediaSplitAbout';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Sparkles, ChefHat, Flame, Calendar } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="medium"
      background="noiseDiagonalGradient"
      cardStyle="solid"
      primaryButtonStyle="outline"
      secondaryButtonStyle="minimal"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Godzilla"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitGlobeKpi
          title="Experience Extraordinary Japanese Cuisine"
          description="Welcome to Godzilla, where authentic flavors meet modern elegance. Discover the finest Japanese dining experience with our curated menu and exceptional service."
          tag="Fine Dining Since 2010"
          tagIcon={Sparkles}
          kpis={[
            { value: "15+", label: "Years of Excellence" },
            { value: "4.9★", label: "Customer Rating" },
            { value: "50+", label: "Signature Dishes" }
          ]}
          buttons={[
            { text: "Reserve Now", href: "contact" },
            { text: "View Menu", href: "menu" }
          ]}
          globePosition="right"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardFive
          title="Featured Dishes"
          description="Explore our most beloved creations, crafted with the finest ingredients and traditional techniques"
          tag="Menu Highlights"
          tagIcon={ChefHat}
          products={[
            {
              id: "sushi-premium",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765463375615-8e8nvks3.jpg",
              imageAlt: "Premium Sushi Platter",
              button: { text: "Order", id: "order-sushi" },
              isFavorited: false
            },
            {
              id: "ramen-special",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765463376616-8l3fubpr.jpg",
              imageAlt: "Signature Ramen Bowl",
              button: { text: "Order", id: "order-ramen" },
              isFavorited: false
            },
            {
              id: "sake-selection",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765463377591-u4x7mify.jpg",
              imageAlt: "Premium Sake Selection",
              button: { text: "Order", id: "order-sake" },
              isFavorited: false
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <TagMediaSplitAbout
          variant="card"
          title="Our Story"
          description="Discover the passion and tradition behind Godzilla Restaurant"
          textboxLayout="default"
          contentTag="HERITAGE"
          contentTagIcon={Flame}
          contentTitle="Where Tradition Meets Innovation"
          contentDescription="Since 2010, Godzilla has been serving the most authentic Japanese cuisine with a contemporary twist. Our master chef brings 30 years of culinary expertise from Tokyo, ensuring every dish reflects the true spirit of Japanese gastronomy. We believe in honoring traditional preparation methods while embracing modern presentation and sustainable sourcing."
          contentButtons={[
            { text: "Read More", href: "#" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765463374388-4sr1euop.jpg"
          imageAlt="Godzilla Restaurant Interior"
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardNine
          testimonials={[
            {
              id: "1",
              quote: "Godzilla offers an unforgettable dining experience. The attention to detail in every dish is remarkable, and the service is impeccable.",
              name: "Sarah Mitchell",
              role: "Food Critic",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765463378621-11egut8l.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              quote: "The most authentic sushi I've had outside of Japan. Every meal here is a celebration of culinary artistry.",
              name: "James Chen",
              role: "Restaurant Owner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765463379321-s3n4kbg2.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              quote: "A hidden gem! The atmosphere is elegant, the food is exquisite, and the staff treats you like family.",
              name: "Emma Thompson",
              role: "Travel Blogger",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765463380073-fqq2c092.jpg",
              imageAlt: "Emma Thompson"
            },
            {
              id: "4",
              quote: "I've been coming here for years and they never disappoint. Godzilla is my favorite place to celebrate special occasions.",
              name: "Michael Rodriguez",
              role: "Regular Guest",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765463381002-vadgy1hf.jpg",
              imageAlt: "Michael Rodriguez"
            }
          ]}
          variant="card"
          title="What Our Guests Say"
          description="Hear from diners who have experienced the Godzilla difference"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Common Questions"
          description="Everything you need to know about Godzilla Restaurant"
          textboxLayout="default"
          faqs={[
            {
              id: "1",
              title: "How far in advance should I make a reservation?",
              content: "We recommend booking at least 2-3 weeks in advance for weekends and special occasions. However, we welcome walk-ins during off-peak hours subject to availability. For large groups (8+ people), please contact us directly for custom arrangements."
            },
            {
              id: "2",
              title: "Do you offer private dining options?",
              content: "Yes! We have a beautiful private dining room that can accommodate up to 30 guests. It's perfect for corporate events, celebrations, and special occasions. Please contact our events coordinator for details and availability."
            },
            {
              id: "3",
              title: "What dietary preferences can you accommodate?",
              content: "We proudly accommodate vegetarian, vegan, gluten-free, and allergen-free diets. Please inform us of your dietary requirements when booking, and our chef will create a customized menu for you."
            },
            {
              id: "4",
              title: "Do you have a dress code?",
              content: "We maintain a smart casual dress code. We recommend avoiding athletic wear and flip-flops. For special occasions and private events, formal attire is appreciated but not required."
            },
            {
              id: "5",
              title: "What is your cancellation policy?",
              content: "Cancellations must be made at least 48 hours in advance. Cancellations within 48 hours may incur a charge based on party size. No-shows will be charged in full."
            },
            {
              id: "6",
              title: "Do you offer takeout or delivery?",
              content: "Yes, we offer premium takeout service. For delivery, we partner with select local services. For best results and special packaging, we recommend calling directly to place your order."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Reserve Your Table"
          ctaDescription="Join us for an unforgettable dining experience. Book your table today."
          ctaButton={{
            text: "Book Reservation",
            href: "#"
          }}
          ctaIcon={Calendar}
          faqs={[
            {
              id: "1",
              title: "What are your operating hours?",
              content: "Tuesday - Thursday: 5:00 PM - 11:00 PM<br/>Friday - Saturday: 5:00 PM - 12:00 AM<br/>Sunday: 5:00 PM - 10:00 PM<br/>Closed Mondays"
            },
            {
              id: "2",
              title: "How do I reach your reservation line?",
              content: "Phone: (555) 123-4567<br/>Email: reservations@godzilla-restaurant.com<br/>Hours: Daily 11:00 AM - 10:00 PM"
            },
            {
              id: "3",
              title: "Where is Godzilla Restaurant located?",
              content: "123 Sakura Lane<br/>Downtown District<br/>City, State 12345<br/>Parking available on-site"
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "Menu", href: "menu" },
                { label: "About", href: "about" },
                { label: "Reservations", href: "contact" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Phone: (555) 123-4567", href: "#" },
                { label: "Email: info@godzilla-restaurant.com", href: "#" },
                { label: "123 Sakura Lane, Downtown", href: "#" }
              ]
            },
            {
              title: "Hours",
              items: [
                { label: "Tue - Thu: 5:00 PM - 11:00 PM", href: "#" },
                { label: "Fri - Sat: 5:00 PM - 12:00 AM", href: "#" },
                { label: "Sun: 5:00 PM - 10:00 PM", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Godzilla Restaurant. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}