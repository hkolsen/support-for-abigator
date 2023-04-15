import React from "react";
import styled from "styled-components";
import background from "./background.png";
import logo from "./logo.svg";
import venmo from "./Abigail_Venmo.jpeg";
import hero from "./hero-image.png";

function App() {
  return (
    <Wrapper>
      <Logo src={logo} alt="Support for Abigator" />
      <Hero>
        <LeftPanel>
          <Title>Support for Abigator</Title>
          <Subheader>Let's raise some mastectomy money!</Subheader>
          <Body>
            Wow! What a frickin' rollercoaster this life is! Here I am, going
            into year 2 of cancer treatment and feeling that financial pressure.
            Nick and I are still recovering (physically/emotionally/financially)
            from the first year of cancer treatment and as we get closer to my
            mastectomy date (4/21) we realized it's OK to ask for help. <br />
            <br />
            It's funny how hard it was to come to this decision, to just say hey
            &mdash; we don't got it on our own! <br />
            <br />
            So, if you have any $$$ to support our little family during this
            time, it would be gratefully appreciated. We are hoping to cover
            some of the mastectomy cost, the unpaid time I will be out of work,
            our insurance costs, a dog sitter for a few days directly after
            surgery, meal delivery for a few days, and some groceries. Any
            amount helps y'all and I appreciate you even if you don't have the
            financial resources to give right now!
            <br />
            <br />I have felt so much love, care, and healing vibrations being
            sent my way throughout this entire process and I can't express how
            much that has held me up on hard days. It is LEGIT because of my
            community that I've been able to handle all this overwhelm—because
            of YOU! Thank you for being our people.
            <br />
            <br />
            <Signature>Love, Abigail & Nick</Signature>
          </Body>
          <Body>
            <strong>You can also send a check:</strong>
            <br />
            Abigail Kelso
            <br />
            422 S Santa Rita Ave
            <br />
            Tucson, AZ 85719
          </Body>
        </LeftPanel>
        <RightPanel>
          <HeroImg src={hero} alt="Abigail with a bunny and donkey" />
          <ImageLink
            href="https://account.venmo.com/u/Abigator911"
            target="_blank"
          >
            <Venmo src={venmo} alt="Donate money on Venmo for Abigator" />
          </ImageLink>
          <Link href="https://account.venmo.com/u/Abigator911" target="_blank">
            Donate with Venmo
          </Link>
        </RightPanel>
      </Hero>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #000000;
  background-image: url(${background});
  background-size: contain;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
  background-repeat: repeat;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  height: auto;
  margin: 1em;
  max-width: 150px;
  width: 100%;
`;

const Hero = styled.section`
  background: #ffffff;
  margin: 1em auto;
  width: 100%;
  max-width: 800px;
  position: relative;
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;
  box-shadow: 10px 10px rgba(0, 0, 0, 1);
  padding: 15px 30px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    max-width: auto;
    width: 75%;
    margin: 0 auto;
  }
`;

const LeftPanel = styled.article`
  width: 60%;
  padding: 0 20px 0 0;
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 0;
  }
`;

const RightPanel = styled.article`
  width: 40%;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const HeroImg = styled.img`
  box-shadow: 5px 5px rgba(0, 0, 0, 1);
  width: 100%;
  margin: 0 0 10px;
`;

const ImageLink = styled.a``;

const Venmo = styled.img`
  max-width: 100%;
`;

const Title = styled.h1`
  font-family: "Lobster Two", cursive;
  font-size: 3em;
  font-weight: 600;
  background-image: linear-gradient(to left, #ba34bd, #10b6ac);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin: 0 0 0.25em;
`;

const Subheader = styled.h2`
  font-family: "Anuphan", sans-serif;
  font-size: 1.5em;
  color: #000000;
  font-weight: 600;
  margin: 0 0 0.25em;
`;

const Body = styled.p`
  font-family: "Anuphan", sans-serif;
  font-size: 1em;
  line-height: 1.5;
  margin: 0 0 1em;
  strong {
    font-weight: 600;
  }
`;

const Signature = styled.p`
  font-family: "Lobster Two", cursive;
  font-size: 1.5em;
`;

const Link = styled.a`
  background-image: linear-gradient(to left, #ba34bd, #10b6ac);
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 5px 5px rgba(0, 0, 0, 1);
  margin: 0;
  font-family: "Lobster Two", cursive;
  font-size: 1.5em;
  color: #ffffff;
  text-decoration: none;
  margin: -0.25em auto 1em;
  display: block;
  text-align: center;
  transition: all 150ms;
  :hover {
    transform: scale(1.25);
  }
`;

export default App;
