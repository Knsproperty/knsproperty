import React from "react";

export default function Community() {
  return (
    <section id="featured-property-section" className=" pb-5">
      <div className="container">
        {/* <div class="row text-center">

                  <div class="col-lg-1 col-none"></div>

                  <div class="col-lg-10 col-12 pb-5">

                      <h1 class="pb-4">Range Signature</h1>

                      <p>'Range Signature' by Range properties is an exclusive program dedicated to curating a collection of elegant and stylish properties that offer remarkable architectural marvels. As a market-leading heritage brand, Range is accredited with showcasing an impeccable business record, spanning more than three decades, offering exceptional services to its clients and partners.</p>

                      <p> Our unique local knowledge, global reach and international reputation as a sought-after real estate matchmaker, puts us in prime position to support high-net-worth homeowners and home seekers.</p>

                  </div>

                  <div class="col-lg-1 col-none"></div>

              </div> */}
        <div className="row g-2">
          <div className="col-lg-7 pb-2">
            <a href="https://range.ae/property/damac-cavalli-estates-villas">
              <div
                className="featured-img-1"
                style={{
                  backgroundImage:
                    'url("frontend/assets/images/property/img_1681212060.jpg") !important',
                }}
              >
                <div className="featured-img-gradient d-flex align-items-end">
                  <div className="p-3 pl-3">
                    <div className="featured-title">
                      DAMAC Cavalli Estates Villas
                    </div>
                    <hr className="line-orange" />
                    <div className="featured-price">AED 19,796,630</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-5 pb-2">
            <a href="https://range.ae/property/the-heart-of-europe">
              <div
                className="featured-img-2"
                style={{
                  backgroundImage:
                    'url("frontend/assets/images/property/img_1656663927.jpg") !important',
                }}
              >
                <div className="featured-img-gradient d-flex align-items-end">
                  <div className="p-3 pl-3">
                    <div className="featured-title">The Heart of Europe</div>
                    <hr className="line-orange" />
                    <div className="featured-price">AED 1,800,000</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-lg-5 pb-2">
            <a href="https://range.ae/property/damac-safa-two-1">
              <div
                className="featured-img-3"
                style={{
                  backgroundImage:
                    'url("frontend/assets/images/property/img_1656664521.jpg") !important',
                }}
              >
                <div className="featured-img-gradient d-flex align-items-end">
                  <div className="p-3 pl-3">
                    <div className="featured-title">
                      DAMAC Safa Two by de GRISOGONO{" "}
                    </div>
                    <hr className="line-orange" />
                    <div className="featured-price">AED 750,000</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-7 pb-2">
            <a href="https://range.ae/property/six-senses-residences">
              <div
                className="featured-img-4"
                style={{
                  backgroundImage:
                    'url("frontend/assets/images/property/img_1656664970.jpg") !important',
                }}
              >
                <div className="featured-img-gradient d-flex align-items-end">
                  <div className="p-3 pl-3">
                    <div className="featured-title">Six Senses Residences</div>
                    <hr className="line-orange" />
                    <div className="featured-price">AED 9,400,000</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col link-blue-right text-right">
            <a href="https://range.ae/properties">View All Properties &gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
