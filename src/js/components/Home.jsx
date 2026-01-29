import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <Jumbotron />

        <div className="cards-container">
          <Card 
            title="Card title"
            text="Lorem ipsum dolor sit amet."
            img="https://placehold.co/600x400"
          />

          <Card 
            title="Card title"
            text="Lorem ipsum dolor sit amet."
            img="https://placehold.co/600x400"
          />

          <Card 
            title="Card title"
            text="Lorem ipsum dolor sit amet."
            img="https://placehold.co/600x400"
          />

          <Card 
            title="Card title"
            text="Lorem ipsum dolor sit amet."
            img="https://placehold.co/600x400"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}