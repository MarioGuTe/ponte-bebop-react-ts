import { useRef } from "react";
import useFocusOnMount from "./useFocusOnMount";

function useCustomRef() {
  const membersSectionRef = useRef<HTMLElement | null>(null);
  const bioSectionRef = useRef<HTMLElement | null>(null);
  const contactSectionRef = useRef<HTMLElement | null>(null);

  useFocusOnMount(membersSectionRef);
  useFocusOnMount(bioSectionRef);
  useFocusOnMount(contactSectionRef);

  const refs = { membersSectionRef, bioSectionRef, contactSectionRef };

  return refs;
}

export default useCustomRef;
