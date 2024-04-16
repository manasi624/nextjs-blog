import { ShepherdOptionsWithType } from "react-shepherd";

export const steps: ShepherdOptionsWithType[] = [
  {
    id: "prathamesh",
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
      <p>This is Mansi's blog.</p>
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
    id: "search",
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
      element: ".search",
      on: "bottom",
    },
    text: "You can search here",
    cancelIcon: {
      enabled: true,
    },
  },
  {
    id: "card",
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
      element: ".card",
      on: "bottom",
    },
    text: ["This is blog post, you can click to open it"],
    cancelIcon: {
      enabled: false,
    },
  },
];

export default steps;