import { ShepherdOptionsWithType } from "react-shepherd";

export const stepsBlog: ShepherdOptionsWithType[] = [
  {
    id: "first_element",
    buttons: [
      {
        classes: "tour-btn-secondary",
        text: "NO THANKS 👌",
        type: "cancel",
      },
      {
        classes: "tour-btn-primary",
        text: "GUIDE ME! 😱",
        type: "next",
      },
    ],
    classes: "tour-dialog",
    title: `
    <div class="font-caveat text-5xl">
      <p class="text-white">Welcome to Myblog!</p>
    </div>
    `,
    text: [
      `
      <div>
      <p><b>Blogstar </b> is minimalistic Reading blog.</p>
      <br/>
      <p>Created to keep you reading our blogs.</p>
      <br/>
      <p>do you need a guide?</p>
      </div>
      `,
    ],
    cancelIcon: {
      enabled: false,
    },
  },
  {
    id: "prevYear",
    buttons: [
      {
        classes: "tour-btn-secondary",
        text: "EXIT",
        type: "cancel",
      },
      {
        classes: "tour-btn-primary",
        text: "PREV",
        type: "back",
      },
      {
        classes: "tour-btn-primary",
        text: "NEXT",
        type: "next",
      },
    ],
    classes: "tour-dialog",
    attachTo: {
      element: ".first_element",
      on: "bottom",
    },
    text: ["You can Click here to go to login"],
    cancelIcon: {
      enabled: false,
    },
  },
  {
    id: "nextYear",
    buttons: [
      {
        classes: "tour-btn-secondary",
        text: "EXIT",
        type: "cancel",
      },
      {
        classes: "tour-btn-primary",
        text: "PREV",
        type: "back",
      },
      {
        classes: "tour-btn-primary",
        text: "NEXT",
        type: "next",
      },
    ],
    classes: "tour-dialog",
    attachTo: {
      element: ".logo",
      on: "bottom",
    },
    text: ["This is our logo"],
    cancelIcon: {
      enabled: false,
    },
  },
  {
    id: "todayCalendar",
    buttons: [
      {
        classes: "tour-btn-secondary",
        text: "EXIT",
        type: "cancel",
      },
      {
        classes: "tour-btn-primary",
        text: "PREV",
        type: "back",
      },
    ],
    classes: "tour-dialog",
    attachTo: {
      element: ".login",
      on: "bottom",
    },
    text: ["you can click on 'Get Started' here to login"],
    cancelIcon: {
      enabled: false,
    },
  }
];

export default stepsBlog;