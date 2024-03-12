"use client";

import Container from "../atoms/container";
import FadeIn from "../animation/fade-in";
import Parallax from "../animation/parallex";
import { testimonials } from "@/config/testimonals";
import "./testimonals.css";
const Testimonals = () => {
  return (
    <FadeIn>
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold leading-tight">
              Testimonial
            </h2>
          </div>
          <div className="testimonial_grid">
            <article className="testimonial testimonial_bg1 grid_col paragraph">
              <div className="flex_group">
                <div>
                  <h1>{testimonials[0].name}</h1>
                </div>
              </div>
              <p>{testimonials[0].review}</p>
            </article>
            <article className="testimonial testimonial_bg2 paragraph">
              <div className="flex_group">
                <div>
                  <h1>{testimonials[1].name}</h1>
                </div>
              </div>
              <p>{testimonials[1].review}</p>
            </article>
            <article className="testimonial testimonial_bg3 paragraph2 head">
              <div className="flex_group">
                <div>
                  <h1>{testimonials[2].name}</h1>
                </div>
              </div>
              <p>{testimonials[2].review}</p>
            </article>
            <article className="testimonial testimonial_bg4 grid_col paragraph">
              <div className="flex_group">
                <div>
                  <h1>{testimonials[3].name}</h1>
                </div>
              </div>
              <p>{testimonials[3].review}</p>
            </article>
            <article className="testimonial testimonial_bg5 paragraph2 head">
              <div className="flex_group">
                <div>
                  <h1>{testimonials[4].name}</h1>
                </div>
              </div>
              <p>{testimonials[4].review}</p>
            </article>
          </div>
        </Container>
      </section>
    </FadeIn>
  );
};

export default Testimonals;
