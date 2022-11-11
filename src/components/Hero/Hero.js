import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopading>
<LeftSection>
  <SectionTitle main center>
    Welcome To <br/>
    My Personal Portafolio
  </SectionTitle>
  <SectionText>
  Full-Stack Web Developer with more than 5 years of experience in the development of high quality C#, .Net, Javascript, React js.

I think  I am optimistic, independent, practical, active and cheerful.

  </SectionText>
  <Button onClick={()=> window.location = "https://google.com"}>Learn More</Button>
</LeftSection>
 </Section>
);

export default Hero;