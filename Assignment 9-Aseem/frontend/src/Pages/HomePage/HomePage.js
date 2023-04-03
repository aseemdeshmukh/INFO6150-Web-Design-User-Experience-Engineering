import React from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Container } from "react-bootstrap";
import community from "../../Images/Community.png";

const HomePage = () => {
  return (
    <div>
      <MainScreen title="Bon Appetite" />
      <Container>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="features-box">
                <h3 class="mb-4">
                   Come and get your eats!!

                </h3>
                <p class="text-muted mb-4">
                  We bring professional chefs to your home to prepare delicious, customized meals at a fraction of the cost. Our plans include time with your chef, professional menu design & preparation. The price above does not include the cost of groceries.{" "}
                </p>
                <div class="mt-4"></div>
              </div>
            </div>
            <div class="col-lg-6 offset-lg-1">
              <div class="text-center mt-5 mt-lg-0">
                <img
                  src={community}
                  alt="Features"
                  class="img-fluid"
                  id="community-img"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
