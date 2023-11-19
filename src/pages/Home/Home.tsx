import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import MembersSection from "../../components/MembersSection/MembersSection";
import BandBioSection from "../../components/BandBioSection/BandBioSection";
import ContactSection from "../../components/ContactSection/ContactSection";

type Props = {
  refs: {
    membersSectionRef: React.MutableRefObject<HTMLElement | null>;
    bioSectionRef: React.MutableRefObject<HTMLElement | null>;
    contactSectionRef: React.MutableRefObject<HTMLElement | null>;
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Home({ refs }: Props, _ref: unknown) {
  return (
    <>
      <HeroSection />
      <MembersSection refProp={refs.membersSectionRef} />
      <BandBioSection refProp={refs.bioSectionRef} />
      <ContactSection refProp={refs.contactSectionRef} />
    </>
  );
}

export default React.forwardRef(Home);
