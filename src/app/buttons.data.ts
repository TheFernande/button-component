import { IButtonProps } from "@/components/button-component";

type IButtonVariants = IButtonProps[];

const buttonLabel = "Button CTA";

const buttonVariantsA: IButtonVariants = [
  {
    key: `${buttonLabel}-primary-md`,
    label: buttonLabel,
    classNames: "button-md button-primary"
  },
  {
    key: `${buttonLabel}-primary-lg`,
    label: buttonLabel,
    classNames: "button-lg button-primary",
    withIcon: true,
    iconPosition: "left",
    iconColor: "#FFF"
  },
  {
    key: `${buttonLabel}-primary-xl`,
    label: buttonLabel,
    classNames: "button-xl button-primary",
    withIcon: true,
    iconPosition: "right",
    iconColor: "#FFF"
  },
  {
    key: `${buttonLabel}-primary-2xl`,
    label: buttonLabel,
    classNames: "button-2xl button-primary"
  },
  {
    key: `${buttonLabel}-primary-2xl`,
    label: buttonLabel,
    classNames: "button-2xl button-primary",
    withText: false,
    withIcon: true,
    iconSize: 24,
    iconColor: "#FFF"
  }
];

const buttonVariantsB: IButtonVariants = [
  {
    key: `${buttonLabel}-secondary-md`,
    label: buttonLabel,
    classNames: "button-md button-secondary"
  },
  {
    key: `${buttonLabel}-secondary-lg`,
    label: buttonLabel,
    classNames: "button-lg button-secondary",
    withIcon: true,
    iconPosition: "left",
    iconColor: "#000"
  },
  {
    key: `${buttonLabel}-secondary-xl`,
    label: buttonLabel,
    classNames: "button-xl button-secondary",
    withIcon: true,
    iconPosition: "right",
    iconColor: "#000"
  },
  {
    key: `${buttonLabel}-secondary-2xl`,
    label: buttonLabel,
    classNames: "button-2xl button-secondary"
  },
  {
    key: `${buttonLabel}-secondary-2xl`,
    label: buttonLabel,
    classNames: "button-2xl button-secondary",
    withText: false,
    withIcon: true,
    iconSize: 24,
    iconColor: "#000"
  }
];

const buttonVariantsC: IButtonVariants = [
  {
    key: `${buttonLabel}-tertiary-md`,
    label: buttonLabel,
    classNames: "button-md button-tertiary"
  },
  {
    key: `${buttonLabel}-tertiary-lg`,
    label: buttonLabel,
    classNames: "button-lg button-tertiary",
    withIcon: true,
    iconPosition: "left",
    iconColor: "#4338CA"
  },
  {
    key: `${buttonLabel}-tertiary-xl`,
    label: buttonLabel,
    classNames: "button-xl button-tertiary",
    withIcon: true,
    iconPosition: "right",
    iconColor: "#4338CA"
  },
  {
    key: `${buttonLabel}-tertiary-2xl`,
    label: buttonLabel,
    classNames: "button-2xl button-tertiary"
  },
  {
    key: `${buttonLabel}-tertiary-2xl`,
    label: buttonLabel,
    classNames: "button-2xl button-tertiary",
    withText: false,
    withIcon: true,
    iconSize: 24,
    iconColor: "#4338CA"
  }
];

const buttonVariantsD: IButtonVariants = [
  {
    key: `${buttonLabel}-linkColor-md`,
    label: buttonLabel,
    classNames: "button-md-linkColor button-linkColor"
  },
  {
    key: `${buttonLabel}-linkColor-lg`,
    label: buttonLabel,
    classNames: "button-lg-linkColor button-linkColor",
    withIcon: true,
    iconPosition: "left",
    iconColor: "#4338CA"
  },
  {
    key: `${buttonLabel}-linkColor-xl`,
    label: buttonLabel,
    classNames: "button-xl-linkColor button-linkColor",
    withIcon: true,
    iconPosition: "right",
    iconColor: "#4338CA"
  },
  {
    key: `${buttonLabel}-linkColor-2xl`,
    label: buttonLabel,
    classNames: "button-2xl-linkColor button-linkColor"
  },
  {
    key: `${buttonLabel}-linkColor-2xl`,
    label: buttonLabel,
    classNames: "button-2xl-linkColor button-linkColor",
    withText: false,
    withIcon: true,
    iconSize: 24,
    iconColor: "#4338CA"
  }
];

const buttonVariantsE: IButtonVariants = [
  {
    key: `${buttonLabel}-linkGray-md`,
    label: buttonLabel,
    classNames: "button-2xl-linkGray button-linkGray"
  },
  {
    key: `${buttonLabel}-linkGray-lg`,
    label: buttonLabel,
    classNames: "button-lg-linkGray button-linkGray",
    withIcon: true,
    iconPosition: "left",
    iconColor: "#525252"
  },
  {
    key: `${buttonLabel}-linkGray-xl`,
    label: buttonLabel,
    classNames: "button-xl-linkGray button-linkGray",
    withIcon: true,
    iconPosition: "right",
    iconColor: "#525252"
  },
  {
    key: `${buttonLabel}-linkGray-2xl`,
    label: buttonLabel,
    classNames: "button-2xl-linkGray button-linkGray"
  },
  {
    key: `${buttonLabel}-linkGray-2xl`,
    label: buttonLabel,
    classNames: "button-2xl-linkGray button-linkGray",
    withText: false,
    withIcon: true,
    iconSize: 24,
    iconColor: "#525252"
  }
];

const buttonVariantsF: IButtonVariants = [
  {
    key: `${buttonLabel}-destructive-md`,
    label: buttonLabel,
    classNames: "button-md button-destructive"
  },
  {
    key: `${buttonLabel}-destructive-lg`,
    label: buttonLabel,
    classNames: "button-lg button-destructive",
    withIcon: true,
    iconPosition: "left",
    iconColor: "#FFF"
  },
  {
    key: `${buttonLabel}-destructive-xl`,
    label: buttonLabel,
    classNames: "button-xl button-destructive",
    withIcon: true,
    iconPosition: "right",
    iconColor: "#FFF"
  },
  {
    key: `${buttonLabel}-destructive-2xl`,
    label: buttonLabel,
    classNames: "button-2xl button-destructive"
  },
  {
    key: `${buttonLabel}-destructive-2xl`,
    label: buttonLabel,
    classNames: "button-2xl button-destructive",
    withText: false,
    withIcon: true,
    iconSize: 24,
    iconColor: "#FFF"
  }
];

export {
  buttonVariantsA,
  buttonVariantsB,
  buttonVariantsC,
  buttonVariantsD,
  buttonVariantsE,
  buttonVariantsF
};
