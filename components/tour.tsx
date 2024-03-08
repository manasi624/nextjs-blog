import { useContext, useEffect } from "react";
import { ShepherdTour, ShepherdTourContext } from "react-shepherd";
import "shepherd.js/dist/css/shepherd.css";
import steps from "@/steps";

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    }
  },
  useModalOverlay: false
};

function TourInstance() {
  const tour = useContext(ShepherdTourContext);

  useEffect(() => {
    if (tour) tour.start();
  }, [tour]);

  return <></>;
}

export default function Tour() {
  return (
    <ShepherdTour steps={steps} tourOptions={tourOptions}>
      <TourInstance />
    </ShepherdTour>
  );
}
